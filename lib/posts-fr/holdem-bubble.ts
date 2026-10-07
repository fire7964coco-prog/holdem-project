import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-bubble",
  title: "Comment jouer la bulle au poker ? Gros stack, stack moyen et short stack",
  seoTitle: "Ne fais plus la bulle — la bulle au poker, stack par stack",
  desc: "Sur la bulle, survivre vaut plus que les jetons : la bonne décision s'inverse. Comment jouer la bulle au poker en gros stack, stack moyen ou short stack.",
  tldr: "La bulle, c'est le moment juste avant les places payées : une élimination de plus et tout le monde est dans l'argent. Comme sauter ne rapporte rien, survivre vaut plus que les jetons à gagner, donc tes ranges de call se resserrent fort alors que tes shoves restent larges. Les gros stacks attaquent, les stacks moyens sont les plus coincés (pas les short stacks), et sur la bulle d'un satellite à plusieurs places, tu couches tout, même les as, une fois ton siège assuré.",
  category: "tournament",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-09-13",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🫧",
  image: "/images/holdem-bubble-hero.webp",
  imageAlt: "Un petit stack de jetons face à un gros stack imposant sur une table de tournoi, sur la bulle des places payées, avec une échelle de gains en arrière-plan — le moment où survivre vaut plus que les jetons",
  tags: ["bulle poker", "faire la bulle poker", "bulle tournoi poker", "bubble poker", "stratégie bulle poker", "bubble factor poker", "bubble boy poker", "main par main poker", "bulle satellite poker"],
  content: `
La fois où j'ai joué le plus discipliné de ma vie, c'était à trois joueurs de l'argent dans un tournoi du vendredi : tout le monde se couchait comme si les cartes brûlaient les doigts. J'avais un stack moyen et j'ai open-fold as-valet deux fois — des mains que je relance à chaque fois en cash game. Deux orbites plus tard, le short stack a sauté, je me suis traîné jusqu'au min-cash… et j'ai fini 14e pour un gain à peine supérieur à mon buy-in. ==J'ai « survécu » jusqu'à passer à côté du vrai argent.== Toute la bulle tient dans cette histoire : joue-la trop peureux et tu sécurises des miettes ; joue-la bien et c'est là que les tournois se gagnent vraiment.

==Sur la bulle, une élimination de plus fait entrer tous les autres dans l'argent — alors, le temps de quelques mains décisives, rester en vie vaut plus que les jetons que tu pourrais gagner.== Ce seul fait met le poker normal la tête en bas, et presque tout le monde se trompe des deux mêmes façons : les gros stacks n'attaquent pas assez, et les stacks moyens payent beaucoup trop. Cet article, c'est le plan de jeu stack par stack — quoi faire avec un gros stack, un stack moyen ou un short stack, sur les trois bulles différentes que tu vas rencontrer.

Si tu veux les maths qui expliquent *pourquoi* les jetons cessent ici de valoir de l'argent, c'est l'[ICM](/fr/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") (Independent Chip Model) — ici, on transforme cette théorie en folds et en shoves concrets à la table de [tournoi](/fr/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp").

---

### La bulle en bref

:::stripe
1 élimination | fait entrer tous les autres dans l'argent — la survie prend une valeur énorme
resserre tes calls | garde des shoves larges
stack moyen | le plus coincé, pas le short stack
:::

---

## C'est quoi la bulle au poker ? (et « faire la bulle »)

**La bulle, c'est le moment juste avant l'argent — le point où une élimination de plus fait entrer dans les places payées tous ceux qui sont encore assis.** Si un tournoi paye les 27 premiers, la bulle est atteinte à ==28 joueurs restants== : si tu sautes maintenant, tu repars sans rien ; si tu survis à une élimination de plus, tu es assuré de toucher un gain.

Quelques termes que tu vas entendre :

- ==**Sur la bulle**== — le tournoi est à une élimination (ou quelques-unes) de l'argent. Le jeu ralentit jusqu'à presque s'arrêter.
- ==**Bubble boy**== — le malchanceux qui sort à une place de l'argent et repart sans rien : c'est lui qui « fait la bulle ». Personne ne veut ce titre.
- ==**Bulle stone** (stone bubble, ou hard bubble)== — l'élimination unique qui fait éclater la bulle et paye tous ceux qui restent. Quand c'est une vraie bulle stone, tous les joueurs restants sont assurés d'être payés à l'instant où un joueur saute.

La bulle compte parce que les gains en tournoi sont ==concentrés en haut du classement==. Le passage de *rien* au min-cash est le plus gros saut en pourcentage de toute la structure des gains, et c'est exactement pour ça que la survie l'emporte soudain sur l'accumulation de jetons — mais seulement pendant une fenêtre courte et intense.

---

## Pourquoi la bulle change tout ? L'ICM en un paragraphe

**Parce que les jetons de tournoi ne sont pas de l'argent — tu ne gagnes qu'un seul premier prix, donc les jetons qui protègent un gain assuré valent plus que ceux qui vont chercher davantage.** C'est le principe de l'Independent Chip Model, et près d'un palier de gains (pay jump), il veut dire que ==le risque de sauter pèse plus lourd que la récompense d'un pile ou face gagné==. Un call à l'équilibre en jetons peut être une perte en vrais dollars.

Pas besoin de faire le calcul en direct — c'est le rôle de notre [calculateur ICM](/fr/calculator), et l'explication détaillée se trouve dans l'[article sur l'ICM](/fr/blog/holdem-icm). Ce qui compte à la table, c'est la conséquence : ==les calls se resserrent beaucoup, mais les shoves restent larges==, parce que gagner sans abattage (la fold equity) vaut plus que jamais quand tous les autres jouent la peur au ventre. Retiens une phrase : **resserre tes calls avant de resserrer tes shoves.**

---

## Quelles sont les 3 bulles que tu vas croiser ? Argent, table finale et satellite

**Toutes les bulles ne se valent pas — la bulle des places payées, la bulle de la table finale et la bulle de satellite récompensent des stratégies complètement différentes.** Les confondre est l'une des erreurs les plus coûteuses du poker de tournoi.

- ==**Bulle des places payées**== — le saut de rien au min-cash. La prime de survie est élevée, mais le min-cash est petit, donc tu veux quand même *accumuler* pour viser les gros prix. Mets la pression, ne te contente pas de te cacher.
- ==**Bulle de la table finale**== — à une place de la table finale. La pression ICM y est en général ==la plus extrême de tout le tournoi==, parce que les plus gros prix sont désormais en jeu. Les short stacks ont le plus à gagner d'un long parcours ; un gros stack à 9 joueurs occupe sans doute le meilleur siège de tout l'événement.
- ==**Bulle de satellite**== — l'exception. Dans un satellite à plusieurs places, chaque siège qualificatif vaut ==exactement la même chose==. Une fois ton stack assez gros pour être à l'abri, les jetons en plus ne valent *rien* — la bonne décision devient donc presque l'inverse d'une bulle normale (on revient plus bas sur la règle « coucher les as »).

Garde cette distinction en tête, car les conseils stack par stack qui suivent changent selon la bulle sur laquelle tu te trouves.

---

![Infographie de la pression ICM — un énorme gros stack de jetons domine un short stack sur la bulle des places payées](/images/holdem-bubble-pressure.webp "Sur la bulle, la pression ICM permet au gros stack d'attaquer — survivre vaut plus que les jetons au milieu")

## Comment jouer un GROS stack sur la bulle ?

**Attaque sans relâche — tu as le risk premium (prime de risque) le plus bas de la table et tous les autres doivent respecter tes jetons.** Le gros stack est celui qui profite le plus de la bulle. Tu peux éliminer n'importe qui ; personne ne peut t'éliminer. Alors mets la pression :

- **Ouvre large et [3-bet](/fr/blog/holdem-3bet) léger**, surtout contre les stacks moyens à ta droite, qui ne peuvent pas payer sans risquer leur tournoi.
- **Vise les stacks moyens, pas les plus courts.** C'est la nuance clé : les short stacks sont plus enclins à te payer (ils ont moins à perdre), et en doubler un est une catastrophe. Malmène les joueurs qui ont ==le plus peur de sauter== — les stacks moyens.
- **Ne t'emballe pas.** Mettre la pression, c'est voler les blindes et te coucher face à la résistance, pas balancer ton stack dans des calls. Si un stack moyen serré finit par faire tapis, respecte-le.

Bien joué, un gros stack peut empiler les jetons sur la bulle sans jamais aller à l'abattage.

---

## Comment jouer un stack MOYEN sur la bulle ?

**Le stack moyen est le siège le plus coincé de la table — et c'est justement le point que presque tous les articles ratent.** On imagine que le short stack subit le plus de pression. D'après les vrais calculs (le bubble factor), c'est le ==stack moyen== qui est le plus contraint : assez gros pour avoir une vraie part du prize pool à perdre, pas assez court pour justifier de flamber.

Ton plan de jeu :

- **Resserre ta range de call plus que n'importe qui.** C'est toi qui as le plus à perdre en payant à tapis et en sautant. Couche des mains que tu paierais volontiers en cash game — même des mains aussi fortes que certaines paires et de gros as face au shove d'un stack plus gros.
- **Continue à voler les stacks plus petits que toi.** Coincé pour payer ne veut pas dire passif. Ouvre et mets la pression sur les stacks plus courts ; évite juste de t'accrocher avec les gros stacks à ta gauche.
- **Garde l'œil sur les paliers, sans avoir peur.** Tu navigues vers l'argent, mais ne te couche pas jusqu'à devenir short stack et te faire manger par les blindes — ce serait échanger un piège contre un pire.

Si tu sens l'étau se resserrer sur la bulle, tu es probablement un stack moyen. Joue les plus petits pots possibles tout en continuant à voler vers le bas.

---

## Comment jouer un SHORT stack sur la bulle ?

**Fais tapis ou couche-toi — ne limpe jamais et ne paye jamais à tapis — et profite du fait que ton bubble factor est en réalité plus bas que celui du stack moyen.** Comme tu risques déjà fort de sauter, doubler t'aide énormément, donc tu es plus libre de prendre des risques que les stacks moyens coincés. Mais tu prends ce risque en ==étant celui qui shove==, pas celui qui paye — le [plan push or fold du short stack](/fr/blog/holdem-short-stack "thumb:/images/holdem-short-stack-hero.webp") détaille la mécanique :

- **Shove ou fold.** L'agression en first-in (premier à entrer dans le coup) préserve ta [fold equity](/fr/blog/holdem-when-to-fold), ton arme la plus précieuse. Open-limper ou payer en flat avec un short stack la jette par la fenêtre.
- **Attends s'il y a des stacks plus courts que toi.** Si deux joueurs sont plus courts, tu peux coucher les mains limites et les laisser sauter d'abord — tu grimpes les paliers gratuitement. Si c'est *toi* le plus court, tu ne peux pas te permettre d'attendre : trouve un spot et fais tapis avant que les blindes ne te mangent.
- **Ne te resserre pas jusqu'à disparaître.** Te coucher jusqu'à deux big blinds « pour survivre », c'est justement comme ça qu'on finit bubble boy. Choisis une range de shove raisonnable et engage-toi.

Le mantra du short stack : la fold equity, c'est tout. Shove le premier, et choisis ton spot avant que les blindes ne le choisissent pour toi.

---

## Bubble factor et risk premium : le chiffre qui te dit quand te coucher

**Le « bubble factor » mesure combien perdre ton stack te coûte de plus que gagner le même pot ne t'aide — et il se convertit directement en équité supplémentaire nécessaire pour payer.** Un bubble factor de 1,0 veut dire que jetons et argent évoluent ensemble (en début de tournoi). Un bubble factor de 1,5 veut dire que ==sauter fait 1,5× plus mal que gagner ne t'aide==, donc il te faut un avantage bien plus gros pour mettre tes jetons au milieu.

Voici la partie utile : l'équité dont tu as besoin pour qu'un call soit à l'équilibre est ==c · BF ÷ (P + c · BF)==, où **c** est ce que le call te coûte et **P** le pot que tu gagnerais — tout ce qui est déjà au milieu, sans compter ton propre call. Quand tu risques exactement ce que tu peux gagner, la formule se réduit à la forme qu'on cite d'habitude — ==BF ÷ (1 + BF)== — et c'est celle qu'utilise le tableau ci-dessous.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bubble factor | Perdre fait mal… | Équité nécessaire (sans argent mort) |
|:--|:--:|:--:|
| 1,0 (pas de pression) | autant que gagner aide | 50 % |
| 1,3 | 1,3× | ==57 %== |
| 1,5 (bulle des places payées) | 1,5× | ==60 %== |
| 1,7 (bulle de la table finale) | 1,7× | ==63 %== |
| 2,0 (sévère) | 2× | ==67 %== |

</div>

Lis cette dernière colonne comme un plafond, pas comme ton spot : les vrais pots de bulle contiennent de l'argent mort, et l'argent mort fait **baisser** l'exigence. Si la petite blinde fait tapis pour 10bb et que tu payes 9bb dans un pot qui contient déjà 12bb, un bubble factor de 1,5 demande ==52,9 %==, pas 60 % — et sans aucune pression ICM, ce ne sont que les cotes du pot : ==42,9 %==.

L'autre moitié de l'histoire : le bubble factor dépend de **qui est en face de toi**, pas du stade du tournoi. À quatre joueurs avec trois places payées, un stack moyen face au chip leader a un bubble factor proche de ==3,0==, alors que ce même stack moyen face au joueur le plus court dépasse à peine ==1,1== ; à stacks égaux, on est autour de ==1,9==, et sur la bulle d'une table finale à six joueurs, les stacks moyens tournent à ==2,0== et plus (le chip leader, comme toujours, est bien plus bas). Considère 1,5–1,7 comme un plancher pour une vraie bulle, pas comme un sommet — puis redescends une fois dans l'argent. Entre tes propres stacks et tes gains dans le [calculateur ICM](/fr/calculator) pour obtenir le chiffre qui s'applique vraiment.

---

## Hand-for-hand (main par main) et stalling : comment « la bulle éclate » vraiment à table ?

**Quand l'argent approche, les tournois passent en « hand-for-hand » (main par main) — chaque table joue exactement une main en même temps, puis attend — précisément pour empêcher les joueurs de faire du stalling (jouer la montre) jusqu'à l'argent.** Sans ça, les joueurs des tables lentes pourraient se coucher main après main pendant que les tables rapides brûlent la bulle. Le hand-for-hand remet tout le monde à égalité :

- **Comment ça marche :** le directeur de tournoi arrête l'horloge, et à partir de là chaque main retire ==2 minutes== fixes au niveau, quelle que soit sa durée réelle (WSOP Tournament Rule 126.a et 126.c ; TDA RP-8-C et RP-8-D) — les blindes continuent donc de monter pendant la bulle, simplement à la main et non plus à la minute réelle. Toutes les tables distribuent une main, et aucune ne commence la suivante tant que toutes n'ont pas terminé. Si deux joueurs sautent sur la même main en hand-for-hand à la même table, celui qui a commencé la main avec le moins de jetons prend la place la plus basse (celle de la bulle) ; s'ils sautent à des tables différentes, ils sont ex aequo à cette place (WSOP Tournament Rule 126.b) et, en pratique, se partagent les deux gains concernés. Un cas est écrit de la même façon dans les deux règlements : pour la seule main encore en cours au moment où le hand-for-hand est annoncé, WSOP 126.c comme TDA RP-8-A font partager à tous ceux qui sautent sur cette main la ou les places payées. Vérifie le règlement de la salle avant de compter grimper les paliers.
- **Stalling :** prendre tout ton time bank à chaque décision en espérant voir moins de mains avant l'argent. En hand-for-hand, cet espoir est mal placé : ça ne réduit pas le nombre de mains que ta table doit jouer — chaque table joue le même nombre de mains et chaque main retire 2 minutes à l'horloge (WSOP Tournament Rule 126.a, 126.c), que tu te couches instantanément ou que tu brûles tout ton time bank. Les gros stacks n'ont aucune raison de jouer la montre — ils veulent plus de mains pour attaquer. Les short stacks et les stacks moyens jouent encore la montre par habitude, ==mais un stalling excessif peut te valoir un appel de l'horloge (clock) ou une pénalité== — réfléchis dans des limites raisonnables, sans brûler délibérément ton time bank.
- **Exploite-le :** comme tous les autres ralentissent, un gros stack qui continue de mettre la pression pendant le hand-for-hand ramasse blindes et antes presque sans opposition.

---

## Bulle de satellite : pourquoi coucher les as ?

**Dans un satellite à plusieurs places, chaque siège vaut la même chose — donc dès que ton stack est à l'abri de la bulle, tu couches tout, y compris une paire d'as.** C'est le spot le plus contre-intuitif du poker, et c'est le bon jeu. (Un satellite winner-take-all qui ne distribue qu'un seul siège, c'est différent : il se joue pour la première place en chip EV.) Si gagner un pile ou face te donne ==le même siège que tu as déjà verrouillé== alors que le perdre t'élimine, il n'y a aucune récompense et un risque énorme :

- **Une fois ton siège mathématiquement assuré** (tu es assez loin de la bulle pour ne plus pouvoir être rattrapé), couche toutes les mains — oui, même AA et KK — et laisse les stacks plus courts se battre entre eux. Refais ce calcul à chaque montée des blindes : la « zone de sécurité » rétrécit quand les antes arrivent.
- **Ne compte pas sur le stalling en live.** En ligne, utiliser tout ton temps n'entraîne aucune pénalité ; en live, brûler délibérément ses time banks pour grimper les paliers est explicitement passible de sanction — la WSOP Tournament Rule 80 cite « purposely depleting time banks to ladder up in the payout » (épuiser volontairement ses time banks pour grimper dans les gains) et renvoie à un temps de réflexion réduit ou à une pénalité selon les Rules 40, 113 et 114 — couche-toi à vitesse normale et laisse les short stacks se battre.
- **La seule exception :** ne paye que si tu couvres le short stack en question et que son élimination verrouille la bulle *pour toi* — et seulement tant que ton siège reste garanti même si tu perds le pot.

Si tu ne retiens qu'une chose de cette section : un satellite n'est pas un tournoi normal. Les jetons au-dessus du seuil de sécurité ne valent rien, alors joue en conséquence.

---

## Pourquoi jouer pour le min-cash est la pire erreur sur la bulle ?

**Se coucher jusqu'au min-cash donne une impression de sécurité, mais ça échange le vrai argent du tournoi contre son plus petit prix.** Comme les gains sont concentrés en haut du classement, le min-cash est un plancher, pas un objectif — l'argent est en haut de l'échelle, et tu n'y arrives qu'en ayant des jetons au moment où la bulle éclate.

Les joueurs qui gagnent des tournois voient la bulle comme une ==occasion d'accumuler== pendant que tous les autres se cachent. La survie compte pendant quelques mains autour du palier de gains ; une fois que la bulle éclate, la pression ICM se relâche et on recommence à construire un stack pour la victoire. Respecte la bulle — puis arrête de jouer la peur au ventre dès qu'elle est passée.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-icm | ICM au poker : l'Independent Chip Model expliqué | /images/holdem-icm-hero.webp
/fr/blog/holdem-when-to-fold | Quand se coucher au poker | /images/holdem-when-to-fold-hero.webp
:::

## FAQ

**Q. Que veut dire « être sur la bulle » au poker ?**

A. Ça veut dire que le tournoi est à une élimination (ou quelques-unes) de l'argent. Si les 27 premières places sont payées, la bulle se situe à 28 joueurs restants — le prochain joueur éliminé ne gagne rien, et tous les autres sont assurés de toucher un gain. Le jeu se resserre énormément parce que, pendant un court moment, survivre vaut plus que les jetons.

**Q. Qui est le bubble boy au poker ?**

A. Le bubble boy est le joueur qui sort à la dernière place non payée — à une place de l'argent — et ne gagne rien. C'est le pire résultat possible en tournoi : toutes ces heures, et aucun gain. Certains événements offrent au bubble boy un petit lot de consolation, mais traditionnellement, c'est zéro.

**Q. C'est quoi faire la bulle au poker ?**

A. Faire la bulle, c'est sauter à la dernière place non payée, juste avant l'argent, et repartir sans rien : tu deviens le bubble boy. Si les 27 premiers sont payés, celui qui est éliminé à 28 joueurs restants fait la bulle, et tous les autres touchent un gain. À ne pas confondre avec le fait de passer la bulle trop timidement : dans mon tournoi du vendredi, je n'ai pas fait la bulle — j'ai fini 14e, dans l'argent, mais pour un gain à peine supérieur à mon buy-in.

**Q. Quelle différence entre une bulle stone et une bulle soft ?**

A. Une bulle stone (ou hard bubble) correspond au cas où une seule élimination fait entrer tous les joueurs restants dans l'argent en même temps. Une soft bubble est plus floue — une série de quelques éliminations près de l'argent plutôt qu'une place précise. La bulle stone crée la pression la plus extrême, car une seule élimination paye tous ceux qui restent.

**Q. Que signifie « payer la bulle » ou « la bulle éclate » ?**

A. « La bulle », c'est la dernière place avant l'argent : le joueur qui saute à ce moment-là — le bubble boy — ne gagne rien, alors que tous ceux encore en lice sont payés. « La bulle éclate » désigne cette dernière élimination : à l'instant où elle se produit, tous les joueurs restants sont dans l'argent et l'intense pression de survie retombe. « Payer la bulle », c'est autre chose : certains événements — ou les joueurs restants, d'un commun accord — remettent un petit paiement de consolation à celui qui a fini à la bulle. C'est l'exception, pas la règle ; traditionnellement, la bulle ne paye rien.

**Q. Faut-il se coucher sur la bulle ?**

A. Tu dois renoncer aux *calls* bien plus souvent que d'habitude, mais pas tout coucher — et tu dois continuer à shover et à voler. Près du palier de gains, survivre vaut plus que les jetons, donc payer à tapis et sauter est l'erreur coûteuse. Resserre fortement ta range de call tout en gardant ton agression en first-in large.

**Q. Les short stacks subissent-ils la plus forte pression sur la bulle ?**

A. Non — c'est l'idée reçue classique. D'après le bubble factor, c'est le stack moyen qui est le plus contraint : assez de part du prize pool à perdre, pas assez court pour justifier de flamber. Les short stacks ont en réalité un bubble factor plus bas, parce que sauter est déjà probable et que doubler les aide beaucoup ; ils peuvent donc prendre des risques plus librement (en shovant, pas en payant).

**Q. C'est quoi le bubble factor au poker ?**

A. Le bubble factor mesure combien perdre un pot te coûte de plus que gagner le même pot ne t'aide, en argent réel (au sens de l'ICM). Un bubble factor de 1,0 veut dire que les jetons valent de l'argent ; 1,5 veut dire que sauter fait 1,5× plus mal que gagner ne t'aide. Il se convertit en équité nécessaire pour payer : c · BF ÷ (P + c · BF), pour un call de c dans un pot de P. Si tu risques exactement ce que tu peux gagner, ça donne BF ÷ (1 + BF) — 60 % avec un bubble factor de 1,5 — mais les vrais pots contiennent de l'argent mort : un shove typique de 10bb que tu payes 9bb dans un pot de 12bb demande environ 53 %. Dans les deux cas, c'est au-dessus des 50 % qu'un pile ou face te donne en chip EV, et c'est pour ça que les pile ou face deviennent des folds sur la bulle.

**Q. C'est quoi le main par main (hand-for-hand) ?**

A. Près de la bulle des places payées, toutes les tables jouent exactement une main en même temps, puis attendent que chaque table ait terminé avant la main suivante. Ça existe pour empêcher le stalling — sans ça, des joueurs pourraient se coucher lentement à une table pour se glisser dans l'argent pendant qu'une autre table fait éclater la bulle plus vite.

**Q. Faut-il vraiment coucher les as sur la bulle d'un satellite ?**

A. Oui, parce que dans un satellite à plusieurs places chaque siège vaut la même chose : une fois ton stack à l'abri de la bulle, gagner une main ne te rapporte rien de plus (tu as déjà ton siège), alors que la perdre t'élimine. Tout le risque et aucune récompense : coucher même une paire d'as est mathématiquement correct.

---

## À retenir

1. **La survie l'emporte sur les jetons — pendant quelques mains.** Près du palier de gains, resserre tes calls et garde des shoves larges. Puis recommence à accumuler une fois que la bulle éclate.
2. **Le piège, c'est le stack moyen, pas le short stack.** Les gros stacks attaquent les stacks moyens ; les stacks moyens jouent tout petit ; les short stacks shovent les premiers et exploitent la fold equity.
3. **Sache sur quelle bulle tu es.** Les bulles des places payées, de la table finale et de satellite récompensent des jeux différents — et sur un satellite, un stack à l'abri couche tout, même les as.

Le moteur de tout ça, c'est l'[ICM](/fr/blog/holdem-icm) ; la discipline derrière les folds, c'est de [savoir quand lâcher prise](/fr/blog/holdem-when-to-fold).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">ICM au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les maths qui expliquent pourquoi la bulle compte</div>
  </a>
  <a href="/fr/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment fonctionne un tournoi de poker ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le pilier dont fait partie la bulle</div>
  </a>
  <a href="/fr/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Quand se coucher au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">La discipline qu'exige la bulle</div>
  </a>
  <a href="/fr/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Outil gratuit</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Calculateur ICM</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Trouve ton vrai bubble factor</div>
  </a>
</div>
`.trim(),
};

export default POST;
