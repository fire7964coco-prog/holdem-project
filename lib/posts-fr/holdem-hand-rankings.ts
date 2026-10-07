import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Combinaisons au poker : l'ordre des mains et qui bat quoi",
  seoTitle: "Sûr d'avoir gagné ? — Combinaisons poker et ordre des mains",
  desc: "Tu as floppé une couleur et quand même perdu le pot ? Les 10 combinaisons du poker de la plus forte à la plus faible, qui bat quoi et le rôle du kicker.",
  tldr: "L'ordre des combinaisons au poker, de la plus forte à la plus faible : quinte flush royale, quinte flush, carré, full, couleur, quinte (suite), brelan, double paire, paire et carte haute. Les enseignes ne départagent jamais ; à combinaison égale, c'est le kicker qui décide.",
  category: "hand-rankings",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "🃏",
  image: "/images/holdem-hand-rankings-hero.webp",
  imageAlt: "Quinte flush royale — 10 J Q K A à pique sur une table de poker avec des piles de jetons et le bouton du donneur",
  tags: ["combinaison poker", "ordre des mains poker", "main poker", "quinte flush royale", "suite poker", "couleur poker", "brelan poker", "full poker", "combinaison poker holdem"],
  content: `
Tu es seul contre un adversaire à la river (la rivière). Tu as touché ta couleur, tu es sûr qu'elle est bonne — et puis ==r:le donneur pousse le pot de l'autre côté==. Le board (les cartes communes) était pairé, ton adversaire avait un full, et tu ne l'as jamais vu venir.

Presque tous les « j'étais sûr d'avoir gagné » viennent d'une seule chose : ==ne pas lire les **combinaisons au poker** assez vite==. Apprendre l'ordre prend cinq minutes. Le lire en direct, sous pression, avec un board pairé ou connecté — ==c'est la partie que personne n'explique bien==.

J'ai passé plus de soirées que je ne peux en compter à voir cette tête du « j'étais sûr d'avoir gagné » de l'autre côté de la table, et presque à chaque fois, tout tient à un seul détail raté sur le board. Ce guide règle les deux problèmes. Tu auras l'ordre complet avec les vraies probabilités, chaque règle pour départager une égalité, trois énigmes de board pour t'entraîner à « trouver tes cinq meilleures cartes », et une routine d'une seconde pour lire n'importe quel board à la table.

---

## Quel est l'ordre des combinaisons au poker, de la plus forte à la plus faible ?

De la plus forte à la plus faible, les dix combinaisons du Texas Hold'em se classent ainsi : quinte flush royale (royal flush), quinte flush, carré, full, couleur (flush), quinte (suite), brelan, double paire, paire et carte haute (hauteur). La règle de fond est simple — plus une main est rare à former avec cinq cartes, plus elle est haute. (L'ordre a été fixé par les probabilités sur cinq cartes ; sur sept cartes, quelques fréquences se croisent — à la river, une simple carte haute est même plus rare qu'une double paire — mais le classement ne change pas.) Voici toute la hiérarchie, avec la probabilité à long terme de tenir chaque main à la river.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | Main | Autre nom | Ce que c'est | Probabilité (à la river) |
|:---|:---|:---|:---|:---:|
| **1** | Quinte flush royale | « Royale » (la quinte flush à l'as) | A-K-Q-J-10, une seule enseigne | 0,0032 % |
| **2** | Quinte flush | A-5 seulement : « la roue à la couleur » | 5 cartes qui se suivent, une seule enseigne | 0,0279 % |
| **3** | Carré | « Quads » | Quatre cartes de même rang | 0,168 % |
| **4** | Full | « Full house » / « Boat » | Un brelan + une paire | 2,60 % |
| **5** | Couleur | « Flush » | 5 cartes quelconques d'une même enseigne | 3,03 % |
| **6** | Quinte | « Suite » / « Straight » | 5 cartes qui se suivent, enseignes mélangées | 4,62 % |
| **7** | Brelan | « Trips » / « Set » | Trois cartes de même rang | 4,83 % |
| **8** | Double paire | — | Deux paires différentes | 23,5 % |
| **9** | Paire | — | Deux cartes de même rang | 43,8 % |
| **10** | Carte haute | « Hauteur » | Aucune combinaison | 17,4 % |

</div>

*Ce sont les fréquences standard des mains de sept cartes pour un jeu complet de 52 cartes — les mêmes probabilités qu'utilisent tous les solvers et tous les sites d'entraînement.*

> **La règle qui clôt les débats**
> La paire et la carte haute représentent à elles deux environ 61 % de toutes les mains de sept cartes à la river. Les grosses mains paraissent fréquentes parce qu'on s'en souvient — mais la plupart des pots se jouent sur une paire ou une carte haute, et sur le [kicker](/fr/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp").

:::quiz:::

### Le tableau des combinaisons à imprimer

Le tableau ci-dessus est ta fiche de référence : enregistre-le ou imprime-le et garde-le à côté de toi pendant tes premières sessions. En une ligne, de la plus forte à la plus faible : **quinte flush royale > quinte flush > carré > full > couleur > quinte > brelan > double paire > paire > carte haute**. Et dans l'ordre croissant : carte haute, paire, double paire, brelan, quinte, couleur, full, carré, quinte flush, quinte flush royale.

---

## Quel est l'ordre de force des cartes ? Les bases en 30 secondes

Les cartes se classent de l'as (la plus haute) au 2, et les enseignes n'ont aucun rang : ce sont les deux seules choses à savoir avant les combinaisons.

### L'ordre des cartes (de la plus haute à la plus basse)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

L'as est la carte la plus forte, et la seule qui contourne les règles : il joue en haut (A-K-Q-J-10) *et* en bas (A-2-3-4-5, « la roue »). Il ne peut pas faire le tour par le milieu — Q-K-A-2-3 n'est **pas** une quinte.

### Les enseignes ne se classent pas

Au Texas Hold'em standard, **aucune enseigne n'est plus forte qu'une autre**. Le pique ne bat pas le cœur. Les enseignes ne servent qu'à *former* une couleur, jamais à départager une égalité. Si deux joueurs ont les mêmes cinq cartes dans des enseignes différentes, le pot est partagé — à chaque fois.

---

## Quelles sont les mains au poker ? Les 10 combinaisons expliquées une par une

Voici chaque main, de la plus forte à la plus faible, avec un exemple et la règle qui tranche chaque duel. Les cinq qui sèment le plus de confusion — le full, la couleur, la quinte et les deux façons de faire un brelan — ont droit à plus d'attention.

### #1 — Quinte flush royale (royal flush)

:::hand[A♠,K♠,Q♠,J♠,10♠] Quinte flush royale — A-K-Q-J-10, tout à pique:::

**A♠ K♠ Q♠ J♠ 10♠** — la plus haute quinte flush, et la meilleure main du poker.

Elle est imbattable ; la seule égalité possible, c'est une quinte flush royale posée entièrement sur le board, que tout le monde partage, et le pot est divisé. Tu en verras une environ une fois toutes les 31 000 mains, si bien que la plupart des joueurs passent des années sans en toucher une. Et attention à une idée reçue : une quinte flush qui contient un as n'est pas forcément royale — A-2-3-4-5 de la même enseigne est au contraire la plus petite quinte flush. Le jour où tu la touches, ton seul travail est de mettre un maximum de jetons au milieu.

### #2 — Quinte flush (straight flush)

:::hand[9♥,8♥,7♥,6♥,5♥] Quinte flush — cinq cœurs qui se suivent:::

**9♥ 8♥ 7♥ 6♥ 5♥** — cinq cartes qui se suivent, toutes de la même enseigne.

Seules une quinte flush plus haute ou une quinte flush royale la battent. La version la plus basse, A-2-3-4-5 d'une même enseigne, s'appelle **« la roue à la couleur »** (steel wheel). Quand deux quintes flush s'affrontent, celle qui a la carte la plus haute gagne.

### #3 — Carré (four of a kind)

:::hand[8♣,8♦,8♥,8♠,K♥] Carré — quatre huit + kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — les quatre cartes d'un même rang.

Entre deux carrés, le carré le plus haut gagne. Si le carré est *sur le board* (les quatre cartes partagées), c'est le **kicker** le plus haut qui décide — et le kicker as joue.

### #4 — Full (full house)

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full — trois dames + deux cinq:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — un brelan plus une paire : un full aux dames par les cinq.

Compare **le brelan d'abord** : QQQ55 bat JJJ99 parce que les dames dominent les valets, quelle que soit la taille de la paire. Ce n'est que si les brelans sont égaux qu'on compare les paires.

> **Le cooler le plus fréquent**
> En douze ans autour des tables, « ma couleur max a perdu contre un full » est la défaite dont j'entends le plus souvent les joueurs se plaindre. Dès que le board se paire, vérifie s'il y a un full possible *avant* de t'engager avec une couleur ou une quinte.

### #5 — Couleur (flush)

:::hand[A♦,J♦,8♦,6♦,2♦] Couleur — cinq carreaux:::

**A♦ J♦ 8♦ 6♦ 2♦** — cinq cartes quelconques de la même enseigne, l'ordre ne compte pas.

Deux couleurs se comparent carte par carte en partant du haut : A-J-8-6-2 bat A-J-8-5-2 parce que le 6 domine le 5. Quatre cartes d'une même enseigne ne font **pas** une couleur — il en faut cinq. Et une couleur, ce ne sont pas des cartes qui se suivent : ça, c'est une quinte (et si elles sont en plus de la même enseigne, une quinte flush).

### #6 — Suite ou quinte (straight)

:::hand[7♠,6♥,5♣,4♦,3♠] Quinte — cinq cartes qui se suivent, enseignes mélangées:::

**7♠ 6♥ 5♣ 4♦ 3♠** — cinq cartes qui se suivent, enseignes mélangées.

- **Les nuts :** A-K-Q-J-10 (« Broadway », la quinte à l'as) est la quinte la plus haute.
- **La roue (wheel) :** A-2-3-4-5 est la plus petite quinte (l'as joue en bas).
- **Interdit :** on ne peut pas faire le tour — K-A-2-3-4 n'est pas une quinte.

Entre deux quintes, celle qui a la carte la plus haute gagne.

### #7 — Brelan (three of a kind)

:::hand[J♣,J♠,J♥,A♦,4♠] Brelan — trois valets + kickers:::

**J♣ J♠ J♥ A♦ 4♠** — trois cartes de même rang.

Il y a trois façons de le former, et la différence compte :

- **Brelan servi (set) :** une paire en main plus une carte assortie sur le board (par exemple tu tiens J♣ J♠, le board montre J♥). Bien caché, et dangereux.
- **Brelan (trips) :** une paire sur le board plus une carte assortie dans ta main. Plus facile à lire pour tes adversaires, et plus facile à partager.
- **Brelan sur le board :** les trois cartes sont sur le board (par exemple J♣ J♠ J♥ au milieu). Tout le monde le partage, donc à moins que quelqu'un forme une quinte ou mieux, seuls les kickers départagent les joueurs.

Le brelan servi rapporte plus de jetons parce que personne ne le voit venir.

### #8 — Double paire (two pair)

:::hand[10♠,10♥,8♣,8♦,A♠] Double paire — dix et huit + kicker as:::

**10♠ 10♥ 8♣ 8♦ A♠** — deux paires différentes.

Compare dans l'ordre : **paire haute → paire basse → kicker**. KK99-A bat QQJJ-A parce que les rois dominent les dames avant qu'on regarde quoi que ce soit d'autre.

### #9 — Paire (one pair)

:::hand[K♠,K♦,9♥,6♣,2♠] Paire — rois + trois kickers:::

**K♠ K♦ 9♥ 6♣ 2♠** — deux cartes de même rang.

C'est la main faite la plus courante au Hold'em. Deux paires égales se départagent aux kickers : **rang de la paire → kicker 1 → kicker 2 → kicker 3**, du plus haut au plus bas. C'est là que se produisent la plupart des défaites « avec la même main » — surveille ton kicker.

### #10 — Carte haute ou hauteur (high card)

:::hand[A♣,Q♠,9♥,5♦,3♣] Carte haute — aucune combinaison:::

**A♣ Q♠ 9♥ 5♦ 3♣** — rien ne se connecte.

À l'abattage, la carte la plus haute gagne, puis la suivante, et ainsi de suite sur les cinq. Si les cinq sont identiques, le pot est partagé. C'est ce qui te reste quand un bluff est payé et que ton tirage a raté.

---

## Comment s'appellent les combinaisons en anglais et en français ?

Les tables en ligne, les vidéos et les solvers mélangent souvent les deux langues. Voici les dix combinaisons face à face, dans l'ordre.

| Anglais | Français |
|:---|:---|
| Royal Flush | Quinte flush royale |
| Straight Flush | Quinte flush |
| Four of a Kind (Quads) | Carré |
| Full House (Boat) | Full |
| Flush | Couleur |
| Straight | Quinte (suite) |
| Three of a Kind (Trips / Set) | Brelan (brelan servi pour le set) |
| Two Pair | Double paire |
| One Pair | Paire |
| High Card | Carte haute (hauteur) |

---

## Égalité et kicker : qui gagne avec la même combinaison ?

![Abattage au poker — comparaison des cinq meilleures cartes de deux joueurs](/images/holdem-kicker-showdown-neutral.webp "À l'abattage, la meilleure main de cinq cartes remporte le pot")

Quand deux joueurs ont le même type de combinaison, on compare d'abord les cartes qui forment la main, puis un **kicker** — une carte d'accompagnement qui ne fait pas partie de la combinaison — départage quand tout le reste est identique. C'est la partie qui fait basculer les vrais pots, et celle que la plupart des tableaux oublient. Suis exactement cet ordre :

1. **Compare le rang de la combinaison.** Une couleur bat toujours une quinte, un full bat toujours une couleur, et ainsi de suite.
2. **Compare les cartes qui forment la combinaison.** Une paire d'as bat une paire de rois ; une couleur hauteur dame bat une couleur hauteur valet.
3. **Compare les kickers.** Si la combinaison est égale, les cartes restantes départagent, une par une en partant du haut.
4. **Toujours identique ? Le pot est partagé.** Les enseignes ne départagent jamais.

Le badge à droite indique si un **kicker sert à départager la main**.

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

Un **kicker**, c'est simplement une carte qui ne fait pas partie de ta combinaison mais qui sert quand même à départager. Avec A-A-K contre A-A-Q, les deux joueurs ont des as — le kicker roi gagne. C'est pour ça que les pros attachent autant d'importance à la *qualité* de leurs cartes hautes, et pas seulement au fait d'avoir touché une paire. Pour toutes les règles de départage réunies au même endroit, vois le [guide des égalités et du kicker](/fr/blog/holdem-tiebreak-rules) ; quand les cinq meilleures cartes sont exactement les mêmes, le pot est [partagé](/fr/blog/holdem-split-pot-rules).

---

## Sais-tu lire le board ? 3 mains à décoder

![Board K-K-K-A-2 sur une table de poker — sauras-tu repérer le full avant le donneur ?](/images/holdem-hand-rankings-board-puzzle.webp "Énigme de lecture du board — trouve ta meilleure main de cinq cartes")

Connaître l'ordre, ce n'est pas la même chose que le lire vite. Voici trois situations réelles. Cache la réponse, trouve tes cinq meilleures cartes parmi les sept, puis vérifie.

### Énigme 1 — Le full caché

:::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 cartes):::

Tu tiens **Q♥ Q♦**. Quelle est ta meilleure main ?

→ Le board affiche déjà une double paire (A-A et K-K). Tes deux dames plus la Q♠ du board font un **brelan de dames**, et avec les as du board tu as un **full — QQQ + AA**, un full aux dames par les as. Ce sont tes cinq meilleures cartes. Lors de la toute première partie entre amis où j'ai fait le donneur, j'ai vu deux joueurs différents jeter exactement cette main en pensant « AAKK + Q, c'est juste une double paire » — ce n'en est pas une. Dès que tu as un brelan et que le board ajoute sa propre paire, tu prends le full. **Le full bat la double paire.**

### Énigme 2 — La couleur plus forte qu'elle ne paraît

:::hand[7♥,8♥,9♥,10♥,J♠] Board (5 cartes):::

Tu tiens **6♥ 2♣**. Le board montre quatre cœurs.

→ Ton 6♥ est le cinquième cœur, alors tu penses « couleur ». Mais regarde l'enchaînement : **10♥ 9♥ 8♥ 7♥ 6♥**, ce sont cinq cœurs *qui se suivent* — une **quinte flush hauteur dix**, la combinaison n°2. (Remplace ce 6♥ par un K♥ et les cœurs deviennent 7-8-9-10-K — ils ne se suivent plus, et la main retombe à une simple couleur hauteur roi.) Vérifie toujours si tes cartes de couleur se *suivent* aussi avant de supposer une quinte flush.

### Énigme 3 — Quand il faut partager

:::hand[K♠,K♦,K♥,A♠,2♠] Board (5 cartes):::

Tu tiens **A♥ 3♣**. Le board a déjà un brelan de rois.

→ Ton A♥ s'apparie avec l'A♠ du board, ce qui te donne **KKK + AA, un full**. Mais si ton adversaire tient lui aussi un as — et pas le dernier roi — il a *le même* full et vous partagez. Deux choses seulement te battent encore : une paire d'as servie (A-A) fait un full plus gros (full aux as), et le dernier roi (K♣) fait un carré de rois quelle que soit l'autre carte — l'A♠ du board est déjà son kicker. S'il n'a ni as ni ce dernier roi, ton full gagne. La leçon : quand le board fait l'essentiel du travail, ta main ne vaut souvent qu'une carte de plus.

---

## Qu'est-ce qui bat quoi au poker ? Les duels qui font débat

Les réponses courtes aux disputes qui éclatent à chaque table : la couleur bat la quinte, le full bat la couleur, le carré bat le full, et la roue (A-2-3-4-5) est la quinte la plus *basse*, jamais la plus haute. On entend aussi souvent qu'un brelan battrait une quinte — c'est faux, la quinte (#6) passe devant le brelan (#7). Voici les duels où les joueurs se trompent le plus souvent.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Duel | Gagnant | Pourquoi |
|------|------|------|
| Couleur contre quinte | **Couleur** | #5 bat #6 |
| Full contre couleur | **Full** | #4 bat #5 |
| Brelan contre double paire | **Brelan** | #7 bat #8 |
| Quinte contre brelan | **Quinte** | #6 bat #7 |
| A-2-3-4-5 contre 10-J-Q-K-A | **Broadway (à l'as)** | La roue est la plus petite quinte |
| Même paire, kicker K contre kicker J | **Kicker K** | Le kicker le plus haut gagne |
| Carré contre full | **Carré** | #3 bat #4 |

</div>

---

## Pourquoi la couleur bat-elle la suite ? Le calcul en bref

La couleur bat la quinte parce qu'elle est tout simplement plus difficile à former : dans un jeu de 52 cartes, il y a moins de façons d'obtenir cinq cartes d'une même enseigne (3,03 % des mains de sept cartes à la river) que cinq cartes qui se suivent toutes enseignes confondues (4,62 %). Le classement n'a rien d'arbitraire — ==ce sont de pures probabilités==. ==g:**Plus une main est difficile à former avec cinq cartes, plus elle est haute.**== Ce seul principe explique toute la hiérarchie — retrouve les chiffres exacts dans le [tableau des probabilités au poker](/fr/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

Il explique aussi la seule grande exception que tu croiseras : au **Short Deck (6+) Hold'em**, où l'on retire les 2 à 5, la couleur devient plus difficile que le full — dans ce format, la ==r:**couleur bat le full**==. Les maths ont changé, donc l'ordre a changé. Plus de détails sur les différences entre variantes plus bas.

---

## La routine d'une seconde pour lire ta main

![Infographie d'un board pairé 9♥ Q♥ 9♠ 8♣ 7♠ — lire les paires et les quintes possibles pour trouver tes cinq meilleures cartes](/images/holdem-hand-rankings-board-read.webp "Comment lire un board de poker vite — enseignes, quintes, paires dans l'ordre")

Quand ta time bank défile, fais ce balayage dans cet ordre, à chaque fois que le board est complet :

**1. Les enseignes d'abord** — y a-t-il trois cartes ou plus d'une même enseigne sur le board ? Si oui, ==une couleur est possible==. Vérifie ton enseigne.

**2. Les cartes connectées ensuite** — y a-t-il des cartes proches en rang (comme 8-9-10) ? Si oui, ==une quinte est possible==.

**3. Les paires en dernier** — le board est-il pairé ? ==r:Si oui, des fulls et des carrés sont possibles, et ta couleur ou ta quinte est peut-être en danger.==

Je fais encore exactement ce balayage — couleur, puis quinte, puis paires — sur chaque board, peu importe depuis combien d'heures je suis assis. D'abord le danger (couleur ou quinte sur le board), puis la question de savoir si le board est pairé (ce qui menace tout le reste). Prends l'habitude et tu arrêteras de payer trop vite à la river. Et pour vérifier une main après coup, le [calculateur d'équité](/fr/calculator) te donne, avec un board complet, le gagnant et la main gagnante.

---

## Comment retenir les combinaisons du poker rapidement ?

Le moyen le plus rapide de retenir les combinaisons, c'est d'arrêter de les voir comme dix éléments sans lien : apprends-les en trois groupes (premium, intermédiaires, courantes), entraîne-toi uniquement sur les paires qui prêtent à confusion, puis annonce le gagnant sur des streams de poker avant que le donneur ne le fasse. Voici le plan en trois étapes.

| Étape | Quoi faire | Durée |
|------|------|------|
| **1** | Apprendre trois groupes : premium (#1–3), intermédiaires (#4–6), courantes (#7–10) | 1 jour |
| **2** | S'entraîner uniquement sur les paires piégeuses : couleur contre quinte, full contre couleur | 3 jours |
| **3** | Regarder des streams de poker et annoncer le gagnant avant le donneur | 1–2 semaines |

Commencer par les groupes évite que l'ordre ressemble à dix éléments au hasard. Les paires piégeuses de l'étape 2 causent 90 % des erreurs de débutant, alors entraîne-toi deux fois plus dessus.

---

## L'ordre des combinaisons est-il le même dans toutes les variantes ?

Presque toujours — le même ordre des dix combinaisons vaut au Texas Hold'em, à l'Omaha et au Seven-Card Stud. Les principales exceptions sont le Short Deck (6+), où la couleur bat le full, et la règle de l'Omaha qui t'oblige à utiliser exactement deux de tes cartes fermées. Voici comment se comparent les variantes courantes.

| Jeu | Ordre des mains | Différence clé |
|------|------|------|
| **Texas Hold'em** | Standard (ce guide) | Tu utilises 0 à 2 de tes cartes fermées, au choix |
| **Omaha** | Standard | Tu dois utiliser *exactement* 2 de tes 4 cartes fermées |
| **Seven-Card Stud** | Standard | Pas de cartes communes |
| **Short Deck (6+)** | Modifié | La couleur bat le full ; A-6-7-8-9 est la plus petite quinte (l'as joue toujours en bas, et sans les 2 à 5 il se relie au 6) |

À retenir : apprends l'ordre standard une fois et il te servira dans presque tous les jeux. Souviens-toi juste du « exactement deux » de l'Omaha et de la couleur qui monte d'un cran au Short Deck.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-flush-vs-straight | Suite ou couleur : qui gagne au poker ? | /images/holdem-flush-vs-straight-hero.webp
/fr/blog/holdem-tiebreak-rules | En cas d'égalité au poker, qui gagne ? | /images/holdem-tiebreak-hero.webp
:::

## FAQ

**Q. Qu'est-ce qu'un flush au poker ?**

A. Le flush, c'est la couleur : cinq cartes quelconques de la même enseigne — par exemple A♦ J♦ 8♦ 6♦ 2♦ — peu importe l'ordre. Elle est classée #5, au-dessus de la quinte et en dessous du full. Quand deux joueurs ont chacun une couleur, la carte la plus haute gagne ; les enseignes ne départagent jamais.

**Q. Qu'est-ce qu'une main full au poker ?**

A. Un full (full house, ou « boat ») est un brelan plus une paire, comme Q-Q-Q-5-5. Il est classé #4 et bat la couleur et la quinte. Entre deux fulls, c'est d'abord le brelan le plus haut qui décide — QQQ-55 bat donc JJJ-99, quelle que soit la taille de la paire.

**Q. C'est quoi une suite au poker ?**

A. La suite, qu'on appelle aussi quinte, c'est cinq cartes de rangs consécutifs, enseignes mélangées, comme 7-6-5-4-3. Elle est classée #6. L'as peut jouer en haut (10-J-Q-K-A, « Broadway ») ou en bas (A-2-3-4-5, « la roue »), mais une quinte ne peut pas faire le tour — Q-K-A-2-3 n'est pas une quinte.

**Q. La couleur bat-elle la suite au poker ?**

A. Oui. La couleur est #5 et la quinte #6, donc la couleur gagne toujours — va voir [pourquoi la couleur bat la quinte](/fr/blog/holdem-flush-vs-straight). Elle est plus haute parce que cinq cartes d'une même enseigne sont statistiquement plus difficiles à former que cinq cartes qui se suivent.

**Q. Le full bat-il la couleur ?**

A. Oui. Le full (#4) bat la couleur (#5) et la quinte. Il ne perd que contre un full plus haut, un carré, une quinte flush ou une quinte flush royale.

**Q. Qu'est-ce qui bat une suite au poker ?**

A. La couleur, le full, le carré, la quinte flush et la quinte flush royale battent tous une quinte — tout comme une quinte plus haute. Une quinte (#6) bat quand même le brelan, la double paire, la paire et la carte haute.

**Q. Qu'est-ce qui bat une couleur au poker ?**

A. Un full, un carré, une quinte flush ou une quinte flush royale battent une couleur. Contre une autre couleur, la carte la plus haute gagne. Une couleur (#5) bat quand même la quinte et tout ce qui est en dessous.

**Q. Qu'est-ce qui bat un full au poker ?**

A. Trois mains seulement battent un full : le carré, la quinte flush et la quinte flush royale. Un full plus haut gagne aussi — et on compare le brelan avant la paire, donc KKK-22 bat QQQ-AA.

**Q. Qu'est-ce qui bat une quinte flush royale ?**

A. Rien. La quinte flush royale (A-K-Q-J-10 d'une même enseigne) est la meilleure main possible au poker. Elle est imbattable — la seule « égalité » est une quinte flush royale posée entièrement sur le board, que tout le monde partage, et le pot est divisé.

**Q. Qu'est-ce qui bat une quinte flush ?**

A. Seulement une quinte flush plus haute ou une quinte flush royale (qui n'est rien d'autre que la quinte flush à l'as). Une quinte flush (#2) bat le carré et toutes les mains en dessous.

**Q. C'est quoi le kicker au poker ?**

A. Le kicker est une carte qui ne fait pas partie de ta combinaison mais qui départage les égalités. Quand deux joueurs ont la même paire, la carte d'accompagnement la plus haute (le kicker) gagne. L'as est le meilleur kicker possible.

**Q. Deux joueurs peuvent-ils avoir la même main ?**

A. Oui. Si les cinq meilleures cartes des deux joueurs sont identiques en rang, le pot est partagé (« chop »). Au Texas Hold'em, les enseignes ne départagent jamais.

**Q. Est-on obligé d'utiliser ses deux cartes fermées ?**

A. Au Hold'em, non — tu formes ta meilleure main de cinq cartes avec n'importe quelle combinaison de tes deux cartes fermées et des cinq cartes communes, y compris sans en utiliser aucune. (L'Omaha est différent : tu dois en utiliser exactement deux.)

**Q. Quelle différence entre un brelan servi (set) et un brelan (trips) ?**

A. Les deux sont des brelans. Le *brelan servi* (set), c'est une paire en main plus une carte du board (bien caché) ; le *brelan* (trips), c'est une paire sur le board plus une carte dans ta main (plus facile à lire). Le brelan servi rapporte plus de jetons.

**Q. Quelle est la combinaison la plus forte au poker ?**

A. La quinte flush royale (A-K-Q-J-10 d'une même enseigne). Elle est imbattable — la seule égalité possible est une quinte flush royale posée entièrement sur le board, que tout le monde partage, et le pot est divisé.

**Q. Qui gagne entre deux paires et un brelan ?**

A. Le brelan. Il est classé #7 et la double paire #8, donc le brelan gagne. La double paire ne bat que la paire et la carte haute.

**Q. Une quinte flush bat-elle un carré ?**

A. Oui. La quinte flush (#2) bat le carré (#3) — cinq cartes qui se suivent dans une même enseigne passent devant le carré. Les seules mains au-dessus d'une quinte flush sont une quinte flush plus haute et la quinte flush royale, qui n'en est que la version à l'as.

**Q. Quelle est la combinaison la plus faible au poker ?**

A. La pire main possible est 7-5-4-3-2 en enseignes mélangées (« hauteur sept »). C'est la plus petite carte haute qui ne forme ni paire, ni quinte, ni couleur — la main classique du « tu n'as rien ».

**Q. Peut-on avoir trois paires au poker ?**

A. Non. Au Hold'em, une main fait toujours cinq cartes, elle peut donc contenir au plus deux paires. Si tes cartes fermées et le board te donnent trois paires sur sept cartes, seules tes deux meilleures paires comptent dans la main — une carte de la troisième paire peut quand même occuper la place du kicker si c'est ta carte restante la plus haute, mais ça ne devient jamais une main « à trois paires ».

**Q. L'as compte-t-il comme un 1 dans la suite As-2-3-4-5 ?**

A. Oui. L'as joue à la fois en haut et en bas, donc A-2-3-4-5 (« la roue ») est une quinte valable — la plus petite possible. On ne peut pas faire le tour, en revanche : K-A-2-3-4 n'est pas une quinte.

**Q. Quel full est le plus fort ?**

A. Celui qui a le brelan le plus haut : la paire ne sert qu'à départager deux brelans identiques. Un full aux dames par les cinq (QQQ55) bat donc un full aux valets par les neuf (JJJ99), même si la paire de neuf est plus grosse.

**Q. Quelle est la différence entre une quinte flush et une quinte flush royale ?**

A. La quinte flush royale n'est rien d'autre que la quinte flush à l'as : A-K-Q-J-10 d'une même enseigne. Toute autre série de cinq cartes qui se suivent dans une même enseigne, comme 9♥ 8♥ 7♥ 6♥ 5♥, est une quinte flush « tout court » (#2) — et seules une quinte flush plus haute ou la royale la battent.

**Q. Quelle est la probabilité d'obtenir une quinte flush royale ?**

A. Sur cinq cartes, 1 sur 649 740 (0,000154 %). En comptant les sept cartes jusqu'à la river, 1 sur 30 940 (0,0032 %) — soit environ une fois toutes les 31 000 mains. Toutes les autres fréquences sont dans le guide des [probabilités au poker](/fr/blog/holdem-probability).

---

## À retenir

1. **L'ordre :** quinte flush royale > quinte flush > carré > full > couleur > quinte > brelan > double paire > paire > carte haute.
2. **Le piège :** la couleur (#5) bat la quinte (#6) — et n'importe quel board pairé peut cacher un full qui bat les deux.
3. **La réalité :** la plupart des pots se gagnent avec une paire ou une carte haute, donc ton kicker vaut plus que tu ne le penses.

Apprends l'ordre en un après-midi, entraîne-toi sur les paires piégeuses et fais le balayage couleur → quinte → paires sur chaque board. Fais ça, et tu ne pousseras plus jamais le pot du mauvais côté.

Une fois les combinaisons connues, l'étape suivante est de savoir avec quelles mains commencer — regarde les [mains de départ à jouer selon ta position](/fr/blog/holdem-starting-hands-chart) pour voir exactement quelles cartes fermées jouer depuis chaque siège.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Duel de mains</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Suite ou couleur : qui gagne ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les maths, les erreurs de lecture et chaque règle d'égalité</div>
  </a>
  <a href="/fr/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Égalité</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les règles pour départager</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Même paire : qui gagne ? Kicker et pot partagé</div>
  </a>
  <a href="/fr/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pot partagé</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Quand le pot est-il partagé ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le chop et les 5 cas d'égalité expliqués</div>
  </a>
  <a href="/fr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Débutants</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les règles du Texas Hold'em pour débutants</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Toutes les règles, de la distribution à l'abattage</div>
  </a>
  <a href="/fr/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Mains de départ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Quelles mains jouer selon ta position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les cartes fermées à jouer de UTG au bouton</div>
  </a>
  <a href="/fr/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Lecture du board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Lire le board au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Ta meilleure main de 5 cartes parmi 7 — board sec ou humide</div>
  </a>
</div>
`.trim(),
};
