import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "ICM au poker : l'Independent Chip Model expliqué, avec l'exemple à la main",
  seoTitle: "Tes jetons ne valent pas ce qu'ils affichent — ICM au poker",
  desc: "Doubler ton stack en tournoi ne double jamais tes gains. L'ICM au poker (Independent Chip Model) traduit tes jetons en argent réel : le calcul à la main.",
  tldr: "L'ICM (Independent Chip Model) convertit ton stack de tournoi en sa vraie valeur en argent, à partir de la structure des gains et des stacks de chaque joueur. Comme il n'y a qu'une première place à gagner, doubler tes jetons ne double jamais tes gains : le stack du chip leader vaut moins que sa part de jetons, et les short stacks valent plus. C'est cet écart qui te fait coucher sur la bulle des mains que tu paierais sans réfléchir en cash game.",
  category: "tournament",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-09-09",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "Jetons de poker empilés en table finale devant une échelle des gains, montrant qu'un plus gros stack ne se convertit pas un pour un en une plus grosse part du prize pool",
  tags: ["icm poker", "icm au poker", "icm poker définition", "icm poker signification", "independent chip model", "icm vs chip ev", "deal icm", "chip chop poker", "risk premium poker"],
  content: `
La première fois que l'ICM m'a coûté de l'argent, je ne savais même pas que ça existait. On était quatre, trois places payées, et je découvre une paire de valets avec un stack dans la moyenne. Je fais tapis, le chip leader paie avec as-dix, et j'ai fait la bulle pour rien. ==Pendant des années, j'ai rangé ce coup comme la preuve que mon shove était une erreur. Ce n'en était pas une== — je ne savais simplement pas *où* la bulle te fait vraiment payer, et c'est sans doute l'idée la plus importante de tout le poker de tournoi.

==Les jetons de tournoi ne sont pas de l'argent. Tu ne gagnes jamais qu'*une seule* première place, donc doubler ton stack ne double jamais ce que tu vaux réellement.== L'ICM (Independent Chip Model) est le calcul qui transforme ta pile de jetons en dollars réels, et une fois que tu l'as vu, des calls et des folds qui te semblaient absurdes deviennent logiques. Cet article t'emmène de « que veut dire ICM » jusqu'au partage d'un deal en table finale, avec chaque chiffre calculé pour que tu puisses le vérifier toi-même.

L'ICM appartient spécifiquement au [jeu en tournoi](/fr/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") — c'est la raison pour laquelle la fin d'un MTT (tournoi multi-tables) ne ressemble en rien à un cash game (ou « partie libre »).

---

### L'ICM en bref

:::stripe
jetons ≠ argent | Une seule première place à gagner
chip leader | vaut MOINS que sa part de jetons
short stack | vaut PLUS que sa part de jetons
:::

---

## Que signifie ICM au poker ?

**L'ICM (l'Independent Chip Model) convertit un stack de jetons en sa vraie valeur en argent, à partir des gains restants et du stack de chaque joueur.** Il répond à une seule question : ==si le tournoi s'arrêtait maintenant avec ces stacks, combien vaut réellement ma part du prize pool en dollars ?==

Le modèle estime la fréquence à laquelle chaque joueur termine à chaque place payée — premier, deuxième, troisième, et ainsi de suite — à partir de sa part des jetons, puis multiplie ces probabilités par les gains. Plus ton stack est gros, plus tu finis souvent haut ; mais comme ==le premier prix est plafonné, chaque jeton supplémentaire achète de moins en moins d'argent.==

Le déclic à avoir : en cash game, un jeton vaut un dollar, point. En tournoi, un jeton est un *ticket de loterie* sur un ensemble fixe de prix. L'ICM donne un prix à ce ticket. Il s'applique uniquement aux tournois et aux sit & go (SNG) — [jamais au cash game](/fr/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp"), où tes jetons valent déjà leur valeur faciale.

---

## Pourquoi tes jetons ne valent pas leur valeur faciale en argent ?

**Parce que le prize pool (la cagnotte) est réparti sur plusieurs places et que ce qui est en dessous de toi est déjà acquis, doubler tes jetons ne double pas ton équité en argent.** Imagine trois prix de $50 / $30 / $20. Dès que tu es dans l'argent, tu as au moins $20 garantis — les jetons qui protègent ces $20 sont donc précieux, tandis que ceux qui visent la première place courent après un prix que tu ne peux gagner qu'une fois.

La courbe qui relie jetons et argent se ==courbe== donc : les premiers jetons (la survie) valent beaucoup, les derniers (ceux qui vont chercher la victoire) valent moins. Un joueur qui a la moitié des jetons ne possède pas la moitié du prize pool — il en possède nettement moins, parce qu'il ne peut pas finir mieux que premier mais qu'il *peut* encore sauter.

Retourne la situation et c'est le short stack qui gagne à ce calcul. Il a déjà un vrai droit sur les paliers de gains (pay jumps) situés sous lui, donc ==chacun de ses jetons vaut plus que sa valeur faciale==. Cette seule asymétrie — le gros stack surévalué en jetons, le short stack sous-évalué — guide toutes les décisions ICM que tu prendras.

---

## Comment calculer l'ICM au poker ? (le modèle Malmuth–Harville)

**L'ICM attribue à chaque joueur sa probabilité de finir à chaque place uniquement à partir de la taille de son stack, puis la multiplie par les gains.** On parle souvent du modèle Malmuth–Harville : le calcul des probabilités d'arrivée vient des travaux de David Harville dans les années 1970 sur les cotes des courses hippiques, que Mason Malmuth a appliqués au poker.

La règle est simple et récursive :

- Ta probabilité de finir **1er** = ton stack ÷ total des jetons.
- Ta probabilité de finir **2e** = la somme, pour chaque autre joueur qui pourrait finir 1er, de (sa probabilité de gagner) × (ton stack ÷ les jetons restants sans lui).
- On continue ainsi pour chaque place inférieure.

Faisons-le pour de vrai. Il reste trois joueurs, les prix sont de ==$50 / $30 / $20== ($100 au total), et les stacks sont :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Place | Leader (5 000 · 50 %) | Stack moyen (3 000 · 30 %) | Short stack (2 000 · 20 %) |
|:--|:--:|:--:|:--:|
| 1er | 50,0 % | 30,0 % | 20,0 % |
| 2e | 33,9 % | 37,5 % | 28,6 % |
| 3e | 16,1 % | 32,5 % | 51,4 % |

</div>

Prends la 2e place du leader pour voir la récursion : si le stack moyen gagne (30 % du temps), le leader détient ensuite 5 000 des 7 000 jetons restants = 71,4 %, et 0,30 × 0,714 = 21,4 % ; si le short stack gagne (20 %), le leader détient 5 000 sur 8 000 = 62,5 %, et 0,20 × 0,625 = 12,5 %. Additionne : le leader finit 2e ==33,9 %== du temps.

Multiplie maintenant chaque ligne par les gains et tu obtiens la valeur en dollars de chaque stack :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Joueur | % des jetons | Valeur ICM | % ICM | vs jetons |
|:--|:--:|:--:|:--:|:--:|
| Leader | 50,0 % | ==$38,39== | 38,4 % | ==r:−11,6== |
| Stack moyen | 30,0 % | $32,75 | 32,8 % | ==g:+2,8== |
| Short stack | 20,0 % | $28,86 | 28,9 % | ==g:+8,9== |

</div>

Le voilà en chiffres : le leader a ==la moitié des jetons mais seulement 38,4 % de l'argent==, tandis que les 20 % de jetons du short stack valent 28,9 %. Inutile de faire ce calcul à la main à la table — le [calculateur ICM](/fr/calculator) le fait instantanément — mais voir la mécanique une fois, c'est ce qui fait que la stratégie reste gravée.

---

## ICM ou chip EV (cEV vs $EV) : quelle différence ?

**Le chip EV (cEV) mesure une décision en jetons gagnés ou perdus ; l'ICM (ou « $EV ») la mesure en argent réel. Les deux concordent en début de tournoi et divergent fortement à la fin.** Au début, quand les petits paliers de gains sont encore loin, un jeton est à peu près un jeton — tu joues en [chip EV](/fr/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") et tu accumules sans relâche. À l'approche de l'argent et de la table finale, l'ICM prend le relais.

Le conflit classique, c'est le *call* d'un all-in marginal. En chip EV, un pile ou face pour un gros pot peut être correct, voire bon — tu gagnes autant de jetons que tu en perds. En ICM, ça peut être un ==fold== évident, car sauter te coûte ton équité sur chaque prix au-dessus de celui que tu as déjà sécurisé (le minimum garanti lui-même reste à toi ; sur la bulle, où rien n'est encore acquis, ça te coûte tout), alors que les jetons que tu gagnerais valent moins que leur valeur faciale.

C'est là que j'avais tout compris à l'envers avec ces valets. La taxe s'applique au *call*, et c'est son reflet qui rend la bulle jouable : comme la range de call de tout le monde se resserre, ta fold equity vaut **plus** que ce qu'elle vaut en jetons. Le shove first-in (premier à entrer dans le coup) est l'arme du stack moyen sur la bulle, pas sa fuite — je suis tombé sur le seul joueur qui pouvait payer le plus large, et ça, c'est de la variance, pas une erreur de stratégie. ==Le chip EV demande « est-ce que ça fait grossir mon stack ? » L'ICM demande « est-ce que ça fait grossir ma bankroll ? »== — et seul le second paie.

---

## Pourquoi perdre des jetons fait plus mal que d'en gagner ? La « taxe ICM »

**La taxe ICM (ICM tax) est l'écart entre ton pourcentage de jetons et ton pourcentage réel d'argent — une valeur qui s'évapore dès que les stacks deviennent déséquilibrés.** Dans l'exemple calculé, les jetons du leader disent 50 % mais l'argent dit 38,4 % : une ==taxe ICM de 11,6 points== pour être le gros stack.

Cette taxe apparaît dans chaque all-in sous forme de **risk premium** (prime de risque) — l'équité supplémentaire dont tu as besoin *en plus* du point mort en chip EV pour qu'un call soit réellement rentable en dollars. Si le calcul en jetons dit qu'il te faut 40 % pour payer, l'ICM peut exiger 48-50 %, parce que le risque (sauter, perdre ton équité sur les paliers de gains) pèse plus lourd que le gain (des jetons qui valent moins que leur valeur faciale).

Le joueur qui le ressent le plus, c'est le **stack moyen sur la bulle** — assez gros pour avoir une vraie équité à perdre, pas assez court pour être forcé d'y aller. Il porte la prime de risque la plus élevée et doit jouer le plus serré. Le gros stack porte la prime de risque la *plus faible*, et c'est tout le moteur de la pression ICM.

---

![Un stack moyen de tournoi qui se couche face au shove d'un gros stack sur la bulle des places payées, jetons et échelle des gains en vue — le moment où la pression ICM transforme un call normal en fold](/images/holdem-icm-pressure.webp "Pression ICM : le stack moyen se couche parce que faire la bulle lui coûterait tout le min-cash et chaque prix au-dessus")

## Bubble factor, risk premium et payjump (palier de gains) : comment l'ICM change tes shoves et tes calls ?

**Le bubble factor mesure à quel point perdre tes jetons te coûte plus que gagner les mêmes jetons ne te rapporte — et il grimpe en flèche juste avant chaque palier de gains.** Un bubble factor de 1,0 signifie que jetons et argent évoluent ensemble (début de tournoi). Un bubble factor de 1,5 signifie qu'un pot perdu fait 1,5× plus mal qu'un pot identique gagné ne fait de bien — il te faut donc un avantage bien plus grand pour t'engager.

Deux règles pratiques en découlent :

- **Gros stack : attaque.** Ta faible prime de risque te permet d'[ouvrir et de 3-bet](/fr/blog/holdem-3bet) sans relâche contre des joueurs qui ne peuvent pas payer sans mettre leur tournoi en jeu. C'est ce qu'on appelle « mettre la pression ICM », et c'est le moyen le plus fiable de gagner des jetons en table finale.
- **Stacks moyens et short stacks : resserre ta range de call, mais continue à shover en premier.** Être celui qui fait tapis (avec de la fold equity) vaut bien mieux qu'être celui qui doit payer pour tout son stack. Sous pression, ta range de call doit fondre pendant que ta range d'open-shove reste agressive.

La place cauchemardesque, c'est le stack moyen qui subit un shove — il jette des mains aussi fortes que certaines qu'il paierait sans hésiter en cash game. Ce n'est pas de la faiblesse ; c'est l'ICM.

---

## Deal ICM ou chip chop : comment partager le prize pool d'une table finale ?

**Dans sa forme la plus simple, un chip chop partage l'argent restant selon le pourcentage brut de jetons ; un deal ICM le partage selon la valeur ICM en dollars de chaque joueur. Le chip chop favorise les gros stacks, le deal ICM est plus juste pour les short stacks.** Quand les joueurs décident d'arrêter un tournoi plus tôt et de se partager les prix, ce sont les deux méthodes sur la table — et connaître la différence vaut de l'argent réel.

Prenons trois joueurs avec 50 % / 30 % / 20 % des jetons qui se partagent un pool restant de ==$1 500== (gains de $900 / $400 / $200) :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Joueur | Chip chop | Deal ICM | Différence |
|:--|:--:|:--:|:--:|
| Leader (50 %) | $750 | ==$618== | ==r:−$132== |
| Stack moyen (30 %) | $450 | $485 | ==g:+$35== |
| Short stack (20 %) | $300 | ==$397== | ==g:+$97== |

</div>

Le short stack touche ==$97 de plus== avec un deal ICM qu'avec un chip chop, parce que l'ICM lui crédite les paliers de gains qu'il a déjà gagnés. La règle est donc simple : ==si tu es court, demande un deal ICM ; si tu es chip leader, propose un chip chop.== En pratique, le chip leader négocie souvent un peu *au-dessus* de son chiffre ICM (et les short stacks acceptent un peu en dessous) en échange de la certitude de sécuriser de l'argent — pas de problème, tant que tu connais ton chiffre ICM d'abord. Passe tes propres stacks et gains dans le [calculateur ICM](/fr/calculator) avant d'accepter quoi que ce soit.

---

## Quand l'ICM compte-t-il le plus, et quand peux-tu l'ignorer ?

**L'ICM compte le plus près des paliers de gains et le moins quand ils sont loin.** Appuie-toi dessus dans ces situations :

- **La [bulle des places payées](/fr/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp")** — le plus gros saut de tous va de $0 à une place payée, donc les primes de risque sont à leur maximum.
- **La bulle de la table finale et chaque palier de gains en table finale** — chaque marche de l'échelle, c'est de l'argent réel.
- **Les satellites** — le cas extrême : dans un satellite à plusieurs places, chaque place qualificative vaut la même chose, donc dès que tu as assez de jetons pour gagner une place, les jetons supplémentaires ne valent presque *rien* et tu te couches sur presque tout (un satellite où le gagnant rafle tout se joue pour la première place, en chip EV).

Appuie-toi sur le chip EV comme approximation suffisante quand :

- **Début et milieu de tournoi**, quand le prochain palier de gains est une abstraction lointaine et que c'est l'accumulation de jetons qui fait gagner les tournois.
- **Jeu en deep stack avec des blindes minuscules**, quand tu as la marge pour surclasser tes adversaires plutôt que de tout mettre au milieu.
- **Le heads-up pour le titre**, où il ne reste que deux prix, si bien que l'argent encore en jeu peut se juger en chip EV.

Une fuite courante consiste à trop appliquer l'ICM : se coucher jusqu'à devenir short stack « pour grimper les paliers » au lieu d'accumuler alors que la pression n'est pas encore vraiment là. L'ICM est un outil de fin de tournoi, pas une excuse pour jouer la peur au ventre tout le tournoi.

---

## L'ICM est-il fiable ? Ses limites

**L'ICM est le meilleur modèle simple dont on dispose, mais c'est une approximation — il suppose que tous les joueurs ont le même niveau et ignore presque tout sauf la taille des stacks.** Sois honnête sur ce qu'il laisse de côté :

- **Le niveau.** L'ICM traite un champion du monde et un débutant à stacks égaux comme égaux. Les jetons d'un meilleur joueur valent plus que ce que dit le modèle.
- **La position.** Un stack de 3 big blinds au bouton (encore libre de choisir son spot et de faire tapis en open avec toute sa fold equity depuis la meilleure place) vaut plus que le même stack en grosse blinde (un tiers déjà posé, forcé à tapis dans la main ou les deux suivantes). L'ICM ne voit pas les places.
- **Les blindes et la suite du jeu.** L'ICM fige le tournoi à cet instant ; il ignore la montée des blindes, les antes et la façon dont les prochaines orbites vont réellement se dérouler.

Il y a même une confirmation empirique de cet angle mort : une vaste étude de 2025 qui a confronté l'ICM à de vrais résultats de tournois a montré qu'il a tendance à ==sous-estimer les gros stacks et surestimer les short stacks==, en partie parce qu'un chip leader compétent peut exploiter la pression ICM pour gagner *plus* que ce que prédit le modèle brut. Les solveurs avancés ajoutent une correction « future game » précisément pour cette raison. Rien de tout cela ne rend l'ICM faux — cela en fait une solide première approximation que tu ajustes selon le niveau et la position, pas une loi de la physique.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-tournament | Comment fonctionne un tournoi de poker ? Buy-in, formats et Jour 1 | /images/holdem-tournament-hero.webp
/fr/blog/holdem-equity | L'équité au poker expliquée | /images/holdem-equity-hero.webp
:::

## FAQ

**Q. C'est quoi l'ICM au poker ?**

A. L'ICM (l'Independent Chip Model) est une formule qui convertit ton stack de tournoi en sa vraie valeur en argent, à partir des gains restants et du stack de chaque joueur. Il a une raison d'être parce que tu ne gagnes qu'une seule première place : jetons et dollars ne sont donc pas la même chose, et l'ICM chiffre cette différence.

**Q. Comment se calcule l'ICM ?**

A. Il attribue à chaque joueur une probabilité de finir à chaque place payée selon sa part des jetons (ta probabilité de finir premier = ton stack ÷ total des jetons, puis de façon récursive pour les places inférieures), puis multiplie ces probabilités par les gains. La somme donne la valeur en dollars de ton stack. En pratique, tu utilises un calculateur ICM ; l'important est de comprendre ce qu'il fait.

**Q. Quelle est la différence entre l'ICM et le chip EV ?**

A. Le chip EV mesure une décision en jetons gagnés ou perdus ; l'ICM la mesure en argent réel. Les deux concordent en début de tournoi et divergent à l'approche de l'argent. Sur la bulle, sauter te coûte toute ta chance de finir dans l'argent ; une fois dans les places payées, ça te coûte tout ce qui dépasse le gain que tu as déjà sécurisé. Un all-in à pile ou face, correct en chip EV, peut être un fold évident en ICM.

**Q. C'est quoi un deal ICM, et en quoi diffère-t-il d'un chip chop ?**

A. Les deux partagent un prize pool quand les joueurs décident d'arrêter plus tôt. Dans sa forme la plus simple, un chip chop divise l'argent selon le pourcentage brut de jetons (favorable aux gros stacks) ; un deal ICM le divise selon la valeur ICM en dollars de chaque joueur (plus juste pour les short stacks). Il existe aussi une version intermédiaire qui met d'abord de côté le gain que chaque joueur a déjà sécurisé et ne partage que l'argent au-dessus. Si tu es court, demande un deal ICM ; si tu es chip leader, un chip chop te rapporte plus.

**Q. L'ICM s'applique-t-il en cash game ?**

A. Non. En cash game, chaque jeton vaut déjà sa valeur faciale en dollars et tu peux te recaver ou partir quand tu veux, donc il n'y a rien à convertir. L'ICM n'existe que parce que les jetons de tournoi ne peuvent pas être encaissés à leur valeur faciale.

**Q. Quand faut-il ignorer l'ICM ?**

A. Tu ne le débranches jamais complètement, mais son effet est assez faible pour utiliser le chip EV comme approximation en début et en milieu de tournoi, ainsi qu'en deep stack avec de petites blindes — des spots où les paliers de gains sont loin. En heads-up pour le titre, il ne reste que deux prix, donc l'écart entre la première et la deuxième place peut se juger en chip EV. Même dans ces cas, vérifie la structure des gains et la répartition des stacks.

**Q. Quelles sont les erreurs ICM les plus fréquentes ?**

A. Trois grosses. D'abord, *trop* appliquer l'ICM — se coucher « pour grimper les paliers » alors que les paliers de gains sont encore loin, au lieu d'accumuler des jetons. Ensuite, payer trop large en stack moyen près de la bulle, exactement là où ta prime de risque est la plus élevée — rien n'est encore acquis, donc sauter à ce moment te coûte toute ton équité, min-cash compris. Enfin, accepter un chip chop quand tu es le short stack (ou un deal ICM quand tu es le leader) sans avoir fait les calculs avant. L'ICM est un outil de fin de tournoi : l'utiliser trop tôt, ou l'ignorer en table finale, te fait perdre de l'argent dans les deux cas.

**Q. Qui a inventé l'ICM ?**

A. Le calcul des probabilités d'arrivée est généralement attribué à David Harville (à partir de recherches sur les courses hippiques dans les années 1970), que Mason Malmuth a appliqué aux tournois de poker — d'où le nom de modèle « Malmuth–Harville ». C'est devenu la méthode standard pour évaluer les stacks de tournoi et partager les deals en table finale.

---

## À retenir

1. **Les jetons ne sont pas de l'argent.** Tu ne gagnes qu'une seule première place, donc le chip leader vaut moins que sa part de jetons et le short stack vaut plus. Cet écart, c'est tout l'ICM.
2. **En fin de tournoi, passe du chip EV au $EV.** Près des paliers de gains, un call exige une équité supplémentaire (une prime de risque) pour être rentable. Le stack moyen se couche avec des mains qu'il paierait sans hésiter en cash game.
3. **Connais ton chiffre avant de dealer.** Les short stacks veulent un deal ICM, les gros stacks un chip chop — passe d'abord par le [calculateur ICM](/fr/calculator).

À partir d'ici, vois comment la pression ICM s'intègre dans la [stratégie de tournoi](/fr/blog/holdem-tournament) plus large, ou reviens aux bases avec [l'équité au poker](/fr/blog/holdem-equity) et [les pot odds](/fr/blog/holdem-pot-odds).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Comment fonctionne un tournoi de poker ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le pilier auquel appartient l'ICM</div>
  </a>
  <a href="/fr/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournoi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cash game ou tournoi au poker : quelle différence ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi l'ICM ne s'applique jamais au cash game</div>
  </a>
  <a href="/fr/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">L'équité au poker expliquée</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Le chip EV, c'est l'équité en jetons</div>
  </a>
  <a href="/fr/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Outil gratuit</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Calculateur ICM</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Calcule tes propres stacks et deals</div>
  </a>
</div>
`.trim(),
};

export default POST;
