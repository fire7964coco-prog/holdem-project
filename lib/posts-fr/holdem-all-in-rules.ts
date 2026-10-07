import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Règles de l'all-in au poker : faire tapis, side pots, relances et showdown",
  seoTitle: "All-in poker : tu gagnes quoi ? — Faire tapis et side pot",
  desc: "Tu fais tapis et le donneur sépare les jetons en deux tas ? Les règles de l'all-in : table stakes, pot principal, side pots, relances et showdown.",
  tldr: "Faire all-in (tapis), c'est miser tous les jetons que tu as devant toi. Tu ne peux gagner de chaque adversaire que ce que tu as couvert, c'est le pot principal ; les jetons misés au-delà par deux stacks plus gros ou plus forment un side pot (pot annexe) qu'eux seuls peuvent gagner, et une mise supplémentaire isolée est simplement rendue. En no-limit et en pot-limit, un all-in inférieur à une relance pleine ne rouvre pas les enchères pour un joueur qui a déjà parlé, sauf si plusieurs petits all-in cumulés atteignent au moins une relance pleine au-dessus de ce qu'il a déjà mis.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠",
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "All-in au Texas Hold'em — un joueur pousse tous ses jetons au centre pendant que le donneur sépare le pot principal et le side pot sur le feutre vert",
  tags: ["all in poker", "faire tapis poker", "tapis au poker", "side pot poker", "regles poker tapis", "all in poker regle", "table stakes poker"],
  content: `
Tu es short stack. Tu fais tapis (all-in). Le joueur derrière toi suit. Un troisième relance. Le donneur commence à séparer les jetons en deux tas.

Tu n'as aucune idée de ce qui se passe.

Je suis passé par là. La première fois que j'ai fait tapis dans un cash game live, je ne savais pas si je pouvais encore gagner quelque chose, si l'autre joueur avait le droit de relancer, ni même quel tas de jetons était le mien. Personne ne me l'a expliqué.

==Ce guide couvre toutes les situations : pot principal, side pots (pots annexes), droit de relancer et ordre de l'abattage (showdown).== Fini de rester figé quand le donneur commence à compter les stacks. (Si le déroulé de base des enchères te reste flou, le [guide des règles pour débutants](/fr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") le reprend d'abord.)

## Que veut dire faire tapis (all-in) au poker ?

Faire tapis (all-in), c'est miser d'un coup tous les jetons que tu as devant toi. Une fois engagé, tu ne peux plus rien ajouter, et personne ne peut te forcer à te coucher : tu restes dans le coup jusqu'à l'abattage. En contrepartie, tu ne peux gagner de chaque adversaire que la somme que tu as toi-même couverte.

La base, c'est la règle des **« table stakes »** (littéralement « les mises sur la table ») : tu ne peux miser que les jetons que tu avais sur la table au début du coup. Pas question de sortir de l'argent de ta poche, d'emprunter à un pote ou de poser ta montre ou tes clés de voiture — ça, c'est le poker de cinéma.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terme | Signification |
|------|---------|
| Push / Shove / Jam | Argot anglais pour faire tapis |
| Table stakes | Tu ne peux miser que ce que tu avais au début du coup |
| Double up | Gagner un all-in et doubler ton stack |
| Pot principal | Le pot que tout le monde — y compris le joueur à tapis — peut gagner |
| Side pot | Jetons que seuls les stacks plus gros peuvent gagner ; le joueur à tapis pour moins en est exclu |

</div>

==g:Une fois à tapis et suivi, tu es sûr de voir toutes les cartes communes restantes.== Personne ne peut te faire lâcher le coup sur un bluff. Tes cartes restent en jeu jusqu'à la river (la rivière).

### Pourquoi dit-on tapis au poker ?

En français, « tapis » désigne aussi l'ensemble des jetons posés devant un joueur. « Faire tapis », c'est donc miser tout ce tas d'un coup — exactement ce que le terme international « all-in » décrit. Les joueurs anglophones disent aussi push, shove ou jam (voir le tableau ci-dessus). Ce sens de « tapis » ne survit que dans « faire tapis » et dans l'expression « tapis effectif » ; ailleurs dans ce guide, les jetons d'un joueur s'appellent son stack.

### Qu'est-ce que le tapis effectif au poker ?

Le tapis effectif — on dit aussi **stack effectif** — c'est le plus petit des deux stacks en présence : c'est le montant maximum qui peut réellement être joué entre deux joueurs. Reprends l'exemple à 3 joueurs plus bas : A a 100 jetons, B en a 300. Si A fait tapis, le stack effectif entre eux est de 100. B n'a besoin de mettre que 100 pour suivre A ; face à A, ses 200 autres jetons ne sont pas en jeu.

---

## Comment annoncer un all-in à table ?

Pour faire tapis sans ambiguïté, annonce « all-in » à voix haute, puis pousse tout ton stack en un seul geste. L'annonce verbale t'engage immédiatement et ne peut pas être mal interprétée. Pousser sans rien dire fonctionne souvent, mais pas toujours : face à une mise qui demande déjà tous tes jetons pour la suivre, ce geste silencieux compte comme un simple call.

Deux façons valables :

**1. L'annonce verbale** — Dis « all-in » clairement pour que le donneur et tes adversaires l'entendent — c'est la méthode la plus sûre.

**2. Pousser tous tes jetons** — Fais glisser tout ton stack vers le centre en un seul geste net. Avancer tes jetons en plusieurs fois peut ressembler à un string bet (une mise faite en plusieurs temps), alors pousse tout d'un coup. ==r:C'est le cas vu plus haut : face à une mise qui demande tous tes jetons rien que pour la suivre, pousser tes jetons sans rien dire vaut un call, pas un all-in (TDA 2024 Rule 45-A, WSOP Tournament Rule 92).== Le reste du temps, pousser tes derniers jetons **est** bien une mise all-in (TDA 2024 Rule 45-B) — seule exception : un unique dernier jeton de valeur trop forte poussé en silence face à une mise, qui ne vaut qu'un call (TDA 2024 Rule 44).

![Abattage d'un all-in au Texas Hold'em — un board K♠ 10♣ 7♦ 4♥ 2♣ avec les jetons séparés en pot principal et side pot étiquetés](/images/holdem-all-in-declare.webp)

==r:Ne pousse jamais en silence un seul gros jeton en pensant qu'il comptera comme un all-in — face à une mise, le donneur le compte comme un call ; sans mise en cours, comme une mise de la seule valeur de ce jeton.== Annonce toujours « all-in » à voix haute — c'est la seule méthode qui ne peut jamais être interprétée autrement.

---

## Comment fonctionnent les side pots au poker ? (Pourquoi le joueur all-in est plafonné)

Un joueur à tapis ne peut gagner que sa propre mise plus, au maximum, la même somme de chaque autre joueur qui a mis des jetons au pot — y compris un joueur qui s'est couché depuis, car les jetons misés restent dans le pot. Tout ce qui est misé au-delà forme un **side pot** réservé aux joueurs qui l'ont alimenté.

Encore faut-il qu'au moins deux joueurs aient misé au-delà de ce plafond. Si un seul joueur dépasse, personne ne peut lui disputer un side pot : le surplus lui revient directement, comme une mise non suivie.

![Side pot après un all-in au Texas Hold'em — le donneur sépare les jetons en pot principal et side pot, le joueur A étant plafonné](/images/holdem-all-in-side-pot.webp)

### Exemple à 3 joueurs (le cas standard)

| Joueur | Stack | Action |
|--------|-------|--------|
| Joueur A | 100 jetons | All-in |
| Joueur B | 300 jetons | Suit 100, puis mise 50 de plus |
| Joueur C | 300 jetons | Suit 100, puis suit les 50 |

**Pot principal :** 100 × 3 = **300 jetons** (A, B et C peuvent le gagner)

**Side pot :** 50 × 2 = **100 jetons** (seuls B et C peuvent le gagner)

==Le joueur A peut gagner le pot principal de 300 jetons à l'abattage. Mais même si A a la meilleure main de tous, il ne peut pas toucher au side pot de 100 jetons.== C'est B ou C qui le remportera.

### Exemple à 4 joueurs avec plusieurs stacks

C'est là que ça se complique — et que la plupart des débutants décrochent.

| Joueur | Stack | Fait tapis pour |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | suit tout |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | Montant | Joueurs qui peuvent le gagner |
|:---|:---:|:---|
| Pot principal | 100 × 4 = **400** | A, B, C, D |
| Side pot 1 | 100 × 3 = **300** | B, C, D (A est plafonné) |
| Side pot 2 | 300 × 2 = **600** | C, D (A et B sont plafonnés) |
| **Total** | **1 300** | — |

</div>

La règle : ==chaque side pot se construit en prenant l'écart jusqu'au stack suivant, multiplié par le nombre de joueurs qui le couvrent.== Travaille toujours du plus petit stack au plus gros.

---

## Un all-in rouvre-t-il les enchères ? La règle que presque tout le monde rate

En no-limit et en pot-limit, pas forcément : un all-in inférieur à une relance pleine ne rouvre pas les enchères pour les joueurs qui ont déjà parlé dans ce tour. Ceux-là peuvent seulement suivre ou se coucher. Un joueur qui n'a pas encore parlé garde, lui, le droit de relancer. En limit, le seuil est plus bas : une demi-mise suffit à rouvrir.

==r:C'est la règle de l'all-in la plus contestée aux tables live — j'ai déjà vu deux joueurs s'écharper cinq bonnes minutes là-dessus pendant que toute la table attendait. Ils avaient tort tous les deux.==

**La règle (no-limit et pot-limit) :** tout se joue sur la notion de **[relance pleine](/fr/blog/holdem-betting-actions)** — l'exemple ci-dessous la calcule pas à pas. Le seuil réduit du limit, la demi-mise, vient de la TDA 2024 Rule 47-B.

![Règle de relance après un all-in — un all-in court, inférieur à une relance pleine : le joueur A, qui a déjà parlé, peut seulement suivre ou se coucher](/images/holdem-all-in-reraise-rule.webp)

**Exemple :**

Blindes $1/$2. Quatre joueurs voient le flop.

1. Le joueur A mise $10.
2. Le joueur B fait tapis pour **$14** (seulement $4 de plus que la mise de $10 de A — pas une relance pleine, qui demanderait au moins $20).

Que se passe-t-il pour le joueur A, et pour le joueur C qui n'a pas encore parlé ?

- Le joueur A a déjà parlé (mise de $10) et ne fait face qu'à une relance incomplète. Comme l'all-in de $14 de B est **inférieur à une relance pleine**, l'action NE se rouvre PAS pour le joueur A. ==A peut seulement suivre ou se coucher — il ne peut pas relancer.==
- Le joueur C n'a pas encore parlé — **le joueur C peut encore relancer**. Attention à la taille, cependant : si C relance, le minimum est un **total** égal à l'all-in de B plus la dernière mise pleine — $14 + $10 = **$24**, et non les $20 qui auraient fait une relance pleine sur A (WSOP Live Action Rule 176). C peut quand même faire tapis pour moins que ça : le minimum ne s'impose jamais à un joueur qui fait tapis (Live Action Rule 175).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Montant de l'all-in (no-limit / pot-limit) | Relance pleine ? | Rouvre les enchères ? |
|--------------|-------------|-----------------|
| Moins qu'une relance pleine | Non | Non — les joueurs qui ont déjà parlé peuvent seulement suivre ou se coucher |
| Relance pleine ou plus | Oui | Oui — tous les joueurs peuvent de nouveau relancer |

</div>

Pourquoi cette règle existe-t-elle ? Elle évite qu'un all-in partiel pousse les autres à des relances plus grosses. Une relance pleine signale une vraie agression — un short stack qui pousse ses derniers jetons, non.

### Cas avancé : plusieurs joueurs font all-in pour moins qu'une relance

C'est la version qui piège même les habitués. Plusieurs all-in courts peuvent **s'additionner** jusqu'à une relance pleine — et si leurs incréments cumulés atteignent le seuil, les enchères se rouvrent pour un joueur qui a déjà parlé. ==r:Le test se fait joueur par joueur, pas une seule fois pour toute la table :== la relance ne se rouvre que pour un joueur qui, **quand l'action lui revient, fait face à au moins une relance pleine au-dessus de ce qu'il a déjà mis** (==TDA 2024 Rule 47==).

C'est la règle officielle de la TDA sur la réouverture des enchères (« re-opening the bet »), et la plupart des salles l'appliquent.

**Exemple (blindes $1/$2, au flop) :**

1. Le joueur A mise $10.
2. Le joueur B fait tapis pour **$14** (incrément de +$4 — pas une relance pleine à lui seul)
3. Le joueur C fait tapis pour **$21** (incrément de +$7 — pas une relance pleine à lui seul)

Incréments cumulés : $4 + $7 = **$11** — le seuil de relance minimale (min-raise) de $10 est atteint.

**Résultat : les enchères se ROUVRENT pour le joueur A.** A a mis $10 et fait maintenant face à $21 — $11 de plus, soit au moins une relance pleine — donc A peut se coucher, suivre ou relancer, même si ni B ni C n'a fait individuellement une relance pleine. Un joueur qui aurait suivi les $14 de B entre-temps ne ferait face qu'à $7 de plus quand l'action lui revient, et pour lui rien ne se rouvre : suivre ou se coucher.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in de B | All-in de C | Incrément cumulé | Rouvre pour A ? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — sous les $10 | ❌ Non |
| $14 (+$4) | $21 (+$7) | $11 — atteint les $10 | ✅ Oui |
| $15 (+$5) | $24 (+$9) | $14 — atteint les $10 | ✅ Oui |

</div>

Le seuil de relance minimale est toujours la *dernière mise ou relance pleine et valide* — jamais un total cumulé.

### Décision express : cet all-in rouvre-t-il les enchères ?

Ce tableau vaut pour le no-limit et le pot-limit. En limit, le seuil est une demi-mise, pas une relance pleine.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Rouvre pour les joueurs qui ont déjà parlé ? |
|---|---|
| Un seul all-in < relance pleine | ❌ Non — suivre ou se coucher uniquement |
| Un seul all-in ≥ relance pleine | ✅ Oui — tout le monde peut relancer |
| Plusieurs all-in courts, cumul < relance pleine | ❌ Non |
| Plusieurs all-in courts, cumul ≥ relance pleine | ✅ Oui — pour chaque joueur qui fait maintenant face à au moins une relance pleine au-dessus de sa propre dernière action |
| Joueur qui n'a PAS encore parlé | ✅ La limite de réouverture ne s'applique jamais à lui — il peut toujours relancer, dans les limites de mise du jeu : son stack en no-limit, le pot en pot-limit, la taille de mise fixe et le plafond de relances de la salle en limit (TDA 2024 Rule 48) |

</div>

---

## All-in et showdown : ce qui change à l'abattage

Quand toutes les enchères sont terminées et qu'un joueur est à tapis, les mains sont retournées, le donneur attribue d'abord les side pots puis le pot principal, et chaque pot revient à la meilleure main parmi les joueurs qui y ont droit. Un même coup peut donc avoir plusieurs gagnants : l'un ramasse le pot principal, l'autre le side pot.

Voici ce qui se passe, dans l'ordre :

1. **Les cartes sont retournées.** En tournoi, toutes les mains impliquées dans l'all-in sont en général étalées dès que les enchères sont terminées. En cash game no-limit, tout dépend du moment où les enchères se sont arrêtées : si elles se sont terminées avant la river, le joueur qui a fait tapis retourne ses cartes en premier (WSOP Live Action Rule 149) ; s'il y a eu des enchères à la river, c'est la [règle d'abattage du dernier agresseur](/fr/blog/holdem-showdown-rules) qui s'applique.
2. **Les side pots sont attribués en premier.** Plus précisément, le donneur règle d'abord le side pot créé en dernier, puis remonte jusqu'au pot principal.
3. **Les cartes parlent (« cards speak »).** La meilleure main remporte chaque pot auquel son joueur a droit — quoi que les joueurs annoncent.
4. **Plusieurs gagnants sont possibles.** Gagner « son » pot ne donne aucun droit sur les autres : ==g:même avec la meilleure main de la table, le joueur à tapis pour le seul pot principal ne touche pas au side pot.==

**Cas particulier :** si un side pot n'a plus qu'un seul joueur (tous les autres se sont couchés), ce joueur récupère ces jetons immédiatement — pas besoin d'abattage pour ce pot.

---

## Que se passe-t-il si tu fais all-in de travers ? 5 erreurs à éviter

Le plus souvent, tu perds des jetons que tu aurais pu gagner, ou tu déclenches une dispute à la table. Presque tous ces incidents viennent de cinq malentendus précis : qui peut gagner quel pot, qui peut encore relancer, ce que tu as le droit de miser, quand jeter tes cartes et pourquoi tu fais tapis. Les voici, un par un.

Avec l'expérience des all-in à table, tu finis par comprendre que le chaos ne vient presque jamais des calculs, mais de la question « qui a droit à quel pot ».

### Erreur 1 : croire que le joueur à tapis peut gagner le side pot
Il ne peut pas. Dès que le joueur à tapis est plafonné, tous les jetons supplémentaires misés par les stacks plus gros vont dans un pot sur lequel il n'a aucun droit.

### Erreur 2 : ignorer la règle de réouverture des relances
En no-limit et en pot-limit, un all-in partiel ne donne aux joueurs qui ont **déjà parlé** dans ce tour aucune seconde chance de relancer — sauf si plusieurs all-in courts s'empilent au point que l'un d'eux fait face à au moins une relance pleine quand l'action lui revient. Ceux qui n'ont pas encore parlé peuvent relancer, au total minimum vu plus haut. Connaître cette règle par cœur coupe court aux disputes avant qu'elles ne commencent.

### Erreur 3 : ajouter de l'argent de ta poche en plein coup
Table stakes. Ce qui est sur la table est tout ce que tu peux miser. Si tu es à tapis pour $80 et que le pot fait $400, tu ne peux gagner que $80 de chaque joueur qui a suivi.

### Erreur 4 : jeter tes cartes trop vite
Tu es à tapis pour le pot principal. Deux autres joueurs se battent pour le side pot. En tournoi, la question se règle d'elle-même — une fois leurs enchères terminées, la ==TDA 2024 Rule 16== impose d'étaler toutes les mains, la tienne comprise. En cash game, non : j'ai vu un jour un short stack jeter ses cartes (muck) à l'instant où l'abattage du side pot tournait contre lui — en oubliant qu'il n'était même pas dans ce pot et que le pot principal pouvait encore lui revenir. Une fois que le donneur les avait ramassées avec les cartes jetées, elles n'étaient plus identifiables — main morte, et le pot principal est parti de l'autre côté. (Une main encore clairement identifiable peut être récupérée à la discrétion du floor (le responsable de salle), mais n'y compte jamais.) Ne jette pas tes cartes — ta main reste en jeu pour le pot principal. ==Attends toujours que le donneur ait réglé tous les pots avant de toucher à tes cartes.==

### Erreur 5 : faire tapis par frustration
L'all-in est le coup le plus puissant de la table. Il force tes adversaires à des décisions tout-ou-rien. Cette puissance disparaît quand tu fais tapis au hasard. Garde-le pour le bon moment — la pression d'un short stack, les mains fortes que tu veux faire payer (value), les bluffs avec une vraie fold equity (de vraies chances de faire coucher l'adversaire).

---

:::readnext[À lire ensuite]
/fr/blog/texas-holdem-rules-for-beginners | Règles du Texas Hold'em pour débutants | /images/rules-texas-holdem.webp
/fr/blog/holdem-showdown-rules | Les règles de l'abattage expliquées | /images/holdem-showdown-rules-hero.webp
:::

## FAQ

**Q. Peut-on faire all-in pour moins que la grosse blinde ?**

A. Oui. Si la blinde que tu dois poser est plus grosse que tout ton stack, tu poses ce qu'il te reste et tu es à tapis pour ce montant (WSOP Live Action Rule 154). Les autres joueurs suivent quand même la grosse blinde entière — ce qu'ils mettent au-delà de ta contribution forme un side pot entre eux, ou revient directement à un joueur seul comme mise non suivie.

**Q. Que se passe-t-il si tu gagnes l'all-in mais perds le side pot ?**

A. Tu ramasses le pot principal (ce que tu as couvert de chaque joueur) et l'autre joueur ramasse le side pot. Chacun gagne la part à laquelle il avait droit.

**Q. Faire all-in oblige-t-il à montrer sa main ?**

A. En tournoi, oui — une fois toutes les enchères terminées avec un all-in, toutes les mains impliquées sont en général étalées face visible. En cash game live, les règles d'abattage standard s'appliquent — le dernier agresseur à la river montre en premier (le joueur le plus tôt dans l'ordre de parole si tout le monde a checké la river), puis les autres montrent ou jettent leurs cartes — sauf en no-limit quand les enchères se sont terminées avant la river : là, le joueur qui a fait tapis retourne ses cartes en premier (WSOP Live Action Rule 149).

**Q. Peut-on faire « run it twice » lors d'un all-in ?**

A. Le « run it twice » (distribuer deux fois les cartes communes restantes et partager le pot) est autorisé dans beaucoup de cash games si, une fois qu'un joueur est à tapis et qu'aucune action de mise n'est en attente, tous les joueurs encore dans le pot sont d'accord — pas seulement les deux joueurs concernés (WSOP Live Action Rules 210 et 211). Il n'est généralement pas autorisé en tournoi. L'option doit être acceptée avant que les cartes communes restantes soient distribuées.

**Q. C'est quoi exactement la règle des « table stakes » ?**

A. Les « table stakes » veulent dire que tu ne peux miser que les jetons qui étaient devant toi au début du coup. Tu ne peux pas ajouter d'argent une fois le coup commencé. Cette règle protège les deux camps — tu ne peux jamais être forcé de risquer plus que ton stack, et ce qu'un adversaire mise au-delà de ton stack ne peut rien te coûter : ça part dans un side pot ou ça lui revient comme mise non suivie.

**Q. Si deux joueurs font all-in pour des montants différents, qui montre en premier ?**

A. Le dernier all-in qui était une mise ou une relance est la dernière action agressive : il montre en premier. Un all-in qui se contente de suivre pour moins n'est pas agressif — en cash game, le miseur initial montre toujours en premier quand les enchères se sont terminées à la river (en no-limit, si elles se sont terminées avant la river, le joueur qui a fait tapis retourne ses cartes en premier) ; et quand il y a un side pot, les règles Live Action des WSOP raisonnent pot par pot : tout joueur engagé dans le side pot montre avant le joueur qui n'est à tapis que pour le pot principal (Rule 149). ==r:En tournoi, il n'y a ici aucun ordre de présentation== — une fois les enchères de l'all-in terminées, toutes les mains impliquées sont retournées en même temps (TDA 2024 Rule 16) ; la règle qui fixe un ordre de présentation, la TDA 2024 Rule 17, ne concerne que les abattages sans all-in. En cash game, si c'était un all-in suivi sans autre action, celui qui a suivi peut jeter ses cartes s'il perd après avoir vu la main du joueur à tapis (en tournoi, toutes les mains impliquées restent face visible).

**Q. Les règles de l'all-in sont-elles différentes en tournoi et en cash game ?**

A. Les règles de base sont les mêmes, mais il y a deux différences pratiques. D'abord, en tournoi, toutes les mains impliquées dans un all-in sont étalées face visible dès que les enchères sont terminées (TDA 2024 Rule 16) — tu ne peux pas jeter tes cartes avant l'abattage. En cash game, l'ordre d'abattage standard s'applique — sauf en no-limit quand les enchères se sont terminées avant la river, où le joueur à tapis retourne ses cartes en premier (Live Action Rule 149) — et les joueurs peuvent jeter leurs cartes. Ensuite, le « run it twice » est courant en cash game (si tous les joueurs encore dans le pot sont d'accord) mais généralement interdit en tournoi.

**Q. Qu'est-ce que le tapis effectif au poker ?**

A. C'est le plus petit des deux stacks en présence : le montant maximum qui peut réellement être joué entre deux joueurs. Si A a 100 jetons et B en a 300, le stack effectif entre eux est de 100.

**Q. Si quelqu'un fait tapis, dois-je aussi faire tapis ?**

A. Non. Pour suivre, tu n'as qu'à payer le montant de son all-in (tu peux aussi te coucher — ou relancer, si l'action t'est encore ouverte et qu'il reste au moins un autre adversaire avec des jetons). Si A fait tapis pour 100 et que tu as 300, tu suis pour 100 ; face à A, tes 200 autres jetons ne sont pas en jeu. On lit parfois que le gros stack doit tout miser — c'est faux.

**Q. Quand faire tapis au poker ?**

A. Ce n'est pas une question de règle mais de stratégie. La pire raison, c'est la frustration (voir l'erreur 5) : garde l'all-in pour la pression d'un short stack, une main de value ou un bluff avec une vraie fold equity, et vérifie tes chances avec le [calculateur poker](/fr/calculator).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pilier</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles du Texas Hold'em pour débutants</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Toutes les règles, des blindes à l'abattage</div>
  </a>
  <a href="/fr/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Split pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles du split pot et du partage</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quand le pot est partagé, et pourquoi</div>
  </a>
  <a href="/fr/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Abattage</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles de l'abattage</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Qui montre en premier et quand jeter ses cartes</div>
  </a>
</div>
`.trim(),
};
