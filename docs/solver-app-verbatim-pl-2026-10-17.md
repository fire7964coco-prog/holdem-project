# Solver Polish (pl) UI strings — verbatim extraction
> 본체 보관(2026-10-17 `/pl/solver` 회차) — 솔버 레포 소스에서 읽기 전용 추출(서브 에이전트). 랜딩 라벨 인용의 정본.

Source repo: `C:/Users/하봄/Downloads/클로드-프로그램만들기/solver` (read-only). Extracted at HEAD **fb86fce** (mailbox S-107, on top of f544249 · cdb9ad0 · 8c9df8e · 6f52660 · **3153294**).
`git diff 3153294 HEAD --stat` touches only `mailbox/MAILBOX.md`, `src/outbound.ts` (it gains `"/solver": "/it/solver"`; pl line unchanged) and `src/solver-feedback-features.ts` (it removed from FEEDBACK_UNSUPPORTED_LOCALES; pl still in it). **No pl dictionary value, preset Pl field or pick() pl argument changed after 3153294** (the last pl-wording commit, «단계 7 최종 통일»), so these strings = the live pl deploy (S-106). `grep pl-todo src` = 0 hits (no untranslated placeholders left).

Method: every row of the it extraction (same file·key, same occurrence index) was re-resolved by a source parser to the `pl:` block of the same dictionary; the parser was validated by re-extracting the it column and matching the it doc for all 460 rows (only differences: NBSP rendering, see below). EN column is re-read from HEAD (no EN wording changes vs the it doc). Line numbers are HEAD (fb86fce) and point to the **pl** property.
Values are copied as source literals (quotes included; template literals show `${...}` placeholders). Polish quotes in source are „…” (U+201E … U+201D). **NBSP**: literal U+00A0 characters in source are written here as `\u00a0` (e.g. `1\u00a0755`, `3,9\u00a0GB`, `"\u00a0HoldemMaster"`); everything else is byte-for-byte. Cells containing `|` are escaped as `\|` for the table only.

Number display for pl (src/i18n.ts):
- `localizeNumber` (i18n.ts:440-447, registered as template `$n` in src/index.ts:15): for pl, if the **whole string** is a number (optionally + `bb` or `%`, regex `^(-?\d+(?:\.(\d+))?)(bb|%)?$`), it is re-rendered with `plNumberText(value, fractionDigits)`; otherwise every `digit.digit` becomes `digit,digit` (`text.replace(/(\d)\.(\d)/g, "$1,$2")`) and nothing else changes (no thousands grouping inside prose).
- `plNumberText` (i18n.ts:588-589) = `Number(value.toFixed(d)).toLocaleString("pl-PL", { useGrouping: true, minimumFractionDigits: d, maximumFractionDigits: d })` → comma decimal, and with `useGrouping: true` thousands are grouped **even for 4 digits** with U+00A0 NBSP (Node/ICU check: 1755 → `1\u00a0755`; plain `toLocaleString("pl-PL")` would give `1755`). Fraction digits are preserved from the source string (5.5 → `5,5`, 0.5 → `0,5`).
- `pctText` (i18n.ts:477-478): pl → `localizeNumber(String(s)) + "%"` (no space before %). `decimalMark()` (i18n.ts:481-492) returns `,` for pl. `numberLocaleTag` (i18n.ts:414-415) maps pl → `pl-PL`. `plPlural` (i18n.ts:577-586) uses `Intl.PluralRules("pl")` one/few/many/other.
- Preset lessons go through localizeNumber (presets.ts:193-194) — but pl lesson literals are already written with decimal commas. `{n}` in lessons = PRESETS.length = 13 (presets.ts:150-157).

## 1. Custom-spot sidebar tabs

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| SideBar.vue·customLabel | "Custom Spot" | "Własny spot" | src/components/SideBar.vue:747 |
| SideBar.vue·customLabelSuffix | " — Solve" | "" | src/components/SideBar.vue:749 |
| SideBar.vue·oopRange | "OOP Range" | "Zakres OOP" | src/components/SideBar.vue:750 |
| SideBar.vue·ipRange | "IP Range" | "Zakres IP" | src/components/SideBar.vue:751 |
| SideBar.vue·board | "Board" | "Board" | src/components/SideBar.vue:752 |
| SideBar.vue·betSize | "Bet Sizes" | "Sizingi" | src/components/SideBar.vue:753 |
| SideBar.vue·betSizeSub | "Tree Settings" | "Ustawienia drzewa" | src/components/SideBar.vue:754 |
| SideBar.vue·run | "Run Solver" | "Uruchom solver" | src/components/SideBar.vue:755 |
| SideBar.vue·stepDefaults | "Default settings" | "Ustawienia domyślne" | src/components/SideBar.vue:725 |
| SideBar.vue·stepNeeded | "Input needed" | "Wymagane dane" | src/components/SideBar.vue:726 |
| SideBar.vue·stepComplete | "Input complete" | "Dane gotowe" | src/components/SideBar.vue:727 |
| SideBar.vue·stepRunNeeded | "Run Solver" | "Uruchom solver" | src/components/SideBar.vue:728 |
| SideBar.vue·stepRunComplete | "Solver finished" | "Obliczenia zakończone" | src/components/SideBar.vue:729 |
| SideBar.vue·stepLegend | "✓ Done · ○ To do · Yellow dot = next task" | "✓ Gotowe · ○ Do zrobienia · Żółta kropka = następny krok" | src/components/SideBar.vue:730 |
| SideBar.vue·exploreLabel | "Explore" | "Odkrywaj" | src/components/SideBar.vue:731 |
| SideBar.vue·exploreLabelSuffix | " & Study" | " i ucz się" | src/components/SideBar.vue:732 |
| SideBar.vue·about | "About" | "Informacje" | src/components/SideBar.vue:733 |
| SideBar.vue·guide | "How to Use" | "Instrukcja" | src/components/SideBar.vue:734 |
| SideBar.vue·presets | "Study Spots" | "Przykłady" | src/components/SideBar.vue:735 |
| SideBar.vue·presetsBadge | "Instant" | "Od razu" | src/components/SideBar.vue:736 |
| SideBar.vue·trainer | "GTO Trainer" | "Trener GTO" | src/components/SideBar.vue:737 |
| SideBar.vue·trainerBadge | "Graded" | "EV" | src/components/SideBar.vue:738 |
| SideBar.vue·preflop | "Preflop Charts" | "Tabele preflop" | src/components/SideBar.vue:739 |
| SideBar.vue·preflopBadge | "Ranges" | "Zakresy" | src/components/SideBar.vue:741 |
| SideBar.vue·equity | "Equity Calculator" | "Kalkulator equity" | src/components/SideBar.vue:742 |
| SideBar.vue·equityBadge | "Win %" | "%" | src/components/SideBar.vue:746 |
| App.vue·about | "About" | "Informacje" | src/components/App.vue:439 |
| App.vue·guide | "How to Use — Step by Step" | "Instrukcja — krok po kroku" | src/components/App.vue:440 |
| App.vue·presets | "Study Spots — One-Click Examples" | "Przykłady — jednym kliknięciem" | src/components/App.vue:441 |
| App.vue·trainer | "GTO Trainer — See the EV of Every Decision" | "Trener GTO — sprawdź EV każdej decyzji" | src/components/App.vue:442 |
| App.vue·preflop | "Preflop Charts — Opening & Defense Ranges" | "Tabele preflop — zakresy otwarcia i obrony" | src/components/App.vue:443 |
| App.vue·equity | "Equity Calculator — Hand & Range Equity" | "Kalkulator equity — ręka lub zakres przeciwnika" | src/components/App.vue:444 |
| App.vue·oop-range | "OOP Range" | "Zakres OOP" | src/components/App.vue:445 |
| App.vue·ip-range | "IP Range" | "Zakres IP" | src/components/App.vue:446 |
| App.vue·board | "Board" | "Board" | src/components/App.vue:447 |
| App.vue·tree-config | "Tree Settings" | "Ustawienia drzewa" | src/components/App.vue:448 |
| App.vue·run-solver | "Run Solver" | "Uruchom solver" | src/components/App.vue:449 |
| App.vue·treeEdit | "Tree Preview & Edit" | "Podgląd i edycja drzewa" | src/components/App.vue:450 |
| NavBar.vue·solver | "Solver" | "Solver" | src/components/NavBar.vue:271 |
| NavBar.vue·resultsDisabledHint | "Opens when ⑤ Run Solver is finished" | "Dostępne po zakończeniu obliczeń w kroku ⑤ Uruchom solver" | src/components/NavBar.vue:270 |
| NavBar.vue·community | "HoldemMaster" | "Społeczność" | src/components/NavBar.vue:272 |
| NavBar.vue·communitySuffix | "\u00a0Community" | "\u00a0HoldemMaster" | src/components/NavBar.vue:273 |
| NavBar.vue·langSwitchLabel | "Select language" | "Wybierz język" | src/components/NavBar.vue:274 |
| nav-labels.ts·navResults (Results tab) | "Results" | "Wyniki" | src/nav-labels.ts:34 |

Notes: the PL sidebar custom-spot header renders as just **Własny spot** (suffix is empty; EN shows "Custom Spot — Solve"). The ④ tab is **Sizingi** with sub-label **Ustawienia drzewa** (unlike it, pl keeps the sub-label). Page title for ④ (App.vue) is „Ustawienia drzewa”. Tabs are numbered ①–⑤ in the UI (GuidePage step1Bold „① Zakres OOP / ② Zakres IP”, „③ Board”, „④ Sizingi (Ustawienia drzewa)”, „⑤ Uruchom solver” in §7). Community link in NavBar = "Społeczność" + "\u00a0HoldemMaster".

## 2. Study Spots (Przykłady)

Menu name: SideBar `presets` = "Przykłady" (badge "Od razu"); page title (App.vue:441) "Przykłady — jednym kliknięciem". EN: "Study Spots" / "Study Spots — One-Click Examples".

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| PresetsPage.vue·infoBtn1 | "[⚡ View results]" | "[⚡ Pokaż wyniki]" | src/components/PresetsPage.vue:384 |
| PresetsPage.vue·infoText1 | " shows the solved strategy instantly. Use " | " pokazuje strategię od razu po kliknięciu. Wybierz " | src/components/PresetsPage.vue:385 |
| PresetsPage.vue·infoBtn2 | "[Solve it yourself]" | "[Oblicz samodzielnie]" | src/components/PresetsPage.vue:386 |
| PresetsPage.vue·infoText2 | " only when you want to tweak the ranges or explore turn and river play." | " tylko wtedy, gdy chcesz zmienić zakresy lub przeanalizować grę na turnie i riverze." | src/components/PresetsPage.vue:387 |
| PresetsPage.vue·pot | "Pot" | "Pula" | src/components/PresetsPage.vue:388 |
| PresetsPage.vue·stack | "Stack" | "Stack" | src/components/PresetsPage.vue:389 |
| PresetsPage.vue·articleLink | "Read article" | "Przeczytaj artykuł" | src/components/PresetsPage.vue:390 |
| PresetsPage.vue·viewResults | "View results" | "Pokaż wyniki" | src/components/PresetsPage.vue:391 |
| PresetsPage.vue·solveYourself | "Solve it yourself" | "Oblicz samodzielnie" | src/components/PresetsPage.vue:392 |
| PresetsPage.vue·footnote | "Ranges are approximations of standard 100bb online play. Load a spot, tweak the ranges, and compare — a great way to study." | "Zakresy przybliżają standardową grę online przy stackach 100bb. Wczytaj spot, zmień zakresy i porównaj wyniki — to dobry sposób na naukę." | src/components/PresetsPage.vue:393 |
| PresetPreview.vue·backToList | "← Back" | "← Wróć" | src/components/PresetPreview.vue:363 |
| PresetPreview.vue·pot | "Pot" | "Pula" | src/components/PresetPreview.vue:364 |
| PresetPreview.vue·stack | "Stack" | "Stack" | src/components/PresetPreview.vue:365 |
| PresetPreview.vue·flopOnlyNote | "Flop strategy only. Want to click through turn and river? →" | "Tylko strategia na flopie. Chcesz przejść do turna i rivera? →" | src/components/PresetPreview.vue:366 |
| PresetPreview.vue·solveThisSpot | "Solve this spot yourself" | "Oblicz ten spot" | src/components/PresetPreview.vue:367 |
| PresetPreview.vue·readArticle | "Read the article" | "Przeczytaj artykuł" | src/components/PresetPreview.vue:368 |
| PresetPreview.vue·loadError | (e: string) => `Couldn't load the precomputed results: ${e}` | (e: string) => `Nie udało się wczytać wcześniej obliczonych wyników: ${e}` | src/components/PresetPreview.vue:369 |
| PresetPreview.vue·loading | "Loading results…" | "Wczytywanie wyników…" | src/components/PresetPreview.vue:370 |
| PresetPreview.vue·playerLabel | "Player:" | "Gracz:" | src/components/PresetPreview.vue:371 |
| PresetPreview.vue·oopHint | "This is the strategy of the player who acts first (OOP). To see the opponent (IP), set “Player” above to IP." | "To strategia gracza, który działa jako pierwszy (OOP). Aby zobaczyć strategię przeciwnika (IP), wybierz IP w polu „Gracz:” powyżej." | src/components/PresetPreview.vue:372 |

Group sub-header template (PresetsPage.vue:28-33): `OOP: {oopLabel} · IP: {ipLabel} · {L.pot} {pot}bb · {L.stack} {stack}bb` with numbers via $n (pl → comma decimal via plNumberText). Rendered PL, computed from preset data (startingPot/effectiveStack ÷ unitScale 10):
- SRP: `OOP: BB (sprawdzający) · IP: BTN (otwierający) · Pula 5,5bb · Stack 97,5bb`
- 3BP: `OOP: BB (3-betujący) · IP: BTN (sprawdzający) · Pula 22,5bb · Stack 89bb`
- BvB: `OOP: SB (otwierający) · IP: BB (sprawdzający) · Pula 6bb · Stack 97bb`
(The view-results button text inside cards is `viewResults` "Pokaż wyniki"; the ⚡ appears in the info line `infoBtn1` "[⚡ Pokaż wyniki]" and in GuidePage quickStep2Btn.)

### 2a. Group headers (categories) and seat labels — src/presets.ts

