import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-game-order",
  title: "Ordre du jeu au poker : qui parle en premier, des blindes au showdown",
  seoTitle: "À qui de parler ? — Ordre du jeu au poker, flop turn river",
  desc: "Tu hésites sur « à qui de jouer » ? L'ordre du jeu au poker Texas Hold'em : blindes, préflop, flop, turn, river, showdown et qui parle en premier.",
  tldr: "Préflop, c'est le joueur à gauche de la grosse blinde qui parle en premier. Au flop, à la turn et à la river, c'est le premier joueur encore en jeu à gauche du bouton, en général la petite blinde (en heads-up, c'est l'inverse). Une main suit toujours le même ordre : blindes, cartes fermées, préflop, flop, turn, river, showdown, avec jusqu'à 4 tours d'enchères.",
  category: "rules",
  date: "2026-06-10",
  updated: "2026-10-08",
  masterUpdated: "2026-10-01",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "🎬",
  image: "/images/blog-holdem-game-flow.webp",
  imageAlt: "Schéma de l'ordre du jeu au Texas Hold'em — les six étapes : blindes, préflop, flop, turn, river et abattage",
  tags: ["flop turn river", "ordre de jeu poker", "qui commence au poker", "preflop poker", "river poker", "bouton dealer poker", "deroulement partie de poker"],
  content: `
Tout le monde se pose la même question en s'asseyant pour sa première partie de Texas Hold'em : ==r:*« Attends — c'est à qui de parler, et quand est-ce que je mets des jetons ? »*== Tu sais qu'on va te distribuer des cartes. Ce que tu ne sais pas encore, c'est quand poser ta blinde (blind), quand miser, quand les cartes suivantes arrivent, et comment on désigne vraiment le gagnant à l'abattage (showdown).

Ce guide, c'est **l'ordre du jeu** pas à pas : blindes, préflop, flop, turn (le tournant), river (la rivière), abattage, et qui parle en premier à chaque étape. Si tu pars de zéro et que tu veux le pack complet du débutant — règles, jetons, classement des mains, première stratégie et un PDF imprimable — commence par les [règles du Texas Hold'em pour débutants](/fr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp"). Reviens ensuite ici pour le déroulement détaillé d'une main.

---

### Une main de poker en 15 secondes

On pose les blindes (mises obligatoires) → chaque joueur reçoit deux **cartes fermées** → tour d'enchères **préflop** → le donneur retourne les trois cartes du **flop** → enchères → on ajoute la carte de la **turn** → enchères → on retourne la dernière carte, **la river** → enchères → les joueurs encore en jeu passent à l'abattage → la meilleure main de cinq cartes l'emporte.



---

## C'est quoi le Texas Hold'em, en deux mots ?

Le Texas Hold'em est la variante de poker la plus jouée au monde : chaque joueur reçoit deux cartes fermées et partage cinq cartes communes avec les autres. Tu formes ta meilleure main de cinq cartes à partir de ces sept cartes, et la main se joue toujours dans le même ordre, des blindes jusqu'à l'abattage.

Du Main Event des WSOP à la partie entre amis du samedi soir, quand on dit « poker », on parle presque toujours de Hold'em.

La règle de base est simple : tu construis ta **meilleure main de cinq cartes** avec **tes deux cartes fermées et les cinq cartes communes**. La chance distribue les cartes, mais comprendre l'ordre du jeu — et prendre la bonne décision à chaque étape — c'est ce qui sépare les gagnants de tous les autres.

---

## Avant la donne : le bouton (dealer) et les blindes

Avant la moindre carte, deux éléments organisent chaque main : le bouton du donneur, qui fixe l'ordre de parole et avance d'un siège dans le sens des aiguilles d'une montre après chaque main, et les blindes, deux mises obligatoires posées par les deux joueurs assis à gauche du bouton. Sans elles, personne n'aurait de raison de se battre pour le pot.

Le **bouton du donneur (le « bouton », marqué D)** est un disque rond qui indique qui « donne » pour cette main. Même avec un croupier professionnel, c'est le bouton qui fixe l'ordre des enchères, et il avance normalement d'un siège après chaque main (la règle du bouton mort, ou dead button, est l'exception).

Les **blindes** sont des mises obligatoires posées avant la distribution. Sans elles, tout le monde pourrait checker et se coucher gratuitement ; ==g:les blindes mettent de l'argent au milieu et donnent aux joueurs une raison de se battre==. (Tu découvres le sujet ? Regarde exactement [comment fonctionnent la petite et la grosse blinde](/fr/blog/holdem-blind-meaning).)

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Blinde | Position | Exemple |
|:---|:---|:---:|
| Petite blinde (SB) | Premier siège à gauche du bouton | 1 000 |
| Grosse blinde (BB) | Deuxième siège à gauche du bouton | 2 000 |

</div>

À deux joueurs seulement, c'est le bouton qui pose lui-même la petite blinde — c'est la configuration de la main complète décortiquée plus bas.

Les blindes ne sont pas qu'un droit d'entrée — ==elles sont le point de départ de la position et de la stratégie==.

---

## Étape 1 — Le préflop : c'est quoi « under the gun » ?

Une fois les blindes posées et les cartes fermées distribuées, le joueur assis à gauche de la grosse blinde, appelé under the gun (UTG), parle en premier préflop. La parole tourne ensuite dans le sens des aiguilles d'une montre jusqu'à la grosse blinde, qui parle en dernier. À ton tour, tu choisis de te coucher, de suivre ou de relancer.

Dès que les blindes sont en place, le donneur distribue à chaque joueur deux **cartes fermées**, faces cachées. Toi seul peux les voir, et le tour d'enchères **préflop** commence.

Concrètement, à ton tour, tu choisis l'une de ces options :

- **Se coucher (fold)** — abandonner la main et jeter ses cartes (muck). Tu ne perds rien de plus, mais tu ne gagnes rien non plus.
- **Suivre (call)** — égaler la mise en cours (préflop, c'est la grosse blinde).
- **Relancer (raise)** — miser plus que la grosse blinde pour mettre la pression sur tes adversaires.
- **3-bet (surrelance)** — une relance par-dessus la relance de quelqu'un d'autre. Un signal de main forte.

==r:La plupart des débutants jouent presque toutes les mains « juste pour voir un flop ». C'est l'habitude la plus coûteuse du poker.== ==g:**Les bons joueurs se couchent avec la plupart de leurs mains préflop et n'en jouent qu'environ 15 à 25 %.**==

### Quelles mains jouer quand on débute ?

- **Premium :** A♠A♥ (paire d'as), K♠K♥, Q♠Q♥, J♠J♥
- **Fortes :** A♠K♥ (« Big Slick »), A♠Q♥, 10♠10♥, 9♠9♥
- **Selon la situation :** A♠J♥, 8♠8♥, K♠Q♥, K♠J♥

Celles que tu peux vraiment ouvrir dépendent de ton siège. Pour le tableau complet des 169 mains, découpé par position, regarde [quelles mains jouer selon ta position](/fr/blog/holdem-starting-hands-chart).

---

## Étape 2 — Qu'est-ce que le flop au poker ?

Le flop, ce sont les trois premières cartes communes que le donneur retourne au milieu de la table une fois le tour préflop terminé. Avec tes deux cartes fermées, tu lis déjà une vraie main de cinq cartes. Un deuxième tour d'enchères s'ouvre alors, et c'est le premier joueur encore en jeu à gauche du bouton qui parle.

C'est le **flop** : ces trois cartes ouvrent le board (les cartes communes), que tout le monde partage.

Avec tes deux cartes fermées plus les trois du board, regarde deux choses en même temps :

- **Ce que tu as maintenant** — une paire, une double paire, ou rien pour l'instant.
- **Ce que tu peux encore toucher** — un **tirage** couleur (flush) ou quinte (suite) qui pourrait se compléter sur les tours suivants.

![Infographie des trois streets du Texas Hold'em — un flop K♥ 7♦ 2♣, la turn 9♠ et la river Q♥](/images/blog-holdem-card-stages.webp "Les streets : trois cartes au flop, puis une à la turn et une à la river")

À partir du flop, le **check** est ouvert à tout le monde (préflop, seul le joueur dont la blinde — ou le straddle (overblind), une blinde volontaire posée avant la donne — constitue la mise en cours peut checker). Si personne n'a encore misé, tu peux checker pour passer la parole sans mettre de jetons. Mais si un adversaire mise après ton check, tu devras suivre, relancer ou te coucher.

---

## Étape 3 — C'est quoi la turn (le tournant) au poker ?

La turn est la quatrième carte commune, retournée après le tour d'enchères du flop. Le board compte alors quatre cartes et un troisième tour d'enchères commence, toujours par le premier joueur encore en jeu à gauche du bouton. C'est souvent le tour décisif : tes tirages se complètent ou non, et tu dois décider si ta main mérite d'aller jusqu'à la river.

En anglais, on appelle aussi la **turn** *fourth street*. Les questions à te poser à ce moment-là :

- Ton tirage quinte ou couleur est-il rentré ?
- Que disent les actions préflop et au flop de ton adversaire sur sa range ?
- Cette main vaut-elle la peine d'être emmenée jusqu'à la river ?

==r:Si tu checkes passivement à la turn puis que tu envoies soudain une grosse mise à la river, les adversaires attentifs y lisent de la faiblesse.== ==g:**Avec une main forte, mise à la turn pour faire grossir le pot**== tant que ton adversaire est encore prêt à suivre.

---

## Étape 4 — C'est quoi la river au poker ?

La river est la cinquième et dernière carte commune, retournée après le tour d'enchères de la turn. Les cinq cartes du board sont alors visibles et plus aucune information nouvelle n'arrivera. Le quatrième et dernier tour d'enchères s'ouvre, puis, s'il reste au moins deux joueurs, la main se termine à l'abattage.

En anglais, on appelle aussi la **river** *fifth street*.

Les erreurs classiques à la river :

- **Suivre jusqu'au bout avec une main faible** — le piège du « tant qu'à faire, j'en suis déjà là ».
- **Checker passivement une main forte** — tu offres un abattage gratuit à ton adversaire.
- **Tenter un bluff surprise à la river** — si tu as été passif sur tous les tours précédents, une grosse mise à la river raconte rarement une histoire crédible.

La river, c'est là que tu règles toute la main. Pèse la force de ta main, la façon de miser de ton adversaire et le board complet, puis prends ta décision finale.

### Flop, turn, river : comment dit-on en français ?

Bonne nouvelle : pas de nouveau vocabulaire à apprendre. En français aussi, on dit tout simplement le flop, la turn et la river, comme en anglais. Tu croiseras aussi des formes plus anciennes, « le tournant » pour la turn et « la rivière » pour la river : elles désignent exactement les mêmes cartes. Dans ce guide, on s'en tient à flop, turn et river.

---

## Étape 5 — Le showdown (l'abattage) : la meilleure main de 5 cartes gagne

L'abattage arrive quand au moins deux joueurs sont encore en jeu après le dernier tour d'enchères, celui de la river. Chacun forme sa meilleure main de cinq cartes avec ses deux cartes fermées et les cinq cartes communes, et la meilleure main remporte le pot. En cas d'égalité parfaite, le pot est partagé.

![Infographie d'un abattage au poker — sur un board 10♣ 7♥ J♦ 4♠ 9♣, la paire d'as A♥ A♦ bat la paire de rois K♥ K♣](/images/blog-holdem-showdown.webp "À l'abattage, les joueurs restants retournent leurs cartes — ici une paire d'as bat une paire de rois et remporte le pot")

Les règles de l'abattage :

- Seules comptent les **cinq meilleures cartes** de chaque joueur, prises parmi les sept disponibles (ses deux cartes fermées + les cinq du board).
- Tu n'es pas obligé d'utiliser tes deux cartes fermées — tu peux n'en utiliser qu'une, voire jouer le board (aucune) si c'est ta meilleure combinaison de cinq.
- Le joueur qui a fait la dernière action agressive (mise ou relance) montre en premier ; si la river a été checkée par tout le monde, c'est le premier joueur actif à gauche du bouton qui montre en premier.
- Un joueur battu peut en général simplement **jeter ses cartes** sans les montrer. Deux exceptions en tournoi : dès qu'un joueur a choisi de faire tapis (all-in) et que les enchères sont terminées, toutes les mains sont retournées (TDA 2024 Rule 16 · WSOP Tournament Rule 70) ; et un joueur qui a misé à la river et a été suivi doit montrer si le joueur qui a suivi — qui a encore ses cartes en main ou les a déjà étalées — demande à voir sa main (TDA 2024 Rule 18-B).
- Les mains identiques **se partagent le pot** (« chop ») à parts égales.

Qui doit montrer en premier, quand tu peux jeter tes cartes, et l'étiquette à respecter (le slow roll : faire durer exprès avant de montrer une main gagnante) sont détaillés dans les [règles de l'abattage](/fr/blog/holdem-showdown-rules).

---

## Qui parle en premier au poker ? L'ordre de parole, tour par tour

**Deux sièges se partagent le mot « premier », et tout dépend du moment : avant ou après le flop. Avant le flop, c'est UTG, juste à gauche de la grosse blinde, parce que les blindes ont déjà mis de l'argent et parlent en dernier. Dès que le flop tombe, ce privilège disparaît : la parole repart du premier joueur encore en jeu à gauche du bouton, et le bouton clôt chaque tour.**

« C'est à qui de parler ? » n'a donc pas la même réponse avant et après le flop — et ce simple basculement est le moteur de toute la stratégie de position.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tour | Premier de parole | Dernier de parole |
|------|------|------|
| Préflop | Joueur à gauche de la grosse blinde (« UTG ») | Grosse blinde |
| Flop | Petite blinde (ou premier joueur encore en jeu à gauche du bouton) | Bouton |
| Turn | Comme au flop | Bouton |
| River | Comme au flop | Bouton |

</div>

Le moyen mnémotechnique : ==**avant le flop, regarde à gauche de la grosse blinde ; après le flop, regarde à gauche du bouton.**== Le bouton parle en dernier sur chaque tour après le flop, et c'est exactement pour ça que c'est le siège le plus rentable — voir [les positions au poker, d'UTG au bouton](/fr/blog/holdem-positions).

==g:**Le heads-up (2 joueurs) est l'exception :**== le bouton pose la *petite* blinde et parle **en premier** préflop, mais **en dernier** au flop, à la turn et à la river. C'est l'ordre utilisé dans la main complète décortiquée plus bas.

Autre subtilité, dans les cash games qui l'autorisent : un **straddle live** déplace le début du préflop à la gauche du joueur qui a straddlé, et c'est lui — pas la grosse blinde — qui parle en dernier avant le flop (WSOP Live Action Rule 165). Après le flop, l'ordre redevient l'ordre habituel.

---

## Quel est l'ordre des joueurs au poker ? Le déroulement en un coup d'œil

Une main de Texas Hold'em menée jusqu'à l'abattage suit six étapes dans le même ordre : les blindes, le préflop, le flop, la turn, la river puis l'abattage — si tous les joueurs sauf un se couchent avant, elle s'arrête plus tôt. Il y a jusqu'à quatre tours d'enchères — préflop, flop, turn et river —, tandis que les blindes sont des mises forcées et que l'abattage se joue sans enchères. Le tableau ci-dessous résume tout.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Étape | Ce qui se passe | Cartes communes | Enchères ? |
|:---|:---|:---:|:---|
| Blindes | SB et BB posent les mises forcées | 0 | Forcées |
| Préflop | Deux cartes fermées distribuées → enchères | 0 | ✅ |
| Flop | Trois cartes communes retournées | 3 | ✅ |
| Turn | Une carte commune de plus | 4 | ✅ |
| River | Dernière carte commune | 5 | ✅ |
| Abattage | Comparaison des cinq meilleures cartes → gagnant | 5 | — |

</div>

### ⚡ Un mot pour retenir chaque tour

- **Préflop** = le départ (tu décides avec tes deux cartes seulement)
- **Flop** = le changement (trois cartes ouvrent les possibilités)
- **Turn** = la décision (ta dernière vraie chance de préparer la river)
- **River** = la conclusion (toutes les cartes sont sorties, dernière mise)
- **Abattage** = le résultat (les cinq meilleures cartes l'emportent)

---

## Une main réelle décortiquée, étape par étape

Le plus simple pour retenir l'ordre du jeu, c'est de suivre une vraie main du début à la fin. Ici, en heads-up avec des blindes de 1 000 / 2 000, A♠ K♥ affronte 9♦ 9♣. La river donne une double paire au joueur A, mais le brelan de neuf que B tient depuis le flop remporte le pot.

![Exemple d'une main complète de Texas Hold'em — du préflop à l'abattage](/images/holdem-game-example-fullhand.webp "Une main complète suivie à chaque tour jusqu'à l'abattage")

Lire la théorie des tours d'enchères, c'est abstrait : suivons donc cette main de la première à la dernière carte, avec de vraies cartes et de vrais montants.

**Configuration :** heads-up. Blindes SB 1 000 / BB 2 000.

- **Joueur A (toi) :** A♠ K♥ (as-roi dépareillé)
- **Joueur B (l'adversaire) :** 9♦ 9♣ (paire de neuf)

### Préflop

A relance à **6 000** avec Big Slick. B suit avec sa paire de neuf.
**Pot : 12 000**

### Flop : K♦ 9♠ 3♥

- **A :** top paire, meilleur kicker (une paire de rois). Ça a l'air fort.
- **B :** trois neuf — un **set** (un brelan servi : sa paire en main plus un neuf au board). Déjà un monstre.

B checke, A mise **8 000**, B suit.
**Pot : 28 000**

### Turn : 2♣

- **A :** rien ne change, toujours top paire.
- **B :** toujours un set, pas besoin d'améliorer.

B checke, A mise **15 000** (environ la moitié du pot), B suit.
**Pot : 58 000**

### River : A♥

- **B :** checke.
- **A :** l'as vient s'apparier — désormais **double paire, as et rois**. Confiant, il mise **30 000**.
- **B :** le set écrase toujours la double paire. Check-raise à **70 000**.
- **A :** persuadé que sa double paire est bonne, il suit.

**Pot : 198 000**

### Abattage

- A : A♠ K♥ + A♥ K♦ 9♠ → **double paire (as et rois)**
- B : 9♦ 9♣ + 9♠ K♦ A♥ → **brelan (de neuf)**

**Gagnant : B** — le brelan bat la double paire.

La leçon : ==r:quand la river a donné une double paire à A, il a *eu l'impression* d'avoir gagné — mais B tenait un set depuis le flop.== ==g:**Lire tout le board, et pas seulement ta propre amélioration, c'est le cœur du Hold'em.**==

---

## Quels sont les 7 coups possibles au poker ?

Au poker, tu as sept actions possibles : se coucher, checker, suivre, miser, relancer, surrelancer (3-bet) et faire tapis. Celles qui s'ouvrent à toi dépendent avant tout d'une question : y a-t-il déjà une mise devant toi ? Sans mise, tu peux checker ou miser ; face à une mise, tu dois suivre, relancer ou te coucher. Une nuance : si tu as déjà misé ou suivi dans ce tour et qu'un all-in trop court pour valoir une relance complète te revient, tu ne peux que suivre ou te coucher — sauf si plusieurs petits all-in cumulés atteignent une relance complète (TDA 2024, règle 47-A).

![Les actions d'enchères au poker — checker, suivre, se coucher, miser, relancer, surrelancer, faire tapis](/images/holdem-betting-options-guide.webp "Toutes les actions d'enchères possibles au Texas Hold'em")

Voici toutes les actions disponibles à la table — la partie que les débutants confondent le plus.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Action | Ce qu'elle fait | Quand elle est possible |
|------|------|------|
| Se coucher (fold) | Abandonner la main, jeter ses cartes | À n'importe quel tour — quand c'est à toi |
| Checker (check) | Passer la parole sans miser | Seulement quand aucune mise ne t'attend |
| Suivre (call) | Égaler la mise en cours | Quand une mise t'attend |
| Miser (bet) | Faire la première mise d'un tour | Quand personne n'a encore misé |
| Relancer (raise) | Augmenter par-dessus la mise en cours | Quand une mise t'attend |
| Surrelancer (3-bet) | Relancer par-dessus une relance | Quand une relance t'attend |
| Tapis (all-in) | Pousser tous tes jetons au milieu | À n'importe quel tour — quand c'est à toi, en mise, en call ou en relance selon ce qui t'est ouvert |

</div>

==r:**Important :** préflop, tu ne peux pas checker — sauf si ta propre mise posée est déjà la mise en cours.== La grosse blinde est une mise vivante, donc chaque position dont la mise posée n'est pas déjà la mise en cours doit suivre, relancer ou se coucher. ==La grosse blinde peut checker si personne n'a relancé ni straddlé — tout comme un joueur dont le straddle live n'a été ni relancé ni re-straddlé, puisque cette mise est sa mise d'ouverture et qu'il parle en dernier préflop (WSOP Live Action Rules 159 · 165) ; pour tous les autres, le check commence au flop.==

Pour un guide de décision plus poussé sur le moment d'utiliser chaque action — avec un tableau de décision checker-suivre-relancer-se coucher — regarde [les actions de mise expliquées](/fr/blog/holdem-betting-actions).

---

## Quelles sont les 10 mains du poker à connaître ?

Il y a dix mains au poker, de la plus forte à la plus faible : quinte flush royale (royal flush), quinte flush, carré, full, couleur, quinte, brelan, double paire, paire et carte haute (hauteur). À l'abattage, c'est ce classement qui désigne le gagnant, et tu dois le connaître par cœur pour savoir instantanément quelle main bat laquelle.

Le tableau ci-dessous reprend ce **classement des mains**. (La colonne Fréquence indique à quelle fréquence chaque main est ta meilleure combinaison de cinq cartes parmi sept — c'est pour ça que la carte haute sort moins souvent que la double paire.)

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Rang | Main | Exemple | Fréquence |
|------|------|------|------|
| 1 | Quinte flush royale | A♠ K♠ Q♠ J♠ 10♠ | Extrêmement rare |
| 2 | Quinte flush | 5♥ 6♥ 7♥ 8♥ 9♥ | Très rare |
| 3 | Carré | A♠ A♥ A♦ A♣ K♠ | Rare |
| 4 | Full | K♠ K♥ K♦ A♠ A♥ | Peu fréquent |
| 5 | Couleur | A♠ K♠ 8♠ 5♠ 2♠ | Peu fréquent |
| 6 | Quinte | 5♥ 6♠ 7♦ 8♣ 9♥ | Occasionnel |
| 7 | Brelan | Q♠ Q♥ Q♦ 5♠ 7♥ | Occasionnel |
| 8 | Double paire | J♠ J♥ 8♦ 8♣ A♠ | Fréquent |
| 9 | Paire | K♠ K♥ 7♦ 4♣ 2♠ | Très fréquent |
| 10 | Carte haute | A♠ Q♥ 8♦ 5♣ 2♠ | Fréquent — mais plus rare que la double paire |

</div>

Tu veux le détail complet — y compris comment les kickers et les égalités départagent les joueurs ? Regarde le guide complet du [classement des mains au poker](/fr/blog/holdem-hand-rankings).

---

## 5 erreurs de débutant à éviter dès ta première partie

Connaître l'ordre du jeu ne suffit pas si tu fais ces cinq erreurs : jouer presque toutes les mains, ignorer la position, courir après les tirages, bluffer la river sans histoire cohérente et mal lire ta main à l'abattage. Chacune peut te vider ton stack alors même que tu sais parfaitement à qui c'est le tour de parler.

J'ai vu chacune de ces erreurs coûter le pot à un débutant à la table — souvent plus d'une fois dans la même session.

### 1. Jouer presque toutes les mains

« Allez, je vais juste voir un flop » est perdant sur le long terme — c'est la fuite la plus fréquente que je vois à la première table d'un nouveau joueur. Les bons joueurs ne jouent que 15 à 25 % des mains et se couchent sur le reste sans hésiter. Si tu suis préflop avec n'importe quelle main, tu paies pour perdre.

### 2. Ignorer la position

Plus tu es proche du bouton, mieux c'est — parler en dernier te permet de voir ce que tout le monde fait avant de décider. Joue serré en position précoce et plus agressif en position tardive. Pour le plan complet des sièges et les ranges d'ouverture par position, regarde [les positions au poker expliquées : d'UTG au bouton](/fr/blog/holdem-positions).

### 3. Courir après les tirages à l'aveugle

Un tirage couleur ou quinte ne veut pas dire suivre automatiquement. Tu dois peser la **cote du pot (pot odds)** — le prix du call face à la taille du pot. Si le pot — mise de ton adversaire comprise — fait 100 000 et que tu dois payer 50 000, tu dois **gagner** au moins environ 33 % du temps pour que le call soit rentable — gagner, et pas seulement compléter ton tirage.

### 4. Bluffer la river avec une main faible, sorti de nulle part

Si tu as checké passivement tout du long puis que tu fais tapis à la river, tes adversaires lisent clair dans ton jeu instantanément. Un bluff a besoin d'une histoire cohérente depuis le premier tour.

### 5. Mal lire ta main à l'abattage

Une erreur de débutant classique : croire « j'ai une double paire ! » alors qu'on n'a qu'une paire. J'ai vu des joueurs retourner fièrement ce qu'ils prenaient pour une quinte, et découvrir que les cartes ne se suivaient pas — la table se tait, et le pot glisse de l'autre côté. Entraîne-toi à choisir les **cinq meilleures cartes** parmi tes deux cartes fermées et les cinq cartes du board jusqu'à ce que ça devienne automatique.

---

## Comment commencer à jouer dès aujourd'hui ?

Une fois l'ordre du jeu assimilé, le plus efficace est de jouer : entraîne-toi avec de l'argent fictif, relis ce guide deux ou trois fois pour que la séquence devienne automatique, garde une antisèche du classement des mains sous les yeux et commence aux plus petites limites, là où tes erreurs coûtent le moins cher.

Dans le détail :

- **Entraîne-toi avec de l'argent fictif** — la plupart des applis et sites de poker proposent des parties gratuites. Mets ce guide en pratique dans un vrai déroulement de partie.
- **Relis cet article deux ou trois fois** — la séquence doit devenir une seconde nature pour que tu ne te figes jamais à la table.
- **Fais-toi une antisèche du classement des mains** — écris les dix mains sur un papier et garde-le sous les yeux.
- **Commence aux plus petites limites** — moins tes erreurs coûtent cher, plus tu apprends vite.

Le Texas Hold'em s'apprend en une demi-heure et se maîtrise en une vie. Mais les bases que tu as vues aujourd'hui suffisent largement pour t'asseoir à une table. Pour l'histoire et les règles formelles, l'[article Wikipédia sur le Texas hold'em](https://fr.wikipedia.org/wiki/Texas_hold_%27em) est une bonne référence.

---

:::readnext[À lire ensuite]
/fr/blog/texas-holdem-rules-for-beginners | Les règles du Texas Hold'em pour débutants | /images/rules-texas-holdem.webp
/fr/blog/holdem-betting-actions | Les actions de mise expliquées | /images/holdem-betting-actions-hero.webp
:::

## FAQ

**Q. Quel est l'ordre de parole au poker Texas Hold'em ?**

A. On pose les blindes → on distribue deux cartes fermées → enchères préflop → on retourne le flop (3 cartes) et on mise → la turn (1 carte) et on mise → la river (dernière carte) et on mise → abattage (comparaison des cinq meilleures cartes).

**Q. Qui commence à parler au poker ?**

A. Tout dépend du « premier » dont tu parles, et c'est exactement pour ça que la question piège tout le monde. Trois moments différents revendiquent ce mot dans une même main : le premier à *poser* (la petite blinde), le premier à *parler* préflop (UTG, juste à gauche de la grosse blinde) et le premier à parler une fois le flop sorti (retour à la petite blinde). La réponse change donc en cours de main — UTG ouvre le tour préflop, puis la petite blinde (ou, si elle s'est couchée, le joueur suivant encore en jeu à gauche du bouton) ouvre tous les tours suivants. (Le heads-up inverse tout ça — voir la question suivante.)

**Q. Qui parle en premier après le flop ?**

A. Le premier joueur encore en jeu à gauche du bouton — à une table pleine, c'est la petite blinde. Si la petite blinde s'est déjà couchée, la parole passe à la grosse blinde, puis aux suivants dans le sens des aiguilles d'une montre. Le même siège ouvre aussi la turn et la river ; seul le préflop commence ailleurs. Le heads-up est l'exception : le bouton y parle en premier préflop et en dernier sur tous les tours suivants.

**Q. Au showdown, qui montre ses cartes en premier ?**

A. Celui qui a fait la dernière action agressive — la dernière mise ou relance à la river — doit montrer en premier. Si la river a été checkée sans aucune mise, c'est le premier joueur actif à gauche du bouton qui montre en premier, et les autres suivent dans le sens des aiguilles d'une montre. Un joueur qui se sait battu peut en général jeter ses cartes au lieu de les montrer. Deux exceptions en tournoi : quand un joueur est à tapis, toutes les mains sont retournées (TDA 2024 Rule 16) ; et un joueur qui a misé à la river et a été suivi doit montrer si le joueur qui a suivi — qui a encore ses cartes en main ou les a déjà étalées — demande à voir sa main (TDA 2024 Rule 18-B).

**Q. Quelle est la différence entre le préflop et le flop ?**

A. Le préflop, c'est avant qu'aucune carte commune ne soit sortie — tu décides uniquement d'après tes deux cartes fermées. Le flop, c'est après que trois cartes communes ont été retournées : tu lis à la fois ta main actuelle et ton potentiel de tirage.

**Q. Quelle est la différence entre checker et suivre ?**

A. Checker, c'est passer la parole sans miser, et ce n'est possible que si aucune mise ne t'attend. Suivre, c'est égaler la mise d'un adversaire. Si quelqu'un a misé, tu ne peux pas checker — tu dois suivre, relancer ou te coucher.

**Q. Dois-je utiliser mes deux cartes fermées au showdown ?**

A. Non. Tu formes la meilleure main de cinq cartes avec n'importe quelle combinaison de tes deux cartes fermées et des cinq cartes communes — y compris en n'en utilisant qu'une, ou aucune (« jouer le board »).

**Q. C'est quoi les cotes du pot ?**

A. La cote du pot, c'est le rapport entre la taille actuelle du pot et le montant que tu dois payer. Si le pot fait 100 000 et qu'un adversaire mise 20 000, tu risques 20 000 pour gagner un pot de 120 000 (6:1). Si ta probabilité de gagner est meilleure que cette cote, suivre est rentable.

**Q. Quand faut-il faire all-in ?**

A. Faire tapis, c'est miser tous tes jetons. Fais-le avec une main très forte (les nuts), ou en bluff pour faire coucher tes adversaires. Une fois à tapis, tu ne peux plus miser, mais tu restes éligible à la part du pot que tu as égalée. Quand les stacks sont différents et qu'au moins deux joueurs continuent de miser au-delà de ton stack, cela crée un side pot (pot annexe), voire plusieurs — voir [les règles du tapis et des side pots](/fr/blog/holdem-all-in-rules).

**Q. Combien de tours d'enchères y a-t-il dans une main ?**

A. Jusqu'à quatre : préflop, flop, turn et river. Une main qui se termine plus tôt — tout le monde se couche face à un seul joueur, ou les joueurs sont à tapis sans plus personne contre qui miser — en compte moins. Les blindes sont des mises forcées, et l'abattage se joue sans enchères.

**Q. Pourquoi le donneur brûle-t-il une carte, et combien ?**

A. Avant de distribuer le flop, la turn et la river, le donneur écarte face cachée la carte du dessus du paquet — la « carte brûlée ». Cela fait trois cartes brûlées dans une main qui va jusqu'à la river, une avant chaque tour de cartes communes. Brûler une carte protège le jeu : si la carte du dessus était marquée ou exposée par accident, un joueur pourrait obtenir une information sur ce qui arrive, alors on la retire du jeu d'abord.

**Q. Qui joue en premier au poker ?**

A. Préflop, c'est le joueur assis juste à gauche de la grosse blinde, under the gun (UTG), qui joue en premier. À partir du flop, c'est le premier joueur encore en jeu à gauche du bouton, en général la petite blinde, et le bouton joue en dernier à chaque tour. En heads-up, c'est l'inverse avant le flop : le bouton, qui pose la petite blinde, joue en premier préflop puis en dernier ensuite.

---

## À retenir

1. ==**L'ordre :**== blindes → préflop → flop (3) → turn (1) → river (1) → abattage, avec ==jusqu'à quatre tours d'enchères==.
2. ==**La lecture :**== à chaque tour, juge à la fois ce que tu as maintenant et ce que tu peux encore toucher — et regarde tout le board, pas seulement ta propre main.
3. ==g:**La discipline :**== couche-toi avec la plupart des mains préflop, respecte la position et ne mise gros que quand ton histoire tient debout.

Apprends la séquence par cœur, rode-la avec des parties gratuites, et tu ne te figeras plus jamais en te demandant à qui c'est le tour de parler. Tu es prêt à t'asseoir.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Guide débutant</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les règles du Texas Hold'em pour débutants</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Règles complètes, jetons, classement des mains + PDF imprimable</div>
  </a>
  <a href="/fr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Classement des mains</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Classement des mains au poker, de la meilleure à la plus faible</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les 10 mains avec probabilités, exemples et énigmes de board</div>
  </a>
  <a href="/fr/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Positions</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Positions au poker : d'UTG au bouton</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Plan des sièges, ranges d'ouverture et pourquoi la position gagne</div>
  </a>
</div>
`.trim(),
};
