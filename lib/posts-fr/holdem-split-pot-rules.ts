import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-split-pot-rules",
  title: "Pot partagé (split pot) au poker : quand et comment on partage le pot",
  seoTitle: "Gagné, mais la moitié ? — Pot partagé (split pot) au poker",
  desc: "Gagné, mais la moitié ? L'égalité existe au poker : quand le pot est partagé (split pot), le board qui joue pour tous, le jeton restant et le pot annexe.",
  tldr: "Oui, l'égalité existe au poker. Le pot est partagé (split pot, ou « chop ») quand deux joueurs ou plus abattent exactement la même meilleure main de cinq cartes. L'enseigne ne départage jamais, et le jeton restant va au premier joueur à égalité à gauche du bouton.",
  category: "hand-rankings",
  date: "2026-10-07",
  updated: "2026-10-11",
  masterUpdated: "2026-10-05",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🃏",
  image: "/images/holdem-split-pot-hero.webp",
  imageAlt: "Pot partagé au poker — board 8♠ 8♥ 8♦ A♣ K♠ avec J♠ 10♥ contre 5♣ 2♦, les jetons coupés en deux par une ligne dorée car aucune des deux mains ne bat le board",
  tags: ["split pot poker", "pot partagé poker", "partage du pot poker", "partage de pot poker", "jeton restant poker", "pot annexe poker", "comment partager le pot poker", "chop poker"],
  content: `
À mes débuts au poker, j'ai mené la main à chaque street : relance préflop, mise au flop et à la turn (le tournant), et un adversaire qui paie à la river (la rivière). Je retourne J♠ 10♥. Lui montre **5♣ 2♦**. « C'est pour moi, non ? » Le donneur ne dit rien et pointe le board (les cartes communes) : ==**8♠ 8♥ 8♦ A♣ K♠**==. ==r:Aucune de nos cartes fermées ne battait le brelan de huit avec as-roi en kickers==, alors le donneur a tranquillement coupé le pot en deux.

Recevoir la moitié d'un pot qu'on croyait gagné, ça surprend. Mais ==g:le pot partagé obéit à des règles claires== — et elles répondent à la question que les débutants posent le plus : **peut-il y avoir égalité au poker ?** Oui. Voici tous les cas où ça arrive.

---

> **Réponse rapide**
> Le pot est **partagé** (split pot, qu'on appelle aussi **chop**) quand deux joueurs ou plus ont **exactement la même meilleure main de cinq cartes** à l'abattage (showdown). Les jetons sont divisés à parts égales. L'enseigne ne départage jamais, et le jeton restant éventuel va au premier joueur à égalité à gauche du bouton du donneur.

---

### L'essentiel en chiffres

:::stripe
5 | cas où un pot de Hold'em est partagé
0 | égalité départagée par l'enseigne au Texas Hold'em
1 | jeton restant — il va au premier siège à égalité à gauche du bouton
:::

---

## Pot partagé (split pot) : c'est quoi ? Et un « chop », c'est pareil ?

Un **pot partagé (split pot)** se produit quand deux joueurs ou plus ont exactement la même meilleure main de cinq cartes à l'abattage : le donneur divise alors les jetons à parts égales entre eux. Un **chop** — ou « chopped pot » — c'est exactement la même chose en argot de table (« on chop »). Les règlements disent « pot partagé » ; les joueurs disent « chop ». Les deux termes sont courants, tu les verras donc employés indifféremment.

La base : ta main, ce sont toujours ==**les cinq meilleures cartes**== parmi sept — tes deux cartes fermées plus les cinq du board. Le classement de chaque main de cinq cartes est détaillé dans [l'ordre complet des combinaisons au poker](/fr/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"). ==r:Quand les cinq meilleures cartes de deux joueurs sont identiques en rang, aucun n'est « plus » gagnant que l'autre== — le pot est partagé, point final.

---

## Peut-il y avoir égalité au poker ? Les 5 cas où le pot est partagé

Oui — l'égalité est un résultat normal et parfaitement réglementaire au Texas Hold'em, et elle arrive plus souvent que les débutants ne le pensent. Comme tout le monde partage les cinq mêmes cartes communes, deux joueurs aboutissent souvent aux cinq mêmes meilleures cartes. Voici les cinq façons dont ça se produit.

### 1. Les mêmes cinq meilleures cartes
Deux joueurs font exactement la même main de cinq cartes — mêmes rangs, même si leurs cartes fermées sont d'enseignes différentes.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| | Joueur A | Joueur B |
|---|---|---|
| **Cartes fermées** | K♠ 7♣ | K♥ 2♦ |
| **Board** | K♦ K♣ Q♥ Q♦ J♠ | (le même) |
| **Cinq meilleures** | ==g:K-K-K-Q-Q== | ==g:K-K-K-Q-Q → partage== |

</div>

Les deux font le full KKK-QQ avec le board plus un roi. ==r:L'enseigne de ces rois ne compte pas.==

### 2. Le board joue
Les cinq cartes communes sont déjà la meilleure main pour tous les joueurs encore en lice — c'est le pot 8-8-8-A-K de mon histoire. C'est assez fréquent pour mériter sa propre section plus bas.

### 3. La même suite
Deux quintes (suites) avec la même carte haute sont à égalité, quelle que soit l'enseigne. Sur un board 7♣ 6♦ 5♥ K♠ 2♣, le 9♠ 8♠ de A comme le 9♥ 8♦ de B font 9-8-7-6-5 — même hauteur, donc **partage**.

### 4. La même couleur
Les enseignes n'ont pas de classement, donc deux couleurs (flush) avec les cinq mêmes rangs sont à égalité. En pratique, ça veut presque toujours dire que **le board lui-même** est une couleur de cinq cartes. Sur K♠ J♠ 8♠ 4♠ 2♠, si A a A♥ Q♦ et B a 10♥ 9♦, aucun n'a de pique — les deux jouent la couleur K-J-8-4-2 du board et **partagent**.

==r:Mais vérifie avant de supposer :== n'importe quel pique en main plus haut que le plus petit pique du board améliore la couleur. Ici, même le modeste 3♠ fait K-J-8-4-3 et ==g:remporte tout le pot== — et l'A♠ fait la couleur max (nut flush).

### 5. Identiques jusqu'au dernier kicker
Les paires et les doubles paires se décident en général au kicker — mais si les kickers sont identiques aussi, c'est un partage. Board A♦ Q♠ 9♣ 6♥ 2♠ avec A♠ K♦ contre A♥ K♣ : les deux joueurs ont ==g:A-A-K-Q-9== → **partage**. Quand les kickers *diffèrent*, le plus haut gagne seul — la façon exacte dont se fait cette comparaison, combinaison par combinaison, est dans les [règles d'égalité et du kicker](/fr/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Deux joueurs peuvent-ils gagner le même pot ? Quand le board joue pour tout le monde

Oui — et il n'y a même pas besoin de deux mains monstrueuses. Quand les cinq cartes communes forment déjà la meilleure main possible pour tous les joueurs encore en lice, ==**le board joue**== et tous les joueurs restants se partagent le pot, qu'ils soient deux ou cinq.

C'est ma main 8-8-8-A-K : mon J♠ 10♥ et son 5♣ 2♦ jouaient tous les deux le brelan de huit du board avec as-roi en kickers — cinq cartes identiques, donc partage une fois les deux mains abattues. Le cas extrême, c'est un board comme A♠ K♠ Q♠ J♠ 10♠ (une quinte flush royale) : aucune carte fermée ne peut l'améliorer, donc ==g:tous les joueurs restants partagent==.

> **Le test :** est-ce que *tes* cinq meilleures cartes — en utilisant au moins une carte fermée — battent les cinq cartes du board ? Si oui, tu joues ta main. Sinon, le board joue et tu vas probablement partager. La méthode complète pour lire un board de cette façon est dans [comment lire le board et trouver tes 5 meilleures cartes](/fr/blog/holdem-reading-the-board).

**Et le point qui compte le plus à la table : à l'abattage, face à un adversaire encore en jeu, ta main ne gagne que si tu la retournes face visible.** Une main jetée (muck) est normalement morte, même si elle aurait partagé (seule une main encore clairement identifiable peut être récupérée, et seulement à la discrétion du superviseur ; règle 109 des règles de tournoi WSOP) — quand tu joues le board, tu dois quand même montrer tes cartes fermées face visible, sinon tu perds ta part du pot (règle 172 des règles WSOP de cash game live ; les règles de tournoi WSOP la reprennent en règle 75). Qui montre en premier et comment se déroule la séquence, c'est expliqué dans les [règles de l'abattage](/fr/blog/holdem-showdown-rules).

:::tip[Si le board joue et que quelqu'un mise à la river, **se coucher par réflexe est l'erreur**. Quand rien ne peut battre le board, le partage est certain, et payer te rend quand même ta part de tout ce qui était déjà dans le pot (la moitié en heads-up) — te coucher, c'est donner cette part gratuitement. Quand le board *peut* être battu, fais le calcul de fréquence : en heads-up, face à une mise de la taille du pot, il faut que ton adversaire joue lui aussi le board environ 2 fois sur 3 ; face à une mise d'un demi-pot, environ une fois sur deux (avec plus de joueurs encore en lice, ta part d'un partage diminue et la barre monte). C'est une barre haute pour payer — et basse pour se coucher : face à une mise de la taille du pot, se coucher est correct dès qu'il a une vraie main plus d'**une fois sur trois**, et sur une river où le board peut encore être battu, c'est le cas normal.]:::

---

## 3 choses qui ne départagent jamais une égalité

![Board K♦ K♣ Q♥ Q♦ J♠ avec K♠ 7♣ à gauche et K♥ 2♦ à droite, un signe égal doré entre les deux — les deux font le même full K-K-K-Q-Q, et l'enseigne ne désigne jamais le gagnant au Texas Hold'em](/images/holdem-split-pot-suit-equals.webp "Rangs identiques = toujours partage — aucune hiérarchie des enseignes au Texas Hold'em")

Ce sont les idées reçues derrière la plupart des disputes du genre « attends, pourquoi c'est un partage ?! ».

### ❌ « Mon enseigne (pique) est plus haute, donc je gagne »
==r:Une couleur à pique ne bat **pas** une couleur à cœur.== Le Texas Hold'em n'a aucune hiérarchie des enseignes — ==des rangs identiques se partagent, point final==. (Ça piège les joueurs qui viennent de jeux où les enseignes *sont* classées.)

### ❌ « Mes cartes fermées sont plus hautes, donc je gagne »
Board 9♠ 8♦ 7♣ 6♥ 5♠ — une quinte toute faite. Tu as A♠ K♦ ; ton adversaire a 2♣ 3♥. ==r:**Partage.**== Vous jouez tous les deux le 9-8-7-6-5 du board, parce que ==r:tes grosses cartes fermées n'entrent jamais dans les cinq meilleures==. Une carte fermée haute ne compte que si elle joue vraiment, dans la combinaison elle-même ou comme kicker — [c'est quoi le kicker et quand il joue](/fr/blog/holdem-kicker) trace précisément cette limite.

### ❌ « J'ai utilisé mes deux cartes, lui une seule »
==r:Le nombre de cartes fermées que tu utilises n'a aucune importance.== Seules comptent les cinq meilleures cartes parmi sept. ==g:Si les deux joueurs aboutissent aux cinq mêmes meilleures cartes, c'est un partage, peu importe comment ils y sont arrivés.==

---

## Le jeton restant : qui le reçoit ?

Parfois, un pot ne se divise pas exactement — un pot de 101 jetons entre deux joueurs, c'est 50 chacun avec un jeton en trop, et les demi-jetons n'existent pas. Avant de pousser ce dernier jeton à qui que ce soit, le donneur le change en jetons de la plus petite valeur en jeu (TDA 2024, règle 20) : si les jetons de 5 sont les plus petits de la table, un 25 isolé devient cinq jetons de 5, qui se divisent à nouveau, et seul le jeton qui ne se divise toujours pas est le « jeton restant (odd chip) ». Ensuite, la règle standard :

> ==Le jeton restant va au premier joueur à égalité **à gauche du bouton du donneur**== (le premier siège gagnant dans le sens des aiguilles d'une montre à partir du bouton).

Dans un partage à trois avec deux jetons restants, les deux premiers sièges dans le sens des aiguilles d'une montre en reçoivent un chacun. ==r:Les règles maison peuvent varier== — quelques salles attribuent le jeton restant à la carte la plus haute ou à l'enseigne — donc s'il y a un vrai enjeu, demande au superviseur. ==g:En ligne, le logiciel l'attribue automatiquement selon la position.==

---

## Le pot annexe (side pot) se partage-t-il aussi ? Égalité avec un joueur all-in

Quand des joueurs sont all-in (à tapis) pour des montants différents et que d'autres continuent de miser, les jetons forment un ==**pot principal**== (tout le monde y a droit) plus un ou plusieurs ==**pots annexes (side pots)**== (seulement les plus gros stacks qui ont continué à miser). Chaque pot est attribué — ou partagé — ==**séparément**==, selon la meilleure main parmi les joueurs qui ont droit à ce pot.

Un exemple concret : A est all-in pour 100 ; B et C mettent chacun 300. Ça fait un **pot principal de 300** (100 × 3) et un **pot annexe de 400** (200 + 200, B et C seulement). Le board donne A♦ J♥ 7♠ 4♣ 2♥ :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| Joueur | Cartes fermées | Cinq meilleures | Résultat |
|---|---|---|---|
| A (all-in) | A♠ Q♦ | ==g:A-A-Q-J-7== | partage le pot principal → 150 |
| B | A♣ Q♥ | ==g:A-A-Q-J-7== | partage le principal (150) + gagne l'annexe (400) |
| C | K♦ K♠ | K-K-A-J-7 | perd les deux → 0 |

</div>

A et B sont à égalité avec une paire d'as et des kickers identiques, donc ils ==g:se partagent le pot principal== ; le pot annexe ne se joue qu'entre B et C, et les as de B battent nettement les rois de C. ==r:Un joueur all-in ne peut gagner ou partager que les pots auxquels il a réellement contribué.== Comment ces pots se construisent au départ — plafond, droit de relancer, ordre d'abattage —, c'est dans le [guide des règles du tapis et des side pots](/fr/blog/holdem-all-in-rules).

---

## Le pot est-il parfois partagé moitié high, moitié low ?

Pas au Texas Hold'em. Tu as peut-être entendu parler des « jeux à pot partagé » comme l'Omaha Hi-Lo ou le Stud Hi-Lo, où le pot est conçu pour se partager entre la meilleure main haute et la meilleure main basse qualifiée (huit ou mieux) — et la main haute rafle tout quand aucune main basse ne se qualifie. C'est une autre famille de jeux. ==Le Hold'em standard se joue uniquement en high== — le pot n'est partagé *que* lorsque les meilleures mains de cinq cartes sont réellement à égalité.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-reading-the-board | Lire le board : ta meilleure main de 5 cartes parmi 7 | /images/holdem-reading-the-board-hero.webp
/fr/blog/holdem-all-in-rules | Règles du tapis : side pots, relances et abattage | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. Quand le pot est-il partagé au poker ?**

A. Le pot est partagé quand deux joueurs ou plus ont exactement la même meilleure main de cinq cartes à l'abattage ; les jetons sont alors divisés à parts égales entre eux.

**Q. Comment fonctionnent les pots partagés ?**

A. Le donneur divise les jetons à parts égales entre les joueurs à égalité. Si le pot ne se divise pas exactement, le reste est d'abord changé en jetons de la plus petite valeur en jeu, et le dernier jeton restant va au premier joueur à égalité à gauche du bouton du donneur. L'enseigne ne départage jamais, et quand un joueur est all-in, le pot principal et chaque pot annexe sont partagés séparément.

**Q. Partage-t-on le pot si les deux joueurs ont la même main ?**

A. Seulement si les cinq meilleures cartes sont entièrement identiques — même paire avec les mêmes kickers, ou la même quinte, la même couleur ou le même full. Si un seul kicker diffère, le kicker le plus haut remporte tout le pot au lieu de le partager.

**Q. Un full, une suite ou une double paire peuvent-ils partager le pot ?**

A. Seulement quand les deux mains sont totalement identiques. Deux fulls se partagent uniquement si le brelan *et* la paire sont les mêmes — en général sur un board à deux paires où les deux joueurs construisent la même combinaison, exactement comme dans le cas 1 plus haut. Deux quintes ne se partagent qu'avec la même carte haute, et deux doubles paires seulement quand les deux paires et le kicker sont identiques. Dans tous les autres cas, la main la plus forte remporte tout le pot.

**Q. Que veut dire « chop » au poker ?**

A. Un « chop » (ou « chopped pot »), c'est simplement un pot partagé en argot de table. « Chop » est le mot des joueurs ; « pot partagé » (split pot) est le terme des règlements — les deux désignent la division du pot à parts égales entre des mains à égalité.

**Q. L'enseigne (pique, cœur) décide-t-elle d'un partage ?**

A. Non. Le Texas Hold'em n'a aucune hiérarchie des enseignes, donc des mains de cinq cartes identiques se partagent toujours, quelle que soit l'enseigne.

**Q. Qui reçoit le jeton restant quand le pot ne se divise pas ?**

A. Règle standard : le premier joueur à égalité à gauche du bouton du donneur. Quelques salles l'attribuent à la carte la plus haute ou à l'enseigne, donc les règles maison peuvent varier — en ligne, le logiciel s'en charge automatiquement.

**Q. Plus de deux joueurs peuvent-ils partager un pot ?**

A. Oui. Si trois joueurs ou plus ont tous exactement la même meilleure main de cinq cartes, le pot est divisé à parts égales entre eux — le plus souvent quand le board joue pour tout le monde.

**Q. Comment partage-t-on le pot quand un joueur est all-in ?**

A. Quand des joueurs sont all-in pour des montants différents et que d'autres continuent de miser, le pot se divise en un pot principal et un ou plusieurs pots annexes ; chacun est attribué ou partagé séparément, selon la meilleure main parmi les joueurs qui ont droit à ce pot précis.

**Q. Comment se forme un pot annexe (side pot) ?**

A. Chaque joueur ne peut gagner sur un adversaire que ce qu'il a lui-même misé. Si A est all-in pour 100 et que B et C misent chacun 300, le pot principal vaut 100 × 3 = 300 (les trois y ont droit) et le pot annexe 200 × 2 = 400 (B et C seulement). Chaque pot va ensuite à la meilleure main parmi les joueurs qui y ont droit.

**Q. Qui peut gagner le pot annexe ?**

A. Seulement les joueurs qui ont mis des jetons dans ce pot annexe précis — ceux qui ont misé plus que ce qu'un tapis all-in plus court pouvait égaler. Un joueur all-in n'a droit qu'au pot principal (plus les éventuels pots annexes antérieurs auxquels il a contribué), jamais à un pot annexe formé avec des jetons qu'il ne pouvait pas égaler. Chaque pot revient à la meilleure main parmi ses propres joueurs éligibles.

**Q. Peut-on gagner le pot principal et le pot annexe ?**

A. Oui. Un joueur au stack plus profond qui a la meilleure main peut gagner le pot principal et tous les pots annexes auxquels il a droit — il rafle tout. Un short stack all-in, au contraire, ne peut gagner que le pot principal (et les éventuels pots annexes antérieurs auxquels il a contribué) ; il ne peut jamais encaisser des jetons qu'il n'a pas égalés, quelle que soit la force de sa main.

**Q. Un chop en tournoi (deal), c'est la même chose qu'un pot partagé ?**

A. Non — même mot, deux choses différentes. Un pot partagé à l'abattage ne se négocie pas : quand des mains à égalité sont montrées face visible, le donneur divise les jetons. Un « chop » en tournoi est un accord volontaire (deal) entre les joueurs restants pour se répartir la dotation, en général selon les stacks ou l'[ICM](/fr/blog/holdem-icm), et il n'a lieu que si tout le monde est d'accord. Voir [tournoi ou cash game](/fr/blog/holdem-tournament-vs-cash-game) pour comprendre en quoi les gains en tournoi diffèrent.

**Q. Que se passe-t-il en cas d'égalité au poker ?**

A. Les mains se départagent d'abord par le rang de la combinaison, puis par les cartes qui la forment, puis par les kickers. Si les cinq meilleures cartes des deux joueurs restent identiques, il n'y a pas de gagnant unique : le pot est partagé à parts égales, et le jeton restant éventuel va au premier joueur à égalité à gauche du bouton. L'ordre complet est détaillé dans les [règles pour départager une égalité](/fr/blog/holdem-tiebreak-rules).

---

## À retenir

1. Oui, ==**l'égalité existe au poker**== — le pot est partagé (chop) dès que deux joueurs ou plus ont ==**exactement les cinq mêmes meilleures cartes parmi sept**==.
2. ==r:**L'enseigne, des cartes fermées plus hautes et le nombre de cartes utilisées**== ne départagent jamais une égalité.
3. Le ==**jeton restant**== va au premier joueur à égalité à gauche du bouton, et les ==**pots annexes**== se règlent séparément du pot principal.

Révise l'ordre dans [les combinaisons au poker, de la plus forte à la plus faible](/fr/blog/holdem-hand-rankings), maîtrise les mains serrées avec les [règles d'égalité et du kicker](/fr/blog/holdem-tiebreak-rules), et tranche le débat classique dans [suite ou couleur : qui gagne](/fr/blog/holdem-flush-vs-straight).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Combinaisons</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Combinaisons au poker — de la plus forte à la plus faible</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les 10 mains avec probabilités, exemples et énigmes de board</div>
  </a>
  <a href="/fr/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Départage</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles d'égalité et du kicker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Comment le kicker tranche les abattages à main égale</div>
  </a>
  <a href="/fr/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Duel de mains</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Suite ou couleur : qui gagne ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les maths et les boards derrière la confusion n°1</div>
  </a>
</div>
`.trim(),
};
