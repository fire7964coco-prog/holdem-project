import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-when-to-fold",
  title: "Quand se coucher au poker : la compétence qui fait gagner le plus, en silence",
  seoTitle: "Incapable de lâcher ta main ? — Quand se coucher au poker",
  desc: "Tu es battu et tu suis quand même ? Quand se coucher au poker, préflop et à chaque street, le seuil des cotes du pot et lâcher une grosse main sans tilter.",
  tldr: "Se coucher est la compétence la plus sous-estimée au poker : le pire résultat d'un fold est zéro, alors qu'un call perdant saigne des jetons sur la durée. Un joueur solide se couche sur environ 75 à 85 % des mains avant le flop, lâche après le flop les mains ratées et les tirages faibles qui n'atteignent pas leurs cotes du pot et, le plus dur, abandonne des mains fortes mais battues quand la ligne d'un adversaire passif crie la value. La plupart des joueurs ne suivent pas trop parce qu'ils ne savent pas lire les mains ; ils suivent parce que les jetons déjà au milieu leur semblent appartenir, et ce n'est pas le cas.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "🛡️",
  image: "/images/holdem-when-to-fold-hero.webp",
  imageAlt: "Un joueur de poker glisse ses cartes face cachée vers le muck sous les lumières de la table, choisissant de se coucher plutôt que de payer une mise",
  tags: ["quand se coucher au poker", "quand faut il se coucher au poker", "savoir folder au poker", "folder poker", "se coucher avec une bonne main", "sunk cost poker", "fold river poker", "cotes du pot fold"],
  content: `
La main la plus chère de ma première année n'est pas une main que j'ai perdue — c'est une main que j'ai refusé de perdre. J'avais flopé la double paire max, un vieux joueur passif m'a relancé sur une river (la rivière) qui appariait le board, et toutes les alarmes me criaient *il a un full.* J'ai payé quand même. Je me suis dit que je « ne pouvais pas me coucher après avoir mis autant ». Il a retourné son full, et j'ai repassé en boucle sur la route du retour le moment exact où je savais, et où j'ai payé malgré tout. Ce soir-là, j'ai appris la vérité que tout joueur gagnant finit par accepter : ==le fold est le coup le plus puissant du poker, et le plus difficile à faire.==

**[Se coucher](/fr/blog/holdem-betting-actions) — jeter ta main au lieu de suivre ou de relancer — est la compétence la plus sous-estimée du jeu.** Pas de vidéo de highlights, pas de shot de dopamine, mais le pire résultat d'un fold est exactement *zéro*, alors qu'un mauvais call perd de l'argent sur la durée — pas à chaque main, mais sur le long terme. Voici le guide complet pour savoir *quand se coucher* : avant le flop, à chaque street qui suit, le calcul exact qui tranche les spots serrés, comment lâcher une main vraiment bonne, et comment battre la psychologie qui rend le fold impossible. C'est la discipline qui ancre une [stratégie de Texas Hold'em](/fr/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") gagnante.

---

### Pourquoi se coucher fait gagner

:::stripe
75–85 % | Les mains qu'un joueur solide jette avant le flop
0 | Le maximum qu'un fold peut te coûter (à partir de là)
25 % | L'équité qu'il te faut pour suivre une mise d'un demi-pot
Calcul > peur | La seule raison de se coucher, ou non
:::

---

## Pourquoi se coucher est-il la compétence la plus sous-estimée au poker ?

Face à une mise, tu as trois options : te coucher, suivre ou relancer. Sans mise devant toi, tu en as deux : checker ou miser. Se coucher, c'est renoncer au pot et ne plus risquer un seul jeton. Les débutants vivent ça comme une défaite. Les gagnants le vivent comme ==refuser de perdre davantage.==

Voici l'idée qui change tout : **l'espérance d'un fold, à partir de cette décision, est nulle.** Quand tu es vraiment battu (derrière maintenant, sans la cote pour revenir ni la fold equity pour le faire lâcher), toutes les autres options sont *négatives* : suivre te coûte le call, relancer te coûte encore plus. Zéro bat le négatif. Se coucher ne gagne pas le pot, mais ça paie sur le long terme en arrêtant de donner des jetons dans les spots où tu es derrière.

Une précision, parce qu'elle compte : se coucher n'est *pas gratuit.* Les jetons déjà au pot sont perdus à l'instant où tu les y mets — le fold t'empêche seulement de *jeter de l'argent après l'argent perdu.* Cette distinction, c'est toute la psychologie du fold, et on y reviendra. D'abord, la mécanique.

---

## Quand se coucher avant le flop ?

La plus grosse fuite au poker, c'est de jouer trop de mains ; la plus grosse correction, c'est donc d'en jeter la plupart. **Un joueur serré-agressif solide se couche sur environ 75–85 % de ses mains préflop** — plutôt 75–80 % en 6-max, et 80–85 % en full-ring. Si ça te paraît extrême, rappelle-toi : les mains que tu gardes sont en moyenne plus fortes que celles de tes adversaires, et c'est de là que vient ton avantage.

Couche-toi préflop quand :

- **Ta main est tout simplement faible ou injouable** — cartes dépareillées et non connectées (J‑4, Q‑7, K‑3), as faibles (A‑7 dépareillé et moins depuis les premières positions), et la plupart des mains dépareillées « une seule grosse carte ». Si elle ne figure pas dans ton [tableau des mains de départ](/fr/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") pour ce siège, jette-la.
- **Tu es en début de parole** — presque tous les autres décident après toi, et après le flop seules les blindes parlent avant toi, donc il te faut une main plus forte pour entrer. K‑J dépareillé, c'est un fold under the gun (UTG) et une relance au bouton.
- **Tu es dominé.** A‑9 dépareillé face à un relanceur serré en début de parole est généralement battu par ses A‑T, A‑J, A‑Q, A‑K — même as, kicker inférieur. La domination tue en silence ; couche-toi plutôt que de perdre au kicker.
- **Tu fais face à un [3-bet](/fr/blog/holdem-3bet) avec la partie faible de ta range.** Tu as ouvert large, donc l'essentiel de cette range se couche face à une surrelance — continue avec tes meilleures mains et lâche le reste. Face à un gros **4-bet**, jette tes petites paires et tes mains assorties spéculatives ; leurs cotes implicites se sont effondrées.

La seule main que tu ne jettes pratiquement *jamais* préflop en cash game, c'est la paire d'as — elle est favorite contre toutes les autres. (Les rares exceptions se trouvent dans les spots de bulle de tournoi et de satellite, où survivre peut peser plus qu'un minuscule avantage. En cash game : jamais.)

---

## Quand faut-il se coucher au poker après le flop ? Street par street

C'est après le flop que se fait la vraie économie, et chaque street pose une question différente.

![Un board complet de cinq cartes sur le feutre vert à côté d'une grosse pile de jetons, un joueur qui tient deux cartes face cachée et se demande s'il doit se coucher sur une street tardive](/images/holdem-fold-board.webp "Chaque street change la question : au flop tu te demandes si tu as touché, à la river tu te demandes seulement si tu bats une value bet")

**Flop — « Ce board m'a-t-il aidé, ou lui ? »** Quand tu rates et que tu fais face à une mise sur un board qui colle à la range de ton adversaire, lâche. Une hauteur as sans tirage sur un board coordonné ne vaut pas un call « pour voir la turn ». Jette aussi les tirages faibles — un gutshot (tirage ventral) sans autre équité et avec un mauvais prix, c'est un fold, pas une poursuite.

**Turn — la street de l'abandon.** C'est le fold le plus important du poker, et celui que les joueurs sautent. À la turn (le tournant), les ranges se polarisent entre « très fort ou rien » et les tailles de mise gonflent. Ton float au flop qui ne s'est pas amélioré, ta deuxième paire qui fait face à un second barrel, ton tirage qui vient de rater avec une seule carte à venir et un mauvais prix — ce sont des turns où l'on lâche, pas où l'on se convainc d'un call de plus. Si tu « floatais le flop pour bluffer la turn » et que la turn ne t'a donné aucune raison, abandonne.

**River — du pur bluff-catching.** Tu ne tires plus vers rien ; la seule question est *« ma main bat-elle les mains qu'il miserait ici pour la value ? »* Si un joueur passif mise gros sur un board effrayant, la réponse honnête est généralement non. Jette les mains qui ne battent qu'un bluff quand ton adversaire bluffe rarement. Ce qui nous amène au calcul.

---

## Se coucher ou suivre ? Le seuil des cotes du pot

Les calls serrés ne sont pas une sensation — c'est une fraction. Pour suivre une mise de façon rentable, ta probabilité de gagner doit dépasser le prix qu'on te propose. Retiens ce tableau et la moitié de tes spots difficiles se résolvent seuls (et pour les cas moins ronds, un [calculateur poker](/fr/calculator) fait le travail) :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Taille de la mise (dans le pot) | Cote du pot obtenue | Équité nécessaire pour suivre | Couche-toi si tu as moins |
|:---|:---:|:---:|:---:|
| **Demi-pot** | 3 : 1 | **25 %** | moins de 25 % |
| **Deux tiers du pot** | 2,5 : 1 | **~29 %** | moins de 29 % |
| **Pot complet** | 2 : 1 | **~33 %** | moins de 33 % |
| **Overbet (1,5× le pot)** | ~1,7 : 1 | **~37,5 %** | moins de 37,5 % |

</div>

Passons à la pratique. Disons que tu as un tirage couleur — neuf cartes le complètent — avec une carte à venir. Neuf outs sur les 46 cartes inconnues, ça fait ==9 ÷ 46 ≈ 19,6 %==, soit environ **4 contre 1** contre toi. (Raccourci rapide : la [règle du 2 et du 4](/fr/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") — outs × 2 ≈ ton pourcentage pour une carte, donc 9 × 2 ≈ 18 %.)

- **Le pot fait $100 et ton adversaire mise $50 à la turn.** Tu paies $50 pour gagner $150 — c'est 3 contre 1, il te faut donc **25 %** d'équité. Ton tirage n'en a que ~19,6 %. ==r:Couche-toi.== Le prix n'est pas bon.
- **Même tirage, mais il ne mise que $25 dans $100.** Tu paies $25 pour gagner $125 — 5 contre 1, il te faut seulement **16,7 %**. Tes ~19,6 % passent largement. ==g:Suis.==

Même main, décisions opposées — parce que c'est le *prix* qui a changé, pas les cartes. C'est ça, les cotes du pot, et c'est la différence entre courir après un tirage et payer à bon escient. (Les cotes implicites — l'argent que tu gagneras *plus tard* si tu touches — peuvent justifier quelques calls plus fins, mais ne les suppose jamais face à un short stack ou sur un board qui tue ton action.)

---

## Comment se coucher avec une bonne main (top paire, overpaire, même AA) ?

Jeter une main pourrie, c'est facile. Jeter une *bonne* main — top paire, overpaire, voire un brelan servi (set) — c'est ce qui sépare les joueurs gagnants des autres. Le piège mental, c'est de penser « c'est une main forte », alors que la seule question qui compte est « est-elle forte *maintenant, face à cette ligne* ? »

**La top paire n'est pas le haut de ta range.** Dans un pot relancé ou surrelancé, top paire et overpaires sont des mains moyennes. Face à une agression lourde sur plusieurs streets — surtout une relance sur une river effrayante — elles sont souvent battues, et avoir la discipline de les lâcher est un **bon laydown**, pas de la faiblesse. Voici les mains que les joueurs épousent alors qu'ils devraient demander le divorce :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| La main à laquelle tu t'accroches | Le piège | Pourquoi te coucher |
|:---|:---|:---|
| **Top paire, kicker faible** | Grosses mises à la turn puis à la river | Tu bats les bluffs et les paires moins bonnes — mais sa range de value te bat au kicker |
| **Overpaire (JJ/QQ)** | Un joueur passif relance un board coordonné | Les joueurs passifs relancent les nuts, pas du vent — tu es presque mort (très peu d'outs) |
| **Top paire, meilleur kicker** | Le board finit avec quatre cartes à la couleur ou à la quinte | Ta paire unique ne bat pas la couleur ou la quinte qu'il représente |
| **Un brelan servi** | Grosse relance sur un board monocolore ou à quatre cartes de quinte — **à la river** | Set contre set, c'est un cooler ; une couleur déjà faite, non. Au *flop*, ce même brelan s'améliore encore en full ~34 % du temps d'ici la river contre une couleur faite, et gagne un stack quand il y arrive — suis |
| **Deuxième paire** | Payer trois streets « pour le garder honnête » | Tu paies trois fois la value pour attraper un seul bluff |

</div>

La ligne du brelan est celle dont il faut nommer la street, parce que le jeter trop tôt coûte plus cher que le jeter trop tard. Avec 9♠9♣ sur un flop 9♥5♥2♥ face à une couleur faite A♥K♥, le brelan gagne encore ==34 %== du temps — et aucune couleur faite ne le fait descendre bien en dessous (le plancher est d'environ 32 %, face à 3♥4♥ et ses outs de quinte flush) : il s'améliore sur les sept outs évidents (le dernier neuf, trois cinq, trois deux) *et* chaque fois que la turn et la river s'apparient entre elles. Au flop, c'est un call — non pas parce que la carte suivante seule y arrive assez souvent (sept outs, c'est environ 16 %, en dessous de la plupart des prix de mise), mais parce que quand le board s'apparie tu gagnes tout ce qu'une couleur te paiera, et jeter des brelans servis au flop coûte bien plus sur la durée que les mises que tu économises. Ce n'est qu'une fois le tirage rentré que la ligne au-dessus s'applique.

L'image inverse compte aussi, parce que **se coucher peut devenir une fuite en soi.** Un *bon* laydown lâche une main battue face à une ligne qui a du sens. Un *mauvais* laydown jette la meilleure main sur une carte qui fait peur — et si tu le fais souvent, les adversaires attentifs te bluffent sans relâche. Le but n'est ni de te coucher plus ni de te coucher moins ; c'est de te coucher *quand les preuves sont là.*

---

## Pourquoi est-ce si dur de se coucher ? Coût irrécupérable, ego et peur

Voici le secret que les tableaux de stratégie ne te disent pas : **la plupart des mauvais calls ne sont pas des erreurs de lecture — ce sont des erreurs émotionnelles.** Trois coupables font les dégâts.

![Un joueur de poker plongé dans ses pensées, la main au menton, qui se torture pour savoir s'il doit suivre ou se coucher, jetons et cartes face cachée au premier plan](/images/holdem-fold-psychology.webp "Les folds les plus durs se perdent par l'émotion, pas par le calcul — l'envie de « voir », d'avoir raison, et de ne pas lâcher des jetons qui te semblent déjà à toi")

**Le coût irrécupérable (sunk cost) — « J'en ai déjà mis tellement. »** C'est le gros morceau. Les jetons que tu as misés avant *ne sont plus à toi* — ils appartiennent au pot. Chaque décision est indépendante et se juge uniquement sur ce qui se passe *à partir de maintenant.* « Je suis pot-committed parce que j'ai déjà tant investi », c'est le biais du coût irrécupérable assis à une table de poker. (Le vrai pot-commitment existe, mais il vient du prix *actuel* rapporté à un gros pot — pas de ce que tu as dépensé trois streets plus tôt.)

**L'ego — « Il faut que je sache s'il bluffe. »** Payer pour satisfaire ta curiosité, ou pour éviter la piqûre d'avoir *peut-être* été bluffé, c'est payer le prix maximum pour une information dont tu n'as pas besoin. Tu te feras bluffer de temps en temps. Ce n'est pas grave — si tes folds ne sont *jamais* faux, tu ne te couches pas assez : tu paies value bet après value bet juste pour t'assurer que personne ne te bluffe jamais. Gère tes décisions, pas ton ego.

**La peur — jeter la meilleure main sur une carte qui fait peur.** L'échec inverse : avoir tellement peur d'être battu que tu lâches des mains gagnantes. Le remède aux deux extrêmes tient en une phrase — ==couche-toi par calcul, pas par peur.== Couche-toi parce que le prix est mauvais ou que l'histoire raconte de la value, pas parce que tu « le sens mal ».

Entre les deux extrêmes se trouvent les deux profils perdants : la **calling station** qui ne se couche jamais et paie chaque value bet, et le **nit** qui se couche tellement que les bons joueurs misent simplement chaque pot et lui roulent dessus. Le fold gagnant vit au milieu, avec discipline : serré, mais pas apeuré.

---

## « Je me couche ? » : l'auto-check en 30 secondes

Avant tout gros call, passe cette check-list. Quatre des cinq questions peuvent t'envoyer directement au fold à elles seules ; la cinquième est celle qui peut encore plaider pour un call :

:::steps
Est-ce que je peux nommer les mains moins bonnes qu'il miserait de cette façon ? | Si les seules mains qui misent comme ça me battent, je paie de la value.
Est-ce que je passe le seuil des cotes du pot ? | Si mon équité est sous le chiffre du tableau, le prix dit fold.
Cette ligne, c'est une value bet ou un bluff ? | Les joueurs passifs et les grosses relances à la river, c'est de la value — crois-les.
Est-ce que je paie seulement pour « voir » ? | La curiosité et l'ego ne sont pas des raisons ; c'est le piège du coût irrécupérable qui parle.
Est-ce que je miserais moi-même cette main pour la value ici ? | Sinon, je tiens un bluff-catcher — la question devient à quelle fréquence il bluffe, pas si je suis devant.
:::

Une fois que c'est devenu une habitude, rien de tout ça ne prend vraiment trente secondes — mais ralentir pour les grosses décisions, c'est exactement ce que la calling station ne fait jamais.

Note ce que cette dernière question n'est *pas*. Une value bet doit battre sa range de **call** ; un call n'a besoin que de battre sa range de **mise**, bluffs compris. Face à un overbet de 1,5x le pot à la river, il te faut seulement ==37,5 %== d'équité, donc une main que tu ne pourrais jamais miser pour la value peut quand même être un call rentable s'il bluffe assez souvent. « Je ne la miserais pas » veut dire *bluff-catcher*, pas *fold*.

---

## Un vrai laydown, main par main

Voici un fold dont je suis fier, détaillé pour que tu puisses le vérifier toi-même. Cash game $1/$2, 100bb de profondeur.

- **Ma main :** ==A♥K♣.== Je relance, la grosse blinde — un joueur serré et passif — paie.
- **Flop :** ==K♦ 9♠ 4♥.== J'ai top paire, meilleur kicker. Je mise, il paie. Classique.
- **Turn :** ==7♣.== Une brique (carte neutre). Je remise pour la value, il paie encore. Tout a l'air d'aller.
- **River :** ==9♥.== Le board s'apparie et affiche maintenant ==K♦ 9♠ 4♥ 7♣ 9♥==, et le joueur passif me **check-raise** soudain gros.

Comptons. Mes cinq meilleures cartes sont ==K♣ K♦ 9♠ 9♥ A♥== — double paire, rois et neuf, kicker as. Ça *paraît* énorme. Mais un joueur serré et passif qui a payé jusqu'au bout et qui relance maintenant une river qui a apparié le neuf raconte une histoire très précise : il a un neuf — brelan de neuf, ou un full aux neuf — et presque jamais un bluff. Face à sa range de relance, ma double paire est presque toujours battue. Je me couche. Ça m'a piqué ; ça valait aussi plus que le pot, parce que cette même discipline sauve un stack à chaque session. **La main était forte. La situation, non.**

---

## Les 7 erreurs de fold les plus fréquentes

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| L'erreur | Pourquoi elle te coûte | La correction |
|:---|:---|:---|
| **Suivre beaucoup trop (la station)** | Tu paies toutes les value bets de la salle | Par défaut, couche-toi quand tu ne bats qu'un bluff |
| **Payer la value bet évidente** | Les grosses mises passives ne sont presque jamais des bluffs | Crois l'histoire ; couche-toi |
| **Épouser la top paire ou les overpaires** | Ce sont des mains moyennes dans les gros pots | Couche-toi face à une agression lourde sur plusieurs streets |
| **Courir après les tirages sans le prix** | Les cotes du pot disent que ton call perd sur le long terme | Passe le seuil ou couche-toi |
| **Payer par coût irrécupérable** | « J'y suis déjà » n'est pas une raison | Juge uniquement la décision devant toi |
| **Hero-call « pour le garder honnête »** | Tu attrapes un bluff, tu paies dix values | Réserve-le aux joueurs qui bluffent vraiment |
| **Se coucher sur chaque carte qui fait peur (le nit)** | Les bons joueurs te bluffent sur la meilleure main | Couche-toi face aux lignes de value, pas face à la peur |

</div>

Remarque que les deux extrêmes sont là : couche-toi *plus* contre les joueurs chargés en value qui ne bluffent jamais (la majorité de la population des petites limites), et couche-toi *moins* contre les réguliers réfléchis qui bluffent assez pour exploiter un nit.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-strategy | Les 5 décisions derrière un poker gagnant | /images/holdem-strategy-hero.webp
/fr/blog/holdem-pot-odds | Le calcul qui tranche les calls serrés | /images/holdem-pot-odds-hero.webp
:::

## FAQ

**Q. Quand faut-il se coucher au poker ?**

A. Couche-toi chaque fois que suivre ou relancer perd de l'argent sur le long terme : quand ta main est trop faible préflop, quand tu rates le flop et fais face à de l'agression sur un board qui colle à la range de ton adversaire, quand un tirage n'atteint pas ses cotes du pot, et quand une ligne chargée en value bat la main que tu tiens. Le pire résultat d'un fold est zéro : quand suivre perd de l'argent au prix proposé, se coucher est toujours meilleur — être derrière ne suffit pas, car un prix assez bon peut rendre correct le call d'une main qui est généralement derrière.

**Q. Perd-on de l'argent en se couchant au poker ?**

A. Tu ne perds que les jetons déjà mis au pot — se coucher ne te coûte rien de plus. Les mises faites plus tôt sont perdues dès que tu les fais (elles appartiennent au pot), et le fold t'empêche seulement d'ajouter un jeton *de plus*. Un fold n'est donc pas une « perte » comme une main payée jusqu'au bout : à partir de là, son pire résultat est zéro, ce qui bat toujours un call que tu vas perdre. Tu ne peux pas gagner le pot en te couchant, mais tu économises chaque jeton que tu aurais payé pour perdre.

**Q. À quelle fréquence se coucher préflop ?**

A. Un joueur serré-agressif solide se couche sur environ 75–85 % de ses mains avant le flop — plutôt 75–80 % en 6-max et 80–85 % en full-ring. Jouer moins de mains, plus fortes, est la plus grosse correction pour la plupart des joueurs perdants. Si tu entres dans bien plus d'un cinquième de tes mains, tu en joues presque certainement trop.

**Q. Quand se coucher avec une bonne main ?**

A. Couche-toi avec une main forte quand l'action te dit qu'elle est battue : top paire ou overpaire face à une agression lourde sur plusieurs streets, surtout une relance d'un joueur passif ou une river effrayante qui complète des tirages évidents. Dans un gros pot, la top paire n'est pas le haut de ta range. Un laydown discipliné d'une main forte mais battue est un coup gagnant, pas un coup faible.

**Q. Peut-on se coucher avec une paire d'as ?**

A. En cash game, pratiquement jamais avant le flop — les as sont mathématiquement favoris contre toutes les autres mains de départ. Après le flop, une overpaire d'as peut parfois se jeter face à une agression extrême sur un board dangereux. Les rares exceptions préflop sont les spots de bulle de tournoi et de satellite, où survivre peut peser plus qu'un petit avantage.

**Q. Quand se coucher avec top paire ?**

A. Couche-toi avec top paire quand ton kicker est faible et que tu fais face à de grosses mises à la turn et à la river, quand le board finit sur une couleur ou une quinte évidente et que ton adversaire mise dedans, ou quand un joueur passif relance. La top paire bat les bluffs et les paires moins bonnes, mais face à une ligne chargée en value elle est souvent derrière — et payer trois streets pour attraper un bluff perd de l'argent.

**Q. C'est quoi le coût irrécupérable (sunk cost) au poker ?**

A. C'est la fausse croyance selon laquelle, parce que tu as déjà mis des jetons au pot, tu dois continuer à payer pour « protéger » cet investissement. Ces jetons ne sont plus à toi — ils appartiennent au pot — donc chaque décision doit se juger uniquement sur ce qui se passe à partir de maintenant. « J'en ai déjà mis tellement », c'est le piège classique du coût irrécupérable, et c'est la cause numéro un des mauvais calls.

**Q. Se coucher ou suivre quand tu hésites ?**

A. Quand c'est vraiment serré et que tu hésites, se coucher est en général le meilleur choix par défaut — surtout aux petites limites, où les adversaires bluffent bien moins qu'ils ne le devraient. Demande-toi si tu passes le seuil des cotes du pot et si sa ligne ressemble à de la value ou à un bluff. Si tu ne peux pas nommer assez de mains moins bonnes qu'il miserait, couche-toi et passe à un spot plus clair.

**Q. Comment savoir quand se coucher face à une relance à la river ?**

A. Traite une relance à la river, surtout venant d'un joueur passif, comme de la value jusqu'à preuve du contraire. La plupart des joueurs n'ont pas assez de bluffs dans leur range de relance à la river, donc une grosse relance signifie généralement une main qui bat une paire ou une double paire. Sauf si l'adversaire est agressif et capable de relancer en bluff, jeter tout sauf tes mains les plus fortes est généralement correct — le prix ne sauve un call que si sa range contient assez de bluffs pour le dépasser.

**Q. Se coucher est-il un signe de faiblesse ?**

A. Non — se coucher avec discipline est un signe de compétence. Les meilleurs joueurs du monde jettent la grande majorité de leurs mains et lâchent des mains fortes quand la situation l'exige. Ce qui ressemble à de la faiblesse, c'est en réalité refuser de donner des jetons dans des spots perdants. La vraie faiblesse, c'est l'incapacité à lâcher, et tout adversaire solide l'exploitera.

**Q. Peut-on trop se coucher au poker ?**

A. Oui. Te coucher à chaque fois que tu subis de la pression fait de toi un « nit », et les adversaires attentifs vont simplement miser chaque pot pour te rouler dessus, en te bluffant sur la meilleure main. Le but n'est pas de te coucher le plus possible — c'est de te coucher quand le calcul ou la ligne de l'adversaire dit que tu es battu, tout en défendant assez pour qu'on ne puisse pas te bluffer à volonté.

**Q. Quand se coucher avec une overpaire ?**

A. Couche-toi avec une overpaire quand un adversaire passif montre une vraie agression sur un board coordonné ou apparié — un check-raise ou un gros barrel turn et river. Les joueurs passifs relancent des mains fortes, pas du vent, donc ton overpaire est généralement derrière un brelan servi, une double paire ou une quinte. Face à des adversaires agressifs qui bluffent, tu peux continuer davantage, mais une ligne passive qui crie la force, c'est un fold.

---

## À retenir : le plan de jeu du fold

1. **Le pire résultat d'un fold est zéro** — quand tu es battu, ça bat toutes les alternatives négatives.
2. **Jette la plupart des mains préflop** (75–85 %), jette les mains ratées et les tirages hors de prix après le flop, et considère **la turn comme la street de l'abandon.**
3. **Passe le seuil des cotes du pot ou couche-toi** — 25 % face à une mise d'un demi-pot, ~33 % face à une mise de la taille du pot.
4. **Lâche les bonnes mains quand la ligne crie la value** — la top paire n'est pas le haut de ta range.
5. **Couche-toi par calcul, pas par peur** — bats le piège du coût irrécupérable, ignore ton ego, et souviens-toi que les jetons au pot n'ont jamais été à toi à protéger.

Maîtrise le fold et tu cesses d'être le joueur qui « n'arrivait pas à s'en défaire ». Associe cette discipline à un calcul affûté des [cotes du pot](/fr/blog/holdem-pot-odds), à un bon [jeu de 3-bet](/fr/blog/holdem-3bet) et au [cadre stratégique complet](/fr/blog/holdem-strategy), et tu gagneras discrètement les pots qui comptent en perdant ceux qui ne comptent pas.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Le cadre des 5 décisions</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">La place du fold dans un jeu gagnant</div>
  </a>
  <a href="/fr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Probabilités</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment calculer les cotes du pot</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le seuil derrière chaque fold</div>
  </a>
  <a href="/fr/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Le 3-bet expliqué</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quand se coucher face à une surrelance</div>
  </a>
  <a href="/fr/blog/holdem-continuation-bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Le continuation bet</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quand se coucher face à un c-bet</div>
  </a>
</div>
`.trim(),
};

export default POST;