| field | EN | PL | PL line |
|---|---|---|---|
| categoryPl | "Single Raised Pot — BTN vs BB (Fundamentals)" | "Pula po jednym podbiciu (SRP) — BTN vs BB (podstawy)" | src/presets.ts:355 |
| oopLabelPl | "BB (Caller)" | "BB (sprawdzający)" | src/presets.ts:372 |
| ipLabelPl | "BTN (Opener)" | "BTN (otwierający)" | src/presets.ts:389 |
| categoryPl | "3-Bet Pot — BB 3-Bets, BTN Calls (Low SPR)" | "Pula 3-bet — BB 3-betuje, BTN sprawdza (niski SPR)" | src/presets.ts:420 |
| oopLabelPl | "BB (3-Bettor)" | "BB (3-betujący)" | src/presets.ts:437 |
| ipLabelPl | "BTN (Caller)" | "BTN (sprawdzający)" | src/presets.ts:454 |
| categoryPl | "Blind vs Blind — SB vs BB (Wide Ranges)" | "Blind przeciw blind — SB vs BB (szerokie zakresy)" | src/presets.ts:485 |
| oopLabelPl | "SB (Opener)" | "SB (otwierający)" | src/presets.ts:502 |
| ipLabelPl | "BB (Caller)" | "BB (sprawdzający)" | src/presets.ts:519 |
| startingPot (engine chips, ÷10 = bb) | 55 | 55 | src/presets.ts:401 |
| effectiveStack (engine chips, ÷10 = bb) | 975 | 975 | src/presets.ts:402 |
| startingPot (engine chips, ÷10 = bb) | 225 | 225 | src/presets.ts:466 |
| effectiveStack (engine chips, ÷10 = bb) | 890 | 890 | src/presets.ts:467 |
| startingPot (engine chips, ÷10 = bb) | 60 | 60 | src/presets.ts:531 |
| effectiveStack (engine chips, ÷10 = bb) | 970 | 970 | src/presets.ts:532 |

### 2b. All 13 presets — titles and lessons (src/presets.ts)

**1. "srp-dry-ace"** — board "Ah 7d 2c"
- title EN: "Dry Ace-High Board"
- title PL: "Suchy board z asem jako najwyższą kartą"  (presets.ts:554)
- lesson EN: "The textbook range-advantage spot. On this ace-high board BB checks 98.2% of the time on its first action (BB equity 45.1%). See which hands make up the 1.9% that bets."
- lesson PL: "Klasyczny przykład przewagi zakresu. Na tym boardzie z asem jako najwyższą kartą BB czeka w swojej pierwszej akcji w 98,2% przypadków (equity BB: 45,1%). Sprawdź, które ręce tworzą te 1,9% zakładów."  (presets.ts:566)

**2. "srp-dry-king"** — board "Ks 8d 3c"
- title EN: "Dry King-High Board"
- title PL: "Suchy board z królem jako najwyższą kartą"  (presets.ts:605)
- lesson EN: "Compare with the ace-high board. King-high still favors BTN, but there's a bit more checking. Can you tell why?"
- lesson PL: "Porównaj ten spot z boardem z asem jako najwyższą kartą. Board z królem nadal sprzyja BTN, ale częściej pojawia się czek. Potrafisz wskazać powód?"  (presets.ts:617)

**3. "srp-broadway"** — board "Qs Jd Ts"
- title EN: "Connected Broadway Board, Two-Tone"
- title PL: "Połączony board broadway, two-tone"  (presets.ts:656)
- lesson EN: "A board that looks like it hits both ranges. But BB realizes less equity here than in any of the {n} spots — 77.9% against BTN's 119.4% — and checks 99.9%. The hand-category panel shows why."
- lesson PL: "Board, który pozornie dobrze trafia oba zakresy. Tymczasem BB realizuje tu mniej equity niż w jakimkolwiek innym z {n} spotów — EQR 77,9% wobec 119,4% u BTN — i czeka w 99,9% przypadków. Panel kategorii rąk pokazuje dlaczego."  (presets.ts:668)

**4. "srp-middle-connected"** — board "9h 8h 7c"
- title EN: "Connected Middle Board, Two-Tone"
- title PL: "Połączony board ze średnimi kartami, two-tone"  (presets.ts:707)
- lesson EN: "Same BTN vs BB, but on the connected 9-8-7 BB leads 23.7% on its first action — far more than on the ace-high board. Equity still slightly favors BTN — BB has 48.5%. Check which hands lead."
- lesson PL: "Nadal BTN vs BB, ale na połączonym boardzie 9-8-7 BB stawia jako pierwszy w 23,7% przypadków — znacznie częściej niż na boardzie z asem. Equity nadal nieznacznie przemawia za BTN — BB ma 48,5%. Sprawdź, z którymi rękami BB stawia jako pierwszy."  (presets.ts:719)

**5. "srp-monotone"** — board "Qs 9s 2s"
- title EN: "Monotone Board (All One Suit)"
- title PL: "Board monotone (jeden kolor)"  (presets.ts:758)
- lesson EN: "Watch why big bets give way to small bets and checks. Notice how often even made flushes just check."
- lesson PL: "Zobacz, dlaczego duże zakłady ustępują małym zakładom i czekom. Zwróć uwagę, jak często nawet z gotowym kolorem gracz po prostu czeka."  (presets.ts:770)

**6. "srp-paired"** — board "6c 6d 3h"
- title EN: "Paired Board"
- title PL: "Sparowany board"  (presets.ts:809)
- lesson EN: "Nobody connects with this board, so the bluffing frequency goes up. Use the detail table to find which hands bet as bluffs."
- lesson PL: "Ten board słabo trafia oba zakresy, więc częstotliwość blefów rośnie. Sprawdź w tabeli szczegółowej, którymi rękami gracz blefuje."  (presets.ts:821)

**7. "srp-low-rainbow"** — board "6s 5h 2d"
- title EN: "Low Rainbow Board"
- title PL: "Niski board rainbow"  (presets.ts:864)
- lesson EN: "On the low 6-5-2, BB checks 96.8% of the time on its first action. This spot has a single flop bet size, 33% pot, and BB uses it 3.2% of the time. See which hands bet."
- lesson PL: "Na niskim boardzie 6-5-2 BB czeka w swojej pierwszej akcji w 96,8% przypadków. W tym spocie dostępny jest jeden sizing zakładu na flopie: 33% puli. BB korzysta z niego w 3,2% przypadków. Sprawdź, z którymi rękami BB stawia."  (presets.ts:875)

**8. "3bp-ace-king"** — board "Ad Ks 2h"
- title EN: "Ace-High Board, 3-Bettor's Edge"
- title PL: "Board z asem — przewaga gracza 3-betującego"  (presets.ts:914)
- lesson EN: "A flop that suits the 3-bet range, loaded with AK, AA and KK: BB, the 3-bettor, has 68.9% equity. BB bets its entire range on its first action — 57.8% at 33% pot and 42.2% at 66% pot. Compare which hands pick which size."
- lesson PL: "Flop sprzyja zakresowi 3-betu, w którym jest dużo AK, AA i KK: BB jako gracz 3-betujący ma 68,9% equity. W swojej pierwszej akcji BB stawia z całym zakresem — w 57,8% przypadków za 33% puli, a w 42,2% za 66% puli. Porównaj, które ręce wybierają poszczególne sizingi."  (presets.ts:926)

**9. "3bp-dynamic"** — board "Qh Th 7s"
- title EN: "Dynamic Two-Tone Board"
- title PL: "Dynamiczny board two-tone"  (presets.ts:965)
- lesson EN: "A 3-bet pot on a board that suits the caller as well — and yet the 3-bettor doesn't slow down: 98.4% of the range fires the same two-thirds size. See which hands make up the 0.8% that checks."
- lesson PL: "Pula 3-bet na boardzie sprzyjającym również graczowi sprawdzającemu, a mimo to gracz 3-betujący nie zwalnia: 98,4% zakresu stawia ten sam zakład za dwie trzecie puli. Sprawdź, które ręce tworzą te 0,8% czeków."  (presets.ts:984)

**10. "3bp-low"** — board "8d 5c 2s"
- title EN: "Low Dry Board"
- title PL: "Niski, suchy board"  (presets.ts:1023)
- lesson EN: "A board that largely misses the 3-bettor's range — yet overpairs and ace-high hands keep the pressure on. Equity vs fold equity."
- lesson PL: "Board w dużej mierze rozmija się z zakresem 3-betu, ale overpairy i ręce z asem jako najwyższą kartą nadal wywierają presję. Equity kontra fold equity."  (presets.ts:1035)

**11. "sb-king-mid"** — board "Kh Td 6s"
- title EN: "King-High with a Ten"
- title PL: "Król i dziesiątka na boardzie"  (presets.ts:1074)
- lesson EN: "Blind vs Blind ranges are wide, so both ranges are weak. Compare the frequencies to the BTN-vs-BB Dry King-High Board spot."
- lesson PL: "Zakresy w grze blind przeciw blind są szerokie, więc w obu jest wiele słabych rąk. Porównaj częstotliwości ze spotem BTN vs BB „Suchy board z królem jako najwyższą kartą”."  (presets.ts:1090)

**12. "sb-connected"** — board "7d 6d 5c"
- title EN: "Connected Low Board, Two-Tone"
- title PL: "Połączony niski board, two-tone"  (presets.ts:1129)
- lesson EN: "Two wide ranges collide on an ultra-connected board: two-pair hands, straights, and draws everywhere. The hand-category panel shines here."
- lesson PL: "Dwa szerokie zakresy spotykają się na mocno połączonym boardzie: pełno tu dwóch par, stritów i drawów. W tym spocie szczególnie przydaje się panel kategorii rąk."  (presets.ts:1142)

**13. "sb-paired-ace"** — board "As Ah 6d"
- title EN: "Ace-Paired Board"
- title PL: "Board z parą asów"  (presets.ts:1181)
- lesson EN: "Two aces on the board. Trips aren't rare — SB simply holds more of them (88 combos to BB's 66), so SB bets 80.1%. Who holds more aces is the whole story here."
- lesson PL: "Dwa asy na boardzie. Tripsy nie są rzadkością — SB ma ich po prostu więcej (88 kombinacji wobec 66 u BB), dlatego stawia w 80,1% przypadków. Decyduje tu to, kto ma więcej asów."  (presets.ts:1198)

Trainer filter chips (category short names) — src/trainer.ts:

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| trainer.ts·all | "All" | "Wszystkie" | src/trainer.ts:313 |
| trainer.ts·srp | "Single Raised" | "Pula SRP" | src/trainer.ts:314 |
| trainer.ts·3bp | "3-Bet Pot" | "Pula 3-bet" | src/trainer.ts:315 |
| trainer.ts·blind | "Blind vs Blind" | "Blind przeciw blind" | src/trainer.ts:316 |

## 3. Flop study (Przegląd flopów)

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| flop-study-labels.ts·title | "Flop study" | "Przegląd flopów" | src/flop-study-labels.ts:654 |
| flop-study-labels.ts·navTitle | "Flop study" | "Przegląd flopów" | src/flop-study-labels.ts:655 |
| flop-study-labels.ts·precomputedAccuracy | "Precomputed result · target error {pct}" | "Wynik obliczony wcześniej · docelowy błąd {pct}" | src/flop-study-labels.ts:656 |
| flop-study-labels.ts·board | "Board" | "Board" | src/flop-study-labels.ts:657 |
| flop-study-labels.ts·pickBoard | "Choose board" | "Wybierz board" | src/flop-study-labels.ts:658 |
| flop-study-labels.ts·closePicker | "Close" | "Zamknij" | src/flop-study-labels.ts:659 |
| flop-study-labels.ts·randomFlop | "Random" | "Losowy flop" | src/flop-study-labels.ts:660 |
| flop-study-labels.ts·changeSetup | "Change spot & board" | "Zmień spot i board" | src/flop-study-labels.ts:661 |
| flop-study-labels.ts·pickPrompt | "Choose 3 cards ({count}/3)" | "Wybierz 3 karty ({count}/3)" | src/flop-study-labels.ts:662 |
| flop-study-labels.ts·start | "Start" | "Początek" | src/flop-study-labels.ts:663 |
| flop-study-labels.ts·notReady | "Coming soon" | "Wkrótce" | src/flop-study-labels.ts:664 |
| flop-study-labels.ts·notReadyNote | "This situation has not been precomputed yet — you can solve it yourself in the solver." | "Nie ma jeszcze gotowego rozwiązania tej sytuacji. Możesz obliczyć ją samodzielnie w solverze." | src/flop-study-labels.ts:665 |
| flop-study-labels.ts·strategyTab | "Strategy" | "Strategia" | src/flop-study-labels.ts:666 |
| flop-study-labels.ts·rangeTab | "Range" | "Zakres" | src/flop-study-labels.ts:667 |
| flop-study-labels.ts·rangeGrid | "{seat} range" | "Zakres {seat}" | src/flop-study-labels.ts:668 |
| flop-study-labels.ts·rangeHelp | "Brighter = more of the hand reaches this spot" | "Jaśniejsze pole = większy udział kombinacji danej ręki docierających do tego spotu" | src/flop-study-labels.ts:669 |
| flop-study-labels.ts·filterHelp | "Click an action to show only that action in the grid" | "Kliknij akcję, aby pokazać w siatce tylko tę akcję" | src/flop-study-labels.ts:670 |
| flop-study-labels.ts·clearFilter | "Clear filter" | "Wyczyść filtr" | src/flop-study-labels.ts:671 |
| flop-study-labels.ts·fixedSizes | "Bet sizes are fixed: flop {flop}, raise {raise} (a raise close to the stack becomes all-in). Solve it yourself for other sizes." | "Sizingi są stałe: flop {flop}, przebicie {raise} (przebicie bliskie wielkości stacka staje się all-in). Inne sizingi możesz obliczyć samodzielnie." | src/flop-study-labels.ts:672 |
| flop-study-labels.ts·openInSolver | "Open in solver" | "Otwórz w solverze" | src/flop-study-labels.ts:673 |
| flop-study-labels.ts·confirmOverwrite | "This replaces the ranges, board, pot, effective stack, bet sizes and tree edits you entered in the solver with this situation. Continue?" | "Ta sytuacja zastąpi zakresy, board, pulę, efektywny stack, sizingi i zmiany w drzewie wprowadzone w solverze. Kontynuować?" | src/flop-study-labels.ts:674 |
| flop-study-labels.ts·actions | "{seat} actions" | "Akcje {seat}" | src/flop-study-labels.ts:675 |
| flop-study-labels.ts·combos | "{count} combos" | "Combo: {count}" | src/flop-study-labels.ts:676 |
| flop-study-labels.ts·strategyGrid | "{seat} strategy" | "Strategia {seat}" | src/flop-study-labels.ts:677 |
| flop-study-labels.ts·gridHelp | "Cell colour = action frequency · fill height = share of the hand that reaches this spot" | "Kolor pola = częstotliwość akcji · wysokość wypełnienia = udział kombinacji danej ręki docierających do tego spotu" | src/flop-study-labels.ts:678 |
| flop-study-labels.ts·handDetail | "Hand details" | "Szczegóły ręki" | src/flop-study-labels.ts:679 |
| flop-study-labels.ts·chooseCell | "Tap a hand in the grid to see each suit combo's frequency and EV." | "Wybierz rękę w siatce, aby zobaczyć częstotliwość i EV każdej kombinacji kolorów." | src/flop-study-labels.ts:680 |
| flop-study-labels.ts·chooseCellRange | "Tap a hand in the grid to see each suit combo's weight." | "Wybierz rękę w siatce, aby zobaczyć wagę każdej kombinacji kolorów." | src/flop-study-labels.ts:681 |
| flop-study-labels.ts·combo | "Combo" | "Combo" | src/flop-study-labels.ts:682 |
| flop-study-labels.ts·weight | "Weight" | "Waga" | src/flop-study-labels.ts:683 |
| flop-study-labels.ts·frequency | "Frequency" | "Częstotliwość" | src/flop-study-labels.ts:684 |
| flop-study-labels.ts·ev | "EV" | "EV" | src/flop-study-labels.ts:685 |
| flop-study-labels.ts·notInRange | "No combos of this hand reach this spot." | "Żadna kombinacja tej ręki nie dociera do tego spotu." | src/flop-study-labels.ts:686 |
| flop-study-labels.ts·turnNotStored | "The flop ends here. Turn play is not stored." | "Tutaj kończy się flop. Strategia na turnie nie jest zapisana." | src/flop-study-labels.ts:687 |
| flop-study-labels.ts·handOverFold | "The hand ended with a fold." | "Rozdanie zakończyło się pasem." | src/flop-study-labels.ts:688 |
| flop-study-labels.ts·handOverAllIn | "All-in and call — no more decisions." | "All-in i sprawdzenie — nie ma już decyzji do podjęcia." | src/flop-study-labels.ts:689 |

