import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament-vs-cash-game",
  title: "Cash game ou tournoi au poker : quelle différence, lequel choisir ?",
  seoTitle: "Mêmes cartes, autre jeu — cash game ou tournoi au poker",
  desc: "Cash game ou tournoi au poker : lequel est fait pour toi ? Valeur des jetons, blindes, ICM, bankroll, le plus dur, le plus rentable et par où débuter.",
  tldr: "En cash game, les jetons sont de l'argent réel et les blindes restent fixes. En tournoi, tes jetons représentent ta survie, pas de l'argent : les blindes montent et les gains dépendent de ta place à l'arrivée.",
  category: "tournament",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-09-13",
  hideSummaryImageSlot: true,
  readTime: "18 min",
  emoji: "🏆",
  image: "/images/holdem-tournament-vs-cash-hero.webp",
  imageAlt: "Infographie comparant côte à côte le cash game et le tournoi de poker — valeur des jetons, structure des blindes et moment où tu peux partir",
  tags: [
    "cash game ou tournoi",
    "tournoi ou cash game poker",
    "cash game poker",
    "cash game poker c'est quoi",
    "cash game poker règles",
    "cash game ou tournoi rentable",
    "stratégie cash game",
    "bankroll poker",
    "quitter une table de cash game",
  ],
  content: `
Je me souviens encore du moment où j'ai ramassé mes jetons après ma première session de cash game (ou « partie libre ») en live — ces jetons, c'était de l'argent que je pouvais littéralement apporter à la caisse et mettre dans ma poche. Mon premier tournoi s'est terminé tout autrement : quatre heures de jeu prudent, un flip perdu, et un tas de jetons qui ne valait plus exactement rien au moment de partir. C'est tout l'écart dont parle cet article.

Presque tous les nouveaux joueurs de Hold'em finissent par se poser la même question :

*« Je joue en ==cash game== ou en ==tournoi== ? »*

Au début, on dirait le même jeu. Tu reçois toujours deux cartes privatives, cinq cartes communes, et quatre tours d'enchères du préflop à la river. Mais sur le plan stratégique, ce sont presque deux mondes différents. En cash game, tes jetons sont de l'argent. En tournoi, tes jetons sont ta vie dans le tournoi.

Cet article décortique ==cash game ou tournoi au poker== comme un débutant en a vraiment besoin : ce qu'est un cash game et comment il fonctionne, la valeur des jetons, la structure des blindes, ce qui change en stratégie, le format le plus dur, le plus rentable, la bankroll, l'ICM, quand quitter une table, et par lequel commencer. Si les tournois restent encore un mystère pour toi, lis d'abord [comment fonctionne un tournoi de poker — buy-in, niveaux de blindes et déroulement du Jour 1](/fr/blog/holdem-tournament) ; cet article compare les deux formats au lieu de répéter ce guide de structure.

### La réponse en 15 secondes

- **Cash game :** les jetons valent de l'argent réel, les blindes restent fixes et tu pars quand tu veux.
- **Tournoi :** tu paies un seul buy-in (droit d'entrée), tu reçois des jetons de tournoi et tu joues jusqu'à être éliminé ou gagner.
- **Le cash game enseigne les fondamentaux plus vite** parce que les stacks sont plus profonds et que le retour sur tes décisions arrive plus tôt.
- **Le tournoi offre un plus gros potentiel de gain** mais une variance bien plus forte, des sessions plus longues et [la pression de l'ICM](/fr/blog/holdem-icm).
- **Pour la plupart des débutants, le cash game est le point de départ le plus propre.** Ajoute les tournois une fois que les bases sont devenues automatiques.

---

## Quelle est la différence entre un cash game et un tournoi ?

Dit le plus simplement possible :

==**Un cash game consiste à prendre des décisions rentables avec de l'argent sur la table. Un tournoi consiste à survivre assez longtemps pour remporter un prix.**==

En cash game, si tu prends une cave de $200, tes jetons représentent $200. Si tu montes à $450, ==g:tu peux repartir avec $450==. Chaque jeton a une valeur directe en argent.

En tournoi, tu peux payer un buy-in de $100 et recevoir 20 000 jetons. ==r:Ces jetons ne valent pas $20 000==, et tu ne peux pas les encaisser en cours de route. Ils ne comptent que parce qu'ils t'aident à survivre, à mettre la pression et à finir plus haut dans la structure des gains.

Voici ce que ça donne à la table. Dans un cash game $1/$2, payer une mise de $60 à la river avec une paire, c'est risquer $60 immédiatement. Si le call est mauvais, tu peux toujours te lever, te recaver ou rejouer un autre jour. Dans un tournoi à $50 près des places payées, payer pour 18 big blinds peut mettre fin à tout ton tournoi. Les cartes se ressemblent peut-être, mais le prix de l'erreur n'est pas le même.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Critère | Cash game | Tournoi |
|------|------|------|
| Valeur des jetons | Argent réel | Équité de tournoi |
| Entrée | Cave du montant que tu choisis | Buy-in fixe |
| Partir | Quand tu veux | Tu joues jusqu'à l'élimination ou la fin |
| Blindes | En général fixes | Augmentent avec le temps |
| Objectif principal | Maximiser l'EV sur le long terme | Survivre et grimper les paliers de gains |
| Stratégie clé | Jeu postflop à stacks profonds | Pression des stacks, ICM, jeu de bulle |

</div>

Si tu comprends ce tableau, ==g:tu as déjà compris la base de toute la comparaison==.

---

## C'est quoi un cash game au poker ? (règles et fonctionnement)

**Un cash game, c'est le poker dans sa forme d'origine : tu t'assois, tu échanges ton propre argent contre des jetons, et chaque jeton sur la table vaut exactement sa valeur faciale.** On parle de ==cash game== (ou de ring game) : pas d'horaire, pas de prize pool, pas de classement final — juste du poker, main après main.

**Comment fonctionne un cash game ?** Tu choisis toi-même ta cave dans les limites affichées de la table. Une partie live typique en $1/$2 peut accepter n'importe quel montant entre environ $40 et $300, et le montant de ta cave compte : un stack profond crée plus de jeu postflop, un stack plus court simplifie les décisions.

**Les jetons sont de l'argent à tout moment.** Gagne un pot et cet argent est à toi immédiatement — il n'y a pas de « finir dans l'argent » comme en tournoi. C'est aussi pour ça qu'une décision de cash game se juge uniquement sur une chose : rapporte-t-elle de l'argent sur le long terme ?

**Les blindes sont fixes.** Une partie $1/$2 est toujours en $1/$2 cinq heures plus tard. Les deux mises obligatoires tournent simplement autour de la table à chaque main. Si la petite blinde, la grosse blinde ou l'« option » te semblent encore floues — ou si tu veux les règles des blindes manquées et du straddle — [ce que sont vraiment les blindes au poker](/fr/blog/holdem-blind-meaning) explique tout ça au même endroit.

**Tu peux te recaver et partir librement.** Tu perds ton stack ? Tu peux racheter des jetons sur-le-champ (jusqu'au maximum de la table). Tu dois y aller ? Ramasse tes jetons et passe à la caisse — pas besoin de demander la permission.

**La salle prélève un rake.** Dans la plupart des cash games, la salle prend une petite part de chaque pot (ou facture des frais de place au temps). Ça détermine discrètement quelles limites sont battables, alors ça vaut le coup de comprendre [comment fonctionne le rake au poker](/fr/blog/holdem-rake) avant de choisir une partie.

:::note[Cette section couvre l'essentiel du cash game. Nous sommes en train d'en faire un guide du cash game à part entière — considère ceci comme la graine.]:::

---

## Pourquoi les jetons de tournoi ne sont pas de l'argent ?

**Les jetons de tournoi ne sont pas de l'argent : c'est la différence la plus importante de tout cet article.**

En cash game, doubler ton stack double ton argent. C'est pour ça que les décisions de cash game peuvent se concentrer largement sur la chip EV (cEV) : *Ce call est-il rentable ? Cette mise rapporte-t-elle de l'argent sur la durée ?*

En tournoi, ==r:doubler ton stack de jetons ne double **pas** ton équité en argent réel==. Les gains dépendent de ta place à l'arrivée, pas du nombre exact de jetons que tu as à un instant donné.

Imagine un tournoi à 10 joueurs où chacun paie $100 (on ignore les frais de la salle pour simplifier — les $1 000 vont entièrement dans le prize pool (la cagnotte)).

| Place | Gain |
|:---|:---:|
| 1er | $500 |
| 2e | $300 |
| 3e | $200 |
| 4e-10e | $0 |

Si tu passes de 10 % des jetons à 20 % des jetons, tes chances de gagner de l'argent s'améliorent, mais ton équité en gains ne double pas pour autant. En revanche, si tu perds tous tes jetons sur la bulle, ton équité de tournoi tombe à zéro.

==r:C'est cette asymétrie qui fait que le tournoi récompense parfois le fold de mains qui seraient des calls rentables en cash game.==

![Infographie : les jetons de cash game se convertissent en argent immédiatement, alors que les jetons de tournoi n'ont aucune valeur en argent tant que tu n'as pas atteint une place payée](/images/holdem-tournament-chips-not-money.webp "Valeur des jetons de tournoi et ICM au poker")

---

## Blindes fixes ou blindes qui montent : qu'est-ce que ça change ?

**En cash game, les blindes restent fixes ; en tournoi, elles montent selon un calendrier — et c'est l'autre grande raison pour laquelle les deux formats ne se ressentent pas pareil.**

Dans un cash game $1/$2, les blindes restent à $1/$2. Une heure plus tard, elles sont toujours à $1/$2. Trois heures plus tard, toujours $1/$2. Tu peux attendre de meilleurs spots, te recaver si besoin et continuer à jouer avec un stack profond.

En tournoi, les blindes montent selon un calendrier. Un stack de 100 big blinds au début peut tomber à 25 big blinds plus tard sans perdre une seule main. Puis à 12 big blinds. À un moment, attendre devient cher.

| Phase | Cash game | Tournoi |
|------|------|------|
| Début | Les stacks profonds restent courants | La plupart des joueurs démarrent profonds |
| Milieu | La pression des blindes reste stable | Les stacks moyens raccourcissent |
| Fin | Tu peux encore te recaver ou partir | Les short stacks font souvent tapis |
| Pression | Plus faible et plus régulière | Augmente à chaque niveau |

==r:C'est pour ça que « attendre les grosses mains » ne suffit pas toujours en tournoi.== La montée des blindes t'oblige à ==voler, défendre, refaire tapis (reshove) et prendre des risques maîtrisés==.

---

## Stratégie cash game ou tournoi : qu'est-ce qui change vraiment ?

**Si les jetons ne veulent pas dire la même chose et que les blindes ne se comportent pas pareil, la stratégie doit changer elle aussi.** Voici les changements que tu sentiras vraiment à la table.

**Le cash game est une seule longue partie ; le tournoi, une série de parties courtes.** En cash game, chaque décision se juge sur une seule question : rapporte-t-elle de l'argent sur des milliers de répétitions ? En tournoi, la même décision doit aussi répondre à une deuxième question : qu'est-ce qu'elle fait à mes chances de survivre jusqu'aux places payées ?

**Ta base préflop part du même point, puis diverge.** Un bon [tableau des mains de départ](/fr/blog/holdem-starting-hands-chart) est la fondation dans les deux formats — mais le tournoi t'éloigne de cette base à mesure que les stacks raccourcissent, que les antes arrivent et que les paliers de gains (pay jump) approchent, alors qu'un cash game te laisse jouer les mêmes ranges disciplinées toute la nuit.

**La recave change la façon dont l'agression fonctionne.** En cash game, perdre un stack veut dire remettre la main à la poche, donc les gros bluffs et les calls fins ne coûtent « que » de l'argent. En tournoi, la même erreur, c'est l'élimination — c'est pourquoi les bons joueurs de tournoi choisissent leurs spots en fonction de la taille des stacks et de la survie, pas seulement des cartes.

### Poker deepstack contre push or fold en short stack

Le cash game récompense en général le jeu à stacks profonds. Tu joues souvent autour de 100 big blinds, ce qui veut dire que les décisions au flop, à la turn et à la river pèsent lourd. Tu dois comprendre la value bet, le bluff, la texture du board, la position et les ranges adverses.

Le tournoi commence profond mais devient souvent short. À 25 big blinds, 15 big blinds ou 10 big blinds, les décisions préflop deviennent bien plus importantes. Au lieu de planifier trois streets, tu choisis peut-être entre ouvrir, refaire tapis, payer pour tout ton stack ou passer — les ranges exactes sont dans [la stratégie short stack : quand faire tapis ou passer](/fr/blog/holdem-short-stack).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Profondeur de stack | Plus courant en | Compétence principale |
|------|------|------|
| 100BB+ | Cash game | Jeu postflop et value bet |
| 40-60BB | Milieu de tournoi | Ranges d'ouverture et réponse au 3-bet |
| 15-25BB | Milieu/fin de tournoi | Resteals et pression du shove |
| ==r:10BB ou moins== | Fin de tournoi | ==r:Discipline push or fold== |

</div>

Les joueurs de cash game s'en sortent souvent bien dans les premières phases d'un tournoi parce qu'ils sont à l'aise en stacks profonds. ==g:Les meilleurs joueurs apprennent les deux.==

---

## L'ICM existe-t-il en cash game ? Le concept propre au tournoi

**Non : l'ICM n'existe pas en cash game, c'est un concept propre au tournoi.** La plus grande fracture stratégique entre le cash game et le tournoi, c'est l'==ICM==.

ICM veut dire **Independent Chip Model**. Il estime la valeur en argent réel de ton stack de tournoi à partir de la taille des stacks, du nombre de joueurs restants et de la structure des gains. Le cash game n'a pas besoin de l'ICM, parce que les jetons y sont déjà de l'argent.

Où est-ce que ça mord ? Surtout [sur la bulle](/fr/blog/holdem-bubble) et en table finale. Imagine que tu as AKo sur la bulle avec un stack moyen et qu'un autre joueur fait tapis. En cash game, si le call est rentable d'après les pot odds et l'équité, tu payes. En tournoi, perdre veut dire finir avec $0, alors que gagner ne double pas ton équité en gains — donc un call qui rapporte de l'argent en cash game peut être un fold évident sous ICM.

| Facteur de décision | Cash game | Tournoi |
|------|------|------|
| Logique du call | Pot odds + équité | Pot odds + équité + ICM |
| Perdre un stack | Tu perds une cave | Élimination |
| Valeur des mains fortes | Plus stable | Varie avec la pression des gains |
| Pression de la bulle | Aucune | Énorme |

==g:Quand tu vois un bon joueur de tournoi passer une main qui semble trop belle pour être couchée, l'ICM en est souvent la raison.== Un paragraphe ne peut pas rendre justice aux calculs — les exemples détaillés sont dans [l'ICM expliqué : pourquoi les jetons de tournoi ne sont pas de l'argent](/fr/blog/holdem-icm).

![Infographie montrant que doubler ton stack de tournoi fait grandir ton équité en gains de moins du double — le cœur de la pression ICM](/images/holdem-tournament-icm-bubble.webp "Pression de la bulle en tournoi et décisions ICM")

---

## Le cash game est-il plus dur que le tournoi ?

**Aucun des deux n'est simplement « plus dur » : chacun est difficile à sa façon.** La question revient sans arrêt, et la réponse honnête est la suivante : ==ils sont durs de manières différentes==, et « plus dur » dépend des compétences qui te manquent.

Le cash game concentre la difficulté dans le **jeu postflop à stacks profonds**. Tu affrontes les mêmes limites — et souvent les mêmes réguliers — jour après jour, sans montée des blindes pour pousser qui que ce soit à l'erreur. Gagner demande en général un vrai avantage en lecture de main, en value bet et en discipline, et beaucoup de joueurs trouvent que grappiller cet avantage sur la durée est le test le plus dur à long terme.

Le tournoi répartit la difficulté sur plusieurs **phases**. Il te faut le jeu à stacks profonds au début, la précision du push or fold à la fin et le jugement ICM sur la bulle — plus l'endurance pour bien décider à la huitième heure et la solidité mentale pour encaisser de longues séries sans finir dans l'argent. Aucune phase n'est aussi profonde que le jeu postflop du cash game, mais l'éventail des situations est plus large.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Type de difficulté | Cash game | Tournoi |
|------|------|------|
| Profondeur d'une compétence | ==r:Très profonde== (postflop, stacks profonds) | Modérée à chaque phase |
| Éventail des compétences | Plus étroit | ==r:Très large== (profond, short, ICM) |
| Pression des adversaires | Régulière, souvent des réguliers expérimentés | Champs mélangés, varie selon la phase |
| Défi mental | Discipline sur de longues sessions plates | Endurance et écarts de variance |

</div>

Une règle pratique utile : ==g:le cash game est en général plus dur à *battre*, le tournoi plus dur à *tenir*==. Si tu bloques sur les décisions postflop, le cash game te semblera plus dur. Si tu bloques sur la patience, la pression et les écarts, ce sera le tournoi.

---

## Cash game ou tournoi : lequel est le plus rentable ? bb/100 vs ROI

**Le cash game rapporte de façon plus régulière, le tournoi par gros coups rares.** Les résultats en cash game se mesurent en général en **bb/100** ou en taux horaire. Si un joueur gagne 5 big blinds pour 100 mains sur un large échantillon, c'est un avantage régulier. Le retour n'est pas instantané, mais il est plus rapide et plus net que les résultats de tournoi.

Les résultats en tournoi se mesurent en général au **ROI**, au taux d'ITM (ITM : In The Money — dans l'argent), à la fréquence de tables finales et aux gros gains. Un joueur de tournoi gagnant peut enchaîner 20 ou 30 tournois sans finir dans l'argent, puis faire un seul long parcours qui rembourse tout.

Alors, lequel est le plus rentable ? ==Pour la plupart des joueurs, le cash game produit un taux horaire plus prévisible, alors que les gains en tournoi arrivent par pics rares et importants.== Un joueur de tournoi talentueux peut tout à fait gagner plus sur une année — mais l'argent arrive de façon irrégulière, et il te faut la bankroll et le tempérament pour survivre aux trous entre deux gros gains.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Indicateur | Cash game | Tournoi |
|------|------|------|
| Unité principale de résultat | bb/100 ou taux horaire | ROI et place à l'arrivée |
| Variance | Modérée | ==r:Très élevée== |
| Potentiel de gros gain | Plus faible | ==g:Plus élevé== |
| Retour sur ton niveau | ==g:Plus rapide== | Plus lent |
| Défi mental | Gains/pertes session par session | Longues séries sans finir dans l'argent |

</div>

==r:Le piège, c'est de mal lire la variance.== Un gros gain en tournoi ne prouve pas que tu écrases le jeu. Une mauvaise session de cash game ne veut pas dire que tu ne sais pas jouer. ==g:Il te faut un échantillon suffisant dans les deux formats.==

---

## Gestion de bankroll : pourquoi le tournoi demande-t-il plus de marge ?

**Le tournoi demande plus de marge parce que ses écarts sont bien plus grands.** La gestion de bankroll compte dans les deux formats, mais le tournoi exige en général un coussin plus épais.

Une règle courante pour débutant en cash game, c'est environ **20-40 caves** pour la limite que tu joues. Si ta cave habituelle en cash game est de $200, ça fait à peu près $4 000-$8 000 comme bankroll poker prudente.

Pour les tournois, la recommandation standard est plus raide : **100+ buy-ins pour les MTT (tournois multi-tables) à gros champ**, un peu moins pour les formats plus petits ou plus faciles. Un tournoi à $50 peut sembler moins cher qu'une cave de $200 en cash game, mais la variance peut être bien plus brutale.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Format | Bankroll conseillée pour débutant | Pourquoi |
|:---|:---:|:---|
| Cash game | ==g:20-40 caves== | Variance plus faible, recave possible |
| Petit sit & go (SNG) | 40-60 buy-ins | Plus de variance sur les gains |
| MTT à gros champ | ==r:100+ buy-ins== | Les longues séries sans finir dans l'argent sont normales |

</div>

La bankroll n'est pas qu'une question d'argent. ==Elle protège ta prise de décision.== ==r:Quand tu joues sans assez de bankroll, chaque tapis devient une affaire personnelle, et la bonne stratégie est remplacée par la peur.==

---

## Quand quitter une table de cash game (et pourquoi tu ne peux pas quitter un tournoi) ?

**Tu peux quitter une table de cash game quand tu veux ; un tournoi, non.** Le cash game est souple : tu peux t'asseoir 30 minutes, jouer deux heures ou partir quand la table est mauvaise. Le tournoi, c'est l'inverse : une fois inscrit, tu joues jusqu'à être éliminé, finir dans l'argent ou gagner — si tu t'en vas en cours de route, tes jetons restent sur la table et paient les blindes jusqu'à disparaître.

Alors, quand *devrais*-tu quitter un cash game ? Les règles disent « quand tu veux », mais la réponse rentable est plus précise :

- **Pars quand la partie n'est plus bonne.** Les joueurs les plus faibles s'en vont, la table s'est resserrée, ou les places qui rendaient la table rentable ont disparu.
- **Pars quand *toi*, tu n'es plus bon.** Le tilt, la fatigue et la distraction détruisent un win rate plus vite que de mauvaises cartes. Si tu te surprends à payer par frustration, ramasse tes jetons.
- **Ne pars pas juste parce que tu as atteint un chiffre.** Être en gain ou en perte d'une cave ne dit rien sur la rentabilité de l'heure qui vient. Arrêter en gain dans une excellente partie et s'acharner en perte dans une partie terrible sont deux fuites.
- **Partir juste après un gros pot est autorisé.** Aucune règle ne t'oblige à « rendre de l'action » — même si, côté étiquette, jouer quelques mains de plus avant de ramasser tes jetons passe mieux qu'un hit and run immédiat.

Deux règles de maison s'appliquent presque partout : tu ne peux pas retirer des jetons de la table pour les mettre dans ta poche tout en continuant à jouer (le « ratholing »), et si tu pars puis reviens peu après dans la même partie, tu dois en général te recaver au moins pour le montant avec lequel tu étais parti.

| Situation du joueur | Format le plus adapté |
|------|------|
| Ton temps libre est imprévisible | Cash game |
| Tu veux des sessions courtes | Cash game |
| Tu peux rester concentré pendant de longues heures | Tournoi |
| Tu aimes le classement, la pression et les trophées | Tournoi |
| Tu risques de devoir partir d'un coup | Cash game |

C'est un point pratique que les débutants ratent souvent. Un buy-in de tournoi peut sembler plus petit qu'une cave de cash game, mais le coût en temps est bien plus élevé.

---

## Cash game ou tournoi pour débuter au poker : par quoi commencer ?

Pour la plupart des débutants, ==g:**le cash game est la meilleure première salle de classe**==.

Ce n'est pas parce que le cash game est facile. Il ne l'est pas. Mais ==il te donne des répétitions plus propres==. Les blindes restent les mêmes, les stacks sont souvent plus profonds, et tu peux vérifier si ton call, ta relance ou ta value bet avaient du sens ==r:sans devoir en plus démêler l'ICM, les paliers de gains et la pression des blindes==.

Le tournoi peut quand même être excellent pour un débutant si tu aimes la compétition et que tu supportes la variance. C'est excitant, structuré, et ça te donne un objectif clair : survivre et finir plus haut. Ne confonds simplement pas un long parcours avec la preuve que toute ta stratégie tient la route.

| Objectif | Meilleur point de départ |
|------|------|
| Apprendre les fondamentaux vite | Cash game |
| Améliorer tes décisions postflop | Cash game |
| Jouer des tournois courts à horaire fixe | Tournoi |
| Viser le potentiel d'un gros gain | Tournoi |
| Jouer des sessions courtes | Cash game |
| Étudier l'ICM et la pression de la bulle | Tournoi |

Si tu débutes complètement, apprends d'abord [comment se déroule une main de Texas Hold'em](/fr/blog/holdem-game-order) et [les combinaisons au poker](/fr/blog/holdem-hand-rankings). Choisir un format est bien plus simple une fois que les règles de base sont automatiques — et si tu penches pour le tournoi, regarde [comment fonctionne un tournoi de poker](/fr/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") pour les buy-ins, les niveaux de blindes et le déroulement du Jour 1.

### Le cadre de décision pour débutant

Si tu n'arrives toujours pas à choisir, utilise ce filtre rapide.

| Ta situation | Commence par |
|------|------|
| Tu as 1-2 heures et tu devras peut-être partir | Cash game |
| Tu as une petite bankroll et tu détestes les gros downswings | Cash game |
| Tu veux comprendre pourquoi les mises fonctionnent au flop, à la turn et à la river | Cash game |
| Tu as une soirée libre et tu veux un objectif structuré | Tournoi |
| Tu aimes la pression, les classements et jouer pour une table finale | Tournoi |
| Tu es prêt à étudier les tableaux push or fold et les spots ICM | Tournoi |

Mon conseil par défaut pour un débutant sérieux est simple : joue du cash game en micro-limites pour les répétitions, puis ajoute de petits tournois pour l'expérience. Le cash game révèle tes fuites plus vite. Le tournoi t'apprend la pression, la patience et le contrôle de tes émotions. Ensemble, ils font de toi un joueur plus complet.

### Le cash game te convient mieux si :

- Tu veux des sessions souples.
- Tu préfères progresser de façon régulière.
- Tu veux étudier le poker postflop à stacks profonds.
- Tu veux un retour plus net sur tes décisions.
- Tu as une bankroll plus petite et tu n'aimes pas les longs downswings.

### Le tournoi te convient mieux si :

- Tu aimes la compétition, la pression et les classements.
- Tu peux bloquer plusieurs heures sans interruption.
- Tu aimes avoir la chance d'un plus gros gain pour un seul buy-in.
- Tu es prêt à étudier l'ICM, le jeu de bulle et les ranges en short stack.
- Tu supportes de longues séries sans finir dans l'argent.

Aucun des deux formats n'est « meilleur ». Ils testent des facettes différentes du même jeu. Beaucoup de bons joueurs se servent du cash game pour bâtir leurs fondamentaux et du tournoi pour tenter les gros coups.

---

## Salle de poker live : que demander en arrivant ?

**Avant de t'asseoir dans une salle de poker live ou un tournoi local, demande quel format tourne vraiment.** La même table, les mêmes jetons et les mêmes cartes peuvent créer des décisions très différentes selon la structure.

Les questions utiles :

| Question | Pourquoi c'est important |
|------|------|
| C'est un cash game ou un tournoi ? | La valeur des jetons et la stratégie changent complètement |
| Quelles sont les blindes ou les niveaux de blindes ? | Ça détermine la pression sur les stacks |
| Les réentrées (re-entry) ou les add-ons sont-ils autorisés ? | Ça change le coût total et le risque |
| Quelle est la structure des gains ? | Ça influence les décisions de bulle et d'ICM |
| Combien de temps dure le tournoi en général ? | Ça t'évite les erreurs dues au manque de temps |

Si tu ne peux pas expliquer la structure, ne prends pas encore ta place. Demande d'abord, joue ensuite.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-pot-odds | Comment calculer les pot odds | /images/holdem-pot-odds-hero.webp
/fr/blog/holdem-probability | Probabilités au poker : le tableau des cotes | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Les tournois de poker sont-ils plus durs que le cash game ?**

A. Ils sont durs de manières différentes. Le tournoi exige un éventail de compétences plus large — stacks profonds au début, push or fold à la fin, ICM sur la bulle — plus de longues heures et une variance brutale. Le cash game concentre la difficulté dans le jeu postflop à stacks profonds face à des tables plus stables. La plupart des joueurs trouvent le tournoi plus dur à tenir et le cash game plus dur à battre.

**Q. Le cash game est-il rentable pour un débutant ?**

A. Il peut l'être, mais attends-toi d'abord à payer ton apprentissage. Les cash games en micro-limites comptent beaucoup de joueurs faibles, et un débutant discipliné, avec des ranges préflop serrées et de bonnes habitudes de bankroll, peut devenir un petit gagnant. Garde en tête que le rake frappe le plus fort les petites limites, et que la plupart des débutants perdent pendant leurs premiers mois, le temps de boucher leurs fuites.

**Q. Un débutant doit-il commencer par le cash game ou le tournoi ?**

A. La plupart des débutants devraient commencer par du cash game en micro-limites ou par de tout petits tournois. Si ton objectif est d'apprendre les fondamentaux vite, le cash game est plus propre. Si ton objectif est l'excitation et une compétition structurée, les petits tournois conviennent très bien, à condition de comprendre la variance.

**Q. L'ICM compte-t-il en cash game ?**

A. Non. L'ICM s'applique aux tournois, parce que les jetons de tournoi ne sont pas de l'argent et que les gains dépendent de la place à l'arrivée. En cash game, les jetons sont déjà de l'argent, donc les décisions reposent plus directement sur les pot odds, l'équité, la position et les ranges adverses.

**Q. Combien de caves faut-il en cash game et en tournoi ?**

A. Une règle courante : 20-40 caves pour le cash game et 100+ buy-ins pour les tournois à gros champ, avec les formats plus petits comme les sit & go entre les deux, autour de 40-60. Le tournoi demande le plus gros coussin parce que les longues séries sans finir dans l'argent sont normales, même pour les joueurs gagnants.

**Q. Avec combien de big blinds commence-t-on en cash game et en tournoi ?**

A. En cash game, prends la cave maximale de la table — en $1/$2, c'est en général $200–$300, soit 100–150 big blinds — parce que les stacks profonds récompensent le jeu postflop et te permettent de gagner un stack entier quand tu es devant — à deux conditions. Ta bankroll doit le supporter (la règle des 20-40 caves plus haut vaut pour des caves pleines, pas des caves courtes), et un stack profond ne paie que si tu es le meilleur joueur postflop. Si l'un des deux est fragile, prendre une cave plus courte est un choix légitime, pas une erreur de débutant : un stack plus court simplifie les décisions, il plafonne juste ce qu'un bon spot peut rapporter. En tournoi, c'est la structure qui choisit ta profondeur : tu commences en général autour de 100-300 big blinds, mais la montée des blindes la réduit à 20, puis à 10, puis au territoire du push or fold. En bref : prends une cave profonde en cash game quand ta bankroll et ton jeu postflop le permettent, et en tournoi, surveille la baisse de ton nombre de big blinds et ajuste-toi au fur et à mesure.

**Q. Combien de jetons faut-il pour un cash game entre amis ?**

A. Un set standard de 300 jetons couvre confortablement jusqu'à environ 6 joueurs — à 7-8, ça ferait 300 ÷ 8 = moins de 40 jetons chacun si tu distribuais tout, et en cash game, tu ne devrais pas le faire : fixe la cave sous forme de fourchette min/max, utilise 3-4 valeurs de jetons avec la plupart des jetons dans les plus petites, et garde le reste dans la mallette pour les recaves. C'est pour ça qu'un set de 500 jetons convient mieux à 7-8 joueurs. Le nombre exact compte moins que de se mettre d'accord, avant la première main, sur ce que vaut chaque couleur en argent réel.

**Q. Les pros jouent-ils plutôt en cash game ou en tournoi ?**

A. Les deux — mais beaucoup de pros se spécialisent. Les spécialistes du cash game apprécient un taux horaire plus régulier et des horaires souples, tandis que les pros de tournoi visent les gros gains et les titres malgré une variance plus forte. Bon nombre de joueurs de haut niveau font les deux : le cash game pour un revenu fiable, le tournoi pour le potentiel de gain et le prestige.

**Q. Un tournoi re-entry, c'est en fait du cash game ?**

A. Non. La réentrée (re-entry) te permet de racheter une place dans le tournoi après avoir été éliminé pendant une période donnée, mais les jetons ne sont toujours pas de l'argent. Les blindes montent toujours, les gains dépendent toujours de ta place à l'arrivée, et l'ICM compte toujours plus tard.

**Q. Peut-on quitter une table de cash game à tout moment ?**

A. Oui, d'après les règles : en cash game, tu peux t'asseoir 30 minutes, jouer deux heures ou partir quand tu veux, y compris juste après un gros pot — aucune règle ne t'oblige à « rendre de l'action », même si jouer quelques mains de plus avant de ramasser tes jetons passe mieux qu'un hit and run immédiat. Deux règles de maison s'appliquent presque partout : pas de ratholing (retirer des jetons de la table tout en continuant à jouer), et si tu reviens peu après dans la même partie, tu dois en général te recaver au moins pour le montant avec lequel tu étais parti. En tournoi, c'est l'inverse : si tu t'en vas en cours de route, tes jetons restent sur la table et paient les blindes jusqu'à disparaître.

---

## À retenir

1. ==**Les jetons de cash game sont de l'argent ; les jetons de tournoi sont une équité de survie.**== Cette seule idée explique la plupart des différences de stratégie.
2. ==g:**Le cash game enseigne les fondamentaux plus vite ; le tournoi teste mieux la pression.**== Choisis selon ton objectif, pas selon le format qui a l'air le plus glamour.
3. ==**La bankroll et le temps comptent.**== Si tu ne supportes pas les longues sessions ou les longs downswings, ==g:le cash game est en général le meilleur point de départ==.

Maîtrise d'abord les fondamentaux du cash game, puis ajoute les tournois quand tu es prêt pour ==la montée des blindes, la pression de l'ICM et les montagnes russes émotionnelles d'un long parcours==.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournois</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment fonctionne un tournoi de poker ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Buy-in, niveaux de blindes, formats et checklist du Jour 1</div>
  </a>
  <a href="/fr/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Déroulement</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment jouer au Texas Hold'em : l'ordre du jeu</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Du préflop au showdown — le déroulement complet d'une main, étape par étape</div>
  </a>
  <a href="/fr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Combinaisons</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Combinaisons au poker : l'ordre des mains et qui bat quoi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les 10 mains avec probabilités, exemples et énigmes de board</div>
  </a>
  <a href="/fr/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blindes</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les blindes au poker : petite blinde et grosse blinde</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">SB, BB, vol de blindes et option — tout est expliqué</div>
  </a>
</div>
`.trim(),
};
