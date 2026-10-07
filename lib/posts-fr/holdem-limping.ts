import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-limping",
  title: "Le limp au poker : pourquoi « juste suivre » préflop te coûte des jetons",
  seoTitle: "Pourquoi « juste suivre » te coûte cher — Le limp au poker",
  desc: "Tu suis la blinde « juste pour voir le flop » ? Limper au poker est presque toujours une erreur : pourquoi, les cas où ça passe et comment punir les limpers.",
  tldr: "Limper, c'est entrer dans un pot préflop en suivant simplement la grosse blinde au lieu de relancer ou de se coucher. L'open-limp (être le premier à entrer) est presque toujours une erreur : un limp ne peut pas gagner les blindes sans combat, tu abandonnes l'initiative et les bons joueurs te punissent. Mais limper n'est pas toujours faux : compléter en petite blinde, over-limper des mains spéculatives derrière d'autres limpers et certains spots en live ou en short stack en tournoi sont des exceptions légitimes.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🚶",
  image: "/images/holdem-limping-hero.webp",
  imageAlt: "Un joueur de poker pousse discrètement ses jetons pour simplement suivre la grosse blinde préflop pendant que les autres attendent, illustration d'un limp passif",
  tags: ["limp poker", "limper poker", "limp poker definition", "limp poker c est quoi", "over limp poker", "open limp poker", "limp poker signification", "qu est ce que limper au poker"],
  content: `
Quand j'ai commencé à jouer, je limpais dans presque tous les pots. Ça me paraissait prudent — je voyais le flop pour pas cher, je ne risquais pas grand-chose et je « gardais mes options ouvertes ». Ce que je ne voyais pas, c'est que chaque joueur expérimenté de la table m'avait catalogué dès que je le faisais. Le limp est le signe le plus clair, aux petites limites, qu'un joueur ne sait pas encore vraiment ce qu'il fait — et pendant deux ans, ce joueur, c'était moi.

Un **limp**, c'est entrer dans un pot avant le flop en se contentant de *suivre* la grosse blinde, au lieu de relancer ou de se coucher. Ça a l'air anodin, et parfois ça passe — mais ==r:l'open-limp quand tu es le premier à parler== est l'une des habitudes les plus répandues et les plus coûteuses du jeu. Voici exactement ce qu'est le limp, pourquoi il perd de l'argent la plupart du temps, les spots précis où il est vraiment correct (il n'est pas *toujours* faux), et comment les bons joueurs transforment ton limp en profit pour eux. Bien comprendre ce seul concept est un saut plus grand qu'on ne le croit — c'est la décision numéro trois d'une [stratégie poker gagnante au Texas Hold'em](/fr/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp"), juste après le choix de ton siège et de ta main de départ.

---

### Le limp en bref

:::stripe
Suivre la grosse blinde | Ce qu'est un limp (sans relance)
0 % | De chances qu'un limp remporte les blindes sans combat
Open-limp | La version presque toujours fautive
Over-limp / SB | Les spots où c'est vraiment acceptable
:::

---

## Qu'est-ce qu'un limp au poker ? (Que signifie « limp » en français)

**Limper, c'est entrer dans le pot préflop en payant exactement le montant de la grosse blinde — sans relancer.** Tu mets le minimum pour voir un flop. Point essentiel : on ne parle de limp que si *personne n'a encore relancé* ; si quelqu'un a déjà relancé et que tu égalises, c'est un **call**, pas un limp. Le mot désigne précisément la route passive et la moins chère vers un pot non relancé.

En français, « limp » n'a pas vraiment de traduction courante : on dit **limper** (« il limpe ») et on appelle **limpeur** le joueur qui le fait. Il vaut la peine de séparer deux termes que beaucoup confondent. Un **limpeur** entre dans les pots non relancés en suivant la grosse blinde. Une **calling station** est un joueur qui paie trop et relance ou se couche rarement — une habitude qui se voit surtout au flop, à la turn (le tournant) et à la river (la rivière). Ils décrivent souvent le même joueur large-passif, mais ils pointent des habitudes différentes : l'un parle de la façon dont tu *entres* dans les pots, l'autre surtout de la façon dont tu *continues*. Ce guide du [jargon du poker](/fr/blog/holdem-glossary) remet le reste du vocabulaire en ordre si un terme te bloque.

---

## Open-limp et over-limp : pas la même chose

L'open-limp, c'est limper en étant le premier à entrer dans le pot ; l'over-limp, c'est limper derrière un joueur qui a déjà limpé. Avant de juger le limp, coupe-le en deux — une version est bien pire que l'autre :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Open-limp | Over-limp (limper derrière) |
|:---|:---|:---|
| **Quand** | Tu es le **premier** joueur à entrer dans le pot | Tu suis **après** qu'un autre joueur a déjà limpé |
| **Le problème** | Tu aurais pu relancer pour gagner immédiatement — et tu ne l'as pas fait | Moins grave : tu entres à prix réduit dans un pot multiway |
| **Verdict** | Presque toujours une erreur | Acceptable selon la situation, avec les bonnes mains |

</div>

La distinction compte parce que la plupart des conseils du type « le limp, c'est terrible » visent en réalité l'**open-limp** — être le premier à entrer et choisir de simplement suivre. Over-limper derrière d'autres joueurs est une décision vraiment différente, et souvent défendable. Garde les deux séparés et tout le sujet devient plus clair.

---

## Pourquoi limper est-il presque toujours une erreur ? (4 raisons)

Parce qu'un open-limp te fait perdre quatre choses d'un coup : la possibilité de gagner les blindes sans combat, l'initiative, un pot propre en tête-à-tête et l'opacité de ta range. Chacune coûte des jetons ; ensemble, elles font du limp en premier l'une des fuites les plus chères des petites limites. Voici exactement ce que tu abandonnes :

1. **Un limp ne peut pas gagner les blindes sans combat.** C'est la plus importante. Quand tu *relances* en premier, tout le monde peut se coucher et tu ramasses les blindes sans combat — de l'argent gratuit, une bonne partie du temps. Quand tu limpes, cette chance vaut **zéro**. Tu t'obliges à toucher une main ou à gagner plus tard ; tu as jeté la façon la plus propre de gagner.
2. **Tu abandonnes l'initiative.** Le relanceur préflop est « l'agresseur » — c'est lui qui peut tirer un [c-bet (continuation bet, ou « mise de continuation »)](/fr/blog/holdem-continuation-bet) au flop et représenter une main forte, en prenant souvent le pot avec rien. Limpe, et tu as donné cette histoire à quelqu'un d'autre. Tu réagis au lieu de mener.
3. **Tu gonfles un pot multiway — souvent hors de position.** Limper invite d'autres suiveurs et laisse entrer la grosse blinde à bas prix. Plus il y a de joueurs au flop, moins ta main vaut, et si tu as limpé en début de parole tu seras *hors de position* face à presque toute la table à chaque tour, sans initiative. C'est la pire place de la salle.
4. **Tu deviens lisible — et exploitable.** Les limpeurs réguliers arrivent avec une range plafonnée et transparente. Les bons joueurs l'attaquent sans relâche (on y revient plus bas), et tu te retrouves sans cesse dans des spots délicats hors de position. Comme dit le vieil adage, les limpeurs chroniques « gagnent de petits pots et perdent les gros ».

---

## Pourquoi relancer en premier bat le limp

![Guide visuel montrant trois options — RAISE en doré avec une coche, LIMP en rouge avec un avertissement, et FOLD en gris neutre](/images/holdem-limping-raise-or-fold.webp "Le réflexe qui te garde devant la table : relancer ou se coucher quand tu entres en premier, et traiter l'open-limp comme l'option à éviter")

Tout l'argument pour relancer plutôt que limper tient à une asymétrie : **une relance peut gagner le pot immédiatement ; un limp, jamais.** Quand tu ouvres en relançant, tu te donnes *deux* façons de gagner — tout le monde se couche préflop, ou tu remportes le pot plus tard avec l'initiative de l'agresseur. Limper ne te laisse que la seconde, la plus difficile, et t'enlève la fold equity qui rend l'agression préflop rentable.

Il y a un second avantage, plus discret : relancer **refuse de l'équité** aux blindes. Si tu limpes, la grosse blinde voit le flop pour pas cher avec la main au hasard qu'elle a reçue, et parfois elle te bat. Une relance lui fait payer le droit de continuer et la fait souvent coucher, donc sa main médiocre n'a jamais l'occasion de te dépasser. C'est pour ça que « relance ou couche-toi » est le réflexe par défaut d'un bon joueur — et pourquoi entrer en relançant va si naturellement avec une [sélection de mains de départ](/fr/blog/holdem-starting-hands-chart) disciplinée.

---

## Quand le limp est-il acceptable ? (petite blinde, multiway)

Le limp est acceptable en petite blinde dans un pot non relancé, en over-limp derrière d'autres limpeurs avec des mains spéculatives, aux tables live très passives et dans certains spots de tournoi en short stack. C'est là que le dogme va trop loin : la réponse honnête et moderne est que **l'open-limp en premier est presque toujours une erreur, mais plusieurs spots précis sont des exceptions légitimes :**

![Plusieurs joueurs ont limpé dans le même coup : de petites piles de jetons sont poussées autour du feutre vert dans un pot multiway bon marché](/images/holdem-limping-multiway.webp "Over-limper derrière d'autres joueurs dans un pot multiway bon marché, c'est là que les mains spéculatives comme les petites paires peuvent vraiment rapporter")

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Spot | Pourquoi le limp passe ici |
|:---|:---|
| **Compléter la petite blinde (pot non relancé)** | Personne n'a relancé, ta mise est en général déjà à moitié posée et seule la grosse blinde parle après toi — la règle « relance ou couche-toi » ne tient plus face à ce rabais. Face à une relance, c'est une autre question : par défaut, 3-bet ou couche-toi. |
| **Over-limper des mains spéculatives** | Derrière d'autres limpeurs, avec des petites paires ou des connecteurs assortis, tu as d'excellentes cotes pour toucher un monstre dans un pot multiway. |
| **Live très passif à petites limites** | Si les adversaires ne relancent qu'avec des monstres et ne punissent jamais les limpeurs, tu peux voir des flops bon marché avec des mains spéculatives et réaliser ton équité. |
| **Short stack en position tardive (tournois)** | Avec des stacks courts en tournoi — bien en dessous des 100bb d'un cash game standard — les solvers modernes construisent des ranges d'open-limp au bouton, où une relance rapporte peu et le limp réduit ton coût. |

</div>

Le plus utile de ces cas au quotidien, c'est l'**over-limp avec les petites paires servies.** Des paires de deux jusqu'à, disons, sept ne touchent un brelan servi (set) au flop qu'environ **11,8 % du temps** (à peu près 1 fois sur 8,5) ; seules, elles ne valent donc pas la peine de construire un gros pot. Mais limper *derrière* d'autres limpeurs à bas prix, dans un pot multiway où tu seras payé quand tu touches, met les [cotes implicites](/fr/blog/holdem-pot-odds) de ton côté. Tu fais du set-mining — et c'est une raison légitime de limper avec les autres. Note simplement que le sol bouge sous le mantra « ne limpe jamais » : les travaux de solver de 2026 ont discrètement réhabilité le limp dans une poignée de spots à stacks courts et multiway. C'est de la nuance, pas un permis d'open-limper toute ta range.

---

## C'est quoi un limp-reraise ?

Un **limp-reraise** (ou limp-raise) est un piège : tu limpes, tu attends qu'un adversaire relance derrière toi, puis tu le *surrelances*. Joué avec un monstre comme une paire d'as ou de rois à une table agressive, il peut construire un gros pot tout en ayant l'air faussement faible.

Le hic, c'est qu'il est devenu **transparent.** Comme presque personne ne limpe *en ayant l'intention* de se coucher, un limp-reraise crie aujourd'hui une range très étroite et très forte — pense TT+ et AK/AQ — à n'importe quel adversaire qui réfléchit. Il se couche simplement avec tout sauf ses propres premiums, et ton « piège » gagne un pot minuscule ou le laisse s'en tirer à bon compte. Il garde des usages de niche (spots de tournoi en short stack, exploiter un relanceur hyper-agressif), mais comme ligne par défaut contre des joueurs corrects, il est plus joli que rentable. Traite-le comme un outil occasionnel, pas comme un coup de base.

---

## Le limp est-il une preuve de faiblesse ? Que faire face à un ou plusieurs limpers

![Schéma d'une table à six places — le siège marqué en rouge a limpé pour un seul jeton, quatre sièges se sont couchés et sont barrés avec les jetons posés des blindes laissés derrière, et le bouton répond en doré avec une pile bien plus grosse, une flèche pointée vers le limpeur](/images/holdem-limping-isolation-raise.webp "Un jeton te fait entrer — et c'est le joueur au bouton qui décide combien le pot va te coûter")

Oui — dans la plupart des parties, un open-limp est un panneau clignotant qui dit *« joueur faible et passif ici »*. C'est d'ailleurs ce qui rend cette habitude si coûteuse : les joueurs habiles ne se contentent pas de la remarquer, ils l'**attaquent** :

- **La relance d'isolation (iso-raise).** Quand un bon joueur te voit open-limper, il relance fort derrière toi — une « iso-raise » — pour faire coucher tous les autres et se retrouver en tête-à-tête avec toi, en position, avec l'initiative. Te voilà à jouer un pot plus gros que prévu, hors de position, contre quelqu'un qui te surclasse à chaque tour.
- **De la value fine et des c-bets sans relâche.** Face à une range de limp plafonnée (peu ou pas de mains premium, puisque tu les relancerais en général), les bons joueurs misent sur plus de streets pour de la value plus fine et bluffent plus librement, sûrs que tu as peu de chances de tenir les mains les plus fortes.
- **L'abus de position.** Comme les limpeurs sont en général larges et passifs, les joueurs agressifs les surclassent tout simplement après le flop, en les faisant lâcher leurs mains moyennes et en leur soutirant de la value quand ils touchent.

Le remède est d'une simplicité rafraîchissante : **relance ou couche-toi par défaut, et garde le limp pour les spots précis vus plus haut.** Dès que tu arrêtes d'open-limper, tu cesses d'être la cible la plus facile de la table — et c'est justement la première chose qui te sépare du [fish](/fr/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp").

---

## Limper en live à petites limites ou en ligne (GTO) : quelle différence ?

La différence est énorme : en ligne et dans les parties difficiles, l'open-limp est presque indéfendable, alors qu'aux tables live très passives à petites limites il coûte beaucoup moins cher. Le contexte change tout : en **ligne**, les tables sont agressives, quelqu'un t'isolera presque à chaque fois, et la base GTO revient en gros à « pas d'open-limp dans une partie normale à 100bb » — sauf en petite blinde, où compléter reste défendable pour les raisons vues plus haut.

Dans les **parties live très passives à petites limites**, c'est un autre monde. Si la table laisse régulièrement les limpeurs voir des flops bon marché et que personne ne les punit, limper avec des mains spéculatives coûte bien moins cher — tu ne te fais pas isoler, et tu réalises ton équité avec des mains qui préfèrent ne pas affronter une relance. Ce n'est toujours pas *optimal* — et l'open-limp en début de parole reste la pire version — mais la pénalité est faible, et le set-mining dans un pot où presque toute la table est entrée peut rapporter gros. Lis ta table : plus la partie est douce et passive, plus tu peux te permettre de limper ; plus elle est dure, plus tu dois t'en tenir strictement à « relance ou couche-toi ».

---

:::readnext[À lire ensuite]
/fr/blog/holdem-position-play | Comment la position te fait gagner des pots | /images/holdem-position-play-hero.webp
/fr/blog/holdem-starting-hands-chart | Quelles mains jouer | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Qu'est-ce que limper au poker ?**

A. Limper, c'est entrer dans le pot avant le flop en suivant simplement la grosse blinde, au lieu de relancer ou de se coucher. C'est la façon la moins chère et la plus passive d'entrer dans un pot non relancé. On ne parle de limp que si personne n'a encore relancé — si quelqu'un a déjà relancé et que tu égalises, c'est un call, pas un limp.

**Q. Pourquoi le limp est-il mauvais au poker ?**

A. L'open-limp te fait perdre beaucoup : tu ne peux pas gagner le pot préflop comme avec une relance, tu abandonnes l'initiative qui permet à l'agresseur de gagner des pots avec un c-bet, et tu invites un pot multiway gonflé que tu joues souvent hors de position. En plus, il te désigne comme un joueur faible, donc les adversaires solides relancent pour t'isoler et t'exploiter.

**Q. Limper peut-il être une bonne stratégie ?**

A. Oui, dans des spots précis. Compléter depuis la petite blinde, over-limper des mains spéculatives comme les petites paires et les connecteurs assortis derrière d'autres limpeurs, les parties live très passives à petites limites et certaines situations de tournoi en short stack au bouton sont toutes légitimes. Ce qui est presque toujours faux, c'est l'open-limp — être le premier à entrer et choisir de simplement suivre au lieu de relancer.

**Q. Quelle est la différence entre open-limp et over-limp ?**

A. L'open-limp, c'est quand tu es le premier à entrer dans le pot et que tu te contentes de suivre la grosse blinde — presque toujours une erreur, parce que tu aurais pu relancer pour le gagner directement. L'over-limp (limper derrière), c'est suivre après qu'un autre joueur a déjà limpé ; c'est plus défendable parce que tu entres à prix réduit dans un pot multiway, ce qui convient aux mains de set-mining.

**Q. Que signifie limp-reraise ?**

A. Un limp-reraise, c'est quand tu limpes, qu'un adversaire relance derrière toi et que tu le surrelances — classiquement un piège avec une main très forte comme une paire d'as ou de rois. Le problème, c'est qu'il est devenu transparent : il représente une range si étroite et si forte (en gros TT+ et AK/AQ) que les bons joueurs se couchent avec tout le reste. Il a des usages de niche, mais ce n'est pas une ligne par défaut fiable.

**Q. Faut-il parfois open-limper préflop ?**

A. Presque jamais dans un cash game normal. Si une main est assez bonne pour être jouée, elle est en général assez bonne pour être relancée ; sinon, couche-toi. Compléter la petite blinde dans un pot non relancé est un cas à part (souvent correct — voir la question suivante) ; au-delà, les rares exceptions sont les parties live extrêmement passives où tu ne seras pas puni, et certains spots de tournoi en short stack en position tardive identifiés par les solvers. Par défaut, relance ou couche-toi et oublie l'open-limp.

**Q. Faut-il limper en petite blinde ?**

A. Souvent, oui — dans un pot non relancé, compléter la petite blinde est l'un des limps les plus défendables. Ta mise est en général déjà à moitié posée, seule la grosse blinde peut parler après toi et tu as un bon prix, donc la logique habituelle « relance ou couche-toi » ne s'applique pas de la même façon. Compléter, relancer ou te coucher dépend de ta main et des tendances de la grosse blinde, mais limper ici est loin de l'erreur qu'est l'open-limp aux autres positions. (Face à une relance, le réflexe par défaut de la petite blinde est de 3-bet ou de se coucher — presque jamais de suivre.)

**Q. Quelle différence entre un limpeur et une calling station ?**

A. Un limpeur entre dans les pots non relancés en suivant simplement la grosse blinde avant le flop — c'est une question de façon d'*entrer* dans les pots. Une calling station paie trop et relance ou se couche rarement, à n'importe quel tour — l'étiquette parle surtout de la façon de *continuer*, en particulier après le flop. Le même joueur large-passif fait souvent les deux, mais les termes pointent des habitudes différentes et ne sont pas interchangeables.

**Q. Comment appelle-t-on un joueur qui limpe beaucoup ?**

A. En général un « fish » — le terme courant pour un joueur faible et perdant — ou un « donk » (qui joue mal). (On colle souvent aussi l'étiquette « calling station » au même joueur, mais ce terme désigne le fait de trop payer à n'importe quel tour, pas spécifiquement l'habitude de l'open-limp.) L'open-limp systématique est l'un des signes les plus clairs d'un joueur inexpérimenté, et c'est exactement pour ça que les joueurs plus forts ciblent les limpeurs avec des relances d'isolation. Si tu ne veux pas porter l'étiquette, adopte par défaut « relance ou couche-toi ».

**Q. Que signifie « limp » en français ?**

A. « Limp » vient de l'anglais *to limp* (« boiter ») — l'image d'un joueur qui entre dans le pot sans conviction — et n'a pas de traduction consacrée : les joueurs français disent « limper » et « limpeur ». Le sens est précis — entrer dans le pot préflop en payant exactement la grosse blinde, sans relancer, alors que personne n'a encore relancé. Si quelqu'un a déjà relancé et que tu égalises, ce n'est plus un limp mais un call.

**Q. Que faire quand plusieurs joueurs limpent ?**

A. Le plus souvent, attaque-les plutôt que de suivre : une relance d'isolation (iso-raise) forte derrière les limpeurs fait souvent coucher le reste de la table et te donne un pot en tête-à-tête — en position si tu parles après eux — avec l'initiative, contre une range plafonnée. Ensuite, mise sur plus de streets pour de la value plus fine et bluffe plus librement. Avec une petite paire ou un connecteur assorti et un bon prix, over-limper derrière eux pour faire du set-mining dans un pot multiway reste une option légitime.

---

## À retenir : les 3 choses à garder

1. **Limper, c'est suivre la grosse blinde au lieu de relancer** — et l'open-limp, quand tu es le premier à entrer, est presque toujours une erreur : un limp ne peut pas gagner les blindes sans combat, tu abandonnes l'initiative et tu te désignes comme une cible facile.
2. **Mais ce n'est pas *toujours* faux.** Compléter la petite blinde, over-limper des mains spéculatives derrière d'autres limpeurs et les spots live passifs ou de tournoi en short stack sont des exceptions légitimes. Le dogmatique « ne limpe jamais » est exagéré.
3. **Par défaut, relance ou couche-toi.** Garde le limp pour ces spots précis, et tu arrêteras d'offrir aux bons joueurs des occasions gratuites de t'isoler et de t'exploiter.

Corriger ton limp est l'une des progressions les plus rapides au poker — ça ne coûte rien à apprendre et ça arrête immédiatement la fuite de jetons qui fait de toi la cible la plus facile de la table. Associe « relance ou couche-toi » à une [sélection de mains de départ](/fr/blog/holdem-starting-hands-chart) solide et à une vraie conscience de ta [position](/fr/blog/holdem-position-play), et tu auras discrètement quitté le groupe que tous les autres essaient de battre.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Jouer sa position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi limper hors de position fait le plus mal</div>
  </a>
  <a href="/fr/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les mains de départ</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Ce qui vaut vraiment une relance</div>
  </a>
  <a href="/fr/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Lexique</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">C'est quoi un fish ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les habitudes passives qui trahissent un joueur faible</div>
  </a>
  <a href="/fr/blog/holdem-glossary" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Lexique</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Le jargon du poker de A à Z</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tout le vocabulaire de la table, expliqué</div>
  </a>
</div>
`.trim(),
};
