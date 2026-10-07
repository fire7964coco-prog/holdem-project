import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-equity",
  title: "Équité au poker (equity) : ton % de victoire, la fold equity et l'EV",
  seoTitle: "Tes 40 % ne sont pas 40 % des pots — Équité au poker et EV",
  desc: "L'équité au poker, c'est ta part du pot, pas ce que tu encaisses. Pourquoi 40 % d'équité ne font pas 40 % des pots : fold equity, réalisation, EV.",
  tldr: "L'équité (equity), c'est ta part du pot : la fraction que ta main est censée gagner en moyenne une fois toutes les cartes distribuées, pots partagés comptés au prorata. Tu suis quand ton équité dépasse la cote du pot, mais la position et les mises font que tu gardes rarement toute ton équité, et la fold equity te fait gagner des pots même avec la moins bonne main.",
  category: "odds",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🥧",
  image: "/images/holdem-equity-hero.webp",
  imageAlt: "Deux joueurs à tapis, cartes face visible sur le feutre vert, une pile de jetons au milieu — le moment où l'équité de chaque main devient une vraie part du pot",
  tags: ["équité poker", "equity poker", "équité poker définition", "ev poker", "fold equity", "réalisation d'équité", "équité à tapis", "équité et cote du pot"],
  content: `
Pendant un an, j'ai cru que l'« équité » (equity) n'était qu'un mot savant pour dire « mes chances de gagner ». Puis j'ai perdu trois gros pots dans la même soirée alors que j'étais favori au moment de m'engager, et un meilleur joueur m'a dit la phrase qui a changé ma façon de voir tout le jeu : ==ton équité, c'est ce qu'on te *doit*, pas ce que tu *encaisses*.== Tu peux avoir 40 % de chances de gagner une main et n'en réaliser presque rien — ou être derrière et quand même imprimer de l'argent. Comprendre l'écart entre les deux, c'est l'essentiel de ce qui sépare les joueurs gagnants des joueurs qui espèrent.

==L'équité est le chiffre qui relie toutes les autres pièces des maths du poker — outs, cotes du pot (pot odds), position et agressivité se ramènent tous à une seule question : quelle part de ce pot est vraiment à moi ?== Cet article explique ce qu'est l'équité, comment l'estimer, et les trois choses qu'on ne dit jamais aux débutants : pourquoi tu ne la gardes pas en entier, comment un adversaire qui se couche t'en offre en plus, et pourquoi ta grosse main rétrécit face à plusieurs adversaires.

Les pourcentages de victoire bruts derrière chaque main viennent du [tableau des probabilités et des cotes au poker](/fr/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") ; cet article t'apprend à transformer ces pourcentages en décisions à la table.

---

### L'équité en un coup d'œil

:::stripe
pot × équité % | Ce que vaut ta main en ce moment
brute × réalisation % | Ce que tu encaisses vraiment
mise ÷ (pot + mise) | Le % de fold dont un bluff pur a besoin
:::

---

## Qu'est-ce que l'équité au poker ?

**L'équité, c'est ta part du pot — la fraction que ta main est censée gagner en moyenne quand le coup va jusqu'à l'abattage (showdown), pots partagés comptés au prorata.** Si le pot fait $100 et que 60 % te reviennent, ta main vaut ==$60 en ce moment==, même si les jetons n'ont pas encore été poussés vers toi. Et ne confonds pas les deux mots : l'équité n'est pas l'égalité (le partage d'un pot à égalité) — l'équité, c'est ta part, et elle compte justement ces partages au prorata.

Vois-la comme ta part du gâteau. Chaque main encore en jeu a sa part ; les parts font toujours 100 % au total. Quand tu es en heads-up avec 70 % d'équité dans un pot de $200, ==g:$140 sont « à toi »== sur le long terme — tu ne vas pas gagner *ce* pot 70 % du temps et perdre le reste, mais sur mille spots identiques, c'est la part que tu encaisses.

C'est toute la raison d'être de l'équité : elle transforme « est-ce que je suis devant ? » en « quelle part de ce pot m'appartient ? » — et c'est ce chiffre-là que tu compares au prix d'un call.

---

## Comment calculer l'équité au poker (vite, de tête) ?

**Sur un tirage, multiplie tes outs propres par 4 au flop (si tu vas voir les deux cartes) ou par 2 sur la turn (le tournant) — tu obtiens ta probabilité de toucher, une bonne approximation de l'équité quand toucher fait gagner et rater fait perdre ; préflop, mémorise la poignée de confrontations qui reviennent sans cesse.** Tu ne calculeras presque jamais l'équité exacte à la table — tu l'estimes, et ces deux raccourcis couvrent 90 % des spots.

**Tirages (la règle du 2 et du 4) :** compte tes [outs](/fr/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp"), puis multiplie. Un tirage couleur, c'est 9 outs → ==9 × 4 = 36 %== au flop (valeur réelle 35 %). Les chiffres exacts de chaque tirage sont dans [les probabilités des tirages](/fr/blog/holdem-drawing-odds) ; voici l'aide-mémoire :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tirage | Outs | Chance de toucher (2 cartes) |
|:---|:---:|:---:|
| Tirage couleur + quinte bilatéral | 15 | 54,1 % |
| Tirage couleur | 9 | 35,0 % |
| Tirage quinte bilatéral | 8 | 31,5 % |
| Gutshot (tirage ventral) | 4 | 16,5 % |

</div>

**Confrontations préflop (à mémoriser) :** à tapis avant le flop, les mêmes duels reviennent sans arrêt. Apprends-les et tu connaîtras instantanément ton équité dans la plupart des tapis préflop. Chaque chiffre ci-dessous compte les pots partagés au prorata.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Confrontation | Équité | Type |
|:---|:---:|:---|
| AA contre KK | 82 % / 18 % | L'overpair domine |
| QQ contre AK | ~57 % / ~43 % | La paire devance la « course » |
| 22 contre AK | ~52 % / ~48 % | Le vrai coin flip |
| AK contre AQ | ~74 % / ~26 % | Domination |
| 88 contre A7 | ~70 % / ~30 % | Paire contre une overcard |

</div>

Deux choses piègent les joueurs ici. Une paire contre deux overcards (deux cartes plus hautes que la paire), comme QQ contre AK, ==r:n'est pas un 50/50== — la paire est légèrement favorite, autour de 57/43 dépareillé (un peu plus serré, ~54/46, quand l'AK est assorti). Les joueurs appellent « coin flip » n'importe quelle course paire contre overcards, mais une petite paire contre deux cartes plus hautes, comme 22 contre AK, est vraiment proche du 50/50.

---

## Équité contre cote du pot : quelle règle décide chaque call ?

**Suis quand ton équité est plus grande que ta cote du pot — cette seule comparaison décide presque tous les calls au poker.** La [cote du pot](/fr/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") te dit l'équité dont tu as *besoin* pour être à l'équilibre ; l'équité te dit ce que tu *as*. Si tu as plus que ce qu'il te faut, suivre rapporte de l'argent.

Face à une mise de la moitié du pot, ta cote du pot exige ==25 %== pour suivre. Si ce call te met à tapis au flop ou te laisse voir les deux cartes restantes sans autre paiement, les ~35 % d'un tirage couleur propre dépassent ce prix. Si une autre mise peut arriver sur la turn, le call n'achète qu'une carte : 9 ÷ 47 = 19,1 %, sous les 25 % avec le seul tirage.

Mais voici le piège que presque tous les articles sautent : **« ton équité égale ta part du pot » n'est vrai que s'il n'y a plus de mises.** Dès que de l'argent peut encore entrer sur les streets suivantes, 35 % bruts ne se traduisent pas automatiquement en 35 % du pot final — tu peux te faire chasser de ton tirage, ou payer quand tu touches la deuxième meilleure main. Cet écart, c'est exactement là qu'interviennent les [cotes implicites (implied odds)](/fr/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (l'argent que tu gagneras plus tard) et la réalisation d'équité (plus bas). L'équité, c'est là où les maths *commencent*, pas là où elles s'arrêtent.

---

## Fold equity : comment gagner le pot avec la moins bonne main ?

**La fold equity, c'est l'équité supplémentaire que tu gagnes grâce à la probabilité que ton adversaire se couche — c'est pour ça qu'une mise peut gagner un pot que ta main seule perdrait.** Quand tu mises, tu as deux façons de gagner : ton adversaire se couche tout de suite, ou il paie et tu gagnes à l'abattage. Checker ne te donne que la seconde.

:::compare
Miser (agressivité) | Checker ou suivre (passivité)
Il se couche tout de suite → tu gagnes le pot | Pas de fold equity — personne ne se couche face à un check
Il paie et tu touches → tu gagnes | Tu touches → tu gagnes
==g:Deux façons de gagner== | ==r:Une seule façon de gagner==
:::

En heads-up, pour un ==bluff pur== sans aucune chance de gagner si tu es payé et sans mise ultérieure, le point d'équilibre est simple : il faut que ton adversaire se couche assez souvent pour couvrir le risque. En misant $50 dans un pot de $100, ton taux de fold d'équilibre est ==mise ÷ (pot + mise) = 50 ÷ 150 = 33 %==. S'il se couche plus d'une fois sur trois, miser est rentable — même avec la pire main de la table.

Ajoute maintenant un tirage. Dans cet exemple de ==g:semi-bluff== en heads-up, le pot fait $100 et tu pousses tapis tes $50 restants au flop. Ton adversaire se couche 40 % du temps ; quand il paie, suppose que ton tirage couleur propre a 35 % d'équité. Les deux cartes seront distribuées sans autre mise, donc ce chiffre à deux cartes convient au calcul de l'EV (espérance de gain) :

:::note
EV = (% fold × pot) + (% call × [équité × (pot + mise) − (% raté × mise)])
EV = (0,40 × $100) + (0,60 × [0,35 × $150 − 0,65 × $50])
EV = $40 + (0,60 × [$52,50 − $32,50]) = $40 + $12 = ==g:+$52==
:::

Le tapis vaut ==+$52== par rapport à l'abandon du pot, dont $40 d'espérance viennent des folds. Ce calcul isole la contribution de la fold equity ; il ne compare pas le tapis à toutes les lignes possibles de check ou de call. Change la fréquence de fold de l'adversaire ou sa range de call, et l'EV change aussi.

---

## Réalisation d'équité : pourquoi 40 % d'équité ne font pas 40 % des pots ?

**La réalisation d'équité, c'est la part de ton équité brute que tu encaisses vraiment — et elle est généralement inférieure à 100 %, parce que la position et les mises te coûtent.** Tes « 40 % de chances de gagner » supposent que tu arrives toujours à l'abattage ; en réalité, on te chasse de tes tirages, on te force à te coucher et on te bouscule hors de position. Ce que tu gardes, c'est :

==b:Équité réalisée = équité brute × réalisation %==

Une main avec 40 % d'équité brute qui n'en réalise que 75 % vaut en réalité ==0,75 × 40 % = 30 %==. C'est pour ça que tu peux être « devant la range de ton adversaire » et quand même perdre de l'argent — hors de position, tu encaisses rarement ta part entière.

Ce qui fait monter ou baisser ta réalisation :

:::card
🪑 | Position | Parler en dernier t'aide souvent à réaliser ton équité grâce à l'information et au contrôle du pot, mais aucune position ne garantit un résultat au-dessus ou en dessous de 100 %. Les ranges et le board (les cartes communes) comptent aussi
🎯 | Jouabilité | Les connecteurs assortis et les mains qui floppent des tirages réalisent bien ; les mains dépareillées maladroites réalisent mal, même avec une équité brute correcte
📚 | Profondeur de stack et niveau | Des stacks plus profonds et des adversaires plus coriaces rendent l'équité marginale plus difficile à réaliser
:::

C'est l'idée la plus importante que la plupart des articles pour débutants oublient, et c'est pour ça que [la même main se joue de façon complètement différente selon la position](/fr/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"). L'équité brute est le point de départ — ce que tu encaisserais si les jetons partaient au milieu maintenant ; la réalisation, c'est ce que tu ramènes vraiment chez toi. La position influe sur cet écart, avec les ranges, la texture du board, la profondeur des stacks et la façon dont le coup est joué.

---

## Équité à tapis : quand seule l'équité brute compte

**Dès qu'aucune mise ne peut plus avoir lieu — au plus un joueur encore dans le coup a des jetons derrière (heads-up avec un tapis, ou tous les autres à tapis) — tu réalises 100 % de ton équité, et l'équité brute a le dernier mot.** Toutes les complications vues plus haut (position, se coucher, se faire chasser) disparaissent, parce qu'aucune mise ne peut plus arriver. Quelle que soit ton équité brute — ta part du pot, partages comptés au prorata — c'est exactement ce que tu encaisseras sur la durée.

C'est pour ça que les équités à tapis préflop comptent autant : AA à tapis contre KK encaisse ses ==82 %== en entier — pas de taxe de réalisation, pas de fold equity, juste le chiffre brut qui se déroule. C'est aussi pour ça qu'un « coin flip » (22 contre AK à ~52/48) est un vrai quasi pile ou face à tapis, même si les deux mêmes mains jouées postflop divergeraient complètement selon le board et selon qui a la position.

Un tapis sans mise restante est le spot le plus propre du poker où, avec des cartes encore à venir, le gâteau est découpé exactement comme le disent les maths — c'est à la fois son attrait et son danger.

---

## Équité en multiway : pourquoi ta grosse main rétrécit face à plusieurs adversaires ?

**Ton équité chute vite dans les pots multiway, parce que le même gâteau de 100 % se partage maintenant entre plus de mains.** Préflop contre des mains aléatoires, une paire d'as tourne autour de 85 % en heads-up, mais contre trois adversaires elle glisse à ==r:~64 %==, et contre quatre à ~56 % — toujours la meilleure main, mais plus du tout l'écrasement qu'on ressent. À trois, l'équité *moyenne* est de 33 % par définition, parce que trois joueurs se partagent un seul pot.

![Infographie d'un board Q♣ 9♥ 5♦ 3♠ J♦ montrant comment chaque joueur supplémentaire dans le pot réduit la part moyenne d'équité](/images/holdem-equity-multiway.webp "Plus il reste de joueurs dans le pot, plus la part moyenne est petite — même une paire d'as perd du terrain")

Deux choses empirent en multiway, pas seulement ta part brute :

- **La fold equity s'effondre.** Pour gagner un pot avec une mise, il faut maintenant que *tout le monde* se couche — bien moins probable face à trois adversaires que face à un seul. Les bluffs et les semi-bluffs fins perdent vite de la valeur.
- **La réalisation baisse.** Plus il reste de joueurs à parler, plus il y a de mises et de relances qui peuvent te chasser de ta main avant l'abattage, donc tu réalises encore moins d'une part déjà plus petite.

La leçon pratique : les mains qui veulent un pot multiway sont celles qui font les nuts (brelans servis, ou as assortis pour la couleur max — la nut flush), pas les grosses paires qui se jouent mieux en heads-up. Quand le champ est large, resserre-toi vers des mains dont l'équité tient quand le gâteau est coupé en cinq.

---

## Équité et EV : quelle différence ?

L'équité est un pourcentage : ta part de *ce* pot si le coup est joué jusqu'au bout. L'EV (espérance de gain) est un montant en jetons : ce qu'une décision gagne ou perd en moyenne sur le long terme. La première te dit où tu en es ; la seconde te dit si agir sur cette équité rapporte vraiment de l'argent. Les deux se lisent ensemble, jamais l'une à la place de l'autre.

Une décision qui rapporte plus que zéro en moyenne est +EV (rentable) ; moins que zéro, elle est −EV (perdante) ; à zéro, tu es à l'équilibre. C'est pour ça que les deux ne se confondent pas : tu peux avoir beaucoup d'équité et faire un call −EV si le prix est mauvais, ou peu d'équité et faire un bluff +EV si ton adversaire se couche assez souvent.

Le semi-bluff de la section fold equity le montre bien : ton tirage n'avait que 35 % d'équité quand tu étais payé, mais le tapis valait +$52 d'EV par rapport à l'abandon du pot, dont $40 venaient des folds. Dans ce spot à tapis, le calcul prend la forme : (% fold × pot) + (% call × [équité × (pot + mise) − (% raté × mise)]).

---

## Comment les pros utilisent-ils vraiment l'équité à la table ?

**Les bons joueurs ne calculent pas l'équité exacte — ils font une estimation rapide en quatre étapes qui ajoute la réalisation et la fold equity par-dessus le chiffre brut.** Voici le raisonnement, dans l'ordre où il se déroule vraiment :

:::steps
Estime l'équité brute | Outs × 4 ou × 2 pour les tirages ; rappelle-toi la confrontation préflop
Applique la décote de réalisation | Hors de position ou main difficile à jouer ? Rabote — 40 % bruts, c'est peut-être 30 % réels
Ajoute la fold equity | Si tu mises, à quelle fréquence l'adversaire se couche-t-il ? C'est de l'équité en plus que ta main seule n'a pas
Compare au prix | Tu suis ? Équité réalisée contre ta cote du pot. Tu mises ? Fréquence de fold de l'adversaire contre le taux de fold d'équilibre — mise ÷ (pot + mise) pour un bluff pur, plus bas quand ta main garde de l'équité si elle est payée → suivre, miser ou se coucher
:::

Le soir dont je parlais au début, je faisais l'étape une et je m'arrêtais là — je comptais mon équité brute en ignorant que, hors de position, face à un bon joueur, je ne la réaliserais jamais. Quand j'ai commencé à décoter mon équité selon la position et à penser à *ses* folds plutôt qu'à mes seules cartes, les fuites se sont refermées. L'équité n'est pas un chiffre qu'on va chercher dans un tableau ; c'est une grille de lecture à travers laquelle tu fais passer chaque décision.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-pot-odds | Comment calculer la cote du pot | /images/holdem-pot-odds-hero.webp
/fr/blog/holdem-implied-odds | Cotes implicites — quand un mauvais prix devient un bon call | /images/holdem-implied-odds-hero.webp
:::

## FAQ

**Q. Quelle est la définition de l'équité au poker ?**

A. L'équité au poker, c'est ta part du pot — le pourcentage du paiement à l'abattage qui revient à ta main, en comptant ta part des égalités et pas seulement les victoires. L'équité dit ce que valent tes cartes face aux autres mains ou ranges si le reste du board est distribué. Les décisions de mise ont quand même besoin d'un prix et, quand le jeu continue, d'une estimation de ce que tu peux réaliser.

**Q. Comment calcule-t-on l'équité d'une main au poker ?**

A. Pour les tirages, utilise la règle du 2 et du 4 : multiplie tes outs propres par 4 au flop (quand tu vas voir les deux cartes) ou par 2 sur la turn pour estimer ta probabilité de toucher. Neuf outs couleur ≈ 36 % au flop — proche de ton équité quand toucher gagne et rater perd. Préflop, mémorise les confrontations courantes (AA contre KK, c'est 82/18). Pour des chiffres exacts, les joueurs étudient avec des calculateurs d'équité loin de la table — en jeu, tu estimes.

**Q. Quelle est la différence entre l'équité et la cote du pot ?**

A. L'équité, c'est ta part du pot (ce que tu as) ; la cote du pot, c'est l'équité dont tu as besoin pour être à l'équilibre sur un call (ce que le prix exige). La règle pratique : suis quand ton équité est supérieure à ta cote du pot. Elle est exacte quand aucune mise ne suit ; sinon, ajuste selon la part de ton équité que tu réaliseras vraiment et selon les cotes implicites. La cote du pot vient de la taille de la mise ; l'équité vient de ta main et du board.

**Q. 50 % d'équité, c'est bien au poker ?**

A. Ni bien ni mal en soi — 50 %, c'est un coin flip. Que ce soit un call dépend du prix : face à une mise de la moitié du pot, il ne te faut que 25 %, donc 50 % est un gros call ; mais risquer tout ton stack sur un 50/50 qui ne te donne aucun avantage, c'est un pari, pas un edge. L'équité n'a de sens qu'à côté de la cote du pot.

**Q. Que veut dire 20 % d'équité ?**

A. Ça veut dire qu'un cinquième du pot appartient à ta main sur le long terme — dans un pot de $100, ta part vaut à peu près $20. Que 20 % suffise pour suivre dépend du prix : face à une mise d'un quart de pot, il te faut environ 17 %, donc 20 % passe ; face à une mise de la moitié du pot (25 % nécessaires), c'est un fold — en supposant qu'aucune mise ne suit ; si de l'argent peut encore entrer plus tard, ajuste selon la part de ces 20 % que tu réaliseras vraiment. Un chiffre d'équité n'a de sens qu'à côté de la cote du pot.

**Q. Combien de fold equity faut-il pour bluffer de façon rentable ?**

A. Pour un bluff pur en heads-up, sans chance de gagner si tu es payé et sans mise ultérieure, ton adversaire doit se coucher au moins mise ÷ (pot + mise) du temps : $50 dans $100 demandent 33 % de folds. Ce seuil est une **fréquence de fold**, pas un pourcentage d'équité ; l'équité à l'abattage d'un semi-bluff l'abaisse.

**Q. Qu'est-ce que la réalisation d'équité ?**

A. La réalisation d'équité, c'est la part de ton équité brute que tu encaisses vraiment : équité réalisée = équité brute × réalisation %. Être forcé de te coucher la fait baisser ; soutirer des mises ou gagner des folds peut la faire monter. Parler en dernier aide souvent, mais les ranges et la texture du board décident si une main en position ou hors de position finit au-dessus ou en dessous de 100 %.

**Q. Qu'est-ce que l'équité à tapis ?**

A. L'équité à tapis, c'est simplement ton équité brute — ta part du pot, partages comptés au prorata — quand aucune mise ne peut plus avoir lieu. Comme il n'y a plus de décisions à venir, tu en réalises 100 %, et l'équité brute devient la part exacte du pot que tu encaisses sur la durée. C'est le cas le plus clair où, avec des cartes encore à venir, « équité égale part du pot » est littéralement vrai.

**Q. Pourquoi mon équité baisse-t-elle dans les pots multiway ?**

A. Parce que le même pot de 100 % se partage maintenant entre plus de mains — préflop contre des mains aléatoires, une paire d'as à ~85 % en heads-up tombe à ~64 % contre trois adversaires et à ~56 % contre quatre. Le multiway réduit aussi ta fold equity (tout le monde doit se coucher, pas un seul joueur) et ta réalisation (plus de joueurs, c'est plus de mises qui peuvent te chasser du coup avant l'abattage), donc ta part brute et ce que tu en gardes rétrécissent tous les deux.

**Q. Qu'est-ce que l'EV (espérance de gain) au poker ?**

A. L'espérance de gain, c'est le montant moyen qu'une décision fait gagner ou perdre à long terme. Un coup qui rapporte en moyenne est +EV, un coup qui coûte en moyenne est −EV, et à EV nulle tu es à l'équilibre. Gagner au poker, c'est simplement choisir les actions +EV et abandonner les −EV — chaque mise, call ou fold a une EV, même quand tu ne vois pas le chiffre exact.

**Q. Quelle est la différence entre l'équité et l'EV ?**

A. L'équité se mesure en pourcentage et décrit *ce* pot si le coup va au bout ; l'EV se mesure en jetons et dit si *agir* sur cette équité est rentable. Une grosse équité ne sauve pas un call quand le prix est mauvais, et une petite équité peut porter un bluff +EV si l'adversaire se couche souvent. L'une situe ta main, l'autre juge ta décision.

---

## À retenir

1. **L'équité, c'est ta part du pot** — équité % × taille du pot. Suis quand elle dépasse ta cote du pot. Cette comparaison est la colonne vertébrale de chaque décision.
2. **Tu la gardes rarement en entier.** Équité réalisée = brute × réalisation %, et la position, les ranges et la texture du board la font toutes bouger. L'équité brute est le point de départ, pas le paiement.
3. **L'agressivité fabrique de l'équité.** La fold equity permet à une mise de gagner des pots que ta main perdrait — mais elle s'effondre en multiway, où il faut que tout le monde se couche.

Maîtrise ça et le reste des maths du poker se met en place. À partir d'ici, transforme l'équité en calls justes avec le [guide de la cote du pot](/fr/blog/holdem-pot-odds), ou vois comment les stacks profonds changent le tableau avec les [cotes implicites](/fr/blog/holdem-implied-odds).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tableau des probabilités et des cotes au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les pourcentages de victoire bruts derrière chaque main</div>
  </a>
  <a href="/fr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment calculer la cote du pot</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le prix que ton équité doit battre</div>
  </a>
  <a href="/fr/blog/holdem-implied-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les cotes implicites expliquées</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi l'équité n'est pas ta part finale du pot</div>
  </a>
  <a href="/fr/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment la position change tout</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi la réalisation se joue sur la position</div>
  </a>
</div>
`.trim(),
};

export default POST;
