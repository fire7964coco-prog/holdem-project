"use client";

import Link from "next/link";
import { SOLVER_FAQ_PL } from "./faq";

/**
 * ★CTA는 `?lang=pl`으로 보낸다(솔버 pl 라이브 S-106 · 10-17). UTM은 붙이지 않는다(기존 관례).
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=pl";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/pl/solver` 랜딩 — ★2026-10-17 신설 (17번째 · 마스터 = `app/en/solver/solver-client.tsx` · 구조 = `app/it/solver`)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 키워드 = `docs/keyword-bank/pl-tools.md` §1·§6 (DFS 2616 · pl): gto poker 140 · poker solver 50 ·
 *   solver poker 20 · gto solver 10 · solver gto 10. «poker solver» SERP에 폴란드어 웹 원문 0.
 * 🔴 용어 = `docs/translation-terms-pl.md` — Solver·GTO 영어 유지(굴절 solvera·solverze) · Zakres · Pula · Board · Efektywny stack ·
 *   버튼 Czekaj/Postaw/Sprawdź/Przebij/Spasuj ↔ 명사 Czek/Zakład/Sprawdzenie/Przebicie/Pas · ty체 · 숫자 1 755(NBSP) · 2,5 · 0,35% ·
 *   street 남성 굴절(na każdym streecie). 솔버 화면 라벨 인용은 „…” 안에 솔버 글자(Ustawienia drzewa · Sizingi · Przykłady 등 — S-105 · «drzewo decyzyjne»은 산문 낱말이지 앱 라벨이 아니다).
 * 🔴 솔버 화면 라벨 = 솔버 pl 소스 축어(`docs/solver-app-verbatim-pl-2026-10-17.md`).
 * 🔴 카니발: 프리플랍 오픈 레인지 = `/pl/hand-chart` · 확률·equity·ICM = `/pl/calculator` · 이 페이지 = 포스트플랍 GTO 계산만.
 * 🔴 pl에는 GTO 예제 글·equity·c-bet·strategy 글이 없다 → SPOT_GROUPS slug 비움 ·
 *   EN equity 링크 = `/pl/glossary` · c-bet 링크 = `/pl/blog/holdem-betting-actions` · strategy 링크 = `/pl/blog/texas-holdem-rules-for-beginners`
 *   (내부링크 개수 = EN과 같은 11 · translation-link-structure-equals-en · it 선례).
 * 🔴 수치·판정 근거 = EN 주석과 같다(스펙 §4-B · §13 산수 검산은 EN 파일 머리 주석) — 값은 바꾸지 않고 구분자만 폴란드식.
 * 🔴 사용자 성별이 드러나는 과거형·조건법(-łeś/-łaś · -byś) 금지 → 현재형·비인칭.
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Cena", "Za darmo — wszystkie funkcje, bez limitów użycia"],
  ["Instalacja", "Niepotrzebna — działa w przeglądarce (WebAssembly)"],
  ["Konto", "Niepotrzebne (po zalogowaniu synchronizujesz historię Przykładów i Zadania dnia · policzone przez ciebie spoty i historia treningu na nich zostają na tym urządzeniu)"],
  ["Zakres działania", "Postflop, heads-up (flop, turn, river)"],
  ["Gdzie liczy", "Na twoim procesorze, nie na serwerze"],
  ["Platformy", "Każda nowoczesna przeglądarka — Windows, macOS, Linux, smartfon"],
  ["Silnik", "Otwarty WASM Postflop (AGPL-3.0) · zmodyfikowany kod opublikowany"],
];

/** 「무엇을 원하나 → 어느 도구」 — 내부 역할 분리(라벨 = 각 pl 도구 HubPage title · side-rail 축어). */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Policzyć spot postflop i zobaczyć częstotliwości zakładów", "Solver GTO na tej stronie", null],
  ["Sprawdzić, jakie ręce otwierać z każdej pozycji", "Ręce startowe poker", "/pl/hand-chart"],
  ["Policzyć outy, pot odds, SPR albo ICM", "Kalkulator pokerowy", "/pl/calculator"],
  ["Wyćwiczyć szacowanie equity", "Quiz poker", "/pl/win-rate-quiz"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(솔버 pl 축어). */
const STEPS = [
  { n: "①", title: "Zakres OOP", desc: "Zaznacz na siatce 13×13 zakres preflop gracza bez pozycji albo go wpisz: 22+, A2s+, KTo+. Na przekątnej siatki są pary z ręki, w prawym górnym rogu ręce suited, w lewym dolnym offsuit." },
  { n: "②", title: "Zakres IP", desc: "Zrób to samo dla gracza na pozycji. Najszybciej jest wczytać przykład i poprawić jego zakresy, zamiast budować oba od zera." },
  { n: "③", title: "Board", desc: "Kliknij trzy karty flopa albo „Losowy flop”. Możesz też ustawić turn i river, jeśli chcesz zbadać konkretny runout." },
  { n: "④", title: "Sizingi", desc: "Ustaw pulę początkową, efektywny stack oraz sizingi zakładów i przebić na każdym streecie. Przy pierwszych obliczeniach zostaw ustawienia domyślne i sprawdź tylko pulę i stack." },
  { n: "⑤", title: "Uruchom solver", desc: "Kliknij „Zbuduj drzewo”, a gdy drzewo będzie gotowe — „Uruchom solver”. Na twoim komputerze trwa to od kilku sekund do kilku minut; gdy pojawi się „Obliczenia zakończone!”, otwórz zakładkę „Wyniki” u góry." },
];

/** 앱 도움말이 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 — 입력 문법은 번역하지 않는다). */
const STARTER_RANGES: [string, string][] = [
  ["OOP — BB sprawdzający", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTN otwierający", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/** 결과 화면 읽는 법 — 앱 도움말의 구역 구분을 그대로 옮겼다. */
const READ_SCREEN: string[][] = [
  ["Górny pasek", "Wybór linii akcji (flop → zakład → sprawdzenie → turn)", "Kliknij węzeł, żeby przejść do strategii w tym miejscu"],
  ["Macierz 13×13 (po lewej)", "Jedno pole na rękę; kolorowe paski w polu pokazują częstotliwości akcji", "Czerwony = zakład albo przebicie (ciemniejszy = większy), zielony = czek albo sprawdzenie, przygaszone pole nie należy do zakresu"],
  ["Kafelki (u góry po prawej)", "Częstotliwości akcji i liczba combo dla całego zakresu", "Tu odczytasz np., że „zakres czeka w 98%”"],
  ["Układy i drawy (po prawej, w środku)", "Jak zakres łączy się z boardem — top para, drawy, brak układu", "Szybko widać, któremu graczowi sprzyja ten board"],
  ["Tabela (na dole po prawej)", "Dla każdej ręki: waga, equity, EV i EQR oraz % akcji", "Kliknij nagłówek kolumny, żeby posortować; podsumowanie eksportujesz do CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Obliczenia flopa, turna i rivera", "yes", "Pełne drzewo postflop"],
  ["Obliczenia preflop", "no", "Zakresy otwarcia są w tabeli rąk startowych"],
  ["Własne sizingi zakładów i przebić", "yes", "% puli, wielokrotności, all-in, geometryczne"],
  ["Osobny sizing dla donk betu (lead)", "yes", "Osobno zaprojektujesz linię, w której OOP stawia jako pierwszy"],
  ["Rake i rake cap", "yes", "Odtworzysz warunki swojego prawdziwego stołu"],
  ["Edycja drzewa decyzyjnego węzeł po węźle", "yes", "Dodawaj albo usuwaj akcje w konkretnym węźle"],
  ["Node locking z ponownym liczeniem", "yes", "Zablokuj częstotliwości akcji w węźle i przelicz"],
  ["Tryb precyzji i pamięć", "yes", "32-bit float albo 16-bit int · limit przeglądarki około 4 GB"],
  ["Docelowa exploitability", "yes", "Niższa = dokładniej i wolniej"],
  ["Zapis zakresów i ustawień", "yes", "Zapis, wczytywanie, import i eksport"],
  ["Eksport podsumowania do CSV", "yes", "Prosto do arkusza kalkulacyjnego"],
  ["Udostępnianie spotu linkiem", "yes", "Wyślij dokładnie ten spot znajomym, z którymi się uczysz"],
  ["Gotowe, policzone przykłady", "yes", "Bez czekania — rozwiązania pojawiają się od razu"],
  ["Przegląd flopów — wstępnie policzone strategie flopa", "yes", "Wybierz spot, pozycje i flop, a siatka pojawi się bez czekania · tylko flop · stałe sizingi (flop 33% / 75%, przebicie 60%)"],
  ["Statystyki flopów — średnia strategia według grup boardów", "yes", "1 755 flopów ważonych częstością · pierwsza decyzja i decyzja po czeku · grupy: najwyższa karta, kolory, parowanie kart, połączenie kart · stałe sizingi"],
  ["Trener GTO z oceną według EV loss", "yes", "Z filtrami słabych punktów i kolejką „Powtórz błędy”"],
  ["Trening RNG w Trenerze GTO", "yes", "Liczba od 1 do 100 przy każdej ręce · akcja z przedziału tej liczby to „Najlepsze zagranie” · wysokie/niskie · domyślnie wyłączony · nie działa w Zadaniu dnia ani w zakładce „Moje spoty”"],
  ["Trening na policzonych przez ciebie spotach", "yes", "Jedno kliknięcie „Ćwicz ten spot” na ekranie wyników zapisuje je jako pytania trenera · tylko na tym urządzeniu"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 수치는 넣지 않는다(§12-B).
 * 🔴 «PioSOLVER는 유료»라고 쓰지 마라 — 공식 문서에 무료 버전 안내가 있다. 확인된 것은 설치형·윈도우뿐이다.
 */
const COMPARE: string[][] = [
  ["Jak liczy", "Liczy w przeglądarce, kiedy chcesz", "Głównie przeglądasz rozwiązania policzone wcześniej", "Liczy lokalnie po instalacji"],
  ["Instalacja", "Niepotrzebna", "Niepotrzebna", "Instalator, Windows"],
  ["Zakres działania", "Postflop, heads-up", "Często obejmuje preflop", "Głównie postflop (niektóre wersje dodają preflop)"],
  ["Edycja zakresów i drzew", "Dowolna", "Głównie w obrębie opublikowanych rozwiązań; niektóre serwisy dodają własne obliczenia", "Dowolna"],
  ["Gdzie liczy", "Na twoim komputerze", "Na komputerach dostawcy", "Na twoim komputerze"],
];

/**
 * 교육 예제 — 이름·그룹·조건 줄 = 앱 pl 라벨 축어(presets.ts titlePl·categoryPl · 축어 문서 §2). 해설(note)은 EN 랜딩의 정정본(스펙 §4-B 수치)을 옮긴 것이다 — 앱 문구가 아니다.
 * 🔴 개수를 문장에 박지 않는다 — 아래 배열에서 세어 쓴다.
 * 🪶 pl 해설 글이 발행되면 그 행에 `slug`를 채운다(없는 링크를 미리 걸지 않는다).
 * 🔴 note 정정 경위(M-038 RP-01·03·04 · M-042 RP-17 · M-045 RP-19 · M-046 E-4 · M-067)는 EN 파일 주석이 정본이다.
 *    폐기된 옛 명제(«콜러에게 유리한 보드» · «SPR이 낮아서 작게» · «통째로 빗나간다» · «체크레이즈를 많이 한다»)로 되돌리지 마라.
 */
const SPOT_GROUPS: { label: string; cond: string; items: { board: string; name: string; note: string; slug?: string }[] }[] = [
  {
    label: "Pula po jednym podbiciu (SRP) — BTN vs BB (podstawy)",
    cond: "OOP: BB (sprawdzający) · IP: BTN (otwierający) · Pula 5,5bb · Stack 97,5bb",
    items: [
      { board: "A♥7♦2♣", name: "Suchy board z asem jako najwyższą kartą", note: "Podręcznikowy flop przewagi zakresu: as trafia prosto w zakres otwierającego" },
      { board: "K♠8♦3♣", name: "Suchy board z królem jako najwyższą kartą", note: "Nadal sprzyja otwierającemu, ale czeków jest więcej. Porównaj z boardem z asem" },
      { board: "Q♠J♦T♠", name: "Połączony board broadway, two-tone", note: "Wygląda, jakby trafiał oba zakresy, a jednak BB realizuje tu najmniej equity spośród wszystkich przykładów — EQR 77,9% wobec 119,4% u BTN — i czeka w 99,9%" },
      { board: "9♥8♥7♣", name: "Połączony board ze średnimi kartami, two-tone", note: "Board z puli SRP, na którym BB najczęściej stawia jako pierwszy: w 23,7% przypadków (na monotone Q♠9♠2♠ — 11,2%), a mimo to przewaga zakresu zostaje przy BTN — equity 48,5% wobec 51,5%" },
      { board: "Q♠9♠2♠", name: "Board monotone (jeden kolor)", note: "Duże zakłady ustępują małym zakładom i czekom — nawet gotowe kolory często czekają" },
      { board: "6♣6♦3♥", name: "Sparowany board", note: "Żaden z zakresów dobrze się z nim nie łączy, więc udział blefów rośnie" },
      { board: "6♠5♥2♦", name: "Niski board rainbow", note: "Wojna overcardów — spot, w którym warto zaplanować check-raise: na ekranie pierwsza akcja BB to czek w 96,8% i zakład w 3,2%" },
    ],
  },
  {
    label: "Pula 3-bet — BB 3-betuje, BTN sprawdza (niski SPR)",
    cond: "OOP: BB (3-betujący) · IP: BTN (sprawdzający) · Pula 22,5bb · Stack 89bb · SPR ≈ 4,0",
    items: [
      { board: "A♦K♠2♥", name: "Board z asem — przewaga gracza 3-betującego", note: "Najlepszy flop, jaki może zobaczyć zakres 3-betu — pełen AK, AA i KK. To kształt tego zakresu, a nie niski SPR, pozwala małym zakładem naciskać całym zakresem" },
      { board: "Q♥T♥7♠", name: "Dynamiczny board two-tone", note: "Dwa żywe drawy — 98,4% zakresu stawia ten sam zakład za dwie trzecie puli" },
      { board: "8♦5♣2♠", name: "Niski, suchy board", note: "Tu zakres 3-betu nie trafia żadnej top pary — poza overpairami i parą piątek z A5s reszta to niemal same gutshoty i backdoory — a mimo to overpairy dalej wywierają presję" },
    ],
  },
  {
    label: "Blind przeciw blind — SB vs BB (szerokie zakresy)",
    cond: "OOP: SB (otwierający) · IP: BB (sprawdzający) · Pula 6bb · Stack 97bb",
    items: [
      { board: "K♥T♦6♠", name: "Król i dziesiątka na boardzie", note: "Szerokie zakresy, więc w obu jest wiele słabych rąk — porównaj z wersją BTN" },
      { board: "7♦6♦5♣", name: "Połączony niski board, two-tone", note: "Dwa szerokie zakresy na mocno połączonym boardzie: wszędzie dwie pary i drawy" },
      { board: "A♠A♥6♦", name: "Board z parą asów", note: "Tripsy nie są tu rzadkie — SB ma ich po prostu więcej (88 combo wobec 66 u BB), i dlatego SB stawia w 80,1%" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

/* ── 공통 조각 ───────────────────────────────────────────────────────── */

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={
        variant === "solid"
          ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
          : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`
      }
    >
      {label}
    </a>
  );
}

/** 표는 전부 가로 스크롤 컨테이너에 넣는다 — 모바일에서 페이지 자체가 밀리지 않게. */
function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "py-2 pr-4 font-medium" : "py-2 pr-4 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolverClientPl({ reviews }: { reviews?: React.ReactNode } = {}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        <h1 className="text-center text-2xl font-bold">
          Darmowy solver GTO do pokera — licz spoty w przeglądarce
        </h1>
        <p className="mt-3 text-muted-foreground">
          <strong className="text-foreground">Solver GTO</strong> bierze zakresy obu graczy, board i
          stacki, a potem liczy, jak często każda ze 169 rąk startowych powinna stawiać, czekać albo
          pasować. Solver HoldemMaster robi to{" "}
          <strong className="text-foreground">w twojej przeglądarce — nic do pobrania, bez konta,
          bez płatnej wersji</strong> — a obok siatki strategii pokazuje equity, EV i realizację
          equity każdej ręki. Obejmuje grę postflop heads-up.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Otwórz solver →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Polecamy Chrome na komputerze — na iOS i w Safari obliczenia idą na jednym wątku, więc
            własne spoty liczą się wolniej
          </p>
        </div>
        <Table head={["", "Szczegóły"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── 솔버란 ───────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Co to jest solver GTO?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Solver GTO liczy od zera strategię{" "}
          <strong className="text-foreground">game theory optimal</strong>. Podajesz mu zakresy, board,
          stacki i drzewo sizingów, a solver iteracyjnie dochodzi do równowagi Nasha i zwraca
          częstotliwości zakładu, czeku i pasa dla wszystkich 169 rąk. Na tym polega różnica między
          solverem a tabelą: tabela przechowuje odpowiedź, którą ktoś znalazł wcześniej, a solver
          liczy odpowiedź dla dokładnie tego spotu, w którym jesteś.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          To nie tabela ani program z wbudowanymi cudzymi opiniami. Daj mu inny flop, a da ci inną
          odpowiedź, bo liczy od nowa, zamiast pamiętać.
        </p>
        {/* «różne nazwy» 문단 — 뱅크 §6: gto poker 140 · poker solver 50 · solver poker 20 · gto solver 10. */}
        <p className="mt-3 text-sm text-muted-foreground">
          To samo narzędzie ma kilka nazw. <strong className="text-foreground">Poker solver</strong>,
          solver poker, solver GTO i <strong className="text-foreground">solver postflop</strong>{" "}
          oznaczają ten sam rodzaj programu, a kto wpisuje w wyszukiwarkę „GTO poker”, często szuka
          właśnie tych liczb; wynik bywa też nazywany chartem GTO. Zmienia się tylko wyszukiwane
          słowo — solver na tej stronie liczy to samo.
        </p>
        <Table
          head={["Co chcesz zrobić", "Narzędzie"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
      </section>

      {/* ── GTO 뜻 (SERP «gto poker» 정의 의도) ───────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Co oznacza GTO w pokerze?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO to skrót od <strong className="text-foreground">Game Theory Optimal</strong>: strategia
          optymalna według teorii gier — optymalna jest strategia, a nie teoria. To strategia, której
          na dłuższą metę nie da się exploitować, niezależnie od tego, jak dostosuje się drugi
          gracz. To punkt odniesienia, a nie maksimum: nie próbuje ukarać słabego przeciwnika, tylko
          sprawia, że dobry przeciwnik nie może ukarać ciebie.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Najbardziej zaskakuje to, że{" "}
          <strong className="text-foreground">GTO miesza akcje z tą samą ręką</strong>: stawia w 70%
          przypadków i czeka w 30% — tak, żeby twojej linii nie dało się odczytać. Wynik to więc
          tabela częstotliwości, a nie jedno polecenie. Solver mówi ci,{" "}
          <em>jak często</em> coś robić, a nie <em>co</em> zrobić, i dlatego sesja nauki kończy się
          procentami, a nie regułami.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Jak korzystać z solvera pokerowego? Pięć kroków</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Jeśli to twój pierwszy solver, <strong className="text-foreground">otwórz przykład, zanim
          cokolwiek ustawisz.</strong> Przykłady są już policzone, więc najpierw uczysz się czytać
          wynik, a dopiero potem ustawiać parametry. Gdy budujesz własny spot, zakładki idą po kolei
          wzdłuż paska bocznego po lewej.
        </p>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          We własnych spotach wszystkie wartości podajesz w żetonach, jako dowolne liczby całkowite. Żeby myśleć w big blindach, przyjmij{" "}
          <strong className="text-foreground">10 żetonów = 1bb</strong> (pula 55 to 5,5bb). Przykłady
          i trener same przeliczają na tę skalę.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Budowanie obu zakresów od zera to długa droga. Zakresy otwarcia według pozycji są w tabeli{" "}
          <Link href="/pl/hand-chart" className="font-semibold text-primary hover:underline">
            rąk startowych
          </Link>
          . Dwa zakresy poniżej to coś innego:{" "}
          <strong className="text-foreground">te, których używają przykłady z grupy „Pula po jednym
          podbiciu (SRP)”</strong> (BTN vs BB), gotowe do wklejenia do ① i ②.
        </p>
        <Table head={["Wklej do", "Zakres"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Jak czytać ekran wyników?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {/* EN M-046 E-3: 상단1 + 매트릭스1 + 우측3 = 다섯 · READ_SCREEN 5행. «cztery»로 되돌리지 마라. */}
          Ekran wyników ma pięć stref: na górze{" "}
          <strong className="text-foreground">wybór linii</strong>, po lewej{" "}
          <strong className="text-foreground">macierz strategii 13×13</strong>, a po prawej{" "}
          <strong className="text-foreground">kafelki częstotliwości, układy i drawy oraz tabela
          szczegółów</strong>. Lewa strona mówi, co robi pojedyncza ręka, prawa — co robi cały zakres.
        </p>
        <Table head={["Gdzie", "Co zawiera", "Jak to czytać"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Na przykład: otwórz pierwszy spot z Przykładów (A♥7♦2♣ rainbow, BB działa jako pierwszy), a kafelki
          pokażą <strong className="text-foreground">Czek 98,2%</strong> (455,5 combo), zakład 1,8bb
          w 1,0% i zakład 4,1bb w 0,9%. Wiersz podsumowania w tabeli pokazuje cały zakres: 464,0
          combo, 45,1% equity, 2,09bb EV i{" "}
          <strong className="text-foreground">84,0% EQR</strong>. Realizacja equity poniżej 100% to
          liczba, na którą trzeba uważać: ten zakres ma 45,1% equity, ale ponieważ BB gra bez pozycji i bez
          inicjatywy, zakres realizuje tylko 84% swojego equity.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Jeśli te pojęcia są dla ciebie nowe,{" "}
          <Link href="/pl/glossary" className="font-semibold text-primary hover:underline">
            słownik pokerowy
          </Link>{" "}
          (equity, outy) i przewodnik po{" "}
          <Link href="/pl/blog/holdem-betting-actions" className="font-semibold text-primary hover:underline">
            akcjach w Texas Hold’em
          </Link>{" "}
          wyjaśnią, co mierzy solver, zanim spróbujesz czytać jego liczby.
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Czy to naprawdę darmowy solver pokerowy?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Tak, i bez zwykłych gwiazdek: bez podawania metody płatności, bez zablokowanych funkcji, bez dziennego
          limitu obliczeń i bez konta. Ustawienia, których oczekujesz od zainstalowanego solvera
          desktopowego — rake i rake cap, tryb precyzji, edycja drzewa decyzyjnego węzeł po węźle —
          są tu wszystkie. Główne ograniczenie: ten solver jest{" "}
          <strong className="text-foreground">postflopowy i heads-up</strong>.
        </p>
        <Table
          head={["Funkcja", "Dostępne", "Uwagi"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span className="font-bold text-emerald-600">Tak</span>
            ) : (
              <span className="font-bold text-muted-foreground">Nie</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Wypróbuj za darmo →" variant="outline" />
        </div>
      </section>

      {/* ── 포스트플랍 범위 ──────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Dlaczego tylko postflop — i co obejmuje?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          To <strong className="text-foreground">solver postflop</strong>: zaczyna, gdy flop leży na
          stole, i liczy resztę rozdania dla dwóch graczy. Preflop jest pominięty celowo, bo zakresy
          preflop to problem innego rodzaju — na tyle stabilny, że da się go odczytać z tabeli,
          podczas gdy postflop zmienia się z każdym boardem.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          W tych granicach niczego nie brakuje. Ustawiasz oba{" "}
          <strong className="text-foreground">zakresy postflop</strong>, dowolny flop, turn i river,
          pulę początkową i efektywny stack oraz pełne drzewo sizingów na każdym streecie. Dzięki temu
          strategia postflop, którą dostajesz, dotyczy twojego stołu, a nie stołu ogólnego — razem z
          rake’iem, który większość materiałów do nauki po cichu pomija.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Jeśli potrzebujesz części preflop, znajdziesz ją w tabeli{" "}
          <Link href="/pl/hand-chart" className="font-semibold text-primary hover:underline">
            rąk startowych
          </Link>
          . Tabela podaje zakresy otwarcia według pozycji, a solver analizuje grę po flopie —
          odpowiedź na przebicie przed flopem (sprawdzenie albo 3-bet) wymaga osobnych zakresów,
          których tabela otwarć nie obejmuje.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          Czy jest darmowy trener GTO? Jak ocenia?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Tak — „Trener GTO” jest w tym samym darmowym programie, bez osobnej rejestracji. Zamienia
          policzone spoty w ćwiczenie: dostajesz rękę w prawdziwym punkcie decyzyjnym, wybierasz
          akcję, a trener cię ocenia.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Ocena nie brzmi „dobrze” albo „źle”, tylko opiera się na{" "}
          <strong className="text-foreground">EV loss w stosunku do puli</strong>. Skoro GTO miesza
          akcje, wybór opcji o niższej częstotliwości nie musi być błędem — liczy się, ile wartości
          oczekiwanej zostawił na stole twój wybór. Wybierasz akcję, a trener pokazuje częstotliwość
          i EV każdej akcji razem z kosztem twojej.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/* 🔴 팟 대비 비율이다 — 절대 bb가 아니다(앱 2026-08-15 변경 · EN 주석). */}
          <li className="text-muted-foreground">
            Progi mierzy się <strong className="text-foreground">względem puli</strong> —{" "}
            <span className="font-semibold text-emerald-500">do 0,35%</span> to „Najlepsze zagranie” ·{" "}
            <span className="font-semibold text-blue-500">do 1%</span> to „Dopuszczalne” ·{" "}
            <span className="font-semibold text-orange-500">powyżej</span> to „Do analizy”
          </li>
          <li className="text-muted-foreground">
            Te same 0,08bb to 1,45% w puli 5,5bb (do analizy) i 0,36% w puli 22,5bb (dopuszczalne).
            W puli po jednym podbiciu 5,5bb progi wynoszą 0,02bb i 0,055bb; w puli 3-bet 22,5bb
            około 0,079bb i 0,225bb — więc 0,08bb leży tuż za granicą najlepszego zagrania. Minima
            0,02bb i 0,05bb chronią ocenę przed szumem solvera
          </li>
          <li className="text-muted-foreground">
            Pytania pochodzą z różnych punktów decyzyjnych w każdym spocie, więc kombinacji jest{" "}
            <strong className="text-foreground">ponad dziesięć tysięcy</strong> (docelowa
            exploitability 0,5%), a pule SRP, pule 3-bet i grę blind przeciw blind możesz ćwiczyć osobno
          </li>
          <li className="text-muted-foreground">
            Ręce są losowane <strong className="text-foreground">proporcjonalnie do rzeczywistych wag
            zakresu GTO</strong> — ręka wypada tak często, jak naprawdę trafia do zakresu w tym miejscu
          </li>
          <li className="text-muted-foreground">
            Serie, analiza słabych punktów i kolejka{" "}
            <strong className="text-foreground">„Powtórz błędy”</strong> ze spotami, w których tracisz
            EV, opierają się na twojej historii treningu. Po zalogowaniu historia Przykładów i Zadania
            dnia synchronizuje się między urządzeniami; seria dni w Zadaniu dnia i znacznik ukończenia
            zostają na każdym urządzeniu osobno. Policzone przez ciebie spoty i historia treningu na
            nich zostają na tym urządzeniu także po zalogowaniu
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="Otwórz Trenera GTO →" variant="outline" />
        </div>
      </section>

      {/* ── 교육 예제 (이름 = 앱 pl 라벨) ────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          Gotowe przykłady do otwarcia od razu: {SPOT_TOTAL}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Każdy spot poniżej jest już policzony, więc strategia pojawia się w chwili otwarcia — bez
          czekania i bez ustawiania. Zakresy przybliżają standardową grę online przy stackach 100bb;
          wczytaj spot, zmień zakres i przelicz, żeby zobaczyć, co się zmieniło. To najszybszy
          sposób, żeby wyczuć, jak tekstura boardu zmienia strategię.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((item) => (
                <li key={item.board} className="text-sm">
                  <span className="font-semibold">{item.board}</span>
                  <span className="mx-1.5 text-muted-foreground">·</span>
                  {item.slug ? (
                    <Link
                      href={`/pl/blog/${item.slug}`}
                      className="font-semibold text-primary hover:underline"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-medium">{item.name}</span>
                  )}{" "}
                  <span className="text-muted-foreground">— {item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 ───────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Czym różni się od GTO Wizard albo PioSOLVER?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Wszystkie nazywają się solverami, ale różnią się tym, gdzie i kiedy odbywają się obliczenia.
          Biblioteki rozwiązań takie jak GTO Wizard służą głównie do przeglądania spotów policzonych
          wcześniej: są szybkie i mogą obejmować preflop (GTO Wizard oferuje też własne obliczenia).
          Solvery desktopowe takie jak PioSOLVER, instaluje się na komputerze z Windows i liczą one
          lokalnie. Solver HoldemMaster{" "}
          <strong className="text-foreground">liczy, kiedy chcesz, w przeglądarce</strong>, więc
          zakresy i drzewa zmieniasz samodzielnie, bez instalowania czegokolwiek.
        </p>
        <Table
          head={["", "Solver HoldemMaster", "Biblioteka rozwiązań", "Zainstalowany solver desktopowy"]}
          rows={COMPARE}
        />
        {/* 근거 = wasm-postflop.pages.dev 자기 고지 축어 + GitHub «[Development suspended]»(EN 주석). */}
        <p className="mt-4 text-sm text-muted-foreground">
          Jeszcze jedno rozróżnienie, przydatne, jeśli szukasz{" "}
          <strong className="text-foreground">WASM Postflop</strong>: oryginalny projekt open source
          informuje na swojej stronie, że nie będzie już aktualizowany, a jego repozytorium jest
          oznaczone jako wstrzymane. Ten solver to utrzymywany fork tego silnika — ta sama licencja
          AGPL-3.0, kod również opublikowany, a do tego nowy interfejs, przykłady i trener.
        </p>
      </section>

      {/* ── 함께 쓰면 좋은 도구 ──────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Narzędzia, których warto używać razem z solverem</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/pl/hand-chart" className="font-semibold text-primary hover:underline">
              Ręce startowe poker
            </Link>{" "}
            {/* EN M-046 E-2: 차트에는 붙여넣기 문자열이 없고 값도 갈린다 — 두 출처를 갈라 적는다. */}
            — ten solver jest tylko postflopowy. Jakie ręce <strong>otwierać</strong> z każdej pozycji,
            znajdziesz w tabeli. Gotowe zakresy do wklejenia powyżej to coś innego — zakresy BTN vs BB
            z przykładów z grupy „Pula po jednym podbiciu (SRP)”
          </li>
          <li>
            <Link href="/pl/calculator" className="font-semibold text-primary hover:underline">
              Kalkulator pokerowy
            </Link>{" "}
            — outy, pot odds, SPR, M i ICM, gdy potrzebujesz liczby bez uruchamiania obliczeń
          </li>
          <li>
            <Link href="/pl/win-rate-quiz" className="font-semibold text-primary hover:underline">
              Quiz poker
            </Link>{" "}
            — wyniki solvera to w dużej mierze equity, więc najpierw wyostrz swoje szacunki equity, a
            ekran wyników będzie dużo łatwiejszy do czytania
          </li>
          <li>
            <Link href="/pl/blog/texas-holdem-rules-for-beginners" className="font-semibold text-primary hover:underline">
              Jak grać w Texas Hold’em od zera
            </Link>{" "}
            — pozycja, blindy, kolejność gry i pierwsza strategia: podstawy, które solver uznaje za oczywiste
          </li>
        </ul>
      </section>

      {/* ── 써 본 사람들(솔버 후기창 · FAQ 바로 위) ── */}
      {reviews}

      {/* ── FAQ — 배열은 `./faq.ts` 단일 출처(서버 FAQPage 스키마와 공유) · 본문에도 전부 렌더 ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Najczęściej zadawane pytania</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_PL.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">P: {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">O: {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 설치 안내 + 오픈소스 고지 (AGPL) ─────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Uruchom darmowy solver GTO →" />
        {/* 🔴 «오프라인으로 GTO 계산 가능»이라고 쓰지 마라 — 오프라인은 예제 열람·트레이너만(엔진 한 번 받은 뒤 계산). */}
        <p className="mt-3 text-xs text-muted-foreground">
          Dodaj go do ekranu głównego, a przykłady i trener zostaną zapisane na urządzeniu, więc
          możesz ćwiczyć <strong className="text-foreground">bez internetu</strong> — Chrome i Edge
          pokazują ikonę instalacji na pasku adresu; na iPhonie wybierz Udostępnij → „Do ekranu
          głównego”.
        </p>
      </section>
      <p className="mt-8 text-xs text-muted-foreground">
        Ten solver opiera się na WASM Postflop autorstwa Wataru Inariby (AGPL-3.0), przetłumaczonym i
        rozbudowanym przez HoldemMaster. Pełny zmodyfikowany kod źródłowy jest opublikowany na tej
        samej licencji.
      </p>
    </div>
  );
}
