import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-starting-hands-chart",
  title: "Mains de départ au poker : quelles mains jouer (et éviter) selon ta position",
  seoTitle: "Te coucher 80 % du temps ? — Quelles mains jouer au poker",
  desc: "La plupart de tes cartes perdent de l'argent. Les meilleures mains de départ au poker, quelles mains jouer selon ta position et en 6-max, lesquelles éviter.",
  tldr: "Sur les 169 types de mains de départ, seule une petite tranche du haut, environ 15 à 20 % des mains que tu reçois, est rentable pour un débutant. Les grosses paires (AA à TT) et AK relancent depuis n'importe quel siège ; plus tu parles tard, plus tu ouvres large, d'environ 13 % under the gun à environ 43 % au bouton (encore plus large en 6-max). Commence par une sélection de mains simplifiée et passe aux ranges préflop de solver une fois que « relancer ou se coucher » est devenu automatique.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-01",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🂡",
  tags: ["mains de départ poker", "quelles mains jouer au poker", "quelle main jouer au poker", "meilleures mains de départ poker", "quelle main ne pas jouer au poker", "classement main de départ poker", "mains à jouer au poker", "pire main de départ poker", "quelles mains jouer preflop"],
  image: "/images/holdem-starting-hands-chart-hero.webp",
  imageAlt: "Grille des mains de départ du Texas Hold'em avec les groupes Premium (AA KK QQ JJ AK), Fortes (TT 99 AQ KQ) et À coucher, de la position UTG jusqu'au bouton",
  content: `
Lors de ma toute première session en live, j'ai ramassé A♣ 4♦ et je me suis dit : « Un as, ça ne peut pas être si mauvais. »

J'ai payé une relance, raté le flop, payé encore, raté la turn. À la river, j'avais perdu 40 grosses blindes sans rien en main.

Voici le calcul inconfortable derrière ce coup : ==le Texas Hold'em compte 169 types de mains de départ distincts — et environ 80 % des mains que tu reçois devraient être couchées préflop.== Apprendre quelles mains jouer — et depuis quel siège — est le plus gros progrès qu'un débutant fait pendant son premier mois. La sélection des mains est la deuxième des [cinq décisions](/fr/blog/holdem-strategy) derrière chaque main gagnante : si tu la maîtrises, chaque street suivante devient plus simple.

Cette page réunit tout au même endroit : les 10 meilleures mains de départ, ce qui rend une main *bonne* au départ, les mains à jouer selon la position (9-max et 6-max), les ranges de solver face aux sélections simplifiées pour débuter, une fiche PDF à imprimer et un petit quiz pour te tester.

---

### Les mains de départ en chiffres

:::stripe
169 | Types de mains de départ distincts (1 326 combinaisons exactes)
~80 % | Des mains qu'un débutant devrait coucher préflop
~13 % → ~43 % | Range d'ouverture de UTG jusqu'au bouton (9-max)
~85 % | Fréquence à laquelle AA bat une main aléatoire
:::

---

## Les 10 meilleures mains de départ au poker, classées

Voici les meilleures mains de départ au poker — celles que tu devrais presque toujours relancer préflop, quel que soit ton siège à la table :

| Rang | Main | Pourquoi elle est forte |
|-----:|------|-----------------|
| 1 | AA | Meilleure main préflop — favorite à ~85 % contre une main aléatoire |
| 2 | KK | Ne perd que contre AA préflop — relance et surrelance quand même |
| 3 | QQ | Forte, mais réévalue quand un A ou un K tombe au flop |
| 4 | JJ | Premium — relance fort, ralentis face à beaucoup d'action sur des flops A/K/Q |
| 5 | TT | Main du top 5 — relance en premier, prudence face aux gros 3-bets |
| 6 | AKs | As-roi assortis — domine les autres grosses cartes, fait le tirage couleur max |
| 7 | AKo | AK dépareillés — relance depuis n'importe quelle position |
| 8 | AQs | AQ assortis — forte, mais couche-toi face aux gros 3-bets hors de position |
| 9 | KQs | KQ assortis — bonne en position tardive, plus délicate depuis UTG |
| 10 | AJs | AJ assortis — forte en position, couche-toi face à une forte résistance |

![Quatre mains de départ premium du Texas Hold'em — paire d'as, paire de rois, paire de dames et as-roi assortis — qui brillent en doré sur un feutre vert foncé](/images/holdem-starting-hands-premium.webp "Le niveau premium — des mains que tu peux relancer depuis n'importe quelle position")

==g:Avec les mains 1 à 5 (les paires servies), relance presque toujours et surrelance souvent préflop pour construire le pot.== Avec AK et AQ, l'objectif est de te retrouver en tête-à-tête, là où tes grosses cartes ont le maximum d'équité. Les chiffres à retenir : ==AK n'est jamais favori contre une paire servie, mais contre 22–QQ il n'est jamais loin derrière== — le fameux « flip ». AK dépareillé a environ 46–47 % contre 22–44, environ 45 % contre 55–99 et environ 43 % contre TT–QQ ; AK assorti ajoute à peu près 2,5 à 3 points à chacun (AKs contre 22, à environ 50 %, est ce qui ressemble le plus à un vrai pile ou face). Contre KK et AA, l'écart est bien plus grand — mais contre toutes les paires en dessous, relancer et surrelancer avec AK reste correct.

Pocket rockets, cowboys, big slick — si l'argot de table est nouveau pour toi, le [jargon du poker](/fr/blog/holdem-glossary) couvre tous les surnoms de mains. Et si tu n'es pas sûr de ce qui bat quoi une fois le board posé, revois d'abord le [classement des mains au poker](/fr/blog/holdem-hand-rankings).

---

## Qu'est-ce qu'une bonne main de départ au poker ?

Les bonnes mains de départ au poker ont un point commun : ==elles font des mains fortes *à cinq cartes* plus souvent que les mains qu'elles rencontrent.== Les hautes paires partent devant. Les grosses cartes assorties font la top paire avec le meilleur kicker, la couleur max et des quintes hautes. Tout le reste a besoin d'aide — et une main qui a besoin d'aide ne vaut le coup que si cette aide coûte peu.

Classées par niveaux, les bonnes mains de départ au poker ressemblent à ceci :

| Niveau | Exemples | Comment la jouer |
|------|----------|----------------|
| Premium | AA, KK, QQ, JJ, AKs, AKo | Relance depuis n'importe quelle position, surrelance agressivement |
| Fortes | TT–88, AQ, AJs, ATs, KQs | Relance depuis la plupart des positions, ralentis face aux gros 3-bets |
| Spéculatives | Petites paires (77–22), connecteurs assortis (JTs, T9s, 98s), as assortis (A2s–A9s) | Surtout en position tardive — il leur faut des flops bon marché et la position (une range UTG complète garde 77) |
| ==r:Poubelle== | As faibles dépareillés (A4o), roi-déchet (K3o), petites cartes dépareillées | ==r:Couche-toi préflop — ces mains te coûtent des jetons à chaque session== |

:::tip[Le niveau n'est que la moitié de la réponse. Une main spéculative est « bonne » au bouton et mauvaise under the gun — c'est pour ça que la vraie grille s'organise par position, pas par main.]:::

---

## Quelles mains jouer selon la position (UTG → bouton) ? La version 9-max

==Ta position à la table change les mains qui sont rentables.==

Depuis une position précoce, beaucoup de joueurs parlent encore après toi — il te faut donc des mains plus fortes. Depuis le bouton, tu parles en dernier à chaque street après le flop, ce qui te permet de jouer une range bien plus large de façon rentable.

Voici les mains de départ à jouer sur une table 9-max standard — l'équivalent en texte du tableau des mains de départ par position :

| Position | Range d'ouverture | Mains clés à jouer |
|----------|-----------|-------------------|
| UTG (précoce) | Top ~13 % | TT+, AJs+, AKo, KQs |
| MP (milieu) | Top ~17 % | Ajoute 88, 99, ATs, KJs, QJs, JTs |
| CO (cut-off) | Top ~27 % | Ajoute 55–77, A9s+, KTs+, connecteurs assortis (T9s, 98s) |
| BTN (bouton) | Top ~43 % | Ajoute 22–44, A2s+, broadways assorties, mains dépareillées plus faibles |

La règle : ==plus tu parles tard, plus tu peux ouvrir de mains de façon rentable==. Comme le bouton parle toujours en dernier après le flop, c'est le siège le plus précieux du poker.

Deux choses que ce tableau ne dit **pas**. Le pourcentage est une part des 1 326 combinaisons de départ, donc ~13 % représente environ 172 d'entre elles — c'est la largeur avec laquelle un régulier solide ouvre under the gun, pas celle que cette page demande à un débutant. Et les mains à côté de chaque siège sont le **noyau** : la ligne UTG ci-dessus fait 58 combinaisons, et chaque ligne en dessous ne liste que ce que ce siège ajoute. Les sections suivantes élargissent ce noyau à mesure que tu progresses ; la dernière marche jusqu'aux ~13 % complets appartient aux ranges de solver plus bas.

Regarde comment la range d'ouverture s'élargit siège après siège — UTG, MP, CO et BTN (la grille complète 13×13 des 169 mains se trouve dans l'outil lié juste en dessous) :

:::rangechart:::

Tu le veux comme outil autonome, avec des ranges détaillées par siège ? Utilise le [tableau des mains de départ par position](/fr/hand-chart). Pour le détail de chaque nom de siège (UTG, HJ, CO, BTN, SB, BB), lis le [guide des positions au poker](/fr/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp").

### Position précoce (UTG) : la sélection la plus serrée

UTG est le siège le plus difficile à jouer. ==r:Huit joueurs parlent encore derrière toi.== Toute main que tu ouvres ici doit tenir face à des ranges fortes.

Le noyau de la range UTG (une range complète de ~13 % s'élargit aux paires moyennes comme 77–99, à davantage de broadways assorties et à quelques mains dépareillées comme AQo à mesure que tu progresses) :

- Paires servies : **TT, JJ, QQ, KK, AA**
- Assorties premium : **AKs, AQs, AJs, KQs**
- Dépareillées premium : **AKo** (et parfois AQo)

Les mains qui ont l'air fortes mais qui sont des folds ou des mains limites depuis UTG :

- **KJo, QJo, KTo** — trop de scénarios où tu es dominé par les joueurs qui paient une ouverture UTG
- **77, 88** — très bien au bouton ; depuis UTG elles sont à la limite extérieure de la range complète de ~13 % vue plus haut, donc ce sont les premières paires à sauter quand la table est dure (les mains dépareillées dominées citées juste avant partent avant elles)
- **As assortis faibles (A2s–A7s)** — garde-les pour la position tardive

### Position tardive (cut-off et bouton) : la sélection la plus large

Le bouton est le meilleur siège du poker. ==g:Tu parles en dernier au flop, à la turn (le tournant) et à la river (la rivière), à chaque main.== Cet avantage te permet d'ajouter de façon rentable :

- **Petites paires servies (22–66)** — en espérant toucher un brelan servi (set) au flop
- **N'importe quel as assorti (A2s–A9s)** — potentiel de tirage couleur max
- **Connecteurs assortis (T9s, 98s, 87s)** — des mains bon marché, à fortes cotes implicites
- **Broadways dépareillées plus faibles (KTo, QJo)** — seulement en position tardive, jamais en position précoce

Règle clé : ==comme mains d'ouverture, ces mains spéculatives ont besoin de la position pour être rentables==. Et si un joueur UTG relance devant toi, la plupart partent directement à la poubelle — tu paierais une relance pour jouer une main spéculative contre une range forte, et le flop bon marché dont elle a besoin a disparu.

---

## Quelles mains jouer en 6-max ? Ce qui change

La plupart des parties de cash game en ligne se jouent en 6-max, et la grille ne bouge que dans un sens : ==plus large==. Retire les trois sièges les plus serrés d'une table 9-max et le nouveau premier siège « remonte » en pratique — les sièges suivants gardent les mêmes joueurs derrière eux, mais la table joue globalement plus large. Le premier joueur à parler en 6-max ouvre face à cinq adversaires, pas huit — donc ==g:UTG en 6-max se joue à peu près comme MP en 9-max== (~15–17 % au lieu de ~13 %).

:::compare
9-max (table pleine) | 6-max
9 sièges — trois positions précoces avant MP | 6 sièges — l'UTG ici est en réalité le lojack
Le premier siège ouvre ~13 % des mains | Le premier siège ouvre ~15–17 % des mains
Les blindes reviennent une fois toutes les 9 mains — se coucher coûte peu | Les blindes reviennent 1,5x plus vite — tout coucher fait fondre ton stack
AJo, KQo = fold depuis le premier siège | AJo, KQo = ouvertures standard depuis le premier siège
Mains spéculatives surtout en CO/BTN | Mains spéculatives jouables un siège plus tôt
:::

L'erreur à éviter, c'est de jouer une grille 9-max dans une partie 6-max : tu couches des mains clairement rentables et les blindes te dévorent. L'erreur inverse — des ranges 6-max sur une table pleine — est la façon dont les as faibles se retrouvent dominés toute la soirée. Une fois la grille devenue automatique, le [jeu en position](/fr/blog/holdem-position-play) est la compétence qui transforme ces ranges plus larges en vrai profit : voler, isoler et mettre la pression sur les blindes depuis les sièges qui le permettent.

---

## Quel pourcentage de mains de départ faut-il jouer ?

Sur une session complète, ==un objectif solide pour un débutant est de jouer environ 15 à 20 % des mains que tu reçois== — autrement dit, de te coucher préflop 80 à 85 % du temps. Ce n'est pas un chiffre unique : les chiffres par siège ci-dessus — ~13 % depuis UTG, ~17 % depuis MP, ~27 % depuis le cut-off, ~43 % depuis le bouton — indiquent la largeur avec laquelle tu *ouvres un pot où personne n'est entré*. Ta moyenne de session tombe plus bas que la moyenne brute de ces chiffres, parce que tu fais souvent face à une relance (où tu continues avec bien moins de mains) et que tu passes beaucoup de tours coincé dans les sièges précoces et aux blindes.

:::stat[15–20 %] des mains reçues — une range saine pour un débutant en 9-max:::

Si tu joues 30 à 40 % des mains sur une table pleine, tu ne « vois pas plus de flops » — tu paies du rake et des cotes implicites inversées sur des mains que la grille t'avait déjà dit de coucher. Compte honnêtement pendant une session ; le chiffre est presque toujours plus élevé que ce que tu ressens.

Une précision de périmètre : on parle ici du pourcentage de ta *range* à jouer, pas de la fréquence à laquelle des mains précises gagnent les unes contre les autres. Pour les taux de victoire main contre main (AK contre QQ, paire contre deux overcards, etc.), consulte le [guide des probabilités au poker](/fr/blog/holdem-probability) — c'est son rôle, pas celui de cette grille.

---

## Faut-il débuter avec les mains d'un solver ou une sélection simplifiée ?

Je garde des sorties de solver ouvertes quand j'étudie, et pourtant je donne toujours d'abord une grille simplifiée à chaque débutant. Ce sont deux outils différents, et savoir lequel utiliser vaut plus que n'importe laquelle des deux grilles prise seule.

**Les ranges préflop de solver** sortent des solvers (PioSOLVER, GTO Wizard et compagnie). Elles sont construites pour être aussi proches que possible de l'inexploitable — et elles sont aussi pleines de fréquences mixtes : ouvre cette main 25 % du temps, couche-la 75 %, 3-bet cette combinaison mais seulement avec ces enseignes-là. **Les sélections pour débutants** — comme celle de cette page — compressent tout ça en une seule action claire par main.

:::compare
Ranges préflop de solver | Sélection simplifiée pour débutant
Fréquences mixtes — relance 25 % / fold 75 % du temps | Une seule action claire par main — relancer ou se coucher
Suppose que les adversaires jouent eux aussi presque parfaitement | Suppose que les adversaires font des erreurs (c'est le cas)
Construite pour une profondeur de stack, un rake et un format précis | Robuste dans les parties live et petites limites habituelles
Idéale pour : réguliers en ligne, sessions d'étude, révision de ranges | Idéale pour : ta première année, le live, construire ta discipline
Mal appliquée = des décisions qui semblent aléatoires et que tu ne sais pas expliquer | Un peu « trop serrée » — le défaut le moins cher du poker
:::

Voici pourquoi apprendre par cœur des grilles de solver sans comprendre se retourne contre toi : les fréquences GTO sont une défense contre des adversaires parfaits. Tes adversaires aux petites limites paient trop, se couchent trop rarement et ne font jamais de 3-bet léger — contre eux, les bluffs soigneusement équilibrés du solver rapportent *moins* que le simple fait de relancer les bonnes mains et de coucher la poubelle. Tu finis par faire des coups à fréquence mixte que tu ne sais pas expliquer, dans des parties où le coup simple rapporte plus. ==g:Apprends la sélection simplifiée jusqu'à ce que « relancer ou se coucher » soit automatique ; ajoute les ranges préflop de solver quand tu passes en ligne ou que tu commences à étudier sérieusement.== Le pont entre les deux, c'est de comprendre [l'équité au poker](/fr/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") — le calcul de part de victoire sur lequel reposent les EV des solvers.

---

## Quelle main ne pas jouer au poker ? Les pires mains de départ

Les pires mains de départ au poker ne sont pas les déchets évidents comme 7-2 — personne n'a besoin d'une grille pour coucher ça. Les plus chères sont les mains qui *ont l'air* jouables et qui perdent régulièrement des jetons au fil des sessions :

| Type de main | Pourquoi elle perd | Ce que pensent les débutants |
|-----------|-------------|---------------------|
| ==r:As faibles (A2o–A8o)== | Fait la deuxième meilleure paire face à de meilleurs as | « J'ai un as, ça doit être bon » |
| Petits connecteurs dépareillés (76o, 65o) | Touche rarement proprement, difficile à jouer quand ça touche | « Ça peut faire une quinte » |
| Roi-déchet dépareillé (K3o, K4o) | Dominé par tous les meilleurs rois | « Un roi, c'est une grosse carte » |
| N'importe quelles deux cartes assorties | Ne fait couleur à la river que ~6,4 % du temps (en touche une au flop ~0,8 %) | « Mais elles sont assorties » |

![Le piège de l'as faible au Texas Hold'em — A♣ 4♦ entouré de rouge comme main perdante, dominée par A♠ K♦ en doré](/images/holdem-starting-hands-weak-ace-trap.webp "Les as faibles ont l'air forts mais restent dominés — couche-les préflop")

==r:L'erreur la plus chère des débutants, c'est de payer des relances avec des as faibles== comme le A♣ 4♦ de l'introduction. Quand tu touches enfin ta paire d'as, tu es souvent deuxième derrière A♠ K♦ ou A♥ Q♦ — et tu perds un gros pot convaincu d'avoir la top paire. Tu l'as. Eux aussi, avec un meilleur kicker.

(Et la main qu'on désigne en général comme la pire du poker ? 7-2 dépareillé, même si en équité brute contre une main aléatoire 3-2 dépareillé est légèrement plus faible, environ 32 % contre 35 %. Plus de détails sur 7-2 et la fameuse « règle du 7-2 » dans la FAQ ci-dessous.)

---

## La fiche des mains de départ à imprimer (PDF)

Une grille ne sert que si elle est sous tes yeux au moment où ça compte. Pour les home games et les sessions d'étude, on a rendu le tout imprimable :

**[Télécharge la fiche gratuite des mains de départ à imprimer (PDF, en anglais)](/downloads/poker-starting-hands-chart.pdf)** — une page : les ouvertures 9-max par position plus l'ajustement 6-max en une ligne, au format antisèche. Imprime-la, ou garde-la ouverte sur ton téléphone entre deux mains.

Ensuite, utilise-la à la lettre, à chaque main, pendant tes 20 premières sessions et plus :

:::steps
Regarde d'abord ta position | Avant même de regarder tes cartes, repère où tu es assis par rapport au bouton
Cherche tes cartes dans la sélection | Trouve ta main dans la range de cette position
Relance ou couche-toi | Évite de suivre (le [limp](/fr/blog/holdem-limping)) comme action par défaut
Couche tout le reste | Même quand ça te paraît trop serré — surtout à ce moment-là
:::

==g:C'est ennuyeux. C'est justement le but.== Une sélection préflop serrée-agressive est la base de tous les styles gagnants, des cash games pour débutants jusqu'aux tournois à gros enjeux.

---

## Sauras-tu trouver la bonne décision ? Le quiz préflop

Trois spots de la grille. Décide avant de regarder les réponses :

**1. En 9-max, tu es UTG avec A♠ J♦ (dépareillés).** Relancer ou se coucher ?
→ ==r:Se coucher.== AJo ne passe pas la barre UTG — il est trop souvent dominé par les mains qui paient une ouverture UTG. AJ*s* ouvre ; AJo attend un siège plus tardif.

**2. Au bouton, tout le monde se couche jusqu'à toi, 7♠ 6♠.** Relancer ou se coucher ?
→ ==g:Relancer.== Les connecteurs assortis sont en plein dans la range bouton de ~43 % — c'est exactement le siège d'où ils sont rentables.

**3. En 6-max, le cut-off relance, tu es au bouton avec A♦ 4♣.** Suivre, relancer ou se coucher ?
→ ==r:Se coucher.== Un as faible dépareillé face à une relance, c'est la main de l'introduction qui recommence — dominé quand il touche, sans valeur quand il rate.

:::quiz:::

Tu as eu les trois ? Essaie le [quiz complet de 10 questions sur les mains (en anglais)](/en/quiz) — les cinq meilleures cartes parmi sept, contre la montre.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-hand-rankings | Classement des mains au poker | /images/holdem-hand-rankings-hero.webp
/fr/blog/holdem-probability | Probabilités au poker : le tableau des cotes | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Quelle est la meilleure main de départ au poker ?**

A. La paire d'as (AA) est la meilleure main de départ au poker. Préflop, les as gagnent environ 85 % du temps contre une main aléatoire. Par défaut, relance et surrelance avec les as — l'objectif est de construire un gros pot en tant que favori statistique.

**Q. Quelles sont les mains à jouer au poker ?**

A. Les bonnes mains de départ au poker sont les paires premium (AA–TT), les gros as (AK, AQ) et les broadways assorties fortes (KQs, AJs) — le cœur des ~15–20 % de mains reçues que joue un débutant solide (ces groupes premium à eux seuls ne représentent qu'environ 5 % de toutes les mains de départ). Les mains spéculatives comme les petites paires et les connecteurs assortis se jouent mieux en position tardive.

**Q. Combien y a-t-il de mains de départ au poker ?**

A. Il existe 169 types de mains de départ distincts (13 paires, 78 assorties, 78 dépareillées) sur 1 326 combinaisons exactes de deux cartes. Le calcul derrière ces chiffres se trouve dans le [guide des probabilités au poker](/fr/blog/holdem-probability).

**Q. C'est quoi la règle du 7-2 au poker ?**

A. La règle du 7-2 est un jeu annexe maison, pas une règle officielle du poker : si un joueur gagne un pot avec 7-2 dépareillés — la main que la plupart des joueurs considèrent comme la pire — chaque autre joueur lui paie une petite prime. Elle existe uniquement pour pimenter les home games et les parties entre amis en récompensant un bluff scandaleux.

**Q. Quelle est la pire main de départ au poker ?**

A. 7-2 dépareillé est largement considéré comme la pire main de départ au poker. Les cartes sont trop éloignées pour faire une quinte ensemble, trop basses pour gagner souvent sans s'améliorer, et même toucher une paire te laisse avec une main faible et un mauvais kicker.

**Q. Un débutant doit-il utiliser les ranges préflop de solver ?**

A. Pas au début. Les ranges préflop de solver utilisent des fréquences mixtes conçues pour être difficiles à exploiter, même par des adversaires forts — c'est trop pour les parties de débutants, où une sélection simplifiée « relancer ou se coucher » rapporte davantage. Apprends la sélection simple jusqu'à ce qu'elle soit automatique, puis ajoute les ranges de solver quand tu étudies ou que tu montes de limite en ligne.

**Q. Être assorti (suited), ça change vraiment quelque chose ?**

A. Être assorti ajoute environ 2 à 3 points de pourcentage d'équité par rapport à la même main dépareillée (AKs fait 67 % contre une main aléatoire ; AKo, 65 %) — c'est significatif, mais ce n'est pas une raison de jouer une mauvaise main. Deux cartes assorties ne font couleur à la river que ~6,4 % du temps (et un tirage couleur au flop se complète environ 35 % du temps d'ici la river). Une poubelle assortie reste une poubelle.

**Q. Faut-il toujours se coucher avec une petite paire comme 22 ou 33 ?**

A. Pas toujours — c'est la position qui décide. Depuis le cut-off ou le bouton, les petites paires valent le coup pour le « set mining » : tu touches un brelan servi ou mieux au flop environ 11,8 % du temps (à peu près 1 fois sur 8,5). Depuis une position précoce, elles sont difficiles à jouer de façon rentable et se couchent en général.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pilier</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Classement des mains au poker — de la meilleure à la pire</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les 10 mains expliquées avec probabilités et exemples</div>
  </a>
  <a href="/fr/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Positions</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les positions au poker : de UTG au bouton</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi la position change les mains à jouer</div>
  </a>
  <a href="/fr/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Classement des mains</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kicker et règles d'égalité au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Même paire, résultat différent — le kicker tranche</div>
  </a>
</div>
`.trim(),
};
