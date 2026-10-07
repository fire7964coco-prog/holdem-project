import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Le c-bet (continuation bet) : quand miser au flop, de combien, et quand checker",
  seoTitle: "C-bet à chaque flop ? Ça te coûte — Continuation bet poker",
  desc: "Tu c-bet chaque flop par réflexe ? Le continuation bet au poker : quels flops miser ou checker, petit sur board sec, gros sur board humide, et la fréquence.",
  tldr: "Un continuation bet (c-bet) est une mise au flop faite par le joueur qui a relancé préflop. La règle moderne n'est pas « c-bet à chaque flop » : mise petit et souvent sur les flops qui favorisent ta range (boards hauts et secs comme K-7-2) et checke ceux qui favorisent ton adversaire (boards bas et connectés comme 7-6-5). Size petit, environ un tiers du pot, sur les boards secs et gros, deux tiers ou plus, sur les boards humides ; c-bet moins hors de position quand tu étais le seul relanceur (en tant que 3-betteur hors de position, ça passe à plus de 97 % sur les trois boards que nous avons résolus) et beaucoup moins en multiway.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "15 min",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "Un joueur de poker pose ses jetons sur un flop tout juste distribué après avoir relancé préflop, le moment classique du continuation bet sur le tapis vert",
  tags: ["cbet poker", "c-bet poker", "continuation bet poker", "cbet poker definition", "c est quoi cbet au poker", "cbet range poker", "cbet sizing", "cbet frequency", "delayed cbet poker", "cbet oop poker"],
  content: `
Pendant mes deux premières années, le « c-bet » était mon seul plan au flop. J'avais relancé préflop, donc je misais au flop. À chaque fois. Board avec un as : je misais. Board plein de quintes et de couleurs qui avaient visiblement touché le joueur qui m'avait payé ? Je misais quand même — et je me faisais relancer, payer, check-raiser, pot après pot. Je croyais que le c-bet *était* la stratégie. En réalité, le c-bet est un scalpel, et moi je le maniais comme un marteau.

Un **continuation bet (c-bet)** est une mise au flop faite par le joueur qui a relancé avant le flop. C'est la mise la plus fréquente du poker — et la plus mal utilisée. Le vieux conseil disait : « c-bet presque tous les flops ». La stratégie moderne, vérifiée au solver, dit quelque chose de plus utile et de plus rentable : ==mise sur les flops qui favorisent *ta* range, et checke ceux qui favorisent celle de ton adversaire.== Voici le plan de jeu complet du c-bet — quels flops, à quelle fréquence, de combien, en position et hors de position, en multiway, et quand checker est le coup gagnant. C'est la moitié « flop » d'une [stratégie de Texas Hold'em](/fr/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") gagnante.

---

### Le c-bet en chiffres

:::stripe
~2 sur 3 | La fréquence à laquelle une main rate le flop
⅓ du pot | La petite taille de « range bet » sur board sec
55–70 % | Un taux global de c-bet au flop sain
Check | Souvent le meilleur coup, pas un aveu de faiblesse
:::

---

## C'est quoi un c-bet au poker ? (continuation bet : définition)

**Un continuation bet est une mise faite au flop par le joueur qui était l'agresseur avant le flop** — le dernier à avoir relancé. On parle aussi de « mise de continuation » : tu « continues » l'histoire de force que tu as commencée préflop. Point essentiel : ==tu n'as pas besoin d'avoir touché le flop pour c-bet== ; une grande partie des bons c-bets se font avec des mains qui ont complètement raté.

Pourquoi ça marche ? À cause d'une statistique toute simple : **deux cartes privatives non appariées ne touchent aucune paire au flop environ deux fois sur trois (67,6 %).** Donc quand tu mises, ton adversaire a souvent raté lui aussi — et beaucoup de ces mains se couchent. Tu ne mises pas parce que tu es fort ; tu mises parce qu'*il est probablement faible* et que c'est toi qui as pris l'initiative.

Une fois que tu connais le c-bet au flop, le reste de l'« échelle des barrels » en découle :

- **Delayed c-bet** — tu *checkes* le flop, puis tu mises la turn (le tournant). Idéal dans les pots où le flop favorisait ton adversaire mais où la turn change la donne.
- **Double barrel** — tu c-bet le flop et tu mises *encore* à la turn.
- **Triple barrel** — tu mises les trois streets : flop, turn et river (la rivière). La ligne la plus agressive, pour une grosse main de value ou un bluff bien choisi avec des bloqueurs.

Si les [actions de mise](/fr/blog/holdem-betting-actions) de base — checker, miser, relancer — te paraissent encore floues, commence par là. Sinon, corrigeons l'erreur que presque tout le monde commet.

---

## Pourquoi « c-bet à chaque flop » est un conseil dépassé : ce qui a changé

Si tu as appris le poker avant les solvers, on t'a dit de c-bet environ deux tiers du pot sur *la plupart* des flops. Ça a marché un temps, parce que les adversaires se couchaient trop. Puis tout le monde a appris à riposter — en floatant, en check-raisant, en payant jusqu'au bout — et le c-bet systématique est devenu une fuite.

Voici ce que dit vraiment la stratégie moderne, parce qu'on se trompe facilement : **ce n'est PAS « c-bet moins partout ».** C'est une *séparation* :

- Sur les boards qui te favorisent, mise **petit et encore plus souvent** que l'ancien conseil — parfois avec toute ta range.
- Sur les boards qui favorisent ton adversaire, **checke beaucoup plus** — et mise plus gros et de façon plus sélective quand tu le fais.

Le concept qui est dessous, c'est l'==avantage de range== : quelle range est globalement la plus forte sur ce flop précis. En tant que relanceur préflop, tu as plus de grosses cartes et d'overpaires, donc **les boards hauts et secs t'appartiennent** — et les boards pleins de cartes moyennes connectées appartiennent au joueur qui a payé. Maîtrise cette seule idée et tu as déjà une longueur d'avance sur tous les joueurs « je c-bet et puis c'est tout » de la table.

Et l'avantage de range n'est pas toute l'histoire — ajoute la position par-dessus et l'effet devient extrême. Sur A-7-2 arc-en-ciel, un solver fait checker 98,2 % de sa range au joueur qui a payé, top paire comprise — l'équité de sa range n'est derrière qu'à 45,1 % contre 54,9 %, et pourtant le fait d'être hors de position transforme cet écart modeste en check quasi total. L'analyse complète est dans [top paire, et il checke quand même](/fr/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp").

---

## Sur quels flops faire un c-bet ? Tout dépend de la texture du board

![Un flop J-7-2 arc-en-ciel, sec et déconnecté, sur le feutre vert avec une petite pile de jetons misée devant, le type de board à carte haute qui appartient au relanceur préflop](/images/holdem-cbet-dry-board.webp "Les flops hauts, secs et déconnectés comme ce J-7-2 favorisent le relanceur préflop — les boards classiques du c-bet petit et fréquent")

C'est le cœur du c-bet. Avant de penser au sizing ou à la fréquence, pose-toi une seule question : **ce flop a-t-il touché ma range, ou celle de mon adversaire ?** Voici la carte :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Type de flop | Exemple | Qui il favorise | En position | Pourquoi |
|:---|:---|:---|:---|:---|
| **Haut, sec, déconnecté** | K‑7‑2, A‑8‑3 | **Toi (relanceur)** | Mise **souvent et petit** (⅓) | Tu as plus de top paires et d'overpaires ; lui a raté |
| **Bas, connecté** | 7‑6‑5, 9‑8‑6 | **Le joueur qui a payé** | **Checke davantage** ; mise gros et sélectif quand tu mises | Touche ses connecteurs assortis et ses petites paires |
| **Paire basse** | 8‑8‑3, 5‑5‑2 | **Toi (légèrement)** | Mise **souvent et petit** | Personne n'a souvent de brelan ; tes overcards et overpaires mènent |
| **Monocolore** | K♠9♠4♠ | Partagé — prudence | Mise **moins, plus petit** | Une couleur déjà faite plafonne les deux ranges ; joue à bas prix |
| **Bicolore et humide** | Q♥J♥7♣ | Plutôt le joueur qui a payé | **Polarise :** gros avec la value et les tirages, checke le vent | Des tirages partout — fais-les payer ou sors du coup |

</div>

Deux idées liées font tout le travail ici :
- **L'avantage de range décide de la *fréquence*.** Plus ta range est forte sur ce board → plus tu mises souvent.
- **L'avantage aux nuts décide de la *taille*.** Tu as plus de mains absolument max (brelans servis, quintes) → tu mises plus gros.

La subtilité : tu peux avoir l'un sans l'autre. Sur A‑8‑3 tu as bien plus de top paires (avantage de range), mais presque personne n'a de brelan servi, donc tu **mises souvent mais petit**. Sur un board où tu as beaucoup plus de brelans servis et d'overpaires, tu **mises gros**. Règle bien ces deux leviers et le sizing du c-bet cesse d'être une devinette.

---

## À quelle fréquence c-bet ? Fréquence et « cbet range »

Il n'existe pas un pourcentage de c-bet « correct » unique — celui qui te donne un seul chiffre te vend une fuite. La fréquence varie selon la position, le board et le nombre de joueurs dans le pot. Ta « cbet range », c'est donc la part de ta range que tu mises dans un spot donné, pas un quota fixe. Voici l'aide-mémoire :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Fréquence de c-bet approximative | Remarque |
|:---|:---:|:---|
| **En position, heads-up, board sec** | **70–100 %** (petit) | Le « range bet » classique — mise presque tout, tout petit |
| **En position, heads-up, board humide** | **~50–60 %** | Plus polarisé — la value et les tirages misent, le vent checke |
| **Hors de position, heads-up (pot relancé une fois, c'est toi le relanceur)** | **~30–45 %** | Checke beaucoup plus pour protéger ta range de check. En tant que *3-betteur* hors de position, ça s'inverse : plus de 97 % sur les trois boards que nous avons résolus, presque tout aux deux tiers du pot sur Q♥10♥7♠ et 8♦5♣2♠, mais surtout au tiers du pot sur A♦K♠2♥ (57,8 %) ; voir le [guide de la position](/fr/blog/holdem-position-play) |
| **Multiway (2 adversaires)** | **~50 % ou moins** | Quelqu'un a probablement touché — resserre |
| **Multiway (3 adversaires ou plus)** | **Mains fortes et bons tirages uniquement** | La fold equity a pratiquement disparu |

</div>

Comme bilan de santé, le taux global de c-bet au flop d'un joueur solide se situe autour de **55–70 %** sur l'ensemble des boards. Si tu c-bet plus de ~85 % des flops, tu joues en pilote automatique et les bons joueurs vont te punir ; sous ~40 %, tu es trop honnête et tu ne mises que quand tu touches. Mais garde en tête que ce chiffre est un *agrégat*, pas un objectif. Tu y arrives en misant sur les bons boards, pas en remplissant un quota.

---

## De combien c-bet ? Le sizing

Le sizing découle directement de la texture du board. Deux vitesses couvrent presque tout :

- **Petit — environ un tiers du pot** — sur les boards secs, statiques, où tu as l'avantage de range, surtout en position. La range de ton adversaire est faible et ne s'améliorera pas beaucoup, donc tu n'as pas besoin de faire payer des tirages ; une petite mise met déjà tout son vent en difficulté tout en gardant dans le coup les mains moins bonnes qui te paieront. Une mise plus grosse ne ferait que coucher les mains que tu *veux* voir suivre.
- **Gros — deux tiers du pot ou plus** — sur les boards humides et dynamiques, et chaque fois que ta range est polarisée. Là, tu dois faire payer les tirages couleur et quinte (leur refuser leur équité) et grossir le pot avec tes mains fortes. Une petite mise laisserait les tirages suivre trop bon marché.

Mettons de vrais chiffres. Disons que le pot fait ==$30== au flop :

- Un c-bet **au tiers du pot**, c'est ==$10== — ton range bet sur board sec.
- Un c-bet **aux deux tiers du pot**, c'est ==$20== — ta taille sur board humide, celle qui fait payer les tirages.

En **tournoi**, penche un peu plus petit : la petite taille reste au tiers, mais la grosse taille est plus souvent **la moitié du pot** que les deux tiers, parce que ton stack est précieux — en freezeout tu ne peux pas recaver, et même une re-entry coûte un nouveau buy-in. Quoi que tu choisisses, relie la taille au board, pas à l'habitude.

Tu veux voir jusqu'où va la vitesse « gros sur board humide » ? Un solver à qui l'on donne deux tailles sur Q♥10♥7♠ dans un pot 3-beté met [98,4 % de sa range dans la mise aux deux tiers](/fr/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp") — et la raison est un prix que tu peux calculer, pas une sensation.

---

## Faut-il c-bet hors de position (OOP) ?

![Un joueur de poker qui parle en premier hors de position, les doigts sur le feutre à côté de ses jetons, un adversaire qui attend dans l'ombre derrière](/images/holdem-cbet-oop.webp "Hors de position, tu parles en premier sans aucune information : tu checkes beaucoup plus et tu c-bet une range plus serrée et plus forte")

Le c-bet est bien plus difficile **hors de position (OOP)** dans un pot relancé une fois — quand tu dois parler en premier à chaque street sans savoir ce que ton adversaire va faire (en tant que 3-betteur, l'avantage de range change la donne, voir le [guide de la position](/fr/blog/holdem-position-play)). Deux ajustements :

1. **C-bet moins souvent.** Sans la position, tu contrôles moins bien le pot et tu réalises moins bien ton équité, donc tu checkes beaucoup plus — même des mains qui seraient des mises automatiques en position. Sur certains boards, un solver ne c-bet hors de position dans un pot relancé une fois qu'un quart du temps.
2. **Construis une vraie range de check.** Si tu ne mises que quand tu es fort et que tu checkes quand tu es faible, un adversaire attentif te lit comme un livre ouvert et attaque chacun de tes checks. Alors tu checkes volontairement *quelques* mains fortes aussi : tes checks restent dangereux et tout ton jeu devient plus difficile à affronter. C'est exactement pour ça que la [position](/fr/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") est un avantage structurel — les c-bets marchent tout simplement mieux quand tu parles en dernier.

---

## Faut-il c-bet dans un pot multiway ?

Le plus gros piège du c-bet, c'est de **tirer sur plusieurs adversaires comme si tu étais en heads-up.** Chaque joueur de plus dans le pot réduit fortement la probabilité que tout le monde ait raté — donc ta fold equity, le moteur même d'un c-bet en bluff, s'effondre.

La règle en multiway est simple : **mise tes mains faites fortes et tes meilleurs tirages pour la value et la protection, et checke presque tout le reste.** Contre deux joueurs, tu resserres déjà nettement par rapport à ta range de heads-up ; contre trois ou plus, un c-bet en bluff pur revient à brûler tes jetons, parce que quelqu'un a presque toujours un morceau du board. Le range betting — miser toute ta range petit — est une idée de *heads-up* et ne se transpose pas aux pots multiway. Dans le doute avec une main moyenne face à deux adversaires ou plus, checke.

---

## C'est quoi un delayed c-bet ?

Checker le flop n'est pas la fin de la main. Un **delayed c-bet** — checker le flop en tant que relanceur préflop, puis miser la turn — est l'un des coups les plus sous-utilisés du poker. Il brille quand :

- Le **flop favorisait ton adversaire** (un board bas et connecté), donc miser était mauvais — mais la **turn change le tableau** (une overcard, ou une carte qui fait monter ton équité).
- Tu as **checké derrière une main correcte** en position et tu veux prendre une street de value maintenant que le board est plus sûr.
- Tu veux **lui retirer sa relance au flop** : les joueurs qui comptaient relancer ton c-bet en bluff n'ont aucune mise à attaquer, et ils font ensuite face à ta mise à la turn.

Le delayed c-bet transforme un spot où un c-bet automatique t'aurait fait saigner des jetons en une mise contrôlée et informée, une street plus tard.

---

## Quand ne PAS c-bet ? Checker est une arme, pas un drapeau blanc

Rendons le « ne fais pas » explicite, parce que c'est là que l'argent s'économise :

- **Le board a écrasé la range de ton adversaire.** Un flop 7‑6‑5 ou 9‑8‑7 touche les mains qui paient une relance bien plus fort que les tiennes. Miser ici avec la plupart de ta range, c'est faire un don — checke bien plus souvent, et quand tu mises, mise gros et de façon sélective.
- **Tu es hors de position sur un board dynamique** avec une main moyenne. Tu parles en premier sans information : garde le pot petit et checke.
- **Tu es en multiway avec du vent.** Voir plus haut — pas de fold equity, pas de mise.
- **Ta main doit protéger une range de check.** Parfois tu checkes une main forte exprès pour que tes checks ne soient pas automatiquement faibles.

Le déclic qui fait de toi un gagnant : **checker n'est pas capituler.** Les bons joueurs checkent *beaucoup*, volontairement, et ça rend leurs mises bien plus effrayantes quand elles arrivent. Si tu te sens obligé de miser juste parce que tu as relancé préflop, ce réflexe te coûte de l'argent.

---

## Une vraie main de c-bet, du début à la fin

Deux spots de la même session montrent les deux côtés de la décision.

**Spot 1 — un c-bet d'école.** Je relance ==A♣K♦== et la grosse blinde paie. Flop : ==K♠ 7♦ 2♣.== C'est un board haut, sec et déconnecté qui appartient à ma range — et j'ai touché **top paire, meilleur kicker** : mon K♦ s'apparie avec le K♠, et l'as est le meilleur kicker possible (meilleure main de cinq cartes = K♦ K♠ A♣ 7♦ 2♣). Je mise **un tiers du pot** en range bet : ça met sous pression toutes ses mains ratées et ça garde dans le coup les rois et les paires moins bons. C-bet facile et rentable.

**Spot 2 — un check d'école.** Même session, je relance ==A♥Q♥== et la grosse blinde paie. Flop : ==7♠ 6♠ 5♦.== Ce board écrase exactement les mains avec lesquelles il a payé — connecteurs assortis, petites paires et quintes — alors que je n'ai qu'une hauteur as, sans paire ni tirage (aucun cœur au board, donc même pas de backdoor couleur). Deux ans plus tôt, j'aurais « continué » par habitude et je me serais fait relancer. Aujourd'hui, je **checke et j'abandonne.** Si une turn sans danger arrive et que je récupère de l'équité, le delayed c-bet reste possible ; sinon, j'ai perdu le minimum.

Même relance préflop, flops opposés, bons coups opposés. Toute la leçon est là : **c'est le board qui décide, pas le fait que tu as relancé.**

---

## Les 7 erreurs de c-bet les plus fréquentes

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| L'erreur | Pourquoi elle te coûte | La correction |
|:---|:---|:---|
| **C-bet chaque flop en pilote automatique** | Ignore que beaucoup de boards favorisent le joueur qui a payé | Lis d'abord la texture |
| **Miser gros avec une range large** | Une range large veut un petit sizing, pas un gros | Petit sur sec, gros seulement quand tu es polarisé |
| **C-bet léger en multiway** | La fold equity s'effondre avec plus de joueurs | Value et tirages uniquement contre 2 ou plus |
| **C-bet trop souvent OOP** | Tu réalises moins d'équité en parlant en premier | Checke plus, construis une range de check |
| **Miser sur un board qui l'a touché** | 7‑6‑5 a écrasé sa range, pas la tienne | Checke plus ; mise gros et sélectif quand tu mises |
| **Le barrel « une fois et c'est fini »** | C-bet au flop et abandonner toujours à la turn = facile à floater | Aie un plan pour la turn avant de tirer |
| **Triple barrel sans équité** | Bluffer tout un stack sans outs ni bloqueurs | Bluffe avec de l'équité de secours ou de bons bloqueurs |

</div>

Chacune remonte à la même racine : **c-bet en pilote automatique au lieu de lire le board.** Corrige ça et ton jeu au flop monte d'un niveau.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-strategy | Les 5 décisions derrière un poker gagnant | /images/holdem-strategy-hero.webp
/fr/blog/holdem-3bet | Comment 3-bet (et y faire face) | /images/holdem-3bet-hero.webp
:::

## FAQ

**Q. Qu'est-ce qu'un continuation bet au poker ?**

A. Un continuation bet, ou c-bet, est une mise faite au flop par le dernier joueur à avoir relancé avant le flop — l'agresseur préflop, ce qui inclut un joueur qui a 3-beté. Tu « continues » à représenter la force montrée préflop. Pas besoin d'avoir touché le flop pour c-bet : comme une main rate le flop environ deux fois sur trois, un c-bet bien choisi remporte souvent le pot quand ton adversaire n'a rien.

**Q. Pourquoi l'appelle-t-on « continuation bet » ?**

A. Parce que tu continues l'agression commencée avant le flop. Tu as relancé préflop pour prendre l'initiative, et la mise au flop prolonge cette histoire sur la street suivante. Si quelqu'un d'autre avait relancé préflop, ta mise au flop ne serait pas un c-bet — le terme désigne précisément le relanceur préflop qui mise le flop.

**Q. Faut-il c-bet à chaque flop ?**

A. Non — c'est l'erreur de c-bet la plus courante. Mise sur les flops qui favorisent ta range (boards hauts et secs comme K-7-2, où tu as plus de top paires et d'overpaires) et checke ceux qui favorisent ton adversaire (boards bas et connectés comme 7-6-5, qui touchent les mains avec lesquelles il a payé). Les bons joueurs punissent le c-bet systématique en pilote automatique.

**Q. À quelle fréquence faut-il c-bet ?**

A. Ça dépend de la position, du board et du nombre d'adversaires, alors prends ces chiffres comme des fourchettes, pas comme des règles : environ 70–100 % (avec une petite taille) en position en heads-up sur board sec, autour de 30–45 % hors de position en tant que relanceur dans un pot relancé une fois (plus en tant que 3-betteur), et 50 % ou moins en multiway. Un taux global de c-bet au flop sain tourne autour de 55–70 % — au-delà de 85 %, tu joues en pilote automatique.

**Q. De combien faut-il c-bet ?**

A. Adapte la taille au board. Sur les boards secs et statiques, mise petit — environ un tiers du pot — parce que la range de ton adversaire est faible et que tu n'as pas besoin de faire payer des tirages. Sur les boards humides et dynamiques, mise gros — deux tiers du pot ou plus — pour faire payer les tirages couleur et quinte et grossir le pot avec tes mains fortes. En tournoi, la grosse taille diminue — plus souvent la moitié du pot que les deux tiers — tandis que la petite reste au tiers.

**Q. Faut-il c-bet hors de position ?**

A. Moins souvent qu'en position quand tu étais le relanceur préflop dans un pot relancé une fois. En parlant en premier à chaque street sans information, tu réalises moins bien ton équité : tu checkes donc beaucoup plus — même certaines mains que tu miserais automatiquement en position — et tu gardes volontairement quelques mains fortes dans ta range de check pour que tes checks ne soient pas automatiquement faibles. La position rend les c-bets plus efficaces, point.

**Q. Faut-il c-bet dans un pot multiway ?**

A. Beaucoup moins qu'en heads-up. Chaque adversaire supplémentaire rend plus probable que quelqu'un ait touché, donc ta fold equity s'effondre. Contre deux joueurs ou plus, mise tes mains faites fortes et tes meilleurs tirages pour la value et la protection, et checke presque tout le reste. Bluffer contre trois joueurs ou plus est une façon classique de perdre de l'argent.

**Q. Qu'est-ce qu'un delayed c-bet ?**

A. Un delayed c-bet, c'est quand le relanceur préflop checke le flop puis mise la turn. C'est utile quand le flop favorisait ton adversaire (donc miser était mauvais) mais que la turn améliore ton équité, quand tu as checké derrière une main correcte en position, ou pour piéger les adversaires qui comptaient relancer ta mise au flop en bluff. C'est l'un des coups rentables les plus sous-utilisés du poker.

**Q. Quand ne faut-il PAS c-bet ?**

A. Ne c-bet pas par défaut quand le board a écrasé la range de ton adversaire (boards bas et connectés — checke plus, et mise gros et sélectif quand tu mises), quand tu es hors de position avec une main moyenne sur un board dynamique, quand tu es en multiway avec du vent, ou quand ta main préfère protéger une range de check. Checker dans ces spots n'est pas de la faiblesse — ça économise des jetons et rend tes futures mises plus crédibles.

**Q. Le c-bet est-il un bluff ?**

A. Parfois oui, parfois non — c'est tout l'intérêt. Beaucoup de c-bets sont des semi-bluffs ou des bluffs purs avec des mains qui ont raté, parce que ton adversaire a probablement raté aussi. D'autres sont des mises de value avec des mains fortes. Une stratégie de c-bet équilibrée mélange les deux sur les mêmes boards, pour que l'adversaire ne puisse pas savoir si ta mise au flop signifie de la force ou du vent.

**Q. Qu'est-ce qu'une value bet au poker ?**

A. Une value bet est une mise faite avec une main forte en espérant être *payé* par une main moins bonne — l'inverse d'un bluff, qui espère faire coucher une main meilleure. La plupart de tes c-bets sur les boards que tu as touchés sont des value bets : tu mises ta top paire ou ton brelan servi pour faire payer les paires et les tirages moins bons. Tout l'art est de choisir une taille que les mains plus faibles paient encore — une somme que ton adversaire peut se convaincre de payer.

**Q. Quel est un bon pourcentage de c-bet sur un HUD ?**

A. Autour de 55–70 % de c-bet au flop, c'est une fourchette saine et équilibrée. Au-delà d'environ 85 %, tu as affaire à quelqu'un qui c-bet trop et qu'on exploite en floatant et en relançant ; sous environ 40 %, c'est un joueur qui ne mise que quand il est fort, donc tu peux te coucher sereinement face à ses c-bets et attaquer quand il checke. Prends-le comme un bilan de santé, pas comme un objectif.

---

## À retenir : le plan de jeu du c-bet

1. **Un c-bet est une mise au flop du relanceur préflop** — et il marche parce que les mains ratent le flop environ deux fois sur trois.
2. **C'est le board qui décide.** Mise sur les boards hauts et secs qui favorisent ta range ; checke les boards bas et connectés qui favorisent celle de ton adversaire.
3. **L'avantage de range fixe la fréquence ; l'avantage aux nuts fixe la taille.** Mise souvent sur les boards que tu domines ; mise gros quand tu as plus de nuts ou que tu dois faire payer les tirages sur board humide.
4. **Petit (⅓) sur sec, gros (⅔ et plus) sur humide.** C-bet moins hors de position en tant que seul relanceur (en tant que 3-betteur hors de position, ça passe à plus de 97 % sur les trois boards que nous avons résolus), et beaucoup moins en multiway.
5. **Checker est une arme.** Les meilleurs joueurs checkent souvent et exprès — le c-bet est un scalpel, pas un marteau.

Maîtrise ça et tu arrêtes de brûler des pots sur des boards qui n'ont jamais été les tiens. Associe un c-bet affûté à un bon [jeu de 3-bet](/fr/blog/holdem-3bet), à une vraie conscience de la [position](/fr/blog/holdem-position-play) et au [cadre stratégique complet](/fr/blog/holdem-strategy), et ton jeu au flop laissera discrètement derrière lui la foule du « je mise chaque flop ».

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Le cadre des 5 décisions</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">La place du c-bet dans un jeu gagnant</div>
  </a>
  <a href="/fr/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Le 3-bet expliqué</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le c-bet commence aussi dans les pots 3-betés</div>
  </a>
  <a href="/fr/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Jouer ta position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi les c-bets marchent mieux en position</div>
  </a>
  <a href="/fr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Probabilités</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment calculer les cotes du pot</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi un gros c-bet fait payer les tirages</div>
  </a>
</div>
`.trim(),
};

export default POST;
