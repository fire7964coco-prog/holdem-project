import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-betting-actions",
  title: "Acțiunile de pariere la Texas Hold'em: check, call, raise, fold",
  seoTitle: "Check, call sau fold? — Acțiunile de pariere la poker",
  desc: "E rândul tău și rămâi blocat? Iată ce înseamnă check, call, raise și fold la poker, regula min-raise și de câte ori poți relansa într-o mână.",
  tldr: "La Texas Hold'em ai 5 acțiuni de pariere: check (pasezi gratis), pariu (deschizi runda), call/a plăti (egalezi pariul), raise/a mări (relansarea minimă egalează ultimul pariu sau ultima relansare completă) și fold/a renunța. Poți da check doar dacă în fața ta nu stă un pariu activ — preflop, de regulă, asta se întâmplă doar dacă ești big blind (sau jucătorul care a pus un straddle viu).",
  category: "rules",
  date: "2026-06-14",
  updated: "2026-10-13",
  masterUpdated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "🃏",
  tags: [
    "acțiuni de pariere poker",
    "ce înseamnă check la poker",
    "ce înseamnă call la poker",
    "regula min-raise poker",
    "de câte ori poți relansa la poker",
    "poți relansa după check",
    "string bet",
  ],
  image: "/images/holdem-betting-actions-hero.webp",
  imageAlt: "Masă de Texas Hold'em cu teancuri de jetoane pentru CHECK, CALL, RAISE și FOLD — un jucător ține cărțile închise în timp ce se decide",
  content: `
La prima mea sesiune live, dealerul a zis "e rândul tău" și am înghețat — secunde întregi de tăcere, cu toată masa uitându-se la mine.

Check? Call? Raise? Clasamentul mâinilor îl știam. Ce nu știam de fapt erau ==regulile acțiunilor în sine== — și exact acest gol îl umple ghidul de față.

La Texas Hold'em există doar ==5 acțiuni de pariere==, dar regulile din jurul lor (când e permis check-ul, cât de mare trebuie să fie o relansare, de câte ori poți relansa la loc) îi încurcă pe începători săptămâni întregi. Dacă ești complet la început, aruncă mai întâi o privire pe [ghidul complet de reguli Texas Hold'em](/ro/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") — apoi revino aici pentru regulamentul acțiune cu acțiune.

---

### Rezumat rapid

:::stripe
5 | acțiuni de pariere: check, pariu, call, raise, fold
1 BB | pariul minim de deschidere în No-Limit Hold'em
= ultima relansare completă | mărimea minimă a re-relansării (regula incrementului)
Fără plafon | la re-relansări în No-Limit — poți relansa până când cineva intră all-in
:::

## Care sunt cele 5 acțiuni de pariere la Texas Hold'em?

Fiecare decizie pe care o iei la o masă de poker e una dintre acestea cinci:

| Acțiune | Când e disponibilă | Cost în jetoane |
|--------|---------------|-----------|
| Fold (a renunța) | Oricând e rândul tău | Gratis — dar pierzi jetoanele deja puse în pot |
| Check | Doar dacă în fața ta nu stă un pariu activ (preflop: ca big blind sau ca jucătorul care a pus un straddle viu) | Gratis — pasezi fără să adaugi jetoane |
| Call (a plăti) | După ce cineva a pariat sau a relansat | Egalezi exact pariul curent |
| Pariu (bet) | Primul pariu al rundei | Suma pe care o alegi (minim = 1 big blind) |
| Raise (a mări) | După ce cineva a pariat | Cel puțin cât ultimul pariu sau ultima relansare completă, pe deasupra |

A intra ==all-in== nu e o a șasea acțiune separată — e un pariu, un call sau un raise cu toate jetoanele care ți-au rămas. Revenim la asta mai jos.

Regula cea mai importantă pe care o ratează începătorii: ==r:nu poți da check dacă în fața ta stă un pariu activ==. În clipa în care în pot sunt jetoane pe care nu le-ai egalat, opțiunile tale se reduc la fold, call sau raise.

---

## Ce înseamnă check la poker?

Un check înseamnă: ==g:"pasez — nu pariez, dar rămân în mână".==

Nu costă nimic. La pokerul live îl semnalezi bătând ușor cu degetele în masă sau spunând "check". Acțiunea trece la jucătorul din stânga ta. Dacă toți dau check, se împarte următoarea carte comună — sau, la river, se merge direct la showdown.

Check-ul nu e o predare. Îți păstrezi cărțile, îți păstrezi toate opțiunile și nu ai plătit nimic ca să vezi ce urmează.

---

## Când poți da check la poker?

Poți da check în exact două situații:

- **Nimeni nu a pariat încă** pe strada curentă (flop, turn sau river)
- **Ești big blind (BB) preflop și nimeni nu a relansat** — blindul tău contează deja ca pariu viu, așa că poți da check și vezi flopul gratis

Dacă cineva pariază după check-ul tău, ai în față o decizie nouă: fold, call sau raise. Să dai check și apoi să relansezi când un adversar pariază se numește ==check-raise== — e perfect legal la Texas Hold'em și o armă standard a jocului, nu o șmecherie.

Pentru tabloul complet, stradă cu stradă, despre cine acționează și când, vezi [ordinea de joc la Texas Hold'em](/ro/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp").

---

## Ce înseamnă call la poker? (check vs call)

Call (sau a plăti) înseamnă că ==egalezi exact pariul curent== ca să rămâi în mână. Cineva pariază $10, tu plătești $10 — nici mai mult, nici mai puțin. (Dacă ți-au rămas mai puțin de $10, poți plăti oricum: intri all-in cu cât ai.)

Check vs call e cea mai frecventă confuzie de începător, așa că iată distincția clară:

| | Check | Call |
|-|-------|------|
| Când există | În fața ta nu stă un pariu activ (preflop: ca big blind sau ca jucătorul care a pus un straddle viu) | Cineva a pariat înaintea ta |
| Cost în jetoane | Gratis | Egalezi pariul curent |
| Ce spune | "Pasez, rămân în joc" | "Plătesc ca să continui" |

Exemplu concret: ești pe flop cu K♠ 8♦. Nimeni nu a pariat, așa că dai ==check==. Jucătorul următor pariază $10. Acum opțiunile tale sunt ==call== la $10, ==raise== (la $20 sau mai mult) sau ==fold==. Check-ul a dispărut — fereastra aceea s-a închis în clipa în care a intrat pariul.

---

## Ce înseamnă fold la poker — poți renunța oricând?

A da fold (a renunța) înseamnă să arunci cărțile și să părăsești mâna. Nu plătești nimic nou, dar ==r:toate jetoanele puse deja de tine rămân în pot==.

Da — ori de câte ori e rândul tău poți renunța, chiar și înainte de a paria ceva, iar fold-ul e obligatoriu. Gratis chiar nu e: în turneu, să dai fold când în fața ta nu stă niciun pariu contează drept "fold nestandard" conform ==regulii 84 din regulamentul de turnee WSOP== și poate atrage un avertisment. Și atenție la capcană: **să dai fold când ai putea da check gratis înseamnă să arunci o mână fără motiv**. Dacă nimeni nu a pariat, dă pur și simplu check.

O regulă de etichetă live: nu da fold ==în afara rândului==. Așteaptă ca acțiunea să ajungă la tine — renunțarea în avans oferă informații jucătorilor care încă se hotărăsc, iar majoritatea cazinourilor te avertizează sau te penalizează. A ști *când* fold-ul e mutarea corectă e o pricepere aparte — ține de strategie.

---

## Ce este un min-raise? Regulile de pariu și relansare la Texas Hold'em

![Infografic cu regula min-raise la poker: un pariu de $6 impune o relansare de cel puțin $12, iar o relansare preflop la $6 impune un re-raise minim la $10](/images/holdem-betting-actions-min-raise.webp "Regula min-raise — fiecare relansare trebuie să adauge cel puțin cât ultimul pariu sau ultima relansare")

În No-Limit Hold'em (formatul pe care îl vei juca aproape mereu):

- **Pariul minim**: 1 big blind
- **Relansarea minimă (min-raise)**: cel puțin ==mărimea ultimului pariu sau a ultimei relansări complete== adăugată pe deasupra
- **Maximul**: tot stack-ul tău — acesta e "no limit"-ul

Două exemple lucrate:

| Stradă | Acțiunea de până acum | Relansarea minimă |
|--------|--------------|---------------|
| Flop | Un jucător pariază $6 | $6 în plus → $12 în total |
| Preflop (blind-uri $1/$2) | Un jucător relansează la $6 (o relansare de $4 peste blindul de $2) | $4 în plus → $10 în total |

Ideea-cheie: min-raise-ul egalează ==incrementul== ultimului pariu sau al ultimei relansări complete, nu big blind-ul. („Complet" contează când cineva intră all-in pentru mai puțin decât o relansare: după un pariu de $10 și un all-in de $14, incrementul de egalat rămâne $10, deci cea mai mică relansare e la $24.) Preflop, big blind-ul contează ca pariu de deschidere, motiv pentru care cea mai mică relansare de deschidere e la 2 big blind-uri. Când la masă e un straddle viu, straddle-ul e pariul de depășit, așa că relansarea minimă e dublul straddle-ului (regula 165 din WSOP Live Action Rules).

Două reguli de poker live care vin la pachet cu relansarea:

1. **Anunță "raise" înainte de a mișca jetoanele.** Spui "call" și apoi împingi mai multe jetoane? Declarația ta era deja obligatorie (==regula 90.d din regulamentul de turnee WSOP==) — plusul nu contează. ==String bet==-ul adevărat e altceva: un pariu sau un raise făcut în mai multe mișcări care includ o întoarcere la stack, **fără** să anunți întâi "raise" — sau un gest înșelător menit să provoace o acțiune în afara rândului (==regula 103 din regulamentul de turnee WSOP==).
2. **O singură mișcare.** Dacă nu anunți, jetoanele trebuie să intre printr-o unică mișcare înainte.

*Cât* ar trebui să relansezi (deschideri de 2,5x, 3-bet-uri de 3x, sizing în funcție de textura boardului) ține de strategie, nu de reguli — asta e altă discuție.

---

## De câte ori poți relansa la poker?

În **No-Limit Hold'em: nu există plafon**. Poți relansa, poți fi re-relansat și poți relansa din nou ("re-raise", "a relansa o relansare" — același lucru) până când cineva rămâne fără jetoane. Raise → 3-bet → 4-bet → 5-bet → all-in e o secvență legală, chiar dacă îți dă fiori.

Rămân totuși două limite:

- Fiecare re-relansare trebuie să respecte ==regula incrementului minim== de mai sus — singura excepție e all-in-ul, care poate fi mai mic
- ==r:Nu îți poți relansa propriul pariu.== Dacă pariezi și toți doar plătesc, runda se încheie — poți relansa din nou doar dacă cineva te relansează *pe tine* mai întâi. Singura excepție e preflop: când toți doar plătesc, big blind-ul (sau jucătorul cu straddle viu) are în continuare opțiunea de a relansa, pentru că miza lui contează drept pariul de deschidere (regulile 159 și 165 din WSOP Live Action Rules)

În jocurile **Fixed-Limit** fiecare rundă e plafonată (pot "plafonat"). Regulile de turneu WSOP fixează plafonul la ==un pariu plus patru relansări== (regula 100.b) — iar excepția merge invers față de ce se așteaptă aproape toată lumea: ==r:plafonul rămâne chiar dacă în mână au mai rămas doar doi jucători==. Cade abia când **întreg turneul** ajunge heads-up. La cash contează regulile casei, așa că întreabă dealerul.

---

## Ce înseamnă să intri all-in?

All-in înseamnă să pariezi ==toate jetoanele care ți-au rămas==. Poți face asta când e rândul tău, ca pariu, call sau raise — oricare dintre ele îți e permisă în acel moment.

Dacă all-in-ul tău e *mai mic* decât pariul curent, nu ești eliminat: pur și simplu concurezi pentru un ==pot principal== limitat la contribuția ta, în timp ce jetoanele în plus de la stack-urile mai mari formează un ==side pot (pot secundar)== pe care nu îl poți câștiga. Iar un all-in *mai mic decât un min-raise complet* de regulă nu redeschide relansarea pentru jucătorii care au acționat deja — o regulă subtilă care îi surprinde și pe cei experimentați.

Toată mecanica — calculul side pot-ului, cine își arată cărțile primul, table stakes — o găsești în [regulile all-in și side pot](/ro/blog/holdem-all-in-rules), iar ce se întâmplă când mâinile all-in ajung la arătarea cărților e în [regulile de showdown](/ro/blog/holdem-showdown-rules).

---

## A ști acțiunile e primul pas — a le alege ține de strategie

Ghidul ăsta îți spune ce *este* fiecare acțiune și când e *legală*. Pe care s-o alegi — când să pariezi, când un call e profitabil, când o mână bună trebuie aruncată — e cu totul alt ram de pricepere: care e cadrul fiecărei decizii, cum judeci forța brută a mâinii tale, de ce poziția la masă schimbă totul.

O regulă de bază care le economisește bani reali începătorilor până atunci: ==dacă o mână nu e destul de puternică pentru raise, fold-ul e de obicei mai bun decât call-ul.==

---

## Greșeli de pariere live pe care le văd în fiecare săptămână

Joc săptămânal o partidă live la mize mici, iar aceleași greșeli de acțiune se repetă ca un ceasornic:

### Greșeala 1 — Să plătești când ai putea da check

Primul la vorbă pe flop, nimeni nu a pariat, iar un jucător mai nou împinge jetoane **în tăcere**, "ca să dea call". Nu ai ce plăti: conform ==regulii 90.a din regulamentul de turnee WSOP== se pariază prin declarație *sau* împingând jetoane — tocmai a pariat fără să vrea. Dacă ar fi *spus* "call", ==regula 90.b.1 din regulamentul de turnee== ar fi făcut din asta un check. Când strada e încă nedeschisă, dă check — dacă nimeni din spatele tău nu pariază, vezi următoarea carte gratis.

### Greșeala 2 — "Plătesc... de fapt, raise!"

"Plătesc... de fapt, raise!" Nici gând. La pokerul live acțiunea ta se fixează în clipa în care o anunți: conform ==regulii 90.d din regulamentul de turnee WSOP==, o declarație verbală făcută la rândul tău e obligatorie. (Asta nu e string bet, apropo; string bet-ul e împingerea în mai multe mișcări cu întoarcere la stack, explicată în FAQ. Rezultatul e totuși același: contează primul cuvânt.) Am văzut dealeri judecând asta drept un simplu call, la jumătatea propoziției, de mai multe ori decât pot număra. Anunță "raise" *întâi*, apoi mișcă jetoanele.

### Greșeala 3 — Big blind-ul care aruncă un flop gratis

Toți intră la limp, acțiunea ajunge la big blind… și el dă fold. Ăla e un flop gratis aruncat la gunoi. ==g:Dacă nimeni nu a relansat și nu a pus straddle, BB-ul poate da check și vede trei cărți fără niciun cost în plus== — blindul lui e deja viu. Se întâmplă la fiecare tur de masă.

### Greșeala 4 — Jetonul singur, tăcut

În fața unui pariu de $10, un jucător aruncă în tăcere un singur jeton de $100 așteptând și rest, *și* un raise. ==Regula jetonului unic (one-chip rule)== apare exact așa în regulile WSOP (==regula 97 din regulamentul de turnee==): un singur jeton mare, nemarcat verbal, e doar un call. Ca să relansezi, "raise" trebuie rostit **înainte ca jetonul să atingă masa**.

---

:::readnext[Continuă lectura]
/ro/blog/holdem-all-in-rules | Regulile all-in și side pot | /images/holdem-all-in-rules-hero.webp
/ro/blog/holdem-showdown-rules | Regulile de showdown: cine arată și cine câștigă | /images/holdem-showdown-rules-hero.webp
:::

## Întrebări frecvente

**Q. Poți relansa după ce ai dat check la poker?**

A. Da — dacă cineva pariază după check-ul tău, poți relansa când acțiunea revine la tine. Ăsta e check-raise-ul și e complet legal. Dacă toți dau check după tine, nu există niciun pariu de relansat, iar strada pur și simplu se încheie.

**Q. Îți poți relansa propriul pariu?**

A. Nu. Dacă pariezi și adversarii doar plătesc, nu poți adăuga nimic — runda de pariere se încheie. Singura excepție e preflop: când toți doar plătesc, big blind-ul (sau jucătorul cu straddle viu) are în continuare opțiunea de a relansa, pentru că miza lui contează drept pariul de deschidere (regulile 159 și 165 din WSOP Live Action Rules). La No-Limit și Pot-Limit poți relansa din nou doar dacă acțiunea revine la tine și ai în față cel puțin o relansare completă peste pariul tău — fie că a făcut-o un singur jucător, fie că se adună din mai multe all-in-uri scurte; un singur all-in mai mic decât o relansare completă nu redeschide acțiunea. La Fixed-Limit ștacheta e mai jos: o redeschide un all-in de cel puțin 50% dintr-un pariu sau o relansare completă (TDA 2024, regula 47-B).

**Q. De câte ori poți relansa la Texas Hold'em?**

A. În No-Limit nu există plafon la numărul de relansări — re-relansarea poate continua până când un jucător intră all-in, atâta timp cât fiecare relansare respectă incrementul minim (all-in-ul poate fi mai mic). La Fixed-Limit, regulile de turneu WSOP plafonează runda la un pariu plus patru relansări (regula 100.b), iar plafonul rămâne chiar dacă în mână au mai rămas doi jucători — cade abia când întreg turneul ajunge heads-up.

**Q. Poți da fold în afara rândului?**

A. Nu ar trebui. Acțiunea trebuie să se desfășoare în sensul acelor de ceasornic, în ordine, iar un fold în afara rândului lasă informații să scape către jucătorii care încă se hotărăsc. Majoritatea cazinourilor îl tratează ca obligatoriu și pot da un avertisment sau o penalizare pentru repetare. Așteaptă ca jucătorul din dreapta ta să acționeze.

**Q. Poți da check preflop?**

A. Doar dacă propria ta miză obligatorie e pariul viu complet pe care toți ceilalți trebuie să-l egaleze și nimeni nu a relansat — de regulă big blind-ul când nimeni nu a pus straddle, sau jucătorul cu straddle viu când cineva l-a pus (regulile 159 și 165 din WSOP Live Action Rules): miza aceea contează drept pariul tău de deschidere, așa că poți da check și vezi flopul gratis. Jumătatea de pariu a small blind-ului nu contează niciodată, iar într-un pot cu straddle big blind-ul e doar încă un jucător care are un pariu în față — orice poziție a cărei miză nu e acel pariu viu trebuie preflop să plătească, să relanseze sau să renunțe.

**Q. Poți relansa după ce cineva intră all-in?**

A. Depinde de mărimea all-in-ului. Dacă all-in-ul e o relansare legală completă, acțiunea se redeschide și poți re-relansa. Dacă e *mai mic* decât un min-raise complet, jucătorii care au acționat deja pot de regulă doar să plătească sau să renunțe — acel all-in scurt nu le redeschide relansarea în majoritatea cazinourilor.

**Q. Ce este un string bet la poker?**

A. Să încerci să pariezi sau să relansezi în mai multe mișcări — întorcându-te la stack între ele — fără să fi anunțat "raise" înainte (==regula 103 din regulamentul de turnee WSOP==). A doua mișcare nu contează niciodată — rămân doar primele jetoane, judecate mai întâi după regulile de call cu un jeton sau cu mai multe jetoane (TDA 2024, regulile 44–45). Acolo unde se aplică pragul de jumătate din regula 43-A TDA 2024, se măsoară creșterea peste call, nu totalul jetoanelor: sub jumătate din cel mai mare pariu sau cea mai mare relansare completă anterioară e call; de la jumătate în sus trebuie să completezi un min-raise. O declarație de raise făcută înainte sau un all-in se judecă după regulile lor. Regula 103 din regulamentul de turnee WSOP interzice și un gest înșelător menit să provoace o acțiune în afara rândului înainte ca acțiunea ta să fie completă. Să spui "call" și apoi să adaugi nu e string bet, ci o declarație obligatorie (==regula 90.d din regulamentul de turnee WSOP==) — același efect. Anunță-ți acțiunea cu voce tare — "raise" și suma completă — sau mută toate jetoanele într-o singură mișcare (TDA 2024, regula 42).

**Q. Ce înseamnă să faci limp la poker?**

A. A face limp înseamnă să intri în pot preflop plătind doar big blind-ul, în loc să relansezi. E legal, dar aproape mereu e joc slab — există situații punctuale în care are sens, dar sunt excepția.

---

## Articole conexe

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ro/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pilon</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Regulile Texas Hold'em pentru începători</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Ghidul complet de reguli — de la blind-uri la showdown</div>
  </a>
  <a href="/ro/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Flux de joc</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Ordinea de joc la Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">De la preflop la river, cu mâini de exemplu reale</div>
  </a>
  <a href="/ro/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blind-uri</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Small blind vs big blind</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">De ce plătești înainte să-ți vezi cărțile</div>
  </a>
</div>
`.trim(),
};
