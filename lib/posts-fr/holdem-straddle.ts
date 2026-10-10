import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-straddle",
  title: "C'est quoi un straddle (overblind) au poker ? Règles, types et faut-il le faire",
  seoTitle: "Doubler les enjeux avant la donne — le straddle au poker",
  desc: "Le straddle est une blinde volontaire qui double les enjeux avant la donne. Les règles, chaque type de straddle, qui parle en premier, et si c'est rentable.",
  tldr: "Un straddle (overblind) est une blinde facultative, en général le double de la grosse blinde, posée avant que les cartes soient distribuées. Elle donne au straddler la dernière parole préflop et le droit de relancer, ce qui double les enjeux de la table. Dans presque tous les cas c'est un coup à espérance négative (-EV), et en dehors du cash game il est presque toujours interdit.",
  category: "glossary",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "💰",
  image: "/images/holdem-straddle-hero.webp",
  imageAlt: "Un joueur sous le gun pose une blinde supplémentaire de deux jetons devant la grosse blinde avant la distribution des cartes",
  tags: ["straddle poker", "straddle au poker", "straddle définition", "overblind poker", "mississippi straddle", "straddle poker traduction", "utg straddle", "re-straddle"],
  content: `
La première fois que quelqu'un a posé un straddle (overblind) à ma table $1/$2, je n'avais aucune idée de pourquoi le gars sous le gun (UTG) balançait $4 avant même la distribution — ni pourquoi le donneur faisait soudain démarrer l'action un siège plus loin. Je l'ai appelé « le pari du riche » pendant à peu près un mois avant de comprendre ce qu'il fait vraiment : un straddle ==double les enjeux et offre à un seul joueur le dernier mot avant le flop==, tout ça avant que quiconque ait regardé une carte.

Si tu as déjà vu une partie live où une blinde en plus apparaît de nulle part, c'est le terme que tu cherches. C'est l'une des entrées les plus mal comprises de tout le [jargon du poker](/fr/blog/holdem-glossary "thumb:/images/holdem-glossary-hero.webp"), alors autant la cerner exactement. Voici précisément ce qu'est un **straddle**, chaque type que tu croiseras, qui parle en premier quand il est posé, et la réponse honnête à la seule question qui compte : ==g:faut-il vraiment le faire ?==

---

### En bref

:::stripe
2× BB | Taille standard du straddle
Dernier | L'action préflop du straddler
Surtout en cash | Presque jamais autorisé en tournoi
-EV | Le verdict pour la plupart des joueurs
:::

---

## C'est quoi un straddle au poker ?

**Un straddle est une blinde volontaire — normalement le double de la grosse blinde — posée avant la distribution des cartes.** Dans une partie $1/$2, le joueur sous le gun (UTG, juste à gauche de la grosse blinde) peut poser $4 « en straddle », et la main se joue aussitôt comme à une table $1/$2/$4.

Deux choses en font bien plus qu'un simple supplément dans le pot :

- C'est une **blinde vivante.** Exactement comme la grosse blinde, le straddler a acheté le **droit de relancer** (l'option) même si tout le monde se contente de suivre — une « troisième blinde » avec le droit d'agir.
- Elle est posée **à l'aveugle.** Tu straddles *avant* de regarder tes cartes (dans la plupart des salles, avant même qu'elles soient distribuées). Tu engages de l'argent sans aucune information, et c'est toute la raison pour laquelle c'est en général une mauvaise idée — on y revient plus bas.

Un straddle n'est pas une relance au sens habituel — c'est une blinde qui redéfinit le prix. Si tu as compris [ce que sont la petite et la grosse blinde](/fr/blog/holdem-blind-meaning "thumb:/images/holdem-blind-meaning-hero.webp"), un straddle n'est rien d'autre qu'une *troisième* blinde facultative que le joueur choisit de poser pour gonfler les enjeux et s'emparer de la position.

---

## Comment fonctionne un straddle ? Qui parle en premier, qui parle en dernier

![Ordre d'action préflop avec un straddle UTG de $4 sur des blindes $1/$2 — UTG+1 parle en premier, le straddler parle en dernier et la relance minimum double à $8](/images/holdem-straddle-action-order.webp "Un straddle UTG vivant transforme le siège à gauche de la grosse blinde en troisième blinde — le straddler parle désormais en dernier avant le flop")

C'est la partie que les pages de définition sautent, et c'est là que les nouveaux joueurs se perdent. Un straddle **réorganise l'ordre d'action préflop.** Prenons une partie $1/$2 standard où UTG straddle à $4 :

:::steps
UTG pose le straddle | Le joueur sous le gun pose $4 (2× la grosse blinde de $2) avant la distribution
Premier à parler = à gauche du straddler | L'action commence désormais par le joueur à gauche du straddler (UTG+1), pas par UTG — le straddle joue le rôle d'une nouvelle grosse blinde
Tour de table | Chacun doit suivre $4 (et non $2) pour jouer ; on peut se coucher, suivre ou relancer — et la relance minimum est maintenant de $8, le double du straddle, exactement comme face à une grosse blinde normale
Les blindes décident | La petite et la grosse blinde parlent à leur tour, face au prix de $4
Le straddler parle EN DERNIER | Si personne n'a relancé, le straddler exerce son option : checker ou relancer — le dernier mot avant le flop
:::

Ce « dernier mot préflop », c'est exactement ce que le straddler paie. Mais attention au piège : pour un **straddle UTG, le privilège de parler en dernier ne vaut que préflop.** Dès que le flop tombe, l'ordre des mises revient à la normale — la petite blinde parle en premier, et le straddler se retrouve à un siège précoce, hors de position, avec un pot gonflé. C'est l'une des principales raisons pour lesquelles le straddle UTG perd si souvent de l'argent : tu paies double pour être dernier sur un seul tour d'enchères, puis tu joues les trois suivants hors de position face à tout le monde sauf les blindes.

---

## Quels sont les types de straddle ? UTG, Mississippi, bouton et sleeper

![Une mise de straddle posée à côté du bouton du donneur : un straddle bouton ou Mississippi posé depuis le siège qui parle déjà en dernier après le flop](/images/holdem-straddle-button.webp "Un straddle bouton (Mississippi) se pose depuis le bouton — le seul straddle posé depuis le siège qui parle déjà en dernier après le flop")

Tous les straddles ne se valent pas — et les différences tiennent toutes à **l'endroit où l'action démarre et au temps pendant lequel tu gardes la dernière position.** Voici comment ils se comparent :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Type | Qui le pose | L'action démarre | Dernier à parler | Droit de relancer (option) ? |
|------|------|------|------|------|
| **UTG (standard)** | Sous le gun | À gauche du straddler | Préflop uniquement | Oui |
| **Mississippi** | N'importe quel siège (souvent BTN/CO) | À gauche du straddler | Préflop — postflop seulement depuis le bouton* | Oui |
| **Bouton** | Le bouton | Petite blinde | Pré + postflop | Oui |
| **Sleeper** | Un siège autre qu'UTG | Normal (UTG) | Préflop, seulement si tout le monde se couche jusqu'à lui | Règles de la maison |
| **Re-straddle** | À gauche d'un straddler (certaines salles autorisent n'importe quel siège) | À gauche du re-straddler | Préflop uniquement | Oui |

</div>

*Un Mississippi straddle n'est dernier après le flop que lorsqu'il est posé ==sur le bouton== — et cet avantage vient du bouton lui-même, pas du straddle : un straddle posé depuis le cut-off (CO) ne t'achète le dernier mot que préflop.

- **Straddle UTG** — le classique. Posé sous le gun, dernière parole préflop uniquement. Le plus courant et, côté position, le plus faible.
- **Mississippi straddle** — peut se poser depuis **n'importe quelle position**, avec le plus d'effet depuis le bouton ou le cut-off. L'action démarre à gauche du straddler, donc un Mississippi straddle au bouton ajoute le **dernier mot préflop** à la position postflop que le bouton a déjà — le seul straddle qui se défend vraiment sur le plan positionnel. Pas autorisé partout.
- **Straddle bouton (button straddle)** — un straddle façon Mississippi posé spécifiquement depuis le bouton ; le bouton garde la dernière parole jusqu'au bout. Le déroulé exact (où se place la petite blinde) varie selon la salle — vérifie auprès du donneur.
- **Sleeper straddle** — une blinde posée depuis un siège autre qu'UTG qui reste « endormie » : elle est **inactive sauf si tout le monde se couche jusqu'à elle**. Elle n'achète pas la position comme le fait un straddle vivant ; quant à savoir si elle gagne le droit de relancer comme une blinde vivante une fois « réveillée », c'est le domaine des règles de la maison. Rare, et quasiment jamais vu en ligne.
- **Re-straddle (double straddle)** — un joueur à gauche peut straddler *par-dessus* un straddle, pour au minimum le double du précédent ($4 → $8 → $16). Qu'il soit autorisé, et depuis quels sièges, relève purement des règles de la maison.

⚠️ Chacun de ces straddles **dépend des règles de la maison.** Dans le doute, demande au floor (le responsable de salle) avant de lancer tes jetons — la mécanique change vraiment d'une salle à l'autre.

---

## Combien coûte un straddle ?

Le straddle standard vaut **exactement 2× la grosse blinde** — $4 dans une partie $1/$2, $10 dans une partie $2/$5. C'est la norme dans presque toutes les salles de poker.

Certaines salles de no-limit autorisent davantage :

- **Straddle sans plafond / straddle à tapis** — quelques salles laissent le straddler poser n'importe quel montant, jusqu'à son stack entier, en guise de blinde. Un gros straddle à l'aveugle peut transformer une petite partie en très grosse partie le temps d'une main.
- **Progression des re-straddles** — là où le re-straddle est autorisé, chacun vaut au moins le double du précédent : $4, puis $8, puis $16, etc. Les parties où toute la table straddle et re-straddle peuvent multiplier plusieurs fois les enjeux effectifs.

Si tu suis dans un pot straddlé, rappelle-toi que tes [cotes du pot](/fr/blog/holdem-pot-odds) se mesurent désormais par rapport à une blinde plus grosse — le prix pour jouer chaque main a doublé, ce qui punit discrètement les calls trop larges.

---

## Le straddle est-il autorisé en tournoi ?

**Presque jamais.** Le straddle est une spécificité du cash game. Les tournois fonctionnent avec une structure de niveaux de blindes fixe qui doit rester identique à toutes les tables par souci d'équité, et une blinde supplémentaire volontaire la casserait — l'immense majorité des tournois, en live comme en ligne, **interdisent donc complètement le straddle.**

Même en cash game, il dépend des règles de la maison. Il est généralement facultatif (certaines parties se jouent avec un straddle obligatoire), et certaines salles n'autorisent que le straddle UTG, d'autres permettent le Mississippi et le straddle bouton, certaines plafonnent le montant, d'autres interdisent les re-straddles. En ligne, les straddles sont rares et, quand ils existent, se limitent en général à une simple case à cocher pour le straddle UTG. La différence entre une mise de cash game comme celle-ci et le format rigide des tournois est un sujet à part entière — voir [tournoi vs cash game](/fr/blog/holdem-tournament-vs-cash-game).

---

## Le straddle est-il rentable ? Faut-il straddler ?

![Un gros pot gonflé de jetons mélangés empilés au milieu de la table, le pot qu'un straddle crée avant que quiconque ait vu une carte](/images/holdem-straddle-bloated-pot.webp "Un straddle double la blinde et gonfle le pot — de l'argent engagé avant qu'une seule carte soit vue")

La réponse honnête, celle sur laquelle les solvers s'accordent : **pour presque tout le monde, non.** L'analyse de GTO Wizard est sans détour : mettre de l'argent sans regarder ses cartes est « un désavantage massif », et même straddler au bouton reste « presque toujours une proposition perdante ». Trois raisons pour lesquelles ça te coûte — deux à la table, une côté maison :

:::card
🎯 | Tu t'engages à l'aveugle | L'argent part avant que tu voies tes cartes, donc tu joues un pot gonflé sans aucune information — le même désavantage qui fait des blindes les pires sièges de la table. Ça divise aussi par deux ta profondeur effective : en $1/$2, un stack de $200 représente 100 grosses blindes, mais avec un straddle de $4, le même stack se joue comme 50
📉 | Un straddle UTG achète la position pour un seul tour | Il te rend dernier préflop, puis te laisse hors de position face à tous les joueurs qui ont suivi, sauf les blindes, pendant les trois tours suivants, dans un pot que tu as toi-même gonflé. Et un straddle ne rend pas non plus les sièges tardifs plus larges : dans [les simulations de pots straddlés de GTO Wizard](https://blog.gtowizard.com/preflop-strategy-in-straddled-pots/) (straddle UTG à 2bb), le bouton ouvre **moins** de mains — environ 15–20 % de moins — et pas plus
💸 | Il peut augmenter le rake du pot | Dans les pots soumis au [rake](/fr/blog/holdem-rake) (la commission prélevée par la salle), un pot plus gros peut signifier un prélèvement plus élevé jusqu'à atteindre le plafond. Cette hausse ne s'applique pas aux pots préflop sous la règle « no flop, no drop » (pas de flop, pas de rake), aux parties en time charge (forfait horaire), ni aux pots déjà au plafond
:::

Alors quand *est*-ce défendable ? Seulement dans des spots précis, et presque jamais comme un pur coup rentable :

- **Une table loose-passive** où les adversaires suivent la blinde plus grosse avec n'importe quoi et jouent en fit-or-fold après le flop — tu peux parfois l'exploiter, idéalement en straddlant depuis une position tardive.
- **Une partie où tout le monde straddle déjà** — si chacun straddle à son tour à égalité, les enjeux montent sans désavantager un joueur par rapport aux autres. GTO Wizard note que ça peut en général favoriser les joueurs les plus forts de la table, même si les stacks effectifs plus courts peuvent réduire leur avantage.
- **Les parties très animées (« action ») ou entre amis** où tu es là pour t'amuser, pas pour maximiser ton EV (espérance) — une raison parfaitement valable, sois juste honnête sur le fait que ça te coûte.

Ce que le straddle ne fera *pas*, c'est te « créer une image loose » qui finit par payer — tu paies un prix réel, mesurable, pour un avantage d'image qui se matérialise rarement. Si ton objectif est de gagner, ce qui construit vraiment un avantage, c'est la [position](/fr/blog/holdem-position-play), pas une blinde de plus. Straddle pour le plaisir si ça te chante ; ne compte pas dessus pour améliorer tes gains de façon fiable.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-blind-meaning | Les blindes au poker | /images/holdem-blind-meaning-hero.webp
/fr/blog/holdem-position-play | Pourquoi la position change tout | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. Qu'est-ce qu'un straddle au poker ?**

A. Un straddle (overblind) est une blinde volontaire, en général le double de la grosse blinde, posée avant la distribution des cartes — le plus souvent par le joueur sous le gun. Il double les enjeux de la main et donne au straddler le droit de relancer et la dernière parole préflop, exactement comme une troisième blinde.

**Q. Combien coûte un straddle au poker ?**

A. Le straddle standard vaut 2× la grosse blinde — $4 dans une partie $1/$2. Certaines salles de no-limit autorisent des straddles plus gros, voire sans plafond (à tapis), et là où le re-straddle est permis, chacun doit valoir au moins le double du straddle précédent ($4, $8, $16, etc.).

**Q. Qui parle en premier après un straddle ?**

A. Le joueur juste à gauche du straddler parle en premier, parce qu'un straddle vivant fonctionne comme une nouvelle grosse blinde. L'action fait ensuite le tour de la table, la petite et la grosse blinde parlent à leur tour, et le straddler parle en dernier préflop — avec l'option de checker ou de relancer si personne n'a relancé avant lui.

**Q. Qui peut straddler au poker ? Tout le monde ?**

A. Ça dépend du type. Pour un straddle standard, seul le joueur sous le gun — le siège juste à gauche de la grosse blinde — peut le poser. Un Mississippi straddle, là où la maison l'autorise, permet à n'importe quel joueur de straddler depuis n'importe quelle position, le plus souvent le bouton ou le cut-off. Dans tous les cas, tu ne peux straddler qu'*avant* la distribution des cartes (ou avant de les regarder), et le fait qu'un siège donné puisse straddler dépend entièrement des règles de la maison — certaines salles n'autorisent qu'UTG, d'autres n'importe quel siège, et beaucoup de parties en ligne et de tournois l'interdisent purement et simplement.

**Q. Un straddle compte-t-il comme une relance ?**

A. Non. Un straddle est une blinde, pas une relance — il redéfinit le prix que chacun doit suivre pour entrer dans le pot, et il préserve le droit du straddler de relancer plus tard. Qu'il compte ou non dans le plafond de relances en limit est une règle de la maison : beaucoup de salles ne le comptent pas, mais certaines le traitent comme une relance à cet effet, alors renseigne-toi sur place.

**Q. C'est quoi un Mississippi straddle ?**

A. Un Mississippi straddle peut se poser depuis n'importe quelle position, pas seulement sous le gun — souvent le bouton ou le cut-off. L'action démarre alors à gauche du straddler, donc un Mississippi straddle au bouton ajoute le dernier mot préflop à la position postflop que le bouton a déjà : c'est pour ça que c'est le seul straddle avec un vrai argument positionnel. Il n'est pas autorisé dans toutes les salles.

**Q. C'est quoi un sleeper straddle ?**

A. Un sleeper straddle est une blinde posée depuis un siège autre qu'UTG qui reste inactive (« endormie ») sauf si tout le monde se couche jusqu'à elle. Il ne donne pas la position comme un straddle vivant, et le fait qu'il gagne ou non le droit de relancer une fois « réveillé » varie selon la salle. Il est peu courant et rarement proposé en ligne — vérifie toujours la règle de la maison.

**Q. Le straddle est-il autorisé en tournoi ?**

A. Presque jamais. Les tournois reposent sur une structure de blindes fixe qui doit être identique à toutes les tables, donc une blinde supplémentaire volontaire casserait le format. Le straddle est essentiellement une pratique de cash game, et même là il dépend des règles de la salle de poker concernée.

**Q. Le straddle est-il rentable ? Faut-il straddler ?**

A. Pour la plupart des joueurs, non — c'est un coup -EV. Tu engages de l'argent à l'aveugle, un straddle UTG achète la dernière parole pour un seul tour puis tu joues le reste hors de position face à tout le monde sauf les blindes (et un straddle ne rend pas les sièges tardifs plus larges — dans les simulations de GTO Wizard, le bouton ouvre *moins* de mains, pas plus), et tu peux payer plus de rake. Il ne se défend qu'aux tables loose-passives, dans les parties où tout le monde straddle déjà, ou purement pour le plaisir — presque jamais comme moyen de gagner de l'argent. Quand chacun straddle à son tour à égalité, les enjeux plus élevés peuvent favoriser les joueurs les plus forts.

**Q. Comment dit-on « straddle » en français ?**

A. Le plus souvent, on dit tout simplement « straddle » : c'est le terme anglais que les joueurs gardent tel quel. L'équivalent qu'on croise dans les lexiques français est « overblind » — une blinde posée par-dessus la grosse blinde. Le verbe suit le même chemin : « straddler », c'est poser un straddle.

**Q. Comment s'appelle la mise de départ au poker ?**

A. Au Texas Hold'em, la mise de départ, ce sont les blindes : la petite blinde et la grosse blinde, deux mises obligatoires posées avant la distribution par les deux joueurs à gauche du bouton (en heads-up, c'est le bouton lui-même qui pose la petite blinde). Le straddle, lui, est une blinde en plus, volontaire, qui vient se poser par-dessus — tout le détail est dans [les blindes au poker](/fr/blog/holdem-blind-meaning).

---

## À retenir

1. **Un straddle est une troisième blinde facultative, en général 2× la grosse blinde,** posée avant les cartes — il double les enjeux et achète la dernière parole préflop.
2. **C'est le siège qui décide de la position, pas le nom du straddle.** Un straddle UTG n'est dernier que préflop. Le seul straddle qui soit aussi dernier après le flop est celui posé ==depuis le bouton== — parce qu'après le flop, l'ordre suit toujours le bouton. Tout dépend des règles de la maison.
3. **C'est -EV pour presque tout le monde.** S'engager à l'aveugle, gonfler le pot hors de position et payer potentiellement plus de rake pèsent plus lourd que le plaisir. En règle générale, straddle pour le divertissement, pas pour l'image ni pour les gains.

Maintenant que tu connais cette blinde en plus, resserre les fondamentaux qu'elle déforme : [ce que font vraiment les blindes](/fr/blog/holdem-blind-meaning), [pourquoi la position rapporte de l'argent](/fr/blog/holdem-position-play), et [comment fonctionnent les actions de mise et les relances](/fr/blog/holdem-betting-actions) une fois que le straddle a redéfini le prix.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Règles</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les blindes au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">La petite et la grosse blinde sur lesquelles repose le straddle</div>
  </a>
  <a href="/fr/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pourquoi la position change tout</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi la position d'un straddle compte plus que son montant</div>
  </a>
  <a href="/fr/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Règles</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les actions de mise : checker, suivre, relancer</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Comment le prix se redéfinit après un straddle</div>
  </a>
  <a href="/fr/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cash game ou tournoi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi le straddle est essentiellement une affaire de cash game</div>
  </a>
</div>
`.trim(),
};

export default POST;
