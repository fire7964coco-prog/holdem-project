import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Zasady all-in w Texas Hold'em: pula boczna, przebicia i showdown",
  seoTitle: "All-in i nie wiesz, co możesz wygrać? — zasady i pula boczna",
  desc: "Wchodzisz all-in, a rozdający dzieli żetony na dwa stosy. Zasady all-in w Texas Hold'em: table stakes, główna pula, pula boczna, przebicia i showdown.",
  tldr: "All-in to postawienie wszystkich żetonów, jakie masz przed sobą. Od każdego rywala możesz wygrać tylko tyle, ile wyrównałeś (główna pula) — nadwyżka od większych stacków tworzy pulę boczną, której nie tkniesz. All-in mniejszy niż pełne przebicie NIE otwiera na nowo licytacji dla graczy, którzy już zagrali.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-13",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠",
  tags: [
    "all in poker zasady",
    "all in texas holdem",
    "pula boczna poker",
    "co to all in poker",
    "jak dzieli się pula side pot",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "All-in w Texas Hold'em — gracz wpycha wszystkie żetony na środek, a rozdający oddziela główną pulę od puli bocznej na zielonym suknie",
  content: `
Zostało ci mało żetonów. Wchodzisz all-in. Gracz za tobą sprawdza. Trzeci przebija. Rozdający zaczyna rozdzielać żetony na dwa stosy.

A ty nie masz pojęcia, co się dzieje.

Sam siedziałem przy tym stole. Za pierwszym razem, kiedy poszedłem all-in w cashu na żywo, nie wiedziałem, czy w ogóle mogę jeszcze coś wygrać, czy drugi gracz może przebić ani nawet który stos żetonów jest mój. Nikt mi tego nie wytłumaczył.

==Ten poradnik pokrywa każdą sytuację: główną pulę, pule boczne, kto może przebić i kolejność w showdownie.== Koniec z zamieraniem, kiedy rozdający zaczyna liczyć stacki. (Jeśli podstawowy przebieg licytacji wciąż ci się plącze, [poradnik zasad dla początkujących](/pl/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") tłumaczy to od zera.)

## Co znaczy all-in w Texas Hold'em?

All-in oznacza postawienie wszystkich żetonów, jakie masz przed sobą. Kiedy już je wsuniesz, nie możesz dołożyć więcej — i nikt nie może zmusić cię do spasowania.

Podstawą jest zasada **table stakes**: możesz postawić tylko te żetony, które miałeś na stole na początku rozdania. Nie możesz sięgnąć do kieszeni po dodatkową gotówkę, pożyczyć od kolegi ani wrzucić zegarka czy kluczyków do auta — to poker rodem z filmu.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termin | Co znaczy |
|------|---------|
| Push / Shove / Jam | Angielski slang na wejście all-in |
| Table stakes | Możesz postawić tylko to, co miałeś na starcie rozdania |
| Double up | Wygrać all-in i podwoić swój stack |
| Główna pula (main pot) | Pula, którą może wygrać każdy — łącznie z graczem all-in |
| Pula boczna (side pot) | Żetony, które mogą wygrać tylko większe stacki; gracz all-in jest wykluczony |

</div>

==g:Gdy już jesteś all-in, masz gwarancję zobaczenia wszystkich pozostałych kart wspólnych.== Nikt nie zblefuje cię z rozdania. Twoje karty żyją aż do rivera.

---

## Jak zadeklarować all-in

Są dwa poprawne sposoby:

**1. Deklaracja słowna** — powiedz "all-in" głośno i wyraźnie, tak żeby usłyszeli cię rozdający i rywale. To najbezpieczniejsza metoda. W chwili, gdy to powiesz, jesteś już zaangażowany.

**2. Wepchnij wszystkie żetony do przodu** — przesuń cały stack ku środkowi jednym czystym ruchem. Dokładanie żetonów partiami może wyglądać jak string bet, więc przesuń wszystko naraz.

![Showdown all-in w Texas Hold'em — stół z K♠ 10♣ 7♦ 4♥ 2♣ i żetonami rozdzielonymi na opisaną główną pulę i pulę boczną](/images/holdem-all-in-declare.webp)

==r:Nigdy nie wypychaj pojedynczego żetonu bez słowa — rozdający policzy go tylko według wartości tego żetonu, a nie jako cały twój stack.== Zawsze deklaruj "all-in" na głos albo przesuń cały stack jednym ruchem.

---

## Jak działa pula boczna w pokerze? (Dlaczego gracz all-in ma limit)

Gracz all-in może wygrać tylko tyle, ile wrzucił, pomnożone przez liczbę rywali, którzy go sprawdzili. Wszystkie żetony postawione ponad tę kwotę tworzą **pulę boczną (side pot)**, która należy wyłącznie do graczy, którzy ją zasilili.

![Pula boczna po all-inie w Texas Hold'em — rozdający oddziela żetony na główną pulę i pulę boczną, gdy Gracz A ma nałożony limit](/images/holdem-all-in-side-pot.webp)

### Przykład z 3 graczami (przypadek standardowy)

| Gracz | Stack | Akcja |
|--------|-------|--------|
| Gracz A | 100 żetonów | All-in |
| Gracz B | 300 żetonów | Sprawdza 100, potem stawia 50 więcej |
| Gracz C | 300 żetonów | Sprawdza 100, potem sprawdza 50 |

**Główna pula:** 100 × 3 = **300 żetonów** (mogą ją wygrać A, B i C)

**Pula boczna:** 50 × 2 = **100 żetonów** (tylko B i C)

==Gracz A może wygrać główną pulę 300 żetonów w showdownie. Ale nawet jeśli A ma najlepszy układ ze wszystkich, nie tknie puli bocznej 100 żetonów.== Weźmie ją B albo C.

### Przykład z 4 graczami i różnymi stackami

Tu robi się skomplikowanie — i tu gubi się większość początkujących.

| Gracz | Stack | Wchodzi all-in za |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | sprawdza wszystko |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pula | Kwota | Kto może wygrać |
|:---|:---:|:---|
| Główna pula | 100 × 4 = **400** | A, B, C, D |
| Pula boczna 1 | 100 × 3 = **300** | B, C, D (A ma limit) |
| Pula boczna 2 | 300 × 2 = **600** | C, D (A i B mają limit) |
| **Razem** | **1 300** | — |

</div>

Zasada: ==każdą pulę boczną tworzy się, biorąc różnicę do następnego najmniejszego stacka × liczbę graczy, którzy ją pokrywają.== Liczysz od najmniejszego stacka do największego.

---

## Czy all-in otwiera licytację na nowo? — reguła, którą prawie wszyscy znają źle

==r:To reguła all-in, która wywołuje najwięcej kłótni przy stołach na żywo — widziałem, jak dwaj gracze spierali się o nią pięć minut, a cały stół czekał. Obaj byli w błędzie.==

**Reguła:** jeśli gracz wchodzi all-in za **mniej niż pełne [przebicie](/pl/blog/holdem-betting-actions)**, ten all-in NIE otwiera na nowo licytacji dla graczy, którzy już zagrali w tej rundzie.

![Reguła przebicia po all-inie w pokerze — Gracz C wchodzi all-in za mniej niż pełne przebicie, a Gracz A może tylko sprawdzić lub spasować](/images/holdem-all-in-reraise-rule.webp)

**Przykład:**

Blindy $1/$2. Cztery osoby widzą flopa.

1. Gracz A stawia $10.
2. Gracz B przebija do $25.
3. Gracz C wchodzi all-in za **$30** (tylko $5 więcej niż przebicie B do $25 — nie osiąga przyrostu pełnego przebicia).

Co dzieje się z Graczem A i Graczem D?

- Gracz A już zagrał (postawił $10). Ponieważ all-in C za $30 jest **mniejszy niż pełne przebicie** (które wymagałoby co najmniej $40 = $25 + $15 minimalnego przebicia), akcja NIE otwiera się na nowo dla Gracza A. ==A może tylko sprawdzić albo spasować — nie może przebić.==
- Gracz D jeszcze nie zagrał — **D może przebić normalnie**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kwota all-inu | Pełne przebicie? | Otwiera licytację? |
|--------------|-------------|-----------------|
| Mniej niż pełne przebicie | Nie | Nie — kto już zagrał, może tylko sprawdzić lub spasować |
| Pełne przebicie lub więcej | Tak | Tak — wszyscy mogą znów przebić |

</div>

Po co ta reguła istnieje? Chroni graczy przed zmuszeniem do większych przebić przez częściowe all-iny. Pełne przebicie sygnalizuje prawdziwą agresję — all-in krótkiego stacka za resztki żetonów już nie.

### Przypadek zaawansowany: co, jeśli kilku graczy wejdzie all-in krótko?

To wersja, na której potyka się nawet wyjadaczy. Kilka krótkich all-inów może **zsumować się** do pełnego przebicia — i jeśli ich łączne przyrosty osiągną próg, licytacja otwiera się na nowo dla tych, którzy już zagrali.

To oficjalna reguła TDA o ponownym otwarciu licytacji ("re-opening the bet") i stosuje ją większość kasyn oraz pokojów kartowych.

**Przykład (blindy $1/$2, na flopie):**

1. Gracz A stawia $10.
2. Gracz B wchodzi all-in za **$14** (przyrost +$4 — sam z siebie to nie pełne przebicie)
3. Gracz C wchodzi all-in za **$21** (przyrost +$7 — sam z siebie to nie pełne przebicie)

Łączne przyrosty: $4 + $7 = **$11** — osiągają próg minimalnego przebicia $10.

**Wynik: licytacja OTWIERA SIĘ na nowo dla Gracza A.** A może spasować, sprawdzić albo przebić, mimo że ani B, ani C nie wykonali pełnego przebicia z osobna.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in B | All-in C | Łączny przyrost | Otwiera dla A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — poniżej $10 | ❌ Nie |
| $14 (+$4) | $21 (+$7) | $11 — osiąga $10 | ✅ Tak |
| $15 (+$5) | $25 (+$10) | $15 — osiąga $10 | ✅ Tak |

</div>

Próg minimalnego przebicia to zawsze *ostatni pełny prawidłowy zakład lub przebicie* — nigdy żaden sumaryczny total.

### Szybki przewodnik decyzyjny — czy ten all-in otwiera licytację?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Sytuacja | Otwiera dla tych, którzy już zagrali? |
|---|---|
| Pojedynczy all-in < pełne przebicie | ❌ Nie — tylko sprawdzić lub spasować |
| Pojedynczy all-in ≥ pełne przebicie | ✅ Tak — wszyscy mogą przebić |
| Kilka krótkich all-inów, suma < pełne przebicie | ❌ Nie |
| Kilka krótkich all-inów, suma ≥ pełne przebicie | ✅ Tak |
| Gracz, który JESZCZE nie zagrał | ✅ Zawsze może przebić (niezależnie od reszty) |

</div>

---

## Zasady showdownu przy all-inie

Kiedy licytacja jest zamknięta, a gracz jest all-in, oto co dzieje się w showdownie:

1. **Karty odkrywa się awersem do góry.** W turniejach wszystkie układy zaangażowane w all-in zwykle wykłada się, gdy tylko licytacja się zakończy. W cashu najpierw obowiązuje standardowa [reguła ostatniego agresora w showdownie](/pl/blog/holdem-showdown-rules), a potem pokazują gracze all-in.
2. **Pule boczne rozstrzyga się najpierw.** Rozdający najpierw rozwiązuje najpóźniej utworzoną pulę boczną, a potem cofa się aż do głównej puli.
3. **Karty mówią za siebie.** Najlepszy układ wygrywa każdą pulę, do której ma prawo — niezależnie od tego, co gracze twierdzą, że mają.
4. **Zwycięzców może być kilku.** Gracz A może wygrać główną pulę, a Gracz B pulę boczną. Żaden nie bierze wszystkiego tylko dlatego, że wygrał "swoją" pulę.

==g:Jeden gracz może wygrać główną pulę, a przegrać pulę boczną. Oba wyniki są prawidłowe.==

**Przypadek szczególny:** jeśli w jakiejś puli bocznej został tylko jeden gracz (reszta spasowała), odzyskuje on te żetony od razu — do tej puli showdown nie jest potrzebny.

---

## Co, jeśli pójdziesz all-in źle? — 5 błędów, których unikać

### Błąd 1: myślenie, że gracz all-in może wygrać pulę boczną

Nie może. Gdy gracz all-in ma już nałożony limit, każdy dodatkowy żeton postawiony przez większe stacki idzie do puli, do której nie ma żadnego prawa.

### Błąd 2: nieznajomość reguły, kto może przebić

Częściowy all-in Gracza C nie daje Graczowi A drugiej szansy na przebicie. Znajomość tego na wylot ucina kłótnie, zanim się zaczną.

### Błąd 3: dokładanie żetonów z kieszeni w środku rozdania

Table stakes. To, co jest na stole, to wszystko, co możesz postawić. Jeśli jesteś all-in za $80, a pula wynosi $400, od każdego sprawdzającego możesz wygrać tylko $80.

### Błąd 4: zbyt szybkie wyrzucenie kart

Jesteś all-in o główną pulę. Dwaj inni gracze biją się o pulę boczną. Nie wyrzucaj kart — twój układ wciąż żyje w grze o główną pulę. ==Zawsze poczekaj, aż rozdający rozstrzygnie każdą pulę, zanim dotkniesz swoich kart.==

### Błąd 5: wejście all-in z frustracji

All-in to najpotężniejszy ruch przy stole. Zmusza rywali do decyzji na zasadzie wszystko albo nic. Ta siła znika, kiedy wpychasz żetony na oślep. Używaj go we właściwym momencie — presja krótkim stackiem, mocne układy, które chcesz, żeby ktoś sprawdził, blefy z realnym fold equity.

---

:::readnext[Czytaj dalej]
/pl/blog/texas-holdem-rules-for-beginners | Zasady Texas Hold'em dla początkujących | /images/rules-texas-holdem.webp
/pl/blog/holdem-showdown-rules | Zasady showdownu — wyjaśnione | /images/holdem-showdown-rules-hero.webp
:::

## FAQ

**Q. Czy można wejść all-in za mniej niż duży blind?**

A. Tak. Jeśli masz mniej żetonów niż duży blind, to gdy przychodzi twoja kolej, automatycznie jesteś all-in za tyle, ile masz. Reszta graczy i tak wpłaca pełny duży blind — wszystko ponad twój wkład idzie do puli bocznej.

**Q. Co się dzieje, jeśli wygrasz all-in, ale przegrasz pulę boczną?**

A. Zgarniasz główną pulę (to, co wyrównałeś od każdego gracza), a drugi gracz bierze pulę boczną. Każdy wygrywa tę część, do której miał prawo.

**Q. Czy wejście all-in zmusza cię do pokazania układu?**

A. W turniejach tak — gdy tylko licytacja z all-inem się zamknie, wszystkie zaangażowane układy wykłada się awersem do góry. W cashu na żywo obowiązują normalne zasady showdownu: ostatni agresor pokazuje pierwszy, a reszta pokazuje albo wyrzuca karty.

**Q. Czy przy all-inie można zrobić "run it twice"?**

A. Rozdanie pozostałych kart wspólnych dwa razy i podział puli (run it twice) jest dozwolone w wielu grach cash, jeśli obaj gracze zgodzą się po all-inie. W turniejach zwykle się tego nie dopuszcza. Trzeba to ustalić przed rozdaniem brakujących kart.

**Q. Na czym dokładnie polega reguła "table stakes"?**

A. Table stakes oznacza, że możesz obstawiać tylko te żetony, które miałeś przed sobą na początku rozdania. Nie możesz dołożyć pieniędzy w trakcie rozdania. Chroni to obie strony: ciebie nikt nie zmusi do zaryzykowania więcej niż twój stack, a rywal nie może nagle postawić więcej, niż jesteś w stanie pokryć.

**Q. Jeśli dwaj gracze wejdą all-in za różne kwoty, kto pokazuje pierwszy?**

A. Ostatni all-in liczy się jako ostatnia agresywna akcja. Obowiązują normalne zasady showdownu: pokazuje pierwszy ten, kto wykonał ostatni all-in lub agresywny ruch. W cashu, jeśli był to sprawdzony all-in bez dalszej akcji, sprawdzający może wyrzucić karty, jeśli przegrywa po zobaczeniu układu gracza all-in (w turniejach wszystkie zaangażowane układy zostają awersem do góry).

**Q. Czy zasady all-in różnią się w turniejach i w cashu?**

A. Rdzeń jest ten sam, z dwiema praktycznymi różnicami. Pierwsza: w turniejach wszystkie układy zaangażowane w all-in wykłada się awersem do góry, gdy tylko licytacja się zamknie (Reguła 16 TDA) — nie możesz wyrzucić kart przed showdownem. W cashu obowiązuje normalna kolejność showdownu i można to zrobić. Druga: run it twice jest częsty w cashu (jeśli obaj gracze się zgodzą), ale w turniejach zwykle jest niedozwolony.

---

## Powiązane artykuły

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pl/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Filar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Zasady Texas Hold'em dla początkujących</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wszystkie zasady, od blindów po showdown</div>
  </a>
  <a href="/pl/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Zasady showdownu</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kto pokazuje pierwszy i kiedy możesz wyrzucić karty</div>
  </a>
</div>
`.trim(),
};
