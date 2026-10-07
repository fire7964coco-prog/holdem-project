import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-pot-odds",
  title: "Cote du pot au poker : la méthode en 10 secondes (pot odds)",
  seoTitle: "Ce call est-il rentable ? — Cote du pot au poker en 10 sec",
  desc: "Arrête de payer en espérant. Comment calculer la cote du pot au poker en 10 secondes : ratio ou pourcentage, tableau selon la mise, cotes implicites.",
  tldr: "Pour calculer la cote du pot, divise le montant que tu dois payer par le pot total une fois ton call ajouté. Payer $50 dans un pot de $150, c'est 50 ÷ 200 = 25 % : il te faut donc au moins 25 % d'équité pour que le call soit rentable.",
  category: "odds",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🧮",
  image: "/images/holdem-pot-odds-hero.webp",
  imageAlt: "La main d'un joueur pousse des jetons vers le pot au centre du tapis vert — l'instant où se joue une décision de cote du pot",
  tags: ["cote du pot", "cote du pot poker", "cote poker", "pot odds poker", "cote poker tableau", "cote du pot au poker", "équité nécessaire pour suivre", "règle du 2 et du 4"],
  content: `
Le mot le plus cher au poker, c'est « espoir ». J'ai passé ma première année à payer des mises sur la turn (le tournant) parce que mon tirage couleur *pouvait* rentrer sur la river (la rivière), et j'y ai laissé des jetons. Le soir où le déclic s'est fait, c'était un call de $50 dans un pot de $150 — pour une fois, j'ai fait le calcul, j'ai compris qu'il me fallait seulement 25 % pour être à l'équilibre, et je n'ai plus jamais regardé un call de la même façon.

==Les cotes du pot (pot odds) sont le seul calcul qui sépare le call au feeling du call qui a une raison.== Cinq minutes pour les apprendre, quelques sessions pour qu'elles deviennent automatiques. Ici, tu trouveras la ==g:méthode en 10 secondes==, un pense-bête des tailles de mise que tu peux visualiser à la table, et le point que la plupart des joueurs ratent : comment la cote du pot, l'équité (equity) et les cotes implicites (implied odds) s'emboîtent vraiment.

Les chiffres derrière tes tirages viennent du [tableau des probabilités au poker](/fr/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") — cet article te montre comment transformer ces chiffres en un bon call ou un bon fold.

---

### La cote du pot en un coup d'œil

:::stripe
25 % | Équité nécessaire face à une mise de la moitié du pot
33 % | Équité nécessaire face à une mise de la taille du pot
call ÷ (pot + call) | Toute la formule
:::

---

## C'est quoi, la cote du pot au poker ?

**La cote du pot, c'est le prix qu'on te propose pour continuer à jouer.** Elle compare la taille du pot à la mise que tu dois suivre — la récompense face au risque.

Imagine un pot de $150 et un call de $50 à payer. On t'offre ==$150 à gagner pour $50 risqués== — tu as « une cote de 3 contre 1 ». Plus le pot est gros par rapport au call, meilleur est ton prix, et moins tu as besoin de gagner souvent pour que suivre en vaille la peine.

Ce chiffre « à quelle fréquence tu dois gagner », c'est tout l'enjeu. Avec une cote de 3 contre 1, le call se rembourse si tu gagnes au moins **25 % du temps**. La cote du pot transforme un vague « je paie ou pas ? » en une cible nette : *est-ce que je gagne assez souvent pour battre ce prix ?*

---

## Comment calculer la cote du pot, étape par étape ?

> **Réponse rapide**
> Calcule d'abord le pot final, en comptant la mise que tu affrontes et ton propre call, puis divise ton call par ce total. Le résultat est le pourcentage d'équité qui te met à l'équilibre. Garde le même instant de référence pour le pot : l'argent déjà compté dans le pot actuel ne doit pas être ajouté une deuxième fois.

:::steps
Additionne le pot final | Pot actuel + la mise + ton call. Exemple : pot de $100 + mise de $50 + ton call de $50 = $200
Divise ton call par ce pot final | $50 ÷ $200 = 0,25
C'est ton équité nécessaire | Tu dois gagner au moins 25 % du temps pour que le call soit rentable
Compare-la à ton équité réelle | Tirage couleur avec 9 outs propres ≈ 35 % de toucher avec deux cartes à venir et plus aucune mise → 35 % bat 25 % → ==g:call==
:::

C'est tout. **Équité nécessaire = ton call ÷ le pot final.** Si ta vraie probabilité de gagner dépasse ce chiffre, suivre rapporte de l'argent sur le long terme — même si tu perds le coup plus souvent que tu ne le gagnes.

> **La règle qui dissipe toute confusion**
> Compte toujours ton propre call dans le pot final. « Avoir 3 contre 1 » et « avoir besoin de 25 % » décrivent le *même* spot — le ratio est le prix, le pourcentage est la cible. La plupart des erreurs de débutant viennent du mélange des deux conventions ; choisis le pourcentage et ne reviens plus en arrière.

---

## Ratio ou pourcentage : comment passer de 3 contre 1 à 25 % ?

> **Réponse rapide**
> Un ratio de cote du pot compare l'argent que tu peux gagner au call que tu risques ; un pourcentage dit à quelle fréquence ce risque doit payer. À 4 contre 1, tu risques une unité pour en gagner quatre, donc tu dois gagner une fois sur cinq : 20 %. Plus la récompense grossit pour le même call, plus le pourcentage d'équilibre baisse.

La conversion tient en une étape : un ratio de **X contre 1** signifie qu'il te faut **1 ÷ (X + 1)** en pourcentage.

| Ta cote… | Équité nécessaire |
|:---|:---:|
| 1 contre 1 | 50 % |
| 2 contre 1 | 33 % |
| 2,5 contre 1 | 28,6 % |
| 3 contre 1 | 25 % |
| 4 contre 1 | 20 % |
| 5 contre 1 | 16,7 % |
| 6 contre 1 | 14,3 % |

La logique est intuitive : plus le pot écrase le call, plus la part du gâteau dont tu as besoin pour justifier le call est petite.

---

## Quelle équité te faut-il pour suivre une mise ?

> **Réponse rapide**
> Face à une mise de la moitié du pot, il te faut 25 % d'équité pour suivre ; face à une mise de la taille du pot, 33 %, et face à une mise de deux fois le pot, 40 %. La cible dépend de la taille de la mise par rapport au pot, pas de son montant en dollars. Fixe d'abord cette cible, puis juge ta main face à la range qui te propose ce prix.

![Trois barres qui découpent le pot final en pot, mise et ton call — une mise de la moitié du pot demande 25 % d'équité, une mise de la taille du pot 33 %, une mise de 2× le pot 40 %](/images/holdem-pot-odds-required-equity.webp "L'équité nécessaire dépend entièrement de la taille de la mise que tu affrontes")

Mémorise ces sept repères pour chiffrer le call avant même de te demander si ta main est assez forte :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| L'adversaire mise | Ta cote | Équité nécessaire |
|:---|:---:|:---:|
| ¼ pot | 5 contre 1 | 16,7 % |
| ⅓ pot | 4 contre 1 | 20 % |
| ½ pot | 3 contre 1 | 25 % |
| ⅔ pot | 2,5 contre 1 | 28,6 % |
| ¾ pot | 2,3 contre 1 | 30 % |
| Taille du pot | 2 contre 1 | 33 % |
| 2× pot | 1,5 contre 1 | 40 % |

</div>

Même un énorme **overbet de 2× le pot ne demande que 40 % d'équité**. Tu n'as presque jamais besoin d'être favori pour suivre de façon rentable — une erreur de lecture fréquente qui pousse à se coucher sur des calls corrects. Plus la mise est grosse, plus il te faut d'équité, mais la courbe monte moins vite que la plupart des joueurs ne le pensent.

---

## Tableau des cotes du pot : quel tirage bat quelle mise ?

> **Réponse rapide**
> Qu'un tirage atteigne le prix dépend à la fois de ses outs propres et du nombre de cartes que ce call t'achète. La probabilité sur deux cartes d'un tirage couleur est bien plus élevée que sur une seule. Utilise la colonne qui correspond à ta vraie décision, et ne considère pas qu'une paire ou une couleur touchée gagne à coup sûr.

[Compte tes **outs**](/fr/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") avant d'utiliser le tableau. La ligne des deux overcards (cartes plus hautes que le board) à six outs suppose que n'importe quelle paire gagne ; retire les cartes qui font ta paire mais perdent encore contre les mains probables de l'adversaire.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Ton tirage | Outs | Chance de toucher, 1 carte (turn → river) | Chance de toucher, 2 cartes (flop → river) |
|:---|:---:|:---:|:---:|
| Couleur + quinte bilatérale | 15 | 32,6 % | 54,1 % |
| Tirage couleur | 9 | 19,6 % | 35,0 % |
| Tirage quinte bilatéral | 8 | 17,4 % | 31,5 % |
| Deux overcards | 6 | 13,0 % | 24,1 % |
| Gutshot (tirage ventral) | 4 | 8,7 % | 16,5 % |

</div>

Lis-le avec le tableau des tailles de mise ci-dessus. Face à une ==mise de la moitié du pot (25 % nécessaires)== : si la mise te met à tapis et que tu vois les deux cartes, un tirage couleur (35 %) est un call évident — mais sur une *seule* carte depuis le flop (9 ÷ 47), ce même tirage ne vaut que 19,1 %, ce qui **ne suffit pas** à lui seul à payer le prix. C'est exactement dans cet écart que les cotes implicites entrent en jeu.

---

## Cote du pot, équité, cotes implicites : quelle différence ?

> **Réponse rapide**
> La cote du pot fixe le prix, l'équité mesure la part du pot qui te revient en moyenne, et les cotes implicites estiment l'argent supplémentaire gagné plus tard. Commence par les deux premières. Ne compte un gain futur que s'il reste des jetons à gagner et un adversaire susceptible de payer ; compléter une deuxième meilleure main peut au contraire coûter plus cher.

:::compare
Terme | Ce que ça veut dire
Cote du pot | Le prix : call ÷ pot final = l'équité dont tu as *besoin*
Équité | Ta part attendue du pot à cet instant — les mains que tu gagnes plus ta part des égalités
Cotes implicites | Les jetons *en plus* que tu comptes gagner sur les streets suivantes si tu touches
:::

**Cote du pot contre [équité](/fr/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")**, c'est le cœur de la décision : suis quand ton équité bat ta cote du pot. Les [**cotes implicites**](/fr/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") départagent les tirages qui ratent le prix de peu. Si ton tirage couleur a besoin de 25 % mais n'a que 19,6 % sur la carte de la river, tu peux quand même suivre *si* tu vas soutirer assez de mises en plus quand tu touches pour combler la différence. Voilà pourquoi tu peux suivre une mise au flop avec un tirage de façon rentable, et pourquoi les stacks profonds rendent les tirages plus précieux.

Le revers de la médaille, ce sont les **cotes implicites inversées** — les jetons que tu vas *perdre* quand tu touches mais que tu perds quand même le coup (ta couleur rentre, mais le board se paire et quelqu'un a un full). Les tirages à la deuxième meilleure main font fuir l'argent en silence, et c'est pourquoi un [tirage couleur max (nut flush) vaut tellement plus qu'un petit tirage couleur](/fr/blog/holdem-starting-hands-chart).

---

## La règle du 2 et du 4 : des outs à la cote en un clin d'œil

> **Réponse rapide**
> Utilise la règle du 2 et du 4 pour estimer si un tirage s'approche du prix d'un call. Quatre fois tes outs donne une approximation pour deux cartes, deux fois tes outs pour une seule. Avant de choisir le multiplicateur, demande-toi si le call actuel t'emmène jusqu'à la river sans autre paiement ; une décision serrée mérite le tableau exact.

- **Au flop, avec deux cartes encore à venir :** multiplie tes outs par **4**.
- **À la turn, avec une carte à venir :** multiplie tes outs par **2**.

Un tirage couleur, c'est 9 outs. Au flop : 9 × 4 = **36 %** (valeur exacte 35,0 % — pile dans le mille). À la turn : 9 × 2 = **18 %** (valeur exacte 19,6 % — assez proche pour décider).

:::tip[La version ×4 suppose discrètement que tu verras les *deux* cartes restantes sans plus aucune mise — ce qui n'est garanti que lorsqu'aucune mise ne peut plus avoir lieu (tu es à tapis, ou tu as payé un tapis). S'il reste des mises à venir, appuie-toi sur le chiffre ×2 (une carte) pour la street qui est devant toi, et laisse les cotes implicites justifier le reste.]:::

Le détail des calculs pour chaque tirage et chaque main faite se trouve dans le [tableau des probabilités](/fr/blog/holdem-probability). Ici, le raccourci suffit.

---

## Quelles erreurs les débutants font-ils avec la cote du pot ?

> **Réponse rapide**
> Les erreurs de cote du pot qui coûtent cher : se tromper de pot final, compter des cartes qui perdent encore, et acheter une seule carte avec une estimation à deux cartes. L'argent futur peut aussi être imaginaire : un stack profond ne garantit pas d'être payé. Vérifie séparément le prix, les outs propres et les mises restantes avant de suivre un tirage.

Je les ai toutes faites avant qu'elles ne me mettent à sec. Surveille-les :

:::card
🧮 | Oublier de compter son call | L'équité nécessaire, c'est call ÷ pot *final* — compte tes propres jetons qui entrent, sinon tu surestimes l'équité nécessaire et tu te couches sur des calls que tu devrais faire
🃏 | Compter des outs « sales » | Un out couleur qui paire aussi le board peut donner un full à quelqu'un. Décote les outs sales (dirty outs) avant de te fier au chiffre
🚀 | Mal utiliser la règle du 4 | ×4 ne s'applique que si tu vois les deux cartes gratuitement (tapis). Face à une mise à la turn, c'est ×2 — utiliser ×4 te pousse à des calls perdants
💸 | Ignorer les cotes implicites et implicites inversées | Les stacks profonds récompensent les tirages ; un tirage non-nuts qui touche contre une main plus forte est un piège, pas un jackpot
🎯 | Payer sur l'espoir | « Ça peut rentrer » n'est pas une raison. Si ton équité ne bat pas ta cote du pot (cotes implicites comprises), c'est un fold

:::

### Une vraie main, du début à la fin

J'ai ==b:A♥ K♥== sur un flop ==Q♥ 7♥ 2♣== — le tirage couleur max, 9 outs. Le pot fait $100, l'adversaire mise $50. Ma cote du pot : 3 contre 1, donc il me faut **25 %**. Si je voyais les deux cartes, je serais à ~35 % — mais ce call n'achète que la turn, et la turn seule, c'est 19,1 %, en dessous du prix. Ce qui comble l'écart, ce sont les cotes implicites : si un cœur tombe, je prends tout le stack d'une top paire. ==g:Call facile.==

La turn est le 3♠ — une carte neutre (brick). Le pot fait $200 et l'adversaire fait tapis pour $200 — une mise de la taille du pot, donc je n'ai plus que 2 contre 1 et il me faut **33 %**. Or **avec une seule carte à venir, ma couleur ne vaut que 19,6 %** (je ne compte que les 9 cœurs — face à un tapis de la taille du pot, toucher une paire d'as ou de rois perd souvent encore, donc les overcards ne sont pas des outs propres). Le prix direct dit fold ; mes cotes implicites sont maintenant nulles, puisque l'adversaire est à tapis et ne peut plus rien me payer. Contre les brelans servis (sets) et les doubles paires qui font tapis sur une turn neutre comme celle-ci, 19,6 % est le meilleur cas — contre un brelan servi, le 2♥ et le 3♥ pairent le board et lui donnent un full, ce qui laisse 7 outs propres (7 sur 46 cartes non vues, environ 15,2 %) — et même si quelques top paires se glissent dans sa range, les overcards ne remontent le call qu'à peu près à l'équilibre. ==r:Fold== — exactement le spot où l'« espoir » me coûtait un stack.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-probability | Tableau des probabilités au poker | /images/holdem-probability-hero.webp
/fr/blog/holdem-starting-hands-chart | Les mains de départ à vraiment jouer | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Comment calculer la cote du pot rapidement ?**

A. Divise le montant que tu dois payer par le pot total *après* ton call. Payer $50 dans un pot de $150, c'est 50 ÷ 200 = 25 % — c'est l'équité qu'il te faut. Si ta probabilité de gagner — comptée seulement sur les cartes que ce call te laisse voir — la dépasse, suis.

**Q. Faut-il compter son propre call dans la cote du pot ?**

A. Oui. La formule de l'équité nécessaire utilise le pot *final*, qui inclut ton propre call. Payer $50 dans un pot de $150 donne un pot final de $200, donc 50 ÷ 200 = 25 %. Oublier ton call est l'erreur de débutant la plus fréquente.

**Q. Comment calculer la taille du pot au poker ?**

A. Le pot, ce sont tous les jetons déjà au milieu plus les mises faites sur la street en cours. Avant de calculer la cote du pot, additionne le pot de départ et la mise de l'adversaire — puis ajoute ton propre call dans le pot *final*. Exemple : un pot de $100, une mise de $50 et ton call de $50 font un pot final de $200.

**Q. Qu'est-ce qu'une bonne cote du pot au poker ?**

A. Plus elle est haute, mieux c'est — tu adorerais avoir « 5 contre 1 » (seulement 16,7 % nécessaires). Mais « bonne » dépend de ta main : 2 contre 1 (33 % nécessaires) marche avec un tirage couleur propre seulement si tu vas de toute façon voir les deux cartes (tapis, ou plus aucune mise — 35 %) ; ça ne paie pas le prix si le call n'achète qu'une carte (19,1 % depuis le flop, 19,6 % depuis la turn) ; et c'est terrible avec un gutshot. Compare toujours le prix à ton équité.

**Q. Comment convertir une cote en ratio en pourcentage ?**

A. Un ratio de X contre 1 devient 1 ÷ (X + 1) en pourcentage. Donc 3 contre 1 = 1 ÷ 4 = 25 % ; 4 contre 1 = 1 ÷ 5 = 20 %. C'est le pourcentage que tu compares à ta probabilité de gagner.

**Q. Quelle est la différence entre la cote du pot et les cotes implicites ?**

A. La cote du pot ne compte que les jetons présents dans le pot maintenant. Les cotes implicites ajoutent les jetons *en plus* que tu comptes gagner sur les streets suivantes si tu complètes ta main. Elles te permettent de suivre de façon rentable certains tirages que la cote du pot seule t'ordonne de lâcher — à condition que les stacks soient assez profonds pour te payer.

**Q. Quelle cote du pot donne une mise de la taille du pot ?**

A. Une mise de la taille du pot t'offre 2 contre 1, il te faut donc 33 % d'équité pour suivre. Une mise de la moitié du pot offre 3 contre 1 (25 % nécessaires) ; un overbet de 2× le pot offre 1,5 contre 1 (40 % nécessaires). Les grosses mises demandent plus d'équité, mais la hausse est faible : un overbet de 2× le pot demande 40 %, un overbet de 3× environ 43 %, un overbet de 5× environ 45 % — et aucune mise, aussi énorme soit-elle, ne demande jamais plus de 50 %.

**Q. Quelle fraction du pot faut-il miser ?**

A. La taille de mise est l'autre face de la cote du pot — ta mise fixe le prix que reçoit ton adversaire. Une mise de la moitié du pot lui offre 3 contre 1 (il lui faut 25 %), une mise de la taille du pot 2 contre 1 (il lui faut 33 %), et un overbet en demande encore plus. Mise plus gros sur les boards pleins de tirages pour priver les tirages d'un call rentable ; réduis ta mise quand tu veux qu'une main plus faible paie pour la value. Les tailles courantes vont de ⅓ du pot jusqu'à un pot entier selon le board et ton objectif.

**Q. Qu'est-ce que la règle du 2 et du 4 ?**

A. Un raccourci pour transformer tes outs propres en probabilité de toucher ton tirage : multiplie tes outs par 4 au flop (deux cartes à venir) ou par 2 à la turn (une carte à venir). Neuf outs couleur ≈ 36 % au flop, 18 % à la turn. N'utilise ×4 que si tu vois les deux cartes sans autre mise.

**Q. Quelle équité me faut-il pour payer une mise ?**

A. Exactement ta cote du pot exprimée en pourcentage : call ÷ pot final. Face à une mise de la moitié du pot, il te faut 25 % ; face à une mise de la taille du pot, 33 %. Pour un tirage, compte tes outs propres, convertis-les avec la règle du 2 et du 4 selon les cartes que ce call t'achète vraiment, et suis quand cette probabilité passe la barre — ou quand les cotes implicites comblent l'écart.

**Q. Mon équité doit-elle être supérieure ou inférieure à la cote du pot ?**

A. Supérieure. Ta cote du pot donne l'équité dont tu as *besoin* pour suivre (call ÷ pot final) ; ton équité, c'est ta part attendue du pot. Tu suis quand ton équité est *supérieure* à ce chiffre nécessaire et tu te couches quand elle est inférieure — sauf si les cotes implicites peuvent combler l'écart (l'argent que tu gagneras sur les streets suivantes quand tu touches). Si une mise de la moitié du pot demande 25 % et que ton tirage couleur propre a 35 % (avec deux cartes à venir — tu verras la turn et la river sans plus aucune mise), alors 35 % > 25 % → un call rentable.

---

## À retenir

1. **La formule :** équité nécessaire = ton call ÷ le pot final (ton call compris). Moitié du pot = 25 %, taille du pot = 33 %.
2. **La comparaison :** suis quand ton équité bat ta cote du pot. Pour un tirage, outs × 4 ou × 2 donne l'estimation — ne compte que les outs propres, et prends ×2 quand d'autres mises vont venir.
3. **Le départage :** les cotes implicites sauvent les tirages qui ratent le prix de peu — mais seulement s'il reste des jetons derrière à gagner et un adversaire susceptible de les payer ; tirer aux nuts rend ce gain plus sûr.

Fais-le quelques centaines de fois et ça cesse d'être du calcul pour devenir un réflexe. Tu lâcheras les calls sans espoir, tu feras les calls rentables et tu arrêteras de payer la « taxe de l'espoir ». Pour aller plus loin, affine les chiffres bruts derrière chaque tirage dans le [tableau des probabilités au poker](/fr/blog/holdem-probability), ou vérifie que tu entres dans les pots avec des mains qui valent le tirage grâce au [guide des mains de départ par position](/fr/blog/holdem-starting-hands-chart).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tableau des probabilités au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Chaque main, chaque flop, chaque tirage — les chiffres derrière le prix</div>
  </a>
  <a href="/fr/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Mains de départ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les mains de départ par position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Entre dans les pots avec des mains qui valent le tirage</div>
  </a>
  <a href="/fr/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Lecture du board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment lire le board au Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Compte tes outs en repérant chaque tirage</div>
  </a>
  <a href="/fr/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cash vs tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tournoi ou cash game</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi les cotes implicites sont plus profondes en cash game</div>
  </a>
</div>
`.trim(),
};

export default POST;
