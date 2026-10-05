/**
 * `/es/hand-chart` FAQ — 화면(`<details>`)과 서버 page.tsx의 FAQPage 스키마가 같은 배열을 쓴다.
 * ★2026-10-05 신설. 뜻 정본 = ko `app/hand-chart/faq.ts`(4번은 «타입 42% vs 콤보 35.4%» 판).
 */
export const HAND_CHART_FAQ_ES: { q: string; a: string }[] = [
  {
    q: "¿Hay que seguir la tabla de manos iniciales al pie de la letra?",
    a: "La tabla es un punto de partida. En mesas 6-max, juega cada posición uno o dos puestos más suelto que en 9-max. Si hay ante, amplía todo el rango un 5–8%. En mesas con muchos jugadores débiles, suele rendir más jugar más tight para sacarle el máximo valor a tus manos.",
  },
  {
    q: "¿Son exactamente 169 manos iniciales?",
    a: "Sí. Sin distinguir palos, hay exactamente 169 tipos de mano: 13 pares servidos, 78 manos del mismo palo y 78 de distinto palo. En la baraja real, el total de combinaciones es 1,326.",
  },
  {
    q: "¿Por qué la ciega grande no aparece en la tabla?",
    a: "La ciega grande ya puso 1 BB, así que no abre con una subida: defiende (iguala o resube). Su rango de defensa cambia por completo según la posición y el tamaño de la apertura del rival, por eso necesita su propia tabla.",
  },
  {
    q: "¿Está bien abrir el 42% de las manos en el botón?",
    a: "Primero hay que comparar con el mismo criterio. El 42% de esta tabla es la proporción sobre los 169 «tipos» de mano, mientras que el 40–50% de botón que citan los materiales GTO se mide sobre las 1,326 «combinaciones». Pasado a combos, el rango de botón de esta tabla es del 35.4%: incluso más estrecho que esa franja GTO. Así que el 42% no es un problema por amplio; lo que pasa es que, si tus rivales son tight o principiantes, concentrarte más en las manos premium suele rendir más en la práctica. La tabla es una base equilibrada de referencia.",
  },
  {
    q: "¿Qué hago si me hacen 3-bet?",
    a: "Tu rango de apertura y tu rango para pagar un 3-bet son distintos. En general, ante un 3-bet respondes con manos premium como AA-JJ y AKs-AQs, más algunos faroles (ases de la rueda del mismo palo, como A5s y A4s, que bloquean AA y AK y pueden ligar el color nuts). El resto, al fold.",
  },
];