Pot-type options in Flop study come from hand-review labels (FlopStudyPage.vue:705-707 uses `R.singleRaised / R.threeBet / R.fourBet`; heading uses `R.caller / R.threeBettor`, FlopStudyPage.vue:84):

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| hand-review-labels.ts·singleRaised | "Open · Call" | "Otwarcie · Sprawdzenie" | src/hand-review-labels.ts:467 |
| hand-review-labels.ts·threeBet | "3-bet pot" | "Pula 3-bet" | src/hand-review-labels.ts:467 |
| hand-review-labels.ts·fourBet | "4-bet pot" | "Pula 4-bet" | src/hand-review-labels.ts:467 |
| hand-review-labels.ts·opener | "Opening seat" | "Pozycja otwierającego" | src/hand-review-labels.ts:466 |
| hand-review-labels.ts·caller | "Calling seat" | "Pozycja sprawdzającego" | src/hand-review-labels.ts:466 |
| hand-review-labels.ts·threeBettor | "3-betting seat" | "Pozycja 3-betującego" | src/hand-review-labels.ts:466 |
| hand-review-labels.ts·hero | "Your seat" | "Twoja pozycja" | src/hand-review-labels.ts:466 |
| hand-review-labels.ts·situation | "Situation" | "Sytuacja" | src/hand-review-labels.ts:466 |

## 4. Flop reports (Statystyki flopów)

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| flop-report-labels.ts·title | "Flop reports" | "Statystyki flopów" | src/flop-report-labels.ts:756 |
| flop-report-labels.ts·navTitle | "Flop reports" | "Statystyki flopów" | src/flop-report-labels.ts:757 |
| flop-report-labels.ts·intro | "Averages over 1,755 precomputed flops, weighted by how often each flop actually comes · target error {pct}" | "Średnie z 1\u00a0755 wcześniej obliczonych flopów, ważone rzeczywistą częstotliwością występowania każdego flopa · docelowy błąd {pct}" | src/flop-report-labels.ts:758 |
| flop-report-labels.ts·nodeFirst | "{seat} first decision" | "{seat} · pierwsza decyzja" | src/flop-report-labels.ts:759 |
| flop-report-labels.ts·nodeAfterCheck | "{seat} · after a check" | "{seat} · po czeku" | src/flop-report-labels.ts:760 |
| flop-report-labels.ts·strategyTab | "Strategy" | "Strategia" | src/flop-report-labels.ts:761 |
| flop-report-labels.ts·evTab | "EV" | "EV" | src/flop-report-labels.ts:762 |
| flop-report-labels.ts·bySize | "By size" | "Według sizingu" | src/flop-report-labels.ts:763 |
| flop-report-labels.ts·merged | "Bets merged" | "Połączone zakłady" | src/flop-report-labels.ts:764 |
| flop-report-labels.ts·betPct | "Bet {pct}" | "Zakład {pct}" | src/flop-report-labels.ts:765 |
| flop-report-labels.ts·groupBy | "Group by" | "Grupuj według" | src/flop-report-labels.ts:766 |
| flop-report-labels.ts·groupNone | "None" | "Brak" | src/flop-report-labels.ts:767 |
| flop-report-labels.ts·group_high | "High card" | "Najwyższa karta" | src/flop-report-labels.ts:768 |
| flop-report-labels.ts·group_suits | "Suits" | "Kolory" | src/flop-report-labels.ts:769 |
| flop-report-labels.ts·group_pairing | "Pairing" | "Parowanie kart" | src/flop-report-labels.ts:770 |
| flop-report-labels.ts·group_connect | "Connectedness" | "Połączenie kart" | src/flop-report-labels.ts:771 |
| flop-report-labels.ts·highKey | "{rank}-high" | "{rank} jako najwyższa karta" | src/flop-report-labels.ts:772 |
| flop-report-labels.ts·key_rainbow | "Rainbow" | "Rainbow" | src/flop-report-labels.ts:773 |
| flop-report-labels.ts·key_two-tone | "Two-tone" | "Two-tone" | src/flop-report-labels.ts:774 |
| flop-report-labels.ts·key_monotone | "Monotone" | "Monotone" | src/flop-report-labels.ts:775 |
| flop-report-labels.ts·key_unpaired | "Unpaired boards" | "Niesparowane boardy" | src/flop-report-labels.ts:776 |
| flop-report-labels.ts·key_paired | "Paired boards" | "Sparowane boardy" | src/flop-report-labels.ts:777 |
| flop-report-labels.ts·key_trips | "Trips boards" | "Boardy z trójką" | src/flop-report-labels.ts:778 |
| flop-report-labels.ts·key_connected | "Connected boards" | "Połączone boardy" | src/flop-report-labels.ts:779 |
| flop-report-labels.ts·key_semi | "Semi-connected boards" | "Częściowo połączone boardy" | src/flop-report-labels.ts:780 |
| flop-report-labels.ts·key_disconnected | "Disconnected boards" | "Niepołączone boardy" | src/flop-report-labels.ts:781 |
| flop-report-labels.ts·overall | "Overall average" | "Średnia ogólna" | src/flop-report-labels.ts:782 |
| flop-report-labels.ts·filteredAverage | "{name} average" | "Średnia: {name}" | src/flop-report-labels.ts:783 |
| flop-report-labels.ts·showAll | "Show all" | "Pokaż wszystko" | src/flop-report-labels.ts:784 |
| flop-report-labels.ts·groupHelp | "Click a group to keep only its flops in the table." | "Kliknij grupę, aby w tabeli zostały tylko należące do niej flopy." | src/flop-report-labels.ts:785 |
| flop-report-labels.ts·flopCount | "{count} flops" | "Liczba flopów: {count}" | src/flop-report-labels.ts:786 |
| flop-report-labels.ts·colFlop | "Flop" | "Flop" | src/flop-report-labels.ts:787 |
| flop-report-labels.ts·colShare | "Share" | "Udział" | src/flop-report-labels.ts:788 |
| flop-report-labels.ts·colEv | "EV (bb)" | "EV (bb)" | src/flop-report-labels.ts:789 |
| flop-report-labels.ts·colVersus | "vs average" | "Względem średniej" | src/flop-report-labels.ts:790 |
| flop-report-labels.ts·evHelp | "EV = average expected value (bb) of the player acting here. Green is above average, red is below." | "EV = średnia wartość oczekiwana (bb) gracza podejmującego tutaj decyzję. Zieleń oznacza wynik powyżej średniej, czerwień — poniżej." | src/flop-report-labels.ts:791 |
| flop-report-labels.ts·rowHelp | "Click a row to open that flop in Flop study." | "Kliknij wiersz, aby otworzyć ten flop w widoku „Przegląd flopów”." | src/flop-report-labels.ts:792 |
| flop-report-labels.ts·showMore | "Show {count} more" | "Pokaż więcej: {count}" | src/flop-report-labels.ts:793 |
| flop-report-labels.ts·summary | "{seat} · {when}: bets {pct} on average — among groups with at least {minPct} of flops, most often on {most} ({mostPct}), least often on {least} ({leastPct})." | "{seat} · {when}: średnia częstotliwość zakładów wynosi {pct}. Wśród grup obejmujących co najmniej {minPct} flopów najwyższa częstotliwość zakładów: {most} ({mostPct}). Najniższa: {least} ({leastPct})." | src/flop-report-labels.ts:794 |
| flop-report-labels.ts·whenFirst | "first decision" | "pierwsza decyzja" | src/flop-report-labels.ts:795 |
| flop-report-labels.ts·whenAfterCheck | "after a check" | "po czeku" | src/flop-report-labels.ts:796 |
| flop-report-labels.ts·notReadyNote | "This situation has not been precomputed yet." | "Nie ma jeszcze gotowego rozwiązania tej sytuacji." | src/flop-report-labels.ts:797 |

## 5. GTO Trainer (Trener GTO)

Menu: SideBar `trainer` "Trener GTO" (badge "EV"); page title App.vue:442 "Trener GTO — sprawdź EV każdej decyzji". The feature is «Trener GTO»; the brand/app name on the share card stays «HoldemMaster GTO Trainer». Daily Puzzle = «Zadanie dnia» (share card heading «Zadanie GTO na dziś»).

