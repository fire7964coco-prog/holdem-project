import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-betting-actions",
  title: "Akcje w Texas Hold'em: czek, sprawdzenie, przebicie i pas",
  seoTitle: "Czek, sprawdzić czy spasować? — akcje w pokerze",
  desc: "Przychodzi twój ruch i pustka w głowie? Zobacz, co znaczą czek, sprawdzenie, przebicie i pas, jak działa min-raise i ile razy można przebijać.",
  tldr: "W Texas Hold'em jest 5 akcji: czek (spasowanie za darmo — zostajesz w rozdaniu), postawienie (otwierasz rundę), sprawdzenie (dokładasz do stawki), przebicie (podnosisz — minimalne przebicie równa się ostatniemu pełnemu zakładowi lub przebiciu) i pas. Czekać możesz tylko wtedy, gdy przed tobą nie stoi aktywny zakład — na preflopie zwykle wyłącznie jako duża ciemna (albo jako gracz, który wystawił żywego straddle'a).",
  category: "rules",
  date: "2026-06-14",
  updated: "2026-10-13",
  masterUpdated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "🃏",
  tags: [
    "akcje w pokerze",
    "co to czek w pokerze",
    "co to sprawdzenie w pokerze",
    "min-raise poker zasady",
    "ile razy można przebić w pokerze",
    "czek raise poker",
    "string bet",
  ],
  image: "/images/holdem-betting-actions-hero.webp",
  imageAlt: "Stół do Texas Hold'em ze stosami żetonów oznaczonymi CHECK, CALL, RAISE i FOLD — gracz trzyma karty zakryte, zastanawiając się nad ruchem",
  content: `
Moja pierwsza sesja na żywo: rozdający mówi "ruch należy do ciebie", a ja zamarłem — kilka sekund ciszy, cały stół patrzy na mnie.

Czek? Sprawdzić? Przebić? Znałem hierarchię układów. Ale tak naprawdę nie wiedziałem, ==jak działają same akcje== — i właśnie tę lukę zamyka ten poradnik.

W Texas Hold'em istnieje tylko ==5 akcji==, ale zasady wokół nich (kiedy wolno czekać, jak duże musi być przebicie, ile razy można przebijać) potrafią zamieszać w głowie początkującemu przez wiele tygodni. Jeśli dopiero zaczynasz, przejrzyj najpierw [pełny poradnik zasad Texas Hold'em](/pl/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") — a potem wróć tutaj po regulamin akcja po akcji.

---

### Szybkie podsumowanie

:::stripe
5 | akcje: czek, postawienie, sprawdzenie, przebicie, pas
1 BB | minimalny zakład otwierający w No-Limit Hold'em
= ostatnie pełne przebicie | minimalny rozmiar re-raise (zasada przyrostu)
Bez limitu | przebić w No-Limit — możesz podbijać, aż ktoś wejdzie all-in
:::

## Jakie jest 5 akcji w Texas Hold'em?

Każda pojedyncza decyzja przy stole to jedna z tych pięciu:

| Akcja | Kiedy dostępna | Koszt w żetonach |
|--------|---------------|-----------|
| Pas (fold) | Zawsze, gdy ruch należy do ciebie | Za darmo — ale tracisz żetony już wrzucone do puli |
| Czek (check) | Tylko gdy przed tobą nie stoi aktywny zakład (preflop: jako duża ciemna albo jako gracz, który wystawił żywego straddle'a) | Za darmo — oddajesz ruch, nie dokładając żetonów |
| Sprawdzenie (call) | Po tym, jak ktoś postawił lub przebił | Dokładasz dokładnie do aktualnej stawki |
| Postawienie (bet) | Pierwszy zakład w rundzie | Kwota, którą wybierzesz (minimum = 1 duży blind) |
| Przebicie (raise) | Po tym, jak ktoś postawił | Co najmniej rozmiar ostatniego pełnego zakładu lub przebicia na wierzch |

Wejście ==all-in== to nie osobna, szósta akcja — to postawienie, sprawdzenie albo przebicie wszystkimi żetonami, jakie ci zostały. Więcej o tym niżej.

Najważniejsza zasada, którą początkujący przegapiają: ==r:nie możesz czekać, gdy przed tobą stoi aktywny zakład==. W chwili, gdy w puli są żetony, których nie wyrównałeś, twoje opcje kurczą się do pasa, sprawdzenia albo przebicia.

---

## Co to jest czek w pokerze?

Czek znaczy: ==g:"pasuję słownie — nie stawiam, ale zostaję w rozdaniu".==

Nic nie kosztuje. Na żywo sygnalizujesz go, stukając kostkami w stół albo mówiąc "czek". Ruch przechodzi do gracza po twojej lewej. Jeśli wszyscy czekają dookoła, rozdawana jest następna karta wspólna — a na riverze idziesz prosto do showdownu.

Czek to nie kapitulacja. Zatrzymujesz karty, zatrzymujesz wszystkie opcje i nie zapłaciłeś nic, żeby zobaczyć, co będzie dalej.

---

## Kiedy można czekać w pokerze?

Czekać możesz dokładnie w dwóch sytuacjach:

- **Nikt jeszcze nie postawił** na aktualnej ulicy (flop, turn albo river)
- **Jesteś na dużym blindzie przed flopem i nikt nie przebił** — twój blind liczy się już jako żywy zakład, więc możesz czeknąć i zobaczyć flop za darmo

Jeśli ktoś postawi po twoim czeku, stajesz przed nową decyzją: pas, sprawdzenie albo przebicie. Czek, a potem przebicie w reakcji na zakład przeciwnika to tzw. ==check-raise== — jest w pełni legalny w Texas Hold'em i standardowa broń, a nie żadne kombinowanie.

Pełny obraz, kto działa i kiedy, ulica po ulicy, znajdziesz w [kolejności gry w Texas Hold'em](/pl/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp").

---

## Co to jest sprawdzenie w pokerze? (czek vs sprawdzenie)

Sprawdzenie znaczy, że ==dokładasz dokładnie do aktualnej stawki==, żeby zostać w rozdaniu. Ktoś stawia $10, ty sprawdzasz za $10 — ani więcej, ani mniej. (Jeśli zostało ci mniej niż $10, i tak możesz sprawdzić: wchodzisz all-in za tyle, ile masz.)

Czek vs sprawdzenie to najczęstsza pomyłka początkujących, więc oto czysty podział:

| | Czek (check) | Sprawdzenie (call) |
|-|-------|------|
| Kiedy istnieje | Przed tobą nie stoi aktywny zakład (preflop: jako duża ciemna albo jako gracz, który wystawił żywego straddle'a) | Ktoś postawił przed tobą |
| Koszt w żetonach | Za darmo | Dokładasz do aktualnej stawki |
| Co mówi | "Pasuję słownie, zostaję" | "Płacę, żeby grać dalej" |

Realny przykład: jesteś na flopie z K♠ 8♦. Nikt nie postawił, więc ==czekasz==. Następny gracz stawia $10. Teraz masz opcje: ==sprawdzić== $10, ==przebić== (do $20 albo więcej) albo ==spasować==. Czek zniknął — to okno zamknęło się w chwili, gdy zakład wpadł do puli.

---

## Co to jest pas w pokerze? Czy można spasować w każdej chwili?

Pas znaczy, że oddajesz karty i wychodzisz z rozdania. Nic nowego nie płacisz, ale ==r:wszystkie żetony, które już wrzuciłeś, zostają w puli==.

Tak — kiedy ruch należy do ciebie, możesz spasować, nawet zanim cokolwiek postawisz, a pas jest wiążący. Zupełnie za darmo to jednak nie jest: w turnieju pas w sytuacji, gdy przed tobą nie stoi żaden zakład, liczy się jako „pas niestandardowy" według ==zasady 84 regulaminu turniejowego WSOP== i może skończyć się ostrzeżeniem. I uważaj na pułapkę: **pasowanie, gdy mógłbyś czeknąć za darmo, to wyrzucanie rozdania bez powodu**. Jeśli nikt nie postawił, po prostu czeknij.

Jedna zasada etykiety na żywo: nie pasuj ==poza kolejnością==. Poczekaj, aż ruch dojdzie do ciebie — pas przed czasem daje informację graczom, którzy jeszcze się zastanawiają, i w większości salonów dostaniesz za to ostrzeżenie albo karę. To, *kiedy* pas jest właściwym ruchem, to osobna umiejętność — o tym mówi poradnik o tym, kiedy pasować w pokerze.

---

## Co to jest min-raise? Zasady stawiania i przebijania w Texas Hold'em

![Infografika zasady min-raise w pokerze: zakład $6 wymaga przebicia co najmniej do $12, a przebicie przed flopem do $6 wymaga minimalnego re-raise do $10](/images/holdem-betting-actions-min-raise.webp "Zasada min-raise — każde przebicie musi dodać co najmniej rozmiar ostatniego zakładu lub przebicia")

W No-Limit Hold'em (formacie, w który niemal zawsze będziesz grać):

- **Minimalny zakład**: 1 duży blind
- **Minimalne przebicie (min-raise)**: co najmniej ==rozmiar ostatniego pełnego zakładu lub przebicia== dołożony na wierzch
- **Maksimum**: cały twój stack — stąd nazwa "no limit"

Dwa rozpisane przykłady:

| Ulica | Akcja do tej pory | Minimalne przebicie |
|--------|--------------|---------------|
| Flop | Gracz stawia $6 | $6 więcej → $12 razem |
| Preflop (blindy $1/$2) | Gracz przebija do $6 (przebicie o $4 ponad blind $2) | $4 więcej → $10 razem |

Kluczowa rzecz: min-raise równa się ==przyrostowi== ostatniego pełnego zakładu lub przebicia, a nie dużemu blindowi. ("Pełnego" ma znaczenie, gdy ktoś wejdzie all-in za mniej niż przebicie: po zakładzie $10 i all-inie za $14 przyrost do wyrównania to nadal $10, więc najmniejsze przebicie to do $24.) Przed flopem duży blind liczy się jako zakład otwierający — dlatego najmniejsze przebicie otwierające to do 2 dużych blindów. Gdy na stole leży żywy straddle, to właśnie jego trzeba przebić, więc minimalne przebicie to do podwójnego straddle'a (zasada 165 WSOP Live Action Rules).

Dwie zasady pokera na żywo, które idą w parze z przebiciem:

1. **Zapowiedz "raise" (przebijam), zanim ruszysz żetony.** Mówisz "sprawdzam", a potem wypychasz więcej żetonów? Twoja zapowiedź już była wiążąca (==zasada 90.d regulaminu turniejowego WSOP==) — nadwyżka się nie liczy. Prawdziwy ==string bet== to co innego: zakład lub przebicie w kilku ruchach, z powrotem do stacka po drodze, **bez** wcześniejszej zapowiedzi "raise" — albo zwodniczy gest, który ma sprowokować akcję poza kolejnością (==zasada 103 regulaminu turniejowego WSOP==).
2. **Jeden ruch.** Jeśli nic nie zapowiadasz, żetony muszą wjechać jednym ruchem do przodu.

*Ile* powinieneś przebijać (otwarcia 2,5x, 3-bety po 3x, dobór rozmiaru pod fakturę stołu) to strategia, a nie zasady — o tym jest filar strategii Texas Hold'em.

---

## Ile razy można przebić w pokerze?

W **No-Limit Hold'em: nie ma limitu**. Możesz przebić, dostać re-raise i przebić znowu ("re-raise", "przebicie przebicia" — to samo), aż komuś skończą się żetony. Przebicie → 3-bet → 4-bet → 5-bet → all-in to legalna, choć przerażająca, sekwencja.

Wciąż obowiązują dwie granice:

- Każde re-raise musi spełniać ==zasadę minimalnego przyrostu== z góry — jedynym wyjątkiem jest all-in, który może być mniejszy
- ==r:Nie możesz przebić własnego zakładu.== Jeśli postawisz, a wszyscy tylko sprawdzą, runda się kończy — ponownie możesz przebić tylko wtedy, gdy ktoś przebije *ciebie* pierwszy. Jedyny wyjątek jest przed flopem: gdy wszyscy tylko sprawdzą, duży blind (albo gracz z żywym straddle'em) wciąż ma opcję przebicia, bo jego wpłata liczy się jako zakład otwierający (zasady 159 i 165 WSOP Live Action Rules)

W grach **Fixed-Limit** każda runda jest zamknięta limitem (pula "capped"). Turniejowe zasady WSOP ustawiają go na ==jeden zakład plus cztery przebicia== (zasada 100.b) — a wyjątek działa odwrotnie, niż niemal wszyscy zakładają: ==r:limit obowiązuje nawet wtedy, gdy w rozdaniu zostało już tylko dwóch graczy==. Znika dopiero, gdy heads-up jest **cały turniej**. W grach cash decydują zasady lokalu, więc dopytaj rozdającego.

---

## Co znaczy wejść all-in?

All-in znaczy postawienie ==wszystkich żetonów, jakie ci zostały==. Możesz to zrobić w swojej kolejce jako postawienie, sprawdzenie albo przebicie — tę z tych akcji, która jest ci w tym momencie dostępna.

Jeśli twój all-in jest *mniejszy* niż aktualna stawka, nie wypadasz z gry: po prostu walczysz o ==główną pulę== ograniczoną do twojego wkładu, a nadwyżka żetonów od większych stacków tworzy ==pulę boczną (side pot)==, której nie możesz wygrać. A all-in *mniejszy niż pełne min-raise* zwykle nie otwiera na nowo przebijania graczom, którzy już zagrali — subtelna zasada, która zaskakuje nawet ogranych.

Pełna mechanika — matematyka puli bocznej, kto pokazuje karty pierwszy, table stakes — jest w [zasadach all-in i puli bocznej](/pl/blog/holdem-all-in-rules), a co się dzieje, gdy układy w all-inie remisują, wyjaśniają zasady dzielonej puli.

---

## Znajomość akcji to krok pierwszy — wybór między nimi to strategia

Ten poradnik pokazuje, czym *jest* każda akcja i kiedy jest *legalna*. Którą wybrać — kiedy stawiać, kiedy sprawdzenie jest opłacalne, kiedy dobry układ trzeba spasować — to inne drzewko umiejętności:

- Najpierw ocena surowej siły twojego układu: hierarchia układów pokerowych
- Rama dla każdej decyzji: strategia Texas Hold'em i 5 decyzji
- Dlaczego miejsce przy stole zmienia wszystko: pozycje w pokerze

Jedna zasada, która oszczędza początkującym realne pieniądze w międzyczasie: ==jeśli układ nie jest dość mocny, żeby przebić, pas zwykle bije sprawdzenie.==

---

## Błędy w licytacji na żywo, które widzę co tydzień

Gram cotygodniową grę na żywo o niskie stawki i te same błędy w akcjach powtarzają się jak w zegarku:

### Błąd 1 — sprawdzenie, gdy mógłbyś czeknąć

Pierwszy do ruchu na flopie, nikt nie postawił, a nowy gracz **w ciszy** wypycha żetony "na sprawdzenie". Nie ma czego sprawdzać: według ==zasady 90.a regulaminu turniejowego WSOP== zakład stawia się deklaracją *albo* wypchnięciem żetonów — właśnie postawił, nie chcąc tego. Gdyby *powiedział* "sprawdzam", ==zasada 90.b.1 regulaminu turniejowego== zrobiłaby z tego czek. Gdy ulica jest nieotwarta, czeknij — jeśli nikt za tobą nie postawi, zobaczysz następną kartę za darmo.

### Błąd 2 — "Sprawdzam... nie, czekaj, przebijam!"

"Sprawdzam... nie, czekaj, przebijam!" Nie ma tak. W pokerze na żywo akcja jest wiążąca w chwili, gdy ją zapowiadasz — według ==zasady 90.d regulaminu turniejowego WSOP== słowna deklaracja w twojej kolejce jest wiążąca. (To zresztą nie string bet; string bet to wypychanie w kilku ruchach z powrotem do stacka, opisane w FAQ. Skutek ten sam: liczy się pierwsze słowo.) Widziałem rozdających, którzy uznali to za zwykłe sprawdzenie w połowie zdania więcej razy, niż jestem w stanie policzyć. Zapowiedz "raise" *najpierw*, a potem rusz żetony.

### Błąd 3 — duży blind pasujący darmowy flop

Wszyscy limpują, ruch dochodzi do dużego blinda… i on pasuje. To darmowy flop wyrzucony do mucka. ==g:Jeśli nikt nie przebił ani nie wystawił straddle'a, BB może czeknąć i zobaczyć trzy karty bez dodatkowego kosztu== — jego blind jest już żywy. To się zdarza dosłownie co orbitę.

### Błąd 4 — cichy pojedynczy żeton

Przy zakładzie $10 gracz w ciszy wrzuca jeden żeton $100, licząc na resztę *i* przebicie. ==Zasada jednego żetonu (one-chip rule)== stoi tak w regulaminie WSOP (==zasada 97 regulaminu turniejowego==): niezapowiedziany pojedynczy duży żeton to tylko sprawdzenie. Żeby przebić, "raise" musi paść **zanim żeton dotknie stołu**.

---

:::readnext[Czytaj dalej]
/pl/blog/holdem-all-in-rules | Zasady all-in i puli bocznej | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. Czy można przebić po czeku w pokerze?**

A. Tak — jeśli ktoś postawi po twoim czeku, możesz przebić, gdy ruch wróci do ciebie. To właśnie check-raise i jest w pełni legalny. Jeśli wszyscy czekają za tobą, nie ma zakładu do przebicia i ulica po prostu się kończy.

**Q. Czy można przebić własny zakład?**

A. Nie. Jeśli postawisz, a przeciwnicy tylko sprawdzą, nie możesz dołożyć więcej — runda licytacji się kończy. Jedyny wyjątek jest przed flopem: gdy wszyscy tylko sprawdzą, duży blind (albo gracz z żywym straddle'em) wciąż ma opcję przebicia, bo jego wpłata liczy się jako zakład otwierający (zasady 159 i 165 WSOP Live Action Rules).W No-Limit i Pot-Limit możesz przebić ponownie tylko wtedy, gdy ruch wróci do ciebie i masz przed sobą co najmniej pełne przebicie ponad twój zakład — czy zrobił je jeden gracz, czy złożyło się na nie kilka krótkich all-inów; pojedynczy all-in mniejszy niż pełne przebicie nie otwiera akcji na nowo. W Fixed-Limit poprzeczka wisi niżej: otwiera ją all-in wart co najmniej 50% pełnego zakładu lub przebicia (TDA 2024, zasada 47-B).

**Q. Ile razy można przebić w Texas Hold'em?**

A. W No-Limit nie ma limitu liczby przebić — re-raise może trwać, aż gracz wejdzie all-in, o ile każde przebicie spełnia minimalny przyrost (all-in może być mniejszy). W Fixed-Limit turniejowe zasady WSOP ograniczają rundę do jednego zakładu plus czterech przebić (zasada 100.b), a limit obowiązuje nawet wtedy, gdy w rozdaniu zostało dwóch graczy — znika dopiero, gdy heads-up jest cały turniej.

**Q. Czy można spasować poza kolejnością?**

A. Nie powinieneś. Akcja musi iść w kolejności, zgodnie z ruchem wskazówek zegara, a pas poza kolejnością zdradza informację graczom, którzy jeszcze się zastanawiają. Większość salonów traktuje go jako wiążący i może ukarać powtarzające się przypadki. Poczekaj, aż zagra gracz po twojej prawej.

**Q. Czy można czekać przed flopem?**

A. Tylko jeśli twoja własna wpłata jest pełnym żywym zakładem, który wszyscy inni muszą wyrównać, i nikt nie przebił — zwykle to duży blind, gdy nikt nie wystawił straddle'a, albo gracz z żywym straddle'em, gdy ktoś go wystawił (zasady 159 i 165 WSOP Live Action Rules): ta wpłata liczy się jako twój zakład otwierający, więc możesz czeknąć i zobaczyć flop za darmo. Pół zakładu małego blinda nigdy się nie liczy, a w puli ze straddle'em duży blind jest po prostu kolejnym graczem z zakładem przed sobą — każda pozycja, której wpłata nie jest tym żywym zakładem, musi przed flopem sprawdzić, przebić albo spasować.

**Q. Czy można przebić po tym, jak ktoś wszedł all-in?**

A. Zależy od rozmiaru all-inu. Jeśli all-in jest pełnym legalnym przebiciem, akcja otwiera się na nowo i możesz re-raise'ować. Jeśli jest *mniejszy* niż pełne min-raise, gracze, którzy już zagrali, zwykle mogą tylko sprawdzić albo spasować — w większości salonów taki krótki all-in nie otwiera im przebijania na nowo.

**Q. Co to jest string bet w pokerze?**

A. Próba postawienia lub przebicia w kilku ruchach — z powrotem do stacka w międzyczasie — bez wcześniejszej zapowiedzi "raise" (==zasada 103 regulaminu turniejowego WSOP==). Drugi ruch nigdy się nie liczy — ważne są tylko pierwsze żetony, oceniane najpierw według zasad sprawdzenia jednym i wieloma żetonami (TDA 2024, zasady 44–45). Tam, gdzie stosuje się próg połowy z zasady 43-A TDA 2024, mierzy się nadwyżkę ponad sprawdzenie, a nie sumę żetonów: poniżej połowy największego wcześniejszego pełnego zakładu lub przebicia to sprawdzenie; połowa lub więcej wymaga pełnego min-raise. Wcześniejsza deklaracja przebicia albo all-in podlegają własnym zasadom. Zasada 103 regulaminu turniejowego WSOP zakazuje też zwodniczego gestu, który ma sprowokować akcję poza kolejnością, zanim twoja akcja się zakończy. Powiedzenie "sprawdzam", a potem dołożenie, to nie string bet, tylko wiążąca zapowiedź (==zasada 90.d regulaminu turniejowego WSOP==) — efekt ten sam. Zapowiedz akcję słownie — "raise" i pełną kwotę — albo wrzuć wszystkie żetony jednym ruchem (TDA 2024, zasada 42).

**Q. Co znaczy limpować w pokerze?**

A. Limpowanie to wejście do puli przed flopem przez zwykłe sprawdzenie dużego blinda zamiast przebicia. Jest legalne, ale zwykle to słaba gra — są konkretne sytuacje, w których ma sens, ale to wyjątki.

---

## Powiązane artykuły

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pl/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Filar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Zasady Texas Hold'em dla początkujących</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pełny poradnik zasad — od blindów do showdownu</div>
  </a>
  <a href="/pl/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Przebieg gry</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kolejność gry w Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Od preflopu do rivera na realnych przykładach rozdań</div>
  </a>
  <a href="/pl/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blindy</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Mały blind vs duży blind</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Dlaczego płacisz, zanim zobaczysz karty</div>
  </a>
</div>
`.trim(),
};
