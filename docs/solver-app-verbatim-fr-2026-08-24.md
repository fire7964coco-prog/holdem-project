# 솔버 앱 13스팟 «전수» 축어 — fr (2026-08-24 · Playwright DOM 실측)

> fr 앱 배포 당일 실측(사장님 통보 → 라이브 확인). 이로써 **앱 9언어 전수 축어**가 갖춰졌다
> (기존 8언어 = `solver-app-verbatim-5langs-2026-08-24.md` + `-ja-es-` + pt 기납품).
>
> 🔴 **이 파일은 «정본»이 아니라 «앱이 지금 무엇을 말하는가»의 기록이다.**
> 사실 판정 기준은 `docs/gto-solver-series-spec.md` §4-B이고, 둘이 어긋나면 §4-B가 이긴다.
>
> 채집: `?lang=fr` → 학습 스팟 패널 → `document.body.innerText`. `curl` 불가(SSR 초기 HTML은 한국어).

## 0. 🔴 한 줄 결론

- **① RP-20 = 9/9 전 언어**(fr «après le check de BB» 결함형 — 8/8이 9/9로).
- ④ RP-01 계열+RP-02 · ⑦ RP-19+조작 지시 · ⑧ RP-03 — **fr도 전건 결함형**(9/9).
- ⑩ «rate **presque** toute la range» — 🟢 완화형(en largely·de weitgehend·ja ほぼ 계열).
  절대형 잔존은 여전히 ko·zh·zh-hant(+es 재판정 대기 — M-055).
- ③⑨⑬ 🟢 정정본(77,9/119,4·99,9 / 98,4·0,8 / 88·66·80,1) · ⚠ ③ «des 13 spots» 하드코딩(권고 대상).
- 🔴 fr 소수 구분자 = **쉼표 + % 앞 공백**(77,9 % · 5,5bb).
- 🔴 title이 8언어 중 유일하게 **«GTO Trainer» 선두** — «HoldemMaster GTO Trainer — Solver et
  trainer GTO gratuits pour le Texas Hold'em».

## 1. 화면 골격