Header line (TrainerPage.vue:243 renders `$n(L.footerLine(decisionCount, bank.targetExploitabilityPct))`; SPOT_COUNT = 13). The pl footerLine already wraps each number in localizeNumber; with 33 nodes / 0.5 the PL screen reads: `Przykłady: 13 · węzły decyzyjne: 33 · docelowa exploitability: 0,5%`.

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| TrainerPage.vue·footerLine | (nodes: number, pct: number) => `${SPOT_COUNT} Study Spots · ${nodes} decision nodes · target exploitability ${pct}%` | (nodes: number, pct: number) => `Przykłady: ${localizeNumber(String(SPOT_COUNT))} · węzły decyzyjne: ${localizeNumber(String(nodes))} · docelowa exploitability: ${localizeNumber(String(pct))}%` | src/components/TrainerPage.vue:2772 |
| TrainerPage.vue·flopFooterLine | (spots: number, flops: string) => `${spots} precomputed spots · dealt evenly from all ${flops} real flops` | (spots: number, flops: string) => `Wcześniej obliczone spoty: ${localizeNumber(String(spots))} · równomierne losowanie ze wszystkich rzeczywistych flopów: ${flops}` | src/components/TrainerPage.vue:2822 |
| TrainerPage.vue·review | (n: number) => `Review (${n})` | (n: number) => `Powtórz błędy (${localizeNumber(String(n))})` | src/components/TrainerPage.vue:2741 |
| TrainerPage.vue·daily | "Daily Puzzle" | "Zadanie dnia" | src/components/TrainerPage.vue:2742 |
| TrainerPage.vue·dailyStreakLabel | "Daily Puzzle" | "Zadanie dnia:" | src/components/TrainerPage.vue:2743 |
| TrainerPage.vue·done | "Done" | "Gotowe" | src/components/TrainerPage.vue:2744 |
| TrainerPage.vue·solved | "Solved" | "Rozwiązano:" | src/components/TrainerPage.vue:2745 |
| TrainerPage.vue·dayStreakSuffix | "-day streak" | (n: number) => plPlural(n, { one: " dzień z rzędu", few: " dni z rzędu", many: " dni z rzędu", other: " dnia z rzędu" }) | src/components/TrainerPage.vue:2746 |
| TrainerPage.vue·bestPrefix | "/ best" | "/ rekord" | src/components/TrainerPage.vue:2747 |
| TrainerPage.vue·streakLabel | "Streak" | "Seria dobrych zagrań" | src/components/TrainerPage.vue:2748 |
| TrainerPage.vue·totalLossLabel | "Total EV loss" | "Łączna strata EV" | src/components/TrainerPage.vue:2749 |
| TrainerPage.vue·avgLossLabel | "Avg EV loss" | "Średnia strata EV" | src/components/TrainerPage.vue:2750 |
| TrainerPage.vue·goodRateLabel | "Good-play rate" | "Odsetek dobrych zagrań" | src/components/TrainerPage.vue:2751 |
| TrainerPage.vue·weaknessTitle | "Leak Finder" | "Analiza słabych punktów" | src/components/TrainerPage.vue:2752 |
| TrainerPage.vue·avgOfPot | (pct: string) => `avg ${pct}% of the pot` | (pct: string) => `średnio ${localizeNumber(String(pct))}% puli` | src/components/TrainerPage.vue:2753 |
| TrainerPage.vue·handCount | (n: number) => `(${n} hand${n === 1 ? "" : "s"})` | (n: number) => `(liczba rozdań: ${localizeNumber(String(n))})` | src/components/TrainerPage.vue:2754 |
| TrainerPage.vue·notSolved | "Not tried" | "Bez prób" | src/components/TrainerPage.vue:2755 |
| TrainerPage.vue·weakestBefore | "Biggest losses in " | "Największe straty: " | src/components/TrainerPage.vue:2756 |
| TrainerPage.vue·weakestAfter | " —" | "" | src/components/TrainerPage.vue:2757 |
| TrainerPage.vue·practiceThis | "Drill this spot type" | "Ćwicz ten typ spotu" | src/components/TrainerPage.vue:2758 |
| TrainerPage.vue·weaknessHint | "Solve 3+ hands in each category to see where you're leaking." | "Rozegraj co najmniej 3 rozdania z każdej kategorii, aby zobaczyć, gdzie tracisz najwięcej EV." | src/components/TrainerPage.vue:2759 |
| TrainerPage.vue·verdictBest | "Best play" | "Najlepsze zagranie" | src/components/TrainerPage.vue:2833 |
| TrainerPage.vue·verdictGood | "Acceptable" | "Dopuszczalne" | src/components/TrainerPage.vue:2834 |
| TrainerPage.vue·verdictMiss | "Review this spot" | "Do analizy" | src/components/TrainerPage.vue:2835 |
| TrainerPage.vue·gtoNoteBefore | "GTO mixes actions with the same hand — a low-frequency choice isn't automatically a mistake. The measure is EV loss " | "Strategia GTO może mieszać akcje z tą samą ręką. Rzadko wybierana akcja nie musi być błędem. Miarą jest strata EV " | src/components/TrainerPage.vue:2814 |
| TrainerPage.vue·gtoNoteBold | "relative to the pot" | "względem puli" | src/components/TrainerPage.vue:2816 |
| TrainerPage.vue·gtoNoteAfter | ": ≤0.35% Best play · ≤1% Acceptable · above that, Review this spot." | ": ≤0,35% — Najlepsze zagranie · ≤1% — Dopuszczalne · powyżej — Do analizy." | src/components/TrainerPage.vue:2817 |
| TrainerPage.vue·spotLimits | (pot: string, best: string, good: string) => `For this spot (${pot}bb pot) that's Best play ≤${best}bb · Acceptable ≤${good}bb.` | (pot: string, best: string, good: string) => `W tym spocie (pula ${localizeNumber(pot)}bb): Najlepsze zagranie ≤${localizeNumber(best)}bb · Dopuszczalne ≤${localizeNumber(good)}bb.` | src/components/TrainerPage.vue:2818 |
| TrainerPage.vue·judgeBasis | (pot: string, best: string, good: string) => `Judged against this spot's starting pot (${pot}bb): Best play ≤${best}bb · Acceptable ≤${good}bb.` | (pot: string, best: string, good: string) => `Ocena względem puli początkowej tego spotu (${localizeNumber(pot)}bb): Najlepsze zagranie ≤${localizeNumber(best)}bb · Dopuszczalne ≤${localizeNumber(good)}bb.` | src/components/TrainerPage.vue:2820 |
| TrainerPage.vue·mixedNote | "Mixed strategies aren't marked wrong — grading is based on the EV difference between actions." | "Strategie mieszane nie są uznawane za błąd. Ocena zależy od różnicy EV między akcjami." | src/components/TrainerPage.vue:2786 |
| TrainerPage.vue·prompt | "What's your play?" | "Jak zagrasz?" | src/components/TrainerPage.vue:2782 |
| TrainerPage.vue·bestEvTag | " · Highest EV" | " · Najwyższe EV" | src/components/TrainerPage.vue:2783 |
| TrainerPage.vue·evLoss | "EV loss" | "Strata EV" | src/components/TrainerPage.vue:2784 |
| TrainerPage.vue·mobileDetailTitle | "Frequency & EV by action" | "Częstotliwość i EV akcji" | src/components/TrainerPage.vue:2785 |
| TrainerPage.vue·toAct | "to act" | "na ruchu" | src/components/TrainerPage.vue:2775 |
| TrainerPage.vue·lineLabel | "Line:" | "Linia gry:" | src/components/TrainerPage.vue:2778 |
| TrainerPage.vue·myHand | "Your hand" | "Twoja ręka" | src/components/TrainerPage.vue:2780 |
| TrainerPage.vue·yourChoice | "Your choice" | "Twój wybór" | src/components/TrainerPage.vue:2781 |
| TrainerPage.vue·details | "Details ↓" | "Szczegóły ↓" | src/components/TrainerPage.vue:2774 |
| TrainerPage.vue·nextHand | "Next hand" | "Następne rozdanie" | src/components/TrainerPage.vue:2807 |
| TrainerPage.vue·viewFull | "View full solution" | "Pokaż pełne rozwiązanie" | src/components/TrainerPage.vue:2809 |
| TrainerPage.vue·readArticle | "Read the spot breakdown →" | "Przeczytaj omówienie spotu →" | src/components/TrainerPage.vue:2808 |
| TrainerPage.vue·resetHistoryLabel | "Reset history" | "Wyczyść historię" | src/components/TrainerPage.vue:2824 |
| TrainerPage.vue·dailyDone | "Daily Puzzle complete" | "Zadanie dnia ukończone" | src/components/TrainerPage.vue:2788 |
| TrainerPage.vue·dailyDoneDesc | "Everyone gets the same puzzle today. Post your result to compare with other players." | "Dzisiaj wszyscy otrzymują to samo zadanie. Udostępnij wynik i porównaj go z wynikami innych graczy." | src/components/TrainerPage.vue:2789 |
| TrainerPage.vue·makeCard | "Create a result card" | "Utwórz obraz wyniku" | src/components/TrainerPage.vue:2791 |
| TrainerPage.vue·boardShow | "View today's leaderboard" | "Pokaż dzisiejszy ranking" | src/components/TrainerPage.vue:2792 |
| TrainerPage.vue·boardHide | "Hide leaderboard" | "Ukryj ranking" | src/components/TrainerPage.vue:2793 |
| TrainerPage.vue·boardCount | (n: number) => `${n} player${n === 1 ? "" : "s"} today` | (n: number) => `Liczba graczy dzisiaj: ${localizeNumber(String(n))}` | src/components/TrainerPage.vue:2795 |
| TrainerPage.vue·boardMyRank | (r: number) => `My rank #${r}` | (r: number) => `Moje miejsce: #${localizeNumber(String(r))}` | src/components/TrainerPage.vue:2796 |
| TrainerPage.vue·boardLoginHint | "Sign in to put your name on the board — viewing is open to everyone." | "Zaloguj się, aby dodać swój nick do rankingu. Każdy może przeglądać wyniki." | src/components/TrainerPage.vue:2797 |
| TrainerPage.vue·shareText | "Today's GTO puzzle — try it yourself: https://solver.holdemmaster.com/?view=trainer" | "Dzisiejsze zadanie GTO — spróbuj je rozwiązać: https://solver.holdemmaster.com/?view=trainer&lang=pl" | src/components/TrainerPage.vue:2837 |
| TrainerPage.vue·localOnlyBefore | "Your progress is saved " | "Twoje postępy są zapisywane " | src/components/TrainerPage.vue:2765 |
| TrainerPage.vue·localOnlyBold | "on this device only" | "tylko na tym urządzeniu" | src/components/TrainerPage.vue:2766 |
| TrainerPage.vue·localOnlyAfter | ". Link a HoldemMaster account to pick up where you left off on any device." | ". Zaloguj się na konto HoldemMaster, aby kontynuować naukę na dowolnym urządzeniu." | src/components/TrainerPage.vue:2767 |
| TrainerPage.vue·googleSignIn | "Continue with Google" | "Kontynuuj przez Google" | src/components/TrainerPage.vue:2769 |
| TrainerPage.vue·kakaoSignIn | "Continue with Kakao" | "Kontynuuj przez Kakao" | src/components/TrainerPage.vue:2770 |
| TrainerPage.vue·telegramSignIn | "Continue with Telegram" | "Kontynuuj przez Telegram" | src/components/TrainerPage.vue:2771 |
| TrainerPage.vue·accountBefore | "Saved to " | "Konto: " | src/components/TrainerPage.vue:2760 |
| TrainerPage.vue·syncNow | "Sync now" | "Synchronizuj teraz" | src/components/TrainerPage.vue:2763 |
| TrainerPage.vue·signOutLabel | "Sign out" | "Wyloguj się" | src/components/TrainerPage.vue:2764 |

RNG toggle — src/trainer-rng-labels.ts:

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| trainer-rng-labels.ts·mode | { off: "RNG: Off", high: "RNG: High", low: "RNG: Low" } | { off: "RNG: wył.", high: "RNG: wysokie", low: "RNG: niskie" } | src/trainer-rng-labels.ts:189 |
| trainer-rng-labels.ts·modeHelp | "Random number (1–100) practice — each hand gets a number, and you pick the action that number points to. High: higher numbers mean more aggressive actions · Low: lower numbers mean more aggressive actions. Not used for the Daily Puzzle." | "Trening z liczbą losową (1–100): dla każdej ręki losowana jest liczba, a ty wybierasz przypisaną jej akcję. „RNG: wysokie”: wyższe liczby oznaczają bardziej agresywne akcje. „RNG: niskie”: niższe liczby oznaczają bardziej agresywne akcje. Tryb nie działa w zadaniu dnia." | src/trainer-rng-labels.ts:190 |
| trainer-rng-labels.ts·bandsTitle | "RNG ranges" | "Przedziały RNG" | src/trainer-rng-labels.ts:192 |
| trainer-rng-labels.ts·yourNumber | "Your number" | "Twoja liczba" | src/trainer-rng-labels.ts:193 |
| trainer-rng-labels.ts·noteBest | (action: string) => `You picked the action for this number (${action}).` | (action: string) => `Wybrana akcja odpowiada tej liczbie (${action}).` | src/trainer-rng-labels.ts:194 |
| trainer-rng-labels.ts·noteMixed | (action: string) => `Acceptable — the solver mixes this action, but this number calls for ${action}.` | (action: string) => `Dopuszczalne — solver uwzględnia wybraną akcję w strategii mieszanej, ale tej liczbie odpowiada: ${action}.` | src/trainer-rng-labels.ts:195 |
| trainer-rng-labels.ts·noteOther | (action: string) => `This number calls for ${action}.` | (action: string) => `Akcja przypisana tej liczbie: ${action}.` | src/trainer-rng-labels.ts:197 |

My spots / custom trainer — src/custom-trainer-labels.ts:

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| custom-trainer-labels.ts·tab | "My spots" | "Moje spoty" | src/custom-trainer-labels.ts:228 |
| custom-trainer-labels.ts·presetTab | "Preset practice" | "Ćwiczenia z przykładami" | src/custom-trainer-labels.ts:228 |
| custom-trainer-labels.ts·entry | "Practice this spot" | "Ćwicz ten spot" | src/custom-trainer-labels.ts:228 |
| custom-trainer-labels.ts·empty | "After solving a spot, choose [Practice this spot] on the results screen to save questions here." | "Po obliczeniu spotu wybierz [Ćwicz ten spot] na ekranie wyników, aby zapisać tutaj pytania." | src/custom-trainer-labels.ts:229 |
| custom-trainer-labels.ts·review | "Review mistakes" | "Powtórz błędy" | src/custom-trainer-labels.ts:237 |
| custom-trainer-labels.ts·practice | "Regular practice" | "Zwykły trening" | src/custom-trainer-labels.ts:237 |
| custom-trainer-labels.ts·next | "Next question" | "Następne pytanie" | src/custom-trainer-labels.ts:237 |
| custom-trainer-labels.ts·attemptCount | "Attempts in this spot: {count}" | "Liczba prób w tym spocie: {count}" | src/custom-trainer-labels.ts:237 |
| custom-trainer-labels.ts·verdictBest | "Best play" | "Najlepsze zagranie" | src/custom-trainer-labels.ts:238 |
| custom-trainer-labels.ts·verdictGood | "Acceptable" | "Dopuszczalne" | src/custom-trainer-labels.ts:238 |
| custom-trainer-labels.ts·verdictBad | "Review this spot" | "Do analizy" | src/custom-trainer-labels.ts:238 |
| custom-trainer-labels.ts·source | "Your approximate solve · Target error {target}% · Achieved {achieved}%" | "Twoje przybliżone rozwiązanie · Docelowy błąd {target}% · Osiągnięty błąd {achieved}%" | src/custom-trainer-labels.ts:231 |
| custom-trainer-labels.ts·lockAssumption | "Assumes part of the strategy is fixed" | "Założenie: część strategii jest ustalona" | src/custom-trainer-labels.ts:231 |
| custom-trainer-labels.ts·storageNote | "This device stores your 20 most recent spots and 500 latest attempts per spot. My spot results are counted separately. Saving the same spot again replaces its solve and clears its practice history." | "Na tym urządzeniu zapisuje się 20 ostatnich spotów i 500 ostatnich prób w każdym z nich. Wyniki z zakładki „Moje spoty” są liczone osobno. Ponowne zapisanie tego samego spotu zastępuje jego rozwiązanie i usuwa historię ćwiczeń." | src/custom-trainer-labels.ts:230 |
| custom-trainer-labels.ts·chooseSpot | "Saved spots" | "Zapisane spoty" | src/custom-trainer-labels.ts:233 |

Flop-trainer source / board filter — src/flop-trainer-labels.ts:

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| flop-trainer-labels.ts·sourceBasic | "Source: Basic" | "Źródło: podstawowe" | src/flop-trainer-labels.ts:258 |
| flop-trainer-labels.ts·sourceFlop | "Source: All flops" | "Źródło: wszystkie flopy" | src/flop-trainer-labels.ts:259 |
| flop-trainer-labels.ts·sourceHelp | "All flops: questions come from spots and flops pre-solved on our server (internet required). Basic: decision points from the study spots (works offline)." | "„Źródło: wszystkie flopy” — pytania pochodzą ze spotów i flopów obliczonych na naszym serwerze (wymagany internet). „Źródło: podstawowe” — decyzje z przykładów do nauki (działa offline)." | src/flop-trainer-labels.ts:260 |
| flop-trainer-labels.ts·closeOnly | "Close spots only" | "Zbliżone decyzje" | src/flop-trainer-labels.ts:262 |
| flop-trainer-labels.ts·closeHelp | "Only deals hands where the best and second-best actions are within the “Acceptable” EV margin." | "Losuje tylko ręce, dla których różnica EV między najlepszą a drugą najlepszą akcją mieści się w progu oceny „Dopuszczalne”." | src/flop-trainer-labels.ts:263 |
| flop-trainer-labels.ts·useBasic | "Practice basic questions" | "Ćwicz na podstawowych pytaniach" | src/flop-trainer-labels.ts:268 |
| flop-trainer-labels.ts·again | "Same hand again" | "Powtórz tę rękę" | src/flop-trainer-labels.ts:269 |
| flop-trainer-labels.ts·boardAll | "Board: All" | "Board: wszystkie" | src/flop-trainer-labels.ts:452 |
| flop-trainer-labels.ts·boardChip | "Board: {value}" | "Board ({value})" | src/flop-trainer-labels.ts:453 |
| flop-trainer-labels.ts·boardHelp | "Filter the flops you get by high card, suits, pairing and connectedness, or fix one specific flop." | "Filtruj flopy według najwyższej karty, kolorów, parowania i połączenia kart albo ustaw jeden konkretny flop." | src/flop-trainer-labels.ts:454 |
| flop-trainer-labels.ts·specificFlop | "Specific flop" | "Konkretny flop" | src/flop-trainer-labels.ts:456 |

