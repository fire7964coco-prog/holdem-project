import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-kicker",
  title: "Kicker au poker : c'est quoi, combien par main, et l'as dominé",
  seoTitle: "Même paire, pot perdu ? — C'est quoi le kicker au poker",
  desc: "Même paire, pot perdu ? Le kicker au poker, la carte qui départage : quelles mains en ont et combien, pourquoi A9 perd contre AK, et le piège du carré.",
  tldr: "Le kicker est la carte d'accompagnement la plus haute hors de ta combinaison : il départage deux joueurs qui ont la même main. Carte haute : 4 kickers, paire : 3, double paire : 1, brelan : 2 ; suite, couleur, full et quinte flush n'en ont aucun. Voilà pourquoi AK bat AQ quand l'as du board ne donne qu'une paire d'as à chacun.",
  category: "hand-rankings",
  date: "2026-10-07",
  updated: "2026-10-08",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  image: "/images/holdem-kicker-hero.webp",
  imageAlt: "Deux joueurs retournent A-K et A-Q à l'abattage avec un as sur le board — le kicker roi décide qui remporte le pot",
  tags: ["kicker poker", "kicker au poker", "règle kicker poker", "c'est quoi le kicker au poker", "kicker poker texas hold'em", "kicker poker définition", "as dominé", "carte d'accompagnement poker"],
  content: `
La main qui m'a enfin appris ce qu'est un kicker m'a coûté une cave entière. J'avais ==b:A♠ 9♣==, le board (les cartes communes) a apparié mon as, et j'ai fait tapis en croyant que ma paire max valait de l'or. Il a retourné ==b:A♥ K♦== — la même paire d'as, mais son roi m'a battu au kicker, et le pot a glissé de son côté. Je n'avais pas perdu contre une meilleure *main* ; j'avais perdu contre une meilleure ==carte d'à côté.== Cette carte, c'est le kicker, et elle décide plus de pots que n'importe quel débutant ne l'imagine.

==Le kicker est la règle de départage intégrée au poker lui-même : quand deux joueurs ont le même rang, la plus haute carte restante gagne.== La plupart des explications te donnent une définition d'une ligne et un exemple AK contre AQ. Ici, tu as le tableau complet : quelles mains ont un kicker (et combien), la seule exception que tout le monde rate, et pourquoi « jouer le board » rend soudain ton kicker totalement inutile.

La place du kicker dans l'ensemble des [combinaisons au poker](/fr/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") est simple : il n'entre en jeu *qu'après* une égalité de rang entre deux joueurs — il ne bat jamais une combinaison plus forte.

---

### Le kicker en un coup d'œil

:::stripe
4 | Kickers dans une main carte haute
3 | Kickers dans une main à une paire
1 | Kicker dans une double paire (et un carré)
0 | Kicker dans une quinte, une couleur, un full ou une quinte flush
:::

---

## C'est quoi le kicker au poker ?

**Le kicker est la carte la plus haute de ta main de cinq cartes qui ne fait pas partie de ta combinaison : il désigne le gagnant quand deux joueurs ont le même rang.** On l'appelle aussi « carte d'accompagnement ». Au Hold'em, une main compte toujours cinq cartes (les cinq meilleures cartes parmi sept) : une fois ta paire ou ton brelan fixé, les places restantes sont occupées par les kickers.

L'idée clé : un kicker ==ne bat jamais une combinaison plus forte.== Une paire de rois avec un 2 en kicker écrase quand même une paire de 10 avec un kicker as — le rang d'abord, le kicker seulement pour départager. Le kicker ne compte que quand les ==r:rangs sont identiques== : paire contre la même paire, brelan contre le même brelan.

Imagine que tu tiens A-K et ton adversaire A-Q, et que le board apparie un as. Vous avez tous les deux « une paire d'as » — rang identique. Ce sont alors les cartes d'accompagnement qui tranchent, et ton roi bat sa dame au kicker. Personne n'a fait une meilleure main ; le kicker a simplement fait son travail, en silence.

---

## Quelles combinaisons ont un kicker, et lesquelles n'en ont pas ?

**Seules les mains dont la combinaison utilise moins de cinq cartes ont des kickers — toute combinaison qui remplit à elle seule les cinq cartes n'en a aucun.** C'est le tableau que les autres explications noient dans des paragraphes. Le voici d'un seul coup d'œil :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Main | Kicker ? | Cartes kicker |
|:---|:---:|:---:|
| Carte haute | Oui — les cinq comparées dans l'ordre | 4 |
| Paire | ✅ Oui | 3 |
| Double paire | ✅ Oui | 1 |
| Brelan | ✅ Oui | 2 |
| Carré | ✅ Oui (compte rarement) | 1 |
| Quinte | ❌ Non | — |
| Couleur | ❌ Non* | — |
| Full | ❌ Non | — |
| Quinte flush / Quinte flush royale | ❌ Non | — |

</div>

La logique est de la pure arithmétique : **cartes de la combinaison + kickers = toujours cinq.** Une paire utilise 2 cartes, donc 3 kickers complètent la main. Une quinte, une couleur, un full ou une quinte flush utilise déjà les cinq cartes, il ne reste donc rien pour départager — deux quintes ou deux fulls se départagent par les rangs *à l'intérieur* de la combinaison, jamais par une carte d'accompagnement.

==*La couleur est l'astérisque :== techniquement, une couleur n'a pas de « kicker ». Quand deux couleurs s'affrontent, on compare les cinq cartes de la plus haute à la plus basse (une couleur hauteur as bat une couleur hauteur roi). On appelle parfois la carte du haut « kicker » par abus de langage, mais il s'agit en réalité d'une comparaison carte haute sur cinq cartes. L'ordre de départage complet de chaque combinaison se trouve dans [en cas d'égalité au poker, qui gagne](/fr/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Combien de kickers compte chaque combinaison ?

**La carte haute utilise quatre kickers, la paire trois, le brelan deux, et la double paire comme le carré un seul.** Connaître ce nombre te dit exactement jusqu'où peut aller un départage — et quelles mains ne peuvent jamais être séparées par une carte d'accompagnement.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Main | Combinaison | + Kickers | = 5 cartes |
|:---|:---:|:---:|:---:|
| Carte haute | 1 | 4 | ✅ |
| Paire | 2 | 3 | ✅ |
| Brelan | 3 | 2 | ✅ |
| Double paire | 4 | 1 | ✅ |
| Carré | 4 | 1 | ✅ |

</div>

Ça compte à l'abattage parce que les kickers se comparent ==dans l'ordre, le plus haut d'abord.== Avec une paire, si le premier kicker est à égalité, tu passes au deuxième, puis au troisième. Deux joueurs peuvent avoir la même paire *et* le même premier kicker, et quand même être départagés par la troisième carte — c'est exactement pour ça que « mon kicker était bon » ne suffit pas toujours.

---

## A-K contre A-Q : comment le kicker désigne le gagnant ?

Quand l'as du board ne donne qu'une paire d'as à chacun, A-K bat A-Q parce que le roi est le premier kicker. Déroulons-le carte par carte pour que le mécanisme soit concret.

Le board est ==b:A♣ 9♦ 5♠ 2♥ 7♣==. Tu tiens ==b:A♠ K♠==, ton adversaire tient ==b:A♦ Q♦==.

- **Toi :** A♠ K♠ + board → une paire d'as. Meilleures cinq cartes = ==g:A♠ A♣ K♠ 9♦ 7♣== (paire d'as, kickers K-9-7).
- **L'adversaire :** A♦ Q♦ + board → lui aussi une paire d'as. Meilleures cinq cartes = ==A♦ A♣ Q♦ 9♦ 7♣== (kickers Q-9-7).

Même paire, donc on compare les kickers du haut vers le bas : ton ==g:K bat sa Q.== Tu gagnes, A-A-K-9-7 contre A-A-Q-9-7. Le 9 et le 7 n'entrent même pas en jeu — le premier kicker a tout réglé.

:::note[Remarque que les deux mains partagent le 9 et le 7 du board. Les kickers peuvent aussi venir du board : si la carte d'accompagnement la plus haute est une carte commune, elle complète la main des *deux* joueurs et c'est la carte suivante qui décide. Ta carte fermée n'a pas besoin de battre tout le board pour compter : elle peut encore occuper une place de kicker plus basse, derrière une carte du board (plus bas, tu verras un 9 relégué derrière la dame du board), et elle ne sort de la main que si le board fournit déjà cinq meilleures cartes.]:::

---

## Quand le kicker ne joue pas : jouer le board

**Si tes cartes fermées ne peuvent pas améliorer ce que forment déjà les cinq cartes communes, tu « joues le board » — et tes cartes d'accompagnement ne décident plus rien.** Tous ceux qui ne peuvent pas faire mieux utilisent exactement les mêmes cinq cartes — et si personne ne le peut, le pot est partagé.

Le board est ==b:10♠ J♦ Q♣ K♥ A♠== — une quinte du 10 à l'as déjà faite (Broadway, la quinte à l'as), avec des enseignes mélangées, donc aucune couleur possible.

- Tu tiens ==b:2♣ 3♦==. Ta meilleure main de 5 cartes est la quinte du board ; le 2 et le 3 n'apportent rien.
- Ton adversaire tient ==b:4♥ 5♦==. Même histoire — la quinte du board est aussi sa meilleure main.

Aucun de vous deux ne peut aller plus haut que l'as : vous « jouez le board » tous les deux et ==g:partagez le pot== — mais seulement si tu retournes tes cartes fermées ; si tu les jettes (muck), tu ne reçois normalement rien, même ici (TDA 2024, règle 19). Une quinte n'a pas de kicker, donc ces cartes fermées sont un poids mort. Quand tu entends « le board joue », c'est exactement ça — une situation où même une carte fermée qui a l'air forte ne vaut strictement rien. (Pour repérer ces boards à l'avance, lis [comment lire le board](/fr/blog/holdem-reading-the-board).)

---

## Pourquoi A9 perd contre AK ? L'as dominé

**Une main est « dominée » quand elle partage une carte avec une main plus forte et perd la bataille du kicker presque chaque fois qu'elle touche — le piège classique, c'est un as faible comme A9 face à AK.** C'est là que le kicker cesse d'être une curiosité et commence à coûter de l'argent.

![Deux mains de départ côte à côte sur le feutre vert — A-K à côté de A-9 — montrant comment le même as avec un kicker plus faible devient un piège dominé](/images/holdem-kicker-dominated.webp "Même as, destin différent : c'est le kicker qui sépare une main premium d'une main dominée")

Retour à la main qui m'a coûté ma cave. Board ==b:A♦ 7♣ 2♥ Q♠ 4♦==, et aucune des deux mains ne touche de quinte ni de couleur.

- **A9 :** A♠ 9♣ → paire d'as, meilleures cinq cartes ==A♠ A♦ Q♠ 9♣ 7♣==.
- **AK :** A♥ K♦ → paire d'as, meilleures cinq cartes ==g:A♥ A♦ K♦ Q♠ 7♣==.

Encore la même paire — et mon 9 n'a même pas eu voix au chapitre. La dame du board l'a repoussé au rang de deuxième kicker, et la comparaison s'est réglée dès le premier kicker : son K contre la Q du board. Autant dire que mon « kicker » était ==r:mort== avant même le début de la main. C'est ça, la domination : quand tu touches ton as, tu ne fais souvent que payer un as plus gros. C'est toute la raison pour laquelle le [guide des mains de départ](/fr/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") traite A9 dépareillé avec bien plus de prudence que AK — le kicker fait la différence entre une main premium et un piège.

---

## Le carré a-t-il un kicker ?

**Oui — le carré a un kicker d'une carte, mais il ne décide presque jamais une main au Hold'em : il faudrait deux joueurs à égalité sur exactement le même carré, ce qui exige que les quatre cartes soient sur le board — un cas rare.** C'est l'exception que la plupart des explications ratent en rangeant le carré parmi les « mains de cinq cartes sans kicker ».

Le calcul est clair : quatre cartes forment le carré, une carte sert de kicker. Il ne compte que si deux joueurs se retrouvent à égalité sur le *même* carré — ce qui, au Hold'em, exige que les quatre cartes soient sur le board (il n'existe que quatre cartes de chaque rang). Si le board est ==b:5♠ 5♥ 5♦ 5♣ K♦==, tout le monde a un carré de 5, et la cinquième carte est le kicker : un joueur qui tient un as joue ==g:5-5-5-5-A== et bat un joueur qui prend le ==5-5-5-5-K== du board. Rare, mais réel — et avoir raison sur les cas limites, c'est ce qui sépare un guide fiable d'un guide approximatif.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-hand-rankings | Combinaisons au poker : l'ordre des mains | /images/holdem-hand-rankings-hero.webp
/fr/blog/holdem-tiebreak-rules | En cas d'égalité au poker, qui gagne ? | /images/holdem-tiebreak-hero.webp
:::

## FAQ

**Q. Quelle est la définition de « kicker » en français ?**

A. En français aussi, on dit « kicker » ; le mot se traduit par « carte d'accompagnement ». C'est la carte la plus haute de ta main de cinq cartes qui ne fait pas partie de ta combinaison. Il départage deux joueurs qui ont le même rang — par exemple, A-K bat A-Q quand le board apparie un as, parce que le kicker roi est plus haut que la dame. Un kicker ne bat jamais une combinaison plus forte.

**Q. La couleur a-t-elle un kicker ?**

A. Non. Une couleur utilise les cinq cartes, il n'y a donc pas de kicker à part. Quand deux couleurs s'affrontent, on compare les cinq cartes de la plus haute à la plus basse — une couleur hauteur as bat une couleur hauteur roi. On appelle parfois la carte du haut « kicker » par abus de langage, mais c'est en réalité une comparaison sur cinq cartes.

**Q. Le kicker intervient-il lorsque deux joueurs ont exactement la même suite ?**

A. Non. Une quinte, ce sont cinq cartes consécutives : elle est déjà complète. Si deux joueurs font la même quinte, ils partagent le pot — les cartes fermées en plus ne comptent pas. Entre deux quintes, seule une quinte plus haute bat une quinte plus basse — même si n'importe quelle couleur ou mieux les bat toutes.

**Q. Le full a-t-il un kicker ?**

A. Non. Un full, c'est un brelan plus une paire — les cinq cartes. Les égalités se départagent d'abord par le rang du brelan, puis par celui de la paire, jamais par une carte d'accompagnement.

**Q. Un carré peut-il perdre sur le kicker ?**

A. Oui, le carré a un kicker d'une carte, mais il compte rarement au Hold'em. Il ne décide une main que si deux joueurs sont à égalité sur exactement le même carré — ce qui exige que les quatre cartes soient sur le board — et alors la cinquième carte la plus haute gagne.

**Q. Le kicker compte-t-il avec un brelan ?**

A. Oui. Le brelan utilise deux kickers : quand deux joueurs font le même brelan, les deux cartes suivantes les plus hautes départagent — sur un board K♣ K♥ 7♦ 5♣ 2♠, K♠ A♠ joue K-K-K-A-7 et bat le K-K-K-Q-7 de K♦ Q♦, parce que l'as bat la dame au kicker. (Un vrai *brelan servi* (set), fait avec une paire servie, est rarement à égalité, puisqu'un seul joueur peut tenir cette paire exacte.)

**Q. Une double paire a-t-elle un kicker ?**

A. Oui — la double paire utilise un kicker. Si tu tiens K♥ Q♦ et ton adversaire J♠ Q♥ sur un board Q♣ 7♠ 7♦ 4♥ 2♣, vous avez tous les deux dames et sept, mais ton kicker roi bat son valet (Q-Q-7-7-K contre Q-Q-7-7-J). Le kicker n'entre en jeu que si les deux joueurs ont exactement la même double paire.

**Q. Le kicker doit-il être dans ta main ?**

A. Non. Un kicker peut être une carte commune. Au Hold'em, ta main est toujours les cinq meilleures cartes parmi sept : si la carte d'accompagnement la plus haute est une carte du board plus haute que les cartes fermées des deux joueurs, elle devient le kicker commun des deux et c'est la carte suivante qui décide. Ta carte fermée ne joue comme kicker que si elle est plus haute que les cartes du board qu'elle remplacerait.

**Q. Combien de kickers y a-t-il dans une main de poker ?**

A. Ça dépend de la combinaison : une main carte haute utilise quatre kickers (les cinq cartes comparées dans l'ordre), une paire trois, un brelan deux, et la double paire comme le carré un seul. Les quintes, couleurs, fulls et quintes flush n'ont pas de kicker, parce qu'elles remplissent déjà les cinq cartes.

**Q. C'est quoi un bon kicker au poker ?**

A. Un kicker haut — un kicker as ou roi est fort, alors qu'un kicker bas comme un 9 te laisse « dominé ». C'est pour ça que AK et AQ valent bien mieux que A9 ou A5 : quand deux joueurs touchent leur as sans rien faire de mieux, le plus gros kicker remporte le pot.

**Q. C'est quoi un kicker as (ou un kicker roi) ?**

A. Un kicker as signifie que ta carte d'accompagnement la plus haute est un as — le kicker le plus fort qui existe, donc « paire max, kicker as » gagne presque toutes les confrontations à paire égale. Le kicker roi vient juste après. C'est exactement pour ça que A-K et A-Q battent un as faible comme A-9 : quand deux joueurs touchent leur as sans rien faire de mieux, le plus gros kicker remporte le pot.

**Q. Que veut dire « jouer le board » ?**

A. Jouer le board, c'est quand les cinq cartes communes forment ta meilleure main et que tes cartes fermées ne peuvent pas l'améliorer. Si personne ne peut faire mieux que le board, tout le monde utilise les mêmes cinq cartes et le pot est partagé. Tes cartes d'accompagnement ne décident plus rien, parce qu'aucune de tes cartes fermées ne fait partie des cinq que tu joues — chaque carte de la main est commune.

**Q. Le kicker compte-t-il au Texas Hold'em ?**

A. Énormément. Comme tout le monde partage les cartes communes, les joueurs font souvent la même paire ou le même brelan, et c'est le kicker qui décide ces pots. Choisir des mains avec de bons kickers (et se coucher avec les mains dominées) fait partie du cœur d'un jeu gagnant.

---

## À retenir

1. **Kicker = carte d'accompagnement, seulement pour départager.** Il tranche les égalités de rang et ne bat jamais une combinaison plus forte.
2. **Combinaison + kickers = cinq.** La carte haute a 4 kickers, la paire 3, le brelan 2, la double paire et le carré 1 ; quintes, couleurs, fulls et quintes flush n'en ont aucun.
3. **Le kicker décide de vrais pots.** La domination (A9 contre AK) et le board qui joue reviennent tous deux au kicker — choisis des mains avec de fortes cartes d'accompagnement et sache quand la tienne est morte.

Maîtrise le kicker, et toute une catégorie de mains « mais comment j'ai pu perdre ça ? » cesse d'être un mystère. Pour la suite, consulte l'ordre complet des [combinaisons au poker](/fr/blog/holdem-hand-rankings), ou toutes les [règles pour départager une égalité](/fr/blog/holdem-tiebreak-rules) pour chaque combinaison.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Combinaisons</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Combinaisons au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">L'ordre complet sous lequel se place le kicker</div>
  </a>
  <a href="/fr/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Classement des mains</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Départager une égalité</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">L'ordre de départage de chaque combinaison</div>
  </a>
  <a href="/fr/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Mains de départ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Les mains de départ</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi on se couche avec les as à petit kicker</div>
  </a>
  <a href="/fr/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Lecture du board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment lire le board</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Repérer quand tu joues le board</div>
  </a>
</div>
`.trim(),
};

export default POST;
