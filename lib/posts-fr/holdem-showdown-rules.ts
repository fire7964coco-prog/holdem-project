import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Règles du showdown au poker : qui montre en premier, muck et slow roll",
  seoTitle: "Qui montre ses cartes en premier ? — Showdown poker et muck",
  desc: "Qui montre ses cartes en premier au showdown ? Règles de l'abattage au poker : dernier agresseur, cards speak, muck sans montrer, slow roll et all-in.",
  tldr: "En tournoi, sans all-in, le dernier joueur à avoir misé ou relancé sur la river montre en premier ; si tout le monde a checké la river, c'est le premier joueur encore en jeu à gauche du bouton. Après un all-in, toutes les mains restantes doivent être montrées une fois les enchères terminées. Le joueur qui a payé la river et garde ses cartes peut demander à voir la main du dernier agresseur ; en cash game, ce sont les règles de la salle qui décident de qui montre et qui peut jeter sa main.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  tags: [
    "showdown poker",
    "muck poker",
    "slow roll poker",
    "abattage poker",
    "qui montre ses cartes en premier au poker",
    "regle abattage poker",
    "cards speak poker",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Infographie de l'abattage au Texas Hold'em — sur un board 4♥ 7♣ Q♦ K♠ 2♥, A♠ K♥ gagne avec une paire de rois et un kicker as",
  content: `
Tu as payé la mise sur la river (la rivière). Ton adversaire te fixe, tu le fixes, et chacun attend que l'autre retourne ses cartes en premier.

Personne ne bouge.

Le donneur regarde l'un, puis l'autre. Autour de la table, on soupire.

==Ce face-à-face se rejoue à presque toutes les tables en live== — parce que la plupart des débutants n'ont jamais appris qui doit vraiment montrer en premier. Ce guide passe en revue toutes les situations de l'abattage (showdown) : les mains classiques, la river checkée par tout le monde, les coups où quelqu'un fait tapis (all-in), et pourquoi un slow roll (faire exprès de traîner avant de montrer une main gagnante) te vaudra des regards noirs jusqu'à la fin de la session.

## Quelles sont les règles du showdown ?

Le showdown, c'est le moment où les joueurs encore en jeu retournent leurs cartes une fois les enchères terminées, et où le donneur lit les mains pour donner le pot à la meilleure. Qui montre en premier dépend de la fin du coup : une mise sur la river, une river checkée ou un all-in. Voici les cinq règles à retenir, détaillées plus bas.

- **Mise ou relance sur la river** : en tournoi, sans all-in, le dernier joueur à avoir misé ou relancé sur la river montre en premier.
- **River checkée par tout le monde** : c'est le premier joueur encore en jeu à gauche du bouton qui commence, puis on tourne dans le sens des aiguilles d'une montre.
- **All-in** : toutes les mains restantes doivent être montrées une fois les enchères terminées — en tournoi, personne ne peut jeter ses cartes (muck).
- **Voir la main adverse** : le joueur qui a payé la river et garde ses cartes peut demander à voir la main du dernier agresseur.
- **Cash game** : ce sont les règles de la salle qui décident de qui montre et de qui peut jeter sa main.

## Qui montre ses cartes en premier au poker ?

Tout dépend de la façon dont le dernier tour d'enchères s'est terminé. Si quelqu'un a misé ou relancé sur la river, c'est le dernier agresseur qui montre en premier, pas celui qui a payé. Si tout le monde a checké, c'est le premier joueur actif à gauche du bouton. Et en tournoi, dès qu'un joueur est all-in et que les enchères sont finies, toutes les mains passent face visible.

Le tableau ci-dessous résume les trois cas (pour la séquence complète, tour par tour, qui mène jusqu'ici, vois [l'ordre du jeu](/fr/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Action au dernier tour | Qui montre en premier |
|--------------------|-----------------|
| Quelqu'un a misé ou relancé sur la river | ==Le dernier joueur à avoir misé ou relancé== montre en premier — mais en tournoi, si un joueur du coup est all-in (sur la river ou à un tour précédent), toutes les mains passent face visible une fois les enchères terminées (voir plus bas) |
| Tout le monde a checké la river | Le premier joueur actif à gauche du bouton montre en premier — s'il n'y a pas d'all-in dans le coup ; en tournoi, un all-in à un tour précédent fait au contraire retourner toutes les mains |
| All-in à un tour précédent (enchères terminées avant la river) | Tournoi : toutes les mains sont étalées sans attendre, une fois toutes les enchères terminées (TDA 2024, règle 16). Cash : s'il y a un side pot (pot annexe), les joueurs du side pot montrent en premier ; et en no-limit, le joueur qui a fait tapis retourne ses cartes en premier (Live Action, règle 149) |

</div>

![Infographie de l'ordre de l'abattage au Texas Hold'em — qui montre en premier sur un board J♥ 9♠ 4♦ 2♠ K♥](/images/holdem-showdown-who-shows-first.webp)

==g:L'expression clé, c'est « dernier agresseur ».== Si tu as misé sur la river et qu'on t'a payé, c'est toi qui montres en premier — pas celui qui a suivi. Lui voit ta main avant de décider s'il montre la sienne ou s'il la jette.

---

## Peux-tu jeter tes cartes (muck) sans les montrer au showdown ?

Oui, si tu as perdu et que personne n'est all-in : une fois que le dernier agresseur a montré sa main, tu peux jeter la tienne face cachée sans rien dévoiler. Deux limites quand même : en tournoi, un all-in oblige à étaler toutes les mains une fois les enchères finies, et si c'est toi le dernier agresseur, celui qui a payé ta mise sur la river peut exiger de voir ta main.

Concrètement, une fois sa main dévoilée, les autres joueurs ont deux options :
- **Montrer leur main** s'ils pensent gagner
- **Jeter leurs cartes face cachée** s'ils voient qu'ils ont perdu — inutile de dévoiler quoi que ce soit. Mais seulement tant que personne n'est all-in : en tournoi, dès qu'un joueur est all-in **et que toutes les enchères des autres joueurs sont terminées**, la ==TDA 2024, règle 16== impose d'étaler toutes les mains du pot, et personne ne peut jeter les siennes. Tant que les autres ont encore des jetons et peuvent miser, tout reste face cachée (en cash game, ce sont les règles de la salle qui s'appliquent, et la plupart laissent celui qui a suivi jeter sa main)

==r:Mais il y a une exception importante :== si ta mise sur la river a été payée, celui qui a suivi a payé pour voir ta main. Cette demande — prier le donneur de retourner une main jetée — c'est la règle du **« I want to see that hand »** (« je veux voir cette main »). En tournoi, la ==TDA 2024, règle 18== l'encadre de près : celui qui n'a plus de cartes à l'abattage, ou qui a jeté les siennes face cachée, perd le droit de la faire. Ce droit n'est garanti que pour le joueur qui a payé la mise de la river et qui a étalé ou gardé ses cartes, et uniquement pour la main du ==dernier agresseur== — celle qu'il a payé pour voir. Tout le reste est laissé à l'appréciation du directeur de tournoi. Le cash game suit les règles de la salle, et elles ne sont pas automatiquement plus souples : selon les règles WSOP Live Action, demander à voir une main non dévoilée suppose un soupçon de collusion **et** la présence d'un responsable de salle, le floor (==Live Action, règle 147==). (Ne confonds pas avec « show one, show all » : si tu montres volontairement tes cartes à un joueur, toute la table a le droit de les voir.)

Règle pratique : ==quand tu es le dernier agresseur, retourne tes cartes — même sur un bluff payé.== Celui qui a suivi montre ou jette sa main après avoir vu la tienne. En tant que miseur, tu peux en général jeter tes cartes au lieu de les montrer et abandonner le pot ; les tournois WSOP font exception, puisqu'un joueur qui refuse de montrer et jette volontairement sa main y est pénalisé (==WSOP Tournament, règle 72==). Mais jeter trop vite, c'est perdre deux fois : en tournoi, celui qui a payé pour voir peut quand même exiger ta main (==TDA 2024, règle 18==) — en cash game WSOP, il ne le peut pas, sauf soupçon de collusion et présence d'un floor (Live Action, règle 147) — et comme ce sont les cartes qui parlent, bien des joueurs ont jeté une hauteur as qui gagnait en réalité le pot.

---

## Qui montre en premier quand tout le monde a checké la river ?

Quand personne n'a misé sur la river et que personne n'est all-in, l'abattage commence par le premier joueur actif à gauche du bouton, puis continue dans le sens des aiguilles d'une montre. Le bouton montre donc en dernier — et c'est un avantage : il voit si quelqu'un le bat avant de décider de retourner ses cartes ou de les jeter.

Exemple : le bouton, la petite blinde et la grosse blinde voient la river. La SB checke, la BB checke, le bouton checke. L'abattage commence par la SB (premier joueur actif à gauche du bouton). La SB peut montrer ou jeter. Puis la BB. Et le bouton en dernier.

==g:Ici, le bouton ne se décide qu'après que les deux blindes ont montré ou jeté leurs cartes.==

Attention à une idée reçue tenace sur ce cas précis :

| Ce qu'on lit | Ce que dit la règle |
|--------------------|-----------------|
| On lit souvent que le dernier agresseur des tours précédents montre en premier | Règle TDA (Rule 17) : premier joueur actif à gauche du bouton |

Une mise faite au flop ou à la turn (le tournant) ne compte pas : si la river passe checkée, l'ordre repart du bouton.

---

## Showdown après un all-in : le joueur all-in montre-t-il en premier ?

En tournoi, il n'y a pas d'ordre à respecter : dès qu'un joueur est all-in et que plus aucune mise n'est possible, toutes les mains sont retournées face visible (TDA 2024, règle 16). Le cash game suit les règles de la salle ; selon les règles WSOP Live Action, en no-limit, c'est le joueur à tapis qui retourne en premier si les enchères se sont arrêtées avant la river.

Concrètement, en **tournoi**, les cartes restantes sont alors distribuées avec **toutes les mains face visible** (==TDA 2024, règle 16==). Cela protège l'intégrité du coup : aucun joueur ne doit pouvoir jeter sa main par calcul dans une situation d'all-in. En cash game, les règles WSOP Live Action prennent le problème dans l'autre sens : outre le joueur à tapis qui retourne en premier **en no-limit** quand les enchères se sont arrêtées avant la river, dans n'importe quel cash game, quand il y a un side pot, les joueurs qui se le disputent montrent avant celui qui n'est all-in que pour le pot principal (==Live Action, règle 149==).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Scénario d'all-in | Règle à l'abattage |
|----------------|---------------|
| Un joueur fait tapis à un tour précédent, les autres suivent, plus aucune mise possible | Tournoi : toutes les mains sont étalées sans attendre, une fois toutes les enchères terminées. Cash : s'il y a un side pot, les joueurs du side pot montrent en premier ; et en no-limit, le joueur qui a fait tapis retourne ses cartes en premier (Live Action, règle 149) |
| Une mise all-in sur la river est payée | Cash : le joueur à tapis montre en premier, en tant que dernier agresseur. Tournoi : aucun ordre — selon la TDA 2024, règle 16, toutes les mains sont retournées d'un coup et ==r:personne ne peut jeter ses cartes ici== |
| Plusieurs all-in qui créent plusieurs side pots | Chaque pot se règle séparément. Tournoi : toutes les mains concernées sont étalées. Cash : pour gagner une part d'un pot, il faut montrer ses cartes (WSOP Live Action, règle 143) |

</div>

Une nuance : s'il y a un **side pot** (d'autres joueurs ont encore des jetons et continuent de miser), le side pot est attribué d'abord, puis le pot principal. C'est l'**ordre de paiement**. En tournoi, il n'a rien à voir avec le moment où les cartes sont retournées — la main du joueur à tapis est déjà face visible dès qu'aucune mise n'est plus possible ; l'illustration de la règle 16 de la TDA 2024 le dit clairement : il ne faut *pas* attendre le partage du side pot pour retourner l'all-in. En cash game, selon les règles WSOP Live Action, l'ordre suit au contraire les pots : les joueurs du side pot montrent d'abord, puis celui qui n'est all-in que pour le pot principal (règle 149).

Pour voir comment les side pots se forment et se paient quand des joueurs sont à tapis, lis [les règles de l'all-in et des side pots](/fr/blog/holdem-all-in-rules) ; pour les pots partagés, vois [les règles du split pot et du partage](/fr/blog/holdem-split-pot-rules).

---

## La règle « cards speak » : ce sont les cartes qui parlent

« Cards speak » (les cartes parlent) veut dire que la meilleure main gagne, quoi que disent les joueurs. Le donneur lit les cartes retournées et attribue le pot à la meilleure main montrée, même si son propriétaire l'a mal annoncée. L'inverse est vrai aussi : une main gagnante jetée sans avoir été montrée ne peut plus rien gagner une fois qu'elle est morte.

![Infographie de la règle cards speak — un board 8♠ 9♣ 10♥ J♦ Q♠ forme une quinte hauteur dame, et à l'abattage les cartes parlent d'elles-mêmes](/images/holdem-showdown-cards-speak.webp)

Exemple : un joueur lit mal sa main et annonce « j'ai une paire » alors qu'il tient en fait une quinte (suite) — ==c'est la quinte qui gagne==.

Ça marche dans les deux sens. Si tu crois avoir perdu et que tu jettes tes cartes sans les montrer alors que ta main était la gagnante, ==r:le pot est perdu==. Ta main est morte dès que le donneur l'a poussée dans le muck, ou dès qu'elle ne peut plus être identifiée et récupérée — des cartes posées face cachée ne sont pas automatiquement mortes (==TDA 2024, règle 14==). N'y compte jamais pour autant. Si tu n'es pas sûr à 100 % d'avoir perdu, laisse toujours le donneur lire ta main avant de la jeter.

Situation réelle : tu tiens J♥ 10♥ sur un board (les cartes communes) Q♥ 9♥ 8♥ 2♣ 5♦. Tu as une quinte flush à la dame (Q-J-10-9-8 à cœur). L'adversaire montre K♣ Q♦ (une paire de dames). Tu gagnes haut la main. Ne jette pas tes cartes juste parce que tu vois sa dame.

---

## C'est quoi le slow roll au poker ?

Le slow roll, c'est prendre exprès tout son temps pour montrer une main très forte alors qu'on sait déjà qu'on a gagné. Aucun règlement de tournoi TDA ou WSOP ne l'interdit nommément, mais les provocations (le chambrage) et les retards répétés peuvent être pénalisés. Surtout, c'est universellement détesté : si tu tiens la meilleure main possible, retourne tes cartes tout de suite.

Concrètement : tu as les nuts (la meilleure main possible). L'adversaire montre une main forte. Tu marques une pause, tu fais semblant de réfléchir, tu regardes tes cartes lentement, tu fais attendre tout le monde — puis tu retournes la gagnante. Le slow roll n'est pas interdit nommément, mais il n'est pas protégé pour autant : narguer un adversaire par une mise en scène (WSOP Tournament, règle 47) et retarder le jeu de façon répétée (TDA 2024, règle 70) peuvent tous deux valoir une pénalité.

![Slow roll au poker — les autres joueurs exaspérés pendant qu'un joueur retarde volontairement le moment de montrer sa main gagnante](/images/holdem-showdown-slow-roll.webp)

==r:Le slow roll est le moyen le plus rapide de se faire des ennemis à une table de poker.== Il est perçu comme une façon délibérée de remuer le couteau dans la plaie. La règle non écrite : si tu tiens la meilleure main possible, retourne-la immédiatement. Le slow roll n'apporte aucun avantage stratégique. Il ne crée que de la tension.

À ne pas confondre avec le **tanking** — prendre légitimement son temps pour une décision difficile. Ça, c'est accepté, et même respecté. Faire un slow roll avec les nuts, c'est tout autre chose.

---

## Quand montrer ses cartes au poker ? Et si tu gagnes sans showdown ?

Tu montres tes cartes quand le coup va jusqu'à l'abattage — en premier si tu es le dernier agresseur, sinon dans l'ordre du coup. En revanche, si tout le monde se couche avant le showdown, tu ramasses le pot sans montrer une seule carte, que tu bluffais ou non : gagner sans abattage, c'est gagner sans rien dévoiler.

==g:Montrer ou non devient alors un choix, jamais une obligation.==

Tu peux montrer tes cartes si tu veux — certains joueurs montrent un bluff pour faire perdre ses moyens à l'adversaire, ou une main forte pour se construire une image de joueur serré.

C'est l'une des choses qui rendent le poker passionnant. Ce n'est pas toujours la meilleure main qui gagne — c'est le dernier encore debout.

---

## L'étiquette du showdown : ce que les débutants font de travers

La plupart des accrochages à l'abattage ne viennent pas des règles, mais de réflexes que personne n'a appris au débutant : attendre que l'autre montre, jeter ses cartes trop vite, réclamer de voir toutes les mains, ou ne pas oser montrer plus tôt. Voici ces quatre erreurs, ce que disent les règlements, et comment les éviter dès ta prochaine session.

Rien ne refroidit une table plus vite qu'un abattage mal géré — et ces quatre-là sont celles que je me retrouve à corriger le plus souvent.

### Erreur 1 : attendre que celui qui a suivi montre en premier

Tu mises sur la river. Quelqu'un te paie. Tu te figes et tu attends qu'il montre. C'est l'inverse. ==C'est toi qui montres en premier — tu étais le dernier agresseur.== Attendre ressemble à un slow roll, même quand ce n'en est pas un — j'ai vu une partie entre amis se refroidir pendant un tour de table complet parce qu'un joueur laissait chaque fois transpirer celui qui l'avait payé avant de retourner la main gagnante.

### Erreur 2 : jeter ses cartes avant que le donneur lise la main

Tu es à peu près sûr d'avoir perdu. Tu fais glisser tes cartes face cachée vers le muck. Le donneur les ramasse. En fait, tu tenais la gagnante. Selon la ==TDA 2024, règle 14==, la main est morte dès que le donneur l'a poussée dans le muck, et le pot est presque à coup sûr perdu — mais appelle le floor avant de renoncer : les règles de tournoi WSOP permettent à la direction de récupérer une main encore clairement identifiable, et un effort supplémentaire est fait si le muck vient d'une erreur du donneur ou d'une mauvaise information (WSOP Tournament, règles 109 et 110). ==Ne jette jamais tes cartes tant que tu n'es pas certain.== Laisse le donneur lire les deux mains.

### Erreur 3 : exiger de voir toutes les mains payées

Dans la plupart des salles, tu peux demander au donneur de dévoiler une main jetée. En tournoi, ce droit est strictement encadré : tu ne peux le demander que si tu as étalé tes propres cartes ou si tu les as encore, et un joueur qui a jeté les siennes face cachée le perd complètement (==TDA 2024, règle 18-A==). Au-delà, une seule demande est garantie : la main du dernier agresseur, celle qu'un joueur a payé pour voir. Tout le reste, y compris une main qui n'a jamais été payée ou une river sans mise, relève de l'appréciation du directeur — ce qui ne veut pas dire refus (==TDA 2024, règle 18-B==). Une main couchée est morte une fois dans le muck, et seule une main encore clairement identifiable peut être récupérée (WSOP Tournament, règle 109). Cette règle existe pour se protéger de la collusion, pas pour satisfaire la curiosité, et en abuser passe pour impoli. Utilise-la avec parcimonie.

### Erreur 4 : ignorer que tu peux montrer plus tôt

À l'abattage — une fois toutes les enchères terminées — aucune règle n'interdit de retourner ta main avant que ce soit officiellement ton tour. Tant que le coup est encore en cours et qu'une action reste à venir, c'est l'inverse : montrer ses cartes te vaut une pénalité selon la ==règle 117 du règlement de tournoi WSOP== (le règlement Live Action numérote ses articles autrement). ==g:Si tu tiens les nuts ou une main très forte, montre-la tout de suite.== Les autres joueurs apprécient. Ça accélère la partie. Et c'est tout le contraire du slow roll.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-game-order | L'ordre du jeu au poker | /images/blog-holdem-game-flow.webp
/fr/blog/holdem-all-in-rules | Règles de l'all-in et side pots | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. Qui montre ses cartes en premier au showdown ?**

A. Quand personne n'est all-in, c'est le dernier joueur à avoir fait une action agressive (mise ou relance) au dernier tour d'enchères qui doit montrer en premier. Si tout le monde a checké ce dernier tour, c'est le premier joueur actif à gauche du bouton qui montre en premier, puis on continue dans le sens des aiguilles d'une montre. Les pots avec all-in suivent leur propre règle — vois la question sur l'all-in plus bas.

**Q. Dois-tu montrer tes cartes si tu es payé au showdown ?**

A. Oui — si tu étais le dernier à miser ou relancer sur la river, tu montres en premier quand on te paie ; ta seule porte de sortie est de jeter ta main et d'abandonner le pot, ce que les tournois WSOP pénalisent (WSOP Tournament, règle 72). Un seul cas ne demande pas de montrer du tout : si celui qui a suivi jette ses cartes face cachée en premier et qu'il ne reste aucune autre main en jeu, la tienne remporte le pot sans être montrée (==TDA 2024, règle 17-B== ; la règle WSOP 72 attribue elle aussi le pot à la seule main encore en jeu). Si c'est toi qui as payé la mise d'un autre, tu peux jeter tes cartes face cachée après avoir vu sa main si tu as perdu. L'exception, c'est l'all-in en tournoi : selon la ==TDA 2024, règle 16==, celui qui a suivi doit lui aussi étaler. Et en tournoi, le droit garanti de demander appartient à celui qui **a payé la mise de la river** — à condition qu'il ait étalé ou gardé ses cartes — et ne porte que sur la main du dernier agresseur, celle qu'il a payé pour voir (==TDA 2024, règle 18==). Un joueur qui a jeté ses cartes face cachée n'a aucun droit de demander, et toute autre demande relève du directeur.

**Q. Peut-on jeter ses cartes (muck) au showdown sans les montrer ?**

A. Oui — mais jeter ses cartes, c'est abandonner le pot, donc ne le fais que si tu es sûr d'avoir perdu. Une fois la main gagnante montrée, les perdants peuvent jeter leurs cartes face cachée. Les exceptions viennent des règles de tournoi : si tu as fait la dernière mise sur la river et qu'on t'a payé, celui qui a payé pour voir ta main peut l'exiger, à condition d'avoir encore ou d'avoir étalé ses propres cartes (TDA 2024, règle 18-B — en cash game WSOP, il ne le peut pas sans soupçon de collusion) ; et dès qu'un joueur est all-in et que toutes les enchères sont terminées, toutes les mains du pot principal et des side pots doivent être étalées — personne ne peut jeter les siennes (TDA 2024, règle 16). Ne jette jamais tes cartes avant que le donneur ait lu les deux mains s'il y a le moindre doute sur le gagnant.

**Q. C'est quoi un slow roll au poker, et pourquoi c'est mal vu ?**

A. Le slow roll, c'est retarder exprès le moment de montrer une main gagnante dont tu sais déjà qu'elle est la meilleure. Les règlements de tournoi TDA et WSOP ne l'interdisent pas nommément, mais tout le monde le déteste parce qu'il passe pour une façon délibérée d'humilier l'adversaire — et narguer ou retarder le jeu de façon répétée peut être sanctionné (WSOP Tournament, règle 47 · TDA 2024, règle 70). Si tu tiens les nuts ou une gagnante évidente, retourne tes cartes immédiatement. La vitesse à laquelle tu montres en dit long sur toi à la table.

**Q. En cas d'all-in, qui montre ses cartes en premier ?**

A. En tournoi, quand un joueur fait tapis et qu'aucune mise n'est plus possible, toutes les mains engagées dans ce pot sont étalées sans attendre une fois toutes les enchères terminées — avant que les cartes communes restantes soient distribuées (TDA 2024, règle 16). S'il y a un side pot, il est attribué d'abord et le pot principal ensuite — mais les cartes du joueur à tapis sont face visible bien avant. En cash game no-limit, si les enchères se sont arrêtées avant la river, les règles WSOP Live Action font retourner en premier le joueur qui a fait tapis ; dans tout cash game, les joueurs du side pot montrent avant celui qui n'est all-in que pour le pot principal (règle 149). Tant que les autres ont encore des jetons et peuvent miser, tout reste face cachée.

**Q. Que veut dire « cards speak » au poker ?**

A. « Cards speak » (les cartes parlent) signifie que la meilleure main gagne d'après ce que montrent réellement les cartes — pas d'après ce que disent les joueurs. Un joueur qui lit mal sa main et annonce la mauvaise combinaison gagne quand même si ses cartes sont les meilleures. À l'inverse, un joueur qui jette ses cartes sans vérifier qu'il a perdu perd en général le pot : la main est morte dès que le donneur l'a poussée dans le muck, ou dès qu'elle ne peut plus être identifiée, même si elle aurait gagné (TDA 2024, règle 14 — jusque-là, des cartes face cachée encore identifiables et récupérables à 100 % peuvent être étalées, mais n'y compte jamais).

**Q. Dois-tu montrer tes cartes si tu gagnes sans showdown ?**

A. Non. Si tous les autres se couchent avant l'abattage, tu remportes le pot immédiatement et tu n'as jamais à dévoiler tes cartes fermées. Montrer est facultatif — certains joueurs retournent un bluff pour piquer l'adversaire, mais tu n'es jamais obligé de montrer une main qui a gagné sans opposition.

**Q. Quelles sont les règles du showdown ?**

A. En tournoi, sans all-in, l'ordre dépend de la fin du coup : après une mise sur la river, le dernier miseur ou relanceur se dévoile d'abord, et après une river checkée, on part du premier joueur actif à gauche du bouton. Un all-in fait retourner toutes les mains une fois les enchères finies, et celui qui a payé la river en gardant ses cartes peut exiger de voir celle du dernier agresseur. En cash game, chaque salle fixe ses propres règles pour l'ordre et le muck.

**Q. Quand montrer ses cartes au poker ?**

A. Seulement quand le coup va jusqu'à l'abattage. Si quelqu'un a misé ou relancé sur la river, le dernier agresseur montre en premier ; si la river a été checkée par tout le monde, on commence par le premier joueur actif à gauche du bouton. Les autres montrent s'ils pensent gagner, ou jettent leurs cartes s'ils ont perdu (sauf all-in en tournoi). Si tout le monde se couche avant le showdown, tu ramasses le pot sans jamais avoir à montrer.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pilier</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles du Texas Hold'em pour débutants</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Toutes les règles — des blindes à l'abattage</div>
  </a>
  <a href="/fr/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pot partagé</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles du split pot et des side pots</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quand le pot se partage et comment marchent les side pots</div>
  </a>
  <a href="/fr/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Départage</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kicker et règles de départage</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Même main — qui gagne au showdown ?</div>
  </a>
</div>
`.trim(),
};