Hand-review verdict labels (same three grades) — src/hand-review-labels.ts:

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| hand-review-labels.ts·best | "Best play" | "Najlepsze zagranie" | src/hand-review-labels.ts:475 |
| hand-review-labels.ts·good | "Acceptable" | "Dopuszczalne" | src/hand-review-labels.ts:475 |
| hand-review-labels.ts·mistake | "Review this play" | "Do analizy" | src/hand-review-labels.ts:475 |
| hand-review-labels.ts·totalLoss | "Total loss" | "Łączna strata EV" | src/hand-review-labels.ts:474 |

Share card (Daily Puzzle) — src/share-card.ts:

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| share-card.ts·brand | "HoldemMaster GTO Trainer" | "HoldemMaster GTO Trainer" | src/share-card.ts:217 |
| share-card.ts·tagline | "One puzzle a day · same for everyone" | "Jedno zadanie dziennie · to samo dla wszystkich" | src/share-card.ts:218 |
| share-card.ts·heading | "Daily GTO Puzzle" | "Zadanie GTO na dziś" | src/share-card.ts:219 |
| share-card.ts·result | (verdict: string) => `My result: ${verdict}` | (verdict: string) => `Mój wynik: ${verdict}` | src/share-card.ts:222 |
| share-card.ts·evLine | (bb: string, streak: number) => `EV loss ${bb}bb${streak > 1 ? ` · ${streak}-day streak` : ""}` | (bb: string, streak: number) => `Strata EV ${bb}bb${streak > 0 ? ` · ${localizeNumber(String(streak))}${plPlural(streak, { one: " dzień z rzędu", few: " dni z rzędu", many: " dni z rzędu", other: " dnia z rzędu" })}` : ""}` | src/share-card.ts:223 |
| share-card.ts·invite | "Try today's puzzle" | "Rozwiąż dzisiejsze zadanie" | src/share-card.ts:225 |

Guide wording of grading (GuidePage.vue):

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| GuidePage.vue·trainerTitle | "GTO Trainer — from watching to playing" | "Trener GTO — od oglądania do gry" | src/components/GuidePage.vue:3687 |
| GuidePage.vue·gradTerm | "How grading works" | "Jak działa ocena" | src/components/GuidePage.vue:3691 |
| GuidePage.vue·gradBefore | "You're graded not right-or-wrong but by " | "Podstawą oceny jest " | src/components/GuidePage.vue:3692 |
| GuidePage.vue·gradBold | "EV loss (bb)" | "strata EV (bb)" | src/components/GuidePage.vue:3693 |
| GuidePage.vue·gradAfter | ". GTO mixes several actions with the same hand, so a low-frequency action isn't automatically a mistake — what matters is how much EV it gives up" | ", a nie podział na dobrą i złą odpowiedź. GTO miesza kilka akcji z tą samą ręką, więc akcja o niskiej częstotliwości nie musi być błędem — liczy się to, ile EV tracisz" | src/components/GuidePage.vue:3694 |
| GuidePage.vue·verdictTerm | "Verdict thresholds" | "Progi ocen" | src/components/GuidePage.vue:3695 |
| GuidePage.vue·verdictBefore | "Measured " | "Ocena zależy od straty " | src/components/GuidePage.vue:3696 |
| GuidePage.vue·verdictBold | "relative to the pot" | "względem puli" | src/components/GuidePage.vue:3697 |
| GuidePage.vue·verdictAfter | " — up to 0.35% of the pot = Best play · up to 1% = Acceptable · beyond that = Review this spot. For example, in a 5.5bb single raised pot (SRP) the cutoffs are 0.02bb and 0.06bb; in a 22.5bb 3-bet pot they're 0.08bb and 0.23bb." | " — do 0,35% puli = Najlepsze zagranie · do 1% = Dopuszczalne · powyżej = Do analizy. Przykładowo: przy puli 5,5bb po jednym podbiciu (SRP) progi wynoszą 0,02bb i 0,06bb; przy puli 3-bet wielkości 22,5bb — 0,08bb i 0,23bb." | src/components/GuidePage.vue:3698 |
| GuidePage.vue·verdictHint | "The same 0.08bb is a big mistake in a small pot and a trivial one in a big pot. Grading in absolute bb made 3-bet pots look worse than they are, so we switched to pot-relative grading (2026-08-15). The cutoffs have floors (0.02bb / 0.05bb): solves only converge to a target exploitability of 0.5%, so differences smaller than that can't be distinguished from solver noise." | "Te same 0,08bb to duży błąd w małej puli i drobny w dużej. Ocena według bezwzględnej straty w bb zaniżała oceny w pulach 3-bet, dlatego 15.08.2026 wprowadzono ocenę względem puli. Progi mają dolne granice (0,02bb / 0,05bb): obliczenia dochodzą jedynie do docelowej exploitability 0,5%, więc mniejszych różnic nie da się odróżnić od szumu numerycznego solvera." | src/components/GuidePage.vue:3699 |
| GuidePage.vue·reviewTerm | "Review" | "Powtórka" | src/components/GuidePage.vue:3700 |
| GuidePage.vue·reviewBefore | "Hands where you lost the most EV come back via the [Review] button. By default, your history is stored " | "Przycisk [Powtórz błędy] przywraca rozdania, w których stracono najwięcej EV. Domyślnie historia jest zapisywana " | src/components/GuidePage.vue:3701 |
| GuidePage.vue·filterTerm | "Filters" | "Filtry" | src/components/GuidePage.vue:3704 |
| GuidePage.vue·filterDef | "Drill just your weak areas: single raised pots, 3-bet pots, or blind vs blind" | "Ćwicz tylko sytuacje, które sprawiają ci trudność: pule po jednym podbiciu, pule 3-bet lub grę blind przeciw blind" | src/components/GuidePage.vue:3705 |
| GuidePage.vue·myspotTerm | "My spots" | "Moje spoty" | src/components/GuidePage.vue:3706 |
| GuidePage.vue·myspotDef | "After solving a spot yourself, choose “Practice this spot” on the results screen to create questions from it and start playing them immediately in the Trainer’s “My spots” tab. Grading uses the same criteria as the Study Spots." | "Po samodzielnym obliczeniu spotu wybierz „Ćwicz ten spot” na ekranie wyników, aby utworzyć z niego pytania i od razu rozpocząć trening w zakładce „Moje spoty”. Kryteria oceny są takie same jak w przykładach." | src/components/GuidePage.vue:3707 |

## 6. Results screen

Column headers EQ / EV / EQR are hard-coded, not localized (ResultTable.vue:1227-1229 / 1267-1269: `"EQ"`, `evScale===10 ? "EV (bb)" : "EV"`, `"EQR"`); CSV header row uses "Combos","Equity","EV","EQR" literally (ResultTable.vue:1566,1614). PL action names (ActionSummary.vue:216-224, same map in ResultTable.vue:1000, ResultNav.vue:698, ResultChance.vue:289, ResultLock.vue:158): `{ Fold: "Pas", Check: "Czek", Call: "Sprawdzenie", Bet: "Zakład", Raise: "Przebicie", Allin: "All-in", "All-in": "All-in" }`. So a tile "Bet 33%" shows "Zakład …"; ActionSummary bet amounts/percent go through localizeNumber for pl (ActionSummary.vue:229-231).

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| ActionSummary.vue·combos | "combos" | "Combo" | src/components/ActionSummary.vue:85 |
| ResultTable.vue·summary | "Summary" | "Podsumowanie" | src/components/ResultTable.vue:978 |
| ResultTable.vue·all | "All" | "Wszystkie" | src/components/ResultTable.vue:987 |
| ResultTable.vue·hand | "Hand" | "Ręka" | src/components/ResultTable.vue:988 |
| ResultTable.vue·strategy | "Strategy" | "Strategia" | src/components/ResultTable.vue:989 |
| ResultTable.vue·weight | "Weight" | "Waga" | src/components/ResultTable.vue:991 |
| ResultTable.vue·weightBar | "Weight (Bar)" | "Waga (słupek)" | src/components/ResultTable.vue:990 |
| ResultTable.vue·combos | "Combos" | "Combo" | src/components/ResultTable.vue:995 |
| ResultTable.vue·comboBar | "Combos (Bar)" | "Combo (słupek)" | src/components/ResultTable.vue:994 |
| ResultTable.vue·actionPct | "Action %" | "Częstotliwość" | src/components/ResultTable.vue:984 |
| ResultTable.vue·actionEv | "Action EV" | "EV akcji" | src/components/ResultTable.vue:985 |
| ResultTable.vue·exportCsv | "Export summary as a CSV file" | "Eksportuj podsumowanie do pliku CSV" | src/components/ResultTable.vue:986 |
| ResultTable.vue·barWidth | "Bar Width:" | "Szerokość słupków:" | src/components/ResultTable.vue:979 |
| ResultTable.vue·display | "Display:" | "Wyświetlanie:" | src/components/ResultTable.vue:983 |
| ResultTable.vue·noResults | "No results" | "Brak wyników" | src/components/ResultTable.vue:998 |
| ResultMiddle.vue·modeLabels | { basics: "Basics", graphs: "Graphs", compare: "Compare", turn: "Turn", river: "River", } as Record<string, string> | { basics: "Podstawy", graphs: "Wykresy", compare: "Porównanie", turn: "Turn", river: "River", } as Record<string, string> | src/components/ResultMiddle.vue:622 |
| ResultMiddle.vue·player | "Player:" | "Gracz:" | src/components/ResultMiddle.vue:629 |
| ResultMiddle.vue·auto | (player: string) => `Auto (${player})` | (player: string) => `Auto (${player})` | src/components/ResultMiddle.vue:630 |
| ResultMiddle.vue·barHeight | "Bar Height:" | "Wysokość słupków:" | src/components/ResultMiddle.vue:631 |
| ResultMiddle.vue·suit | "Suit:" | "Kolor:" | src/components/ResultMiddle.vue:635 |
| ResultMiddle.vue·grouped | "Grouped" | "Pogrupowane" | src/components/ResultMiddle.vue:636 |
| ResultMiddle.vue·individual | "Individual" | "Pojedyncze" | src/components/ResultMiddle.vue:637 |
| ResultMiddle.vue·display | "Display:" | "Wyświetlanie:" | src/components/ResultMiddle.vue:638 |
| ResultMiddle.vue·chart | "Chart:" | "Wykres:" | src/components/ResultMiddle.vue:641 |
| ResultMiddle.vue·strategyCombos | "Strategy (Combos)" | "Strategia (Combo)" | src/components/ResultMiddle.vue:642 |
| ResultMiddle.vue·equity | "Equity" | "Equity" | src/components/ResultMiddle.vue:643 |
| HandBreakdown.vue·hands | "Hands" | "Układy" | src/components/HandBreakdown.vue:180 |
| HandBreakdown.vue·draws | "Draws" | "Drawy" | src/components/HandBreakdown.vue:182 |
| HandBreakdown.vue·noHands | "No hands to display" | "Brak rąk do wyświetlenia" | src/components/HandBreakdown.vue:181 |
| HandBreakdown.vue·noDraws | "No draw information" | "Brak informacji o drawach" | src/components/HandBreakdown.vue:183 |
| ResultNav.vue·pot | "Pot" | "Pula" | src/components/ResultNav.vue:684 |
| ResultNav.vue·stack | "Stack" | "Stack" | src/components/ResultNav.vue:685 |
| ResultNav.vue·equity | "Equity" | "Equity" | src/components/ResultNav.vue:686 |
| ResultNav.vue·win | (player: string) => `${player} wins` | (player: string) => `Wygrywa ${player}` | src/components/ResultNav.vue:687 |
| ResultNav.vue·spotPlayer | (player: string): string => ( { flop: "Flop", turn: "Turn", river: "River", end: "End", } as Record<string, string> )[player] ?? player.toUpperCase() | (player: string): string => ( { flop: "Flop", turn: "Turn", river: "River", end: "Koniec", } as Record<string, string> )[player] ?? player.toUpperCase() | src/components/ResultNav.vue:688 |
| ResultNav.vue·betPot | (label: string, formatted: string, percent: number) => `${label} ${formatted} (${percent}% pot)` | (label: string, formatted: string, percent: number) => `${label} ${formatted} (${localizeNumber(String(percent))}% puli)` | src/components/ResultNav.vue:699 |
| ResultViewer.vue·startRange | "① Start with ranges" | "① Wybierz zakresy" | src/components/ResultViewer.vue:385 |
| ResultViewer.vue·viewPresets | "View Study Spots" | "Zobacz przykłady" | src/components/ResultViewer.vue:386 |
| ResultViewer.vue·notRun | "You haven’t calculated your own results yet.\nYou can view example results directly in the “Study Spots” menu.\nTo calculate your own spot, complete ①~⑤, then press “Run Solver”." | "Nie ma jeszcze wyników twoich własnych obliczeń.\nGotowe wyniki znajdziesz w menu „Przykłady”.\nAby obliczyć własny spot, wykonaj kroki ①–⑤, a potem kliknij „Uruchom solver”." | src/components/ResultViewer.vue:387 |
| ResultViewer.vue·running | "Running the solver…" | "Solver oblicza…" | src/components/ResultViewer.vue:388 |
| RunSolver.vue·shareSpot | "🔗 Share Spot" | "🔗 Udostępnij spot" | src/components/RunSolver.vue:1175 |
| RunSolver.vue·copied | "Copied!" | "Skopiowano!" | src/components/RunSolver.vue:1174 |
| RunSolver.vue·sharedSpotBanner | "Shared spot loaded — press [Build Tree] → [Run Solver] to start solving." | "Wczytano udostępniony spot. Kliknij [Zbuduj drzewo] → [Uruchom solver], aby rozpocząć obliczenia." | src/components/RunSolver.vue:1170 |
| GuidePage.vue·rTerm1 | "Top strip" | "Górny pasek" | src/components/GuidePage.vue:3668 |
| GuidePage.vue·rDef1 | "A scene picker for the action line (flop → bet → call → turn…). Click a node to see the strategy at that point" | "Pozwala wybrać punkt w linii gry (flop → zakład → sprawdzenie → turn…). Kliknij węzeł, aby zobaczyć strategię w tym miejscu" | src/components/GuidePage.vue:3669 |
| GuidePage.vue·rTerm2 | "13×13 matrix (left)" | "Macierz 13×13 (po lewej)" | src/components/GuidePage.vue:3670 |
| GuidePage.vue·rTerm3 | "Tiles (top right)" | "Kafelki (u góry po prawej)" | src/components/GuidePage.vue:3672 |
| GuidePage.vue·rDef3 | "Action frequencies (%) and combo counts across the whole range" | "Częstotliwości akcji (%) i liczby kombinacji w całym zakresie" | src/components/GuidePage.vue:3673 |
| GuidePage.vue·rTerm4 | "Hand categories (middle right)" | "Układy i drawy (po prawej, w środku)" | src/components/GuidePage.vue:3674 |
| GuidePage.vue·rDef4 | "How each range connects with the board (top pair, draws…) — a quick read on who this board favors" | "Pokazują, jak zakresy trafiają board (top pair, drawy…) — szybko sprawdzisz, komu sprzyja ten board" | src/components/GuidePage.vue:3675 |
| GuidePage.vue·rTerm5 | "Table (bottom right)" | "Tabela (na dole po prawej)" | src/components/GuidePage.vue:3676 |
| GuidePage.vue·rDef5 | "Per-hand weight, equity, EV, and action % — click a column header to sort" | "Waga, equity, EV i częstotliwości akcji dla każdej ręki — kliknij nagłówek kolumny, aby posortować" | src/components/GuidePage.vue:3677 |

