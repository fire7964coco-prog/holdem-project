/**
 * `/fr/hand-chart` FAQ — 화면(`<details>`)과 서버 page.tsx의 FAQPage 스키마가 같은 배열을 쓴다.
 * ★2026-10-05 회차 1 신설. 뜻 정본 = ko `app/hand-chart/faq.ts`(4번은 «type 42 % vs combos 35,4 %» 판).
 * % 앞·« » 안쪽은 NBSP(U+00A0).
 */
export const HAND_CHART_FAQ_FR: { q: string; a: string }[] = [
  {
    q: "Faut-il suivre le tableau des mains de départ à la lettre ?",
    a: "Le tableau est un point de départ. À une table 6-max, utilise la range d'une ou deux positions plus tardives du tableau 9-max. Avec des antes, élargis toute la range de 5 à 8 %. Aux tables remplies de joueurs faibles, jouer plus serré pour maximiser la value est souvent plus rentable.",
  },
  {
    q: "Y a-t-il vraiment 169 mains de départ au poker ?",
    a: "Oui. Sans distinguer les couleurs, il existe exactement 169 types de mains : 13 paires servies, 78 mains assorties et 78 mains dépareillées. Dans un vrai paquet, le nombre total de combinaisons (combos) est de 1 326.",
  },
  {
    q: "Pourquoi la grosse blinde n'est-elle pas dans le tableau ?",
    a: "La BB a déjà investi 1 grosse blinde : elle ne joue pas en relance d'ouverture mais en « défense » (suivre ou surrelancer). Une range de défense de BB dépend entièrement de la position et de la taille d'ouverture de l'adversaire, elle demande donc son propre tableau.",
  },
  {
    q: "Est-ce raisonnable d'ouvrir 42 % des mains au bouton ?",
    a: "Il faut d'abord comparer la même base. Les 42 % de ce tableau sont la part sur les 169 « types » de mains, alors que les 40 à 50 % au bouton cités par les sources GTO sont une part sur les 1 326 « combos ». Convertie en combos, la range du bouton de ce tableau tombe à 35,4 % : elle est même plus serrée que cette fourchette GTO. Le problème n'est donc pas que 42 % soit trop large ; simplement, face à des adversaires serrés ou débutants, se concentrer davantage sur les mains premium rapporte souvent plus en pratique. Le tableau reste une base équilibrée.",
  },
  {
    q: "Que faire si je me fais 3-bet ?",
    a: "Ta range d'ouverture et ta range pour payer un 3-bet ne sont pas les mêmes. En général, tu réponds à un 3-bet avec des mains premium comme AA-JJ et AKs-AQs, plus quelques bluffs : des petits as assortis comme A5s et A4s, qui bloquent AA/AK et peuvent faire la couleur à l'as (nut flush). Couche le reste.",
  },
];
