// `/es/calculator` FAQ — page.tsx(FAQPage JSON-LD)와 공용 calculator-tool.tsx(화면)가 같은 배열을 쓴다.
// ★2026-09-17 신설. 정본 = `app/en/calculator/faq.ts` 8문항을 스페인어(LATAM 중립 · tú)로 재저작.
// 🔴 §13: 수치는 EN과 동일(35% · 19.6% · 23.1% · 3,000 ÷ 13,000 · $397 vs $300 · 33.3% · 16.6% · 13.3% · 40% · 6.7 puntos).
//    숫자·통화 형식은 es 코퍼스 관례(EN 형식 · 맨 `$`) — 근거는 dict.ts 머리말.
// 용어 출처: translation-terms-es.md(acuerdo por ICM · chip chop · burbuja · mesa final · en premios · foldear) ·
//    holdem-icm.ts(«Acuerdo por ICM vs chip chop», «bustear», «salto de premio») · holdem-outs.ts(«regla del 2 y 4»).
export const CALCULATOR_FAQ_ES: { q: string; a: string }[] = [
  {
    q: "¿Cómo se usa la calculadora de ICM?",
    a: "Escribe el número de jugadores, el stack de cada uno y la estructura de premios (del 1.º al 6.º). La calculadora te muestra al instante cuánto vale de verdad cada stack en dinero de premios — úsala para decidir call o fold y para negociar acuerdos en la burbuja y en la mesa final.",
  },
  {
    q: "¿Qué es el ICM en el póker?",
    a: "ICM son las siglas de Independent Chip Model, un modelo matemático que convierte las fichas de torneo en su expectativa real en dinero de premios. La idea clave: doblar tus fichas no dobla tu equity en premios.",
  },
  {
    q: "Soy el chip leader — ¿por qué mi valor ICM es menor que mi porcentaje de fichas?",
    a: "Porque ganar sigue pagando solo el premio del 1.º, no toda la bolsa. En el ejemplo de burbuja de abajo, un líder con el 40% de las fichas tiene un valor ICM de solo 33.3% (6.7 puntos menos), mientras que el stack más corto (13.3% de las fichas) vale el 16.6% — más que su porcentaje de fichas.",
  },
  {
    q: "¿Cómo se calcula un acuerdo por ICM en la mesa final?",
    a: "Se reparte el dinero de premios que queda en proporción al valor ICM de cada jugador. El «valor ICM» que te devuelve esta calculadora — después de meter los stacks actuales y los premios que faltan por repartir — es exactamente la cantidad justa del acuerdo.",
  },
  {
    q: "¿Cuál es la diferencia entre un chip chop y un acuerdo por ICM?",
    a: "El chip chop reparte los premios según el porcentaje bruto de fichas, y favorece al chip leader. El acuerdo por ICM refleja la probabilidad de cada jugador de terminar en cada puesto, así que es más justo con los stacks cortos. En el ejemplo de abajo, el stack corto se lleva unos $397 con un acuerdo por ICM frente a $300 con un chip chop — cuando vas corto, pide siempre un acuerdo por ICM.",
  },
  {
    q: "¿Por qué debería foldear más en la burbuja?",
    a: "En la burbuja, el valor ICM que pierdes al bustear es mayor que el valor que ganas al llevarte el bote. Un call rentable en chip EV puede ser perdedor en EV de premios (ICM), así que los stacks medios, sobre todo, deberían evitar los coin flips.",
  },
  {
    q: "¿Cómo estimo mi equity a partir de los outs?",
    a: "Multiplica los outs × 4 en el flop y × 2 en el turn para obtener un porcentaje aproximado. Por ejemplo, un proyecto de color con 9 outs está cerca del 35% en el flop y del 19.6% en el turn. Usa la calculadora de outs de arriba para los números exactos.",
  },
  {
    q: "¿Cuál es la fórmula de las pot odds?",
    a: "Cantidad a pagar ÷ (bote + cantidad a pagar) = la equity mínima que necesitas. Por ejemplo, pagar 3,000 en un bote de 10,000 es 3,000 ÷ 13,000 ≈ 23.1%, así que el call es rentable cuando tu equity supera el 23.1%.",
  },
];