| 자리 | fr 축어 |
|---|---|
| `<html lang>` | `fr` |
| `<title>` | `HoldemMaster GTO Trainer — Solver et trainer GTO gratuits pour le Texas Hold'em` |
| meta description | `Solver GTO gratuit qui tourne directement dans ton navigateur, rien à installer. Calcule la stratégie postflop du Texas Hold'em à partir de tes ranges, du board et des bet sizes. Par HoldemMaster.` |
| 히어로 | `La stratégie GTO, directement dans ton navigateur.` / `Rien à installer, rien à payer. Saisis tes ranges et un board, et la stratégie optimale se calcule directement sur ton appareil.` |
| 네비 | `Spots d'étude ⚡ Direct` · `Trainer GTO Note EV` · `Charts préflop Ranges` · `Equity % victoire` |
| 사이드바 | `① Range OOP` · `② Range IP` · `③ Board` · `④ Bet sizes Réglages` · `⑤ Calculer` |
| 특징 4칸 | `Gratuit — Toutes les fonctions, sans limite d'usage` · `Étude hors ligne — Ajoute-le à ton écran d'accueil et entraîne-toi sans connexion` · `Calcul rapide — Multithread — la vitesse d'un solver de bureau` · **`Trainer GTO — Joue des spots, notés sur la perte d'EV par rapport au pot`** 🟢 |
| 트레이너 CTA | `Essaie le Trainer GTO — il te montre exactement combien de bb chaque décision te coûte` |
| PWA | `♠ Ajouter à l'écran d'accueil` |
| 그룹 라벨 | `Single Raised Pot — BTN vs BB (fondamentaux)` `Pot 5,5bb · Stack 97,5bb` / `Pot 3-bet — BB 3-bet, BTN paye (SPR bas)` `Pot 22,5bb · Stack 89bb` / `Blind vs Blind — SB vs BB (ranges larges)` `Pot 6bb · Stack 97bb` |
| 결과 5구역(Mode d'emploi) | `Barre d'actions du haut` · `Matrice 13×13 (à gauche)` · `Tuiles (en haut à droite)` · `Catégories de mains (au milieu à droite)` · `Tableau (en bas à droite)` — Tableau 행 축어 «Poids, equity, EV et % d'action par main — clique sur un en-tête de colonne pour trier» |
| 트레이너 문턱 | `jusqu'à 0,35 % du pot = Meilleur choix · jusqu'à 1 % = Acceptable · au-delà = Spot à revoir` · SRP `0,02bb et 0,06bb` · 3-bet `0,08bb et 0,23bb` · planchers `0,02bb / 0,05bb` · `exploitabilité cible de 0,5 %` · `[Révision]` · Filtres |
| AGPL | `Cette app est basée sur WASM Postflop (de Wataru Inariba, AGPL-3.0), localisée et enrichie par HoldemMaster. Le code source modifié complet est publié sur GitHub sous la même licence.` |

## 2. 13스팟 축어 (전수)

| # | 보드 | 앱 note (축어) | 판정 |
|---|---|---|---|
| ① | A♥7♦2♣ | `Le cas d'école de l'avantage de range. Regarde avec quelle range large BTN mise un petit c-bet après le check de BB — l'as tape en plein dans la range de l'ouvreur.` | 🔴 **RP-20** |
| ② | K♠8♦3♣ | `Compare avec le board A-high. Le board K-high favorise aussi BTN, mais les checks augmentent un peu. Tu sais pourquoi ?` | 🟢 |
| ③ | Q♠J♦T♠ | `Un board qui semble toucher les deux ranges. Pourtant c'est ici que BB réalise le moins bien son equity des 13 spots — 77,9 % réalisés contre 119,4 % pour BTN — et il check à 99,9 %. Le panneau « Mains / Tirages » montre pourquoi.` | 🟢 정정본 · ⚠ «des 13 spots» 하드코딩 |
| ④ | 9♥8♥7♣ | `La texture classique qui favorise le caller. La fréquence de c-bet de BTN s'effondre — ce spot montre exactement pourquoi « toujours c-bet » est une erreur.` | 🔴 **RP-01 계열+RP-02** |
| ⑤ | Q♠9♠2♠ | `Regarde pourquoi les grosses mises disparaissent au profit des petites mises et des checks. Remarque à quelle fréquence même une couleur faite se contente de checker.` | 🟢 |
| ⑥ | 6♣6♦3♥ | `Personne ne touche ce board, donc la part de bluffs augmente. Utilise le tableau détaillé pour trouver quelles mains misent en bluff.` | 🟢 |
| ⑦ | 6♠5♥2♦ | `Une guerre d'overcards — BB check-raise souvent sur cette texture. Suis la barre d'actions du haut après une mise pour voir les réponses.` | 🔴 **RP-19+조작 지시** |
| ⑧ | A♦K♠2♥ | `Le meilleur flop possible pour le 3-betteur, dont la range est remplie d'AK, d'AA et de KK. À SPR bas, les petites mises mettent la pression sur toute la range.` | 🔴 **RP-03** |
| ⑨ | Q♥T♥7♠ | `Un pot 3-bet sur un board qui convient aussi au caller — et pourtant le 3-betteur ne ralentit pas : 98,4 % de la range mise aux deux tiers du pot, toujours au même sizing. Regarde quelles mains composent les 0,8 % qui checkent.` | 🟢 정정본 |
| ⑩ | 8♦5♣2♠ | `Un board qui rate presque toute la range du 3-betteur — et pourtant les overpairs et les mains hauteur As maintiennent la pression. Equity contre fold equity.` | 🟢 완화형(`presque`) |
| ⑪ | K♥T♦6♠ | `En blind vs blind, les ranges sont larges, donc les deux joueurs arrivent faibles au flop. Compare les fréquences avec le spot « Board sec K-high » de BTN vs BB.` | 🟢 |
| ⑫ | 7♦6♦5♣ | `Deux ranges larges se percutent sur un board ultra-connecté : doubles paires, quintes et tirages partout. C'est ici que le panneau « Mains / Tirages » est le plus parlant.` | 🟢 |
| ⑬ | A♠A♥6♦ | `Deux as sur le board. Les brelans ne sont pas rares — SB en a simplement plus (88 combos contre 66 pour BB), donc SB mise à 80,1 %. Toute la question sur ce board : qui a le plus d'as dans sa range.` | 🟢 정정본 |

스팟 이름(라벨): 乾燥 계열 `Board sec A-high`·`Board sec K-high` · `Broadway connecté, bicolore` ·
`Board médian connecté, bicolore` · `Board monochrome` · `Board pairé` · `Board bas rainbow` ·
`Board A-high, avantage du 3-betteur` · `Board dynamique bicolore` · `Board bas et sec` ·
`Board K-high avec un T` · `Board bas connecté, bicolore` · `Board avec deux As`.
버튼: `⚡ Voir les résultats` · `Calculer toi-même`. 꼬리: `Les ranges sont des approximations du
jeu en ligne standard à 100bb. Charge un spot, modifie les ranges et compare — une excellente
façon d'étudier.`
