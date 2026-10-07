import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-card-counting",
  title: "Peut-on compter les cartes au poker ? Oui, mais pas comme tu le crois",
  seoTitle: "Peut-on compter les cartes au poker ? — Oui, mais autrement",
  desc: "Le comptage des cartes façon blackjack ne marche pas au poker, mais le poker a le sien. L'interdit en salle, et comment outs et bloqueurs le remplacent.",
  tldr: "Pas comme au blackjack : le paquet est rebattu à chaque main et trop peu de cartes sont visibles, donc suivre les hautes et les basses cartes ne te donne aucun avantage. Mais le poker a son propre comptage, admis en salle : compter ses outs, utiliser les bloqueurs et suivre les cartes mortes pour lire ce que l'adversaire ne peut pas avoir.",
  category: "odds",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🧮",
  image: "/images/holdem-card-counting-hero.webp",
  imageAlt: "Infographie d'un tirage couleur 9♠ 8♠ sur un flop Q♠ 7♠ 2♥ avec neuf outs — le comptage qui marche vraiment au poker",
  tags: ["compter les cartes au poker", "peut on compter les cartes au poker", "compter les cartes au poker interdit", "apprendre à compter les cartes au poker", "comptage de cartes poker", "bloqueurs poker", "compter ses outs", "cartes mortes"],
  content: `
Tous les joueurs de poker qui arrivent du blackjack posent la même question dès leur première session : « Je peux compter les cartes ici ? » Je l'ai posée moi aussi — j'ai passé un mois à essayer de tenir un comptage courant à une table de Hold'em, jusqu'au jour où un donneur a ri et m'a dit que je gaspillais mon énergie sur le mauvais calcul. Il avait raison. Le comptage du blackjack ne sert à rien au poker, mais ça ne veut pas dire que compter ne sert à rien. Ça veut juste dire que tu comptes ==d'autres choses.==

==Oui, au poker on « compte les cartes » — mais pas le paquet. Tu comptes tes outs, tes bloqueurs et les cartes mortes, et c'est parfaitement admis à la table.== Cet article t'explique pourquoi la méthode du blackjack meurt à une table de poker, à quoi ressemble la version poker, si quoi que ce soit là-dedans enfreint les règles, et dans quelle famille du poker le comptage à l'ancienne fonctionne réellement.

Le côté chiffres — transformer les cartes que tu vois en vraie décision — commence par [compter tes outs](/fr/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp"), le vrai savoir-faire de « comptage » au poker.

---

### Le comptage au poker en un coup d'œil

:::stripe
0 | Avantage tiré d'un comptage du paquet façon blackjack
9 | Outs d'un tirage couleur — le vrai nombre que tu comptes
100 % | Compter ses outs et ses bloqueurs : entièrement admis à la table
:::

---

## Peut-on compter les cartes au poker ?

**Oui et non — tu ne peux pas compter le paquet comme au blackjack, mais tu comptes bel et bien tes outs, tes bloqueurs et les cartes mortes, et tout ça est admis.** L'habitude du blackjack qui consiste à suivre les hautes et les basses cartes pour repérer un « paquet chaud » ne te donne aucun avantage au poker. La version poker, ce sont d'autres calculs pour un autre jeu.

Si tu imagines un comptage hautes-basses comme au cinéma, oublie-le — il meurt à une table de poker pour des raisons de structure (section suivante). Mais si « compter les cartes » veut dire ==utiliser les cartes que tu vois pour deviner ce qui a des chances d'arriver et ce que l'adversaire ne peut pas avoir,== alors le poker n'est *que* du comptage. C'est ce savoir-faire qui sépare les gagnants de ceux qui espèrent.

---

## Pourquoi le comptage des cartes du blackjack ne marche pas au poker ?

**Le comptage du blackjack fonctionne parce qu'un sabot est joué sur de nombreuses mains pendant que tu affrontes un croupier aux règles fixes — le poker casse ces trois conditions.** Voici précisément pourquoi la méthode ne se transpose pas :

:::card
🔀 | Le paquet repart de zéro à chaque main | Le comptage du blackjack se nourrit d'un sabot distribué sur de nombreuses mains, où l'information s'accumule. Au poker, on rebat les cartes à chaque main, donc rien ne se reporte — chaque main repart d'un paquet complet et aléatoire
🙈 | Trop peu de cartes sont visibles | Les cartes fermées de chaque joueur restent face cachée. Tu vois tes deux cartes, le board (les cartes communes) et ce qui est montré à l'abattage (showdown) — une poignée de cartes — assez pour compter tes outs sur la main en cours, jamais assez pour un comptage courant façon blackjack
👥 | Tu joues contre des adversaires, pas contre la maison | Il n'y a pas de croupier aux règles fixes sur qui prendre l'avantage. Un « paquet riche en hautes cartes » ne veut rien dire quand une paire d'as reste premium quoi qu'il arrive — tu gagnes en ayant une meilleure main ou en prenant une meilleure décision, pas grâce à un comptage favorable
:::

Au blackjack, un paquet chargé en hautes cartes te favorise mathématiquement, alors tu mises gros quand le comptage est bon. Au poker, il n'existe aucun « paquet favorable » équivalent — l'avantage vient du jeu contre les *joueurs* et des cartes que tu vois à cet instant : les outs, les bloqueurs, le board.

---

## Compter les cartes au poker ou au blackjack : quelles différences ?

**Les deux jeux demandent des informations totalement différentes, et c'est pour ça qu'une méthode ne peut pas passer de l'un à l'autre.** Côte à côte :

:::compare
Blackjack | Poker
Toi contre la maison, règles fixes | Toi contre d'autres joueurs
Un sabot sur de nombreuses mains | Cartes rebattues à chaque main
Suivre l'équilibre hautes/basses du paquet | Rien à suivre d'une main à l'autre
Miser gros quand le paquet te favorise | Aucun « paquet favorable » n'existe
Compter peut te faire interdire de table | Compter ses outs de tête, c'est jouer normalement
:::

Le blackjack récompense la mémoire de ce qui est déjà sorti ; le poker récompense la lecture de ce que tu vois *maintenant* — le board, l'action, et les cartes que ta propre main retire de la range de l'adversaire.

---

## Le vrai « comptage » au poker : outs, bloqueurs et cartes mortes

**La version poker du comptage, ce sont trois savoir-faire en direct — compter ses outs, utiliser les bloqueurs et suivre les cartes mortes — tous faits de tête, tous admis, et qui valent bien plus que n'importe quel comptage de blackjack.**

### Compter ses outs

Un ==out== est une carte non vue qui améliore ta main en main probablement gagnante. Un tirage couleur a ==9 outs== (13 cartes d'une enseigne moins les 4 que tu vois) — les cartes de cette enseigne déjà sur le board sont déjà retirées de ces 9, donc ne les barre pas une deuxième fois comme « cartes mortes ». Pour convertir tes outs en chance de gagner approximative, applique la ==règle du 2 et du 4== : multiplie par 4 quand il reste deux cartes à venir, par 2 quand il en reste une.

Un tirage couleur à 9 outs rentre d'ici la river (la rivière) environ ==g:35 %== du temps (9 × 4 = 36 % en estimation rapide — le chiffre exact est 35,0 %). Ce chiffre compte les deux cartes restantes, donc il ne tranche le call que si tu es sûr de voir les deux — plus aucune mise à venir, comme quand tu as fait tapis ou suivi un tapis. Face à une mise au flop que tu devras encore payer à la turn (le tournant), compte seulement la carte suivante : ==9 ÷ 47 = 19,1 %==. La méthode complète — outs « sales » (dirty outs), tirages combinés, pourcentages exacts — se trouve dans le [guide pour compter ses outs](/fr/blog/holdem-outs), et les probabilités de chaque tirage sont dans le [tableau des probabilités](/fr/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

### Les bloqueurs (card removal)

Un ==bloqueur== est une carte de ta main qui réduit les combinaisons que l'adversaire peut tenir. Si le board montre trois piques et que tu tiens le ==b:A♠==, ton adversaire ==r:ne peut pas avoir la couleur max (nut flush)== — c'est toi qui tiens la seule carte qui la fait. Tes bluffs deviennent alors bien plus crédibles, parce que la main la plus effrayante avec laquelle il suivrait est impossible.

![Infographie de A♠ J♦ sur un flop tout pique K♠ 9♠ 4♠ — tenir l'as de pique bloque la couleur max](/images/holdem-card-counting-blocker.webp "Avec le A♠ sur un board à trois piques, aucun adversaire ne peut avoir la couleur max — c'est l'effet de retrait à l'œuvre")

Les bloqueurs marchent aussi en partie. Sur un board ==b:Q-J-9==, la quinte max est K-10. Il existe normalement 16 façons de tenir K-10 (4 rois × 4 dix) ; si tu tiens toi-même un roi ou un dix, tu fais tomber ce nombre à ==12 combinaisons==, donc sa range contient 25 % de combinaisons de quinte max en moins. C'est le cœur du choix des bluffs moderne — plus de détails dans le [guide du 3-bet et des bloqueurs](/fr/blog/holdem-3bet).

### Retrait de cartes et cartes mortes

Chaque carte que tu vois retire des possibilités : c'est l'effet de retrait (card removal). Au Hold'em, un out ne peut pas se trouver sur le board — sinon ta main serait déjà faite — donc les ==cartes mortes== à suivre sont celles exposées *hors* du board : une carte montrée par erreur, une main dévoilée avant de partir au muck, le fold d'un voisin que tu as aperçu par hasard. (Une exception : une carte du board distribuée trop tôt est remélangée dans le talon et peut encore sortir.) Chaque out parmi elles est un out que tu n'as plus ; toute autre carte exposée réduit simplement le paquet non vu. S'ajuster à ces cartes est une habitude constante et discrète que les bons joueurs gardent à chaque tour d'enchères. C'est du comptage, simplement pas celui qui demande un total courant.

---

## Compter les cartes au poker, est-ce interdit ?

**Non — compter tes outs et utiliser tes bloqueurs de tête est un savoir-faire ordinaire du poker, admis à la table, et non une aide extérieure.** La limite à surveiller, ce sont les appareils et les conseils d'autrui pendant le jeu, et chaque salle ou événement fixe ses propres règles là-dessus.

La comparaison avec le blackjack tient à la question de savoir contre qui tu joues. À une table de poker, tu affrontes ==d'autres joueurs== ; la salle se rémunère pour faire tourner la partie au lieu de jouer une main contre toi. Compter ses outs de tête fait partie de ce jeu, et ce n'est pas en soi une raison de te traiter comme un compteur de blackjack.

:::note
Sépare bien le calcul mental des cartes marquées, de la collusion ou du partage d'informations sur les cartes fermées. Les logiciels en ligne ont leurs propres règles : par exemple, la [politique de PokerStars sur les outils](https://www.pokerstars.com/poker/room/prohibited/) interdit les conseils d'action en temps réel et restreint l'usage des solvers tant que son client est ouvert. Vérifie les autorisations de la plateforme concernée au lieu de considérer chaque outil comme l'équivalent du calcul mental.

Dans les tournois qui appliquent les [règles TDA 2026 du poker](https://www.pokertda.com/poker-tda-rules/), la règle 5C interdit d'utiliser des appareils électroniques ou de communication avec une main en jeu. La règle 5D va plus loin : applications de mise, tableaux et autres outils de stratégie ne s'utilisent pas à la table, et les données de stratégie extérieures ne sont pas autorisées. Étudie avec des outils loin du jeu ; prends la décision à la table toi-même.
:::

---

## Le stud à 7 cartes : la variante où le comptage classique fonctionne

**Au stud à 7 cartes, une bonne partie des cartes de chaque joueur est distribuée face visible — tu peux donc vraiment compter le paquet à l'ancienne.** Si tu as besoin d'une carte précise pour compléter ta main, tu peux faire le tour de la table du regard et compter littéralement combien de tes outs sont déjà visibles parmi les cartes ouvertes des adversaires. Chaque out que tu repères est un out mort.

Au Hold'em, les seules cartes distribuées face visible sont les cinq cartes communes — tout le reste reste caché, sauf si c'est montré à l'abattage, retourné lors d'un tapis, montré volontairement ou exposé par accident (une carte aperçue), donc il y a peu à suivre. Mais le stud — et ses cousins le Razz et le Stud Hi-Lo, qui distribuent les mêmes cartes ouvertes — récompense exactement le genre de suivi des cartes dans lequel les compteurs de blackjack excellent. C'est ce que le poker a de plus proche de la version cinéma.

---

## Comment apprendre à « compter » dès ta prochaine session ?

**Tu n'as pas besoin d'un système — juste de trois habitudes qui transforment les cartes visibles en meilleures décisions.**

:::steps
Compte tes outs à chaque tirage | Dès que tu as un tirage, compte les cartes qui le complètent et multiplie — ×4 seulement quand les deux cartes vont arriver (tu as fait tapis, ou la turn et la river sont gratuites), sinon ×2 pour la seule carte suivante. Suis quand cette chance — outs propres uniquement — bat le prix, ou quand les cotes implicites (implied odds) couvrent l'écart
Demande-toi ce que ta main bloque | Avant de bluffer, vérifie si tu tiens une carte qui rend impossible ou moins probable sa meilleure main pour suivre
Ajuste pour les cartes mortes | Retire tout out que tu as vu exposé hors du board — une carte montrée par erreur, une main dévoilée, un fold aperçu. Une carte que tu as vue est sortie du paquet (elle ne peut pas tomber sur le board — sauf si c'était une carte du board distribuée trop tôt et remélangée dans le talon — et aucun autre joueur ne peut la tenir) — mais seulement aperçue par accident : essayer délibérément de voir les cartes d'un autre joueur ne fait pas partie de cette méthode — exposition accidentelle uniquement
:::

Fais ça pendant quelques sessions et ça devient automatique — tu « compteras les cartes » à chaque main, simplement à la façon du poker. L'étape suivante consiste à transformer ces comptes en calls et en folds grâce aux [cotes du pot (pot odds)](/fr/blog/holdem-pot-odds), le calcul qui te dit si tes outs valent le prix.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-outs | Comment compter ses outs | /images/holdem-outs-hero.webp
/fr/blog/holdem-probability | Tableau des probabilités au poker | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Est-il possible de compter les cartes au poker comme au blackjack ?**

A. Non. Le comptage du blackjack suit l'équilibre hautes-basses d'un sabot joué sur de nombreuses mains, mais au poker les cartes sont rebattues à chaque main et les cartes fermées restent cachées, donc il n'y a rien à suivre d'une main à l'autre. Le poker a son propre comptage à la place : les outs, les bloqueurs et les cartes mortes.

**Q. Est-il légal de compter les cartes au poker ?**

A. Calculer de tête tes propres outs et bloqueurs n'a rien d'une triche : les règles de salle l'admettent et cela fait normalement partie du poker. Ce que les salles et les plateformes encadrent, c'est l'aide extérieure pendant le jeu : appareils, tableaux et conseils d'autrui.

**Q. Le comptage des cartes est-il efficace au Texas Hold'em ?**

A. Le comptage du paquet façon blackjack, non — le paquet repart de zéro à chaque main et trop peu de cartes sont visibles. Mais les formes de comptage propres au poker fonctionnent parfaitement au Hold'em : compter tes outs, repérer les bloqueurs et t'ajuster aux cartes mortes que tu as vues sont des savoir-faire essentiels.

**Q. Pourquoi compter les cartes marche au blackjack et pas au poker ?**

A. Au blackjack, tu joues contre un croupier aux règles fixes avec un seul sabot sur de nombreuses mains, donc un paquet riche en hautes cartes te favorise mathématiquement et tu adaptes tes mises. Le poker rebat les cartes à chaque main et t'oppose à d'autres joueurs, donc il n'y a aucun « paquet favorable » à suivre — l'avantage vient de la lecture des adversaires et des cartes que tu vois : les outs, les bloqueurs, le board.

**Q. Quel est l'équivalent du comptage de cartes au poker ?**

A. Compter ses outs (les cartes qui améliorent ta main), utiliser les bloqueurs (les cartes de ta main qui réduisent les combinaisons de l'adversaire) et suivre les cartes mortes (les outs que tu as déjà vus sortir du jeu — une carte montrée par erreur, une main dévoilée au moment du fold — sauf une carte du board distribuée trop tôt, qui retourne dans le talon). Ensemble, ils te permettent de lire ce qui a des chances d'arriver et ce que l'adversaire ne peut pas avoir.

**Q. Peut-on compter les cartes au stud à 7 cartes ?**

A. Oui — bien plus qu'au Hold'em. Au stud, plusieurs cartes de chaque joueur sont distribuées face visible, donc tu peux faire le tour de la table du regard et compter combien de tes outs sont déjà visibles. C'est un vrai comptage du paquet, et c'est un réel avantage au stud.

**Q. Peut-on se faire sortir d'une salle de poker pour avoir compté les cartes ?**

A. Non, pas pour avoir compté tes propres outs ou utilisé tes bloqueurs de tête. Ce sont des savoir-faire normaux dans un jeu contre d'autres joueurs, et la salle prend son rake quel que soit le gagnant, contrairement à un comptage de blackjack dirigé contre la maison.

**Q. Compter ses outs, est-ce la même chose que compter les cartes ?**

A. C'est la version poker du comptage. Tu ne suis pas tout le paquet comme un compteur de blackjack ; tu comptes les cartes non vues précises qui complètent ta main, puis tu convertis ce nombre en pourcentage avec la règle du 2 et du 4 pour décider si tu continues.

**Q. C'est quoi, compter les cartes au casino (blackjack) ?**

A. Au blackjack, compter les cartes consiste à suivre l'équilibre entre hautes et basses cartes d'un sabot distribué sur de nombreuses mains, où l'information s'accumule. Quand le paquet restant est chargé en hautes cartes, il favorise mathématiquement le joueur face au croupier aux règles fixes, et le compteur mise plus gros. Au poker, ce mécanisme ne tient pas : le paquet est rebattu à chaque main et trop peu de cartes sont visibles.

---

## À retenir

1. **Le comptage du blackjack est mort au poker.** Le paquet est rebattu à chaque main, trop peu de cartes sont visibles, et tu joues contre des adversaires, pas contre la maison — suivre les hautes et les basses cartes ne te rapporte rien.
2. **Le comptage au poker, ce sont les outs, les bloqueurs et les cartes mortes.** Tout se fait de tête, tout est admis, et tout vaut bien plus qu'un comptage courant.
3. **C'est un savoir-faire, pas un secret.** Fais le comptage toi-même et garde les outils extérieurs pour l'étude. Compte tes outs, demande-toi ce que tu bloques et retire les cartes mortes que tu as vues — à chaque main.

Commence par le nombre qui décide la plupart des mains : tes outs. Retrouve la méthode complète dans le [guide pour compter ses outs](/fr/blog/holdem-outs), puis transforme ces comptes en calls rentables avec les [cotes du pot](/fr/blog/holdem-pot-odds).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-outs" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment compter ses outs</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le vrai savoir-faire de comptage au poker</div>
  </a>
  <a href="/fr/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Le 3-bet et les bloqueurs</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Choisir ses bluffs grâce à l'effet de retrait</div>
  </a>
  <a href="/fr/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tableau des probabilités au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Transformer ton nombre d'outs en pourcentage</div>
  </a>
  <a href="/fr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cotes & maths</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment calculer la cote du pot</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Savoir si tes outs valent le prix</div>
  </a>
</div>
`.trim(),
};

export default POST;
