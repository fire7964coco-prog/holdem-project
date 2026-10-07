import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-3bet",
  title: "Le 3-bet au poker : quand surrelancer, de combien, et comment y faire face",
  seoTitle: "Surrelancer, mais quand et combien ? — Le 3-bet au poker",
  desc: "Ils 3-bet sans arrêt, toi jamais ? Le 3-bet (surrelance) au poker : quand 3-bet en value ou en light, le sizing calculé et quoi faire face à un 3-bet.",
  tldr: "Un 3-bet est la première surrelance avant le flop : on l'appelle ainsi parce que la grosse blinde est la première mise, l'open-raise la deuxième et ta surrelance la troisième. 3-bet pour la value avec un noyau serré (QQ+, AK) plus quelques bluffs assortis avec bloqueur comme A5s, size autour de 3 fois l'ouverture en position et 4 fois hors de position, et garde une fréquence globale de 3-bet proche de 6 à 10 %. Face à un 3-bet, 4-bet tes premiums, suis avec les mains qui jouent bien et couche-toi avec le reste, en te couchant plus que « l'équilibre » contre des joueurs de petites limites qui ne bluffent jamais.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "♦️",
  image: "/images/holdem-3bet-hero.webp",
  imageAlt: "Un joueur de poker pousse une pile de jetons vers l'avant pour surrelancer sous le regard du relanceur initial, un affrontement de 3-bet préflop sur le feutre vert",
  tags: ["3bet poker", "3 bet poker", "c'est quoi un 3 bet au poker", "quand 3 bet au poker", "3 bet light poker", "squeeze poker", "4bet poker", "surrelance poker", "squeeze poker definition", "face à un 3-bet"],
  content: `
La main qui m'a appris à quoi sert *vraiment* un 3-bet s'est passée comme ça : un joueur large ouvre, je regarde mes cartes, A-K, et — comme tous les débutants — je me contente de suivre. Le flop tombe avec un as, je ne mets pas un jeton de plus au milieu, et il se couche sur une seule mise. J'avais transformé la meilleure main en un pot minuscule. Une semaine plus tard, même spot, j'ai *surrelancé* à la place. Il a payé avec un as plus faible, a mis tout son stack sur un flop avec un as, et j'ai gagné cinq fois plus. Mêmes cartes. Une seule décision — le 3-bet — faisait toute la différence.

Le **3-bet** est l'une des armes les plus puissantes du No-Limit Hold'em, et aussi l'une des plus mal comprises. La plupart des guides ne te donnent que la moitié du tableau : comment *faire* un 3-bet, mais pas de combien, pas quelles mains sont des bluffs et pourquoi, pas quoi faire quand quelqu'un te 3-bet *toi*. Voici le ==**plan de jeu complet du 3-bet**== — définition, sizing avec les calculs vraiment détaillés, ranges de value et de light, le squeeze, la réponse à un 3-bet et les erreurs qui te coûtent des stacks sans bruit. C'est une pièce centrale d'une [stratégie de Texas Hold'em](/fr/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") gagnante — le principe [relancer ou se coucher](/fr/blog/holdem-limping), monté d'un cran.

---

### Le 3-bet en chiffres

:::stripe
3e mise | Pourquoi on dit « 3-bet » (la blinde = mise 1)
~3x / ~4x | Sizing : en position contre hors de position
6–10 % | Une fréquence globale de 3-bet saine
QQ+, AK | Le noyau de value sur lequel presque tout le monde s'accorde
:::

---

## C'est quoi un 3-bet au poker ? (la surrelance)

**Un 3-bet, c'est la première surrelance avant le flop** — tu surrelances un joueur qui a déjà ouvert en relançant. Si quelqu'un ouvre à 3 grosses blindes et que tu montes à 9, c'est un 3-bet.

Alors pourquoi parler de *trois*-bet alors que ce n'est que la deuxième relance ? Parce que le nom compte **les mises de la séquence, pas les relances.** La grosse blinde est une mise forcée — c'est la ==mise un==. L'open-raise est la ==mise deux==. Ta surrelance est la ==mise trois== — le 3-bet. Suis la chaîne vers le haut et le reste du vocabulaire se met en place tout seul :

- **4-bet** — la surrelance *par-dessus* un 3-bet (la quatrième mise). Très forte ou polarisée.
- **5-bet** — la surrelance par-dessus un 4-bet. À 100 grosses blindes, c'est en général un tapis.
- **Cold 4-bet** — un 4-bet venant de quelqu'un qui n'avait pas encore relancé (par exemple UTG ouvre, tu 3-bet, le bouton 4-bet « à froid »). Ça crie la force.

C'est toute l'échelle. Tout le reste de ce guide porte sur le premier barreau — quand y monter, jusqu'où, et quoi faire quand quelqu'un y monte contre toi. Si les [actions de mise](/fr/blog/holdem-betting-actions) de base — checker, suivre, relancer — sont encore floues, commence par là et reviens ensuite.

---

## Pourquoi 3-bet ? Ce qu'un 3-bet fait vraiment

Suivre un open-raise (on dit **flatter**) te garde dans le coup, mais un 3-bet fait quatre choses qu'un simple call ne fait pas :

1. **Il gagne souvent le pot tout de suite.** Une bonne partie du temps, le relanceur se couche et tu ramasses le pot avant le flop, sans abattage (showdown). Un flat ne fait jamais ça.
2. **Il construit un gros pot avec tes meilleures mains.** Quand tu tiens des as ou des rois, flatter laisse entrer trois autres joueurs pour pas cher. Le 3-bet isole le relanceur et fait entrer l'argent pendant que tu es grand favori.
3. **Il te donne l'initiative.** Tu deviens l'agresseur, c'est toi qui mènes les enchères à chaque street — et contre un ouvreur large, cette pression rapporte gros.
4. **Il refuse l'équité et l'information.** Une relance fait payer l'adversaire pour continuer au lieu de le laisser voir un flop bon marché avec une main qui pourrait te craquer.

Le revers : parce qu'un 3-bet est puissant, le faire *mal* coûte cher. Trop de joueurs ne 3-bet que leurs monstres, ce qui les rend complètement lisibles. Le reste de ce guide t'explique comment bien le faire.

---

## Quand faire un 3-bet ? Value contre 3-bet light

![Infographie en grille aux couleurs du site qui sépare les mains de 3-bet en deux colonnes — VALUE 3-BETS comme la paire d'as, de rois, de dames et as-roi, et LIGHT 3-BETS comme les as assortis de la roue et les connecteurs assortis](/images/holdem-3bet-range-grid.webp "Un bon 3-bet a deux parties : un noyau de value que tu veux voir payé, et quelques bluffs assortis avec bloqueur que tu lâches volontiers face à un 4-bet")

Une range de 3-bet gagnante a **deux parties distinctes**, et comprendre ce découpage est le plus grand bond en avant sur ce sujet.

**3-bets de value** — des mains que tu *veux* voir payées parce que tu es devant ce qui continue :
- **Le noyau, presque toujours :** ==g:QQ+ et AK.==
- **Élargis à** JJ, TT, AQs et KQs face à une ouverture plus large, d'une position plus tardive — et resserre vers le noyau face à un relanceur serré en position précoce.

**3-bets light (3-bets de bluff)** — des mains que tu 3-bet en *espérant* faire coucher l'adversaire, mais qui gardent une équité de secours quand elles sont payées. Les meilleures candidates ne sont pas des déchets au hasard ; on les choisit pour leurs **bloqueurs** et leur **jouabilité** :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Main de 3-bet light | Pourquoi c'est un excellent bluff |
|:---|:---|
| **A5s–A2s** (as assortis de la roue) | Ton as **bloque** ses premiums — il fait passer ses combinaisons de AA de 6 à 3 et de AK de 16 à 12 — donc il a moins de chances d'avoir une main qui continue. En plus, elle touche des couleurs, des quintes et des tirages à la roue au flop. |
| **Connecteurs assortis** (76s, 65s) | Jouabilité excellente — ils touchent quintes, couleurs et tirages au flop, donc ils gagnent souvent même quand le bluff est payé. |
| **One-gappers assortis** (T8s, 97s) | Même idée, un peu plus faible : déguisés, flexibles et faciles à lâcher face à un 4-bet. |

</div>

Voici la logique du bloqueur en une phrase : **tenir un as rend mathématiquement moins probable que ton adversaire ait des as ou as-roi**, donc A5s est un bien meilleur bluff que, disons, A9o — qui bloque les mêmes premiums mais se joue horriblement quand il est payé et fait surtout des paires faibles. L'équité de secours compte parce que ton adversaire ne se couchera pas à chaque fois ; tu veux un bluff qui peut encore gagner le pot. C'est pour ça que A5s ≈ 30 % d'équité contre une range de call QQ+/AK, alors que les déchets dépareillés sont bien en dessous. C'est la même discipline de [mains de départ](/fr/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") que d'habitude — simplement appliquée à la surrelance.

---

## Range linéaire ou polarisée : quelle différence pour un 3-bet ?

Tu croiseras ces deux mots partout dans la stratégie du 3-bet. Ils décrivent la *forme* de ta range, et choisir la bonne est ce qui sépare les joueurs qui réfléchissent des robots à grille.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Linéaire (merged) | Polarisée |
|:---|:---|:---|
| **Forme** | Un seul bloc solide de tes meilleures mains | Haltère : la value la plus forte **+** des bluffs, rien au milieu |
| **Exemple** | QQ+, AK, AQs, JJ, TT, KQs | QQ+ et AK + des bluffs du type A5s ; flatte le milieu JJ/AQ/TT |
| **À utiliser quand** | L'ouverture est **large et faible** (position tardive), ou que tu es **en position**. Face à la même ouverture, la petite blinde penche plus vers le linéaire que la grosse blinde, parce qu'elle flatte rarement | L'ouverture est **forte/serrée** (position précoce), ou que tu es en **grosse blinde** (où tu flattes le milieu à prix réduit) |

</div>

La raison est simple : face à une ouverture **large et faible**, des mains comme AQ et TT sont réellement devant, donc tu les 3-bet pour la value en un seul bloc fusionné (**linéaire**). Face à une ouverture **serrée**, ces mêmes mains moyennes sont dominées et se font « éjecter » par les 4-bets, donc tu ne 3-bet que la vraie value plus des bluffs propres et tu *flattes* le milieu (**polarisé**).

Une nuance honnête que les adeptes des grilles oublient : **la position n'est pas le seul facteur.** La vraie question, c'est *à quel point tu risques de te faire éjecter de ta main* — ce qui dépend aussi de l'agressivité de l'adversaire, du rake et de ton sizing. Face à quelqu'un qui paie beaucoup et 4-bet rarement, avec un petit sizing et un rake faible, penche vers le **linéaire**. Face à un adversaire qui adore 4-bet, avec un gros sizing et un rake élevé, penche vers le **polarisé**. Lis le spot, n'apprends pas une règle par cœur.

---

## Combien 3-bet ? Le sizing en position et hors de position (avec les calculs)

La plupart des guides te disent « 3x en position, 4x hors de position » et passent à autre chose. Voici le *pourquoi* et les calculs réels, avec une ouverture standard de **3 grosses blindes** (disons une ouverture à $6 en $1/$2) :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Taille | L'ouverture à 3bb devient… | Pourquoi |
|:---|:---:|:---:|:---|
| **En position** (tu parleras en dernier) | ~3x l'ouverture | **9bb** ($18) | La position te permet de gagner avec une taille plus petite, donc tu risques moins. |
| **Hors de position** (tu parleras en premier) | ~4–4,5x | **12–13,5bb** ($24–27) | Plus gros, ça lui fait payer plus cher pour voir un flop et ça empêche ton adversaire d'exploiter ta mauvaise position à bon marché. |
| **Squeeze** (ouverture + un suiveur) | Taille OOP **+ ~1x par suiveur** | **~15–16,5bb** ($30–33) | Plus d'argent mort et un joueur de plus à faire sortir. |

</div>

⚠ **Isoler un limpeur, ce n'est pas un 3-bet.** Si tout le monde avant toi a limpé, ta relance est la *première* relance du tour — un 2-bet. Le sizing répond à la même question, donc il a sa place ici : **3bb + 1bb par limpeur** (ajoute 1 de plus en live), ce qui donne environ **4–5bb**. Ça punit le limp et décourage les overcalls — tu seras quand même payé large.

Les calculs sont volontairement visibles, parce que c'est là que les débutants perdent des jetons : **3 × 3bb = 9bb** en position, **4 × 3bb = 12bb** hors de position. Deux règles passent avant les multiplicateurs :

- **À profondeur de stack normale, ne fais jamais un petit 3-bet hors de position.** Un petit 3-bet OOP offre à ton adversaire un excellent prix pour payer et te surclasser en position — exactement ce que tu cherches à éviter. Utilise le 4x+ complet.
- **Le sizing n'est pas une loi.** Réduis la taille face aux joueurs qui se couchent trop (ton bluff coûte moins cher) et augmente-la en passant en value pure face aux calling stations qui ne se couchent jamais. Le rake et la profondeur des stacks la font bouger aussi.

En tournoi avec des stacks courts, tout le calcul change : vers **10–25 grosses blindes**, beaucoup de mains deviennent un **3-bet à tapis (un « shove »)** plutôt qu'une petite surrelance, parce qu'il n'y a plus la place de relancer puis se coucher. Passe du min-3-bet au tapis à mesure que tu deviens court — même si, contre des fields solides, il faut garder quelques petits 3-bets non all-in dans le mélange.

---

## 3-bet, suivre ou se coucher ? La grille de décision

Face à une ouverture, tu as trois choix, pas deux. Voici la carte qu'on dessine rarement pour les débutants — quand une main préfère un 3-bet, un flat (call) ou la poubelle :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Ta main (exemples de mains) | En position (par ex. bouton face à un vol) | Hors de position (petite blinde — la grosse blinde flatte plus large, voir plus bas) |
|:---|:---|:---|
| **Premiums** (QQ+, AK) | 3-bet pour la value | 3-bet pour la value |
| **Fortes** (JJ-TT, AQ, KQs) | 3-bet contre les ouvertures larges ; flat contre les serrées | Surtout 3-bet ou fold — flatter OOP est faible |
| **Spéculatives** (petites paires, connecteurs assortis) | Flat pour le set mining / voir des flops pas chers | 3-bet en bluff, ou fold |
| **Bluffs à bloqueur** (A5s-A2s) | 3-bet en relance light | 3-bet en relance light |
| **Tout le reste** | Fold | Fold |

</div>

Le grand enseignement : **flatter est légitime en position** — les solvers modernes gardent une vraie range de flat au bouton, parce que tu parles en dernier à chaque street après le flop et qu'il ne reste que les deux blindes derrière toi, donc le risque de squeeze est faible et tu peux voir des flops de façon rentable. Hors de position c'est plus faible, mais avec une distinction importante : depuis la **petite blinde**, penche vers *3-bet ou fold* avec une range plus **linéaire** : payer large OOP réalise mal ton équité et construit une range faible et plafonnée, donc tu relances le haut de ta range et tu lâches le reste. La **grosse blinde** est l'exception — comme tu fermes l'action et que tu as déjà un prix, tu défends en *suivant* bien plus large, surtout face aux vols de position tardive. Tes 3-bets depuis la grosse blinde restent donc relativement **polarisés** : les mains fortes et les bluffs, avec le milieu flatté. La position, encore une fois, change tout — la même leçon que dans le [guide du jeu en position](/fr/blog/holdem-position-play).

---

## Le squeeze au poker : 3-bet contre une relance et un suiveur

![Les stacks de trois joueurs poussés vers le centre du feutre vert pendant qu'un joueur avance une surrelance plus grosse, coinçant un relanceur et un suiveur](/images/holdem-3bet-squeeze.webp "Un squeeze punit d'un coup le relanceur et le suiveur — l'argent mort en plus augmente le gain même d'un 3-bet light")

Un **squeeze** est un 3-bet fait alors qu'il y a déjà eu un open-raise *et* au moins un suiveur. On l'appelle squeeze (« presser ») parce que tu mets les deux adversaires dans un étau : le relanceur initial doit maintenant s'inquiéter du suiveur derrière lui, et le suiveur — qui vient de montrer une main pas assez forte pour surrelancer — a rarement envie de continuer face à ton agressivité.

Deux choses rendent le squeeze spécial :
- **Il y a plus d'argent mort.** Le pot contient déjà la relance et le call, donc un squeeze réussi rapporte plus. Comme tu augmentes aussi la taille pour le suiveur, ça ne baisse pas toujours le taux de fold dont tes bluffs ont besoin — depuis les blindes il baisse un peu, depuis le bouton il reste à peu près le même — mais chaque fold rapporte maintenant plus de jetons.
- **Mise plus gros.** Ajoute à peu près une ouverture de plus par suiveur. Face à une ouverture à 3bb plus un suiveur, un squeeze à environ **15–16,5bb** est standard — c'est la taille supplémentaire qui fait sortir les deux joueurs.

Les bons bluffs de squeeze sont les mêmes mains assorties à bloqueur (A5s et compagnie) que les bons 3-bets de bluff, parce que tu veux toujours faire coucher les mains moyennes du relanceur tout en gardant de l'équité quand tu es payé.

---

## Face à un 3-bet : suivre, 4-bet ou se coucher ?

![Un joueur de poker fixe une surrelance préflop, la main posée sur ses jetons, en se demandant s'il doit suivre, 4-bet ou se coucher face au 3-bet](/images/holdem-3bet-facing.webp "La moitié du 3-bet que personne n'enseigne : quand quelqu'un te surrelance, la plupart de ta range doit simplement se coucher — surtout face à des joueurs qui ne bluffent jamais")

Voici la moitié du 3-bet que presque tous les articles sautent : **tu seras du côté de celui qui reçoit à peu près aussi souvent que tu 3-bet toi-même.** Quand tu ouvres et que tu te fais surrelancer, tu as trois réponses :

- **4-bet** — pour la value avec tes premiums (QQ+, AK), plus un bluff à bloqueur de temps en temps (une main du type A5s). Un 4-bet de value dit « je ne bouge pas d'ici » — un 4-bet bluff avec bloqueur se couche quand même face à un 5-bet.
- **Suivre** — avec les mains qui touchent bien le flop et qui ont l'équité ou la position pour continuer : paires servies qui cherchent le set mining, broadways assorties, et mains fortes qui ne veulent pas gonfler le pot dans une guerre de 4-bets.
- **Se coucher** — avec tout le reste. La plupart de ta range d'ouverture doit simplement abandonner face à un 3-bet ; c'est normal, ce n'est pas de la faiblesse.

Combien faut-il continuer ? La référence théorique, c'est la **fréquence de défense minimale (MDF)** — la part de ta range que tu dois continuer pour que le 3-betteur ne gagne pas automatiquement en bluffant avec n'importe quelles deux cartes (la formule considère qu'un bluff payé n'a aucune équité). C'est ==pot ÷ (pot + mise)== — où *pot* est ce qu'il y a au milieu avant le 3-bet et *mise* ce que le 3-betteur **ajoute** (depuis une blinde, c'est la relance moins les jetons déjà posés) — ce qui, face aux tailles de 3-bet habituelles, donne environ **un tiers de ta range** dans l'absolu (un 3-bet à 3x depuis le bouton : pot de 4,5bb ÷ (4,5bb + 9bb) ≈ 33 %). Mais voici l'exploit qui rapporte de l'argent aux vraies tables. Il se lit plus facilement depuis l'autre siège, alors échange les places pour le tableau ci-dessous : la stat ci-dessous indique à quelle fréquence **eux** se couchent quand **toi** tu les 3-bet.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stat fold-to-3-bet de l'adversaire | Ce qu'elle te dit | Ton ajustement |
|:---:|:---|:---|
| **~35 % (se couche rarement)** | Le plus souvent une calling station — il continue avec presque tout, donc un bluff obtient rarement assez de folds pour être rentable | 3-bet-le **uniquement pour la value**, arrête de bluffer et mise pour la value sans relâche |
| **~55 % (équilibré)** | Un régulier qui réfléchit | Joue près du GTO — mélange value et bluffs à bloqueur |
| **~70 %+ (se couche trop)** | Un nit exploitable | 3-bet-le **light bien plus souvent** — il te donne le pot |

</div>

Maintenant, reprends ta place. La MDF suppose un adversaire *équilibré*. Aux petites limites et en live, les joueurs **sous-bluffent** largement leurs 3-bets — donc quand un joueur passif surrelance soudain, crois-le et **défends moins que la référence MDF ; autrement dit, couche-toi plus que 1−MDF.** Tu ne dois pas une défense « équilibrée » à un nit.

---

## Une vraie main de 3-bet, du début à la fin

Assez de théorie — voici une main complète avec les chiffres, pour que tu voies tout le déroulé. Cash game $1/$2, 100bb de profondeur.

- **Préflop :** un cut-off large ouvre à ==$6== (3bb). Je suis au bouton avec ==A♠Q♠==. C'est un **3-bet de value** évident contre une ouverture large de position tardive, et je suis en position, donc je monte à ==$18== (3x). Les blindes se couchent ; le cut-off suit. Le pot fait $39.
- **Flop :** ==Q♦ 8♣ 4♥.== Je touche **top paire, top kicker** — mon A♠Q♠ fait une paire de dames avec le meilleur kicker possible (l'as). Meilleures cinq cartes : Q♠ Q♦ A♠ 8♣ 4♥ = une paire (dames) avec l'as en kicker. Contre sa range de dames plus faibles, de huit et de floats, je suis loin devant.
- **Le point clé :** parce que j'ai 3-bet préflop, le pot est déjà gros et j'ai l'initiative, donc je mise encore pour la value et je me fais payer par des dames plus faibles et des tirages. Si j'avais simplement *flatté* préflop, trois autres joueurs auraient pu voir ce flop, ma main aurait été bien plus difficile à jouer et le pot n'aurait fait qu'une fraction de cette taille. C'est le 3-bet qui a transformé une top paire en stack.

Maintenant, inverse : si j'avais 3-bet une main **light** comme A5s à cet endroit et que le cut-off avait **4-bet** à $48 (environ 2,7x — un peu au-dessus des 2,2–2,5x en position, parce que le cut-off parle en premier après le flop), je me coucherais simplement — le bluff à bloqueur a fait son travail en m'offrant un abandon propre et bon marché. C'est cette discipline qui rend le 3-bet light rentable au lieu d'être une fuite de jetons.

---

## Les 6 erreurs de 3-bet les plus fréquentes

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| L'erreur | Pourquoi elle te coûte | La correction |
|:---|:---|:---|
| **3-bet trop petit OOP** | Offre un excellent prix pour payer — il réalise son équité en position contre toi | À profondeur de stack normale, utilise le 4x+ complet hors de position |
| **Ne 3-bet que pour la value** | Tu joues cartes sur table ; les bons joueurs couchent tout sauf les coolers | Ajoute des bluffs assortis à bloqueur (A5s) |
| **Ne jamais 3-bet en bluff** | Tu laisses de l'argent sur la table face aux vols larges ; tes flats deviennent trop faibles | Équilibre la value avec quelques 3-bets light |
| **3-bet merged contre un nit** | Ta « value » est dominée par sa range uniquement premium | Passe en polarisé ou couche-toi simplement face à un vrai nit |
| **3-bet bluff avec des déchets (Q7o)** | Bloqueurs faibles et peu d'équité de secours — tu dois te coucher face à chaque 4-bet | Choisis uniquement des mains à bloqueur/jouabilité |
| **Flatter trop depuis la petite blinde** | Mauvaise réalisation d'équité OOP ; une range faible et plafonnée | Face à une relance, surtout 3-bet ou fold depuis la SB ; garde les flats larges pour la grosse blinde |

</div>

Remarque le fil commun aux six : un bon 3-bet a une *raison* — de la value que tu veux voir payée, ou un bluff avec bloqueurs et équité de secours. Surrelancer au hasard sans plan, c'est comme ça que les stacks disparaissent.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-strategy | Les 5 décisions derrière un poker gagnant | /images/holdem-strategy-hero.webp
/fr/blog/holdem-position-play | Pourquoi la position te fait gagner des pots | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. Que veut dire 3-bet au poker ?**

A. Un 3-bet est la première surrelance avant le flop — tu surrelances un joueur qui a déjà ouvert en relançant. Par exemple, si quelqu'un ouvre à 3 grosses blindes et que tu montes à 9, tu as fait un 3-bet. C'est l'outil principal pour construire un pot avec des mains fortes et pour mettre la pression sur les adversaires qui ouvrent trop large.

**Q. Pourquoi dit-on « 3-bet » ?**

A. Parce que le nom compte les mises de la séquence, pas les relances. La grosse blinde est une première mise forcée, l'open-raise est la deuxième mise et ta surrelance la troisième — le « 3-bet ». C'est pour ça qu'on parle de three-bet alors que, techniquement, ce n'est que la deuxième relance de la main.

**Q. Quelle différence entre un 3-bet et un 4-bet ?**

A. Un 3-bet est la première surrelance (par-dessus un open-raise) ; un 4-bet est la surrelance suivante, faite par-dessus un 3-bet. L'échelle va donc ainsi : open-raise (2e mise) → 3-bet (3e mise) → 4-bet (4e mise) → 5-bet (en général tapis). Un 4-bet représente une range très forte — souvent polarisée entre premiums et quelques bluffs.

**Q. Avec quelles mains 4-bet, et de combien ?**

A. 4-bet une range polarisée : des premiums pour la value (QQ+ et AK — face à des adversaires qui 3-bet rarement, resserre le noyau à AA–KK) et quelques bluffs à bloqueur comme A5s, qui bloquent les as et as-roi de ton adversaire. Size un 4-bet à environ 2,2–2,5x le 3-bet en position et un peu plus gros hors de position — plus petit que ce que la plupart des débutants imaginent, parce que le pot est déjà gros. En fréquence, les joueurs solides ne 4-bet que quelques pour cent des mains ; élargis tes 4-bets de value face aux adversaires qui 3-bet trop souvent.

**Q. Quand faire un 5-bet au poker ?**

A. Un 5-bet est la surrelance par-dessus un 4-bet, et autour de 100 grosses blindes c'est presque toujours un tapis. 5-bet pour la value avec le tout haut de ta range (AA, KK, souvent AK) et, face à des joueurs agressifs qui 4-bet light, ajoute de temps en temps un bluff avec un as bloqueur. Face à la plupart des adversaires de petites limites, un 5-bet crie « as ou rois » : si un joueur passif 5-bet, couche tout sauf tes premiums absolus.

**Q. Avec quelles mains faut-il 3-bet ?**

A. Sépare tes 3-bets entre value et bluffs. Le noyau de value, c'est QQ+ et AK, élargi à JJ, TT, AQs et KQs face aux ouvertures plus larges. Pour les bluffs, utilise des mains assorties avec bloqueurs et jouabilité — de A5s à A2s et des connecteurs assortis comme 76s et 65s — pas des déchets dépareillés au hasard.

**Q. Quand 3-bet plutôt que simplement suivre (flat) ?**

A. 3-bet quand tu as un premium, quand l'ouvreur est large et faible, ou quand tu es hors de position et veux éviter un mauvais flat. Flatter est correct en position avec des mains spéculatives (petites paires, connecteurs assortis), là où tu peux voir des flops pas chers avec le bouton. Hors de position, préfère 3-bet ou te coucher plutôt que suivre — sauf en grosse blinde, où tu fermes l'action à prix réduit et défends en suivant bien plus large.

**Q. C'est quoi un 3-bet light ?**

A. Un 3-bet light (ou 3-bet de bluff), c'est surrelancer avec une main dont tu ne penses pas qu'elle est la meilleure, en espérant faire coucher l'ouvreur. Les meilleurs 3-bets light ont des bloqueurs et une équité de secours — les as assortis de la roue comme A5s bloquent les as et as-roi de ton adversaire tout en touchant encore couleurs et quintes au flop, donc ils gardent une vraie chance de gagner le pot même quand ils sont payés.

**Q. Quelle différence entre une range linéaire et une range polarisée ?**

A. Une range linéaire (merged) est un seul bloc solide de tes meilleures mains — à utiliser contre les ouvertures larges et faibles ou en position. Une range polarisée regroupe tes mains les plus fortes plus des bluffs, en retirant les mains moyennes que tu flattes à la place — à utiliser contre les ouvertures serrées, et depuis la grosse blinde, où le prix que tu obtiens déjà te permet de payer avec le milieu au lieu de te le faire éjecter par des 4-bets. La petite blinde, qui n'a pas de call bon marché, penche davantage vers le linéaire.

**Q. De combien faut-il 3-bet ?**

A. Environ 3x l'ouverture en position et 4–4,5x hors de position. Donc face à une ouverture à 3 grosses blindes, monte à environ 9bb en position ou 12bb hors de position. Ajoute à peu près une ouverture de plus par suiveur quand tu squeezes. À profondeur de stack normale, ne fais pas de petit 3-bet hors de position — ça offre à ton adversaire un call facile et bon marché en position.

**Q. Quelle est une bonne fréquence de 3-bet ?**

A. Pour un joueur solide, une fréquence globale de 3-bet autour de 6–10 % est saine, avec environ 8 % pour un bon joueur de cash game 6-max. Sous ~4 %, c'est trop serré et tu joues cartes sur table ; au-dessus de ~10 %, c'est en général trop agressif et tu te fais 4-bet et payer trop léger. Elle est naturellement plus élevée depuis les blindes et le bouton que face aux ouvertures de position précoce.

**Q. Qu'est-ce qu'un squeeze au poker ?**

A. Un squeeze est un 3-bet fait après un open-raise et au moins un suiveur. L'argent mort supplémentaire dans le pot augmente la récompense quand le squeeze fonctionne, et le coup met la pression sur les deux adversaires à la fois — le relanceur et le suiveur à range plafonnée. Squeeze plus gros qu'un 3-bet normal, en ajoutant environ une ouverture de plus par suiveur.

**Q. Comment réagir face à un 3-bet ?**

A. Tu as trois options : 4-bet tes premiums (QQ+, AK) plus un bluff à bloqueur de temps en temps, suivre avec les mains qui touchent bien le flop et ont de l'équité ou la position (paires, broadways assorties), et te coucher avec tout le reste. La plupart de ta range d'ouverture doit se coucher face à un 3-bet — c'est normal. Face à des joueurs qui bluffent rarement, couche-toi encore plus.

**Q. Quel est un bon pourcentage de fold face au 3-bet ?**

A. Environ 55 % est une référence raisonnable et à peu près équilibrée — tu continues avec le haut de ta range et tu lâches le reste. C'est plus large que la MDF purement mathématique, qui face à un 3-bet typique à 3x en position ne te ferait défendre qu'environ un tiers — autrement dit, te coucher au maximum environ 66,7 % du temps. Considère ce chiffre comme un plafond, pas comme un objectif. La MDF suppose que les bluffs ont zéro équité, mais un vrai 3-bet de bluff comme A5s garde environ 30 % d'équité contre ta range de continuation, ce qui pousse la fréquence de fold d'équilibre bien en dessous de ce plafond théorique. Donc 55 % est une référence pratique plutôt qu'une garantie : un 3-bet light avec une vraie équité peut encore être rentable contre elle. Te coucher bien plus que 55 % te rend exploitable par les 3-bets light ; te coucher beaucoup moins veut dire que tu suis ou 4-bet trop large. Ajuste-toi à l'adversaire : couche-toi davantage face aux joueurs qui ne font jamais de 3-bet bluff.

**Q. En tournoi avec un short stack, faut-il 3-bet ou 4-bet all-in ?**

A. Quand les stacks deviennent courts — environ 10–25 grosses blindes — beaucoup de mains se jouent mieux en 3-bet à tapis (un shove) qu'en petite surrelance, parce qu'il n'y a plus la place de relancer puis de se coucher face à un 4-bet. Le shove réalise toute ta fold equity d'un coup. Les fields plus forts contrent le tapis systématique avec de tout petits 3-bets, donc mélange de petits 3-bets non all-in quand tu le peux.

---

## À retenir : le plan de jeu du 3-bet

1. **Un 3-bet est la première surrelance préflop** — la troisième mise de la séquence, parce que la blinde compte comme mise un.
2. **Construis deux ranges :** un noyau de value (QQ+, AK) que tu veux voir payé, et des bluffs assortis à bloqueur (A5s et compagnie) choisis pour leurs bloqueurs et leur jouabilité.
3. **Size à ~3x en position, ~4x hors de position** — et, à profondeur de stack normale, jamais petit hors de position.
4. **Adapte la forme au spot :** linéaire contre les ouvertures larges/faibles (et depuis la petite blinde face à une relance), polarisée contre les ouvertures serrées et depuis la grosse blinde.
5. **Face à un 3-bet, la plupart des mains se couchent** — 4-bet les premiums, suis avec les mains jouables et couche-toi plus que « l'équilibre » face aux adversaires qui ne bluffent jamais.
6. **Ensuite, le flop arrive.** Un pot 3-bet ne se joue pas du tout comme un pot à relance simple — avec les chiffres de cet article (ouverture à 3bb, 3-bet à 9bb, 100bb de profondeur), le pot est environ 2,6× plus gros (19,5bb contre les 7,5bb qu'un flat en tête-à-tête construirait ; un 3-bet plus gros hors de position le pousse vers 3,5×) et le SPR tombe à environ 4,7. Le 3-betteur mise pourtant souvent [toute sa range au flop](/fr/blog/3bet-pot-cbet) — à cause de la forme de sa range, pas parce que le stack est court.

Maîtrise le 3-bet et tu cesses d'être le joueur qui se contente de suivre avec des as et gagne un pot minuscule. Associe-le à une [sélection de mains de départ](/fr/blog/holdem-starting-hands-chart) disciplinée, à une bonne conscience de la [position](/fr/blog/holdem-position-play) et au [cadre stratégique](/fr/blog/holdem-strategy) complet, et ton jeu préflop prend discrètement de l'avance sur la table.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Le cadre des 5 décisions</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">La place du 3-bet dans un jeu gagnant</div>
  </a>
  <a href="/fr/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pourquoi limper te coûte cher</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Relance ou couche-toi — ne te contente pas de suivre</div>
  </a>
  <a href="/fr/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Jouer ta position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi les 3-bets marchent mieux en position</div>
  </a>
  <a href="/fr/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les mains de départ</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quelles mains valent vraiment une relance</div>
  </a>
</div>
`.trim(),
};
