import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-betting-actions",
  title: "Check, call, relance, fold : les actions de mise au Texas Hold'em",
  seoTitle: "À toi de parler ? — Check, call, relance et fold au poker",
  desc: "C'est à toi de parler et ta tête se vide ? Ce que veulent dire check, call, relance et fold au poker, la mise minimum et la règle de la relance.",
  tldr: "Au Texas Hold'em, il y a 5 actions : checker (dire « parole » : ne pas miser tout en restant dans le coup), miser (ouvrir le tour), suivre (payer la mise), relancer (la relance minimum égale au moins la dernière mise ou relance complète) et se coucher (fold). Tu ne peux checker que s'il n'y a aucune mise devant toi : préflop, c'est en général seulement la grosse blinde, ou le joueur qui a posé un straddle.",
  category: "rules",
  date: "2026-06-14",
  updated: "2026-10-08",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "🃏",
  tags: [
    "fold poker",
    "check poker",
    "relance poker",
    "call poker",
    "raise poker",
    "se coucher au poker",
    "mise minimum poker",
  ],
  image: "/images/holdem-betting-actions-hero.webp",
  imageAlt: "Table de Texas Hold'em avec des piles de jetons CHECK, CALL, RAISE et FOLD — un joueur tient ses cartes fermées en réfléchissant à son action",
  content: `
Ma toute première session en live, le donneur m'a lancé « c'est à toi de parler » et je me suis figé — de longues secondes de silence, toute la table qui me regardait.

Je checke ? Je suis ? Je relance ? Je connaissais le classement des mains. Ce que je ne connaissais pas vraiment, c'étaient ==les règles des actions elles-mêmes== — et c'est exactement le trou que ce guide vient combler.

Au Texas Hold'em, il n'existe que ==5 actions de mise==, mais les règles qui les entourent (quand le check est autorisé, quelle taille doit faire une relance, combien de fois on peut surrelancer) piègent les débutants pendant des semaines. Si tu découvres le jeu, parcours d'abord le [guide complet des règles du Texas Hold'em](/fr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") — puis reviens ici pour le règlement action par action.

---

### En bref

:::stripe
5 | actions de mise : checker, miser, suivre, relancer, se coucher
1 BB | mise d'ouverture minimale en No-Limit Hold'em
= dernière relance complète | taille minimale d'une surrelance (la règle de l'incrément)
Aucun plafond | de surrelances en No-Limit — tu peux relancer jusqu'à ce que quelqu'un soit à tapis
:::

## Quelles sont les 5 actions au poker : check, mise, call, relance, fold ?

Au Texas Hold'em, chaque décision se résume à cinq actions : checker, miser, suivre (call), relancer ou se coucher (fold). Le check et le fold ne te coûtent aucun jeton de plus ; le call égale la mise en cours ; la mise ouvre le tour ; la relance l'augmente. Préflop, la blinde (blind) que tu as posée compte déjà comme une mise, et c'est pour ça que tes options dépendent de ta place.

Chaque décision que tu prends à une table de poker est l'une de ces cinq :

| Action | Quand elle est possible | Coût en jetons |
|--------|---------------|-----------|
| Se coucher (fold) | À chaque fois que c'est à toi de parler | Gratuit — mais tu abandonnes les jetons déjà dans le pot |
| Checker (check) | Seulement s'il n'y a aucune mise vivante (une mise qui compte pour le tour en cours) devant toi (préflop : en grosse blinde, ou si tu es le joueur qui a posé un straddle (overblind) live, c'est-à-dire une mise à l'aveugle volontaire posée avant la distribution) | Gratuit — tu ne mets aucun jeton et tu restes dans le coup |
| Suivre (call) | Après que quelqu'un a misé ou relancé | Tu égales exactement la mise en cours |
| Miser (bet) | Première mise du tour | Le montant de ton choix (minimum = 1 grosse blinde) |
| Relancer (raise) | Après que quelqu'un a misé | Au moins la taille de la dernière mise ou relance complète, ajoutée par-dessus |

==Faire tapis (all-in)== n'est pas une sixième action à part : c'est une mise, un call ou une relance avec tous les jetons qu'il te reste. On y revient plus bas.

La règle que les débutants ratent le plus souvent : ==r:tu ne peux plus checker dès qu'une mise vivante est devant toi==. Dès qu'il y a dans le pot des jetons que tu n'as pas égalés, tes options se réduisent à te coucher, suivre ou relancer.

### Les mots qu'on entend à table : parole, passe, tapis…

Dans les clubs et les tournois en association en France, les annonces ne se font pas toujours en anglais. Le règlement officiel de [La Ligue de Poker](https://www.laliguedepoker.org/reglement/) fixe le vocabulaire : « …mise/ouverture (bet), relance (raise), payé/suivi (call), passe (fold), parole (check), tapis (all in). » Et il précise : « Il est convenu que taper sur la table signifie « parole » ou « check ». »

| Action | Ce qu'on dit à table | Sens |
|--------|---------------|-----------|
| Miser (bet) | « mise » ou « ouverture » | Tu ouvres le tour avec la première mise |
| Relancer (raise) | « relance » | Tu augmentes la mise en cours |
| Suivre (call) | « payé » ou « suivi » | Tu égales la mise en cours |
| Se coucher (fold) | « passe » | Tu abandonnes tes cartes et le coup |
| Checker (check) | « parole » (ou taper sur la table) | Tu ne mises pas mais tu restes dans le coup |
| Faire tapis (all-in) | « tapis » | Tu mets tous tes jetons au milieu |

Attention au piège de vocabulaire : dans ce règlement, « passe » veut dire se coucher, pas checker. Dans la suite de ce guide, on dit simplement « se coucher » pour le fold et « checker » pour le check.

---

## C'est quoi un check au poker ?

Un check, c'est ne pas miser tout en gardant tes cartes. Il ne coûte aucun jeton et n'est possible que si personne n'a misé devant toi sur le tour en cours. À table, tu le signales en tapant sur la table ou en disant « parole » ou « check ». L'action passe ensuite au joueur assis à ta gauche.

Checker, ça veut dire : ==g:« pas de mise de ma part, mais je reste dans le coup. »==

Ça ne coûte rien. Si tout le monde checke, la carte commune suivante est distribuée — ou, à la river (la rivière), on va directement à l'abattage (showdown).

Checker, ce n'est pas abandonner. Tu gardes tes cartes, tu gardes toutes tes options et tu n'as rien payé pour voir la suite.

---

## Quand peut-on checker au poker ?

Tu peux checker seulement quand aucune mise vivante n'est devant toi : soit personne n'a encore misé sur le tour en cours, soit tu es la grosse blinde préflop et personne n'a relancé ni posé de straddle. Si un adversaire mise après ton check, tu dois alors choisir entre te coucher, suivre ou relancer — et checker puis relancer reste parfaitement légal.

Concrètement, deux situations :

- **Personne n'a encore misé** sur le tour en cours : flop, turn (le tournant) ou river
- **Tu es la grosse blinde préflop et personne n'a relancé ni posé de straddle** — ta blinde compte déjà comme une mise vivante, donc tu peux checker et voir le flop gratuitement (même chose pour le joueur qui a posé un straddle live si personne n'a relancé ni re-straddlé après lui)

Checker d'abord puis relancer quand un adversaire mise, ça s'appelle un ==check-raise== — une arme standard, pas un coup tordu.

Pour voir qui parle et à quel moment, tour par tour, consulte l'[ordre de jeu au Texas Hold'em](/fr/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp").

---

## C'est quoi un call au poker ? Check ou call, la différence

Suivre (call), c'est égaler exactement la mise en cours pour rester dans le coup : quelqu'un mise $10, tu paies $10. La différence avec le check est simple : le check n'existe que s'il n'y a aucune mise devant toi et il est gratuit, alors que le call suppose qu'un joueur a déjà misé et te coûte ce qu'il faut pour égaler sa mise — seulement la différence si tu as déjà mis des jetons dans ce tour.

On dit aussi « payer ». Tu mets exactement le montant de la mise, ni plus, ni moins — et s'il te reste moins de $10, tu peux quand même suivre : tu fais tapis avec ce que tu as.

Check ou call, c'est la confusion de débutant la plus fréquente, alors voici la distinction nette :

| | Checker (check) | Suivre (call) |
|-|-------|------|
| Quand ça existe | Aucune mise vivante devant toi (préflop : en grosse blinde, ou si tu es le joueur qui a posé un straddle live) | Quelqu'un a misé avant toi |
| Coût en jetons | Gratuit | Tu égales la mise en cours |
| Ce que ça dit | « Je ne mise pas, je reste » | « Je paie pour continuer » |

Exemple concret : tu es au flop avec K♠ 8♦. Personne n'a misé, donc tu ==checkes==. Le joueur suivant mise $10. Maintenant, tes options sont ==suivre== les $10, ==relancer== (à $20 ou plus) ou ==te coucher==. Le check n'est plus possible — cette fenêtre s'est refermée à l'instant où la mise est entrée.

---

## Que signifie « se coucher » au poker, et peut-on se coucher à tout moment ?

Se coucher, c'est abandonner tes cartes et quitter le coup ; les jetons que tu as déjà mis restent dans le pot. Tu peux le faire chaque fois que c'est ton tour, même sans avoir misé, et la décision est définitive. Mais ne te couche jamais hors de ton tour, et ne jette pas une main quand tu pourrais checker gratuitement.

Tu ne paies rien de plus, mais ==r:chaque jeton que tu as déjà mis reste dans le pot== — se coucher ne rembourse rien.

Se coucher alors que personne n'a misé n'est pas sans conséquence pour autant : en tournoi, ce geste compte comme un « fold non standard » selon la ==règle 84 de la WSOP== et peut valoir un avertissement. Si personne n'a misé, checke.

Une règle d'étiquette en live : attends que l'action arrive jusqu'à toi avant de te coucher — te coucher ==hors de ton tour== donne de l'information aux joueurs qui hésitent encore, et la plupart des salles te mettront un avertissement ou une pénalité. Savoir *quand* le fold est le bon choix, c'est une compétence à part entière — c'est le sujet de [savoir quand se coucher au poker](/fr/blog/holdem-when-to-fold).

---

## C'est quoi la relance minimum (min-raise) ? Les règles de mise et de relance au Hold'em

En No-Limit Hold'em, la mise minimum vaut une grosse blinde, et la relance minimale (min-raise) doit ajouter au moins la taille de la dernière mise ou relance complète. Face à une mise de $6, tu relances donc au moins à $12. Le maximum, c'est tout ton stack, et seul un tapis peut être plus petit que ce minimum.

![Infographie de la règle du min-raise au poker : une mise de $6 impose de relancer au moins à $12, et une relance préflop à $6 impose une surrelance minimale à $10](/images/holdem-betting-actions-min-raise.webp "La règle du min-raise — une relance doit ajouter au moins la taille de la dernière mise ou relance complète ; seul un tapis peut être plus petit")

En No-Limit Hold'em (le format que tu joueras presque toujours) :

- **Mise minimum** : 1 grosse blinde
- **Relance minimale (le min-raise)** : au moins ==la taille de la dernière mise ou relance complète== ajoutée par-dessus
- **Maximum** : tout ton stack — c'est ça, le « no limit »

Deux exemples chiffrés :

| Tour | Action jusqu'ici | Relance minimale |
|--------|--------------|---------------|
| Flop | Un joueur mise $6 | $6 de plus → $12 au total |
| Préflop (blindes $1/$2) | Un joueur relance à $6 (une relance de $4 au-dessus de la blinde de $2) | $4 de plus → $10 au total |

L'idée clé : le min-raise reprend ==l'incrément== de la dernière mise ou relance complète (on dit aussi « relance pleine »), pas la grosse blinde. (Le mot « complète » prend tout son sens quand quelqu'un fait tapis pour moins qu'une relance : après une mise de $10 et un tapis de $14, l'incrément à égaler reste $10, donc la plus petite relance est à $24.) Préflop, la grosse blinde compte comme la mise d'ouverture — c'est pour ça que la plus petite relance d'ouverture est à 2 grosses blindes.

Deux règles du poker en live qui accompagnent la relance :

1. **Annonce « relance » — et le montant — avant de bouger tes jetons.** Tu dis « je suis » puis tu pousses plus de jetons ? Ta déclaration t'engageait déjà (==règle 90.d==) — le surplus ne compte pas. Un vrai ==string bet== (une mise en plusieurs fois), c'est autre chose : une mise ou une relance faite en plusieurs mouvements, avec un retour à ton stack, **sans** avoir annoncé « relance » d'abord — ou un geste trompeur destiné à provoquer une action hors tour (==règle 103==).
2. **Un seul mouvement.** Si tu n'annonces rien, tes jetons doivent partir en un seul mouvement vers l'avant.

*Combien* tu devrais relancer — ouvertures à 2,5x, 3-bets à 3x, tailles selon la texture du board (les cartes communes) —, c'est de la stratégie, pas du règlement — tout ça se trouve dans le [pilier stratégie du Texas Hold'em](/fr/blog/holdem-strategy).

---

## Combien de fois peut-on relancer au poker ?

En No-Limit Hold'em, il n'y a aucune limite au nombre de relances : on peut surrelancer jusqu'à ce qu'un joueur soit à tapis, tant que chaque relance respecte l'incrément minimum. Deux bornes restent : tu ne peux pas relancer ta propre mise, et en Fixed-Limit, le nombre de relances par tour est plafonné.

Concrètement, en **No-Limit Hold'em**, tu peux relancer, te faire surrelancer et relancer encore (« surrelance », « relancer une relance » — c'est la même chose) : relance → 3-bet → 4-bet → 5-bet → tapis est une séquence légale, aussi terrifiante soit-elle.

Deux règles encadrent quand même ces relances :

- Chaque surrelance doit respecter la ==règle de l'incrément minimum== vue plus haut — seule exception : un tapis, qui peut être plus petit
- ==r:Tu ne peux pas relancer ta propre mise.== Si tu mises et que tout le monde se contente de suivre, le tour se termine — tu ne peux relancer à nouveau que si quelqu'un *te* relance d'abord

En **Fixed-Limit**, chaque tour est plafonné (on parle de pot « capé »). Les règles de tournoi de la WSOP fixent le plafond à ==une mise plus quatre relances== (règle 100.b) — et l'exception marche à l'inverse de ce que la plupart des joueurs imaginent : ==r:le plafond tient même quand il ne reste que deux joueurs dans le coup==. Il ne saute qu'une fois que le **tournoi entier** est en heads-up. En cash game, ce sont les règles de la maison qui s'appliquent : demande au donneur.

---

## Faire all-in (tapis) : la dernière action possible

Faire tapis, c'est mettre au milieu tous les jetons qu'il te reste, sous forme de mise, de call ou de relance selon ce qui t'est ouvert. Si ton tapis est plus petit que la mise en cours, tu restes dans le coup pour un pot principal limité à ta contribution ; le surplus des plus gros stacks part dans un side pot (pot annexe).

Être plus court que la mise ne te fait donc pas coucher : le ==side pot== formé par les jetons en trop des plus gros stacks t'est simplement fermé. (Si quelqu'un est encore plus court que toi, tu joues quand même le side pot qu'il ne peut pas atteindre — chaque tapis ne plafonne que sa propre couche.) Et un tapis qui fait *moins qu'une relance minimale complète* ne rouvre en général pas les relances pour les joueurs qui ont déjà parlé — une règle subtile qui surprend même les habitués.

Toute la mécanique — le calcul des side pots, qui montre ses cartes en premier, les « table stakes » (on ne joue que les jetons posés sur la table) — se trouve dans [les règles du tapis et des side pots](/fr/blog/holdem-all-in-rules), et ce qui se passe quand des mains à tapis sont à égalité est expliqué dans [les règles du partage du pot (split pot)](/fr/blog/holdem-split-pot-rules).

---

## Connaître les actions, c'est l'étape 1 : les choisir, c'est de la stratégie

Ce guide te dit ce qu'est chaque action et quand elle est autorisée. Choisir la bonne — miser, suivre, relancer ou te coucher — relève de la stratégie : la force de ta main, ta position, la taille des mises. En attendant d'y travailler, une règle simple t'évitera des pertes : ==si ta main ne mérite pas une relance, se coucher vaut souvent mieux que suivre.==

Quand miser, quand un call est rentable, quand lâcher une bonne main : c'est une tout autre compétence. Pour la travailler, commence ici :

- Le cadre de chaque décision : [la stratégie au Texas Hold'em — les 5 décisions](/fr/blog/holdem-strategy)
- Évaluer d'abord la force brute de ta main : [le classement des mains au poker](/fr/blog/holdem-hand-rankings)
- Pourquoi ta place change tout : [les positions au poker expliquées](/fr/blog/holdem-positions)

---

## Les erreurs de mise que je vois chaque semaine en live

Dans les parties live à petites limites, quatre erreurs de mise reviennent sans cesse : pousser des jetons « pour suivre » alors que personne n'a misé, changer d'annonce après avoir dit « je suis », jeter un flop gratuit en grosse blinde, et poser un gros jeton en silence en croyant relancer. Les règles WSOP 90.a/90.b.1, 90.d, 84 (en tournoi) et 97 tranchent ces quatre cas, dans cet ordre.

Je joue chaque semaine une partie live à petites limites, et les mêmes erreurs d'action reviennent avec une régularité d'horloge :

### Erreur 1 — Suivre alors qu'on pourrait checker

Premier à parler au flop, personne n'a misé, et un joueur encore novice pousse des jetons **en silence**, « pour suivre ». Il n'y a rien à suivre : selon la ==règle 90.a de la WSOP==, on mise par une annonce *ou* en poussant des jetons — il vient de miser sans le vouloir. S'il avait *dit* « je suis », la ==règle 90.b.1== en aurait fait un check. Quand personne n'a ouvert le tour, checke : si personne ne mise derrière toi, tu vois la carte suivante gratuitement.

### Erreur 2 — « Je suis… non, je relance ! »

« Je suis… non, je relance ! » Raté. En live, ton action est verrouillée à l'instant où tu l'annonces : selon la ==règle 90.d==, une annonce verbale faite à ton tour t'engage. (Ce n'est d'ailleurs pas un string bet ; le string bet, c'est la mise en plusieurs mouvements avec retour au stack décrite dans la FAQ. Même résultat, cela dit : le premier mot fait foi.) J'ai vu des donneurs trancher en simple call en plein milieu de la phrase plus souvent que je ne saurais le compter. Annonce « relance » *d'abord*, puis bouge tes jetons.

### Erreur 3 — La grosse blinde qui jette un flop gratuit

Tout le monde limpe (se contente de payer la grosse blinde), l'action arrive à la grosse blinde, et elle se couche. C'est jeter ses cartes (muck) devant un flop gratuit. ==g:Si personne n'a relancé, la BB peut checker et voir trois cartes sans payer un jeton de plus== — sa blinde est déjà vivante. Ça arrive à chaque tour de table.

### Erreur 4 — Le jeton unique posé en silence

Face à une mise de $10, un joueur lâche en silence un seul jeton de $100 en attendant la monnaie *et* une relance. La ==règle du jeton unique (one-chip rule)== figure telle quelle dans le règlement de la WSOP (==règle 97==) : un seul gros jeton posé sans annonce n'est qu'un call. Pour relancer, le mot « relance » doit sortir **avant que le jeton touche la table**.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-all-in-rules | Faire tapis : règles de l'all-in et des side pots | /images/holdem-all-in-rules-hero.webp
/fr/blog/holdem-strategy | La stratégie au Texas Hold'em : les 5 décisions | /images/holdem-strategy-hero.webp
:::

## FAQ

**Q. Peut-on relancer après avoir checké au poker ?**

A. Oui — si quelqu'un mise après ton check, tu peux relancer quand l'action revient vers toi. C'est le check-raise, et il est parfaitement légal. Si tout le monde checke derrière toi, il n'y a aucune mise à relancer et le tour s'arrête simplement.

**Q. Peut-on relancer sa propre mise ?**

A. Non. Si tu mises et que tes adversaires se contentent de suivre, tu ne peux rien ajouter — le tour d'enchères se termine. En No-Limit et en Pot-Limit, tu ne peux relancer à nouveau que si l'action te revient face à au moins une relance complète au-dessus de ta mise — qu'un seul joueur l'ait faite ou que plusieurs petits tapis l'atteignent ensemble ; un seul tapis inférieur à une relance complète ne rouvre pas l'action. En Fixed-Limit, la barre est plus basse : un tapis valant au moins 50 % d'une mise ou relance complète rouvre l'action (règle 47-B du TDA 2024).

**Q. Y a-t-il une limite au nombre de relances au Texas Hold'em ?**

A. En No-Limit, il n'y a aucun plafond sur le nombre de relances — les surrelances peuvent continuer jusqu'à ce qu'un joueur soit à tapis, tant que chaque relance respecte l'incrément minimum (un tapis peut être plus petit). Les règles de tournoi de la WSOP plafonnent un tour de Fixed-Limit à une mise plus quatre relances (règle 100.b), et ce plafond tient même quand il ne reste que deux joueurs dans le coup — il ne saute qu'une fois le tournoi entier en heads-up.

**Q. Peut-on se coucher quand ce n'est pas son tour ?**

A. Il ne faut pas. L'action tourne dans le sens des aiguilles d'une montre, dans l'ordre, et un fold hors tour donne de l'information aux joueurs qui n'ont pas encore décidé. La plupart des salles le considèrent comme définitif et peuvent donner un avertissement ou une pénalité en cas de récidive. Attends que le joueur à ta droite ait parlé.

**Q. Peut-on checker préflop ?**

A. Seulement si ta propre mise posée est la mise vivante complète que tous les autres doivent égaler et que personne n'a relancé — en général la grosse blinde quand personne n'a posé de straddle, ou le joueur au straddle live quand il y en a un (règles WSOP Live Action 159 · 165) : ta mise posée compte comme ta mise d'ouverture, donc tu peux checker pour voir le flop gratuitement. La demi-mise de la petite blinde ne compte jamais, et dans un pot straddlé, la grosse blinde n'est qu'un joueur parmi d'autres face à une mise — toute position dont la mise posée n'est pas cette mise vivante doit suivre, relancer ou se coucher préflop.

**Q. Peut-on relancer après un all-in ?**

A. Ça dépend de la taille du tapis. S'il vaut une relance légale complète, l'action est rouverte et tu peux surrelancer — à condition qu'il reste au moins un adversaire qui n'est pas à tapis dans le coup ; en tête-à-tête face à un tapis, il n'y a plus rien à relancer, donc tu peux seulement suivre ou te coucher. S'il fait *moins* qu'une relance minimale complète, les joueurs qui ont déjà parlé peuvent en général seulement suivre ou se coucher — le petit tapis ne leur rouvre pas les relances dans la plupart des salles.

**Q. C'est quoi un string bet au poker ?**

A. C'est essayer de miser ou de relancer en plusieurs mouvements — en retournant à ton stack entre les deux — sans avoir annoncé « relance » d'abord (==règle 103==). Le second mouvement ne compte jamais — seuls les premiers jetons restent, jugés d'abord selon les règles du call à un jeton et à plusieurs jetons (règles 44–45 du TDA 2024). Là où s'applique le seuil de la moitié du minimum de la règle 43-A, mesure l'augmentation au-delà du call, pas le total des jetons : en dessous de la moitié de la plus grosse mise ou relance complète précédente, c'est un call ; à la moitié ou plus, il faut une relance minimale complète. Une annonce de relance préalable ou un tapis relèvent de leurs propres règles. La règle 103 interdit aussi un geste trompeur destiné à provoquer une action hors tour avant que ta propre action soit terminée. Dire « je suis » puis ajouter des jetons, ce n'est pas un string bet mais une annonce qui t'engage (==règle 90.d==) — même effet. Annonce ton action à voix haute — « relance » et le montant complet — ou mets tous tes jetons en un seul mouvement (règle 42 du TDA 2024).

**Q. Que veut dire limper au poker ?**

A. Limper, c'est entrer dans le pot préflop en payant simplement la grosse blinde au lieu de relancer. C'est légal, mais c'est en général un jeu faible — vois [pourquoi limper te coûte de l'argent](/fr/blog/holdem-limping) pour savoir quand c'est vraiment acceptable.

**Q. Que signifie « raise » au poker ?**

A. « Raise », c'est relancer : augmenter la mise déjà posée par un adversaire. En No-Limit, ta relance doit ajouter au moins la taille de la dernière mise ou relance complète — face à une mise de $6, tu relances au moins à $12 ; seul un tapis peut être plus petit.

**Q. Comment bien miser au poker ?**

A. Les règles te disent ce que tu as le droit de miser, pas ce que tu devrais miser. Combien relancer (ouvertures à 2,5x, 3-bets à 3x, tailles selon la texture du board), c'est de la stratégie, pas du règlement — c'est tout le sujet du [pilier stratégie du Texas Hold'em](/fr/blog/holdem-strategy).

**Q. Peut-on se coucher sans miser au poker ?**

A. Oui : dès que c'est ton tour, tu peux te coucher, même sans avoir misé. Mais si personne n'a misé devant toi, le check est gratuit — se coucher à ce moment-là, c'est jeter une main pour rien, comme la grosse blinde qui jette un flop gratuit. En tournoi, c'est même un « fold non standard » (règle 84 de la WSOP) qui peut valoir un avertissement.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pilier</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les règles du Texas Hold'em pour débutants</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le guide complet, des blindes à l'abattage</div>
  </a>
  <a href="/fr/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Déroulement</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">L'ordre de jeu au Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Du préflop à la river, avec de vraies mains</div>
  </a>
  <a href="/fr/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blindes</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Petite blinde et grosse blinde expliquées</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi tu paies avant de voir tes cartes</div>
  </a>
</div>
`.trim(),
};