Share-link errors are pick() calls (18th arg = pl): RunSolver.vue:2033 PL "Aby udostępnić spot, najpierw wpisz zakresy OOP i IP oraz co najmniej 3 karty boardu." · RunSolver.vue:2051 PL "Link do udostępnienia jest za długi. Uprość ustawienia drzewa lub wyeksportuj je do pliku."
Scene picker: there is no separate "scene picker" label; the guide calls the top strip „Górny pasek” (rTerm1) and describes it in rDef1.

## 7. How to Use (Instrukcja), solver controls, rake, node lock, save/load

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| GuidePage.vue·quickTitle | "1-minute start — begin here if you're new" | "Zacznij w minutę — pierwszy krok dla nowych" | src/components/GuidePage.vue:3629 |
| GuidePage.vue·quickStep1Desktop | "On the left, click\u00a0" | "Po lewej kliknij\u00a0" | src/components/GuidePage.vue:3630 |
| GuidePage.vue·quickStep1Btn | "Study Spots" | "Przykłady" | src/components/GuidePage.vue:3632 |
| GuidePage.vue·quickStep2Before | "Open any spot and hit" | "Otwórz dowolny spot i kliknij" | src/components/GuidePage.vue:3634 |
| GuidePage.vue·quickStep2Btn | "[⚡ View results]" | "[⚡ Pokaż wyniki]" | src/components/GuidePage.vue:3635 |
| GuidePage.vue·quickStep2After | " — the solution appears immediately" | " — rozwiązanie pojawi się od razu" | src/components/GuidePage.vue:3636 |
| GuidePage.vue·quickStep3 | "Then use “Reading the results screen” below to make sense of the numbers" | "Następnie przeczytaj sekcję „Jak czytać wyniki” poniżej, aby zrozumieć wyświetlane liczby" | src/components/GuidePage.vue:3637 |
| GuidePage.vue·termsTitle | "Four terms are all you need" | "Wystarczą cztery pojęcia" | src/components/GuidePage.vue:3638 |
| GuidePage.vue·customTitleBefore | "Solving a custom spot — follow the " | "Własny spot — wykonaj po kolei kroki ① → ⑤ " | src/components/GuidePage.vue:3645 |
| GuidePage.vue·customTitleDesktop | "sidebar" | "na pasku bocznym" | src/components/GuidePage.vue:3646 |
| GuidePage.vue·customTitleMobile | "top “Custom Spot” menu" | "w górnym menu „Własny spot”" | src/components/GuidePage.vue:3647 |
| GuidePage.vue·customTitleAfter | " numbers ① → ⑤ in order" | "" | src/components/GuidePage.vue:3648 |
| GuidePage.vue·step1Bold | "① OOP Range / ② IP Range" | "① Zakres OOP / ② Zakres IP" | src/components/GuidePage.vue:3649 |
| GuidePage.vue·step1After | " — paint the 13×13 grid by clicking and dragging, or type it as text: " | " — zaznacz ręce w siatce 13×13, klikając i przeciągając, lub wpisz zakres jako tekst: " | src/components/GuidePage.vue:3650 |
| GuidePage.vue·step1Hint | "22+ = every pocket pair · A2s+ = A2s through AKs · KTo+ = KTo through KQo. On the grid: diagonal = pocket pairs, upper right = suited, lower left = offsuit" | "22+ = wszystkie pary z ręki · A2s+ = od A2s do AKs · KTo+ = od KTo do KQo. W siatce: przekątna = pary z ręki, prawa górna część = suited, lewa dolna = offsuit" | src/components/GuidePage.vue:3651 |
| GuidePage.vue·exampleHeader | "New here? Copy these and paste them into the range inputs (standard BTN vs BB 100bb — the same ranges the Study Spots use)" | "Pierwszy raz tutaj? Skopiuj te zakresy i wklej je do pól zakresów (standardowy BTN vs BB przy 100bb — te same zakresy co w sekcji „Przykłady”)" | src/components/GuidePage.vue:3652 |
| GuidePage.vue·exampleHeader | "New here? Copy these and paste them into the range inputs (standard BTN vs BB 100bb)" | "Pierwszy raz tutaj? Skopiuj te zakresy i wklej je do pól zakresów (standardowy BTN vs BB przy 100bb)" | src/components/GuidePage.vue:3949 |
| GuidePage.vue·exOopLabel | "OOP (BB Caller)" | "OOP (BB — sprawdzający)" | src/components/GuidePage.vue:3653 |
| GuidePage.vue·exIpLabel | "IP (BTN Opener)" | "IP (BTN — otwierający)" | src/components/GuidePage.vue:3654 |
| GuidePage.vue·step3Bold | "③ Board" | "③ Board" | src/components/GuidePage.vue:3657 |
| GuidePage.vue·step3After | " — click three flop cards, or hit “Random Flop”" | " — wybierz trzy karty flopa lub kliknij „Losowy flop”" | src/components/GuidePage.vue:3658 |
| GuidePage.vue·step4Bold | "④ Bet Sizes (Tree Settings)" | "④ Sizingi (Ustawienia drzewa)" | src/components/GuidePage.vue:3659 |
| GuidePage.vue·step4After | " — leave the defaults at first. Just check the starting pot and effective stack" | " — na początek zostaw ustawienia domyślne. Sprawdź tylko pulę początkową i efektywny stack" | src/components/GuidePage.vue:3660 |
| GuidePage.vue·step4Hint | "Custom-spot inputs are in arbitrary integer chips. To think in bb, use 10 chips = 1bb (e.g., pot 55 = 5.5bb). The Study Spots and Trainer convert on this scale automatically." | "We własnym spocie kwoty wpisujesz jako całkowite liczby żetonów, w dowolnej skali. Aby liczyć w bb, przyjmij 10 żetonów = 1bb (np. pula 55 = 5,5bb). W przykładach i trenerze przeliczenie w tej skali odbywa się automatycznie." | src/components/GuidePage.vue:3661 |
| GuidePage.vue·step4Hint | "Custom-spot inputs are in arbitrary integer chips. To think in bb, use 10 chips = 1bb (e.g., pot 55 = 5.5bb)." | "We własnym spocie kwoty wpisujesz jako całkowite liczby żetonów, w dowolnej skali. Aby liczyć w bb, przyjmij 10 żetonów = 1bb (np. pula 55 = 5,5bb)." | src/components/GuidePage.vue:3950 |
| GuidePage.vue·step5Bold1 | "⑤ Run Solver" | "⑤ Uruchom solver" | src/components/GuidePage.vue:3662 |
| GuidePage.vue·step5Mid | " — hit “Build Tree”, then “Run Solver” when it finishes. Once “Solver finished!” appears, open the " | " — kliknij „Zbuduj drzewo”, a po zbudowaniu drzewa „Uruchom solver”. Gdy pojawi się „Obliczenia zakończone!”, otwórz zakładkę " | src/components/GuidePage.vue:3663 |
| GuidePage.vue·step5Bold2 | "[Results]" | "[Wyniki]" | src/components/GuidePage.vue:3664 |
| GuidePage.vue·step5After | " tab at the top" | " u góry" | src/components/GuidePage.vue:3665 |
| GuidePage.vue·step5Hint | "Solving runs on your own machine and takes a few seconds to a few minutes. Use [Share Spot] on screen ⑤ to copy a link to your spot and ask about it in the community" | "Obliczenia odbywają się na twoim urządzeniu i trwają od kilku sekund do kilku minut. Na ekranie ⑤ użyj [🔗 Udostępnij spot], aby skopiować link do spotu i zapytać o niego w społeczności" | src/components/GuidePage.vue:3666 |
| GuidePage.vue·resultsTitle | "Reading the results screen" | "Jak czytać wyniki" | src/components/GuidePage.vue:3667 |
| BoardSelector.vue·randomFlop | "Random Flop" | "Losowy flop" | src/components/BoardSelector.vue:236 |
| BoardSelector.vue·clear | "Clear" | "Wyczyść" | src/components/BoardSelector.vue:235 |
| BoardSelector.vue·placeholder | "e.g., AsKd7c" | "np. AsKd7c" | src/components/BoardSelector.vue:234 |
| RunSolver.vue·buildTree | "Build Tree" | "Zbuduj drzewo" | src/components/RunSolver.vue:1173 |
| RunSolver.vue·runSolver | "Run Solver" | "Uruchom solver" | src/components/RunSolver.vue:1204 |
| RunSolver.vue·numThreadsLabel | "Number of threads:" | "Liczba wątków:" | src/components/RunSolver.vue:1172 |
| RunSolver.vue·precisionMode | "Precision mode:" | "Precyzja:" | src/components/RunSolver.vue:1182 |
| RunSolver.vue·fp32Label | "32-bit FP:" | "32-bit FP:" | src/components/RunSolver.vue:1189 |
| RunSolver.vue·int16Label | "16-bit integer:" | "16-bit int:" | src/components/RunSolver.vue:1190 |
| RunSolver.vue·precisionTipFp | "32-bit floating point (FP): recommended when memory usage is below the limit (3.9GB). About 7 significant digits and better performance." | "32-bitowa liczba zmiennoprzecinkowa (FP): zalecana, gdy zużycie pamięci mieści się w limicie (3,9\u00a0GB). Zapewnia około 7 cyfr znaczących i większą wydajność." | src/components/RunSolver.vue:1185 |
| RunSolver.vue·precisionTipInt | "16-bit integer: an alternative when the 32-bit FP mode exceeds the memory limit. About 4 significant digits, so it is not suitable for a target exploitability below 0.1%, and it performs worse than 32-bit FP." | "16-bitowa liczba całkowita: alternatywa, gdy tryb 32-bit FP przekracza limit pamięci. Zapewnia około 4 cyfr znaczących, więc nie nadaje się do obliczeń z docelową exploitability poniżej 0,1%. Działa wolniej niż 32-bit FP." | src/components/RunSolver.vue:1187 |
| RunSolver.vue·targetLabel | "Target exploitability:" | "Docelowa exploitability:" | src/components/RunSolver.vue:1194 |
| RunSolver.vue·exploitTipIntro | "Specifies the acceptable distance from the Nash equilibrium. A lower value gives a more accurate result, but the computation takes longer." | "Określa dopuszczalną odległość od równowagi Nasha. Mniejsza wartość daje dokładniejszy wynik, ale wydłuża obliczenia." | src/components/RunSolver.vue:1195 |
| RunSolver.vue·maxIterationsLabel | "Max iterations:" | "Maks. liczba iteracji:" | src/components/RunSolver.vue:1203 |
| RunSolver.vue·finished | "Solver finished!" | "Obliczenia zakończone!" | src/components/RunSolver.vue:1211 |
| RunSolver.vue·stop | "Stop" | "Zatrzymaj" | src/components/RunSolver.vue:1205 |
| RunSolver.vue·pause | "Pause" | "Wstrzymaj" | src/components/RunSolver.vue:1206 |
| RunSolver.vue·resume | "Resume" | "Wznów" | src/components/RunSolver.vue:1207 |
| TreeConfig.vue·startingPot | "Starting Pot:" | "Pula początkowa:" | src/components/TreeConfig.vue:1875 |
| TreeConfig.vue·effectiveStack | "Effective Stack:" | "Efektywny stack:" | src/components/TreeConfig.vue:1876 |
| TreeConfig.vue·rake | "Rake:" | "Rake:" | src/components/TreeConfig.vue:1877 |
| TreeConfig.vue·rakeCap | "Rake Cap:" | "Limit rake’u:" | src/components/TreeConfig.vue:1878 |
| TreeConfig.vue·advancedHint | "Rake · All-in · Merging — you can usually leave these unchanged" | "Rake · All-in · Łączenie sizingów — zwykle możesz zostawić te ustawienia bez zmian" | src/components/TreeConfig.vue:1870 |
| TreeConfig.vue·advancedSettings | "Advanced settings ▸" | "Ustawienia zaawansowane ▸" | src/components/TreeConfig.vue:1871 |
| TreeConfig.vue·chipNote | "Enter amounts in integer chips. To think in bb, use 10 chips = 1bb (e.g., pot 55 = 5.5bb, stack 1000 = 100bb). If you enter or edit the pot or stack yourself, results stay in your chip scale; if you load one of the Study Spots and solve without changing the pot or stack, results are converted to bb." | "Podawaj kwoty w całych żetonach. Aby liczyć w bb, przyjmij 10 żetonów = 1bb (np. pula 55 = 5,5bb, stack 1\u00a0000 = 100bb). Jeśli samodzielnie wpiszesz lub zmienisz pulę albo stack, wyniki pozostaną w twojej skali żetonów. Jeśli wczytasz spot z menu „Przykłady” i obliczysz go bez zmiany puli ani stacka, wyniki zostaną przeliczone na bb." | src/components/TreeConfig.vue:1873 |
| TreeConfig.vue·chipNote | "Enter amounts in integer chips. To think in bb, use 10 chips = 1bb (e.g., pot 55 = 5.5bb, stack 1000 = 100bb). If you enter or edit the pot or stack yourself, results stay in your chip scale." | "Podawaj kwoty w całych żetonach. Aby liczyć w bb, przyjmij 10 żetonów = 1bb (np. pula 55 = 5,5bb, stack 1\u00a0000 = 100bb). Jeśli samodzielnie wpiszesz lub zmienisz pulę albo stack, wyniki pozostaną w twojej skali żetonów." | src/components/TreeConfig.vue:2034 |
| TreeConfig.vue·addAllInLabel | "Add All-In Threshold:" | "Próg dodawania all-in:" | src/components/TreeConfig.vue:1903 |
| TreeConfig.vue·forceAllInLabel | "Force All-In Threshold:" | "Próg wymuszania all-in:" | src/components/TreeConfig.vue:1906 |
| TreeConfig.vue·mergingLabel | "Merging Threshold:" | "Próg łączenia sizingów:" | src/components/TreeConfig.vue:1914 |
| node-lock-labels.ts·title | "Lock this node’s strategy" | "Zablokuj strategię tego węzła" | src/node-lock-labels.ts:313 |
| node-lock-labels.ts·apply | "Lock and solve again" | "Zablokuj i przelicz" | src/node-lock-labels.ts:314 |
| node-lock-labels.ts·remove | "Unlock and solve again" | "Odblokuj i przelicz" | src/node-lock-labels.ts:316 |
| node-lock-labels.ts·clearAll | "Unlock all and solve again" | "Odblokuj wszystko i przelicz" | src/node-lock-labels.ts:315 |
| node-lock-labels.ts·comparison | "Before/after comparison" | "Porównanie przed i po" | src/node-lock-labels.ts:320 |
| node-lock-labels.ts·banner | "Solved with part of the strategy fixed — not an equilibrium (GTO) strategy · {count} locked nodes" | "Część strategii jest ustalona. Ten wynik nie jest strategią równowagi (GTO). Liczba zablokowanych węzłów: {count}" | src/node-lock-labels.ts:326 |
| AboutPage.vue·featureLockTitle | "Strategy locking (node lock)" | "Node locking — blokowanie strategii" | src/components/AboutPage.vue:998 |
| AboutPage.vue·featureLockDesc | "Set the opponent’s strategy and solve again — see how your strategy changes when the opponent makes mistakes" | "Ustaw strategię przeciwnika i przelicz wynik — zobacz, jak zmienia się twoja strategia, gdy przeciwnik popełnia błędy" | src/components/AboutPage.vue:999 |
| GuidePage.vue·lockTitle | "Strategy locking (node lock) — how does your strategy change when the opponent makes mistakes?" | "Node locking — jak zmienia się twoja strategia, gdy przeciwnik popełnia błędy?" | src/components/GuidePage.vue:3678 |
| DbItemPicker.vue·save | "Save" | "Zapisz" | src/components/DbItemPicker.vue:772 |
| DbItemPicker.vue·load | "Load" | "Wczytaj" | src/components/DbItemPicker.vue:770 |
| DbItemPicker.vue·overwrite | "Overwrite" | "Nadpisz" | src/components/DbItemPicker.vue:771 |
| DbItemPicker.vue·rename | "Rename" | "Zmień nazwę" | src/components/DbItemPicker.vue:773 |
| DbItemPicker.vue·deleteLabel | "Delete" | "Usuń" | src/components/DbItemPicker.vue:775 |
| DbItemPicker.vue·addGroup | "Add Group" | "Dodaj grupę" | src/components/DbItemPicker.vue:774 |
| DbItemPicker.vue·importJsonLabel | "Import JSON" | "Importuj JSON" | src/components/DbItemPicker.vue:776 |
| DbItemPicker.vue·exportJsonLabel | "Export JSON" | "Eksportuj JSON" | src/components/DbItemPicker.vue:777 |
| DbItemPicker.vue·noSavedRanges | "You have no saved ranges yet. Click “Save” and enter a name to keep your current range here. Use “Load” to bring it back next time." | "Nie masz jeszcze zapisanych zakresów. Kliknij „Zapisz” i wpisz nazwę, aby zachować tu bieżący zakres. Następnym razem wybierz „Wczytaj”, aby do niego wrócić." | src/components/DbItemPicker.vue:766 |

