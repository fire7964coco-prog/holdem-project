import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament",
  seoTitle: "Ton premier tournoi de poker ? Voici comment ça se déroule",
  title: "Comment fonctionne un tournoi de poker ? Buy-in, formats et Jour 1",
  desc: "Ton premier tournoi approche ? Buy-in, blindes, paliers de gains, freezeout, PKO, satellite : comment se déroule un tournoi de poker, du Jour 1 à l'ITM.",
  tldr: "Dans un tournoi de poker, tu paies un buy-in fixe (le droit d'entrée) contre des jetons, puis les blindes montent à l'horloge jusqu'à ce qu'un seul joueur ait tous les jetons. Seuls 10–15 % des joueurs finissent dans l'argent (ITM). Les formats vont du freezeout au PKO, au satellite et au deepstack ; tu t'inscris par buy-in direct, par satellite ou en ligne à l'avance.",
  category: "tournament",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-01",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "🏆",
  image: "/images/holdem-tournament-hero.webp",
  imageAlt: "Salle de tournoi de poker en live bondée, l'horloge des blindes affichant 12 000/24 000 pendant que des joueurs se disputent un coup",
  tags: [
    "comment se déroule un tournoi de poker",
    "comment fonctionne un tournoi de poker",
    "comment participer à un tournoi de poker",
    "structure tournoi poker",
    "mtt poker",
    "itm poker",
    "freezeout poker",
    "bounty poker",
    "satellite poker",
  ],
  content: `
Je suis entré dans mon premier tournoi de poker en live avec $200 en poche, une idée assez floue du fonctionnement du Texas Hold'em et aucune idée de ce que voulaient dire « niveau de blindes » ou « bulle ».

Quatre heures plus tard, j'étais éliminé. Mais je savais exactement ce que voulait dire chaque terme, pourquoi j'avais perdu et quand revenir.

Cet article, c'est tout ce que j'aurais aimé qu'on me dise avant ce jour-là : comment la structure d'un tournoi fonctionne vraiment, dans quel format tu t'inscris, comment t'inscrire sans avoir l'air perdu, et à quoi ressemble un Jour 1, heure par heure.

---

### En bref

:::stripe
10–15 % | du field est généralement payé
20–40 min | par niveau de blindes en live (60+ sur les Main Events phares)
$100+$9 | la répartition d'un buy-in typique — prize pool + frais
:::

## Comment se déroule un tournoi de poker ? (réponse en 30 secondes)

Un tournoi de poker est une compétition où chacun paie le même droit d'entrée (le **buy-in**), reçoit le même nombre de jetons de départ, et joue jusqu'à ce qu'une seule personne possède tous les jetons en jeu.

**Le résumé en une phrase :** en cash game (ou « partie libre »), tes jetons sont de l'argent réel et tu peux partir quand tu veux. Dans un tournoi freezeout, ta perte maximale est exactement le buy-in — les réentrées (re-entry) et les add-ons la font grimper — mais tu joues pour une part d'un prize pool (la cagnotte) bien plus gros.

Cette seule différence change de fond en comble la valeur des jetons, la pression des blindes et la stratégie. → Le comparatif complet : [Cash game ou tournoi au poker : quelle différence, lequel choisir ?](/fr/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")

---

## Quel est le prix d'un tournoi de poker ? Buy-in, frais et stack de départ

Quand tu t'inscris, tu paies le buy-in (droit d'entrée). Cet argent se divise en deux :

| Buy-in de $109 (écrit « $100+$9 ») | Où va l'argent |
|:---|:---|
| **$100** | → Le prize pool, partagé entre tous les inscrits |
| **$9** | → Les frais de la salle (rake), conservés par l'établissement |

Les grands événements live conservent en général 8–10 % du buy-in en frais (les petits tournois quotidiens prennent souvent davantage) — ici $9 sur $109, soit environ 8,3 %. Comment fonctionnent ces frais (et pourquoi l'online diffère du live), c'est expliqué dans [comment fonctionne le rake au poker](/fr/blog/holdem-rake).

En échange, tu reçois un **stack de départ** — souvent de 10 000 à 50 000 jetons de tournoi, soit en général 100–300 grosses blindes de profondeur au niveau 1.

**Ton stack de départ n'a aucune valeur en argent.** Un stack de 10 000 jetons ne vaut pas $10 000 — c'est simplement ta vie dans le tournoi. La seule chose qui compte, c'est d'avoir plus de jetons que les autres quand arrivent les places payées.

Chaque tournoi publie sa structure dans une **feuille de structure** : stack de départ, niveaux de blindes, durée des niveaux, calendrier des antes et grille des gains. Demande-la à l'inscription — c'est le document le plus utile de toute la salle.

---

## Comment lire la feuille de structure ? Niveaux de blindes, antes et horloge

C'est ce que la plupart des guides pour débutants zappent, et c'est pourtant le mécanisme le plus important d'un tournoi.

**Les blindes démarrent petites et montent à l'horloge — en général toutes les 20–40 minutes dans les événements live, et toutes les 60 minutes ou plus sur les Main Events phares** (le WPT Australia 2026 a joué son Championship Event avec des niveaux de 60 minutes, portés à 90 lors des derniers jours).

| Niveau | Blindes | Antes | Ton stack de 10k = |
|:---|:---:|:---:|:---|
| 1 | 25 / 50 | — | 200 grosses blindes |
| 3 | 75 / 150 | 150 | 67 grosses blindes |
| 6 | 200 / 400 | 400 | 25 grosses blindes |
| 9 | 500 / 1 000 | 1 000 | 10 grosses blindes |

Remarque bien : **tu n'as pas perdu un seul jeton** entre le niveau 1 et le niveau 9. Pourtant ton stack est passé de 200BB à 10BB, simplement parce que les blindes ont monté. C'est comme ça qu'un tournoi force l'action et finit par éliminer les joueurs.

==g:Règle empirique : sous 20 grosses blindes, tu entres dans la zone du push or fold, et à 15 c'est ton mode de jeu principal. Sous 10 grosses blindes, tu dois faire tapis avec presque toute main jouable — surtout en position tardive ou depuis la petite blinde — avant que les blindes ne te dévorent.==

Quand tu en es là, les ranges de shove précises sont dans [la stratégie short stack — quand faire tapis ou se coucher](/fr/blog/holdem-short-stack).

**Et les antes, c'est quoi ?** Après les premiers niveaux, la plupart des tournois ajoutent une « ante » — une mise forcée supplémentaire prélevée à chaque main en plus des blindes. Dans la plupart des événements live modernes, c'est une « big blind ante » unique égale à une grosse blinde, payée par le joueur de grosse blinde pour toute la table (c'est pourquoi la colonne des antes ci-dessus correspond à la grosse blinde). Le pot grossit et le jeu s'accélère. Une fois les antes en place, tes jetons fondent encore plus vite.

Tu découvres carrément les blindes ? Commence par [ce que sont vraiment la petite et la grosse blinde](/fr/blog/holdem-blind-meaning) — tous les chiffres en « BB » ci-dessus prendront leur sens.

---

## Quelles sont les 4 phases d'un tournoi de poker ?

### Phase 1 — Les premiers niveaux (100–200 BB de profondeur)
Tu as de la marge. Mains spéculatives, set-mining, voir des flops : tout ça reste raisonnable. La plupart des débutants jouent trop serré ici. Les blindes ne coûtent presque rien ; profites-en pour observer la table.

### Phase 2 — Le milieu de tournoi (30–60 BB)
Les antes sont généralement en place. La pression sur les stacks commence. Les joueurs à short stack se mettent à faire tapis. C'est là que la majeure partie du field (l'ensemble des inscrits) se fait éliminer.

### Phase 3 — La bulle
La phase la plus stressante. Encore une élimination et tous ceux qui restent **sont payés** (ITM : In The Money — dans l'argent). Les short stacks se figent. Les gros stacks martyrisent la table. Bien jouer ici peut te rapporter une vraie équité sans gagner un seul pot — [la bulle mérite son propre article](/fr/blog/holdem-bubble).

### Phase 4 — La table finale
Il reste en général 6–9 joueurs. Les gains augmentent fortement à chaque élimination. L'[ICM (Independent Chip Model)](/fr/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") gouverne les décisions à ce stade — la chip EV et l'EV en argent réel divergent nettement.

---

## C'est quoi un MTT ? Freezeout, KO progressif (bounty), satellite, deepstack…

**Un MTT (tournoi multi-tables) est le format de tournoi le plus courant : un gros field réparti sur de nombreuses tables.** Autour de lui gravitent plusieurs formats — freezeout, KO progressif, satellite, deepstack, turbo — qui changent le coût, la durée et la stratégie :

| Format | Comment ça marche | Pour qui |
|:---|:---|:---|
| **Freezeout** | Un seul buy-in, pas de recave. Éliminé = dehors. | Débutants — coût fixe |
| **Recave (rebuy) / Réentrée (re-entry)** | Tu rachètes des jetons pendant la fenêtre du début — en rebuy, souvent sans devoir être éliminé avant | Joueurs agressifs avec une plus grosse bankroll |
| **Bounty / KO** | Tu gagnes une prime fixe en argent pour chaque joueur que tu élimines | Joueurs d'action — un revenu en plus à chaque élimination |
| **PKO (KO progressif)** | Les primes grossissent à chaque élimination — une partie te revient, une partie s'ajoute à ta propre tête | Joueurs prêts à la variance pour un gros potentiel |
| **Deepstack** | Stack de départ bien au-dessus de l'événement standard de la même série, avec des niveaux plus lents | Joueurs qui veulent plus de jeu postflop |
| **Satellite** | Le prix = une entrée dans un plus gros tournoi, pas de l'argent | Petits budgets qui visent les grands événements |
| **Turbo / Hyper-Turbo** | Des niveaux de blindes bien plus courts que l'événement standard, donc les stacks deviennent courts très vite et le push or fold arrive tôt | Sessions courtes — joueurs à l'aise avec le push or fold |
| **Mystery Bounty** | Un tournoi à primes où chaque élimination (en général à partir d'une phase donnée de l'événement) tire un prix au hasard — la plupart sont petits, quelques-uns sont des jackpots | Joueurs qui courent après un gros gain |
| **MTT** | Tournoi multi-tables (Multi-Table Tournament) — un gros field réparti sur de nombreuses tables | Tout le monde — le format le plus courant |
| **SNG (sit & go)** | Démarre dès que les places sont remplies (pas d'heure fixe) — en général 6–9 joueurs | Partie rapide, pas besoin de planning |

**Pour les débutants :** commence par un **MTT freezeout** — coût connu, règles simples, aucune décision de recave à gérer.

Les trois noms de formats que tu croiseras le plus souvent sur un programme de tournois méritent une vraie définition :

### C'est quoi un tournoi freezeout ?

Un tournoi freezeout donne à chaque joueur exactement un buy-in. Tu perds tes jetons, tu es éliminé — pas de recave, pas de réentrée. C'est le format de tournoi d'origine, et le meilleur pour débuter, parce que ton coût total est fixé dès l'instant où tu t'inscris.

### C'est quoi un PKO (KO progressif) ?

Un PKO (KO progressif) est un tournoi bounty où, en général, environ la moitié de chaque buy-in va dans le prize pool normal et l'autre moitié devient une prime sur la tête du joueur. Quand tu élimines quelqu'un, tu encaisses généralement tout de suite une partie de sa prime en argent, et le reste s'ajoute à ta propre prime — tu deviens une cible de plus en plus grosse à mesure que tu gagnes. La répartition exacte varie selon le site et l'événement ; le 50/50 est courant mais pas universel, donc vérifie le lobby ou la feuille de structure. (Un article complet sur la stratégie PKO arrive bientôt dans cette série.)

### C'est quoi un tournoi deepstack ?

Un tournoi deepstack te donne au départ beaucoup plus de jetons par rapport aux blindes que l'événement standard de la même série, et l'associe en général à des niveaux de blindes plus longs. **Il n'existe aucun seuil standardisé** — « deepstack » est toujours une étiquette relative. Calcule à partir de la feuille de structure combien de grosses blindes vaut ton stack au niveau 1, puis compare avec les 100–200 BB d'un événement standard. Plus de jetons et une horloge plus lente, ça veut dire plus de jeu postflop, plus de marge pour te remettre d'une erreur, et des journées plus longues.

**Et les recaves et les add-ons ?** Dans un tournoi rebuy, tu peux racheter pendant une fenêtre fixe au début — dans beaucoup d'événements, à chaque fois que ton stack est égal ou inférieur au montant de départ, sans avoir besoin d'être éliminé ; un add-on est un achat de jetons facultatif et unique, proposé en général à la fermeture de cette fenêtre. Ensuite, l'événement se joue comme un freezeout.

---

## C'est quoi un satellite au poker ?

Un satellite est un tournoi plus petit dont le prix n'est pas de l'argent — c'est **un ticket d'entrée** pour un tournoi plus gros et plus cher.

**Exemple :**
- Buy-in du WSOP Main Event : **$10 000**
- Buy-in du satellite : **$500** (20 joueurs)
- Prix : **1 place** pour le Main Event

Au lieu de dépenser $10 000, tu affrontes 19 autres joueurs dans un tournoi à $500. Une seule personne remporte la place à $10 000.

**Les satellites en cascade** descendent encore plus bas. Un super-satellite à $5 → un qualificatif à $55 → un événement à $215 → un Main Event online à $1 050. Beaucoup de joueurs des grands événements y sont entrés via une chaîne de satellites, pour une fraction du buy-in direct.

==g:La stratégie en satellite n'a rien à voir avec un tournoi classique — dans un satellite qui distribue plusieurs places identiques, dès que tu as assez de jetons pour être sûr d'avoir ta place, arrête de prendre des risques : couche même de bonnes mains pour ne pas faire la bulle. Le satellite « winner-take-all » qui ne distribue qu'une seule place est l'exception : il se joue pour la première place, en chip EV.==

---

## Comment participer à un tournoi de poker ? 3 façons de s'inscrire

### Option A : le buy-in direct au casino (le plus simple)
1. Trouve le comptoir d'inscription de la salle de poker (ou le comptoir des tournois pour les gros événements)
2. Présente une **pièce d'identité avec photo valide** + ta carte de fidélité si elle est exigée
3. Paie le buy-in en espèces, en jetons ou par carte
4. Récupère ta carte de placement (seat card) : numéro de table + numéro de siège
5. Va à ta table, donne la carte de placement au croupier et reçois tes jetons
6. Compte ton stack de départ avant de jouer ta première main — les erreurs arrivent

### Option B : l'inscription en ligne à l'avance
La plupart des grands festivals live te permettent de t'inscrire en ligne à l'avance :
- Crée un compte sur la plateforme de l'événement (par exemple l'appli WSOP LIVE plus un compte Caesars Rewards pour les WSOP, les onglets « Events » et « Live » du lobby PokerStars pour les événements EPT/APPT)
- Paie le buy-in en ligne
- À ton arrivée sur place → vérification d'identité → impression de la carte de placement à une borne ou retrait au comptoir
- Tu évites la file d'inscription — ça vaut le coup pour les gros événements

### Option C : la qualification par satellite
- Trouve des satellites en ligne (PokerStars Power Path, les satellites WSOP de GGPoker) ou sur place
- Gagne le satellite → tu reçois un ticket d'entrée pour l'événement visé
- Présente-toi au comptoir d'inscription du main event → ticket + pièce d'identité → carte de placement

**Les inscriptions ouvrent en général 1–3 heures avant le début du tournoi.** Pour les grands festivals, inscris-toi en ligne la veille pour être sûr d'avoir ta place.

---

## Comment bien jouer un tournoi de poker ? La stratégie phase par phase

Un seul article ne peut pas enseigner toute la stratégie de tournoi — c'est le rôle des articles de la série — mais voici le squelette, phase par phase, sur lequel repose tout plan gagnant :

**Premiers niveaux (100BB+) :** joue un poker serré et attentif à ta position, et vois des flops bon marché avec des mains capables de casser les grosses paires. Savoir [quelles mains de départ jouer](/fr/blog/holdem-starting-hands-chart), et s'y tenir avec discipline, évite la plupart des catastrophes de débutant. Ne brûle pas ton stack en bluff pendant la première heure — personne ne se couche au niveau 1.

**Milieu de tournoi (30–60BB) :** avec les antes, chaque pot vaut la peine d'être disputé. Ouvre plus large en position tardive, vole les blindes, défends ta grosse blinde plus souvent, et commence à repérer qui est short stack à ta table.

**Short stack (sous 20BB) :** le push or fold prend le relais — les maths sont ici pratiquement résolues, et deviner coûte de l'argent réel. Apprends les ranges de shove dans [la stratégie short stack](/fr/blog/holdem-short-stack).

**Bulle et table finale :** les maths de la survie prennent le pas sur les maths des jetons. La pression des gains change les mains que tu peux jouer — les articles sur la bulle et l'ICM cités plus haut, dans la partie sur les phases, expliquent exactement comment.

---

## Que se passe-t-il le Jour 1 ? Heure par heure

C'est la partie que la plupart des débutants n'apprennent qu'à leurs dépens. Voici une chronologie réaliste d'un Jour 1 pour un freezeout live à $300 qui commence à 12 h :

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:hsl(var(--primary));margin-bottom:14px">Chronologie du Jour 1 — freezeout à $300, 10 000 jetons de départ</div>
<div style="display:grid;gap:10px;font-size:13px">
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">10 h 30</div>
<div style="color:hsl(var(--foreground))">Ouverture des inscriptions. Pièce d'identité, paiement, carte de placement. Tu trouves ta table.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">12 h</div>
<div style="color:hsl(var(--foreground))">Les cartes sont distribuées. Niveau 1 : blindes 25/50. Tu as 200BB. Joue un poker d'observation.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">12 h 40 – 14 h 40</div>
<div style="color:hsl(var(--foreground))">Niveaux 2–4. L'inscription tardive (late reg) est encore ouverte. Le field grossit. Les antes arrivent selon la feuille de structure (niveau 3 dans l'exemple plus haut). Certains joueurs sont déjà éliminés.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">~15 h 30</div>
<div style="color:hsl(var(--foreground))">Fin de l'inscription tardive. Annonce du nombre final d'inscrits. Le prize pool est confirmé.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">~17 h</div>
<div style="color:hsl(var(--foreground))">Pause dîner (1 heure en général). ~40 % du field est éliminé. Les tables sont regroupées.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">18 h – 21 h</div>
<div style="color:hsl(var(--foreground))">La bulle approche. Le jeu passe en hand-for-hand (main par main). La pression est à son maximum. Une élimination = tout le monde est payé.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0">
<div style="color:#22c55e;font-weight:700">21 h – 23 h</div>
<div style="color:hsl(var(--foreground))">ITM — la bulle des places payées éclate. Les joueurs restants mettent leurs jetons en sac (bag) ou jouent jusqu'à la table finale le soir même.</div>
</div>
</div>
</div>

---

## Que signifie être ITM au poker ? Structure des gains et paliers

**Être ITM (In The Money — dans l'argent), c'est atteindre une place payée : ton gain est garanti, quel que soit ton classement final.**

**Structure typique :** les 10–15 % du field les mieux classés sont payés.

| Taille du field | Joueurs payés | Min-cash (typique) | 1re place (typique) |
|:---|:---:|:---:|:---|
| 100 | ~13 | 1,5–2× le buy-in | 25–30 % du prize pool |
| 500 | ~60 | 1,5–2× le buy-in | 20–25 % du prize pool |
| 2 000 | ~250 | 1,7–2,2× le buy-in | 13–18 % du prize pool |
| 10 000 | ~1 200 | 1,5–2× le buy-in | 8–12 % du prize pool |

**Exemple réel (WPT Seminole Rock 'N' Roll Poker Open Championship 2024, buy-in de $3 500, 1 435 entrées) :**
- Prize pool : $4 592 000 ($3 200 de chaque buy-in vont dans la cagnotte — le reste, ce sont les frais)
- Joueurs payés : 180 (~12,5 % du field)
- Min-cash : environ 1,83× le buy-in
- 1re place : $662 200 (~14 % du prize pool)

La grille des gains peut se consulter avant le début du tournoi, mais le nombre final de places payées et les montants exacts ne sont souvent confirmés qu'après la clôture des inscriptions, des recaves et des add-ons. Demande la **feuille de structure** à l'inscription — elle liste les niveaux de blindes, les antes, le stack de départ et la grille des gains.

---

## Les mots du tournoi que tu entendras dès le Jour 1

Ces 16 termes couvrent l'essentiel de ce que tu entendras à table. Pour tout le vocabulaire de A à Z, consulte le [jargon du poker](/fr/blog/holdem-glossary).

| Terme | Ce que ça veut dire |
|------|--------------|
| **ITM** | In The Money — tu as atteint une place payée |
| **Bulle** | La phase juste avant l'ITM — une élimination avant que tout le monde soit payé |
| **Hand-for-hand** | Toutes les tables jouent une main à la fois pendant la bulle, pour empêcher le stalling (jouer la montre) |
| **Feuille de structure** | Le document officiel qui liste les niveaux de blindes, les antes et la grille des gains |
| **Chip leader** | Le joueur qui a le plus de jetons |
| **Short stack** | Un joueur qui a très peu de jetons par rapport aux blindes |
| **Shove / jam / faire tapis** | Partir à tapis (pousser tout ton stack au milieu) |
| **Late reg** | La fenêtre d'inscription tardive — tu peux entrer après le début du tournoi |
| **Réentrée (re-entry)** | Racheter une entrée après avoir été éliminé (uniquement pendant la late reg) |
| **Satellite** | Un tournoi qualificatif dont le prix est une place dans un plus gros événement |
| **PKO** | KO progressif — des tournois à primes où la prime grossit |
| **Mystery Bounty** | Un format à primes où le prix de chaque élimination est tiré au hasard |
| **Turbo** | Une structure aux niveaux de blindes bien plus courts ; un hyper-turbo est encore plus court |
| **Add-on** | Un achat de jetons supplémentaires, unique, proposé à tous à la fin de la période de recave, quelle que soit la taille du stack |
| **ICM** | Independent Chip Model — un cadre mathématique pour la valeur des jetons en tournoi |
| **Min-cash** | La place payée la plus basse — le minimum que tu touches en finissant dans l'argent |

---

## Ta checklist pour un premier tournoi

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:hsl(var(--primary));margin-bottom:14px">Avant de partir de chez toi</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Pièce d'identité avec photo valide</strong> — passeport ou permis de conduire. Aucune exception.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Le buy-in + 20 % de marge</strong> en espèces — certains établissements n'acceptent pas la carte</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Carte de fidélité du casino</strong> si elle est exigée (par exemple Caesars Rewards pour les WSOP)</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>L'e-mail de confirmation d'inscription</strong> si tu t'es inscrit en ligne à l'avance</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Des vêtements confortables — un tournoi dure 6–12 heures. Prends une veste (les salles de poker sont souvent climatisées).</span></div>
</div>

<div style="font-size:13px;font-weight:700;color:hsl(var(--primary));margin:16px 0 10px">Sur place</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Arrive 30–45 min avant le début. Les files d'inscription peuvent être longues.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Compte tes jetons de départ avant de jouer ta première main. S'il en manque, préviens tout de suite le croupier.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Demande la feuille de structure — sache quand arrivent les antes et à quelle heure tombe la pause dîner.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(255,150,0,0.12);border:1.5px solid rgba(255,150,0,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#ff9600">!</span><span><strong>Pas de téléphone à table pendant qu'une main est en cours</strong> — la plupart des salles sanctionnent.</span></div>
</div>
</div>

---

:::readnext[À lire ensuite]
/fr/blog/holdem-tournament-vs-cash-game | Cash game ou tournoi au poker : quelle différence, lequel choisir ? | /images/tournament-table-action.webp
/fr/blog/holdem-bubble | Comment jouer la bulle au poker ? Gros stack, stack moyen et short stack | /images/holdem-bubble-hero.webp
/fr/blog/holdem-icm | ICM au poker : l'Independent Chip Model expliqué, avec l'exemple à la main | /images/holdem-icm-hero.webp
:::

## FAQ

**Q. Combien de temps dure un tournoi de poker ?**

A. Les tournois quotidiens des casinos locaux durent en général 4–8 heures. Les événements des grandes séries, comme les championnats WPT, s'étalent sur 4–6 jours avec plusieurs mises en sac des jetons en fin de journée — et le WSOP Main Event dure près de deux semaines, de ses premières journées (Day 1) jusqu'à la table finale. À l'inscription, demande la feuille de structure : elle t'indiquera la durée prévue des journées selon la durée des niveaux de blindes et la taille du field de départ.

**Q. Quelle est la différence entre un PKO et un tournoi bounty ?**

A. Dans un tournoi bounty (knockout) classique, chaque joueur porte une prime fixe — tu élimines quelqu'un, tu encaisses le montant entier, et les primes ne changent jamais. Dans un PKO (KO progressif), les primes grossissent : tu encaisses généralement une partie de la prime du joueur éliminé en argent, et le reste s'ajoute à la prime sur ta propre tête. Résultat, les chip leaders d'un PKO deviennent des cibles de plus en plus précieuses au fil de l'événement.

**Q. Quelles sont les règles des recaves (rebuy) et des add-ons ?**

A. Dans un tournoi rebuy, tu peux racheter des jetons pendant une période fixe — dans beaucoup d'événements, à chaque fois que ton stack est égal ou inférieur au montant de départ, sans avoir besoin d'être éliminé — en général les premiers niveaux de blindes. Un add-on est un achat de jetons facultatif et unique, proposé en général à tous à la fin de la période de recave, quelle que soit la taille du stack. Une fois cette fenêtre fermée, l'événement se joue comme un freezeout. Les règles exactes varient selon les salles, donc vérifie la feuille de structure.

**Q. Comment la salle gagne-t-elle de l'argent sur un tournoi de poker ?**

A. La salle prélève des frais en plus de chaque buy-in — la partie « +$9 » d'une entrée à « $100+$9 ». Ces frais (en général environ 8–10 % sur les grands événements live, davantage sur les petits tournois quotidiens) sont le revenu de la salle ; la partie « $100 » va intégralement dans le prize pool que se disputent les joueurs. Une salle de tournois gagne donc de l'argent grâce au volume d'entrées et à leurs frais, pas sur les gains eux-mêmes, qui ne font que circuler entre les joueurs.

**Q. Quel est le prix d'entrée pour un tournoi de poker ?**

A. Tu paies un buy-in fixe, souvent noté en deux parties : sur un buy-in de $109 écrit « $100+$9 », $100 alimentent le prize pool partagé entre tous les inscrits et $9 reviennent à la salle (sur les grands événements live, ces frais tournent autour de 8–10 %). En échange, tu reçois un stack de départ, qui n'a aucune valeur en espèces.

**Q. Que veut dire ITM au poker ?**

A. ITM = « In The Money », dans l'argent. Tu as atteint une place qui te garantit un gain. Dans un tournoi de 200 joueurs qui paie 25 places, tu es ITM dès que 175 joueurs ont été éliminés et qu'il n'en reste que 25. Ton min-cash représente en général 1,5–2× ton buy-in.

**Q. Peut-on rejoindre un tournoi de poker déjà commencé ?**

A. Oui, pendant la fenêtre d'inscription tardive — en général les premiers niveaux de blindes, souvent deux à quatre heures après le début. Tu reçois quand même le stack de départ complet, mais comme les blindes ont monté, tu t'assieds avec moins de grosses blindes que ceux qui sont entrés tôt. Une fois la late reg fermée, plus aucune entrée n'est acceptée.

**Q. Peut-on quitter un tournoi de poker en cours et garder ses jetons ?**

A. Non. Contrairement au cash game, les jetons de tournoi ne sont pas de l'argent : ils n'ont aucune valeur en espèces et ne peuvent pas être encaissés en cours de route. Si tu t'en vas, tes jetons restent en jeu et continuent de payer blindes et antes jusqu'à disparaître. Les gains normaux ne sont versés que si tu termines à une place payée (ITM) ; dans les formats knockout et PKO, tu peux aussi encaisser des primes à part.

**Q. Gagner un tournoi de poker, c'est de la chance ou du skill ?**

A. Les deux — mais c'est le skill qui décide qui gagne sur le long terme. Un seul tournoi comporte une variance énorme : tu peux jouer parfaitement et sauter quand même quand tes as se font craquer, ce qui explique pourquoi même les meilleurs pros traversent de longues périodes sans gros gain. Sur des centaines d'événements, en revanche, les meilleurs joueurs atteignent la table finale bien plus souvent que le hasard ne le permettrait. Le poker est un jeu de skill enveloppé de chance à court terme — et les tournois en concentrent simplement plus que le cash game.

**Q. Que signifie MTT au poker ?**

A. MTT veut dire « Multi-Table Tournament », un tournoi multi-tables : un gros field réparti sur de nombreuses tables. C'est le format de tournoi le plus courant. Pour un premier tournoi, le plus simple est un MTT freezeout — coût connu, règles simples, aucune décision de recave à gérer.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Analyse</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cash game ou tournoi au poker : quelle différence, lequel choisir ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Valeur des jetons, blindes qui montent, ICM — quel format te correspond</div>
  </a>
  <a href="/fr/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Mains de départ au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quelles mains jouer dans les premiers niveaux</div>
  </a>
  <a href="/fr/blog/holdem-short-stack" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Short stack</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment jouer un short stack au poker ? Stratégie tournoi à 15, 10 et 5 BB</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le push or fold quand les blindes se resserrent</div>
  </a>
  <a href="/fr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pour commencer</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles du poker Texas Hold'em pour débutants : comment jouer pas à pas</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Maîtrise d'abord les bases</div>
  </a>
  <a href="/fr/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blindes</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Qu'est-ce qu'une blinde au poker ? Petite blinde, grosse blinde et ante</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les niveaux de blindes commencent ici — SB, BB et antes</div>
  </a>
  <a href="/fr/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Positions</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les positions à la table de poker expliquées</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi ta place dicte chaque décision en tournoi</div>
  </a>
</div>
`.trim(),
};
