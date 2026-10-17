"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

// Italian page structure; copy translated from EN. Terms: docs/translation-terms-pl.md.
const n = (x: number) => x.toLocaleString("pl-PL", { useGrouping: true }).replace(/[\u00a0\u202f]/g, " ");
const dec = (x: string) => x.replace(".", ",");
// 2–4, 22–24 … (bez 12–14) biorą liczbę mnogą czasownika
const few = (k: number) => k % 10 >= 2 && k % 10 <= 4 && (k % 100 < 12 || k % 100 > 14);
const PL_STREET_AT: Record<string, string> = { Preflop: "przed flopem", Flop: "na flopie", Turn: "na turnie", River: "na riverze" };

const PL_NAMES: HandNames = {
  categories: ["Najwyższa karta", "Para", "Dwie pary", "Trójka", "Strit", "Kolor", "Full", "Kareta", "Poker (straight flush)"],
  drawingDead: "Drawing dead",
  flushDraw: "Flush draw",
  straightDraw: "Straight draw",
};

const PL_UI: QuizUI = {
  names: PL_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "Ty",
  folded: "Pas",
  raise: "Przebicie",
  call: "Sprawdzenie",
  bet: "Zakład",
  check: "Czek",
  allIn: "All-in",
  tableNote: "Stół 6-max lub 9-osobowy · wybierz, ilu graczy zobaczy flop (2–6)",
  playersBtn: (k) => `${k} graczy`,
  playersLabel: "Gracze",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "Styl przeciwników",
  styleHint: "Styl przeciwników zmienia tylko reguły akcji od flopa; zakresy preflop pozostają takie same",
  styleNames: { standard: "Standard", tight: "Tight", loose: "Loose", aggressive: "Agresywny" },
  loading: "Tasowanie i obliczenia…",

  myEquity: "Twoje equity",
  vsOpponents: (k) => k === 0 ? "brak przeciwników" : `przeciwko ${k} ${k === 1 ? "przeciwnikowi" : "przeciwnikom"}`,
  basisSeat: "przeciwko zakresom dla pozycji",
  basisRange: "przeciwko rękom zgodnym z ich akcjami",
  roleOpen: "Open",
  roleDefend: "Defend",
  winShort: "Wygrana",
  tieShort: "Remis",
  loseShort: "Przegrana",
  revealedLabel: "👀 Przeciwko odkrytym rękom",
  revealedNote: (gap) =>
    `Wartość powyżej zakłada, że nie widzisz ich kart. Stąd różnica ${dec(gap)} percentage points. Przy stole podejmujesz decyzję na podstawie górnej wartości.`,

  potOddsTitle: "Pot odds — equity potrzebne do sprawdzenia na break-even",
  potLabel: "Pula",
  potBeforeLabel: "Pula (przed zakładem)",
  toCallLabel: "Amount to call",
  requiredLabel: "Potrzebne equity",
  noBet: "Nikt nie postawił zakładu. Następną kartę zobaczysz za darmo.",
  noBetAllIn: (river) => river
    ? "Wszyscy pozostali gracze są już all-in i nie mają żetonów na zakład. Rozdanie przechodzi od razu do showdownu."
    : "Wszyscy pozostali gracze są już all-in i nie mają żetonów na zakład. Rozdawane są pozostałe karty, a potem następuje showdown.",
  verdictCall: "Sprawdź",
  verdictFold: "Spasuj",
  impliedNote: "Jeśli jednak po trafieniu możesz wygrać więcej (implied odds), sprawdzenie nadal może być poprawne.",

  revealBtn: (next) => `Rozdaj ${next.toLowerCase()} →`,
  newHandBtn: "Nowe rozdanie 🔄",
  showCards: "👀 Pokaż ich karty",
  hideCards: "🙈 Ukryj ich karty",

  wonByFold: (pot) => `Wszyscy spasowali — wygrywasz pulę ${n(pot)}`,
  splitLabel: (names) => `Podział puli — remis: ${names.join(" · ")}`,
  winLabel: (name, cat) => `${name} wygrywa · ${cat}`,
  winLabelHero: (cat) => `Wygrywasz · ${cat}`,

  reviewTitle: "📋 Analiza — kiedy należało spasować?",
  reviewCols: ["Street", "Twoje equity", "Potrzebne", "Ocena"],
  reviewNoMistake: "✅ Sprawdzenie było poprawne do samego końca.",
  reviewMistake: (street) => `⚠️ Już ${PL_STREET_AT[street] ?? street} pas był poprawną decyzją. To był moment, by wycofać się z rozdania.`,
  reviewInvested: (invested, pot) => `Wpłacone żetony: ${n(invested)} · końcowa pula: ${n(pot)}`,

  formulaTitle: "📐 Skąd bierze się ta wartość",
  outsLabel: (k) => `Liczba kart, które uzupełniają lub poprawiają twoją rękę: ${k}`,
  outsBreak: (o, both) => [
    o.flush > 0 ? `${o.flush} do koloru` : "",
    o.straight > 0 ? `${o.straight} do strita` : "",
    o.set > 0 ? `${o.set} do seta lub tripsa` : "",
    o.twoPair > 0 ? `${o.twoPair} do dwóch par` : "",
    o.over > 0 ? `${o.over} do sparowania overcard` : "",
    both > 0 ? `${both} ${few(both) ? "pasują" : "pasuje"} do dwóch kategorii (liczone tylko raz)` : "",
  ].filter(Boolean).join(" · "),
  hitLabel: "Szansa trafienia jednej z tych kart (zasada 2 i 4)",
  winLabel2: "Twoje equity w puli (szacowane — remis liczy się jako twój udział w podziale puli)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat: "Te wartości mierzą różne rzeczy. Górna to szansa TRAFIENIA; dolna to twój udział w puli z WYGRANEJ (remis liczy się jako twój udział w podziale). Możesz trafić i przegrać, jeśli przeciwnik poprawi rękę bardziej, albo nie trafić i wygrać. Ocena opiera się na dolnej wartości.",
  noDrawNote: (basis, k) => basis === "seat"
    ? `To jeszcze preflop, więc skrót „outy × 2/4” nie ma zastosowania. Equity powyżej pochodzi z ${k} prób przeciwko rękom, z którymi każdy przeciwnik mógłby wejść do puli ze swojej pozycji.`
    : `Nie masz żadnego z outów liczonych przez to narzędzie: żadna karta nie uzupełnia koloru lub strita ani nie podnosi kategorii twojej ręki do seta, dwóch par lub pary z overcard. Skrót „outy × 2/4” nie ma tu zastosowania. Equity powyżej pochodzi z ${k} prób przeciwko wszystkim rękom zgodnym z zaobserwowanymi akcjami.`,
  foldWinNote: "Wszyscy przeciwnicy spasowali, więc pula jest twoja. Powyższe 100% to wynik tego rozdania, a nie szacunek.",
  riverNote: "To river — nie ma już kart do rozdania i skrót „outy × 2/4” nie ma zastosowania. Equity powyżej porównuje twoją końcową rękę ze wszystkimi rękami zgodnymi z zaobserwowanymi akcjami.",
  chartTitle: "📈 Equity na kolejnych streetach — wszystkie karty odkryte",
  resultTabs: ["📋 Analiza", "📈 Wykres", "🃏 Obliczenia"],
  solverTitle: (info) => info.kind === "spot" ? "Zobacz ten spot w solverze GTO" : info.kind === "notReady" ? "Zobacz podobny spot w solverze GTO" : "Zobacz spot heads-up w solverze GTO",
  solverOpen: "Otwórz Flop study w solverze (po angielsku)",
  solverNote: (info) => {
    const gto = "Pokazuje strategię na flopie, gdy obaj gracze grają GTO (wcześniej obliczone wyniki · 6-max 100bb · tylko flop). Zakresy, sizingi i reguły przeciwników różnią się więc od tych w tym narzędziu.";
    switch (info.kind) {
      case "spot": return info.flop
        ? `${info.opener} open · ${info.caller} sprawdzenie (single-raised pot w solverze) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — link otwiera te same pozycje i ten sam flop w Flop study w solverze. ${gto}`
        : `${info.opener} open · ${info.caller} sprawdzenie — rozdanie skończyło się przed flopem, więc otworzy się tylko zestawienie pozycji. Wybierz trzy karty flopa w solverze. ${gto}`;
      case "notReady": return `Zestawienie ${info.opener} open · ${info.caller} sprawdzenie nie jest jeszcze obliczone w Flop study w solverze. Wybierz podobne zestawienie pozycji lub oblicz je samodzielnie w solverze.`;
      case "multiway": return `Liczba graczy, którzy zobaczyli ten flop: ${info.players}. Wcześniej obliczone wyniki solvera obejmują tylko pule heads-up, więc nie otworzysz tego rozdania bez zmian. Wybierz w Flop study zestawienie przeciwko jednemu przeciwnikowi.`;
      case "table9": return "Wcześniej obliczone wyniki solvera dotyczą stołów 6-max, więc nie otworzysz bezpośrednio rozdania ze stołu 9-osobowego. Wybierz w Flop study najbliższe zestawienie pozycji.";
    }
  },
  solverLang: "en",
  fmtNum: n,
  decimalComma: true,
  chartRangeLegend: "To, co widzisz",
  chartNote: "Linie ciągłe pokazują equity każdej pozycji przy wszystkich odkrytych rękach; linia przerywana pokazuje equity widoczne bez znajomości kart przeciwników. Linia gracza, który spasował, kończy się na streecie poprzedzającym pas.",
  quizToggle: "🎯 Quiz",
  quizGuessTitle: "Jakie jest twoje equity?",
  quizGuessHint: "Ustaw swoje oszacowanie suwakiem",
  quizSubmit: "Sprawdź odpowiedź",
  quizCallSubmit: "Sprawdź → oceń",
  quizFoldSubmit: "Spasuj → oceń",
  quizResult: (guess, err, points) => `Twój typ: ${guess}% · błąd: ${dec(err)} percentage points · punkty: ${points}`,
  quizChoiceResult: (ok, verdict) => ok ? `Prawidłowa odpowiedź (${verdict})` : `Zła odpowiedź — poprawna to ${verdict}`,
  quizNotCounted: "Poza statystykami quizu — equity lub karty przeciwników były już widoczne",
  quizStats: (s) => `Rozdania: ${s.hands} · średni błąd: ${dec(s.avgErr)} percentage points · poprawne decyzje: ${s.hits}/${s.decisions} · punkty: ${n(s.points)}`,
  quizReset: "Resetuj",
  quizResetConfirm: "Usunąć historię quizu zapisaną w tej przeglądarce? Tej operacji nie da się cofnąć.",
  quizInvite: "Zaloguj się, aby zapisać tę historię na koncie i mieć do niej dostęp na dowolnym telefonie lub komputerze.",
  quizInviteLink: "Zaloguj się",
  quizGuessCol: "Twój typ",
  quizChoiceCol: "Wybór",
  quizHandSummary: (avgErr, hits, decisions, points) => `To rozdanie: średni błąd ${dec(avgErr)} percentage points${decisions > 0 ? ` · poprawne decyzje: ${hits}/${decisions}` : ""} · punkty: ${points}`,
  quizGuessLegend: "Twój typ",
  customToggle: "✍️ Ustaw rozdanie",
  customTitle: "Ustaw rozdanie — odtwórz rozegraną rękę",
  customHint: "Dotknij pola, a potem wybierz kartę poniżej. Puste pola są uzupełniane losowo, a przeciwnicy nadal dostają ręce z zakresów dla swoich pozycji.",
  customPos: "Twoja pozycja",
  customRandom: "Losowa",
  customHero: "Twoja ręka",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Rozdaj tę rękę →",
  customClear: "Wyczyść wszystko",
  customClose: "Zamknij",
  customOff: "Wróć do losowych rozdań",
  customActive: "Ustawione rozdanie — kolejne rozdania zachowują te karty",
  customEdit: "Edytuj",
  shareBtn: "Skopiuj link do tego rozdania",
  shareCopied: "Skopiowano. Każdy, kto otworzy link, rozegra tę rękę od preflopa z tymi samymi kartami i tym samym equity.",
  shareManual: "Automatyczne kopiowanie jest zablokowane. Skopiuj adres poniżej.",
  sharedActive: "Udostępnione rozdanie — te same karty i equity co u nadawcy (poza statystykami quizu)",
  sharedInvalid: "Nie udało się odczytać linku, więc widzisz nowe losowe rozdanie (link może być niepełny lub zmieniony)",
  rangeToggle: "Pokaż zakres przeciwnika",
  rangeTitle: "Zakres przeciwnika — ręce zgodne z dotychczasowymi akcjami",
  rangeCombos: (pre, cur, pct) => `Preflop ${pre} combo → teraz ${cur} combo (pozostało ${pct}%)`,
  rangeLegend: ["Nadal w zakresie (ciemniej = większy pozostały udział)", "Wykluczone przez akcje", "Nigdy w zakresie", "Rzeczywista ręka", "Zablokowane przez twoją rękę lub board"],
  rangeNote: "Punktem wyjścia jest zakres preflop dla danej pozycji. Na każdym streecie usuwa się ręce, które według reguł przeciwnika wykonałyby inną akcję. Equity powyżej korzysta z tego samego zakresu. Combo zawierające kartę z twojej ręki lub boardu są wykluczone.",
  quizKinds: ["Oszacuj equity i zdecyduj", "Tylko decyzje (sprawdzić czy spasować?)"],
  decideTitle: "Sprawdzić czy spasować?",
  decideHint: "Wybierz sprawdzenie lub pas bez oglądania ich kart. Nawet jeśli spasujesz, rozdanie trwa do końca. Ten tryb nie jest wliczany do statystyk quizu.",
  decideSummary: (hits, decisions) => `To rozdanie: poprawne decyzje według pot odds ${hits}/${decisions}`,
  actualCol: "Znane karty",
  actualSummary: (hits, decisions) => `Poprawne decyzje przy znajomości ich kart: ${hits}/${decisions}. To tylko punkt odniesienia. Przy stole liczą się pot odds bez znajomości kart przeciwników.`,

  ruleTitle: "Założenia tego narzędzia",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Przeciwnicy przestrzegają wyłącznie poniższych reguł.</b> Prawdziwi gracze tak nie grają — pozycja,
        przeciwnik, głębokość stacków i wizerunek przy stole zmieniają wszystko. Traktuj to jak pominięcie tarcia w zadaniu z fizyki.
      </p>
      <p className="mb-1">
        Obecny styl przeciwników: <b className="text-foreground">{PL_UI.styleNames[style]}</b> (cały stół gra tym samym stylem — zmień go w selektorze powyżej)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Dwie pary lub lepiej → <b className="text-foreground">{style === "aggressive" ? "zakład lub przebicie za 150% puli (overbet)" : "zakład lub przebicie za pulę"}</b></li>
        {style === "standard" && <li>Para albo flush draw lub straight draw → <b className="text-foreground">zakład za pół puli</b></li>}
        {style === "tight" && <>
          <li>Para na poziomie top pair lub wyżej, utworzona z kartą zakrytą (w tym overpair), albo flush draw lub straight draw → <b className="text-foreground">zakład za pół puli</b></li>
          <li>Dowolna słabsza para (również para wyłącznie na boardzie) → <b className="text-foreground">pas</b></li>
        </>}
        {style === "loose" && <li>Para, flush draw, straight draw lub karta zakryta wyższa od każdej karty na boardzie (overcard) → <b className="text-foreground">zakład za pół puli</b></li>}
        {style === "aggressive" && <>
          <li>Flush draw lub straight draw → <b className="text-foreground">zakład lub przebicie (semibluff)</b></li>
          <li>Para → <b className="text-foreground">zakład za pół puli</b></li>
          <li>Bez pary i drawa, ale z overcard → <b className="text-foreground">zakład lub przebicie (blef)</b></li>
        </>}
        <li>Wszystko inne → <b className="text-foreground">pas</b> (bez pokazywania kart, jak w grze na żywo)</li>
      </ul>
      <p className="mb-2">
        Reguły sprawdzane są od góry; o akcji decyduje pierwszy pasujący wiersz. Draw oznacza cztery karty do koloru lub strita na flopie albo turnie,
        z użyciem co najmniej jednej karty zakrytej (na riverze nie ma drawów).{" "}
        {style === "aggressive" && "Każde przebicie w stylu Agresywny, w tym semibluffy i blefy, wynosi 150% puli. "}
        Gdy ktoś przebija, wszyscy pozostali gracze sprawdzają to przebicie. Zakład większy niż pozostały stack jest ograniczany do all-in.
        Po all-in nikt już nie pasuje — rozdawany jest pozostały board i następuje showdown. Nie ma check-raise: każdy przeciwnik wykonuje jedną akcję
        na każdym streecie, bez etapu, w którym czeka, a potem ponownie odpowiada. Na streetach po flopie z zakładem etykiety pozycji podsumowują dany street:
        pozycja ustalająca kwotę pokazuje „Zakład”, a pozostali przeciwnicy w grze „Sprawdzenie”, niezależnie od kolejności
        (preflop etykiety pokazują sposób wejścia do puli, a pozycja all-in z wcześniejszego streeta pokazuje All-in).
        Ty nigdy tu nie stawiasz — tylko sprawdzasz aż do rivera. Zakresy preflop poniżej są takie same dla wszystkich stylów.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Twoje equity jest liczone tak, jakby karty przeciwników były nieznane.</b> Od flopa zakres każdego przeciwnika
        obejmuje te ręce z jego zakresu preflop dla pozycji, które według reguł wybranego stylu wykonałyby widoczne akcje. Przeciwko stylowi Standard
        przebicie pozostawia tylko dwie pary lub lepiej; przeciwko stylowi Agresywny pozostają też drawy i blefy z overcard.
        Jeśli własną akcją danej pozycji było przebicie, obliczenia nadal traktują ją jako przebicie, nawet gdy etykieta pokazuje „Sprawdzenie” — wtedy jest czerwona.
        Gracze pasujący na ekranie są też usuwani z obliczeń.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Ręce preflop przeciwników pochodzą z zakresów dla pozycji.</b> Spośród graczy w puli pierwszy działający preflop
        jest traktowany jako otwierający, a pozostali jako broniący otwarcia przez sprawdzenie lub 3-bet (zakres otwarcia · defending range).
        Są to uzgodnione na podstawie kilku publicznych źródeł zakresy cash 6-max 100bb, z granicznymi rękami granymi z częstotliwością 25/50/75%.
        Gdy brakuje tabeli (HJ przeciwko otwarciu UTG; SB przeciwko otwarciu UTG, HJ lub CO) oraz od trzeciego gracza stosowana jest najbliższa tabela defending range.
        Nie ma tabel dla 9 graczy: UTG, UTG+1, UTG+2 i LJ używają tabeli UTG 6-max, a pozostałe pozycje tabeli 6-max o tej samej nazwie
        (wczesna pozycja broniąca otwarcia innej wczesnej pozycji lub HJ broniący takiego otwarcia używa tabeli CO przeciwko UTG).
        Zakresy pierwszych trzech pozycji przy stole 9-osobowym są więc szersze niż w rzeczywistości. Tylko twoja ręka jest losowa, chyba że ustawisz ją samodzielnie:
        możesz grać dowolne dwie karty aż do rivera. 3-bet nie zmienia tu wielkości puli — to uproszczenie.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Ocena opiera się wyłącznie na pot odds.</b> Nie uwzględnia implied odds; tendencje i blefy przeciwników trafiają
        do zakresów tylko w granicach reguł wybranego stylu. Szczególnie drawy mogą uzasadniać sprawdzenie, nawet gdy same pot odds są nieco za niskie.
      </p>
      <p>
        Każdy wpłaca ante {ANTE} i zaczyna ze stackiem {n(STACK)}. Nigdy nie pasujesz — o to chodzi w ćwiczeniu: oglądasz river i analizujesz rozdanie.
        Equity jest szacunkiem o stałej liczbie prób: <b className="text-foreground">{n(SAMPLES.preflop)} prób</b> preflop i{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} prób</b> od flopa (błąd standardowy około 0,25–0,35 percentage points).
        Każde rozdanie ma stałe ziarno losowania, więc pokazuje te same wartości na każdym urządzeniu. Remis dzieli pulę między graczy, którzy ją współdzielą (po połowie przy remisie dwóch graczy).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Po pokazaniu ich kart</b> każda pozycja otrzymuje equity przy wszystkich znanych rękach. Od flopa pozostałe karty
        są wyliczane dokładnie; tylko preflop używa {n(SAMPLES.known)} prób. Te wartości nigdy nie trafiają do wyświetlanego equity ani oceny sprawdzenia lub pasa:
        przy prawdziwym stole nie masz tej informacji.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Po włączeniu quizu</b> equity i ocena są ukryte, dopóki nie odpowiesz. W trybie „Oszacuj equity i zdecyduj”
        szacujesz equity na każdym streecie, a gdy ktoś stawia zakład, wybierasz też sprawdzenie lub pas. W trybie „Tylko decyzje (sprawdzić czy spasować?)”
        wybierasz tylko sprawdzenie lub pas na streecie z zakładem, bez szacowania equity; ten tryb nie trafia do statystyk quizu.
        Odpowiedzią jest „Twoje equity” powyżej, liczone bez znajomości kart przeciwników. Każde oszacowanie daje{" "}
        <b className="text-foreground">100 − 4 × błąd (w percentage points)</b> punktów, zaokrąglonych do liczby całkowitej i nigdy poniżej zera
        (zero od błędu 25 percentage points). Decyzja sprawdzenie/pas jest poprawna, jeśli zgadza się z oceną pot odds. Sumy są zapisywane w tej przeglądarce;
        po zalogowaniu także na twoim koncie i są dostępne na innych urządzeniach (karty i board nie są zapisywane).
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ Ustaw rozdanie</b> pozwala wybrać pozycję, karty zakryte i board, aby odtworzyć rozegraną rękę.
        Puste pola są uzupełniane losowo. Nie możesz wybrać kart przeciwników — przy prawdziwym stole też ich nie znasz.
        Nadal pochodzą one z zakresów dla pozycji, a equity zachowuje założenie nieznanych kart. Nawet jeśli ustawisz cały board z góry,
        equity na każdym streecie używa tylko kart rozdanych do tego momentu. Ustawione rozdania nie trafiają do historii quizu, bo powtarzanie tej samej ręki pozwala zapamiętać odpowiedzi.
      </p>
    </>
  ),
  footer: <><a href="/pl/calculator" className="text-primary underline">Kalkulator pokerowy →</a></>,
};

export default function WinRateQuizClientPl() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Quiz poker 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Trenuj bez znajomości ich kart i sprawdź, kiedy należało spasować</p>
      </div>
      <WinRateSimulator ui={PL_UI} />
    </div>
  );
}