## 8. Hand review, login, install, AGPL credit, notice

| item | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| hand-review-labels.ts·title | "Hand review" | "Analiza rozdania" | src/hand-review-labels.ts:466 |
| hand-review-labels.ts·navTitle | "Hand review" | "Analiza rozdania" | src/hand-review-labels.ts:487 |
| hand-review-labels.ts·scopeTitle | "Review assumptions" | "Założenia analizy" | src/hand-review-labels.ts:489 |
| hand-review-labels.ts·scopeNote | "Free · Online 6-max cash, 100bb. Results may not suit pub games or tournaments. 3-bet and 4-bet pots can be reviewed for 11 seat combinations (not yet: SB 3-betting a UTG, HJ or CO open, or HJ 3-betting a UTG open). Multiway pots cannot be reviewed." | "Bezpłatnie · Gra gotówkowa 6-max online, 100bb. Wyniki mogą nie odpowiadać grom w pubach ani turniejom. Analiza pul 3-bet i 4-bet obejmuje 11 kombinacji pozycji (jeszcze niedostępne: 3-bet z SB po otwarciu z UTG, HJ lub CO oraz 3-bet z HJ po otwarciu z UTG). Analiza pul multiway jest niedostępna." | src/hand-review-labels.ts:482 |
| hand-review-labels.ts·practiceSpot | "Practice this spot" | "Ćwicz ten spot" | src/hand-review-labels.ts:490 |
| hand-review-labels.ts·chooseHand | "Your 2 cards" | "Twoje 2 karty" | src/hand-review-labels.ts:473 |
| hand-review-labels.ts·chooseFlop | "3 flop cards" | "3 karty flopa" | src/hand-review-labels.ts:473 |
| hand-review-labels.ts·multiway | "3+ players" | "Pula multiway (3+ graczy)" | src/hand-review-labels.ts:467 |
| hand-review-labels.ts·notSupported | "Cannot be reviewed" | "Analiza niedostępna" | src/hand-review-labels.ts:467 |
| saved-sync-labels.ts·invite | "Sign in to open your saved list on any phone or PC" | "Zaloguj się, aby otwierać zapisane pozycje na dowolnym telefonie lub komputerze" | src/saved-sync-labels.ts:184 |
| saved-sync-labels.ts·google | "Continue with Google" | "Kontynuuj przez Google" | src/saved-sync-labels.ts:185 |
| saved-sync-labels.ts·kakao | "Continue with Kakao" | "Kontynuuj przez Kakao" | src/saved-sync-labels.ts:186 |
| saved-sync-labels.ts·telegram | "Continue with Telegram" | "Kontynuuj przez Telegram" | src/saved-sync-labels.ts:187 |
| member-limits.ts·memberScenario | "This situation is only for free members — sign in to open it right away" | "Ta sytuacja jest dostępna tylko po zalogowaniu (konto jest bezpłatne) — zaloguj się, aby od razu ją otworzyć" | src/member-limits.ts:149 |
| member-limits.ts·saveFull | "Sign in to save more than 10 items and open your list on any phone or PC" | "Zaloguj się, aby zapisać więcej niż 10 pozycji i otwierać swoją listę na dowolnym telefonie lub komputerze" | src/member-limits.ts:147 |
| InstallBanner.vue·title | "Add to your home screen?" | "Dodać do ekranu głównego?" | src/components/InstallBanner.vue:558 |
| InstallBanner.vue·default1 | "It opens with a single tap, and " | "Otworzysz aplikację jednym dotknięciem, a " | src/components/InstallBanner.vue:564 |
| InstallBanner.vue·defaultB1 | `keeps all ${SPOT_COUNT} Study Spots and the Trainer on your device` | `wszystkie przykłady (${SPOT_COUNT}) i Trener GTO zostaną zapisane na urządzeniu` | src/components/InstallBanner.vue:565 |
| InstallBanner.vue·defaultB1 | "keeps the app on your device" | "aplikacja zostanie zapisana na urządzeniu" | src/components/InstallBanner.vue:692 |
| InstallBanner.vue·default2 | " so you can study even without an internet connection." | ", więc możesz uczyć się także bez internetu." | src/components/InstallBanner.vue:566 |
| InstallBanner.vue·default2 | " so you can use it even without an internet connection." | ", więc możesz korzystać z niej także bez internetu." | src/components/InstallBanner.vue:693 |
| InstallBanner.vue·ios1 | "Tap the " | "Dotknij przycisku " | src/components/InstallBanner.vue:567 |
| InstallBanner.vue·iosB1 | "Share button" | "„Udostępnij”" | src/components/InstallBanner.vue:568 |
| InstallBanner.vue·ios2 | " below, then choose " | " poniżej, a następnie wybierz " | src/components/InstallBanner.vue:569 |
| InstallBanner.vue·iosB2 | "“Add to Home Screen”" | "„Do ekranu głównego”" | src/components/InstallBanner.vue:570 |
| InstallBanner.vue·ios3 | ". It opens with a single tap, with the Study Spots and Trainer saved for offline use." | ". Aplikację otworzysz jednym dotknięciem, a przykłady i Trener GTO będą zapisane do użytku offline." | src/components/InstallBanner.vue:571 |
| InstallBanner.vue·ios3 | ". It opens with a single tap and works even offline." | ". Otworzysz ją jednym dotknięciem; działa także offline." | src/components/InstallBanner.vue:694 |
| InstallBanner.vue·install | "Add to Home Screen" | "Dodaj do ekranu głównego" | src/components/InstallBanner.vue:573 |
| InstallBanner.vue·later | "Later" | "Później" | src/components/InstallBanner.vue:575 |
| InstallBanner.vue·safety | "Nothing gets installed on your system — it's just a browser shortcut. It asks for no permissions, and you can remove it anytime by long-pressing the icon, just like an app." | "To tylko skrót w przeglądarce, bez instalowania programu w systemie. Nie wymaga żadnych uprawnień. Możesz go usunąć w dowolnej chwili, przytrzymując ikonę — tak jak w przypadku aplikacji." | src/components/InstallBanner.vue:577 |
| AboutPage.vue·heroTitle1 | "GTO strategy," | "Strategia GTO" | src/components/AboutPage.vue:980 |
| AboutPage.vue·heroTitle2 | "right in your browser." | "w twojej przeglądarce." | src/components/AboutPage.vue:981 |
| AboutPage.vue·heroSub1 | "Nothing to install, nothing to pay. Enter your ranges and a board," | "Bez instalacji i opłat. Wprowadź zakresy i board," | src/components/AboutPage.vue:982 |
| AboutPage.vue·heroSub2 | " and the optimal strategy is computed right on your own device." | " a optymalna strategia zostanie obliczona na twoim urządzeniu." | src/components/AboutPage.vue:983 |
| AboutPage.vue·ctaPresets | "View Study Spots" | "Zobacz przykłady" | src/components/AboutPage.vue:984 |
| AboutPage.vue·ctaTrainer | "GTO Trainer" | "Trener GTO" | src/components/AboutPage.vue:985 |
| AboutPage.vue·ctaDaily | "Daily Puzzle" | "Zadanie dnia" | src/components/AboutPage.vue:986 |
| AboutPage.vue·ctaGuide | "How to Use" | "Instrukcja" | src/components/AboutPage.vue:988 |
| AboutPage.vue·ctaInstall | "Add to Home Screen" | "Dodaj do ekranu głównego" | src/components/AboutPage.vue:989 |
| AboutPage.vue·installNote | "Installing saves the Study Spots and Trainer to your device, so you can keep practicing even when you're offline. It's a browser shortcut, not a program — it never asks for any permissions." | "Po instalacji przykłady i Trener GTO zostaną zapisane na urządzeniu, więc możesz ćwiczyć również offline. To skrót w przeglądarce, a nie osobny program — nie wymaga żadnych uprawnień." | src/components/AboutPage.vue:990 |
| AboutPage.vue·installNote | "Installing saves the app to your device, so it opens even when you're offline. It's a browser shortcut, not a program — it never asks for any permissions." | "Po instalacji aplikacja zostanie zapisana na urządzeniu, więc otworzysz ją również offline. To skrót w przeglądarce, a nie osobny program — nie wymaga żadnych uprawnień." | src/components/AboutPage.vue:1343 |
| AboutPage.vue·features | [ { title: "Free", desc: "Every feature, no usage limits" }, { title: "Offline Study", desc: "Add it to your home screen and practice without an internet connection" }, { title: "Fast Solving", desc: "Multithreaded — desktop-solver speed" }, { title: "GTO Trainer", desc: "Play spots, graded on EV loss relative to the pot" }, ] | [ { title: "Bezpłatnie", desc: "Wszystkie funkcje bez limitu użycia" }, { title: "Nauka offline", desc: "Dodaj do ekranu głównego i ćwicz bez internetu" }, { title: "Szybkie obliczenia", desc: "Wiele wątków — szybkość jak w solverze desktopowym" }, { title: "Trener GTO", desc: "Rozgrywaj spoty z oceną według straty EV względem puli" }, ] | src/components/AboutPage.vue:992 |
| AboutPage.vue·features | [ { title: "Free", desc: "Every feature, no usage limits" }, { title: "Offline", desc: "Add it to your home screen and use it without an internet connection" }, { title: "Fast Solving", desc: "Multithreaded — desktop-solver speed" }, { title: "Charts & Equity", desc: "Opening & defense ranges, plus hand and range equity" }, ] | [ { title: "Bezpłatnie", desc: "Wszystkie funkcje bez limitu użycia" }, { title: "Offline", desc: "Dodaj do ekranu głównego i korzystaj bez internetu" }, { title: "Szybkie obliczenia", desc: "Wiele wątków — szybkość jak w solverze desktopowym" }, { title: "Tabele i equity", desc: "Zakresy otwarcia i obrony oraz equity rąk i zakresów" }, ] | src/components/AboutPage.vue:1344 |
| AboutPage.vue·stepsTitle | "New here?" | "Pierwszy raz tutaj?" | src/components/AboutPage.vue:1002 |
| AboutPage.vue·steps | [ "Open any spot under Study Spots and hit [View results] — solutions appear instantly", "Check How to Use to learn how to read the results screen", "Try the GTO Trainer — it shows exactly how many bb each decision costs you", "Once you're comfortable, solve your own hands with Custom Spot (①–⑤)", ] | [ "Otwórz dowolny spot w sekcji „Przykłady” i kliknij [Pokaż wyniki] — strategia pojawi się od razu", "Otwórz sekcję „Instrukcja”, aby dowiedzieć się, jak czytać wyniki", "Wypróbuj „Trener GTO” — sprawdzisz, ile dokładnie bb kosztuje każda decyzja", "Gdy poczujesz się pewniej, przeanalizuj swoje rozdania w sekcji „Własny spot” (①–⑤)", ] | src/components/AboutPage.vue:1003 |
| AboutPage.vue·steps | [ "Skim the opening & defense ranges under Preflop Charts", "Check How to Use to learn how to read the results screen", "Once you're comfortable, solve your own hands with Custom Spot (①–⑤)", ] | [ "Przejrzyj zakresy otwarcia i obrony w sekcji „Tabele preflop”", "Otwórz sekcję „Instrukcja”, aby dowiedzieć się, jak czytać wyniki", "Gdy poczujesz się pewniej, przeanalizuj swoje rozdania w sekcji „Własny spot” (①–⑤)", ] | src/components/AboutPage.vue:1350 |
| AboutPage.vue·notes | "On iOS and Safari, browser limitations force single-threaded solving, so it runs slower — on macOS we recommend Chrome. Available memory is capped at 4GB (a WebAssembly limit), so solving big spots yourself is smoother on a PC." | "Na iOS i w Safari ograniczenia przeglądarki wymuszają obliczenia na jednym wątku, co spowalnia solver — na macOS polecamy Chrome. Dostępna pamięć jest ograniczona do 4\u00a0GB przez WebAssembly, dlatego duże spoty wygodniej obliczać na komputerze." | src/components/AboutPage.vue:1012 |
| AboutPage.vue·landingBefore | "Prefer to read up first on what a GTO solver is and how to interpret the output? See" | "Chcesz najpierw przeczytać, czym jest solver GTO i jak odczytywać jego wyniki? Zobacz" | src/components/AboutPage.vue:1009 |
| AboutPage.vue·landingLink | "the HoldemMaster solver guide" | "poradnik HoldemMaster o solverze" | src/components/AboutPage.vue:1010 |
| AboutPage.vue·creditBefore | "This app is based on" | "Aplikacja powstała na bazie projektu" | src/components/AboutPage.vue:1013 |
| AboutPage.vue·creditMid1 | " (by Wataru Inariba, AGPL-3.0), localized and enhanced by" | " (autor: Wataru Inariba, licencja AGPL-3.0). Tłumaczenia i dodatkowe funkcje przygotował zespół" | src/components/AboutPage.vue:1014 |
| AboutPage.vue·creditBrand | "HoldemMaster" | "HoldemMaster" | src/components/AboutPage.vue:1015 |
| AboutPage.vue·creditMid2 | ". The full modified source code is published on" | ". Pełny kod źródłowy zmodyfikowanej wersji jest dostępny w serwisie" | src/components/AboutPage.vue:1016 |
| AboutPage.vue·creditAfter | " under the same license." | " na tej samej licencji." | src/components/AboutPage.vue:1017 |
| GuidePage.vue·installTitle | "Install to your home screen and study offline" | "Dodaj do ekranu głównego i ucz się offline" | src/components/GuidePage.vue:3709 |
| GuidePage.vue·openBefore | "This solver is AGPL-3.0 open source (" | "Solver ma otwarty kod na licencji AGPL-3.0 (" | src/components/GuidePage.vue:3739 |

