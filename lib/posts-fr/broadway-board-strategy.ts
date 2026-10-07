import type { Post } from "../posts";

/**
 * fr ③ broadway-board-strategy — EN 마스터 lib/posts-en/broadway-board-strategy.ts 재저작 (2026-10-07 · fr-gto 레인 B)
 * 출처: EN 본문 축어(수치·카드) · 확정 카피 = docs/fr-lanes/gto-brief.md ③ 절.
 * 키워드: avantage de range ou avantage de nuts(H2·FAQ 3) · nut advantage · board bicolore(태그). «nuts poker» 헤드는 reading-the-board 몫.
 * 표기: 무늬 카드·하이픈 보드의 T는 10(Q♠J♦10♠ · Q-J-10), 핸드 클래스(JT·T9)는 그대로.
 * 한계: 이미지는 EN 경로(-en.webp) 그대로 — fr 캡처 생성 후 일괄 교체 대기.
 * GTO 시리즈 예외: 지어낸 경험담 없음(솔버 증거 자료).
 */
export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Deux tiers de la range ont un tirage, et elle checke quand même",
  seoTitle: "68 % de tirages, 99,9 % de check — avantage de nuts Q-J-10",
  desc: "Sur Q-J-10 bicolore, 68 % de la range de la grosse blinde ont un tirage, et elle checke 99,9 %. L'avantage de nuts, pas celui de range, décide ce flop.",
  tldr: "Sur Q♠J♦10♠, après une ouverture du bouton suivie par la grosse blinde, la grosse blinde checke 99,9 %, alors que 68,4 % de sa range ont un tirage. La cause est l'avantage de nuts : quintes 10,5 % contre 7,1 %, brelans servis 2,0 % contre 0,7 %, surpaires 2,6 % contre 0 %. La réalisation d'équité se partage 77,9 % contre 119,4 %, l'écart le plus large des trois flops vus jusqu'ici, du plus sec au plus humide.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-en.webp",
  imageAlt: "Résultats du solver HoldemMaster sur un flop broadway connecté bicolore Q-J-10 : la grille de la grosse blinde verte pour le check, avec le panneau des tirages à droite",
  tags: ["nut advantage", "avantage de nuts", "avantage de range ou avantage de nuts", "board dynamique poker", "board bicolore", "flop broadway", "réalisation d'équité"],
  content: `
Le flop tombe **Q♠ J♦ 10♠**. Tu as KQ en grosse blinde (BB) — top paire plus un tirage quinte bilatéral. Checker ça, c'est forcément une erreur, non ?

Les deux spots précédents — [hauteur As](/fr/blog/a-high-board-cbet) et [hauteur Roi](/fr/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-en.webp") — étaient des boards calmes où presque rien n'était en tirage. Ici, c'est l'inverse : **68,4 % de la range de la grosse blinde ont un tirage.** Et le solver checke quand même ==99,9 %==. Le lead est devenu *plus rare*, pas plus fréquent.

« Beaucoup de tirages » et « tu peux miser en premier » sont deux affirmations différentes. Chaque chiffre ci-dessous vient du [solver poker gratuit](/fr/solver) de HoldemMaster, relevé sur le résultat du spot d'étude le 2026-08-19.


:::stripe
Spot | Le bouton (BTN) ouvre à 2,5bb → la BB paye (heads-up)
Flop | Q♠ J♦ 10♠ (bicolore — deux piques)
Pot · stack | Pot 5,5bb · stack effectif 97,5bb
Résultat | La BB checke 99,9 % — des tirages partout, et toujours pas de lead
:::

> **Réponse rapide**
> La grosse blinde checke **99,9 %** sur Q♠J♦10♠, avec 68,4 % de sa range en tirage. La raison, c'est l'**avantage de nuts** : quintes 10,5 % contre 7,1 %, brelans servis 2,0 % contre 0,7 %, overpairs (surpaires) 2,6 % contre 0 %. Les catégories des nuts sont chez le bouton — seule la double paire est à égalité, 6,0 % contre 5,9 % — donc miser en premier fait coucher les mains que tu bats et se fait payer par celles qui te battent.

## Quelles conditions ont produit ces chiffres ?

Même structure que le reste de la série : le bouton ouvre à 2,5bb, la grosse blinde paye, tous les autres se couchent. Deux joueurs, un pot de 5,5bb, 97,5bb derrière, des ranges en ligne standard à 100bb, et deux sizings disponibles, environ un tiers et trois quarts du pot. La seule chose qui a changé, c'est le flop.

| Réglage | Valeur |
|---|---|
| Préflop | BTN ouvre à 2,5bb · BB paye · tous les autres se couchent |
| Ranges | Approximations du jeu en ligne standard à 100bb |
| Flop | Q♠ J♦ 10♠, bicolore (deux piques) |
| Pot · stack | Pot 5,5bb · stack effectif 97,5bb |
| Bet sizes | Environ 33 % et 75 % du pot |
| Rake | Sans rake |
| Vérifié le | 2026-08-19, résultat du spot d'étude |

## Pourquoi checker 99,9 % sur un board aussi humide ?

**Parce que c'est la *qualité* des mains faites qui décide de l'action, pas la *quantité* de tirages.**

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Check | **99,9 %** | 452,5 |
| Bet 1,8bb (33 % du pot) | 0,1 % | 0,3 |
| Bet 4,1bb (75 % du pot) | 0,0 % | 0,2 |

Le flop sec hauteur Roi donnait 99,8 %. **Passe à un board où deux tiers de la range sont en tirage, et le check devient plus complet, pas moins.** C'est cette inversion qui justifie la place de ce spot dans la sélection d'étude.

## C'est quoi l'avantage de nuts sur ce flop ?

**C'est savoir qui détient le haut de la range.** Sur Q-J-10, les catégories se classent quinte → brelan servi → **double paire** → overpair, et le bouton mène dans chacune d'elles sauf la double paire.

Hors de position (OOP), c'est la grosse blinde, qui parle en premier ; en position (IP), c'est le bouton.

| Catégorie du haut | BB (OOP) | BTN (IP) | Ce qui crée l'écart |
|---|---|---|---|
| Quinte | 7,1 % | **10,5 %** | La grosse blinde n'a **pas d'AK** |
| Set/Brelan (brelan servi) | 0,7 % | **2,0 %** | La grosse blinde n'a **ni QQ ni JJ** |
| Double Paire | **6,0 %** | 5,9 % | En pratique à égalité — la seule ligne où mène la grosse blinde |
| Overpair | 0,0 % | **2,6 %** | La grosse blinde n'a **ni AA ni KK** |

Remets l'ordre à l'endroit : **la double paire est la troisième meilleure catégorie ici, au-dessus d'une overpair.** Sur Q-J-10, JT fait ==J-J-10-10-Q== — double paire — alors qu'AA n'est qu'une paire. Dire que « le haut appartient entièrement au bouton » est donc exagéré. La conclusion tient quand même : les deux catégories vraiment nuts, quintes et brelans servis, sont au bouton, et la ligne à égalité perd contre les deux sur ce board.

Chaque écart a été créé préflop. La grosse blinde 3-bet AA, KK, QQ, JJ et AK, donc aucune de ces mains n'arrive au flop ; le bouton les ouvre toutes et les emmène avec lui.

Les combinaisons collent exactement. Seules trois mains font une quinte ici : ==AK (A-K-Q-J-10)==, ==K9 (K-Q-J-10-9)== et ==98 (Q-J-10-9-8)==. Aucune des cartes dont elles ont besoin — l'As, le Roi, le 9, le 8 — n'est au board, donc chacune vaut 4 × 4 = 16 combos. La grosse blinde a K9 et 98, soit **32 combos** ; le bouton ajoute AK, soit **48**. Les 7,1 % et 10,5 % du solver correspondent à 32,2 et 48,1 combos — les mêmes chiffres.

**Toute la différence tient en une main : AK.** Une seule décision de 3-bet préflop déplace à ce point la part des nuts du flop.

## Avantage de range ou avantage de nuts : quelle différence ?

**L'avantage de range, c'est qui est le plus fort en moyenne ; l'avantage de nuts, c'est qui détient le plus de mains tout en haut du classement.** En général, les deux vont ensemble, et ce flop est justement le cas où ce n'est pas vrai.

| | Avantage de range | Avantage de nuts |
|---|---|---|
| Question à laquelle il répond | Quelle range a le plus d'équité globalement ? | Qui détient les meilleures mains ? |
| Sur Q-J-10 | Presque égal — 46,7 % contre 53,3 % | Déséquilibré — quintes, brelans servis et overpairs favorisent tous le bouton |
| Ce qu'il détermine | Si tu mises ou non | **Combien tu mises, et qui peut relancer** |

L'équité moyenne dit que ce flop est proche du pile ou face. Le haut de la range dit qu'un joueur détient la plupart des mains qui tiennent face à une grosse mise, et que l'autre en a peu pour répliquer. Quand les deux se contredisent, **l'avantage de nuts décide du sizing** — et, pour le joueur qui ne l'a pas, décide que miser en premier n'est pas une option.

## Quelle part de chaque range est en tirage ?

**En ne comptant que les vrais tirages : 68,4 % pour la grosse blinde, 68,7 % pour le bouton.** Ajoute les tirages couleur backdoor et on atteint 75,2 % et 74,4 % — les trois quarts des deux ranges.

![Infographie de composition des ranges comparant les catégories de mains de la grosse blinde et du bouton sur un board broadway connecté bicolore](/images/gto-srp-broadway-ranges-en.webp "Q♠J♦10♠ · répartition par catégorie — les quatre lignes du haut sont celles où se décide le flop")

| Tirage | BB (OOP) | BTN (IP) |
|---|---|---|
| Tirage combo (quinte + couleur) | 5,3 % | 4,1 % |
| Tirage couleur | 2,4 % | 2,0 % |
| Tirage quinte bilatéral | 28,7 % | 27,7 % |
| Tirage ventral | 32,0 % | 34,9 % |
| Tirage couleur backdoor | 6,8 % | 5,7 % |
| Aucun tirage | **24,7 %** | **25,5 %** |

**Les tirages se répartissent presque à égalité.** Sur le flop hauteur Roi, 72,2 % de la range de la grosse blinde n'avaient aucun tirage ; ici, c'est un quart. (C'est un axe distinct du tableau des catégories — chacun fait 100 % de son côté, et l'axe des tirages ne lit **que ce qui est encore en tirage** — une quinte déjà faite qui tient aussi deux piques, comme K♠9♠, tombe dans une ligne couleur, alors qu'une quinte sans rien d'autre tombe dans « aucun tirage ».)

Le combat sur ce board ne porte donc pas sur qui a le plus de tirages. Des tirages égaux s'annulent, et ce qui ne s'annule pas, c'est l'avantage de nuts. Si c'est le décompte des outs que tu veux consolider, commence par [les probabilités des tirages](/fr/blog/holdem-drawing-odds).

## Pourquoi top paire est-elle dangereuse ici ?

**Parce que 21,0 % de la range du bouton la battent déjà.** C'est-à-dire quintes 10,5 % plus brelans servis 2,0 % plus doubles paires 5,9 % plus overpairs 2,6 %.

Sur le flop sec hauteur Roi, le même calcul donnait **3,6 %** — brelans servis 1,9 %, doubles paires 0,4 %, overpairs 1,3 %.

| Part de la range du bouton qui bat déjà top paire | |
|---|---|
| Flop sec hauteur Roi (K-8-3) | 3,6 % |
| **Flop broadway (Q-J-10)** | **21,0 %** |

**La même « top paire », environ six fois plus de risque.** À part ça, 68,7 % de la range adverse ont un tirage quelconque — un axe différent qui recoupe les mains faites déjà devant toi, et non 68,7 % de plus par-dessus — donc même les mains que tu bats maintenant peuvent te passer devant à la turn (le tournant) et à la river (la rivière). Pousser une paire sur trois streets sur Q-J-10 veut dire que la grosse action qui revient n'est presque jamais une main que tu bats. C'est un pot à contrôler, pas à construire.

## Pourquoi l'EQR fait 78 contre 119 quand l'équité fait 47 contre 53 ?

**Parce que plus un board impose de décisions, plus le siège qui parle en dernier vaut cher.**

| Indicateur | BB (OOP) | BTN (IP) |
|---|---|---|
| Équité | 46,7 % | 53,3 % |
| EV (bb) | 2,00 | 3,50 |
| **Réalisation d'équité (EQR)** | **77,9 %** | **119,4 %** |

La méthode est détaillée dans [le spot hauteur Roi](/fr/blog/k-high-board-cbet). Ici : la part d'équité de la grosse blinde vaut ==5,5 × 46,7 % = 2,57bb== pour une EV réelle de 2,00bb, ce qui donne les 77,9 % ; le bouton transforme une part de 2,93bb en 3,50bb.

Aligne les trois flops et la tendance est nette.

| Flop | EQR BB | EQR BTN | Écart |
|---|---|---|---|
| A-7-2 (sec) | 84,0 % | 113,1 % | 29,1 points |
| K-8-3 (sec) | 80,7 % | 116,7 % | 36,0 points |
| **Q-J-10 (connecté, bicolore)** | **77,9 %** | **119,4 %** | **41,5 points** |

Trois spots donnent l'impression que *board plus chargé, écart plus large*. **Cette règle casse dès le spot suivant** — [9♥8♥7♣](/fr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp") est, comme Q-J-10, trois cartes qui se suivent sur un board bicolore, et son écart est de **13,2 points, le plus étroit des sept pots simplement relancés**, avec une grosse blinde qui réalise 93,2 %, le plus haut de ces sept (sur toute la série, les 117,8 % du pot 3-bet sur Q-10-7 sont plus hauts). Ce qui ouvre l'écart, ce n'est pas l'agitation du board mais **à quelle range appartient le haut du board** : Q-J-10 donne AK, QQ, JJ, AA et KK directement au bouton, alors que sur 9-8-7 ces mêmes cartes ne touchent pas le board. ⚠ Ça ne veut pas dire qu'elles n'y pèsent rien — 9-8-7 répartit les overpairs **1,3 % contre 6,4 %**, un écart plus large que les 0 % contre 2,6 % de Q-J-10. Mais cet avantage en overpairs est fragile sur un board connecté, et c'est pourquoi il ne verrouille pas le haut. Pour comprendre pourquoi parler en dernier vaut autant : [jouer en position](/fr/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Comment le bouton doit-il miser un board dynamique comme celui-ci ?

**Pas uniquement petit — le gros sizing entre dans le mélange ici.** Avec l'avantage de nuts, une grosse mise est difficile à relancer : les quintes, les brelans servis et les overpairs sont en grande majorité d'un seul côté (la grosse blinde n'a que 7,1 % de quintes et 0,7 % de brelans servis), donc l'autre joueur a peu de quoi répliquer.

C'est l'inverse de la recette du board sec. Là-bas, petit et fréquent marchait parce que le but était de faire coucher les mains vides. Ici, **68,4 %** de la range adverse sont en tirage, donc **les folds coûtent cher à acheter** — le petit sizing seul ne peut pas faire le travail, et le gros doit l'accompagner. ⚠ Ne pousse pas ça jusqu'à « donc la fréquence baisse » : ce spot d'étude ne résout que la première action du flop, donc la vraie répartition des sizings du bouton et sa fréquence de c-bet (mise de continuation) n'y sont pas. La version board par board est dans [la stratégie de c-bet](/fr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[⚠ Tout ce qui précède est un résultat du solver ; cette section en est une lecture. Le spot d'étude ne précalcule que la première action de la grosse blinde, donc la répartition des sizings du bouton n'est pas sur cet écran. Ouvre « Calcule ce spot toi-même » et déroule l'arbre si tu veux les vrais chiffres.]:::

## Qu'est-ce que ça change à la table ?

- **Avoir un tirage n'est pas une raison de faire un lead depuis la grosse blinde.** Les deux joueurs ont à peu près les mêmes tirages ici, donc un tirage n'est pas un avantage — faire un lead avec se heurte aux mains faites que seul ton adversaire possède.
- **Ne joue pas top paire pour trois streets de value sur Q-J-10.** 21,0 % de sa range sont déjà devant, et l'essentiel du reste est en tirage contre toi. Payer jusqu'au bout vaut mieux que miser toi-même.
- **Souviens-toi de ce qu'il y a dans ce check.** Les 99,9 % de la grosse blinde contiennent 32 combos de quintes (K9, 98) et 27 combos de doubles paires. Ces mains ne checkent pas parce qu'elles sont faibles — **face aux c-bets du bouton, lui rendre l'action rapporte plus que faire un lead** (la fréquence de c-bet du bouton ici n'est pas dans ce spot d'étude), et ça évite que la range de check ne s'effondre en mains vides. Ne lis donc pas le check comme du vide et n'écarte pas le check-raise. ⚠ Quelle est la *fréquence* de ce check-raise, ce calcul ne peut pas le dire : le spot d'étude s'arrête à **la première action du flop**, et tout ce qui vient après demande « Calcule ce spot toi-même ».
- **Contre des adversaires qui ne se couchent jamais avec leurs tirages, grossis le sizing plutôt que de miser plus souvent.** Acheter des folds, c'est ce qui échoue ici ; faire payer les tirages, c'est ce qui marche.

:::readnext[À lire ensuite]
/fr/blog/k-high-board-cbet | Le flop hauteur Roi où le caller checke 99,8 % | /images/gto-srp-dry-king-oop-en.webp
/fr/blog/a-high-board-cbet | Top paire, et pourtant check : le c-bet sur A-7-2 | /images/gto-srp-dry-ace-oop-en.webp
:::

## Vérifie toi-même

Ouvre le [solver poker gratuit](/fr/solver), va dans **Spots d'étude → Broadway connecté, bicolore → [⚡ Voir les résultats]**, et l'écran ci-dessus s'affiche sans attente.

Sur ce spot, lis le **panneau « Mains / Tirages » à droite** — tirages quinte bilatéraux et tirages ventraux dépassent ensemble 60 %, pour la première fois dans cette série. Ensuite, bascule le sélecteur « Joueur » sur **IP (BTN)** et regarde Quinte 10,5 % : c'est de cette seule ligne que vient tout l'article.

Pour t'entraîner au lieu de lire, ouvre le **Trainer GTO** dans la barre latérale : il distribue des mains selon les vrais poids de la range et te montre combien de grosses blindes ton action coûte. Gratuit, rien à installer, aucun compte.

## FAQ

**Q. Quelles mains font une quinte sur Q-J-10 ?**

A. Trois : AK pour A-K-Q-J-10, K9 pour K-Q-J-10-9, et 98 pour Q-J-10-9-8. Aucune des cartes dont elles ont besoin — As, Roi, 9, 8 — n'est au board, donc chacune vaut 4 × 4 = 16 combos, 48 au total. La grosse blinde 3-bet AK préflop, ce qui lui en laisse 32.

**Q. Un board humide, ce n'est pas justement l'endroit pour lead en semi-bluff ?**

A. Non — le nombre de tirages ne décide pas à lui seul. La répartition des mains faites, l'avantage de nuts et les bloqueurs doivent être pesés ensemble. Ici, les tirages quinte bilatéraux font 28,7 % contre 27,7 % — en pratique identiques — alors que les quintes déjà faites font 7,1 % contre 10,5 % en faveur du bouton. Un lead exige que le haut de la range soit de ton côté, pas la moyenne, et ce flop est exactement l'inverse. Il existe dans la sélection d'étude un board où la condition est vraiment remplie — le [9-8-7 médian connecté](/fr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"), où la grosse blinde fait 23,7 % de lead contre presque rien ici.

**Q. Quelle est la différence entre avantage de range et avantage de nuts ?**

A. L'avantage de range porte sur la moyenne — quelle range a le plus d'équité sur l'ensemble des mains. L'avantage de nuts porte sur l'extrême — qui détient le haut du classement, lequel, sur Q-J-10, va dans cet ordre : quinte, brelan servi, double paire, overpair. L'équité est presque égale, 46,7 % contre 53,3 %, et pourtant les quintes et les brelans servis favorisent tous deux le bouton (seule la double paire est à égalité, 6,0 % contre 5,9 %). Quand les deux divergent ainsi, c'est l'avantage de nuts qui fixe le sizing.

**Q. Je peux utiliser ces chiffres à toutes les limites ?**

A. Comme base quand les conditions correspondent : heads-up, 100bb, ranges standard d'ouverture et de call, sans rake. Ce board en particulier devient plus déséquilibré avec la profondeur — à 200bb, l'écart de 3,4 points sur les quintes compte bien plus qu'ici, parce qu'il reste plus d'argent à perdre contre la main que tu ne peux pas avoir.
`.trim(),
};

export default POST;
