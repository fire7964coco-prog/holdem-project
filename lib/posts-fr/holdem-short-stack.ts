import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-short-stack",
  title: "Comment jouer un short stack au poker ? Stratégie tournoi à 15, 10 et 5 BB",
  seoTitle: "Short stack en tournoi de poker ? Jouer à 15, 10 et 5 BB",
  desc: "Short stack en tournoi de poker ? Voici quand faire tapis à 15, 10 et 5 big blinds, les zones de la valeur M de Harrington et le piège ICM sur la bulle.",
  tldr: "Un short stack (en gros sous 20–25 big blinds) ne joue plus un poker postflop normal : vers 15 big blinds, il passe en push or fold. Fais tapis first-in pour garder ta fold equity, sans limper ni min-raiser pour folder ensuite. Shove plus large en position tardive, garde une range de call plus serrée que ta range de shove, et ne fonds pas « en attendant une main » : ta fold equity est ton arme, et elle s'effondre sous 8 big blinds environ.",
  category: "tournament",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-09-24",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "📉",
  image: "/images/holdem-short-stack-hero.webp",
  imageAlt: "Un short stack de jetons de tournoi à côté d'un gros stack sur la feutrine verte, l'horloge du tournoi en arrière-plan — le moment où le joueur en short stack doit faire tapis ou se coucher",
  tags: ["short stack poker", "short stack tournoi", "short stack poker strategy", "stratégie short stack poker", "m ratio poker", "valeur m de harrington", "fold equity poker", "tapis effectif poker", "all in poker tournoi"],
  content: `
Je ne suis jamais passé aussi vite de « encore en vie » à « éliminé » que le soir où j'ai min-raisé encore et encore avec un stack de 12 big blinds, en foldant à chaque relance, et en perdant une blinde et demie à chaque orbite jusqu'à être trop court pour faire peur à qui que ce soit. Quand j'ai enfin fait tapis, il me restait quatre big blinds et deux joueurs m'ont payé. ==Je n'ai pas été malchanceux — j'ai joué un short stack comme s'il était profond.== Dès que ton stack devient petit, tout le jeu change, et ce sont les joueurs qui connaissent les nouvelles règles qui mènent la table.

==Un short stack n'a qu'une mission : faire tapis first-in (premier à entrer dans le coup), garder sa fold equity et choisir le bon moment avant que les blindes ne le choisissent à sa place.== C'est le poker en push or fold, et c'est l'avantage le plus facile à apprendre en tournoi — un ensemble de règles nettes que tu appliques dès que ton stack fond. Cet article est le chapitre « action » de la trilogie des maths de tournoi : [l'ICM (Independent Chip Model)](/fr/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") est la théorie, [la bulle](/fr/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp") est le moment critique, et le jeu en short stack, ce sont les coups que tu joues vraiment dans le [tournoi](/fr/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp").

---

### Les règles du short stack en bref

:::stripe
shove first-in | garde ta fold equity
call plus serré | que ton shove
~8bb | la fold equity s'efface en dessous — agis plus tôt
:::

---

## C'est quoi un short stack au poker ? (et combien de big blinds)

**Un short stack (« petit tapis ») est un stack trop petit pour jouer un poker postflop normal — en gros sous 20–25 big blinds, le push or fold prenant le relais à partir d'environ 15 big blinds et en dessous.** Ce ne sont pas des seuils stricts ; ce sont les zones où tes options s'effondrent. Avec 60 big blinds, tu peux relancer, payer, flotter et surclasser tes adversaires après le flop. Avec 12, presque tout ça disparaît — tu décides, surtout avant le flop, si tu fais tapis ou si tu te couches.

Voici la carte pratique selon la profondeur de stack (approximations sans ante, table pleine — les antes font descendre chaque tranche un peu plus bas) :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stack | Mode de jeu | Ton arme principale |
|:--|:--|:--|
| 25bb+ | Encore un vrai jeu postflop — relance ou fold, quelques calls | La jouabilité |
| 20bb | Relance ou fold ; re-shove à tapis sur les ouvertures et les limpeurs | Le levier du re-shove |
| 15bb | Le push or fold prend le relais — shoves first-in, surtout en position tardive | La fold equity |
| 10bb | Push or fold pur ; shove first-in une range large et raisonnable | La fold equity (encore forte) |
| ≤5bb | Shove ou fold, tout de suite — la fold equity s'efface, mets tes jetons au milieu | Toute main jouable, vite |

</div>

La plus grosse erreur, c'est de ne pas savoir sur quelle ligne tu te trouves. Un stack de 12 big blinds qui continue d'ouvrir puis de folder joue le jeu des 40 big blinds et perd un peu à chaque orbite, jusqu'à se retrouver sur la ligne ≤5bb sans plus aucun levier.

---

## Push or fold : pourquoi le short stack fait tapis ou se couche ? La fold equity

**Faire tapis first-in marche parce que ça impose à tes adversaires une décision tout ou rien : ils lâchent des mains qu'ils joueraient volontiers face à une petite relance, et chacun de ces folds te rapporte les blindes et les antes gratuitement.** C'est ça, la ==fold equity== : le profit que tu encaisses chaque fois que tout le monde se couche, avant qu'une seule carte soit montrée.

Pense à ce que fait un min-raise quand tu es court : il engage des jetons, invite une relance que tu ne peux pas payer et laisse tes adversaires réaliser leur équité à bas prix. Un ==shove== fait l'inverse. Il dit « paie pour ton tournoi ou couche-toi », et la plupart des mains se couchent. Quand tu ramasses les blindes et les antes sans contestation assez souvent, ==tu es gagnant même les fois où tu es payé et où tu perds==, parce que les pots gratuits les financent largement.

Le hic, c'est que la fold equity ==diminue à mesure que ton stack fond==. À 12–15 big blinds, les adversaires se couchent beaucoup — ton shove fait peur. Elle commence à s'effacer vers 8–10 big blinds, et à 4–5, ils ont [une cote tellement bonne](/fr/blog/holdem-pot-odds) qu'ils paient avec presque n'importe quoi — ta fold equity a quasiment disparu. C'est toute la raison de ne pas attendre : ==fais tapis tant que ton all-in fait encore peur==, pas après.

---

![Un petit stack de jetons poussé à tapis sur la feutrine pendant qu'un plus gros stack décide de payer, l'horloge du tournoi allumée en arrière-plan](/images/holdem-short-stack-shove.webp "Push or fold en short stack : le all-in impose une décision oui ou non et rafle les blindes quand tout le monde se couche")

## Comment lire la valeur M de Harrington ? Zones verte, jaune, orange, rouge, morte

**La valeur M (le M de Harrington, ou ratio M) mesure combien d'orbites tu peux survivre en te couchant — ton stack divisé par le coût d'un tour complet de blindes et d'antes — et elle classe ton stack dans cinq zones.** Popularisée par Dan Harrington, ==M = ton stack ÷ (petite blinde + grosse blinde + toutes les antes par orbite)==. Elle répond à la question « combien de temps puis-je rester assis sans rien faire ? » — et plus elle baisse, plus tu dois agir.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Zone | Valeur M | En gros (sans ante) | Comment jouer |
|:--|:--:|:--:|:--|
| 🟢 Zone verte | 20+ | ~30bb+ | Arsenal complet, joue un poker normal |
| 🟡 Zone jaune | de 10 à moins de 20 | ~15–30bb | Resserre-toi, commence à chercher des shoves |
| 🟠 Zone orange | de 6 à moins de 10 | ~9–15bb | Push or fold ; agressivité first-in, vole les blindes |
| ⚠ Zone rouge | de 1 à moins de 6 | ~1,5–9bb | Shove ou fold avec toute main raisonnable |
| ⚫ Zone morte | moins de 1 | moins de ~1,5bb | Shove n'importe quelles deux cartes, au prochain spot jouable |

</div>

**Comment le M se convertit en big blinds :** sans ante, une orbite coûte la petite blinde plus la grosse blinde — environ 1,5 big blinds — donc ==M ≈ ton stack en big blinds ÷ 1,5==. Un M de 10 correspond à peu près à 15 big blinds ; un M de 5, à environ 7–8. Ajoute des antes et chaque orbite coûte plus cher : le même stack en big blinds a donc un M *plus bas* — et c'est exactement pour ça que les niveaux avec antes forcent l'action plus tôt. Les joueurs modernes comptent en général simplement en big blinds, mais le M est la même idée dans une autre unité, et il intègre les antes automatiquement. Harrington a ensuite ajouté le « M effectif » (ajusté selon le nombre de joueurs à la table), car une table short-handed (à peu de joueurs) te ronge en blindes plus vite.

---

## Quand faire tapis ? Le shove first-in selon la profondeur de stack et la position

**Quand tu es le premier à entrer dans le pot avec un short stack, ta décision se résume à shove ou fold — et la largeur de ton shove dépend de la taille de ton stack et, tout autant, de ta position.** Plus ta position est tardive, moins il reste de joueurs derrière toi susceptibles de réveiller une grosse main — la probabilité que tout le monde se couche grimpe, et avec elle la ==fold equity== qui rend le shove rentable. C'est pour ça que ==ta range de shove s'élargit énormément vers le bouton==.

- **Position précoce, 12–15bb :** la plus serrée. Toute la table est derrière toi, donc fais tapis avec une range forte, surtout linéaire, et couche le reste.
- **Cut-off et bouton, 10–15bb :** beaucoup plus large. Avec deux ou trois joueurs encore à parler, tu fais tapis pour voler les blindes et les antes, et tu peux shover de nombreuses mains qui seraient un fold évident sous le pistolet (UTG).
- **Petite blinde, n'importe quel short stack :** la plus large de toutes en first-in — seule la grosse blinde peut payer, et tu as déjà de l'argent dans le pot. En short stack en petite blinde, c'est souvent le fold qui est l'erreur.
- **Sous ~6bb :** la position compte moins. Tu dois mettre tes jetons au milieu contre à peu près n'importe qui avant que ta fold equity disparaisse ; prends le prochain spot raisonnable au lieu d'attendre le spot parfait.

Remarque le piège que ça évite : ==un short stack qui ne fait tapis qu'avec des mains premium depuis toutes les positions se fait manger par les blindes==. Les blindes et les antes sont le butin, et les voler représente l'essentiel du profit d'un short stack.

---

## Shove ou call d'un shove : pourquoi deux ranges différentes ?

**Ta range de shove first-in et ta range pour payer le all-in d'un autre joueur ne sont pas les mêmes — et la range de call est beaucoup plus serrée.** C'est la distinction que la plupart des débutants ratent, et elle coûte beaucoup de tournois.

Quand tu ==shove first-in==, tu gagnes de deux façons : tout le monde se couche (la fold equity), ou tu es payé et ta main tient. Quand tu ==paies== un shove, tu ne gagnes que d'une façon — ta main doit être assez bonne, parce qu'il n'y a plus de fold equity à encaisser. Donc :

- **Shove first-in :** large, surtout en position tardive — tu joues en partie pour le fold.
- **Call d'un shove :** serré — il te faut une main qui bat la *range* du shoveur, pas juste une main au hasard.

« Serré » veut dire plus serré que ta range de shove, pas « seulement quand je suis sûr d'être devant ». Payer est une question de prix : en grosse blinde face à un shove de 10bb, tu risques 9bb pour gagner un pot de 20,5bb, donc la barre est à ==43,9 %== d'équité contre cette range. Les petites paires et les as faibles sont le *cœur* d'une range de call en grosse blinde précisément pour cette raison — même contre AKo, tout en haut de n'importe quelle range de shove, 22 fait ==52,65 %==. La fuite ne vient pas de la catégorie de main ; elle vient du réflexe « c'est sûrement un coin flip » au lieu de vérifier le chiffre (voir [quand se coucher](/fr/blog/holdem-when-to-fold)).

Une phrase à retenir : ==sois celui qui fait tapis, pas celui qui paie.== C'est dans l'agressivité first-in que vit le profit du short stack ; c'est sur les hero-calls de all-in que les short stacks meurent.

---

## Comment utiliser un tableau push or fold (et ses limites) ?

**Les tableaux push or fold indiquent quelles mains faire tapis ou payer à une profondeur de stack donnée, à partir de l'équilibre de Nash — mais ce sont une base de départ, pas une vérité révélée, et ils bougent avec les antes, la taille de la table et l'ICM.** Un tableau se présente en général en deux moitiés : un tableau **pusher** (ce qu'on shove first-in) et un tableau **caller** (ce qu'on paie face à un shove), ce qui correspond à la séparation shove/call vue plus haut.

Sers-t'en pour construire ton intuition, pas comme une loi de la nature :

- **Ils supposent des conditions précises.** Les tableaux de Nash standard ignorent les antes et l'ICM ; ajoute des antes et tes shoves s'élargissent, ajoute de la [pression de bulle/ICM](/fr/blog/holdem-bubble) et tes calls se resserrent nettement.
- **C'est un modèle heads-up / blindes seules.** Les vrais spots comptent plusieurs joueurs encore à parler, des reads et des paliers de gains (pay jumps) qu'un tableau ne voit pas.
- **Ce qu'il faut retenir de fiable, c'est la forme**, pas la main exacte : shove plus large en position tardive, paie plus serré que tu ne shoves, et fais tapis plus souvent à mesure que ton stack baisse. Pour le vrai chiffre dans un spot ICM ou de bulle réel, entre tes stacks et tes gains dans le [calculateur ICM](/fr/calculator) plutôt que de te fier à une range imprimée.

*(Une nuance pour les curieux : à 10–15 big blinds, les bons joueurs glissent parfois un petit min-raise avec des mains premium pour provoquer des shoves de mains dominées. Ça peut rapporter plus que le shove pur — mais c'est une option avancée. Le push or fold est le cadre fiable ; maîtrise-le d'abord.)*

---

## Que change l'ICM pour un short stack sur la bulle ?

**Voici la partie contre-intuitive : sur la bulle, un vrai short stack a souvent un bubble factor plus bas qu'un stack moyen — tu peux donc prendre plus de risques, mais seulement en faisant tapis, pas en payant.** Tout le monde suppose que le short stack est le plus sous pression. Selon les maths, ce n'est pas le cas : tu es déjà susceptible de sauter, et doubler t'aide énormément, donc ton risk premium (prime de risque) est plus bas que celui des stacks moyens piégés (l'[article sur la bulle](/fr/blog/holdem-bubble) explique pourquoi c'est le stack moyen le vrai prisonnier).

Ce que ça veut dire en pratique :

- **Continue de shover first-in** pour voler les stacks moyens qui couchent tout pour survivre — ce sont les cibles parfaites.
- **Tu peux attendre si d'autres sont plus courts.** Si deux joueurs ont moins de jetons que toi sur la bulle des places payées, tu peux folder les spots marginaux et les laisser sauter en premier, en grimpant les paliers gratuitement — mais seulement si tu as vraiment des jetons pour attendre, pas si tu es le plus court.
- **Ne fais pas de l'ICM une excuse pour tout coucher.** Folder jusqu'à ne plus avoir de fold equity pour « se faufiler jusqu'au min-cash » revient à échanger le tournoi contre son plus petit prix. Respecte le palier de gains, puis remets-toi à accumuler.

Les vrais calculs derrière « de combien mon bubble factor est-il plus bas » se trouvent dans l'[article sur l'ICM](/fr/blog/holdem-icm) — passe ton spot exact dans le [calculateur ICM](/fr/calculator) quand ça compte.

---

## Les 5 erreurs de short stack qui tuent ton tournoi

1. **Limper en premier (open-limp).** Ça abandonne ta fold equity et gonfle un pot que tu ne peux pas jouer postflop. Un short stack relance ou se couche — et en général, cette relance est un shove.
2. **Min-raiser puis folder avec du déchet.** Relancer un quart de ton stack et folder face à un shove, c'est le pire des deux mondes. Si une main n'est pas assez bonne pour partir à tapis, elle n'est pas assez bonne pour relancer.
3. **Payer des all-ins à l'instinct.** Ta range de call doit rester plus serrée que ta range de shove — mais « c'est sûrement un flip » est une supposition, pas une raison. Calcule plutôt le prix : en grosse blinde, la petite blinde morte fait qu'un vrai flip franchit déjà la barre en chip EV (cEV), et c'est la pression des paliers de gains, pas le flip lui-même, qui peut le transformer en fold. Deviner fait fuir des jetons dans les deux sens.
4. **Se laisser manger par les blindes jusqu'à n'avoir plus rien.** Attendre une paire d'as jusqu'à ce qu'il te reste trois big blinds, c'est jeter la fold equity qui rend le shove rentable. Agis tant que ton all-in fait encore peur (en général, avant de passer sous ~8–10bb).
5. **Ignorer la position.** Ne faire tapis qu'avec des premiums au bouton, ou shover trop large sous le pistolet, fait fuir des jetons dans les deux cas. Élargis en position tardive, resserre en position précoce.

Évite ces cinq erreurs et tu battras déjà la majeure partie du field, qui joue un short stack comme un stack profond jusqu'au moment de sauter.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-bubble | Comment jouer la bulle au poker ? Gros stack, stack moyen et short stack | /images/holdem-bubble-hero.webp
/fr/blog/holdem-icm | ICM au poker : l'Independent Chip Model expliqué, avec l'exemple à la main | /images/holdem-icm-hero.webp
:::

## FAQ

**Q. Un short stack, c'est combien de big blinds ?**

A. En gros, sous 20–25 big blinds environ, tu es « court », et le push or fold prend le relais à partir d'environ 15 big blinds et en dessous, pour devenir un shove-ou-fold presque pur vers 10. Ce sont des zones, pas des règles strictes — les antes, la taille de la table et l'ICM les déplacent toutes. L'essentiel : sous ~15 big blinds, tu décides surtout si tu fais tapis avant le flop, tu ne joues plus un poker postflop.

**Q. C'est quoi la stratégie push or fold ?**

A. Le push or fold est la stratégie du short stack où, quand tu es le premier à entrer dans le pot, tes seules options sont faire tapis ou te coucher — pas de limp, pas de petite relance. Le shove garde ta fold equity (les adversaires se couchent et tu gagnes les blindes) et t'évite de te faire surclasser après le flop avec un stack trop petit pour manœuvrer.

**Q. Que veut dire « all-in ou fold » au poker ?**

A. « All-in ou fold », c'est la même idée que le push or fold : quand tu es en short stack et le premier à entrer dans le pot, tes deux seules options sont faire tapis ou te coucher — pas de limp ni de petite relance. C'est aussi le nom d'un format en ligne rapide (All-in or Fold de GGPoker) où chaque décision préflop est littéralement shove ou fold. Dans les deux cas, la logique du short stack tient : garde ta fold equity en faisant tapis, et ne perds jamais de jetons sur une relance que tu ne peux pas défendre.

**Q. Comment réagir quand un adversaire fait tapis ?**

A. Couche-toi bien plus souvent que tu ne shoverais — ta range de call est beaucoup plus serrée que ta range de shove. Dès que tu paies un all-in, ta fold equity disparaît, donc ta main doit vraiment battre la *range* du shoveur, pas seulement avoir l'air jouable. Mets un chiffre dessus : en grosse blinde face à un shove de 10bb, tu risques 9bb pour gagner un pot de 20,5bb, il te faut donc ==43,9 %== d'équité — une barre que les petites paires et les as faibles franchissent souvent (22 fait ==52,65 %== même contre AKo). Paie quand ton équité dépasse cette barre, pas seulement quand tu es certain d'être devant.

**Q. Faut-il parfois limper en short stack ?**

A. Presque jamais quand tu es le premier à entrer. L'open-limp abandonne ta fold equity et construit un pot que tu ne sais pas jouer postflop. En short stack, le jeu standard est relance ou fold, et avec 15 big blinds ou moins, cette relance est en général un all-in. (Compléter depuis la petite blinde derrière d'autres limpeurs avec un tout petit stack est une rare exception.)

**Q. Le min-raise est-il parfois correct en short stack ?**

A. Comme réglage par défaut de débutant, non — min-raiser puis folder est une fuite classique. Comme coup avancé à 10–15 big blinds, les bons joueurs min-raisent parfois des mains premium pour provoquer des shoves de mains moins bonnes. Apprends d'abord un push or fold fiable ; n'ajoute la variante du min-raise qu'une fois que c'est devenu automatique.

**Q. C'est quoi la valeur M (M de Harrington) au poker ?**

A. La valeur M, c'est ton stack divisé par le coût d'une orbite (petite blinde + grosse blinde + antes) — le nombre de tours que tu peux survivre en te couchant. Les zones de Harrington sont la Zone verte (20+), la Zone jaune (de 10 à moins de 20), la Zone orange (de 6 à moins de 10), la Zone rouge (de 1 à moins de 6) et la Zone morte (moins de 1). Plus ton M est bas, plus tu dois prendre les spots shove-ou-fold. Sans ante, le M vaut à peu près tes big blinds ÷ 1,5.

**Q. C'est quoi la fold equity, et pourquoi diminue-t-elle ?**

A. La fold equity, c'est le profit que tu fais quand tes adversaires se couchent face à ta mise ou à ton shove. Quand tu es court et que tu fais tapis, la fold equity est ton arme principale — les blindes et les antes que tu ramasses gratuitement. Elle diminue à mesure que ton stack baisse, parce que tes adversaires obtiennent une meilleure cote pour payer ; sous environ 5 big blinds, ils paient si large que ton all-in ne fait presque plus coucher personne.

**Q. La stratégie short stack est-elle différente en cash game ?**

A. Oui. En cash game (ou « partie libre »), tu peux te recaver ou compléter ton stack à tout moment, et il n'y a en général ni antes ni paliers de gains : être court y est un état temporaire que tu corriges en te recavant — pas un mode de jeu. Le push or fold du short stack en tournoi existe parce que tu ne peux pas te recaver tard et que l'ICM donne de la valeur à la survie. Cet article porte sur les tournois.

**Q. C'est quoi un stack au poker ?**

A. Ton stack, ce sont les jetons que tu as devant toi. En tournoi, on le compte en big blinds plutôt qu'en jetons, parce que c'est ce nombre qui dit ce que tu peux faire : avec 60 big blinds, tu peux relancer, payer, flotter et jouer après le flop ; avec 12, presque tout ça disparaît et tu décides surtout, avant le flop, si tu fais tapis ou si tu te couches. C'est pour ça que tout cet article raisonne en big blinds.

**Q. Qu'est-ce que le tapis effectif au poker ?**

A. C'est le stack effectif (le « tapis effectif ») — le plus petit des deux stacks engagés. C'est lui qui fixe l'enjeu réel entre deux joueurs : aucun des deux ne peut perdre plus que ce montant face à l'autre dans le coup. Par exemple, en grosse blinde face à un shove de 10bb, si tu couvres le shoveur, c'est son stack de 10bb qui fixe le prix : tu risques 9bb pour gagner un pot de 20,5bb.

---

## À retenir

1. **Shove first-in, et garde ta fold equity.** Ne limpe jamais en premier et ne min-raise jamais pour folder ensuite. Les blindes et les antes gratuites représentent l'essentiel du profit d'un short stack.
2. **Paie plus serré que tu ne shoves.** Deux ranges différentes — les shoves first-in sont larges (tu gagnes aussi quand ils se couchent) ; les calls sont serrés (tu ne gagnes qu'à l'abattage, le showdown).
3. **Agis avant que ta fold equity meure.** Ne te laisse pas manger par les blindes en attendant une main. Élargis tes shoves en position tardive, resserre en position précoce, et mets tes jetons au milieu tant que ton all-in fait encore peur.

Le jeu en short stack, c'est là où les maths de tournoi deviennent des réflexes — associe-le à l'[ICM](/fr/blog/holdem-icm) et à la [stratégie de bulle](/fr/blog/holdem-bubble) pour savoir non seulement *comment* faire tapis, mais *quand* ça compte le plus.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-bubble" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment jouer la bulle au poker ? Gros stack, stack moyen et short stack</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Là où tes shoves en short stack comptent le plus</div>
  </a>
  <a href="/fr/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">ICM au poker : l'Independent Chip Model expliqué, avec l'exemple à la main</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi survivre peut valoir plus que des jetons</div>
  </a>
  <a href="/fr/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Quand se coucher au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quand le prix dit fold</div>
  </a>
  <a href="/fr/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Outil gratuit</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Calculateur ICM</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Calcule ton vrai spot de shove/call</div>
  </a>
</div>
`.trim(),
};

export default POST;
