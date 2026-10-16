import type { HandChartDict } from "@/components/hand-chart/dict";

// EN meanings and values, Italian rollout structure; public-source consensus ranges.
export const HAND_CHART_DICT_PL: HandChartDict = {
  numberLocale: "pl-PL",
  seo: {
    title: "Ręce startowe poker — tabela preflop",
    description: "Poznaj 169 rąk startowych w Texas Hold'em według pozycji, od UTG do SB. Wybierz pozycję, aby podświetlić jej zakres otwarcia w tabeli.",
    path: "/pl/hand-chart",
    keywords: ["ręce startowe poker", "tabela rąk startowych", "poker hand chart", "range poker", "preflop chart"],
  },
  hero: {
    badge: "♠ Interaktywna tabela rąk startowych",
    h1: "Ręce startowe poker",
    lead: "Wszystkie 169 rąk oznaczonych kolorami według pozycji (UTG → SB). Wybierz pozycję, aby podświetlić tylko ręce, którymi możesz z niej otworzyć.",
    handsUnit: "rąk", positionsUnit: "pozycji", tapHint: "Dotknij lub najedź kursorem, aby zobaczyć",
  },
  filter: {
    caption: "Wybierz pozycję → podświetlą się grywalne ręce",
    basisNote: ["Procent przy każdej pozycji oznacza ", { b: "udział w 169 typach rąk" }, " (procent combo jest również w tabeli poniżej)"],
    showAll: "Pokaż wszystko", selected: "Zakres otwarcia {pos} · {count} / 169 ({pct}%)", handsCount: "{n} rąk",
  },
  positions: ["Under the gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "Mały blind (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Przesuń, aby zobaczyć całą tabelę →", pocketPair: "Para z ręki", suited: "Suited", offsuit: "Offsuit", openFrom: "Otwieraj od {pos} i dalej",
    legendNote: "Prawy górny trójkąt = suited (s) · przekątna = pary z ręki · lewy dolny trójkąt = offsuit (o)",
  },
  legend: { heading: "Legenda kolorów", seatLine: "{pct} ze 169", fold: "Pas", foldSub: "Wszystkie pozycje" },
  table: {
    heading: "Zakres otwarcia według pozycji", swipe: "← Przesuń, aby zobaczyć zakresy i przykładowe ręce", position: "Pozycja", hands: "Ręce", handsSub: "(ze 169)", range: "Zakres", rangeSub: "typy / combo", examples: "Przykładowe ręce", comboCell: "/ combo {pct}",
    notes: [
      ["* ", { b: "Są dwie podstawy obliczeń." }, " „12% ze 169” liczy ", { b: "typy" }, " rąk (ile spośród 169 typów), a podstawa ", { b: "combo" }, " liczy, ile spośród 1 326 kombinacji mieści się w zakresie. Ten sam zakres daje więc różne wartości: AA to jeden typ, ale 6 combo, AKo to jeden typ, ale 12 combo. Solvery i artykuły strategiczne zwykle liczą combo."],
      ["* Orientacyjne wartości standardowego zakresu otwarcia, oparte na zgodności publicznych źródeł. Wyniki solvera zależą od wielkości otwarcia, stacka i zakresu przeciwnika: w przykładzie blind kontra blind w solverze GTO HoldemMaster SB otwiera do 3bb z 46,6% (92 typy, 618 combo). Przy stole dostosuj zakres także do tendencji przeciwników."],
    ],
  },
  why: {
    heading: "Dlaczego pozycja decyduje o wyborze rąk",
    items: [
      { title: "Pozycja = informacja", desc: "Button (BTN) zawsze działa ostatni po flopie. Gdy najpierw widzisz zakłady i czeki innych, ta sama ręka staje się znacznie bardziej opłacalna." },
      { title: "Za UTG jest 8 graczy", desc: "Otwierając z UTG przy stole 9-osobowym, nie wiesz, jak zareaguje 8 graczy za tobą. Ryzyko re-raise jest wysokie, więc spekulacyjne ręce jak suited connectors nie mogą zrealizować swojej wartości — zawęź zakres do rąk premium." },
      { title: "Wartość suited", desc: "Ręka suited ma około 3–5% przewagi equity nad tą samą ręką offsuit. Dlatego możesz otworzyć A8s z hijacka, a z A8o czekasz na button." },
      { title: "Dylemat małego blinda", desc: "Mały blind zawsze działa pierwszy po flopie. Nawet z szerszym zakresem niż button realizuje mniej equity, więc ręce o średniej sile stają się mniej opłacalne." },
    ],
  },
  faqHeading: "Tabela rąk startowych — częste pytania",
  related: {
    heading: "Kolejny krok: poradniki i narzędzia",
    items: [
      { href: "/pl/blog/texas-holdem-rules-for-beginners", tag: "Na początek", title: "Jak grać w Texas Hold'em", desc: "Od blindów do showdownu, krok po kroku" },
      { href: "/pl/blog/holdem-betting-actions", tag: "Akcje", title: "Czek, sprawdzenie, przebicie i pas", desc: "Akcje w licytacji przy stole" },
      { href: "/pl/blog/holdem-game-order", tag: "Kolejność gry", title: "Kto działa pierwszy?", desc: "Kolejność akcji preflop i postflop" },
      { href: "/pl/blog/holdem-blind-meaning", tag: "Blindy", title: "Mały i duży blind", desc: "SB, BB i ich rola w rozdaniu" },
      { href: "/pl/calculator", tag: "Narzędzie", title: "Kalkulator pokerowy", desc: "Equity i pot odds dla twojej ręki" },
    ],
  },
};
