import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-flush-vs-straight",
  title: "Suite ou couleur : qui gagne au poker ? Les maths et les pièges",
  seoTitle: "Suite ou couleur, qui gagne ? — La couleur et ce qui la bat",
  desc: "Tu retournes ta suite et la couleur rafle le pot ? Au poker, la couleur bat toujours la suite : les maths, ce qui bat une couleur et 3 boards qui trompent.",
  tldr: "Au Texas Hold'em, la couleur (cinq cartes de la même enseigne, environ 0,197 % des mains de cinq cartes) bat toujours la suite (cinq cartes qui se suivent, environ 0,392 %). La raison : elle est plus rare. Sur les sept cartes jusqu'à la river, tu touches une couleur dans 3,03 % des cas, contre 4,62 % pour la suite.",
  category: "hand-rankings",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-09-28",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "⚡",
  image: "/images/holdem-flush-vs-straight-hero.webp",
  imageAlt: "Infographie : couleur hauteur as A♠ J♠ 9♠ 6♠ 2♠ à côté d'une quinte hauteur neuf, avec un badge doré FLUSH WINS qui explique pourquoi la couleur est plus forte",
  tags: ["suite ou couleur", "suite ou couleur qui gagne", "flush poker", "quinte ou couleur", "full ou couleur", "straight poker", "couleur ou suite qui gagne"],
  content: `
Le premier gros pot que j'ai perdu en cash game live s'est joué exactement comme ça : je touche une quinte hauteur dix à la river (la rivière), je l'étale sur la table comme si c'était de l'or — et un régulier discret retourne deux cœurs. ==r:Le donneur a poussé le pot de l'autre côté==, et j'ai rejoué cette main dans ma tête pendant tout le trajet du retour.

Si ça vient de t'arriver, la réponse courte est ==g:oui — la couleur bat la quinte, à chaque fois==. Le plus intéressant, c'est le *pourquoi*, ce qui bat encore une couleur, et les trois situations de board où les joueurs se trompent encore en live.

---

### La réponse courte

:::stripe
Couleur > Quinte | Aucune exception au Texas Hold'em standard
5 108 vs 10 200 | Combinaisons de couleur contre combinaisons de quinte sur cinq cartes — la couleur est ~2× plus rare
#5 vs #6 | La place de la couleur et de la quinte dans le classement des 10 mains
:::

> **Réponse rapide**
> La **couleur (flush) bat toujours la quinte (suite)** au Texas Hold'em — aucune exception dans le jeu standard. Une couleur (cinq cartes de la même enseigne) est statistiquement plus difficile à faire qu'une quinte (cinq cartes qui se suivent) : environ **5 108** combinaisons de cinq cartes contre **10 200**.

---

## Suite ou couleur : qui gagne ? Où se placent les deux mains

La couleur gagne — et ce n'est même pas une question d'appréciation. ==Elle se trouve un cran au-dessus de la quinte, et ça ne change jamais au Hold'em standard.== Voici le voisinage des deux mains que les joueurs confondent le plus :

| Rang | Main | Exemple |
|------|------|------|
| #2 | Quinte flush | 9♥ 8♥ 7♥ 6♥ 5♥ |
| #4 | Full | J♠ J♥ J♦ 8♠ 8♥ |
| **#5** | **Couleur** | A♠ J♠ 9♠ 6♠ 2♠ |
| **#6** | **Quinte** | 9♣ 8♥ 7♦ 6♣ 5♠ |
| #7 | Brelan | Q♠ Q♥ Q♦ 7♠ 3♣ |

Tu veux les dix mains avec leurs probabilités, des exemples et des énigmes de board ? Tout est dans le [guide des combinaisons au poker](/fr/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") — cet article zoome sur le duel couleur contre quinte et ses voisins les plus proches.

---

## Pourquoi est-il plus probable d'obtenir une suite qu'une couleur ?

Parce qu'il existe beaucoup plus de façons de la former : 10 200 quintes contre 5 108 couleurs parmi les mains de cinq cartes, soit 0,392 % contre 0,197 % — et encore 4,62 % contre 3,03 % sur les sept cartes jusqu'à la river. Au poker, la force d'une main se décide sur un seul critère : **à quel point elle est difficile à faire**. Plus elle est rare, plus elle est haute dans le classement. Rien dans cet ordre n'est arbitraire — c'est de la pure fréquence.

Compte les 2 598 960 mains de cinq cartes possibles avec un jeu de 52 cartes, et l'ordre se dessine tout seul :

| Main | Combinaisons | Probabilité | Verdict |
|:---|:---:|:---:|:---|
| Carré | 624 | 0,024 % | Bat la couleur |
| Full | 3 744 | 0,144 % | Bat la couleur |
| **Couleur** | **5 108** | **0,197 %** | **Bat la quinte ✅** |
| **Quinte** | **10 200** | **0,392 %** | **Perd contre la couleur ❌** |
| Brelan | 54 912 | 2,11 % | Perd contre la quinte |

Une quinte a à peu près ==r:**deux fois** plus de façons de se former qu'une couleur== — 10 200 contre 5 108 parmi les 2 598 960 mains de cinq cartes. Sur les sept cartes jusqu'à la river, l'écart se réduit à environ ==1,5×== (4,62 % contre 3,03 %), mais le sens ne change jamais : la quinte sort plus souvent, et c'est précisément ce qui en fait la main la plus faible. La même règle de fréquence sur cinq cartes explique toute l'échelle (sur sept cartes, une simple carte haute est même plus rare qu'une double paire, mais l'ordre a été fixé sur cinq cartes) ; les chiffres exacts de chaque main sont dans le [tableau des probabilités au poker](/fr/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

### Pourquoi ça semble à l'envers

Une quinte a seulement besoin de cinq rangs consécutifs, et ==**les enseignes ne comptent pas**==. Cette liberté crée un nombre énorme de combinaisons. La couleur, c'est l'inverse : les cinq cartes doivent toutes partager ==**la même enseigne**==, et une seule des quatre enseignes peut le faire à la fois. ==g:Beaucoup moins de chemins pour y arriver, donc la couleur est plus rare — et, entre les catégories de mains, la plus rare est toujours classée plus haut.==

:::tip[Si tu as un tirage couleur et que ton adversaire tire à la quinte, tu gagnes le duel — quand les **deux** tirages rentrent, ta couleur bat sa quinte à l'abattage. Ce n'est pas pour autant que tu es favori : si son tirage quinte s'accompagne d'une paire ou de cartes plus hautes, il peut encore être devant avant la river.]:::

---

## 3 boards qui piègent encore les joueurs

![Board 8♥ 7♥ 6♥ 5♠ A♣ — trois cœurs sur le board : une couleur est possible même si tu as une quinte](/images/holdem-flush-vs-straight-board.webp "Trois cartes de la même enseigne sur le board — une couleur est possible contre ta quinte")

Connaître la règle, ce n'est pas la même chose que la lire en direct — c'est exactement ce que travaille [la lecture du board](/fr/blog/holdem-reading-the-board). Voici les trois situations où l'erreur arrive vraiment.

### Cas 1 — Tu fais une suite, mais le board a trois cartes de la même enseigne

:::hand[8♥,7♥,6♥,5♠,A♣] Board (5 cartes):::

Tu as **9♠ 10♠**, soit une quinte nette **6-7-8-9-10**. Ça paraît solide — mais le board (les cartes communes) montre **trois cœurs**. Si ton adversaire a deux cœurs, il a une couleur, et **la couleur bat la quinte**. Dès que trois cartes ou plus de la même enseigne sont sur le board, une couleur est possible ; ajuste tes mises et ta façon de payer en conséquence.

### Cas 2 — Une suite faite, avec un tirage couleur par-dessus

:::hand[8♥,7♥,6♠,2♣] Board (4 cartes, turn):::

Tu as **9♥ 5♥**. Tu as déjà la **quinte 5-6-7-8-9** — alors pourquoi garder un œil sur les cœurs ? Parce que tu as aussi **quatre cartes à la couleur** (9♥ 8♥ 7♥ 5♥) : n'importe quel cœur à la river transforme ta quinte en couleur, et le **6♥ en particulier** complète une **quinte flush 5-6-7-8-9 (#2)** qui écrase tout. Quand tu peux tirer gratuitement à une main plus forte, joue en gardant cette amélioration en tête.

==r:**Deux mises en garde vont avec.**== D'abord, cette quinte **n'est pas les nuts** — quiconque tient 10-9 a déjà la quinte supérieure 10-9-8-7-6. Ensuite, ton cœur le plus haut est le ==9♥==. Tout cœur à la river sauf le 6♥ donne aussi une couleur à chaque adversaire qui tient deux cœurs, et un seul cœur au-dessus du neuf suffit à te battre — A♥ 2♥ le fait. L'amélioration est réelle, mais ce n'est ==r:pas une raison pour gonfler le pot==.

### Cas 3 — Tu as la couleur, l'adversaire retourne une suite

:::hand[J♠,9♠,7♠,4♣,2♦] Board (5 cartes):::

Tu as **A♠ 6♠** → **A♠ J♠ 9♠ 7♠ 6♠**, une couleur hauteur as. Ton adversaire montre **10♥ 8♦** pour une quinte 7-8-9-10-J et l'annonce avec assurance. Ne cille pas : ta couleur est plus forte. La couleur bat la quinte, toujours.

---

## Qu'est-ce qui bat une couleur au poker ?

Ta couleur bat la grande majorité des mains — mais exactement **quatre types de mains** (plus une couleur plus haute) la battent :

:::compare
Bat ta couleur | Perd contre ta couleur
Full (#4) | Quinte (#6)
Carré (#3) | Brelan (#7)
Quinte flush (#2) | Double paire (#8)
Quinte flush royale (#1) | Paire et carte haute (#9–#10)
Une couleur plus haute | Toute couleur plus basse
:::

Le duel qui fait le plus débat après couleur contre quinte, c'est **couleur contre full** — et le full gagne. J'ai payé plus de fulls sur board pairé avec une jolie couleur max que je n'aimerais l'admettre, alors le signal de danger que je surveille maintenant est simple : un **board pairé**. Regarde celui-ci :

:::hand[K♠,9♠,9♥,4♠,2♦] Board (5 cartes):::

Tu as **A♠ 5♠** pour la couleur max (nut flush) : **A♠ K♠ 9♠ 5♠ 4♠**. Ton adversaire tient **K♦ 9♦** et abat **9♦ 9♠ 9♥ K♦ K♠** — full aux neuf par les rois. ==r:Le full bat la couleur==, et aucune couleur n'y survit. Sur un board non pairé, la couleur max n'est battue que par une quinte flush ; dès que le board se paire, les fulls et les carrés entrent en jeu.

Quand deux joueurs ont le *même* type de main, le gagnant se décide carte par carte — tout le système est dans les [règles d'égalité et du kicker au poker](/fr/blog/holdem-tiebreak-rules).

---

## Full ou couleur, brelan ou suite : qui gagne ?

Ces duels se règlent tous avec le même classement — celui du tableau plus haut et de la liste juste au-dessus. Pas besoin de nouveaux calculs :

- **Full contre couleur** → ==g:le full gagne== (#4 contre #5), comme dans la main K♠ 9♠ 9♥ 4♠ 2♦ ci-dessus.
- **Carré contre couleur** → le carré gagne (#3 contre #5).
- **Couleur contre brelan** → la couleur gagne (#5 contre #7).
- **Quinte contre brelan** → ==g:la quinte gagne== (#6 contre #7) : un brelan ne bat jamais une quinte.

La logique reste la même partout : la main la plus rare sur cinq cartes est la plus haute. Le brelan (54 912 combinaisons) sort bien plus souvent que la quinte (10 200), d'où sa place en dessous.

---

## Couleur contre couleur, suite contre suite : qui gagne en cas d'égalité ?

La plus forte couleur gagne : une couleur peut tout à fait en battre une autre. **Les enseignes ne comptent pas** — on compare les cinq cartes de haut en bas, la plus haute d'abord :

| Joueur | Couleur | Résultat |
|--------|------|------|
| A | A♠ J♠ 9♠ 6♠ 2♠ | **Gagne** |
| B | K♥ Q♥ 10♥ 8♥ 3♥ | Perd |

L'as du joueur A domine le roi du joueur B dès la première carte, donc A gagne. Une couleur à pique ne bat **pas** une couleur à cœur — seuls les rangs comptent. (Dans une vraie main de Hold'em, deux couleurs sont toujours de la *même* enseigne, puisqu'elles se construisent avec le board commun — les enseignes mélangées ici servent seulement d'illustration.)

Pour les quintes, c'est encore plus simple : on compare **la carte la plus haute** seulement — il n'y a pas de kicker.

- **A-K-Q-J-10** (hauteur as, « Broadway », la quinte à l'as) est la quinte la plus forte.
- **A-2-3-4-5** (la roue, ou wheel : l'as joue en bas) est la plus faible.

| Joueur | Quinte | Résultat |
|--------|------|------|
| A | Q-J-10-9-8 | **Gagne** |
| B | J-10-9-8-7 | Perd |

La dame domine le valet, donc A gagne. Si les cinq meilleures cartes des deux joueurs sont identiques rang pour rang, c'est un [pot partagé](/fr/blog/holdem-split-pot-rules).

---

## C'est quoi une quinte flush ? Quand les deux arrivent en même temps

![9♥ 8♥ 7♥ 6♥ 5♥ — une quinte flush à cœur, la main n°2 au poker](/images/holdem-flush-vs-straight-sf.webp "Quinte flush — cinq cœurs qui se suivent ; seule une quinte flush plus haute ou une quinte flush royale la bat")

Une **quinte flush** (straight flush), ce sont cinq cartes *consécutives* d'*une seule enseigne* — comme 9♥ 8♥ 7♥ 6♥ 5♥. C'est la **main n°2 au poker** : seule une quinte flush plus haute ou une quinte flush royale (qui n'est rien d'autre que la quinte flush hauteur as, A-K-Q-J-10 de la même enseigne) la bat. Avec seulement **36 combinaisons** (~0,00139 % des mains de cinq cartes ; environ 0,028 % à la river au Hold'em), elle est plus rare que tout, sauf la royale elle-même.

Le piège : ==les *mêmes cinq cartes* doivent être à la fois de la même enseigne et consécutives==. Regarde la différence sur le board **8♥ 7♥ 6♥ Q♠ 3♦** :

- Avec **K♥ 2♥** → tes cinq cœurs sont K-8-7-6-2. Pas consécutifs — c'est ==une simple couleur, pas une quinte flush==.
- Avec **10♥ 9♥** → tes cinq cœurs sont 10-9-8-7-6. Consécutifs *et* de la même enseigne — ==g:une quinte flush hauteur dix==.

Si ta quinte utilise certaines cartes et ta couleur d'autres, tu ne les additionnes pas — tu joues simplement la plus forte des deux, la couleur.

---

## L'ordre des mains change-t-il en Short Deck ?

Oui — le Short Deck (6+) Hold'em est le seul format courant qui réordonne ces mains. En **Short Deck (6+) Hold'em**, on retire du paquet les 2 à 5. Avec moins de cartes, la couleur devient *plus difficile* à faire que le full — donc dans ce format, le classement change et ==r:**la couleur bat le full**==. La logique est la même qu'avec le paquet complet : entre ces deux mains, ==la plus rare est la plus haute==. Seul le paquet a changé. Au Texas Hold'em standard avec un jeu complet de 52 cartes, ==g:la couleur bat la quinte et perd contre le full, à chaque fois==.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-tiebreak-rules | En cas d'égalité au poker, qui gagne ? | /images/holdem-tiebreak-hero.webp
/fr/blog/holdem-split-pot-rules | Pot partagé (split pot) au poker | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. Qui est plus fort, la suite ou la couleur ?**

A. La couleur. Elle est la main n°5 et la quinte la n°6, donc la couleur gagne toujours au Texas Hold'em standard. Cinq cartes de la même enseigne sont statistiquement plus difficiles à réunir que cinq cartes qui se suivent, et parmi les mains de cinq cartes, la main la plus rare est toujours la plus haute.

**Q. Une suite peut-elle battre une couleur ?**

A. Non. Une quinte (#6) ne bat jamais une couleur (#5) au Texas Hold'em standard. La confusion est fréquente parce qu'une quinte peut sembler plus dure à compléter, mais la couleur est plus rare — 5 108 contre 10 200 façons parmi les mains de cinq cartes, et 3,03 % contre 4,62 % sur sept cartes — donc la couleur remporte toujours le pot.

**Q. Pourquoi la couleur bat-elle la suite ?**

A. Pour une raison purement mathématique. Une quinte ignore les enseignes, donc il existe environ 10 200 façons d'en faire une, contre seulement 5 108 pour une couleur. La couleur est ainsi environ deux fois plus rare parmi les mains de cinq cartes ; sur les sept cartes jusqu'à la river, il reste un facteur d'environ 1,5 (3,03 % contre 4,62 %). Compté sur les mains de cinq cartes, ce qui a servi à fixer l'ordre, le plus rare est toujours le plus haut.

**Q. Quelles mains battent une couleur ?**

A. Le full, le carré, la quinte flush et la quinte flush royale battent tous une couleur — tout comme une couleur plus haute (meilleure carte de tête). Tout ce qui est en dessous (quinte, brelan, double paire, paire, carte haute) perd contre elle.

**Q. Qu'est-ce qui bat une suite au poker ?**

A. La couleur, le full, le carré, la quinte flush et la quinte flush royale battent tous une quinte — plus toute quinte plus haute. La quinte bat quand même le brelan et tout ce qui est en dessous. L'ordre complet, de la plus forte à la plus faible, est dans [le classement des combinaisons](/fr/blog/holdem-hand-rankings).

**Q. Peut-on avoir une couleur plus forte qu'un autre joueur ?**

A. Oui. Deux couleurs se comparent carte par carte de haut en bas : une couleur hauteur as bat une couleur hauteur roi. Si les cartes de tête sont égales, la deuxième plus haute décide, et ainsi de suite sur les cinq.

**Q. Une couleur à pique bat-elle une couleur à cœur ?**

A. Non. Le Texas Hold'em n'a pas de hiérarchie des enseignes. Les enseignes servent seulement à *former* une couleur, jamais à comparer des mains — quand deux couleurs s'affrontent (toujours de la même enseigne au Hold'em, puisqu'elles partagent les cartes du board), seuls les rangs décident, et des rangs identiques partagent le pot.

**Q. Une suite et une couleur peuvent-elles partager le pot ?**

A. Non. Une main est toujours classée au-dessus de l'autre, donc la couleur gagne, tout simplement. Un partage n'arrive qu'entre deux mains du même rang avec exactement les mêmes valeurs sur les cinq cartes.

**Q. Qui est le plus fort entre le full et la couleur ?**

A. Le full. Il est la main n°4, la couleur la n°5, donc le full gagne toujours au Texas Hold'em standard. Le danger apparaît dès que le board est pairé : sur K♠ 9♠ 9♥ 4♠ 2♦, la couleur max perd contre K♦ 9♦ (full aux neuf par les rois). Seule exception de format : en Short Deck (6+), la couleur bat le full.

**Q. Un brelan ou une double paire peuvent-ils battre une couleur ?**

A. Non. Le brelan (#7) et la double paire (#8) sont tous les deux sous la couleur (#5) — et même sous la quinte (#6). Peu importe leur hauteur : un brelan d'as ou deux paires as-rois perdent contre n'importe quelle couleur. Pour battre une couleur, il faut un full, un carré, une quinte flush ou une couleur plus haute.

---

## À retenir

1. **La couleur (#5) bat la quinte (#6)** — aucune exception au Hold'em standard.
2. Elle gagne parce qu'elle est plus rare : **5 108** combinaisons de couleur contre **10 200** combinaisons de quinte parmi les mains de cinq cartes — et 3,03 % contre 4,62 % sur les sept cartes jusqu'à la river.
3. Surveille le board : **trois cartes de la même enseigne** signifient qu'une couleur est possible, un **board pairé** qu'un full peut battre ta couleur, et des cartes de la même enseigne *et* connectées, c'est une quinte flush.

Fixe l'ordre complet avec [toutes les combinaisons au poker](/fr/blog/holdem-hand-rankings), apprends comment se décident les mains serrées dans le [guide des égalités et du kicker](/fr/blog/holdem-tiebreak-rules), et si tu débutes complètement, le [guide des règles du Texas Hold'em pour débutants](/fr/blog/texas-holdem-rules-for-beginners) relie le tout.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Combinaisons</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">L'ordre des mains au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les 10 mains avec probabilités, exemples et énigmes de board</div>
  </a>
  <a href="/fr/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Départage</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles d'égalité et du kicker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Même couleur ou même quinte — qui remporte le pot ?</div>
  </a>
  <a href="/fr/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pot partagé</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Quand le pot est-il partagé ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">5 cas de partage, couleurs identiques comprises</div>
  </a>
</div>
`.trim(),
};
