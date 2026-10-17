/**
 * `/pl/solver` FAQ — 화면(solver-client.tsx)과 서버 `page.tsx`의 FAQPage 스키마가 **같은 배열**을 쓴다.
 * 마스터 = `app/en/solver/faq.ts`(21문항) — 2026-10-17 신설. 구성 = `app/it/solver/faq.ts`와 같다(26문항).
 *
 * 🔴 EN 21문항 + 언어 문항 1개(«Czy solver jest po polsku?») + tr·vi·ru·it 공통 3문항(①②③) + ru·it 선례 1문항(④) = 26문항.
 *   ① «Do czego służy solver pokerowy?»(도구 쪽 정의 · SERP reddit «Solvers. What are they and when/how are they used?» 질문형)
 *   ② RTA — «Czy mogę używać solvera podczas gry?»(공부용 vs 실시간 사용 구분만 · 룸 이름·추천·법률·리얼머니 어휘 없음 · 합법성 축 아님)
 *   ③ «Czy solver zgaduje karty przeciwnika?»(입력 = 양측 zakres)
 *   ④ «Czym różni się GTO od exploitu?»(SERP «gto poker» 정의 의도)
 * 🔴 솔버 화면 라벨 = 솔버 pl 소스 축어(`docs/solver-app-verbatim-pl-2026-10-17.md`) · UI 라벨 인용은 „…” 안에 화면 글자 그대로,
 *   격변화는 바깥 문장에서(S-105 ③) · 다른 언어판은 열거하지 않는다.
 * 🔴 수치는 EN과 값이 같다 — 구분자만 폴란드식(0,35% · 0,08bb · 5,5bb · 1 755 · 천 단위 = NBSP).
 * 🔴 ty체 · 사용자 성별이 드러나는 과거형(-łeś/-łaś) 금지 → 현재형·비인칭으로.
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_PL: FaqItem[] = [
  {
    q: "Co to jest solver GTO?",
    a: "Solver GTO to program, który od zera liczy strategię optymalną w sensie teorii gier. Podajesz mu zakresy obu graczy, board, stacki i sizingi, a solver iteracyjnie dochodzi do równowagi Nasha; potem pokazuje, jak często każda ze 169 rąk startowych powinna stawiać, czekać albo pasować. To nie tabela z czyjąś opinią: solver liczy odpowiedź dla twojego konkretnego spotu.",
  },
  {
    q: "Co oznacza GTO w pokerze?",
    a: "GTO to skrót od Game Theory Optimal, czyli strategia optymalna według teorii gier: optymalna jest strategia, a nie sama teoria. To strategia, której na dłuższą metę nie da się exploitować, niezależnie od tego, jak dostosuje się przeciwnik. Jej cechą jest mieszanie akcji: ta sama ręka może stawiać w 70% przypadków i czekać w 30%, więc twojej linii nie da się odczytać. Dlatego wynik solvera to tabela częstotliwości, a nie jedno polecenie.",
  },
  {
    // pl ① — tr·vi·ru·it 공통.
    q: "Do czego służy solver pokerowy?",
    a: "Dla spotu, który samodzielnie ustawisz — dwa zakresy, board, pula, stacki i sizingi — solver liczy, jaką akcję wybrać z każdą ręką, jak często i ile EV (wartości oczekiwanej) daje każda akcja. Z tych liczb widać, na jakich boardach zakład kontynuacyjny pojawia się częściej, które ręce czekają i dlaczego zmienia się sizing. Ma też ograniczenia: odpowiedź dotyczy tylko zakresów i drzewa, które wpiszesz, a ten solver liczy wyłącznie spoty postflop heads-up (jeden na jednego).",
  },
  {
    q: "Czy ten solver GTO jest naprawdę darmowy?",
    a: "Tak. Wszystkie funkcje są darmowe, bez limitów użycia, bez podawania metody płatności, bez zablokowanych poziomów i bez obowiązkowego konta. Logowanie jest opcjonalne i synchronizuje między urządzeniami historię Przykładów i Zadania dnia. Policzone przez ciebie spoty i historia treningu na nich zostają na tym urządzeniu także po zalogowaniu. Solver opiera się na otwartym silniku WASM Postflop (AGPL-3.0), a kod zmodyfikowany przez HoldemMaster jest opublikowany na tej samej licencji.",
  },
  {
    q: "Czy muszę coś pobierać albo instalować?",
    a: "Nie. To aplikacja WebAssembly, więc startuje od razu po otwarciu strony w Chrome, Edge, Firefoksie albo Safari. Obliczenia działają na twoim procesorze, a nie na serwerze, więc szybszy komputer liczy szybciej. Bez instalatora, bez klucza licencyjnego, bez programu desktopowego do aktualizowania. Jeśli chcesz mieć ikonę, możesz dodać solver do ekranu głównego.",
  },
  {
    q: "Jak dokładny jest solver działający w przeglądarce?",
    a: "To ty wybierasz docelową exploitability, a solver iteruje, aż ją osiągnie. Niższy cel wymaga dłuższych obliczeń; sprawdź końcową exploitability, bo obliczenia mogą się też zatrzymać na limicie iteracji. Wynik dotyczy zakresów i drzewa decyzyjnego, które wpiszesz. Pamięć i szybkość ograniczają wielkość drzewa: silnik WebAssembly może użyć około 4 GB, więc bardzo duże drzewa lepiej liczyć w solverze desktopowym.",
  },
  {
    q: "Jak pierwszy raz skorzystać z solvera pokerowego?",
    a: "Zacznij od Przykładów, a nie od własnego spotu. Są już policzone, więc najpierw uczysz się czytać wynik, a dopiero potem go ustawiać. Gdy przejdziesz do swojego spotu, zakładki własnego spotu idą po kolei: ① Zakres OOP, ② Zakres IP, ③ Board, ④ Sizingi, ⑤ Uruchom solver. Przy pierwszych obliczeniach zostaw drzewo z ustawieniami domyślnymi.",
  },
  {
    q: "Jakie sytuacje pokerowe może przeanalizować?",
    a: "Dowolny spot postflop heads-up. Ustawiasz oba zakresy, flop (i turn oraz river, jeśli chcesz zbadać konkretny runout), pulę początkową i efektywny stack oraz sizingi zakładów i przebić na każdym streecie, razem z rake’iem i rake capem. Preflopu tu się nie liczy: zakresy otwarcia dla każdej pozycji znajdziesz w tabeli rąk startowych.",
  },
  {
    q: "Czy mogę od razu zobaczyć strategie na flopie bez liczenia?",
    a: "Tak: otwórz „Przegląd flopów” w pasku bocznym. To wyniki policzone wcześniej, więc pojawiają się bez czekania. Wybierz „Otwarcie · Sprawdzenie”, „Pula 3-bet” albo „Pula 4-bet”, pozycje i flop z trzech kart, a dostaniesz częstotliwości akcji gracza, który działa jako pierwszy, oraz siatkę 13×13 strategii i zakresu; kliknij akcję, żeby prześledzić linię do końca flopa. Podstawą jest 6-max 100bb z docelowym błędem 0,3%, a każdy gotowy spot obejmuje wszystkie 1 755 różnych flopów (pogrupowanych według izomorfizmu kolorów). Sizingi są stałe: 33% i 75% na flopie, przebicia 60%, a od turna nic nie jest zapisane. Kombinacje pozycji, których jeszcze nie policzono, pokazują „Wkrótce”. Inne sizingi albo turn i river policzysz samodzielnie przez „Otwórz w solverze”.",
  },
  {
    q: "Czy mogę jednym spojrzeniem zobaczyć, na jakich boardach stawia się najczęściej?",
    a: "Tak: otwórz „Statystyki flopów” w pasku bocznym. Wybierz spot i pozycje, a dostaniesz średnią częstotliwość zakładu i EV na 1 755 wstępnie policzonych flopach, ważonych tym, jak często wypada każdy flop. Obejmuje to dwie decyzje: pierwszą decyzję gracza, który działa jako pierwszy, oraz decyzję gracza na pozycji po czeku. Grupuj według „Najwyższa karta”, „Kolory”, „Parowanie kart” albo „Połączenie kart”, żeby porównać, gdzie zakład rośnie, a gdzie spada, i kliknij wiersz, żeby otworzyć ten flop w widoku „Przegląd flopów”. Podstawą jest 6-max 100bb z docelowym błędem 0,3%, a sizingi są stałe: 33% i 75% na flopie. Spoty, których jeszcze nie policzono, są niedostępne.",
  },
  {
    q: "Jak ćwiczyć ręce, z którymi solver miesza akcje?",
    a: "Użyj treningu RNG w Trenerze GTO. Kliknij „RNG: wył.” na końcu rzędu przycisków u góry trenera, żeby przełączyć na „RNG: wysokie” albo „RNG: niskie”, a przy każdej ręce pojawi się liczba od 1 do 100 (domyślnie trening jest wyłączony, a to urządzenie zapamiętuje ustawienie). Częstotliwości solvera dla tej ręki dzielą zakres 1–100 na przedział dla każdej akcji: przy „wysokie” wysokie liczby oznaczają bardziej agresywne akcje, przy „niskie” — niskie. Wybór akcji z przedziału twojej liczby to „Najlepsze zagranie”; inna akcja, której solver używa w co najmniej 3,5% przypadków, to „Dopuszczalne”; wszystko inne jest oceniane według EV loss, najwyżej jako „Dopuszczalne”. Ekran wyników pokazuje przedział każdej akcji i to, gdzie wypadła twoja liczba. RNG nie działa w Zadaniu dnia ani w treningu z zakładki „Moje spoty”, a historia treningu pozostaje oparta na EV loss niezależnie od tego, czy trening RNG jest włączony.",
  },
  {
    q: "Czym różni się od GTO Wizard albo PioSOLVER?",
    a: "Przede wszystkim tym, gdzie odbywają się obliczenia. Biblioteki rozwiązań takie jak GTO Wizard służą głównie do przeglądania spotów policzonych wcześniej: są szybkie i obejmują też preflop (GTO Wizard oferuje także własne obliczenia). Solvery desktopowe takie jak PioSOLVER, instaluje się na komputerze z Windows i liczą one lokalnie. Ten solver liczy w twojej przeglądarce, więc możesz dowolnie zmieniać zakresy i drzewa bez instalowania czegokolwiek.",
  },
  {
    q: "Który solver GTO jest najlepszy — PioSOLVER czy GTO Wizard?",
    a: "Odpowiadają na różne pytania, więc uczciwa odpowiedź zależy od tego, co chcesz zrobić. Biblioteka rozwiązań działa szybciej, obejmuje preflop i dobrze nadaje się do nauki standardowych spotów. Zainstalowany solver desktopowy obsługuje większe drzewa niż przeglądarka. Jeśli chcesz od razu policzyć własny spot postflop, za darmo i bez instalacji, ten solver służy właśnie do tego — a jego odpowiedź możesz porównać z oboma.",
  },
  {
    q: "Czy działa na Androidzie, iPhonie, Macu i Linuksie?",
    a: "Tak: na Androidzie i iPhonie solver otwiera się bezpośrednio w przeglądarce telefonu, bez pobierania czegokolwiek ze sklepu. Na Macu i Linuksie wystarczy dowolna nowoczesna przeglądarka — to praktyczna przewaga nad solverami desktopowymi tylko na Windows. Jedno zastrzeżenie: na iOS i w Safari ograniczenia przeglądarki wymuszają obliczenia na jednym wątku, więc własne spoty liczą się tam wolno — na macOS lepiej użyć Chrome. Na telefonie korzystaj z gotowych Przykładów i Trenera GTO, a własne obliczenia rób w przeglądarce na komputerze.",
  },
  {
    // pl ② — 합법성 축이 아니라 «공부용 vs 게임 중 실시간 사용(RTA)» 구분만(ru·tr·it 선례).
    q: "Czy mogę używać solvera podczas gry? Czy to łamie zasady pokoi pokerowych?",
    a: "Do nauki — bez problemu: analiza rozegranych rąk, liczenie spotów i ćwiczenie w trenerze to dokładnie to, do czego stworzono solver. W trakcie gry natomiast nie należy go używać: większość internetowych pokoi pokerowych zabrania w regulaminie programów wspomagających w czasie rzeczywistym (RTA). Ten solver jest pomyślany do nauki po sesji, kiedy rozdanie już się skończyło.",
  },
  {
    // pl ③ — 솔버 입력은 양측 zakres이지 실제 패가 아니다.
    q: "Czy solver zgaduje karty przeciwnika?",
    a: "Nie i nie musi. Solverowi podajesz zakresy obu graczy — zbiór rąk, które każdy z nich może mieć — a nie dwie prawdziwe karty przeciwnika. Solver nie zakłada „pełnej informacji”: szuka najlepszej strategii, gdy każdy zna tylko zakres drugiego. Dlatego jakość odpowiedzi zależy od zakresów, które wpiszesz: złe zakresy, zła strategia.",
  },
  {
    // pl ④ — ru·it 선례. «GTO가 상대에 적응한다» 류 오해 정정(경쟁사 이름 없음).
    q: "Czym różni się GTO od exploitu?",
    a: "GTO to strategia równowagi, której nie da się exploitować: nie zależy od tego, jak gra konkretny przeciwnik. Exploit to odwrotność — celowe odejście od równowagi, żeby karać cudze błędy (na przykład częstszy blef przeciw komuś, kto za często pasuje). Exploit daje więcej przeciw słabemu przeciwnikowi, ale wystawia cię na kontrexploit. Solver liczy GTO; dzięki node lockingowi możesz zablokować błąd przeciwnika w węźle i zobaczyć, jak zmienia się twoja najlepsza strategia przeciw niemu — która wtedy nie jest już strategią równowagi.",
  },
  {
    // ★언어 문항(EN 21 밖 +1) — 앱 pl UI 라이브 S-106. 다른 언어판 열거 금지.
    q: "Czy solver jest po polsku?",
    a: "Tak. Aplikacja otwiera się po polsku automatycznie, jeśli przeglądarka jest ustawiona na polski, a możesz też dopisać ?lang=pl na końcu adresu. Pięć kroków (Zakres OOP, Zakres IP, Board, Sizingi, Uruchom solver), nazwy Przykładów, Zadanie dnia i ekran Trenera GTO są po polsku. Kilka krótkich skrótów technicznych na ekranie wyników — EQ, EV (bb), EQR — zostaje w formie międzynarodowej; na tej stronie są wyjaśnione po polsku. Nazwy spotów i grup tutaj zgadzają się co do litery z tym, co widzisz na ekranie.",
  },
  {
    q: "Co to jest Trener GTO?",
    a: "To tryb treningu zbudowany na gotowych, policzonych Przykładach. Trener bierze pytania z różnych punktów decyzyjnych w policzonych spotach, więc kombinacji jest ponad dziesięć tysięcy, i podaje ręce losowane proporcjonalnie do rzeczywistych wag zakresu GTO — ręka wypada tak często, jak naprawdę trafia do zakresu w tym miejscu. Wybierasz akcję, a trener ocenia decyzję względem rozwiązania. Policzone przez siebie spoty możesz też zapisać jako pytania trenera z ekranu wyników („Ćwicz ten spot”) i ćwiczyć na tym urządzeniu.",
  },
  {
    q: "Dlaczego trener ocenia według EV loss, a nie „dobrze” albo „źle”?",
    a: "Bo GTO miesza akcje, a wybór o niskiej częstotliwości nie musi być błędem. Trener mierzy, ile wartości oczekiwanej straciła twoja akcja w stosunku do puli: do 0,35% puli to „Najlepsze zagranie”, do 1% — „Dopuszczalne”, powyżej — „Do analizy”. Progi mają minimum 0,02bb i 0,05bb.",
  },
  {
    q: "Dlaczego ocena jest liczona względem puli?",
    a: "Bo te same 0,08bb to 1,45% puli 5,5bb — spot do analizy — i zaledwie 0,36% puli 22,5bb, co jest dopuszczalne. Ocena w bezwzględnych bb sprawiała, że pule 3-bet wyglądały gorzej, niż były, więc w sierpniu 2026 przeszła na procent puli. W puli po jednym podbiciu 5,5bb progi wynoszą 0,02bb i 0,055bb; w puli 3-bet 22,5bb około 0,079bb i 0,225bb, więc 0,08bb leży tuż za granicą najlepszego zagrania.",
  },
  {
    q: "Gdzie zapisują się moje postępy?",
    a: "Domyślnie na twoim urządzeniu, bez konta. Jeśli zalogujesz się na konto HoldemMaster, historię Przykładów i Zadania dnia można synchronizować między urządzeniami. Seria dni w Zadaniu dnia i znacznik ukończenia zostają na każdym urządzeniu osobno. Policzone przez ciebie spoty i historia treningu na nich zostają na tym urządzeniu także po zalogowaniu; nie zapisują się na koncie. Zapisane listy zakresów i ustawień sizingów zostają na koncie po zalogowaniu, więc otworzysz je też na innym urządzeniu. Serie, analiza słabych punktów według scenariusza i kolejka „Powtórz błędy” ze spotami, w których tracisz EV, korzystają z twojej historii treningu.",
  },
  {
    q: "Czy mogę dodać go do ekranu głównego?",
    a: "Tak. Po instalacji otwiera się na pełnym ekranie bez paska przeglądarki, a Przykłady i trener zapisują się na urządzeniu, więc możesz ćwiczyć bez internetu. W Chrome albo Edge użyj ikony instalacji na pasku adresu; na iPhonie wybierz Udostępnij, a potem „Do ekranu głównego”. Liczenie własnych spotów offline działa dopiero po jednorazowym pobraniu silnika solvera.",
  },
  {
    q: "Czy dodanie go do ekranu głównego jest bezpieczne?",
    a: "To aplikacja webowa, a nie pobrany program: nawet dodana do ekranu głównego działa w piaskownicy przeglądarki (na Androidzie Chrome opakowuje ją w lekki pakiet aplikacji). Możesz to sprawdzić, zamiast wierzyć na słowo: nie prosi o dostęp do aparatu, kontaktów, SMS-ów ani lokalizacji, a karta „Sieć” w narzędziach deweloperskich pokazuje, jakie wysyła żądania. Kod źródłowy jest publiczny na GitHubie na licencji AGPL-3.0, a gdy usuwasz aplikację, przeglądarka pozwala skasować też zapisane dane.",
  },
  {
    q: "Samsung Internet blokuje instalację ze względów bezpieczeństwa — co to znaczy?",
    a: "To nie jest wykrycie złośliwego oprogramowania. Samsung Internet tworzy własny pakiet instalacyjny, a przeglądarka nie rozpoznaje jeszcze tego typu pakietu, więc pokazuje ostrzeżenie. Kontrola pochodzi z przeglądarki, nie z aplikacji. Jeśli zainstalujesz przez Chrome, blokada się nie pojawi; jeśli wolisz zostać przy Samsung Internet, postępuj według wskazówek w oknie.",
  },
  {
    q: "Czy to solver GTO open source?",
    a: "Tak. Opiera się na WASM Postflop autorstwa Wataru Inariby, wydanym na licencji AGPL-3.0, a HoldemMaster publikuje cały zmodyfikowany kod źródłowy swojej przetłumaczonej i rozbudowanej wersji na tej samej licencji. Oryginalny projekt informuje na swojej stronie, że nie będzie już aktualizowany, i również dlatego ta wersja jest utrzymywana osobno.",
  },
];
