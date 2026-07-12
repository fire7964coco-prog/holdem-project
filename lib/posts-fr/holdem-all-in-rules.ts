import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Règles du tapis au Texas Hold'em : side pots, relances et abattage",
  seoTitle: "Tapis au poker : que peux-tu vraiment gagner ? — Side pots",
  desc: "Tu fais tapis et le donneur sépare les jetons en deux tas. Règles du tapis au Texas Hold'em : table stakes, pot principal, side pots, relances et abattage.",
  tldr: "Faire tapis, c'est miser tous les jetons que tu as devant toi. Tu ne peux gagner de chaque adversaire que ce que tu as suivi (le pot principal) ; les jetons en trop des gros tapis forment un side pot auquel tu n'as pas droit. Un tapis inférieur à une relance complète NE rouvre PAS les enchères pour ceux qui ont déjà parlé.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-13",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠",
  tags: [
    "règles tapis all in poker",
    "faire tapis poker",
    "side pot poker",
    "pot annexe poker",
    "que se passe-t-il quand on fait tapis",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "Tapis au Texas Hold'em — un joueur pousse tous ses jetons au centre pendant que le donneur sépare le pot principal et le side pot sur le tapis vert",
  content: `
Tu es court en jetons. Tu fais tapis. Le joueur derrière toi suit. Un troisième relance. Le donneur commence à séparer les jetons en deux tas.

Et tu n'as aucune idée de ce qui se passe.

J'ai été à cette table. La première fois que j'ai fait tapis en cash game live, je ne savais pas si je pouvais encore gagner quelque chose, si l'autre joueur avait le droit de relancer, ni même quel tas de jetons était le mien. Personne ne me l'avait expliqué.

==Ce guide couvre toutes les situations : pot principal, side pots, qui a le droit de relancer et l'ordre de l'abattage.== Fini de rester figé quand le donneur se met à compter les tapis. (Si le déroulé de base des enchères te reste flou, le [guide des règles pour débutants](/fr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") reprend tout depuis zéro.)

## Que veut dire « faire tapis » au Texas Hold'em ?

Faire tapis (all-in), c'est miser tous les jetons que tu as devant toi. Une fois que tu t'engages, tu ne peux plus rien ajouter — et personne ne peut te forcer à te coucher.

La base, c'est la règle du **table stakes** : tu ne peux miser que les jetons que tu avais sur la table au début du coup. Pas question de sortir de l'argent de ta poche, d'emprunter à un pote ou de miser ta montre ou tes clés de voiture — ça, c'est le poker de cinéma.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terme | Ce que ça veut dire |
|------|---------|
| Push / Shove / Jam | Argot anglais pour « faire tapis » |
| Table stakes | Tu ne peux miser que ce que tu avais au début du coup |
| Doubler (double up) | Gagner un tapis et doubler son tapis |
| Pot principal (main pot) | Le pot que tout le monde — y compris le joueur à tapis — peut gagner |
| Side pot (pot annexe) | Jetons que seuls les gros tapis peuvent gagner ; le joueur à tapis en est exclu |

</div>

==g:Une fois à tapis, tu es assuré de voir toutes les cartes communes restantes.== Personne ne peut te faire coucher au bluff. Tes cartes restent en jeu jusqu'à la rivière.

---

## Comment annoncer son tapis

Deux façons valables :

**1. Annonce verbale** — Dis « tapis » (ou « all-in ») clairement, pour que le donneur et les adversaires t'entendent. C'est la méthode la plus sûre. Une fois que tu l'as dit, tu es engagé.

**2. Pousser tous ses jetons** — Fais glisser tout ton tapis vers le centre en un seul geste net. Pousser les jetons en plusieurs fois peut ressembler à un string bet, donc déplace tout d'un coup.

![Abattage d'un tapis au Texas Hold'em — un board K♠ 10♣ 7♦ 4♥ 2♣ avec les jetons séparés en pot principal et side pot étiquetés](/images/holdem-all-in-declare.webp)

==r:Ne pousse jamais un seul jeton sans rien dire — le donneur ne comptera que la valeur de ce jeton, pas ton tapis complet.== Annonce toujours « tapis » à voix haute, ou pousse tout ton tapis d'un coup.

---

## Comment fonctionnent les side pots au poker ? (Pourquoi le joueur à tapis est plafonné)

Le joueur à tapis ne peut gagner que ce qu'il a mis, multiplié par le nombre d'adversaires qui l'ont suivi. Tous les jetons misés au-delà forment un **side pot** qui appartient exclusivement aux joueurs qui l'ont alimenté.

![Side pot après un tapis au Texas Hold'em — le donneur sépare les jetons en pot principal et side pot pendant que le Joueur A est plafonné](/images/holdem-all-in-side-pot.webp)

### Exemple à 3 joueurs (le cas standard)

| Joueur | Tapis | Action |
|--------|-------|--------|
| Joueur A | 100 jetons | Tapis |
| Joueur B | 300 jetons | Suit 100, puis mise 50 de plus |
| Joueur C | 300 jetons | Suit 100, puis suit les 50 |

**Pot principal :** 100 × 3 = **300 jetons** (A, B et C peuvent le gagner)

**Side pot :** 50 × 2 = **100 jetons** (seulement B et C)

==Le Joueur A peut gagner le pot principal de 300 jetons à l'abattage. Mais même si A a la meilleure main de tous, il ne peut pas toucher au side pot de 100 jetons.== C'est B ou C qui le remportera.

### Exemple à 4 joueurs avec des tapis différents

C'est là que ça se complique — et là que la plupart des débutants se perdent.

| Joueur | Tapis | Fait tapis pour |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | suit tout |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | Montant | Qui peut le gagner |
|:---|:---:|:---|
| Pot principal | 100 × 4 = **400** | A, B, C, D |
| Side pot 1 | 100 × 3 = **300** | B, C, D (A est plafonné) |
| Side pot 2 | 300 × 2 = **600** | C, D (A et B plafonnés) |
| **Total** | **1 300** | — |

</div>

La règle : ==chaque side pot se construit en prenant la différence jusqu'au tapis suivant le plus petit × le nombre de joueurs qui la couvrent.== On calcule du plus petit tapis au plus grand.

---

## Faire tapis rouvre-t-il les enchères ? — La règle que presque tout le monde connaît mal

==r:C'est la règle du tapis qui déclenche le plus de disputes aux tables live — j'ai vu deux joueurs se chamailler dessus pendant cinq minutes avec toute la table qui attendait. Les deux avaient tort.==

**La règle :** si un joueur fait tapis pour **moins qu'une [relance complète](/fr/blog/holdem-betting-actions)**, ce tapis NE rouvre PAS les enchères pour les joueurs qui ont déjà parlé dans ce tour.

![Règle de la relance après un tapis au poker — le Joueur C fait tapis pour moins qu'une relance complète et le Joueur A ne peut que suivre ou se coucher](/images/holdem-all-in-reraise-rule.webp)

**Exemple :**

Blindes $1/$2. Quatre joueurs voient le flop.

1. Le Joueur A mise $10.
2. Le Joueur B relance à $25.
3. Le Joueur C fait tapis pour **$30** (seulement $5 de plus que la relance de B à $25 — pas assez pour l'incrément d'une relance complète).

Que se passe-t-il pour le Joueur A et le Joueur D ?

- Le Joueur A a déjà parlé (il a misé $10). Comme le tapis de C à $30 est **inférieur à une relance complète** (qui exigerait au moins $40 = $25 + $15 de relance minimale), l'action NE se rouvre PAS pour le Joueur A. ==A ne peut que suivre ou se coucher — il ne peut pas relancer.==
- Le Joueur D n'a pas encore parlé — **D, lui, peut relancer normalement**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Montant du tapis | Relance complète ? | Rouvre les enchères ? |
|--------------|-------------|-----------------|
| Moins qu'une relance complète | Non | Non — ceux qui ont déjà parlé ne peuvent que suivre ou se coucher |
| Relance complète ou plus | Oui | Oui — tout le monde peut de nouveau relancer |

</div>

Pourquoi cette règle existe-t-elle ? Elle protège les joueurs contre le fait d'être forcés à des relances plus grosses par des tapis partiels. Une relance complète signale une vraie agression — le tapis d'un court pour quelques jetons, non.

### Cas avancé : et si plusieurs joueurs font tapis court ?

C'est la version qui fait trébucher même les réguliers. Plusieurs tapis courts peuvent **s'additionner** pour former une relance complète — et si leurs incréments combinés atteignent le seuil, les enchères se rouvrent pour ceux qui ont déjà parlé.

C'est la règle officielle de la TDA sur la réouverture des enchères (« re-opening the bet »), et la plupart des cardrooms l'appliquent.

**Exemple (blindes $1/$2, au flop) :**

1. Le Joueur A mise $10.
2. Le Joueur B fait tapis pour **$14** (incrément de +$4 — pas une relance complète à lui seul)
3. Le Joueur C fait tapis pour **$21** (incrément de +$7 — pas une relance complète à lui seul)

Incréments combinés : $4 + $7 = **$11** — ça atteint le seuil de relance minimale de $10.

**Résultat : les enchères SE ROUVRENT pour le Joueur A.** A peut se coucher, suivre ou relancer, même si ni B ni C n'ont fait de relance complète individuellement.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tapis de B | Tapis de C | Incrément combiné | Rouvre pour A ? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — en dessous de $10 | ❌ Non |
| $14 (+$4) | $21 (+$7) | $11 — atteint les $10 | ✅ Oui |
| $15 (+$5) | $25 (+$10) | $15 — atteint les $10 | ✅ Oui |

</div>

Le seuil de relance minimale est toujours la *dernière mise ou relance complète valide* — jamais un total cumulé quelconque.

### Guide de décision rapide — ce tapis rouvre-t-il les enchères ?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Rouvre pour ceux qui ont déjà parlé ? |
|---|---|
| Un seul tapis < relance complète | ❌ Non — seulement suivre ou se coucher |
| Un seul tapis ≥ relance complète | ✅ Oui — tout le monde peut relancer |
| Plusieurs tapis courts, somme < relance complète | ❌ Non |
| Plusieurs tapis courts, somme ≥ relance complète | ✅ Oui |
| Joueur qui n'a PAS encore parlé | ✅ Peut toujours relancer (quoi qu'il arrive) |

</div>

---

## Règles de l'abattage avec un tapis

Quand les enchères sont closes et qu'un joueur est à tapis, voici ce qui se passe à l'abattage :

1. **Les cartes sont retournées face visible.** En tournoi, toutes les mains impliquées dans le tapis sont en général montrées dès que les enchères sont terminées. En cash, c'est d'abord la [règle du dernier agresseur à l'abattage](/fr/blog/holdem-showdown-rules) qui s'applique, puis les joueurs à tapis montrent.
2. **Les side pots sont attribués en premier.** Le donneur résout d'abord le side pot créé le plus récemment, puis remonte jusqu'au pot principal.
3. **Les cartes parlent.** La meilleure main gagne chaque pot auquel elle a droit — peu importe ce que les joueurs annoncent avoir.
4. **Il peut y avoir plusieurs gagnants.** Le Joueur A peut gagner le pot principal et le Joueur B le side pot. Aucun ne rafle tout juste parce qu'il a gagné « son » pot.

==g:Un joueur peut gagner le pot principal et perdre le side pot. Les deux résultats sont valables.==

**Cas particulier :** si un side pot ne compte plus qu'un seul joueur (tous les autres se sont couchés), ce joueur récupère ces jetons immédiatement — pas besoin d'abattage pour ce pot.

---

## Que se passe-t-il si tu fais tapis de travers ? — 5 erreurs à éviter

### Erreur 1 : croire que le joueur à tapis peut gagner le side pot

Il ne peut pas. Une fois le joueur à tapis plafonné, tout jeton supplémentaire misé par les plus gros tapis part dans un pot auquel il n'a aucun droit.

### Erreur 2 : ne pas connaître la règle de qui peut relancer

Un tapis partiel du Joueur C ne donne pas au Joueur A une seconde chance de relancer. La connaître par cœur coupe court aux disputes avant qu'elles ne commencent.

### Erreur 3 : ajouter des jetons de sa poche en plein coup

Table stakes. Ce qu'il y a sur la table est tout ce que tu peux miser. Si tu es à tapis pour $80 et que le pot fait $400, tu ne peux gagner que $80 de chaque joueur qui suit.

### Erreur 4 : jeter sa main trop vite

Tu es à tapis pour le pot principal. Deux autres joueurs se battent pour le side pot. Ne jette pas tes cartes — ta main est toujours en jeu pour le pot principal. ==Attends toujours que le donneur ait résolu tous les pots avant de toucher à tes cartes.==

### Erreur 5 : faire tapis par frustration

Le tapis est le coup le plus puissant de la table. Il force les adversaires à une décision de tout ou rien. Cette puissance disparaît quand tu balances tes jetons n'importe comment. Utilise-le au bon moment — pression du court, mains de valeur que tu veux faire payer, bluffs avec une vraie fold equity.

---

:::readnext[À lire ensuite]
/fr/blog/texas-holdem-rules-for-beginners | Les règles du Texas Hold'em pour débutants | /images/rules-texas-holdem.webp
/fr/blog/holdem-showdown-rules | Les règles de l'abattage, expliquées | /images/holdem-showdown-rules-hero.webp
:::

## FAQ

**Q. Peut-on faire tapis pour moins que la grosse blinde ?**

R. Oui. S'il te reste moins de jetons que la grosse blinde, tu es automatiquement à tapis pour ce que tu as quand c'est ton tour de la poster. Les autres joueurs paient quand même la grosse blinde complète — tout ce qui dépasse ta contribution part dans un side pot.

**Q. Que se passe-t-il si tu gagnes le tapis mais perds le side pot ?**

R. Tu empoches le pot principal (ce que tu as suivi de chaque joueur) et l'autre joueur empoche le side pot. Chacun gagne la part à laquelle il avait droit.

**Q. Faire tapis oblige-t-il à montrer sa main ?**

R. En tournoi, oui — dès que les enchères sont closes avec un tapis, toutes les mains impliquées sont mises face visible. En cash live, les règles normales de l'abattage s'appliquent : le dernier agresseur montre en premier, puis les autres montrent ou jettent leurs cartes.

**Q. Peut-on faire un « run it twice » sur un tapis au poker ?**

R. Distribuer deux fois les cartes communes restantes et partager le pot (run it twice) est autorisé dans beaucoup de cash games si les deux joueurs sont d'accord après le tapis. En tournoi, c'est en général interdit. Il faut se mettre d'accord avant de dérouler les cartes qui restent.

**Q. En quoi consiste exactement la règle du « table stakes » ?**

R. Le table stakes signifie que tu ne peux miser que les jetons que tu avais devant toi au début du coup. Tu ne peux pas ajouter d'argent une fois le coup en cours. Ça protège les deux camps : on ne peut jamais te forcer à risquer plus que ton tapis, et l'adversaire ne peut pas miser d'un coup plus que ce que tu peux couvrir.

**Q. Si deux joueurs font tapis pour des montants différents, qui montre en premier ?**

R. Le dernier tapis compte comme la dernière action agressive. Les règles normales de l'abattage s'appliquent : le dernier à avoir fait tapis ou un geste agressif montre en premier. En cash, si c'était un tapis suivi sans autre action, celui qui a suivi peut jeter ses cartes s'il perd après avoir vu la main du joueur à tapis (en tournoi, toutes les mains impliquées restent face visible).

**Q. Les règles du tapis sont-elles différentes en tournoi et en cash ?**

R. Le cœur est le même, avec deux différences pratiques. Un : en tournoi, toutes les mains impliquées dans un tapis sont mises face visible dès que les enchères sont closes (Règle 16 de la TDA) — tu ne peux pas jeter tes cartes avant l'abattage. En cash, l'ordre normal de l'abattage s'applique et tu peux le faire. Deux : le run it twice est courant en cash (si les deux joueurs acceptent) mais généralement interdit en tournoi.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Guide pilier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Les règles du Texas Hold'em pour débutants</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Toutes les règles, des blindes à l'abattage</div>
  </a>
  <a href="/fr/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Abattage</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Les règles de l'abattage</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Qui montre en premier et quand tu peux jeter tes cartes</div>
  </a>
</div>
`.trim(),
};
