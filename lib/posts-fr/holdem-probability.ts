import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Tableau des probabilités au poker : les vraies cotes de chaque main",
  seoTitle: "Tu touches tant que ça ? — Tableau des probabilités au poker",
  desc: "Une paire à la river, c'est 43,8 % ; une quinte flush royale, environ 1 fois sur 31 000. Le tableau des probabilités au poker, du préflop à la river.",
  tldr: "À la river, tu termines avec une paire 43,8 % du temps, une double paire 23,5 %, une couleur 3,0 % et un full 2,6 %. La quinte flush royale, elle, n'apparaît qu'environ 1 fois sur 31 000 mains.",
  category: "odds",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-01",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Vue plongeante d'une table de Texas Hold'em en pleine main, avec cinq cartes communes, des piles de jetons éparpillées et des joueurs en action",
  tags: ["probabilité poker", "tableau probabilité poker", "probabilité quinte flush royale", "probabilité main poker", "probabilité poker main départ", "probabilité carré poker", "probabilité d'avoir une paire", "règle du 2 et du 4"],
  content: `
La première fois que j'ai joué une paire de cinq en set mining (jouer pour toucher un brelan) dans une partie live et que j'ai touché mon brelan servi (set) au flop, le gars à côté de moi a soupiré « c'est quoi, les *chances* ? » — et je le savais vraiment : environ ==1 sur 8,5==. C'est ce seul chiffre qui m'avait fait suivre au départ.

Le poker n'est pas un jeu de devinettes. Suivre, te coucher, faire tapis : chaque décision est une ==question de probabilité déguisée==, et les joueurs qui gagnent sont ceux qui ont transformé « quelles sont les chances ? » en réflexe. Voici le ==**tableau des probabilités au poker**== pour le Texas Hold'em — chaque main faite, chaque flop, chaque tirage jusqu'à la river (la rivière) — avec ==g:le raccourci mental== qui te permet de faire le calcul à la table en deux secondes.

---

### Les chiffres qui comptent le plus

:::stripe
43,8 % | Une paire à la river
23,5 % | Une double paire
3,0 % | Une couleur
2,6 % | Un full
1 sur 30 940 | Une quinte flush royale (royal flush)
:::

---

## Tableau des probabilités au poker : chaque main sur 7 cartes, à la river

> **Réponse rapide**
> La probabilité d'une main dépend du nombre de cartes que tu peux utiliser. Au Hold'em, les cinq meilleures cartes sur sept donnent une paire 43,8 % du temps et une double paire 23,5 %. Ces fréquences à la river diffèrent d'une donne aléatoire de cinq cartes : choisis la bonne colonne avant de comparer la rareté de deux mains.

- **Probabilité sur 5 cartes** = la chance qu'une main aléatoire de cinq cartes *soit* cette main (le chiffre classique des manuels).
- **Hold'em (à la river)** = la chance de *finir* avec cette main après avoir vu les sept cartes (tes deux cartes fermées + les cinq cartes du board (les cartes communes)). C'est le chiffre qui compte vraiment à la table.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Main | Probabilité sur 5 cartes (distribuées) | Probabilité au Hold'em sur 7 cartes (à la river) |
|:---|:---:|:---:|
| Quinte flush royale | 1 sur 649 740 (0,000154 %) | 1 sur 30 940 (0,0032 %) |
| Quinte flush | 1 sur 72 193 (0,00139 %) | 1 sur 3 590 (0,0279 %) |
| Carré | 1 sur 4 165 (0,0240 %) | 1 sur 595 (0,168 %) |
| Full | 1 sur 694 (0,144 %) | 1 sur 39 (2,60 %) |
| Couleur | 1 sur 509 (0,197 %) | 1 sur 33 (3,03 %) |
| Quinte (suite) | 1 sur 255 (0,392 %) | 1 sur 22 (4,62 %) |
| Brelan | 1 sur 47 (2,11 %) | 1 sur 21 (4,83 %) |
| Double paire | 1 sur 21 (4,75 %) | 1 sur 4,3 (23,5 %) |
| Paire | 1 sur 2,4 (42,3 %) | 1 sur 2,3 (43,8 %) |
| Carte haute (hauteur) | 1 sur 2,0 (50,1 %) | 1 sur 5,7 (17,4 %) |

</div>

> **La statistique qui surprend tout le monde**
> La carte haute est la main de cinq cartes la *plus* fréquente (50,1 %), mais au Hold'em elle tombe à **17,4 %** — troisième seulement, derrière la paire (43,8 %) et la double paire (23,5 %). Pourquoi ? Sept cartes te donnent tellement d'occasions de t'apparier que « pas de paire à la river » devient l'exception. Plus de cartes, plus de connexions.

Le classement suit la **colonne sur cinq cartes** : plus une main est rare parmi cinq cartes au hasard, plus elle est forte — sans aucun trou, de la carte haute jusqu'à la quinte flush royale. Sur sept cartes, c'est vrai partout sauf pour la carte haute, plus rare que la paire (43,8 %) et pourtant toujours dernière. C'est toute la logique du [classement des mains au poker](/fr/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") : la probabilité *est* le classement — mesurée sur cinq cartes.

:::quiz:::

---

## Tableau préflop : quelle est la probabilité de recevoir chaque main de départ ?

> **Réponse rapide**
> Une paire d'as arrive environ une fois toutes les 221 donnes, mais une paire servie quelconque environ une fois sur 17. Tout se joue sur le nombre de combinaisons : il existe 1 326 donnes de deux cartes possibles, et une paire précise n'en représente que six. Deux cartes assorties quelconques arrivent 23,5 % du temps, alors qu'A-K assortis précisément ne fait que 0,30 %.

![Une paire d'as — l'as de pique et l'as de cœur tout juste distribués sur le tapis vert, à côté de jetons](/images/holdem-probability-starting-hands.webp "Une paire d'as : la meilleure main de départ, distribuée une fois seulement toutes les 221 mains")

Avant tout flop, il existe exactement **1 326 mains de départ de deux cartes possibles**. Voici à quelle fréquence arrivent celles qu'on demande le plus souvent.

| Main de départ | Probabilité | Fréquence |
|:---|:---:|:---|
| Une paire servie précise (ex. A-A) | 1 sur 221 (0,45 %) | Une fois toutes les ~221 mains |
| **N'importe quelle** paire servie | 1 sur 17 (5,9 %) | Environ deux fois par heure en live |
| A-K assortis (précis) | 1 sur 332 (0,30 %) | Rare |
| A-K (assorties *ou* dépareillées) | 1 sur 83 (1,2 %) | — |
| Deux cartes assorties quelconques | 1 sur 4,3 (23,5 %) | Presque une main sur quatre |

Alors la prochaine fois que quelqu'un dit « je ne touche jamais les as », il a à peu près raison — tu ne reçois une paire *précise* comme les as qu'environ ==une fois toutes les 221 mains==. Mais **n'importe quelle** paire servie arrive toutes les 17 mains, et c'est pour ça que le set mining est une vraie stratégie, pas un fantasme. Quelles paires et quelles mains assorties valent la peine d'être jouées depuis chaque siège, c'est l'objet du [guide des mains de départ par position](/fr/blog/holdem-starting-hands-chart).

---

## Quelle est la probabilité de flopper un brelan, une couleur ou une quinte ?

> **Réponse rapide**
> Avec une paire servie, tu floppes un brelan ou mieux 11,8 % du temps. Avec deux cartes assorties, une couleur faite au flop ne tombe que 0,84 % du temps, contre 10,9 % pour un tirage couleur. Ce sont des probabilités conditionnelles : pars des cartes fermées indiquées dans le tableau, pas de la fréquence de cette main sur l'ensemble des donnes.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tu floppes… | Avec | Probabilité | Contre |
|:---|:---|:---:|:---:|
| Un brelan (ou mieux) | Une paire servie | 11,8 % | ~7,5 contre 1 |
| Une couleur | Deux cartes assorties | 0,84 % | ~118 contre 1 |
| Un tirage couleur | Deux cartes assorties | 10,9 % | ~8 contre 1 |
| Une quinte | Connecteurs assortis (ex. 8-7) | 1,3 % | ~76 contre 1 |
| Une double paire | Deux cartes non appariées | 2,0 % | ~49 contre 1 |
| Un full | Une paire servie | 0,98 % | ~101 contre 1 |
| Un carré | Une paire servie | 0,245 % | ~407 contre 1 |

</div>

Pour le set mining, ==7,5 contre 1 est un seuil de rentabilité théorique, pas une règle de stack suffisante== : il suppose que chaque brelan touché gagne et se fait payer. En pratique, le repère habituel — des stacks effectifs de 15–20× le montant à suivre — laisse de la marge pour la valeur manquée et les brelans perdants ; et même ce repère est une heuristique, pas un call automatique. C'est le pont vers la [cote du pot](#pot-odds), plus bas. Pour la démonstration complète de chaque ligne de ce tableau — plus la règle de stack du set mining et la distinction couleur faite / tirage / complétée — vois l'article détaillé sur les [probabilités des tirages et de chaque main au flop](/fr/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Quelle est la probabilité de compléter un tirage couleur ou un tirage quinte à la river ?

> **Réponse rapide**
> Un tirage couleur à neuf outs rentre environ 35 % du temps sur la turn (le tournant) et la river réunies, contre 19,6 % sur la seule river après une turn ratée. Un tirage quinte à huit outs est un peu moins probable. Ce sont des probabilités de compléter, pas des victoires garanties : retire d'abord les cartes qui améliorent ta main mais laissent l'adversaire devant.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tirage | Outs | Flop → river (2 cartes) | Turn → river (1 carte) |
|:---|:---:|:---:|:---:|
| Couleur + quinte bilatérale (tirage combiné) | 15 | 54,1 % | 32,6 % |
| Couleur + gutshot | 12 | 45,0 % | 26,1 % |
| Tirage couleur | 9 | 35,0 % | 19,6 % |
| Tirage quinte bilatéral | 8 | 31,5 % | 17,4 % |
| Deux overcards | 6 | 24,1 % | 13,0 % |
| Gutshot (tirage ventral) | 4 | 16,5 % | 8,7 % |
| Paire → brelan | 2 | 8,4 % | 4,3 % |
| Brelan → full ou carré | 7 (flop) / 10 (turn) | 33,4 % | 21,7 % |

</div>

La ligne des six outs d'overcards (cartes plus hautes que le board) suppose qu'apparier l'un ou l'autre rang suffit à gagner. Face à une double paire, un brelan ou un tirage plus fort, une partie ou la totalité de ces cartes peuvent être des outs « sales » (dirty outs) — décompte-les au lieu de traiter six outs comme gagnants à coup sûr. La ligne du brelan compte aussi la quatrième carte de ton rang : le full seul fait environ 29,1 % depuis le flop et 19,6 % à la turn.

Le spot classique : tu floppes un **tirage couleur** (neuf outs). Tu le complètes ==35 % du temps d'ici la river== — mieux qu'une fois sur trois. Un **tirage quinte bilatéral** (huit outs) rentre 31,5 % du temps. Regarde les deux colonnes : dès que la turn ne t'aide pas, il te reste une carte à venir au lieu de deux, et tes chances sont à peu près divisées par deux — 35 % devient 19,6 % pour le tirage couleur —, c'est exactement pour ça qu'un tirage coûte de plus en plus cher à poursuivre, street après street.

---

## Comment calculer les probabilités au poker ? Les outs et la règle du 2 et du 4

> **Réponse rapide**
> La règle du 2 et du 4 estime le pourcentage de chances de compléter un tirage : compte deux fois tes outs pour une carte à venir et quatre fois tes outs pour la turn et la river réunies. L'estimation sur deux cartes ne sert à évaluer un call au flop que si tu n'as rien à repayer pour voir les deux cartes. C'est un raccourci, pas une équité exacte.

:::steps
Compte tes outs | Les cartes non vues qui complètent ta main (tirage couleur = 9)
Au flop, si tu vois les deux cartes sans repayer | Multiplie outs × 4 → ton % approximatif de toucher d'ici la river
À la turn (1 carte à venir) | Multiplie outs × 2 → ton % approximatif de toucher à la river
:::

**Exemple concret.** Tu as quatre cartes à la couleur après le flop. Ça fait ==9 outs== (les 13 cartes de ta couleur − les 4 que tu vois). Au flop : 9 × 4 = **36 %** — le vrai chiffre est 35,0 %, tu tombes pile. À la turn si tu as raté : 9 × 2 = **18 %** (en réalité : 19,6 %).

:::tip[L'estimation ×4 est déjà un peu haute à 7 outs ; l'écart pèse plus lourd avec les gros tirages. Avec un monstre à 15 outs, « ×4 » annonce 60 % alors que le vrai chiffre est 54 % — retire quelques points sur les gros tirages.]:::

C'est tout le raccourci : des outs propres → le multiplicateur correspondant aux cartes que tu verras → une estimation de tirage à utiliser avec ton [équité (equity)](/fr/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"). Le reste consiste simplement à savoir quoi faire de ce chiffre. La seule compétence que cette règle suppose acquise, c'est le comptage lui-même — pour les tirages combinés, les outs qui se chevauchent et les outs « sales » qui ne doivent pas compter, vois le guide pour [compter ses outs au poker](/fr/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Cote du pot : quand suivre et quand se coucher ?

> **Réponse rapide**
> Les cotes du pot (pot odds) transforment un call en objectif d'équilibre : divise le montant à suivre par le pot une fois ce montant ajouté. Compare ce prix à tes chances de gagner sur les cartes que ce call t'achète vraiment. Un chiffre de couleur sur deux cartes ne justifie pas de payer pour la seule turn si une autre mise peut suivre ; les gains futurs s'estiment à part.

![Infographie de la cote du pot — un pot de $100 et $25 à suivre : 25 ÷ 125, il te faut 20 % d'équité](/images/holdem-probability-pot-odds.webp "Suivre $25 dans un pot de $100 : 25 ÷ 125 = 20 % d'équité nécessaire pour être à l'équilibre")

**Exemple concret.** Le pot est de $100. Ton adversaire mise $50, ce qui le porte à $150. Tu dois suivre $50 pour gagner ces $150.

:::steps
Pot après la mise | $100 + $50 = $150
Ton call | $50 pour gagner $150 (pot final $200)
Cote du pot | 50 ÷ 200 = 25 % — il te faut au moins 25 % d'équité
Ton équité | Tirage couleur avec 9 outs propres ≈ 35 % d'ici la river — le chiffre de la règle du 4, qui suppose que tu vois ==les deux== cartes
Décision | Avec deux cartes à venir : 35 % > 25 % → ==g:suivre==, clairement rentable
:::

C'est le moment où tous ces chiffres paient — mais **associe le chiffre à la street que tu paies**. Quand les deux cartes arrivent (tu es à tapis, ou la turn passe sur deux checks), les **35 %** d'un tirage propre battent le prix de **25 %**, et suivre rapporte sur le long terme même si tu perdras la main plus souvent que tu ne la gagneras. Quand ton adversaire va remiser à la turn, ce call ne t'achète que la turn — depuis le flop, c'est ==9 ÷ 47 = 19,1 %==, *sous* le prix — et le tirage a alors besoin de [cotes implicites (implied odds)](/fr/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp"), l'argent que tu gagnes sur les streets suivantes une fois touché, pour combler l'écart. Dépenser le chiffre ×4 sur une décision à une seule carte est la façon la plus courante dont les débutants surestiment un tirage. Pour la méthode complète et l'antisèche des tailles de mise, vois [comment calculer la cote du pot](/fr/blog/holdem-pot-odds).

---

## Quelle est la probabilité d'une quinte flush royale (et d'une quinte flush) ?

> **Réponse rapide**
> Une quinte flush royale apparaît environ une fois sur 30 940 mains de Hold'em à sept cartes, bien plus souvent que dans une donne de cinq cartes. Une quinte flush non royale fait environ 1 sur 3 590 à la river — moins rare, mais toujours exceptionnelle. Aucun de ces chiffres ne décrit tes chances sur un tirage précis : une fois tes cartes et le flop connus, le calcul dépend de ces cartes.

![Infographie d'une quinte flush royale à cœur — A♥ K♥ en main complètent A-K-Q-J-10 à cœur sur un board 10♥ J♥ Q♥](/images/holdem-probability-royal-flush.webp "Une quinte flush royale à cœur : la main la plus rare du poker, environ 1 sur 30 940 à la river")

- **Quinte flush royale :** en main de cinq cartes distribuée, ==1 sur 649 740==. En jouant au Hold'em jusqu'à la river, elle passe à environ 1 sur 30 940 parce que tu choisis tes cinq meilleures cartes parmi sept. Dans les deux cas, la plupart des joueurs passent des *années* entre deux.
- **Quinte flush :** environ 1 sur 72 193 en main de cinq cartes (environ 1 sur 3 590 à la river au Hold'em). Pour la plupart, une apparition par an.

Pourquoi si rare ? Une quinte flush royale, c'est exactement **une séquence de cartes précise dans une couleur précise** — quatre façons de la faire dans tout le paquet, contre 1 302 540 façons de faire une simple carte haute. Cette rareté est toute la raison de sa place au sommet du classement.

:::note
Un mythe courant : « la quinte flush royale bat tout, donc elle peut être *à égalité* ». Le pot peut bien être partagé, mais pas comme on l'explique d'habitude. Deux quintes flush royales de couleurs *différentes* demanderaient dix cartes précises, et deux joueurs n'en ont jamais que neuf à leur disposition — deux cartes fermées chacun plus les cinq du board —, donc c'est impossible. Les deux joueurs ne peuvent tenir une quinte flush royale que si le board lui-même est la quinte flush royale : tout le monde joue le board et le pot est partagé. En pratique, tu ne le verras pour ainsi dire jamais.
:::

---

## Carré, cooler, bad beat : quelles sont les probabilités des coups rares ?

> **Réponse rapide**
> Les probabilités des coups rares au poker exigent un point de départ. Flopper un carré avec une paire servie, c'est environ un sur 408 ; recevoir les as, c'est un sur 221 avant même de voir une carte. Ces événements expliquent des issues rares, mais une perte rare ne montre pas à elle seule si la décision précédente était bonne.

| Coup rare | Probabilité |
|:---|:---:|
| Recevoir une paire d'as | 1 sur 221 |
| Flopper un carré avec une paire servie | 1 sur 408 |
| Flopper une quinte flush (connecteurs assortis 54s–JTs) | ~1 sur 4 900 |
| Faire une quinte flush royale à la river | 1 sur 30 940 |

**Brelan contre brelan** (set over set) — tu floppes un brelan et tu perds contre un brelan plus haut — c'est le cooler par excellence. Il n'existe pas de chiffre unique et propre, parce que ça dépend du nombre de joueurs qui tiennent une paire, mais le point d'ancrage est le suivant : *toi*, tu ne floppes un brelan que 11,8 % du temps, et qu'un adversaire fasse de même sur le même board est assez rare pour que la plupart des joueurs se souviennent de chacun. Quand ça arrive, la perte seule ne prouve pas que le call était une erreur — ni qu'il était bon ; juge-le sur le prix et la profondeur de stack que tu avais à ce moment-là, pas sur l'abattage. Si tu veux voir exactement comment ces abattages se départagent, les [règles du kicker et de départage](/fr/blog/holdem-tiebreak-rules) couvrent tous les cas limites.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-hand-rankings | Le classement des mains au poker, de la meilleure à la pire | /images/holdem-hand-rankings-hero.webp
/fr/blog/holdem-starting-hands-chart | Quelles mains de départ jouer vraiment | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Quelle est la probabilité d'avoir une quinte flush royale au Texas Hold'em ?**

A. Environ 1 sur 30 940 à la river quand tu joues une main de Hold'em jusqu'au bout (avec tes cinq meilleures cartes sur sept). En main de cinq cartes distribuée directement, c'est 1 sur 649 740. Dans les deux cas, la plupart des joueurs passent des années sans en voir une.

**Q. Quel est le pourcentage de chances de réussir une quinte flush ?**

A. Environ 1 sur 72 193 en main de cinq cartes, ou environ 1 sur 3 590 à la river au Hold'em. C'est la deuxième main la plus rare, battue seulement par la quinte flush royale.

**Q. Quelle est la probabilité d'avoir un carré (ou un carré d'As) au poker ?**

A. Un carré se forme environ 1 fois sur 595 à la river au Hold'em (0,168 %), ou 1 sur 4 165 en main de cinq cartes distribuée. Un carré *précis*, comme le carré d'as, est bien plus improbable — environ 1 sur 7 700 à la river. Le chemin le plus fréquent (environ 57 % du temps) est un as dans ta main et les trois autres sur le board ; tenir la paire servie et toucher les deux as restants est plus rare, et les quatre qui tombent sur le board plus rare encore.

**Q. Quelle est la probabilité d'avoir une couleur, une quinte ou un full ?**

A. À la river au Hold'em, tu fais une couleur environ 3,0 % du temps (1 sur 33), une quinte 4,6 % (1 sur 22) et un full 2,6 % (1 sur 39). Le full est donc plus rare que la couleur, elle-même plus rare que la quinte — exactement l'ordre que leur donne le classement des mains.

**Q. Quelle est la probabilité de toucher sa couleur à la river ?**

A. Si tu floppes un tirage couleur (neuf outs), tu le complètes environ 35 % du temps d'ici la river — mieux qu'une fois sur trois. Sur une seule carte (de la turn à la river), ça tombe à environ 19,6 %.

**Q. Quelle est la probabilité de toucher un brelan au flop avec une paire servie ?**

A. Environ 11,8 %, soit à peu près 1 sur 8,5, quand tu tiens une paire servie. Les 7,5 contre 1 équivalents décrivent les ratés face aux réussites, pas une profondeur de stack recommandée. Un call de set mining a aussi besoin d'un paiement futur réaliste ; le repère pratique — des stacks effectifs de 15–20× le montant à suivre — laisse de la marge pour les brelans qui ne se font pas payer ou qui perdent.

**Q. Quelle est la probabilité d'une quinte flush royale au flop ?**

A. Infime. Même quand tu tiens déjà deux de ses cinq cartes assorties — disons A♥ K♥ —, le flop n'apporte exactement Q♥ J♥ 10♥ qu'environ une fois sur 19 600 flops. Depuis une main de départ quelconque, c'est encore bien plus rare, et c'est pour ça que presque toutes les quintes flush royales se complètent à la turn ou à la river, pas au flop.

**Q. Quelle est la probabilité de recevoir les As préflop au poker ?**

A. 1 sur 221 (0,45 %) pour les as précisément. Une paire servie quelconque, en revanche, arrive bien plus souvent — environ 1 main sur 17 (5,9 %).

**Q. Qu'est-ce que la règle du 2 et du 4 au poker ?**

A. La règle du 2 et du 4 (aussi appelée « règle du 4-2 ») estime les chances d'un tirage : multiplie tes outs par 4 au flop pour la turn et la river réunies, ou par 2 à la turn pour la seule river. Neuf outs donnent 36 % sur deux cartes avec ×4, contre 35,0 % exactement ; ×2 donne 18 % pour la river, contre 19,6 %. Vérifie le tableau exact quand le prix est serré, et réserve le chiffre sur deux cartes aux cas où tu vois les deux cartes sans autre mise.

**Q. Comment calcule-t-on la cote du pot au poker ?**

A. Divise le montant à suivre par le pot total après ton call : suivre $50 dans un pot de $150, c'est 50 ÷ 200 = 25 %, l'équité dont tu as besoin. Cette page fournit l'autre moitié de la comparaison — à quelle fréquence ton tirage rentre vraiment. Le côté prix est traité dans [le guide de la cote du pot — ratios, raccourcis selon la taille de mise et erreurs coûteuses](/fr/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp").

**Q. Quelle est la probabilité d'un brelan contre brelan (set over set) ?**

A. Il n'y a pas de chiffre fixe — ça dépend du nombre d'adversaires qui tiennent une paire servie —, mais c'est rare. Tu ne floppes un brelan que 11,8 % du temps au départ, donc deux joueurs qui floppent chacun un brelan sur le même board, c'est le « cooler » classique qui coûte des stacks entiers.

**Q. Quelle est la main gagnante la plus fréquente au poker ?**

A. La paire, suivie de la double paire. Comme tous les joueurs partagent les cinq cartes communes, la plupart des pots de Texas Hold'em se décident sur une simple paire et son kicker — couleurs, quintes et fulls gagnent bien moins souvent que les débutants ne l'imaginent. La fréquence de chaque main sur sept cartes — qui n'est pas la même chose que la fréquence à laquelle elle remporte le pot — se trouve dans le tableau plus haut.

**Q. À quelle fréquence la meilleure main gagne-t-elle au poker ?**

A. Moins souvent que tu ne le crois avant la river. Même une paire d'as — la meilleure main de départ — ne gagne qu'environ 85 % du temps en tête-à-tête contre une main aléatoire, et bien moins contre une table pleine. À la river, les cinq meilleures cartes gagnent par définition ; les renversements arrivent plus tôt, quand une main faite se fait dépasser par un tirage vivant.

**Q. À quelle fréquence touche-t-on le flop au poker ?**

A. Avec deux cartes fermées non appariées, tu apparies au moins l'une d'elles au flop environ 32 % du temps — tu rates donc complètement à peu près deux flops sur trois. C'est pour ça que la position et l'agressivité comptent autant : n'importe quel adversaire a raté le flop environ deux fois sur trois, et le joueur prêt à miser souvent ramasse le pot.

**Q. Quelle est la probabilité d'avoir les nuts ?**

A. Il n'y a pas de chiffre unique — les nuts (la meilleure main possible sur un board donné) changent avec chaque board. Sur un board sec et non apparié, les nuts peuvent être le brelan max ; sur un board coordonné, une quinte ou une couleur. La compétence ne consiste pas à mémoriser une probabilité, mais à lire quelle main *sont* les nuts et à juger avec quelle probabilité un adversaire la tient.

**Q. Quelle est la différence entre une quinte flush et une quinte flush royale ?**

A. La quinte flush royale est la quinte flush la plus haute possible : A-K-Q-J-10 dans une même couleur. Toutes les autres quintes flush sont plus basses, et donc moins rares : environ 1 sur 3 590 à la river au Hold'em, contre environ 1 sur 30 940 pour la royale (1 sur 649 740 en main de cinq cartes distribuée).

---

## À retenir

1. **Flopper un brelan : ~12 % (1 sur 8,5).** Ce taux ouvre le calcul du set mining ; la profondeur de stack et le paiement probable décident si le call est rentable.
2. **Tirage couleur d'ici la river : 35 %.** Neuf outs, règle du 4 → 9 × 4 = 36 %.
3. **La cote du pot bat l'instinct.** Associe la probabilité aux cartes que ce call t'achète, puis compare le prix à tes chances de gagner — compléter un tirage ne suffit pas toujours.

Le poker récompense les joueurs qui ont rendu ces chiffres automatiques. Apprends le tableau, entraîne-toi à la règle du 2 et du 4, et commence à te demander « quelles sont les chances ? » *avant* d'agir plutôt qu'après. Ensuite, mets ces chiffres au travail en apprenant [quelles mains de départ jouer depuis chaque position](/fr/blog/holdem-starting-hands-chart), ou révise [pourquoi la couleur bat la quinte](/fr/blog/holdem-flush-vs-straight) pour toujours savoir ce que valent tes outs.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Classement des mains</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Le classement des mains au poker, de la meilleure à la pire</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">L'ordre que créent ces probabilités — chaque main classée</div>
  </a>
  <a href="/fr/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Mains de départ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Mains de départ : quelles mains jouer selon ta position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Lesquelles de ces 1 326 mains jouer vraiment</div>
  </a>
  <a href="/fr/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Duel de mains</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">La couleur bat-elle la quinte ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi la catégorie de main la plus rare est classée plus haut</div>
  </a>
  <a href="/fr/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Lecture du board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment lire le board au Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Compte tes outs en voyant chaque tirage</div>
  </a>
  <a href="/fr/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment la position change tout</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quand les probabilités justifient un call — et quand c'est la position</div>
  </a>
</div>
`.trim(),
};

export default POST;
