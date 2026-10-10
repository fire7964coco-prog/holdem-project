import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-rake",
  title: "C'est quoi le rake au poker ? Comment la salle se paie et combien tu paies",
  seoTitle: "Ce qui grignote tes gains — c'est quoi le rake au poker ?",
  desc: "Le rake, c'est la commission de la salle sur la plupart des pots. Rake au pot, frais de tournoi : combien tu paies vraiment, et ce que rend le rakeback.",
  tldr: "Le rake, c'est la petite part que la salle prélève sur la plupart des pots pour organiser la partie, en général 2,5 à 10 % plafonnés à quelques dollars. La plupart des salles ne prennent rien si tout le monde se couche avant le flop (« no flop, no drop »). Il pèse surtout sur les petites limites et les tables à peu de joueurs, et le rakeback en rend une partie aux habitués.",
  category: "glossary",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🏦",
  image: "/images/holdem-rake-hero.webp",
  imageAlt: "Un donneur fait glisser une petite pile de jetons du pot central vers la fente du rake, sur une table de poker au feutre vert",
  tags: ["rake poker", "rake au poker", "rakeback", "rakeback poker", "rake poker definition", "commission poker", "no flop no drop", "time charge poker"],
  content: `
Il m'a fallu un mois déprimant de sessions « à l'équilibre » pour comprendre où partait vraiment mon argent. Je ne perdais pas contre les autres joueurs — je les battais, de peu. Je perdais contre ==la part que la salle prenait sur chaque pot que je gagnais.== Cette commission discrète s'appelle le **rake**, et tant que tu ne l'as pas comprise, tu peux être gagnant sur le papier et perdant à la caisse.

Le rake, c'est la façon dont une salle de poker gagne de l'argent sur un jeu où elle ne joue pas une seule main. Voici exactement ce que c'est, toutes les manières dont il est prélevé, le calcul honnête de ==g:ce que tu paies vraiment sur une session==, et comment le rakeback t'en rend une partie. C'est la commission qui décide si battre les petites limites est seulement possible — et l'un des termes les plus coûteux à mal comprendre dans le [jargon du poker](/fr/blog/holdem-glossary "thumb:/images/holdem-glossary-hero.webp").

---

### En bref

:::stripe
2,5–10 % | Fourchette habituelle du rake au pot
$3–$6 | Plafond courant en live
No flop, no drop | En général pas de rake si tout le monde se couche préflop
20–40 % | Accord de rakeback habituel
:::

---

## C'est quoi le rake au poker ?

**Le rake (la commission prélevée par la salle) est ce que la salle de poker prend sur une partie de cash game pour l'organiser.** Comme le poker se joue entre joueurs — la maison ne mise jamais —, ce prélèvement est la façon dont la salle, le casino ou l'appli gagne réellement son argent. C'est une commission de service pour le donneur, la table, les jetons et la sécurité, retirée petit à petit des pots.

En cash game, il est en général pris directement dans le pot : un petit pourcentage de l'argent au milieu, glissé dans une fente de la table avant que le gagnant soit payé. En tournoi, ça marche autrement — la commission est intégrée d'avance à ton buy-in (on y revient plus bas). Dans les deux cas, le rake est distinct de tout ce que tu gagnes ou perds contre les autres joueurs, et c'est justement pour ça qu'on l'oublie si facilement. C'est l'une des plus grosses différences concrètes entre un [cash game et un tournoi](/fr/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

---

## Comment le rake est-il prélevé ? Rake au pot, time charge et dead drop

![Un donneur retire quelques jetons du centre du pot vers la fente du rake de la table avant de pousser le reste vers le gagnant](/images/holdem-rake-drop.webp "Rake au pot : un petit pourcentage retiré du pot et glissé dans la fente avant que le gagnant soit payé")

Il n'existe pas qu'un seul type de rake. La manière dont la maison encaisse dépend des limites et de la salle, et les différences comptent — quatre méthodes, et celle de ta salle décide de ce que tu paies vraiment :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Type | Comment il est prélevé | Montant habituel | Où tu le verras |
|:---|:---|:---:|:---|
| **Rake au pot (proportionnel)** | % des pots concernés, jusqu'à un plafond | 2,5–10 %, plafonné à $1–$6 | La plupart des cash games petites et moyennes limites, en ligne |
| **Time charge** (forfait horaire) | Forfait par joueur, toutes les 30 min | ~$10–$15 par heure | Live hautes limites ($10/$20+), et toute limite où le rake au pot n'est pas possible |
| **Dead drop** | Le bouton paie un rake fixe à chaque main | Fixe par main | Certaines salles live |
| **Frais de tournoi** | Payés avec le buy-in, d'avance | ~5–20 % du buy-in | Presque tous les tournois |

</div>

Quelques règles encadrent la façon dont le rake au pot est réellement prélevé :

- **No flop, no drop (pas de flop, pas de rake).** Dans la plupart des salles, si la main se termine avant le flop — tout le monde se couche sur une relance préflop —, la maison ne prend **aucun rake**. (Ce n'est pas universel : quelques sites, notamment GGPoker, prélèvent sur certains pots préflop, donc vérifie la règle de ta salle.)
- **Le plafond (cap).** La maison ne prend jamais le pourcentage complet sur un énorme pot — elle s'arrête à un maximum, couramment **$3–$6 en live** et **$1–$3 en ligne**. Les plafonds montent bien avec les limites, mais pas proportionnellement — ils avancent par grosses marches, si bien que plusieurs limites partagent souvent le même plafond. En plus, ils baissent souvent quand moins de joueurs reçoivent des cartes (un pot en heads-up peut être plafonné à $1).
- **Le time charge à la place du rake au pot.** Aux limites plus élevées, les salles arrêtent souvent de prélever sur les pots et encaissent plutôt un time charge (forfait horaire) — disons $10–$15 de l'heure par joueur, pris toutes les demi-heures. Ça avantage les joueurs qui gagnent de gros pots — même si ce que tu économises, c'est le rake *plafonné*, pas une tranche du pot : avec un plafond de $3–$6, un pot de $2 000 ne cédait de toute façon que quelques dollars.
- **Dead drop.** Une méthode moins courante où seul le joueur au bouton paie un rake fixe à chaque main, encaissé avant la distribution des cartes — pensée pour que les gagnants de gros pots ne soient pas taxés plus que les autres.

---

## Combien de rake paies-tu vraiment ?

![Un pot modeste de jetons sur le feutre, avec deux ou trois dollars déjà mis de côté pour le rake, qui montre ce qu'une seule main coûte discrètement](/images/holdem-rake-lowstakes.webp "Aux petites limites, le plafond bouge à peine quand les pots grossissent : ce sont les petits pots qui sont proportionnellement les plus ponctionnés")

C'est la partie qui a changé ma façon de voir le jeu. Le pourcentage paraît minuscule — 5 %, plafonné à quelques dollars — mais tu le paies sur presque chaque pot que tu gagnes, pendant des heures.

**Une partie live $1/$2.** Avec un rake de 10 % plafonné à $5 et environ 30 mains distribuées par heure, la plupart des pots disputés atteignent ou frôlent le plafond. Une seule table animée peut verser **$100+ par heure** dans la fente, tous joueurs confondus. Cet argent sort directement des gains collectifs — c'est pour ça qu'une table de joueurs à peu près de même niveau perd lentement ses jetons au profit de la maison.

**Le « piège du rake » aux petites limites.** C'est la chute que chaque débutant devrait entendre. Comme le plafond baisse à peine quand tu descends de limite, plus tu joues *petit*, plus la part que prend le rake est *grosse* en proportion. Voici un exemple chiffré en NL50 en ligne (à titre d'illustration — le chiffre exact dépend du nombre de pots que tu disputes et de la façon dont la salle applique son plafond, pas du nombre de mains que tu enregistres). Les deux plafonds ci-dessous sont l'un dans la fourchette habituelle en ligne, l'autre au-dessus : $2 est dans les $1–$3 affichés par la plupart des salles, $4 est au-dessus.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Même joueur, même partie | Rake payé | Résultat |
|:---|:---:|:---|
| Salle avec un **plafond de $2** | ~5 bb/100 | Un win rate de +8 bb/100 reste **gagnant (+3)** |
| Salle avec un **plafond de $4** | ~8–9 bb/100 | Un win rate de +8 bb/100 tombe à l'équilibre ou devient **perdant (0 à −1)** |

</div>

Même niveau, même avantage sur le field — et le rake à lui seul fait la différence entre gagner et perdre. C'est pour ça que les grinders sérieux des petites limites sont obsédés par la structure du rake, et pourquoi les [cotes du pot](/fr/blog/holdem-pot-odds) et le win rate se lisent toujours *après* la part de la maison.

---

## C'est quoi le rakeback ?

Comme la maison profite du volume que tu génères, la plupart des salles t'en rendent une partie pour que tu continues à jouer. **Le rakeback est un pourcentage du rake que tu paies personnellement, qui te revient** — en général sous forme de points, de cashback ou d'un programme de fidélité, versé chaque semaine ou chaque mois. Un accord de rakeback à 30 % veut simplement dire que tu récupères 30 cents sur chaque dollar de rake que tu paies.

Il existe deux façons de le calculer :

:::compare
Méthode « contributed » | Méthode « dealt »
Basé sur le rake des pots **dans lesquels tu as mis de l'argent** — la méthode moderne standard | Réparti à parts égales entre **tous les joueurs ayant reçu des cartes** dans un pot sur lequel un rake a été prélevé, qu'ils y aient contribué ou non — devenu rare
:::

Pour un joueur occasionnel, le rakeback est un petit bonus. Pour un régulier à gros volume, c'est énorme : l'écart entre un accord à 20 % et un à 40 % grandit avec le rake que tu génères réellement, donc il ne devient une vraie somme que si tu fais un vrai volume à des limites qui comptent — et pour beaucoup de grinders à l'équilibre, le rakeback *est* leur bénéfice. Il abaisse en pratique ton rake réel, donc ça vaut le coup de vérifier avant de choisir où jouer. Garde juste en tête qu'une bonne partie des conseils sur le rakeback en ligne sont dictés par l'affiliation — traite les pages « inscris-toi ici » avec la méfiance que tu réserves à n'importe quel argumentaire commercial.

---

## Y a-t-il du rake dans les tournois ?

Pas celui du pot — mais tu paies quand même une commission, et elle est cachée sous tes yeux. Le prix d'entrée d'un tournoi peut afficher séparément la part qui va au prize pool et les frais avec un **signe « + »** ; certaines séries, dont les WSOP, annoncent un buy-in unique avec les frais déjà inclus. Dans le format séparé :

:::pull
Un tournoi à **$100 + $9** signifie que $100 vont au prize pool et que **$9 sont les frais de la salle.**
:::

Ces frais d'inscription — qu'on appelle aussi le « **juice** » ou le « **vig** » — sont l'équivalent du rake en tournoi. Ils représentent en général **5–20 % du buy-in**, et ils sont fixes : tu les paies que tu sautes le premier ou que tu remportes tout. Les petits buy-ins ont des frais proportionnellement plus lourds (un sit & go à $3 + $0,30, c'est 10 %), et comme les **formats turbo rapides compriment ton avantage**, c'est là que les frais mordent le plus — plus le pourcentage est bas, plus ton talent y survit. Comme la structure d'un tournoi n'a rien à voir avec celle d'un cash game, la façon dont tu paies pour jouer non plus — une distinction à comprendre avec les bases [tournoi ou cash game](/fr/blog/holdem-tournament-vs-cash-game).

---

## Rake en ligne ou en live : lequel est le plus élevé ?

C'est un vrai compromis, et la réponse surprend :

- **Le rake en live** a tendance à être un **pourcentage plus élevé (souvent 10 %) avec un plafond plus haut ($3–$6)** — mais tu ne joues que ~30 mains par heure, donc tu le paies moins souvent.
- **Le rake en ligne** est en général un **pourcentage plus bas (3–5 %) avec un plafond plus petit ($1–$3)** — mais tu peux voir 250+ mains par heure sur plusieurs tables, si bien qu'un grinder à gros volume peut payer *plus* de rake par heure qu'un joueur live malgré le taux plus bas.

La leçon : ne juge jamais le rake au seul pourcentage. Ce qui compte, c'est ce que tu paies réellement par pot — le pourcentage, jusqu'au plafond — **multiplié par le nombre de fois où tu le paies.** Une partie en ligne « bon marché » à 5 % que tu joues sur quatre tables peut te coûter plus qu'une partie live « chère » à 10 % — et c'est exactement pour ça que le rakeback et le choix des tables comptent davantage en ligne.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-straddle | C'est quoi un straddle au poker ? | /images/holdem-straddle-hero.webp
/fr/blog/holdem-tournament-vs-cash-game | Cash game ou tournoi | /images/tournament-table-action.webp
:::

## FAQ

**Q. Qu'est-ce que le rake au poker ?**

A. Le rake est la commission, ou le prélèvement, que la salle de poker prend sur une partie de cash game pour l'organiser — normalement un petit pourcentage des pots concernés (2,5–10 %) jusqu'à un plafond. Comme la maison ne joue pas, le rake est sa principale source de revenus. Les tournois facturent à la place des frais équivalents intégrés au buy-in.

**Q. Comment le rake est-il calculé ?**

A. Dans la plupart des cash games, c'est un pourcentage du pot, prélevé avant que le gagnant soit payé, jusqu'à un plafond de quelques dollars. Le pourcentage et le plafond varient selon la salle et les limites, et le plafond baisse souvent quand moins de joueurs reçoivent des cartes. Aux limites plus élevées, les salles peuvent facturer à la place un forfait horaire par joueur.

**Q. Qui paie le rake au poker ?**

A. Le rake est pris directement dans le pot, donc sur le papier c'est le joueur qui gagne la main qui le paie — le pot remporté lui revient amputé du montant du rake. En pratique, tous ceux qui ont mis des jetons dans ce pot y ont contribué, si bien que toute la table en partage le coût sur une session. En tournoi, pas d'ambiguïté : chaque inscrit paie les mêmes frais intégrés au buy-in, qu'il gagne ou qu'il saute le premier.

**Q. Paie-t-on le rake si tout le monde se couche avant le flop ?**

A. En général, non. La plupart des salles appliquent « no flop, no drop » — si la main se termine préflop, aucun rake n'est prélevé. Ce n'est pas universel pour autant : quelques sites (notamment GGPoker) prélèvent sur certains pots préflop, donc ça vaut le coup de vérifier la règle de ta salle.

**Q. Combien de rake prend une partie live en $1/$2 ?**

A. Couramment 10 % du pot, plafonnés autour de $5. La plupart des pots disputés atteignent le plafond, si bien qu'une seule table animée peut verser $100 ou plus par heure, tous joueurs confondus. C'est cette commission qui fait qu'une table de joueurs de même niveau perd lentement des jetons au profit de la maison.

**Q. C'est quoi le rakeback ?**

A. Le rakeback te rend un pourcentage du rake que tu paies personnellement — souvent 20–40 % — sous forme de points, de cashback ou d'un programme de fidélité. Il abaisse en pratique ton rake réel. Pour un joueur occasionnel, c'est un petit bonus ; pour un régulier à gros volume, ça peut faire la différence entre une année perdante et une année gagnante.

**Q. Comment payer moins de rake au poker ?**

A. Tu ne peux pas échapper complètement au rake dans une partie où il est prélevé, mais tu peux le réduire. Décroche le meilleur accord de rakeback possible et choisis des salles aux plafonds favorables aux joueurs. Monter de limite réduit aussi le rake, puisqu'un plafond fixe pèse moins sur chaque pot — mais ne fais ce pas que quand ta bankroll encaisse les écarts *et* que tu gardes un avantage sur un field plus dur, sinon les joueurs te prendront bien plus que le rake ne l'a jamais fait. Jouer moins de pots mais plus gros, plutôt qu'une avalanche de petits, le réduit aussi : le plafond ne joue que sur les gros pots, alors que les petits paient le pourcentage complet. Même chose en évitant les tables à très peu de joueurs, où tu joues bien plus de mains par heure et poses les blindes bien plus souvent, donc tu es dans beaucoup plus de pots ponctionnés par heure (même là où le plafond baisse quand moins de joueurs reçoivent des cartes). Préférer les parties hautes limites au time charge aide aussi — mais y passer demande le même matelas de bankroll et un avantage sur le field. Sur le seul coût, une partie privée sans rake est le poker le moins cher qui soit — rien n'est retiré du pot.

**Q. Pourquoi la salle prend-elle un rake ?**

A. Parce qu'elle ne joue pas : au poker, les joueurs s'affrontent entre eux et la maison ne mise jamais. Faire payer l'organisation de la partie, c'est le cœur du modèle économique d'une salle de poker, en casino comme en ligne. Ce prélèvement finance le personnel et le matériel, et c'est la principale source de revenus de la salle — pris sur les pots plutôt que sur tes résultats.

**Q. Y a-t-il du rake dans les tournois de poker ?**

A. Oui, mais pas dans le pot. Les frais sont encaissés avec ton inscription. Un prix séparé comme $100 + $9 envoie $100 au prize pool et $9 à la salle ; des séries comme les WSOP annoncent plutôt un buy-in unique, frais déjà inclus. Ces frais (le « juice » ou le « vig ») représentent en général 5–20 % du buy-in et sont dus quel que soit ton classement final.

**Q. Comment le rake influence-t-il ton win rate ?**

A. Fortement — surtout aux petites limites, où le plafond baisse à peine avec les limites. Les tables à peu de joueurs ajoutent un second effet qui n'a rien à voir avec le plafond : le même rake par pot est partagé entre moins de joueurs, et tu poses les blindes bien plus souvent sur 100 mains — donc ta part par main augmente. (Par *heure*, tu paies aussi davantage, simplement parce que plus de mains se jouent, mais c'est une autre question que les bb/100.) Le rake peut transformer un petit gagnant en perdant : le même joueur à +8 bb/100 peut finir légèrement négatif rien qu'en passant dans une salle au plafond plus élevé. Mesure toujours ton win rate après rake.

**Q. Le rake est-il plus élevé en ligne ou en live ?**

A. Le rake live a tendance à être un pourcentage plus élevé, en général avec un plafond plus haut, mais tu joues bien moins de mains par heure. Le rake en ligne est en général un pourcentage plus bas avec un plafond plus petit — les plafonds varient selon la salle et les limites, et certains plafonds en ligne dépassent ceux du live — mais le multi-tabling fait que tu le paies sur beaucoup plus de mains — si bien qu'un grinder à gros volume peut payer plus de rake par heure en ligne. Juge le rake à ce que tu paies réellement par pot — le pourcentage, jusqu'au plafond — multiplié par le nombre de pots sur lesquels tu le paies, pas au seul taux.

---

## À retenir

1. **Le rake est la part de la maison pour organiser la partie** — en général 2,5–10 % des pots concernés jusqu'à un petit plafond, et il est distinct de ce que tu gagnes ou perds contre tes adversaires.
2. **Il frappe surtout les petites limites.** Le plafond bouge à peine quand tu descends, donc c'est tout en bas que tu paies proportionnellement le plus de rake — le « piège du rake » qui rend les micro-limites si dures à battre.
3. **Le rakeback et la structure comptent.** Récupérer 20–40 % de ton rake et choisir des salles aux plafonds favorables peut renverser ton résultat sur la durée — mesure tout *après* le rake.

Maintenant que tu vois la part de la maison, les chiffres que tu lis partout ailleurs prennent plus de sens : tes [cotes du pot](/fr/blog/holdem-pot-odds), ton win rate, et pourquoi un [straddle](/fr/blog/holdem-straddle) qui gonfle le pot nourrit aussi discrètement le rake. On peut battre le poker — mais seulement une fois que tu bats les autres joueurs de *plus* que ce que prend la maison.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cash game ou tournoi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi les deux te font payer de façon totalement différente</div>
  </a>
  <a href="/fr/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Jargon</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">C'est quoi un straddle ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">La blinde en plus qui gonfle le pot — et le rake</div>
  </a>
  <a href="/fr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes &amp; maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">La cote du pot en 10 secondes</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Lis ton pot une fois la part de la salle prélevée</div>
  </a>
  <a href="/fr/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment fonctionne un tournoi de poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Où partent vraiment les frais d'inscription</div>
  </a>
</div>
`.trim(),
};

export default POST;
