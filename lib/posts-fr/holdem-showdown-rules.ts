import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Règles de l'abattage au Texas Hold'em : qui montre en premier, jeter ses cartes et le slow roll",
  seoTitle: "Qui montre en premier ? Règles de l'abattage au poker",
  desc: "Qui montre ses cartes en premier à l'abattage ? Peux-tu jeter sans montrer ? Dernier relanceur, cards speak, slow roll et all-in, sans prise de tête.",
  tldr: "En tournoi sans tapis, le dernier agresseur de la rivière montre en premier ; si tous ont checké, c'est le premier joueur actif à gauche du bouton. Avec un tapis, toutes les mains restantes doivent être révélées dès la fin des enchères. Celui qui a payé la rivière et gardé ou étalé ses cartes peut demander la main du dernier agresseur. En cash, montrer ou jeter dépend des règles de la maison.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-09-22",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  tags: [
    "règles abattage poker",
    "qui montre ses cartes en premier poker",
    "jeter ses cartes poker muck",
    "slow roll poker",
    "abattage all-in texas holdem",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Infographie de l'abattage au Texas Hold'em — sur un tableau 4♥ 7♣ Q♦ K♠ 2♥, A♠ K♥ gagne avec une paire de rois et un kicker as",
  content: `
Tu as payé la mise à la rivière. Et vous voilà tous les deux à vous fixer, chacun attendant que l'autre retourne ses cartes en premier.

Personne ne bouge.

Le donneur regarde l'un puis l'autre. Le reste de la table soupire.

==Ce bras de fer se rejoue à presque toutes les tables en live== — parce que la plupart des débutants n'ont jamais appris qui est réellement censé montrer en premier. Ce guide couvre toutes les situations d'abattage : mains normales, rivières checkées, all-ins, et pourquoi faire un slow roll te vaudra des regards noirs jusqu'à la fin de la session.

## Qui doit montrer ses cartes en premier à l'abattage ?

La règle dépend de la façon dont s'est terminé le dernier tour d'enchères (pour la séquence complète tour par tour qui mène jusqu'ici, vois [l'ordre de jeu](/fr/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Action au dernier tour | Qui montre en premier |
|--------------------|-----------------|
| Sans tapis en tournoi, quelqu'un a misé ou relancé à la rivière | ==Le dernier joueur à avoir misé ou relancé== montre en premier |
| Tout le monde a checké à la rivière | Le premier joueur actif à gauche du bouton montre en premier |
| All-in à un tour précédent (pas de mise à la rivière) | En tournoi, toutes les mains restantes sont immédiatement étalées dès la fin de toutes les enchères, avant les cartes communes restantes ; en cash, règles de la maison |

</div>

![Infographie de l'ordre d'abattage au Texas Hold'em — qui montre en premier sur un tableau J♥ 9♠ 4♦ 2♠ K♥](/images/holdem-showdown-who-shows-first.webp)

==g:Sans tapis en tournoi, le dernier agresseur de la rivière montre en premier.== Si tu as misé et qu'on t'a payé, tu montres avant celui qui a suivi. En tournoi, celui qui a payé la mise de la rivière et conservé ou étalé ses cartes peut exiger de voir la main du dernier agresseur (TDA 2024, règle 18). Les autres demandes relèvent du directeur ; en cash, des règles de la maison.

---

## Peux-tu jeter tes cartes sans les montrer à l'abattage ?

Oui — **si tu as perdu**.

Une fois que le dernier relanceur a montré sa main, les autres joueurs peuvent :
- **Montrer leur main** s'ils pensent gagner
- **La jeter face cachée au muck** s'ils voient qu'ils ont perdu, sous réserve des demandes autorisées de voir la main. Exception : En tournoi, dès qu'un joueur est à tapis et que toutes les enchères sont terminées, toutes les mains encore en jeu sont immédiatement étalées, sans muck (TDA 2024, règle 16). En cash, les règles de la maison s'appliquent.

==r:Mais il y a une exception importante :== si ta mise à la rivière a été payée, celui qui a suivi a mis le prix fort pour voir ta main. Demander au donneur de retourner une main jetée au muck, c'est la règle du **« I want to see that hand »**. En tournoi, la règle 18 de la TDA, édition 2024, la resserre : celui qui n'a plus de cartes à l'abattage, ou qui a jeté face cachée, perd le droit de le demander ; ce droit n'est inaliénable que pour celui qui a payé la mise de la rivière et qui a étalé ou conservé ses cartes, et seulement sur la main du dernier relanceur. Le reste relève du directeur de tournoi, et en cash game les règles de la maison déterminent les demandes autorisées. (Ne la confonds pas avec « show one, show all » : si tu montres volontairement tes cartes à un joueur, toute la table a le droit de les voir.)

Règle pratique : ==sans tapis en tournoi, le dernier agresseur de la rivière montre en premier, même sur un bluff payé.== En tournoi, celui qui a payé la mise de la rivière et conservé ou étalé ses cartes peut exiger de voir la main du dernier agresseur (TDA 2024, règle 18). Les autres demandes relèvent du directeur ; en cash, des règles de la maison. Ne jette pas précipitamment une main qui pourrait gagner ; l'exception de muck ne s'applique pas à l'all-in de tournoi une fois les enchères terminées.

---

## L'ordre d'abattage quand tout le monde a checké à la rivière

Si personne n'a misé à la rivière (tout le monde a checké), l'abattage commence par le **premier joueur actif à gauche du bouton** et se poursuit dans le sens des aiguilles d'une montre.

Exemple : le bouton, la petite blinde et la grosse blinde voient la rivière. La SB checke, la BB checke, le bouton checke. L'abattage commence par la SB (premier joueur actif à gauche du bouton). La SB peut montrer ou jeter. Puis la BB. Et le bouton en dernier.

==g:Dans ce cas, le bouton montre en dernier== — ce qui est en réalité un avantage. Le bouton peut voir si quelqu'un le bat avant de décider s'il retourne ses cartes.

---

## Règles d'abattage avec all-in — le joueur à tapis montre-t-il en premier ?

En tournoi, dès qu'un joueur est à tapis et que toutes les enchères sont terminées, toutes les mains encore en jeu sont immédiatement étalées, sans muck (TDA 2024, règle 16). Cela protège l'intégrité du coup : aucun joueur ne peut jeter sa main pour cacher le résultat. En cash WSOP 2026 (B149), les joueurs du pot annexe montrent avant ceux du seul pot principal. En No-Limit, si les enchères se sont terminées avant la rivière, le joueur qui a fait tapis montre en premier ; sinon, le dernier agresseur de la rivière commence, ou le premier joueur actif à gauche du bouton si tous ont checké.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Scénario d'all-in | Règle d'abattage |
|----------------|---------------|
| Un joueur fait tapis, les autres suivent, plus aucune mise possible | En tournoi, toutes les mains restantes sont immédiatement étalées avant les cartes communes restantes ; en cash, règles de la maison |
| Une mise all-in à la rivière est payée | En tournoi, dès la fin de toutes les enchères, toutes les mains sont étalées sans attendre leur tour ; en cash WSOP, B149 fait montrer les joueurs du pot annexe avant ceux du seul pot principal, puis le dernier agresseur de la rivière commence dans le groupe qui doit montrer |
| Plusieurs all-ins créant plusieurs pots annexes | Chaque pot se résout séparément ; en tournoi, toutes les mains restantes sont étalées dès la fin de toutes les enchères |

</div>

Une nuance : le **pot annexe** est attribué avant le pot principal. Cet **ordre de paiement** ne retarde pas la révélation en tournoi : dès la fin de toutes les enchères, toutes les mains restantes sont étalées (TDA 2024, règle 16 et son illustration). Tant que les mises du pot annexe continuent, cette obligation ne s'applique pas encore. En cash WSOP, B149 prévoit en revanche que les joueurs du pot annexe montrent avant ceux qui ne jouent que le pot principal.

Pour voir comment les pots annexes se forment et se paient quand des joueurs sont à tapis, vois [les règles de l'all-in et des pots annexes](/fr/blog/holdem-all-in-rules) ; pour les pots partagés, il y a les règles du partage du pot.

---

## C'est quoi la règle « cards speak » (les cartes parlent) ?

![Infographie de la règle cards speak — un tableau 8♠ 9♣ 10♥ J♦ Q♠ forme une quinte à la dame, et à l'abattage les cartes parlent d'elles-mêmes](/images/holdem-showdown-cards-speak.webp)

« Cards speak » signifie que ==la meilleure main gagne, quoi que disent les joueurs==.

Si un joueur lit mal sa main et annonce « j'ai une paire » alors qu'il a en fait une quinte — c'est la quinte qui gagne. Le donneur lit les cartes et attribue le pot à la meilleure main montrée.

Si tu crois avoir perdu et que tu jettes sans montrer une main gagnante, ==r:tu risques de perdre le pot==. Des cartes posées face cachée ne sont pas automatiquement mortes : si elles restent identifiables à 100 % et récupérables, elles peuvent être étalées. La main est morte si le donneur l'a poussée dans le muck ou si elle n'est plus identifiable et récupérable (TDA 2024, règle 14). N'y compte jamais pour autant. Si tu n'es pas sûr à 100 % d'avoir perdu, laisse toujours le donneur lire ta main avant de la jeter.

Situation réelle : tu as J♥ 10♥ sur un tableau Q♥ 9♥ 8♥ 2♣ 5♦. Tu tiens une quinte flush à la dame (Q-J-10-9-8 à cœur). L'adversaire montre K♣ Q♦ (une paire de dames). Tu gagnes haut la main. Ne jette surtout pas juste parce que tu vois sa dame.

---

## C'est quoi un slow roll au poker ?

Le slow roll, c'est ==prendre exprès tout son temps pour montrer une main très forte alors qu'on sait déjà qu'on a gagné==.

Tu as les nuts. L'adversaire montre une main forte. Tu marques une pause, tu fais semblant de réfléchir, tu regardes tes cartes lentement, tu fais attendre tout le monde — et là tu retournes la gagnante. Techniquement légal. Universellement détesté.

![Slow roll au poker — les autres joueurs exaspérés pendant qu'un joueur retarde volontairement de montrer sa main gagnante](/images/holdem-showdown-slow-roll.webp)

==r:Le slow roll est le moyen le plus rapide de se faire des ennemis à une table de poker.== C'est perçu comme une façon délibérée de te remettre ta défaite sous le nez. La règle non écrite : si tu tiens la meilleure main possible, retourne-la immédiatement. Le slow roll n'a aucun intérêt stratégique. Tout ce qu'il crée, c'est de la tension.

À ne pas confondre avec le **tanking** — prendre légitimement son temps pour une décision difficile. Ça, c'est accepté, et même respecté. Faire un slow roll avec les nuts, c'est autre chose.

---

## Es-tu obligé de montrer tes cartes si tu gagnes sans abattage ?

Non. ==g:Si tout le monde se couche avant l'abattage, tu remportes le pot sans montrer une seule carte.==

Tu peux les montrer si tu veux — certains joueurs montrent un bluff pour mettre l'adversaire sur tilt, ou une main forte pour se construire une image serrée (tight). Mais tu n'es jamais obligé de montrer tes cartes quand tu gagnes parce que tous les autres se sont couchés.

C'est l'une des raisons pour lesquelles le poker est passionnant. Ce n'est pas toujours la meilleure main qui l'emporte — c'est le dernier debout.

---

## Étiquette de l'abattage — ce que les débutants ratent

### Erreur 1 : attendre que celui qui a payé montre en premier

Tu mises la rivière. Quelqu'un te paie. Tu te figes et tu attends qu'il montre. C'est l'inverse. ==C'est toi qui montres en premier — tu étais le dernier relanceur.== Attendre ressemble à un slow roll, même quand ce n'en est pas un.

### Erreur 2 : jeter ses cartes avant que le donneur lise la main

Tu es à peu près sûr d'avoir perdu. Tu glisses tes cartes face cachée vers le muck. Le donneur les ramasse. Il s'avère que tu tenais la gagnante. Si la main est morte selon les règles applicables, le pot est perdu ; ne suppose pas qu'elle sera récupérable. ==Ne jette jamais tant que tu n'es pas certain.== Laisse le donneur lire les deux mains.

### Erreur 3 : exiger de voir toutes les mains payées

En tournoi, celui qui a payé la mise de la rivière et conservé ou étalé ses cartes peut exiger de voir la main du dernier agresseur (TDA 2024, règle 18). Les autres demandes relèvent du directeur ; en cash, des règles de la maison. Une main simplement posée face cachée à l'abattage n'est pas forcément morte : sa récupération dépend de son identification et de la décision du responsable (TDA 2024, règle 14 ; WSOP Tournament 2026, règles 109–110). Cela ne permet pas d'annuler un fold valable pendant les enchères. Les demandes en cash visent notamment à prévenir la collusion, pas à satisfaire la curiosité ; n'en abuse pas.

### Erreur 4 : ne pas savoir qu'on peut montrer plus tôt

À l'abattage — c'est-à-dire une fois toutes les mises terminées — aucune règle n'interdit de retourner ta main avant que ce soit officiellement ton tour. Tant que le coup est encore en cours et qu'une action reste en attente, c'est l'inverse : en tournoi, montrer ses cartes entraîne une pénalité sans tuer automatiquement la main (==WSOP Tournament 2026, règle 117==). ==g:Si tu tiens les nuts ou une main très forte, montre-la immédiatement.== Les autres joueurs apprécient. Ça accélère la partie. Et c'est tout le contraire du slow roll.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-game-order | L'ordre de jeu | /images/blog-holdem-game-flow.webp
/fr/blog/holdem-all-in-rules | Règles de l'all-in et pots annexes | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. Qui montre ses cartes en premier à l'abattage au poker ?**

A. Sans tapis en tournoi, le dernier joueur à avoir misé ou relancé à la rivière montre en premier. Si tout le monde y a checké, c'est le premier joueur actif à gauche du bouton, puis dans le sens des aiguilles d'une montre. En tournoi, dès qu'un joueur est à tapis et que toutes les enchères sont terminées, toutes les mains encore en jeu sont immédiatement étalées, sans muck (TDA 2024, règle 16). En cash, les règles de la maison déterminent l'ordre.

**Q. Es-tu obligé de montrer tes cartes si on te paie à l'abattage ?**

A. Sans tapis en tournoi, le dernier agresseur de la rivière montre en premier quand sa mise est payée. En tournoi, celui qui a payé la mise de la rivière et conservé ou étalé ses cartes peut exiger de voir la main du dernier agresseur (TDA 2024, règle 18). Les autres demandes relèvent du directeur ; en cash, des règles de la maison. En tournoi, dès qu'un joueur est à tapis et que toutes les enchères sont terminées, toutes les mains encore en jeu sont immédiatement étalées, sans muck (TDA 2024, règle 16).

**Q. Peux-tu jeter tes cartes à l'abattage sans les montrer ?**

A. Hors de l'obligation de révéler un all-in en tournoi, une main perdante peut être jetée, sous réserve d'une demande autorisée de la voir. En tournoi, dès qu'un joueur est à tapis et que toutes les enchères sont terminées, toutes les mains encore en jeu sont immédiatement étalées, sans muck (TDA 2024, règle 16). En tournoi, celui qui a payé la mise de la rivière et conservé ou étalé ses cartes peut exiger de voir la main du dernier agresseur (TDA 2024, règle 18). Les autres demandes relèvent du directeur ; en cash, des règles de la maison. En cas de doute sur le gagnant, laisse le donneur lire les deux mains.

**Q. C'est quoi un slow roll au poker et pourquoi c'est mal vu ?**

A. Le slow roll consiste à retarder exprès la révélation d'une main gagnante que tu sais déjà être la meilleure. C'est légal, mais universellement détesté, car c'est perçu comme humilier volontairement l'adversaire. Si tu tiens les nuts ou une gagnante évidente, retourne tes cartes immédiatement. La vitesse à laquelle tu montres en dit long sur toi à la table.

**Q. Dans une situation d'all-in, qui montre ses cartes en premier ?**

A. En tournoi, dès qu'un joueur est à tapis et que toutes les enchères sont terminées, toutes les mains encore en jeu sont immédiatement étalées, sans muck (TDA 2024, règle 16). Si des joueurs misent encore dans le pot annexe, cette obligation ne s'applique pas encore ; une fois toutes les mises terminées, on ne diffère pas la révélation jusqu'au paiement de ce pot. En cash WSOP 2026 (B149), les joueurs du pot annexe montrent avant ceux du seul pot principal. En No-Limit, si les enchères se sont terminées avant la rivière, le joueur qui a fait tapis montre en premier ; sinon, le dernier agresseur de la rivière commence, ou le premier joueur actif à gauche du bouton si tous ont checké.

**Q. Que signifie « cards speak » au poker ?**

A. « Cards speak » (les cartes parlent) signifie que la meilleure main montrée gagne selon les cartes, pas selon ce que le joueur annonce. Une main mal annoncée peut donc gagner. Des cartes posées face cachée ne sont pas automatiquement mortes : si elles restent identifiables à 100 % et récupérables, elles peuvent être étalées. La main est morte si le donneur l'a poussée dans le muck ou si elle n'est plus identifiable et récupérable (TDA 2024, règle 14). Ne jette pas une main avant de l'avoir vérifiée.

**Q. Es-tu obligé de montrer tes cartes si tu gagnes sans abattage ?**

A. Non. Si tous les autres se couchent avant l'abattage à la rivière, tu remportes le pot immédiatement et tu n'as jamais à dévoiler tes cartes fermées. Montrer est facultatif — certains joueurs retournent un bluff pour asticoter l'adversaire, mais tu n'es jamais obligé de montrer une main qui a gagné sans opposition.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pilier</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles du Texas Hold'em pour débutants</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les règles complètes — des blindes à l'abattage</div>
  </a>
</div>
`.trim(),
};