AGPL sentence assembled (AboutPage.vue:166-183; link text between creditBefore and creditMid1 is the literal "WASM Postflop" linking https://github.com/b-inary/wasm-postflop (AboutPage.vue:168-171); link text after creditMid2 is the literal "GitHub" (AboutPage.vue:183)): «Aplikacja powstała na bazie projektu WASM Postflop (autor: Wataru Inariba, licencja AGPL-3.0). Tłumaczenia i dodatkowe funkcje przygotował zespół HoldemMaster. Pełny kod źródłowy zmodyfikowanej wersji jest dostępny w serwisie GitHub na tej samej licencji.»
Note: only Kakao is hidden outside ko (MemberLoginLine.vue:15 and TrainerPage.vue:221 `v-if="isKo"`); PL shows Google + Telegram buttons.

Sidebar announcement (SiteNotice.vue) is NOT in the repo — fetched at runtime from https://holdem-review-data.review-data-worker.workers.dev/notice.json (SiteNotice.vue:14; id "2026-10-limp-soon"), fetched 2026-10-17: pl = "🔊 Wkrótce: dane dla pul limpowanych (SB limp vs BB)" · en = "🔊 Notice: Limped pots (SB limp vs BB) — coming soon". Falls back to en if the pl key is missing; truncated to 200 chars (SiteNotice.vue:37-39).

## 9. Outbound link to main site (src/outbound.ts)

`src/outbound.ts:121` → `pl: { "": "/pl" },` (comment line 120: «PL3: user supplied 2026-10-17 measurement: /pl 200, /pl/solver and /pl/community 404.»). **LOCALE_PATHS has a pl entry, but no `"/solver"` key for pl**, so `mainSiteUrl("/solver")` returns "" and the landing link is hidden (outbound.ts:124-129); `solverReviewsUrl("pl")` also returns "" (outbound.ts:132-135). AboutPage `landingLink` „poradnik HoldemMaster o solverze” therefore does not render in pl until `"/solver": "/pl/solver"` is added on the solver side (after /pl/solver goes live — same pattern as it in 8c9df8e). Trainer shareText uses https://solver.holdemmaster.com/?view=trainer&lang=pl.

## 10. Feedback form (feedbackLabels.pl)

Source: `src/solver-feedback-labels.ts` (header: «F1 approved form/error copy: ../Holdem_Project/lib/solver-reviews-i18n.ts. Do not rephrase. Regenerate with: node 도구/e2e/feedback-copy-labels.js»). Rendered by src/components/FeedbackForm.vue:115/134.
**Status: pl is still DISABLED** — `src/solver-feedback-features.ts:23` `const FEEDBACK_UNSUPPORTED_LOCALES: readonly string[] = ["ar", "pl"]; // it 해제 10-17(MB-376 · 본체 사전·SQL 등재). pl은 본체 등재 회신 뒤 해제. ar 기존 정책 유지.` The `feedback` getter (line 28-29) returns false for pl, so the review menu/form is hidden in pl until the main site registers pl in its dictionary + SQL locale check and replies; the solver then removes "pl" from this list. (`share`/`summary` switches are not locale-gated.)

`feedbackLabels.pl` (src/solver-feedback-labels.ts:764-806):

| key | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| formTitle | "How was the solver for you?" | "Jak ci się korzystało z solvera?" | src/solver-feedback-labels.ts:765 |
| tabReview | "Review" | "Opinia" | src/solver-feedback-labels.ts:766 |
| ratingLabel | "Rating (optional)" | "Ocena (opcjonalnie)" | src/solver-feedback-labels.ts:767 |
| placeholderReview | "Leave a few words — the good and the bad, as it is" | "Napisz kilka słów — szczerze, co się sprawdza, a co nie" | src/solver-feedback-labels.ts:768 |
| downsideToggle | "+ Add what could be better" | "+ Dodaj, co można poprawić" | src/solver-feedback-labels.ts:769 |
| downsidePlaceholder | "What could be better (optional)" | "Co można poprawić (opcjonalnie)" | src/solver-feedback-labels.ts:770 |
| postingAs | (name) => `Posting as ${name}` | (name) => `Autor: ${name}` | src/solver-feedback-labels.ts:771 |
| change | "Change" | "Zmień" | src/solver-feedback-labels.ts:772 |
| nicknameSave | "Save name" | "Zapisz nazwę" | src/solver-feedback-labels.ts:773 |
| nicknameCancel | "Cancel" | "Anuluj" | src/solver-feedback-labels.ts:774 |
| nicknameEmailWarn | "Your name is currently the first part of your email. Please choose a name before it goes public." | "Twoja nazwa to obecnie początek adresu e-mail. Wybierz nazwę przed jej publicznym wyświetleniem." | src/solver-feedback-labels.ts:775 |
| submit | "Post" | "Opublikuj" | src/solver-feedback-labels.ts:776 |
| submitEdit | "Update" | "Zaktualizuj" | src/solver-feedback-labels.ts:777 |
| loginTitle | "Sign in and your text is posted as written" | "Zaloguj się, a twój tekst zostanie opublikowany bez zmian" | src/solver-feedback-labels.ts:778 |
| loginGoogle | "Continue with Google" | "Kontynuuj przez Google" | src/solver-feedback-labels.ts:779 |
| loginKakao | "Continue with Kakao" | "Kontynuuj przez Kakao" | src/solver-feedback-labels.ts:780 |
| loginTelegram | "Continue with Telegram" | "Kontynuuj przez Telegram" | src/solver-feedback-labels.ts:781 |
| linkWarn | "Links can't be included" | "Nie można dodawać linków" | src/solver-feedback-labels.ts:782 |
| saved | "Posted. Thank you!" | "Opublikowano. Dziękujemy!" | src/solver-feedback-labels.ts:783 |
| errors.login | "Please sign in." | "Zaloguj się." | src/solver-feedback-labels.ts:785 |
| errors.unavailable | "Please try again in a moment." | "Spróbuj ponownie za chwilę." | src/solver-feedback-labels.ts:786 |
| errors.body_short | "Please write at least a couple of characters." | "Napisz co najmniej 2 znaki." | src/solver-feedback-labels.ts:787 |
| errors.body_long | "Up to 600 characters." | "Maksymalnie 600 znaków." | src/solver-feedback-labels.ts:788 |
| errors.downside_long | "Up to 200 characters for what could be better." | "Maksymalnie 200 znaków w opisie tego, co można poprawić." | src/solver-feedback-labels.ts:789 |
| errors.link | "Links can't be included." | "Nie można dodawać linków." | src/solver-feedback-labels.ts:790 |
| errors.rating | "Invalid rating." | "Nieprawidłowa ocena." | src/solver-feedback-labels.ts:791 |
| errors.rating_needs_body | "Please add a few words — we don't take ratings without text." | "Dodaj kilka słów — nie przyjmujemy ocen bez tekstu." | src/solver-feedback-labels.ts:792 |
| errors.rate | "Please try again in a few minutes." | "Spróbuj ponownie za kilka minut." | src/solver-feedback-labels.ts:793 |
| errors.nickname_confirm | "Please choose a name before posting." | "Wybierz nazwę przed publikacją." | src/solver-feedback-labels.ts:794 |
| errors.nickname_short | "Names need at least 2 characters." | "Nazwa musi mieć co najmniej 2 znaki." | src/solver-feedback-labels.ts:795 |
| errors.nickname_long | "Names can be up to 20 characters." | "Nazwa może mieć maksymalnie 20 znaków." | src/solver-feedback-labels.ts:796 |
| errors.nickname_link | "Names can't contain addresses or emails." | "Nazwa nie może zawierać adresów stron ani adresów e-mail." | src/solver-feedback-labels.ts:797 |
| errors.nickname_impersonation | "Names that look official or like staff aren't allowed." | "Nazwa nie może sugerować oficjalnego konta ani członka zespołu." | src/solver-feedback-labels.ts:798 |
| errors.image_type | "Only image files (jpg, png, webp, gif)." | "Tylko pliki graficzne (jpg, png, webp, gif)." | src/solver-feedback-labels.ts:799 |
| errors.image_size | "Please upload an image under 5 MB." | "Prześlij obraz mniejszy niż 5 MB." | src/solver-feedback-labels.ts:800 |
| errors.already_requested | "You've already asked for another look." | "Prośba o ponowne sprawdzenie została już wysłana." | src/solver-feedback-labels.ts:801 |
| errors.not_found | "Not found. Please refresh." | "Nie znaleziono. Odśwież stronę." | src/solver-feedback-labels.ts:802 |
| errors.bad_input | "Please try again in a moment." | "Spróbuj ponownie za chwilę." | src/solver-feedback-labels.ts:803 |
| errors.locale | "Please try again in a moment." | "Spróbuj ponownie za chwilę." | src/solver-feedback-labels.ts:804 |

App-only entry/navigation copy — `appLabels.pl` (same file, :957-964; «translated independently from the English source»):

| key | EN (verbatim source) | PL (verbatim source) | file:line |
|---|---|---|---|
| menu | "Leave a review" | "Napisz opinię" | src/solver-feedback-labels.ts:958 |
| resultPrompt | "How was it for you?" | "Jak ci się korzystało?" | src/solver-feedback-labels.ts:959 |
| thirdSolvePrompt | "You've finished your third solve. Leave a few words about your experience" | "Trzecie obliczenie zakończone. Napisz kilka słów o swoich wrażeniach" | src/solver-feedback-labels.ts:960 |
| close | "Close" | "Zamknij" | src/solver-feedback-labels.ts:961 |
| viewReviews | "View reviews" | "Przeczytaj opinie" | src/solver-feedback-labels.ts:962 |
| nicknameLabel | "Public name" | "Nazwa publiczna" | src/solver-feedback-labels.ts:963 |

## Appendix
No separate full dump was saved for pl. The extraction scripts (parser over `pl:` blocks, validated against the it doc) are in this session's scratchpad: C:/Users/하봄/AppData/Local/Temp/claude/C--Users----Downloads-Holdem-Project/19ba025e-7c76-4022-ba21-60ab5dec224e/scratchpad/ (ext.mjs, build.mjs, rows.json). pick() calls: 18th argument = pl (i18n.ts:509-528).
