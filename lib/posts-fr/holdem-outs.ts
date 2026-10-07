import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "Compter ses outs au poker : la compétence derrière chaque bon call",
  seoTitle: "Combien de cartes te sauvent ? — Outs et gutshot au poker",
  desc: "Compter ses outs, personne ne te l'apprend en premier. Le tableau des outs au poker, du gutshot au tirage couleur, la conversion en % et les outs sales.",
  tldr: "Un out, c'est une carte encore dans le paquet qui transforme ta main en main probablement gagnante. Tu les comptes, puis tu convertis : outs × 4 au flop, outs × 2 à la turn, pour obtenir ton pourcentage approximatif de toucher. Un tirage couleur, c'est 9 outs, soit environ 36 % d'ici la river.",
  category: "odds",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-09-28",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "Infographie du comptage des outs — A♥ K♥ face à un flop Q♠ J♦ 9♥ où n'importe quel dix complète la quinte max",
  tags: ["outs poker", "compter ses outs au poker", "gutshot poker", "tirage ventral", "tableau des outs", "outs tirage couleur", "règle du 2 et du 4", "outs sales"],
  content: `
Pendant ma première année à la table, j'ai « joué mes tirages » sans jamais les compter. Un tirage couleur et un gutshot (tirage ventral) me paraissaient à peu près pareils — dans les deux cas, c'étaient « des cartes qui pouvaient tomber » —, alors je suivais de la même façon sur les deux et je me demandais pourquoi je perdais sans arrêt. Le remède n'a pas été une formation en stratégie. Ça a été une habitude de cinq minutes : ==m'arrêter, et compter vraiment les cartes qui me sauvent.==

Cette habitude, c'est compter ses **outs** — [la vraie réponse du poker au « comptage des cartes »](/fr/blog/holdem-card-counting "thumb:/images/holdem-card-counting-hero.webp") — et c'est la compétence qui se cache sous chaque décision de probabilités au poker. Avant de te demander « ce call est-il rentable ? », tu dois répondre à « combien de cartes me font gagner la main ? ». Cet article, c'est la moitié « comptage » — le [tableau des probabilités au poker](/fr/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") est la référence qui se trouve derrière, et les [cotes du pot (pot odds)](/fr/blog/holdem-pot-odds), c'est ce que tu fais du chiffre une fois que tu l'as.

---

### Les outs en un coup d'œil

:::stripe
9 | Outs d'un tirage couleur
8 | Outs d'un tirage quinte bilatéral
×4 / ×2 | Multiplie tes outs au flop (deux cartes à venir) / à la turn (le tournant) pour un % approximatif
:::

---

## Qu'est-ce qu'un out au poker ?

**Un out, c'est une carte encore dans le paquet qui transforme ta main en main probablement gagnante.** Si tu as un tirage couleur, chaque carte restante de ton enseigne le complète — et chacune est un out tant que cette couleur gagnerait vraiment.

Le mot « probablement » travaille en silence. Un vrai out doit *gagner* la main, pas seulement améliorer tes cartes. Faire paire avec ton dix quand une couleur est déjà sur le board (les cartes communes) n'est pas un out — tu t'es amélioré, mais tu perds toujours. Apprendre à compter ses outs, c'est en réalité apprendre à compter les cartes qui gagnent, et à ignorer celles qui ont seulement *l'air* utiles.

Tout ce qui suit — ton équité (equity), tes [cotes du pot](/fr/blog/holdem-pot-odds), ta décision de suivre ou de te coucher — part de ce seul chiffre. Si tu te trompes dans le compte, chaque calcul qui suit est faux lui aussi. Et une fois le compte connu, les [probabilités de toucher ton tirage](/fr/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") te disent exactement à quelle fréquence chaque tirage rentre.

---

## Comment calculer les outs au poker, étape par étape ?

> **Réponse rapide**
> Compte les cartes non vues qui mènent à ta main cible, puis retire les candidates qui te laisseraient quand même battu. Pars du total de l'enseigne ou de la hauteur et soustrais les cartes déjà visibles. Chaque carte physique ne compte qu'une seule fois, même quand elle complète deux tirages différents.

![Un joueur tient l'as et le roi de pique et étudie un flop bas de trois cartes sur le tapis vert, en comptant ses outs d'overcards avant d'agir](/images/holdem-outs-counting.webp "A-K sur un flop bas, c'est le cas d'école du comptage — six outs d'overcards, plus les backdoors")

Compter ses outs, c'est une routine en trois étapes que tu déroules sur chaque tirage jusqu'à ce qu'elle devienne automatique :

:::steps
Nomme ton tirage | Quelle main poursuis-tu ? Couleur, quinte, une paire plus haute, un brelan servi (set) — sois précis sur la cible
Compte les cartes qui la complètent | Il y a 13 cartes de chaque enseigne et 4 de chaque hauteur. Soustrais celles que tu vois déjà (tes cartes + le board)
Élimine les faux outs | Raye tout « out » qui complète ta main mais perd quand même — une carte de ta couleur qui apparie le board, une quinte qui en donne une plus haute à quelqu'un
:::

Prends un tirage couleur : 13 cartes de ton enseigne existent, tu en vois **quatre** (deux dans ta main, deux sur le board), donc ==g:13 − 4 = 9 outs==. Cette soustraction — retirer celles que tu ne *peux pas* toucher parce que tu les tiens déjà — c'est là que les débutants trébuchent.

Le comptage n'utilise que les cartes que tu vois. Tu ne soustrais pas les cartes inconnues de ton adversaire ; tu considères chaque carte non vue comme encore vivante. C'est pour ça que les comptes bruts ci-dessous restent les mêmes quoi que tiennent les autres — c'est le point de départ, avant de rayer les outs sales (dirty outs) plus bas.

---

## Tableau des outs : combien d'outs pour chaque tirage ?

> **Réponse rapide**
> Les comptes de départ standard sont neuf pour un tirage couleur, huit pour un tirage quinte bilatéral et quatre pour un gutshot. Les tirages combinés demandent de retirer le chevauchement. Les overcards et les tirages non max demandent une autre vérification : ces comptes décrivent les cartes qui améliorent ta main, et seules celles qui gagnent probablement valent plein tarif.

![Deux comptes de tirages côte à côte — treize piques dont quatre barrés à côté d'un grand 9, et une séquence ouverte marquée aux deux bouts à côté d'un grand 8](/images/holdem-outs-nine-and-eight.webp "À gauche, le tirage couleur ; à droite, le bilatéral — les deux comptes d'outs auxquels tous les autres tirages se mesurent")

Utilise ces comptes bruts comme point de départ, puis applique les vérifications d'outs « sales » plus bas :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Ton tirage | Outs | Pourquoi |
|:---|:---:|:---|
| Couleur + quinte bilatérale | 15 | 9 couleur + 8 quinte − 2 cartes partagées — le monstre |
| Couleur + gutshot | 12 | 9 couleur + 4 gutshot − 1 carte partagée |
| Tirage couleur | 9 | 13 d'une enseigne − 4 que tu vois |
| Tirage quinte bilatéral | 8 | Quatre cartes à chaque bout |
| Deux overcards (cartes plus hautes que le board) | 6 | Trois de chaque hauteur pour faire paire |
| Une paire → double paire ou brelan | 5 | 3 pour apparier ton kicker + 2 pour le brelan |
| Gutshot (tirage ventral) | 4 | Une seule hauteur comble le trou |
| Une overcard | 3 | Trois cartes pour faire top paire |
| Paire servie → brelan servi | 2 | Les deux dernières de ta hauteur |

</div>

Les deux tirages combinés en haut sont ceux où les joueurs se trompent d'arithmétique, alors ils ont leur propre section plus bas. Tout le reste est de la simple soustraction : compte les hauteurs ou les enseignes qui finissent ta main, retire ce que tu vois.

---

## Gutshot (tirage ventral) : combien d'outs ?

**Un gutshot (tirage ventral) a 4 outs : une seule hauteur comble le trou au milieu de ta quinte.** Depuis le flop, ces 4 outs rentrent 8,5 % du temps sur la carte suivante et 16,5 % du temps d'ici la river (la rivière), soit environ 5 contre 1. C'est la moitié des 8 outs d'un tirage quinte bilatéral, qui se complète par les deux bouts.

C'est exactement l'erreur de ma première année : un tirage couleur et un gutshot me semblaient équivalents, alors que l'un a 9 outs et l'autre 4. Le gutshot redevient intéressant quand il s'ajoute à un tirage couleur : ses 4 cartes s'additionnent aux 9 outs couleur, mais l'une d'elles est déjà de ton enseigne — 9 + 3 = 12 outs, comme le détaille la section sur les tirages combinés plus bas.

---

## Comment convertir ses outs en pourcentage ? Le tableau de conversion

> **Réponse rapide**
> Neuf outs touchent la carte suivante depuis le flop 19,1 % du temps, ou au moins une fois d'ici la river 35,0 % du temps. Le second chiffre inclut deux chances. Prends la colonne à une carte quand tu ne paies que pour voir la turn ; la colonne à deux cartes suppose que tu iras jusqu'à la river sans autre mise.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Flop → turn (1 carte) | D'ici la river (2 cartes) | Cote d'ici la river |
|:---|:---:|:---:|:---:|
| 2 | 4,3 % | 8,4 % | 11 contre 1 |
| 4 | 8,5 % | 16,5 % | 5 contre 1 |
| 6 | 12,8 % | 24,1 % | 3,1 contre 1 |
| 8 | 17,0 % | 31,5 % | 2,2 contre 1 |
| 9 | 19,1 % | 35,0 % | 1,9 contre 1 |
| 12 | 25,5 % | 45,0 % | 1,2 contre 1 |
| 15 | 31,9 % | 54,1 % | 0,85 contre 1 |

</div>

Deux chiffres comptent pour chaque tirage. **« D'ici la river »** compte les deux cartes restantes et s'applique quand plus aucune mise ne peut venir — tu es à tapis, ou tu as payé un tapis. **« Flop → turn »** ne compte que la carte suivante (9 ÷ 47 = 19,1 % ; de la turn à la river, ça devient 9 ÷ 46 = 19,6 %) — utilise-le dès qu'il reste des mises à venir, parce que tu n'es sûr de voir qu'une carte à la fois. Les débutants citent le gros chiffre « d'ici la river » face à une mise à la turn, se persuadent de suivre, et le paient.

Regarde le monstre à 15 outs : avec deux cartes à venir, il rentre 54,1 % du temps — contre une simple paire, ça en fait en général le **favori**, le rare tirage avec lequel tu peux volontiers faire tapis au flop. Contre un brelan servi, non : le board peut s'apparier et donner un full au brelan — l'exemple J♠ T♠ sur 9♠ 8♣ 2♠ plus bas n'a qu'environ 40 % contre une paire de neuf servie.

---

## La règle du 2 et du 4 : convertir ses outs de tête

> **Réponse rapide**
> Une fois que tu as un compte d'outs propres, multiplier par quatre estime la probabilité de toucher sur deux cartes ; multiplier par deux estime une seule carte. Ces raccourcis deviennent moins fiables à mesure que le tirage grossit. Ils estiment la complétion du tirage, donc compter une carte qui perd quand même ne se corrige pas en choisissant le bon multiplicateur.

- **Au flop (deux cartes à venir) :** outs ×4 ≈ ton % de toucher d'ici la river.
- **À la turn (une carte à venir) :** outs ×2 ≈ ton % de toucher à la river.

Un tirage couleur, c'est 9 outs. Au flop : 9 × 4 = **36 %** (valeur exacte 35,0 % — pile dessus). À la turn : 9 × 2 = **18 %** (exact 19,6 % — assez proche pour agir).

:::tip[Le raccourci ×4 suppose en silence que tu verras *les deux* cartes sans autre mise — ce n'est garanti que quand plus aucune mise ne peut venir (tu es à tapis, ou tu as payé un tapis). S'il y a une mise devant toi, utilise le chiffre ×2 (une carte) pour la street où tu te trouves vraiment.]:::

La faiblesse principale, ce sont **les gros comptes d'outs au flop**. Le calcul exact à deux cartes tient compte du fait de toucher sur l'une ou l'autre street sans compter deux fois le cas où les deux cartes touchent. L'estimation ×4 commence à viser un peu haut dès 7 outs, mais l'écart grandit avec les gros tirages ; la correction habituelle ci-dessous s'applique au-delà de 8 outs.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | La règle dit (×4) | Exact d'ici la river | Écart |
|:---|:---:|:---:|:---:|
| 8 | 32 % | 31,5 % | +0,5 % |
| 9 | 36 % | 35,0 % | +1 % |
| 12 | 48 % | 45,0 % | +3 % |
| 15 | 60 % | 54,1 % | +6 % |

</div>

La correction propre pour les gros tirages : pour **plus de 8 outs au flop**, multiplie par 4 puis soustrais *(outs − 8)*. Pour 15 outs : (15 × 4) − 7 = **53 %**, presque exactement juste. Pour les tirages courants de 8 outs ou moins, le ×4 et le ×2 tout simples suffisent. Les démonstrations complètes se trouvent dans le [tableau des probabilités](/fr/blog/holdem-probability).

---

## Tirages combinés : pourquoi 9 + 8 ne font pas 17 outs ?

> **Réponse rapide**
> Un tirage couleur plus un tirage quinte bilatéral a 15 cartes distinctes qui le complètent, pas 17 : deux cartes de quinte appartiennent déjà à l'enseigne de la couleur. Un tirage couleur plus un gutshot en a 12, parce qu'une carte se chevauche. Compte l'union des tirages, puis décompte à part les cartes qui perdraient quand même.

Disons que tu as ==b:J♠ T♠== sur un flop ==9♠ 8♣ 2♠==. Tu as deux tirages empilés : un tirage couleur (pique) et un tirage quinte bilatéral (n'importe quelle Q ou n'importe quel 7 fait la quinte). Additionne-les naïvement et tu obtiens 9 + 8 = 17. Mais **Q♠ et 7♠** complètent chacun *à la fois* la couleur et la quinte — ils sont déjà dans les 9 outs couleur. Compte-les une seule fois :

- Outs couleur : **9** (chaque pique)
- Outs de quinte qui ne sont pas des piques : Q♥ Q♦ Q♣, 7♥ 7♦ 7♣ = **6**
- Total : **15 outs**, pas 17

Même logique sur un **tirage couleur + gutshot** : 9 outs couleur + 4 cartes de gutshot, mais l'une de ces quatre est de ton enseigne → 9 + 3 = **12**. Dès que deux tirages partagent des cartes, retire le chevauchement — une carte dans un tirage couleur + gutshot, deux dans un tirage couleur + bilatéral. C'est la façon la plus courante de surcompter ses outs, et c'est pour ça que les lignes des tirages combinés du tableau tombent sous la simple somme.

---

## Outs « sales » : quelles cartes ne gagnent qu'en apparence ?

> **Réponse rapide**
> Un out sale améliore ta main sans la mettre devant de façon fiable. Les cartes de couleur sur un board apparié, les petites couleurs face à des tirages couleur plus hauts et les overcards face à des mains faites solides demandent toutes un examen. Pars du compte brut, puis réduis-le selon les mains plausibles de l'adversaire au lieu de payer chaque amélioration comme une victoire.

![Infographie d'un board apparié 10♠ 8♥ 4♠ 4♣ 6♦ séparant les outs propres des outs sales](/images/holdem-outs-dirty-outs.webp "Sur un board apparié, certains de tes outs sont sales — toucher la couleur peut encore payer un full")

Trois situations à apprendre à repérer d'un coup d'œil :

:::card
♠ | La couleur non max | Avec 8♠7♠ sur K♠9♠2♣, tu as 9 « outs » à pique — mais si un pique tombe et qu'un adversaire tirait à la même couleur avec un pique plus haut, tu fais couleur et tu perds quand même. Décompte tes outs quand tu ne tires pas à la couleur max (nut flush)
🂮 | Le board apparié | Un tirage couleur sur un board comme J♥8♥8♣ ressemble à 9 outs propres, mais le board est déjà apparié — un full déjà fait peut t'attendre, donc certaines de tes couleurs sont mortes avant même d'arriver
🃁 | Les overcards contre la force | Deux overcards (A-K sur Q-8-3) valent 6 outs sur le papier, mais si une grosse relance crie brelan servi ou double paire, toucher ton as n'est souvent pas bon — compte 3 au maximum, pas 6, et aucun dès que tu es sûr du brelan servi ou de la double paire
:::

Tu connais rarement la décote exacte, et ce n'est pas grave. Le geste est directionnel : quand le board ou l'action te dit qu'un out risque de ne pas gagner, rabote le compte *vers le bas* avant de convertir. Un joueur qui compte 9 outs sur un board apparié et paie une mise de la taille du pot paie plein tarif un tirage qui vaut discrètement moins que ça. Savoir quels outs sont propres, c'est une compétence de lecture de la texture du board — construis-la avec [comment lire le board](/fr/blog/holdem-reading-the-board).

---

:::readnext[À lire ensuite]
/fr/blog/holdem-pot-odds | Comment calculer la cote du pot | /images/holdem-pot-odds-hero.webp
/fr/blog/holdem-probability | Tableau des probabilités au poker | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Que signifie « out » au poker ?**

A. Les outs sont les cartes restantes dans le paquet qui transforment ta main en main probablement gagnante. Un tirage couleur a 9 outs (les 9 cartes non vues de ton enseigne) ; un tirage quinte bilatéral en a 8. Tu les comptes pour connaître ta probabilité de toucher et savoir si un call est rentable.

**Q. Que veut dire « 9 outs » au poker ?**

A. Ça veut dire que neuf cartes restantes dans le paquet peuvent compléter ta main — le plus souvent un tirage couleur (13 d'une enseigne moins les 4 que tu vois). Neuf outs, ça fait environ 35 % de toucher d'ici la river depuis le flop — un chiffre à deux cartes qui suppose qu'aucune autre mise ne viendra contre toi — ou 19,1 % sur la seule carte de la turn. La logique vaut pour n'importe quel compte : plus d'outs veut dire plus de chances de toucher, et multiplier tes outs par 4 au flop (ou par 2 à la turn) donne un pourcentage rapide et approximatif (le ×4 vise haut sur les gros tirages : 15 outs font 54 %, pas 60 %).

**Q. Comment compter ses outs au poker ?**

A. Nomme la main que tu poursuis, compte combien de cartes la complètent (13 de chaque enseigne, 4 de chaque hauteur), soustrais celles que tu vois déjà dans ta main et sur le board, puis raye les outs « sales » qui perdraient quand même. Un tirage couleur, c'est 13 − 4 = 9.

**Q. Combien d'outs a un tirage couleur ?**

A. Neuf. Il y a 13 cartes de chaque enseigne ; avec deux dans ta main et deux sur le board, tu en vois quatre, ce qui laisse 9 cartes non vues qui complètent ta couleur. Ça fait environ 35 % de toucher d'ici la river depuis le flop, ou 19,1 % sur la seule carte suivante s'il reste des mises à venir.

**Q. Combien d'outs a un tirage quinte bilatéral ?**

A. Huit — quatre cartes à chaque bout complètent la quinte. Un gutshot (tirage ventral) n'a que 4 outs, parce qu'une seule hauteur comble le trou. Un double gutshot en a aussi 8, autant qu'un bilatéral.

**Q. Qu'est-ce que la règle du 2 et du 4 ?**

A. Un raccourci pour transformer des outs en pourcentage : au flop, multiplie tes outs par 4 pour ta probabilité de toucher d'ici la river ; à la turn, multiplie par 2 pour la carte de la river. Neuf outs couleur ≈ 36 % au flop, 18 % à la turn. N'utilise le ×4 que si tu vois les deux cartes sans autre mise.

**Q. Qu'est-ce qu'un out « sale » (dirty out) ?**

A. Une carte qui complète ta main mais peut quand même perdre — une carte de couleur quand une couleur plus haute est possible, une carte de quinte qui donne aussi à quelqu'un une quinte plus haute, ou des overcards face à un brelan servi probable. Décompte (ou ne compte pas) les outs sales avant de convertir en probabilités, sinon tu surestimes ton équité.

**Q. Combien d'outs pour un tirage couleur plus un tirage quinte ?**

A. 15, pas 17. Un tirage couleur, c'est 9 outs et un tirage quinte bilatéral 8, mais deux des cartes de quinte sont aussi de ton enseigne et sont déjà comptées dans la couleur — donc tu retires le chevauchement. Quinze outs, c'est un favori pour toucher d'ici la river (environ 54 %) — mais seulement si tu vois les deux cartes ; s'il reste une mise à venir à la turn, c'est le 32 % à une carte qui fixe le prix de ton call — et seuls les outs qui gagnent vraiment comptent dans l'un ou l'autre chiffre.

**Q. Faut-il compter les cartes de l'adversaire quand on compte ses outs ?**

A. Non. Tu ne soustrais que les cartes que tu vois vraiment — tes cartes fermées et le board. Toute autre carte non vue est considérée comme vivante, c'est pour ça que les comptes bruts (9 pour une couleur, 8 pour un bilatéral) restent les mêmes quoi que tiennent tes adversaires. Que chacune de ces cartes gagne vraiment dépend quand même de leur main — c'est la vérification des outs sales.

**Q. Qu'est-ce qu'un gutshot au poker ?**

A. Un gutshot (tirage ventral, « inside straight » en anglais) est un tirage quinte par l'intérieur : une seule hauteur comble le trou, donc il n'a que 4 outs. Depuis le flop, ces 4 outs rentrent 8,5 % du temps sur la carte suivante et 16,5 % d'ici la river, soit environ 5 contre 1. Avec un tirage couleur en plus, le compte monte à 12 outs.

---

## À retenir

1. **Compte ce qui gagne, pas ce qui améliore.** Un out doit faire la *meilleure* main, pas seulement une main meilleure. Ne soustrais que les cartes que tu vois.
2. **Convertis avec la règle du 2 et du 4.** Outs × 4 au flop, × 2 à la turn. Au flop, rabote l'estimation ×4 des gros tirages (plus de 8 outs) en soustrayant *(outs − 8)*.
3. **Décompte les outs sales.** Couleurs non max, boards appariés et overcards contre la force réduisent tous ton vrai compte d'outs. Dans le doute, compte moins.

Maîtrise le compte et le reste des maths du poker se met en place. Emporte ton compte d'outs directement dans [comment calculer la cote du pot](/fr/blog/holdem-pot-odds) pour voir si le prix est bon, ou reviens au [tableau des probabilités au poker](/fr/blog/holdem-probability) complet pour le chiffre exact derrière chaque tirage.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes &amp; maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment calculer la cote du pot</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Transforme ton compte d'outs en call ou en fold</div>
  </a>
  <a href="/fr/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes &amp; maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tableau des probabilités au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">La référence complète derrière chaque tirage</div>
  </a>
  <a href="/fr/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Lecture du board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment lire le board</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Repère chaque tirage pour compter des outs propres</div>
  </a>
  <a href="/fr/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Mains de départ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Mains de départ : quelles mains jouer selon ta position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Entre dans les pots avec des mains qui valent le tirage</div>
  </a>
</div>
`.trim(),
};

export default POST;
