import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-split-pot-rules",
  title: "Kiedy dzieli się pulę? Remis i podział puli w Texas Hold'em",
  seoTitle: "Dostałeś tylko pół puli? — Remis i podział puli w pokerze",
  desc: "Czy w pokerze może być remis? Tak. Kiedy dokładnie dzieli się pulę: identyczne pięć kart, board gra za wszystkich, nieparzysty żeton i pule boczne.",
  tldr: "Tak, w pokerze może być remis. Pulę dzieli się (chop), gdy dwóch lub więcej graczy pokazuje identyczny najlepszy układ z pięciu kart. Kolory kart nigdy nie rozstrzygają remisu, a nieparzysty żeton dostaje pierwszy remisujący gracz na lewo od buttona.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-10-17",
  masterUpdated: "2026-10-05",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🃏",
  image: "/images/holdem-split-pot-hero.webp",
  imageAlt: "Podział puli w pokerze — board 8♠ 8♥ 8♦ A♣ K♠, ręce J♠ 10♥ i 5♣ 2♦, żetony rozdzielone złotą linią, bo żadna ręka nie bije boardu",
  tags: [
    "podział puli poker",
    "remis w pokerze",
    "czy w pokerze może być remis",
    "split pot",
    "kiedy dzieli się pulę",
    "co się dzieje, jeśli na stole jest strit",
    "nieparzysty żeton poker",
    "chop poker",
  ],
  content: `
Na początku mojej przygody z pokerem prowadziłem akcję na każdym streecie — przebicie preflop, zakład na flopie i turnie, a na riverze rywal sprawdził mój zakład. Odkryłem J♠ 10♥. Rywal odwrócił **5♣ 2♦**. „Wygrałem, prawda?” Rozdający nic nie powiedział, tylko wskazał board: ==**8♠ 8♥ 8♦ A♣ K♠**==. ==r:Żadna z naszych kart zakrytych nie biła trójki ósemek z kickerami as-król==, więc rozdający spokojnie przeciął pulę na pół.

Dostać połowę puli, którą miałeś za wygraną, to szok. Ale ==g:podział puli rządzi się jasnymi zasadami== — i odpowiada na pytanie, które początkujący zadają najczęściej: **czy w pokerze może być remis?** Może. Oto wszystkie sytuacje, w których do niego dochodzi.

---

> **Szybka odpowiedź**
> Pulę **dzieli się** (gracze mówią też **chop**), gdy dwóch lub więcej graczy ma przy showdownie **identyczny najlepszy układ z pięciu kart**. Żetony dzieli się po równo. Kolory kart nigdy nie rozstrzygają remisu, a nieparzysty żeton, który zostaje, dostaje pierwszy remisujący gracz na lewo od buttona.

---

### Najważniejsze liczby

:::stripe
5 | sytuacji, w których pula w Hold'em się dzieli
0 | remisów rozstrzyganych kolorem karty w Texas Hold'em
1 | nieparzysty żeton — trafia do pierwszego remisującego miejsca na lewo od buttona
:::

---

## Co to jest split pot? (I czy „chop” to to samo?)

**Split pot**, czyli podział puli, to sytuacja, w której dwóch lub więcej graczy ma przy showdownie identyczny najlepszy układ z pięciu kart, więc rozdający dzieli żetony między nich po równo. **Chop** to dokładnie to samo, tylko w żargonie przy stole („chopujemy”, „dzielimy”). Regulaminy mówią o podziale puli, gracze mówią chop. Szukasz jednego albo drugiego — chodzi o to samo.

Podstawa: twój układ to zawsze ==**najlepsze pięć kart**== z siedmiu — twoje dwie karty zakryte plus pięć kart wspólnych. Gdzie w hierarchii stoi każdy układ z pięciu kart, znajdziesz w [pełnym rankingu układów pokerowych](/pl/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"). ==r:Gdy najlepsze piątki dwóch graczy mają identyczną wartość, żaden z nich nie wygrywa „bardziej”== — pula się dzieli i koniec.

---

## Czy w pokerze może być remis? 5 sytuacji, w których dzieli się pulę

Tak — remis to normalny, zgodny z zasadami wynik w Texas Hold'em i zdarza się częściej, niż spodziewają się początkujący. Wszyscy korzystają z tych samych pięciu kart wspólnych, więc dwóch graczy często dochodzi do tej samej najlepszej piątki. Oto pięć sposobów, w jakie do tego dochodzi.

### 1. Identyczne najlepsze pięć kart
Dwóch graczy układa dokładnie ten sam układ z pięciu kart — te same wartości, nawet jeśli ich karty zakryte różnią się kolorem.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| | Gracz A | Gracz B |
|---|---|---|
| **Karty zakryte** | K♠ 7♣ | K♥ 2♦ |
| **Board** | K♦ K♣ Q♥ Q♦ J♠ | (ten sam) |
| **Najlepsze pięć** | ==g:K-K-K-Q-Q== | ==g:K-K-K-Q-Q → podział== |

</div>

Obaj mają fulla KKK-QQ z boardu plus jednego króla. ==r:Kolory tych króli nie mają znaczenia.==

### 2. Board gra za wszystkich
Pięć kart wspólnych to już najsilniejszy układ dla każdego, kto został w rozdaniu — to właśnie moja pula 8-8-8-A-K z początku. Zdarza się na tyle często, że niżej ma osobną sekcję.

### 3. Ten sam strit
Dwa strity z tą samą najwyższą kartą remisują, bez względu na kolory. Na boardzie 7♣ 6♦ 5♥ K♠ 2♣ zarówno A z 9♠ 8♠, jak i B z 9♥ 8♦ mają 9-8-7-6-5 — ta sama wysokość, więc **podział**.

### 4. Ten sam kolor
Kolory kart nie mają starszeństwa, więc dwa kolory (flushe) z tymi samymi pięcioma wartościami remisują. W praktyce prawie zawsze oznacza to, że **sam board** jest pięciokartowym kolorem. Na K♠ J♠ 8♠ 4♠ 2♠, jeśli A ma A♥ Q♦, a B ma 10♥ 9♦, żaden nie ma pika — obaj grają kolor z boardu K-J-8-4-2 i **dzielą pulę**.

==r:Ale sprawdź, zanim założysz remis:== każdy pik w twojej ręce wyższy od najniższego pika na boardzie poprawia kolor. Tutaj nawet skromna 3♠ daje K-J-8-4-3 i ==g:wygrywa całą pulę== — a A♠ daje kolor nutsowy.

### 5. Identycznie aż do ostatniego kickera
Pary i dwie pary zwykle rozstrzygają kickery — ale jeśli kickery też są równe, jest podział. Board A♦ Q♠ 9♣ 6♥ 2♠ przy A♠ K♦ kontra A♥ K♣ daje obu graczom ==g:A-A-K-Q-9== → **podział**. Gdy kickery się *różnią*, wyższy wygrywa całą pulę — jak dokładnie wygląda to porównanie, układ po układzie, wyjaśniają [zasady rozstrzygania remisów i kickera](/pl/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Co się dzieje, jeśli na stole jest strit? Gdy board gra za wszystkich

Pula może mieć kilku zwycięzców — i wcale nie trzeba do tego dwóch potworów. Gdy pięć kart wspólnych to już najlepsza możliwa piątka dla każdego, kto został w rozdaniu, ==**board gra**== i wszyscy pozostali dzielą pulę, czy to dwóch graczy, czy pięciu. Typowy przypadek to strit na stole: na 9♠ 8♦ 7♣ 6♥ 5♠, jeśli nikt nie ma dziesiątki, wszyscy grają strita z boardu i dzielą pulę.

To moje rozdanie 8-8-8-A-K: moje J♠ 10♥ i jego 5♣ 2♦ grały trójkę ósemek z boardu z kickerami as-król — identyczne piątki, czyli podział, gdy tylko obie ręce zostały odkryte. Skrajny przypadek to board w rodzaju A♠ K♠ Q♠ J♠ 10♠ (poker królewski): żadne karty zakryte go nie poprawią, więc ==g:wszyscy, którzy zostali, dzielą pulę==.

> **Kontrola:** czy *twoja* najlepsza piątka — z użyciem co najmniej jednej karty z ręki — bije własną piątkę boardu? Jeśli tak, grasz swoją rękę. Jeśli nie, gra board i najpewniej dzielisz pulę. Jak w ten sposób czytać board krok po kroku, przećwiczysz na zagadkach w [poradniku o układach pokerowych](/pl/blog/holdem-hand-rankings).

**I rzecz najważniejsza przy stole: przy showdownie z rywalem, który wciąż jest w rozdaniu, twoja ręka wygrywa tylko wtedy, gdy odkryjesz ją na stole.** Ręka wrzucona do mucka jest zwykle martwa, nawet jeśli dałaby podział (odzyskać można tylko rękę, którą da się jednoznacznie zidentyfikować, i tylko decyzją floora; Reguła turniejowa WSOP 109) — gdy grasz board, i tak musisz odkryć obie karty zakryte, inaczej tracisz swoją część puli (Reguła 172 WSOP dla gier cashowych; regulamin turniejowy WSOP powtarza to w regule 75). Kto odkrywa pierwszy i jak wygląda kolejność, wyjaśnia [poradnik o zasadach showdownu](/pl/blog/holdem-showdown-rules).

:::tip[Jeśli gra board, a ktoś stawia zakład na riverze, **pas z automatu jest błędem**. Gdy nic nie może pobić boardu, podział jest pewny, a sprawdzenie i tak oddaje ci twoją część wszystkiego, co już było w puli (heads-up połowę) — pasując, oddajesz ją za darmo. Gdy board *da się* pobić, policz częstotliwość: heads-up, przeciw zakładowi wielkości puli potrzebujesz, żeby rywal też grał board mniej więcej 2 razy na 3; przeciw zakładowi pół puli — mniej więcej w połowie przypadków (przy większej liczbie graczy w rozdaniu twoja część podziału maleje, a poprzeczka rośnie). To wysoka poprzeczka dla sprawdzenia — i niska dla pasa: przeciw zakładowi wielkości puli pas jest poprawny, gdy rywal ma prawdziwą rękę częściej niż **raz na trzy**, a na riverze, na którym board wciąż da się pobić, to normalna sytuacja.]:::

---

## 3 rzeczy, które nigdy nie rozstrzygają remisu w pokerze

![Board K♦ K♣ Q♥ Q♦ J♠, po lewej K♠ 7♣, po prawej K♥ 2♦, między nimi złoty znak równości — obaj mają tego samego fulla K-K-K-Q-Q, a kolor karty nigdy nie wyłania zwycięzcy w Texas Hold'em](/images/holdem-split-pot-suit-equals.webp "Identyczne wartości zawsze dzielą pulę — w Texas Hold'em kolory nie mają starszeństwa")

To nieporozumienia, które stoją za większością kłótni „zaraz, dlaczego podział?!”.

### ❌ „Mój kolor kart jest wyższy, więc wygrywam”
==r:Kolor w pikach **nie** bije koloru w kierach.== W Texas Hold'em kolory kart nie mają starszeństwa — ==identyczne wartości dzielą pulę i koniec==. (Na tym potykają się gracze, którzy przychodzą z gier, w których kolory *mają* starszeństwo.)

### ❌ „Mam wyższe karty w ręce, więc wygrywam”
Board 9♠ 8♦ 7♣ 6♥ 5♠ — gotowy strit. Masz A♠ K♦; rywal ma 2♣ 3♥. ==r:**Podział.**== Obaj gracie strita z boardu 9-8-7-6-5, bo ==r:twoje wysokie karty w ogóle nie wchodzą do najlepszej piątki==. Wysoka karta z ręki liczy się tylko wtedy, gdy naprawdę gra — jako część układu albo jako kicker. Gdzie przebiega ta granica, dokładnie pokazuje poradnik [czym jest kicker i kiedy gra](/pl/blog/holdem-kicker).

### ❌ „Ja użyłem obu kart, a on jednej”
==r:Liczba użytych kart z ręki nie ma znaczenia.== Liczy się tylko najsilniejsza piątka z siedmiu. ==g:Jeśli obaj gracze dochodzą do tej samej najlepszej piątki, jest podział, bez względu na to, jak do niej doszli.==

---

## Kto dostaje dodatkowy żeton? Zasada nieparzystego żetonu (odd chip)

Czasem pula nie dzieli się równo — pula 101 żetonów między dwóch graczy to po 50 i jeden żeton nadwyżki, a połówek żetonów nie ma. Zanim ten ostatni żeton trafi do kogokolwiek, rozdający rozmienia go na żetony najmniejszego nominału w grze (Reguła 20 TDA 2024): jeśli najmniejsze żetony na stole to 5, samotna 25 zamienia się w pięć piątek, które znów się dzielą, i dopiero żeton, którego nadal nie da się podzielić, to „nieparzysty żeton” (odd chip). Potem obowiązuje standardowa zasada:

> ==Nieparzysty żeton dostaje pierwszy remisujący gracz **na lewo od buttona**== (najwcześniejsze wygrywające miejsce zgodnie z ruchem wskazówek zegara od buttona).

Przy podziale na trzech z dwoma nieparzystymi żetonami po jednym dostają dwa najwcześniejsze miejsca zgodnie z ruchem wskazówek zegara. ==r:Zasady domu mogą się różnić== — niektóre kasyna przyznają nieparzysty żeton według najwyższej karty albo koloru — więc jeśli chodzi o prawdziwe pieniądze, zapytaj floora. ==g:Online oprogramowanie przydziela go automatycznie według pozycji.==

---

## Czy pule boczne też się dzielą? Remis, gdy ktoś jest all-in

Gdy gracze są all-in za różne kwoty, a pozostali dalej stawiają, żetony tworzą ==**główną pulę**== (prawo do niej mają wszyscy) plus jedną lub więcej ==**pul bocznych**== (tylko dla graczy, którzy wpłacili więcej, niż mógł wyrównać krótszy stack all-in). Każdą pulę przyznaje się — albo dzieli — ==**osobno**==, na podstawie najlepszej ręki wśród graczy uprawnionych do tej puli.

Przykład z obliczeniami: A jest all-in za 100; B i C wpłacają po 300. To daje **główną pulę 300** (100 × 3) i **pulę boczną 400** (200 + 200, tylko B i C). Board wychodzi A♦ J♥ 7♠ 4♣ 2♥:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| Gracz | Karty zakryte | Najlepsze pięć | Wynik |
|---|---|---|---|
| A (all-in) | A♠ Q♦ | ==g:A-A-Q-J-7== | dzieli główną pulę → 150 |
| B | A♣ Q♥ | ==g:A-A-Q-J-7== | dzieli główną (150) + wygrywa boczną (400) |
| C | K♦ K♠ | K-K-A-J-7 | przegrywa obie → 0 |

</div>

A i B remisują asami z identycznymi kickerami, więc ==g:dzielą główną pulę==; o pulę boczną walczą tylko B i C, a asy B biją króle C. ==r:Gracz all-in może wygrać albo podzielić tylko te pule, do których faktycznie wpłacił.== Jak te pule w ogóle powstają — limit wygranej, prawo do przebicia, kolejność showdownu — wyjaśnia [poradnik o zasadach all-in i puli bocznej](/pl/blog/holdem-all-in-rules).

---

## Czy pula dzieli się kiedyś na pół — high i low?

Nie w Texas Hold'em. Być może słyszałeś o grach „split-pot”, takich jak Omaha Hi-Lo czy Stud Hi-Lo, w których pula z założenia dzieli się między najlepszy układ wysoki i najlepszy kwalifikujący się układ niski (eight-or-better) — a układ wysoki zgarnia całość, gdy żaden niski się nie kwalifikuje. To inna rodzina gier. ==Standardowy Hold'em gra tylko na high== — pula dzieli się *wyłącznie* wtedy, gdy najlepsze układy z pięciu kart naprawdę remisują.

---

:::readnext[Czytaj dalej]
/pl/blog/holdem-showdown-rules | Showdown: kto odkrywa karty pierwszy | /images/holdem-showdown-rules-hero.webp
/pl/blog/holdem-all-in-rules | Zasady all-in i pula boczna | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. Kiedy dzieli się pulę w pokerze?**

A. Pulę dzieli się, gdy dwóch lub więcej graczy ma przy showdownie identyczny najlepszy układ z pięciu kart; żetony rozdziela się między nich po równo.

**Q. Jak dzieli się pulę w pokerze?**

A. Rozdający dzieli żetony po równo między remisujących graczy. Jeśli puli nie da się podzielić równo, nadwyżkę najpierw rozmienia się na najmniejszy nominał w grze, a ostatni nieparzysty żeton dostaje pierwszy remisujący gracz na lewo od buttona. Kolory kart nigdy nie rozstrzygają remisu, a gdy ktoś jest all-in, każdą pulę — główną i boczną — dzieli się osobno.

**Q. Czy pula się dzieli, jeśli obaj gracze mają ten sam układ?**

A. Tylko wtedy, gdy remisuje cała najlepsza piątka — ta sama para z tymi samymi kickerami albo ten sam strit, kolor czy full. Jeśli różni się choćby jeden kicker, wyższy kicker wygrywa całą pulę zamiast podziału.

**Q. Czy pula się dzieli przy fullu, stricie albo dwóch parach?**

A. Tylko wtedy, gdy obie ręce są całkowicie identyczne. Dwa fulle remisują tylko wtedy, gdy zgadzają się *i* trójka, *i* para — zwykle na boardzie z dwiema parami, na którym obaj gracze budują tę samą kombinację, dokładnie jak w sytuacji 1 powyżej. Dwa strity remisują tylko z tą samą najwyższą kartą, a dwie pary — tylko gdy zgadzają się obie pary i kicker. W każdym innym przypadku wyższy układ wygrywa całą pulę.

**Q. Co znaczy „chop” w pokerze?**

A. Chop to po prostu podział puli w żargonie przy stole. „Chop” mówią gracze, „podział puli” (split pot) to termin z regulaminu — oba oznaczają podzielenie puli po równo między remisujące ręce.

**Q. Czy kolor karty może rozstrzygnąć, kto wygrywa przy remisie?**

A. Nie. W Texas Hold'em kolory kart nie mają starszeństwa, więc identyczne układy z pięciu kart zawsze dzielą pulę, bez względu na kolor.

**Q. Kto dostaje nieparzysty żeton, gdy puli nie da się podzielić równo?**

A. Standardowa zasada: pierwszy remisujący gracz na lewo od buttona. Niektóre kasyna przyznają go według najwyższej karty albo koloru, więc zasady domu mogą się różnić — online zajmuje się tym oprogramowanie.

**Q. Czy pulę może podzielić więcej niż dwóch graczy?**

A. Tak. Jeśli trzech lub więcej graczy ma identyczny najlepszy układ z pięciu kart, pula dzieli się po równo między nich wszystkich — najczęściej wtedy, gdy board gra za wszystkich.

**Q. Jak dzieli się pulę, gdy ktoś jest all-in?**

A. Gdy gracze są all-in za różne kwoty, a pozostali dalej stawiają, pula rozpada się na główną pulę i jedną lub więcej pul bocznych; każdą przyznaje się albo dzieli osobno, na podstawie najlepszej ręki wśród graczy uprawnionych do tej konkretnej puli.

**Q. Jak obliczyć pulę boczną?**

A. Od każdego rywala możesz wygrać tylko tyle, ile sam wpłaciłeś. Jeśli A jest all-in za 100, a B i C stawiają po 300, główna pula to 100 × 3 = 300 (prawo do niej mają wszyscy trzej), a pula boczna to 200 × 2 = 400 (tylko B i C). Każda pula trafia potem do najlepszej ręki wśród graczy uprawnionych do niej.

**Q. Kto ma prawo do puli bocznej?**

A. Tylko gracze, którzy wpłacili żetony do tej konkretnej puli bocznej — czyli ci, którzy wpłacili więcej, niż mógł wyrównać krótszy stack all-in. Gracz all-in ma prawo tylko do głównej puli (plus ewentualnych wcześniejszych pul bocznych, do których wpłacił), nigdy do puli bocznej, do której nie wniósł żetonów. Każdą pulę dostaje najlepsza ręka wśród jej własnych uprawnionych graczy.

**Q. Czy można wygrać jednocześnie główną pulę i pulę boczną?**

A. Tak. Gracz z głębszym stackiem i najlepszą ręką może wygrać główną pulę i każdą pulę boczną, do której ma prawo — zgarniając wszystko. Krótki stack all-in może natomiast wygrać tylko główną pulę (i ewentualne wcześniejsze pule boczne, do których wpłacił); nigdy nie zgarnie żetonów, których nie mógł wyrównać, bez względu na siłę ręki.

**Q. Czy chop w turnieju to to samo co podział puli?**

A. Nie — to samo słowo, dwie różne rzeczy. Podziału puli przy showdownie się nie negocjuje: gdy remisujące ręce zostaną odkryte, rozdający dzieli żetony. Turniejowy „chop” to dobrowolny deal pozostałych graczy o podziale puli nagród, zwykle według liczby żetonów albo według ICM (policzysz go w [kalkulatorze ICM](/pl/calculator)), i dochodzi do niego tylko wtedy, gdy zgodzą się wszyscy. Wypłaty w turnieju działają inaczej niż w grze cashowej, gdzie każdy żeton to po prostu pieniądz.

---

## Najważniejsze wnioski

1. Tak, ==**w pokerze może być remis**== — pula się dzieli (chop), gdy dwóch lub więcej graczy ma ==**identyczne najlepsze pięć kart z siedmiu**==.
2. ==r:**Kolory kart, wyższe karty w ręce i liczba użytych kart**== nigdy nie rozstrzygają remisu.
3. ==**Nieparzysty żeton**== dostaje pierwszy remisujący gracz na lewo od buttona, a ==**pule boczne**== rozlicza się osobno od głównej puli.

Kolejność powtórzysz w [pełnym rankingu układów](/pl/blog/holdem-hand-rankings), jak rozstrzyga się remisy, sprawdzisz w [poradniku o kickerze i remisach](/pl/blog/holdem-tiebreak-rules), a klasyczną kłótnię rozstrzygniesz w artykule [czy kolor bije strita](/pl/blog/holdem-flush-vs-straight).

---

## Powiązane artykuły

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pl/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Układy pokerowe</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Układy pokerowe — od najsilniejszego do najsłabszego</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Wszystkie 10 układów z szansami, przykładami i zagadkami</div>
  </a>
  <a href="/pl/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Remisy</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kicker i rozstrzyganie remisów</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Jak kickery rozstrzygają showdown przy tym samym układzie</div>
  </a>
  <a href="/pl/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pojedynek układów</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Czy kolor bije strita?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Matematyka i boardy przy najczęstszej pomyłce</div>
  </a>
</div>
`.trim(),
};
