import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-implied-odds",
  title: "Cotes implicites au poker : quand un mauvais prix devient un bon call",
  seoTitle: "Payer quand la cote dit non ? — Cotes implicites au poker",
  desc: "Ta cote du pot dit fold, et pourtant le call rapporte. Les cotes implicites au poker : la formule, le set mining et les cotes implicites inversées.",
  tldr: "Les cotes implicites, ce sont les jetons supplémentaires que tu comptes gagner sur les streets suivantes quand ton tirage rentre. Elles te permettent de payer de façon rentable un tirage que la cote du pot seule te dirait de lâcher, mais seulement si les stacks sont profonds et si ton adversaire va vraiment te payer.",
  category: "odds",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "💰",
  image: "/images/holdem-implied-odds-hero.webp",
  imageAlt: "Un stack de jetons profond derrière un joueur qui paie une mise avec un tirage couleur à la turn — le moment où les cotes implicites justifient un call que le pot seul ne paie pas",
  tags: ["cotes implicites", "cotes implicites poker", "cote implicite", "implied odds", "cotes implicites inversées", "reverse implied odds", "set mining", "cotes implicites tirage couleur"],
  content: `
Le plus gros pot que j'aie jamais gagné a commencé par un call qui « aurait dû » être un fold. J'avais ==b:6♠ 5♠== au bouton, j'ai touché un tirage quinte bilatéral au flop, et la cote du pot au flop disait que le prix n'y était pas. J'ai payé quand même — parce que le type en face avait 200 grosses blindes et était incapable de lâcher une top paire, même pour sauver sa peau. La quinte est tombée à la river (la rivière), tout son stack a suivi, et j'ai enfin compris le chiffre que personne n'explique bien : ==les cotes implicites (implied odds).==

==Les cotes implicites expliquent pourquoi tu peux payer un tirage qui « devrait » être un fold — et pourquoi les stacks profonds rendent les mains spéculatives si rentables dans les bons spots et si dangereuses dans les mauvais.== Le problème, c'est que la plupart des joueurs les traitent comme un mot magique qui justifie n'importe quel call. Ce n'en est pas un. C'est un chiffre que tu peux estimer, et cet article te montre comment.

Les probabilités brutes de chaque tirage viennent du [tableau des probabilités au poker](/fr/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") ; ici, tu apprends à décider quand ces probabilités — plus l'argent encore à venir — rendent vraiment un call rentable. On reprend exactement là où s'arrêtent les [cotes du pot (pot odds)](/fr/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp").

---

### Les cotes implicites en un coup d'œil

:::stripe
call ÷ % de réussite − (pot + call) | La formule des cotes implicites
7,5 contre 1 | La vraie cote contre le fait de toucher un brelan au flop
0 | Tes cotes implicites en heads-up dès que l'adversaire est à tapis
:::

---

## Qu'est-ce qu'une cote implicite au poker ?

**Les cotes implicites, ce sont les jetons supplémentaires que tu comptes gagner sur les streets suivantes quand ton tirage rentre — en plus du pot qui est déjà là, maintenant.** La cote du pot ne pose qu'une question : « le prix actuel vaut-il le coup ? » Les cotes implicites posent la question complète : « le prix actuel *plus tout ce que je gagnerai ensuite* vaut-il le coup ? »

C'est cette différence qui te permet de payer une mise au flop avec un tirage couleur qui n'a pas le prix immédiat. Le pot devant toi ne paie pas assez — mais si un cœur tombe et que ton adversaire paie une grosse mise à la river, le *total* que tu gagnes couvre le call plusieurs fois.

Voici le piège qui fait ou défait tout le concept : cet argent futur est une ==r:estimation==, pas un fait. Il dépend entièrement de la profondeur des stacks et de la probabilité que ton adversaire te paie quand tu touches. Suppose trop, et les « cotes implicites » deviennent une histoire que tu te racontes pendant que tu brûles tes jetons.

---

## Cotes implicites et cote du pot : quelle est la différence ?

**La cote du pot ne compte que l'argent qui est dans le pot maintenant ; les cotes implicites ajoutent l'argent que tu comptes gagner plus tard si tu touches.** Ce ne sont pas des rivales — les cotes implicites, c'est la cote du pot *prolongée dans le futur*.

:::compare
Cote du pot | Cotes implicites
Seulement les jetons dans le pot maintenant | Le pot actuel + les jetons que tu gagneras sur les streets suivantes
Un fait que tu peux calculer exactement | Une estimation fondée sur les stacks et l'adversaire
Te dit si le call se rembourse aujourd'hui | Te dit si le call rapporte sur toute la main
Fonctionne même contre un tapis | Vaut zéro contre un tapis (en heads-up — plus aucune mise)
:::

La règle pratique : **commence par la cote du pot.** Si ton équité (equity) bat déjà le prix — en ne comptant que les cartes que ce call t'achète — paie ; pas besoin d'histoire. Si ton tirage rate le prix *de peu*, c'est là que les cotes implicites départagent. Et si ton tirage rate le prix de très loin, les cotes implicites ne peuvent en général pas le sauver non plus.

---

## Comment calculer les cotes implicites ?

**Pour calculer les cotes implicites, détermine combien tu dois gagner en plus quand tu touches, avec : supplément nécessaire = (ton call ÷ ta probabilité de réussite) − (le pot actuel + ton call).** Si tu peux réalistement gagner autant de plus sur les streets suivantes — et que ta main est encore la meilleure à ce moment-là — le call est rentable.

Écrit proprement, avec ==g:x== comme l'argent supplémentaire que tu dois gagner quand tu complètes :

:::steps
Trouve ta probabilité de réussite | Compte tes outs, convertis-les en pourcentage (la [règle du 2 et du 4](/fr/blog/holdem-outs) t'en donne une bonne approximation)
Divise ton call par cette probabilité | C'est le total que tu dois gagner pour être à l'équilibre
Soustrais le pot actuel **plus ton propre call** | Ce qui reste, c'est le supplément à gagner plus tard — c'est ton ==g:x==
Juge si c'est réaliste | Stacks profonds + adversaire qui aime payer = oui. Stacks courts ou board (les cartes communes) effrayant = non
:::

La formule en une ligne : ==b:x = (call ÷ % de réussite) − (pot actuel + call).== Si l'argent supplémentaire que tu peux réalistement extraire sur les streets suivantes est *plus grand* que x, payer est rentable même quand la cote du pot immédiate dit fold.

---

## Exemple concret : un tirage couleur à la turn

Faisons les calculs pour que la formule cesse d'être abstraite.

Tu tiens ==b:A♥ K♥== sur un board ==Q♥ 7♥ 2♣ 3♠== — le tirage couleur max, 9 outs, avec une carte à venir. Le pot est de $100 et ton adversaire mise $50 à la turn (le tournant), donc il y a ==$150 au milieu== et c'est $50 à payer pour toi.

- **D'abord la cote du pot :** on t'offre 150 contre 50, soit 3 contre 1, donc il te faut **25 %** d'équité. Ta couleur rentre à la river seulement ==r:19,6 %== du temps (9 outs ÷ 46 cartes inconnues — on ne compte que les outs couleur ; toucher l'as ou le roi ne suffit pas pour être sûr d'être devant, donc les overcards (cartes plus hautes que le board) ne sont pas des outs propres). 19,6 %, c'est moins que 25 %, donc le prix immédiat dit ==r:fold.==
- **Maintenant les cotes implicites :** x = (call ÷ % de réussite) − (pot + call) = (50 ÷ 0,196) − (150 + 50) = 255 − 200 = ==g:environ $55.== C'est le supplément que tu dois gagner à la river quand ta couleur rentre.

Donc la question n'est pas « dois-je payer $50 ? ». C'est « **quand un cœur tombe, est-ce que je peux gagner au moins $55 de plus ?** » Contre un adversaire profond qui paiera une mise à la river avec une top paire, c'est facile — tu paies. Contre quelqu'un qui n'a plus que $40 derrière, ou qui se ferme dès qu'un troisième cœur arrive au board, tu ne peux pas — donc tu te couches. (Contre un brelan servi (set), c'est encore plus dur : le 2♥ et le 3♥ apparient le board et peuvent transformer le brelan en full, ce qui laisse 7 outs propres — 7 ÷ 44 une fois les deux cartes du brelan aussi retirées du paquet — et un x d'environ $114.)

:::note
Même call de $50, décisions opposées — et les cartes n'ont jamais changé. Ce qui a changé, c'est l'argent qu'il reste à gagner. Voilà les cotes implicites en une phrase.
:::

---

## Combien faut-il gagner ensuite ? Les cotes implicites selon le tirage

**En règle générale, plus ton tirage est difficile à toucher — et plus il est visible quand il rentre — plus les stacks doivent être profonds pour qu'un call soit rentable.** Voici un repère pratique pour la table. Prends les multiples de stack comme des ==r:repères, pas des lois== — ils intègrent le fait que tu ne seras pas toujours payé et que tu ne gagneras pas toujours quand tu touches.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tirage | Outs | % de réussite (carte suivante) | Stacks nécessaires derrière |
|:---|:---:|:---:|:---:|
| Tirage couleur | 9 | 19,6 % (turn → river) | ~8–10× le call |
| Tirage quinte bilatéral | 8 | 17,4 % (turn → river) | ~8–10× le call |
| Brelan (paire servie) | 2→set | ~11,8 % (au flop) | ~15–20× le call |
| Gutshot (tirage ventral) | 4 | 8,7 % (turn → river) | ~20×+ (rarement rentable) |

</div>

Deux forces fixent le chiffre. **La fréquence :** un gutshot rentre deux fois moins souvent qu'un tirage couleur, donc il lui faut un gain à peu près deux fois plus gros pour être à l'équilibre. **Le camouflage :** un brelan caché se fait payer bien plus qu'une couleur évidente sur un board monocolore, parce que ton adversaire ne peut pas te mettre dessus — c'est pour ça que les brelans supportent leur faible taux de réussite. Un [tirage couleur max vaut bien plus qu'un petit tirage couleur](/fr/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") pour la même raison : il se fait payer *et* il ne perd jamais contre une couleur plus haute quand il rentre.

---

## Set mining : pourquoi les petites paires servies vivent des cotes implicites ?

**Tu touches un brelan (ou mieux) au flop avec une paire servie seulement 11,8 % du temps — environ 7,5 contre 1, soit 1 sur 8,5 — donc le set mining (jouer pour toucher un brelan) n'est rentable que si les stacks derrière couvrent toutes les fois où tu rates.** C'est le coup de cotes implicites le plus pur au poker : tu paies une relance avec une petite paire pour une seule raison — toucher un brelan au flop et prendre le stack de quelqu'un.

![Une petite paire de cinq à côté d'un stack de jetons profond sur un tapis vert — le décor d'un call de set mining qui ne rapporte que si les stacks sont profonds](/images/holdem-implied-odds-setmine.webp "Les petites paires valent de l'or avec des stacks profonds derrière — payer un peu maintenant pour gagner beaucoup quand tu touches un brelan au flop")

Comme tu rates ==r:sept fois sur huit==, le calcul est impitoyable si le gain n'est pas énorme. Le repère courant est la **« règle des 5 % » : ne paie pour faire du set mining que si les stacks effectifs font au moins 20× ton call** (ton call représente ≤5 % du stack).

Voici le détail honnête que la plupart des articles sautent :

- **L'équilibre pur est à 7,5 contre 1.** Dans un monde idéal où tu te fais payer en entier à chaque brelan touché au flop, le pot plus ce que tu gagnes ensuite n'a besoin de faire qu'environ 7,5× ton call.
- **La vraie vie exige 15–20×.** Tu ne prendras pas toujours tout le stack, tu toucheras parfois ton brelan et tu perdras *quand même* (brelan contre brelan supérieur, ou l'adversaire complète une main plus forte), et la position compte. La marge en plus couvre ces fuites.
- Donc ==b:7,5 contre 1 est le plancher théorique de gain ; des stacks de 15–20× ton call sont la règle pratique.== Ne confonds pas les deux — prendre le 7,5 comme repère à une vraie table, c'est une fuite lente.

Le calcul exact du brelan au flop et toutes les autres probabilités de « toucher X au flop » se trouvent dans les [probabilités de tirage](/fr/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") ; ce qu'il faut retenir ici, c'est que les petites paires valent de l'or quand les stacks sont profonds et ne valent rien quand ils sont courts — la paire n'a pas changé, les cotes implicites, si.

---

## Cotes implicites inversées : pourquoi toucher ton tirage peut quand même te faire perdre ?

**Les cotes implicites inversées, ce sont les jetons que tu *perds* quand tu complètes ta main mais qu'elle reste la deuxième meilleure.** Les cotes implicites, c'est l'argent que tu gagnes quand tu touches ; les cotes implicites inversées, c'est l'argent que tu perds quand tu touches *et que tu perds quand même*. Ignore-les et tu tomberas amoureux de tirages qui sont en réalité des pièges silencieux.

:::compare
Cotes implicites | Cotes implicites inversées
L'argent que tu ==g:gagnes== sur les streets suivantes quand tu touches | L'argent que tu ==r:perds== sur les streets suivantes quand tu touches mais restes deuxième
Récompensent les tirages aux nuts | Punissent les tirages faibles et dominés
Augmentent la valeur d'un tirage | Baissent la valeur d'un tirage
:::

Trois spots classiques de cotes implicites inversées :

- **La petite couleur.** Tu tiens ==b:7♦ 6♦== et le board apporte un troisième carreau. Tu fais ta couleur — et tu donnes un stack au joueur qui tient ==b:A♦== avec un deuxième carreau — la couleur max (nut flush). Ta carte « gagnante » t'a coûté de l'argent.
- **Le bas de la quinte.** Tu tiens ==b:6♦ 5♦== sur ==b:9♥ 8♣ 2♠==, et un 7 à la turn te donne 5-6-7-8-9. Mais c'est le *bas* de la quinte — n'importe qui avec J-10 a maintenant 7-8-9-10-==g:J==, une quinte plus haute, et la carte même dont tu avais besoin te fait le payer.
- **La top paire dominée.** Tu touches ton roi avec un kicker faible et tu continues à payer — droit dans l'A-K de quelqu'un.

La leçon : un tirage aux ==g:nuts== vaut bien plus que le même tirage vers une deuxième meilleure main, même s'ils ont exactement les mêmes outs. Quand ton tirage ne va pas aux nuts, revois tes cotes implicites *à la baisse* — certains de tes « outs » servent en fait à payer ton adversaire.

---

## Quand ne faut-il pas compter sur les cotes implicites ? (erreurs fréquentes)

**En heads-up, dès que ton adversaire est à tapis, tes cotes implicites valent exactement zéro — il n'y a plus d'argent à lui prendre, donc tu reviens à la cote du pot pure.** (En multiway, un troisième joueur qui a encore des jetons peut faire vivre un pot annexe, le side pot — mais le joueur à tapis ne pourra jamais te payer un centime de plus.) C'est le concept le plus détourné du poker : « j'avais des cotes implicites » est l'excuse que les joueurs sortent après un call qui n'a jamais été justifié.

Surveille ces fuites :

:::card
🚫 | L'adversaire est à tapis | Plus de streets à venir, donc plus d'argent à venir de sa part. En heads-up, cotes implicites = 0 — utilise uniquement la cote du pot
📉 | Stacks courts derrière | Si ce qui reste derrière est plus petit que le x qu'il te faut, « je serai payé à la river » est un fantasme
🙅 | Un adversaire qui ne paie pas | Un nit qui ne mise qu'avec les nuts ne paiera pas ta couleur. Tes cotes implicites vivent et meurent avec sa volonté de payer
🃏 | Un board effrayant | Si la carte qui complète ton tirage gèle aussi l'action (quatre cartes à la couleur, board apparié), moins de mains te paient — et celles qui paient peuvent te battre
🎣 | Supposer qu'il va tout mettre | « Ça peut rentrer et il peut tout mettre », ce sont deux suppositions empilées sur un fold. Estime prudemment
:::

J'ai perdu plus de jetons à cause de cotes implicites imaginaires qu'à cause de n'importe quel bad beat (sale coup). Le remède tient en une seule question honnête avant de payer un tirage qui n'a pas le prix : ==b:« Quand je touche, qui me paie vraiment, et combien ? »== Si tu ne peux pas nommer l'argent, c'est qu'il n'existe pas.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-pot-odds | Comment calculer la cote du pot | /images/holdem-pot-odds-hero.webp
/fr/blog/holdem-drawing-odds | Probabilités de flopper un brelan, une couleur et plus | /images/holdem-drawing-odds-hero.webp
:::

## FAQ

**Q. C'est quoi, les cotes implicites au poker ?**

A. Les cotes implicites, ce sont les jetons supplémentaires que tu comptes gagner sur les streets suivantes si ton tirage rentre — la part « gain futur » d'une décision sur un tirage. Un call qui n'a pas le prix actuel peut rattraper la différence après que tu as touché, mais seulement si un adversaire a encore des jetons et va payer. Traite ce paiement comme une estimation, pas comme de l'argent déjà au milieu.

**Q. Quelle est la formule des cotes implicites ?**

A. Utilise : supplément nécessaire = (ton call ÷ ta probabilité de réussite) − (le pot actuel + ton call). Payer $50 à la turn avec un tirage couleur qui rentre 19,6 % du temps à la river (9 ÷ 46), ça donne 50 ÷ 0,196 = $255, moins les $200 déjà en jeu (le pot de $150 plus ton call de $50) = environ $55. Si tu peux réalistement gagner $55 de plus quand tu touches — et que la couleur que tu fais est la meilleure main — le call est rentable. Garde en tête que c'est toujours une estimation, puisque les mises futures ne sont pas garanties.

**Q. Quelle est la différence entre cote du pot et cotes implicites ?**

A. La différence entre la cote du pot et les cotes implicites, c'est la certitude : le pot actuel et le montant à payer sont visibles ; le paiement futur dépend de ce qui se passe ensuite. Vérifie d'abord le prix immédiat, puis demande-toi combien un tirage touché doit rapporter en plus. Un stack profond rend cet argent disponible, mais ne garantit pas que ton adversaire le mettra au milieu.

**Q. Quand utiliser les cotes implicites ?**

A. Commence par la cote du pot. Si ton équité bat déjà le prix immédiat — mesurée sur les cartes que ce call t'achète — paie simplement ; pas besoin de cotes implicites. Sers-toi des cotes implicites quand ton tirage rate ce prix et que les stacks derrière sont assez profonds pour que toucher te rapporte plus que le x de la formule — plus le tirage rate le prix, plus x grandit. Idéalement, c'est un tirage fort, caché ou aux nuts contre un adversaire qui paiera. Si les stacks derrière ne couvrent pas x — un adversaire en heads-up à tapis ou à court de jetons, par exemple — les cotes implicites ne peuvent pas sauver le call.

**Q. Que sont les cotes implicites inversées (reverse implied odds) ?**

A. Les cotes implicites inversées, ce sont les jetons supplémentaires qu'un tirage complété te coûte quand il reste deuxième meilleur : une petite couleur ou le bas d'une quinte peuvent te pousser à investir davantage alors qu'une autre main reste devant. Un tirage qui porte ce risque demande une estimation de gain plus prudente qu'un tirage aux nuts ; avoir le même nombre de cartes qui complètent ne les rend pas aussi précieux.

**Q. Combien faut-il pouvoir gagner derrière pour avoir de bonnes cotes implicites ?**

A. Ça dépend de ton tirage. Les tirages couleur et les tirages quinte bilatéraux demandent environ 8–10× le call derrière en stacks ; le set mining demande environ 15–20× comme fourchette pratique, et la « règle des 5 % », plus stricte, demande 20×. Plus le tirage est difficile à toucher, plus les stacks doivent être profonds pour justifier le call.

**Q. Les cotes implicites existent-elles quand l'adversaire est à tapis ?**

A. Non — en heads-up, quand ton adversaire est à tapis, il n'y a plus de tours de mise, donc plus d'argent supplémentaire à lui prendre — tes cotes implicites valent zéro. (En multiway, un troisième joueur qui a encore des jetons peut faire vivre un side pot ; le joueur à tapis lui-même ne pourra jamais te payer davantage.) Dans ce spot, tu dois te fier uniquement à la cote du pot. Supposer des cotes implicites contre un tapis est une erreur fréquente et coûteuse.

**Q. Comment fonctionnent les cotes implicites en set mining ?**

A. Tu touches un brelan au flop avec une paire servie seulement 11,8 % du temps (environ 7,5 contre 1), donc il te faut un gros gain les fois où tu touches. L'équilibre théorique est un gain total (le pot plus ce que tu gagnes ensuite) d'environ 7,5× ton call, mais le repère pratique est des stacks de 15–20× ton call — la marge en plus couvre les fois où tu touches sans recevoir d'action, ou perds avec un brelan (les fois où tu rates sont déjà comptées dans les 7,5×).

**Q. A-t-on des cotes implicites avec un tirage couleur ?**

A. En général oui, parce qu'une couleur complétée se fait souvent payer — mais seulement si c'est une couleur forte et que les stacks sont profonds. Un tirage couleur max a d'excellentes cotes implicites ; un petit tirage couleur porte des cotes implicites inversées, puisque tu peux le compléter et perdre quand même contre une couleur plus haute.

**Q. Pourquoi les cotes implicites sont-elles meilleures en cash game deep stack ?**

A. Les cotes implicites dépendent entièrement de l'argent qu'il reste à gagner, et des stacks profonds, c'est plus de cet argent. Dans un cash game profond, une petite paire ou des connecteurs assortis peuvent gagner un stack entier quand ils touchent, donc les mains spéculatives prennent de la valeur. En short stack ou en tournoi, il y a moins à gagner, donc ces mêmes mains en perdent.

---

## À retenir

1. **La formule :** supplément nécessaire = (call ÷ % de réussite) − (pot actuel + call). Si tu peux réalistement gagner plus que ça ensuite avec une main qui reste la meilleure, le call est bon même quand la cote du pot dit fold.
2. **Le rappel à la réalité :** les cotes implicites sont une estimation qui vit de stacks profonds et d'un adversaire qui paie. Contre un tapis, elles valent zéro en heads-up, et contre un short stack il reste très peu à gagner — reviens à la cote du pot.
3. **Le miroir sombre :** les cotes implicites inversées punissent les tirages qui ne vont pas aux nuts. Un tirage aux nuts vaut bien plus que le même tirage vers la deuxième meilleure main.

Maîtrise ça et tu arrêtes de brûler des jetons sur des calls pleins d'espoir, tout en faisant les calls rentables que personne d'autre n'ose faire. Ensuite, fixe les chiffres bruts avec le [tableau des probabilités au poker](/fr/blog/holdem-probability), ou regarde exactement à quelle fréquence chaque tirage rentre dans les [probabilités de tirage](/fr/blog/holdem-drawing-odds).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tableau des probabilités au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Chaque main, chaque flop, chaque tirage — les chiffres derrière le call</div>
  </a>
  <a href="/fr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment calculer la cote du pot</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le prix immédiat — là où commencent les cotes implicites</div>
  </a>
  <a href="/fr/blog/holdem-drawing-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Probabilités de tirage et de toucher X au flop</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">À quelle fréquence un brelan, une couleur ou une quinte rentre vraiment</div>
  </a>
  <a href="/fr/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Mains de départ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tableau des mains de départ par position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quelles mains spéculatives valent la peine de tirer</div>
  </a>
</div>
`.trim(),
};

export default POST;
