# Solver Italian (it) UI strings — verbatim extraction
> 본체 보관(2026-10-17 `/it/solver` 회차) — 솔버 레포 소스에서 읽기 전용 추출(서브 에이전트). 라이브 = b10e60c와 바이트 동일 확인. 랜딩 라벨 인용의 정본.

Source repo: `C:/Users/하봄/Downloads/클로드-프로그램만들기/solver` (read-only). Extracted at HEAD **a6bb57a** (pl skeleton commit, on top of 001782c and b10e60c).
Every IT value below was also extracted from `git archive b10e60c` and diffed: **all it dictionary values and preset It fields are byte-identical between b10e60c and HEAD** (the only diff in pick() calls is a removed code comment). 7291e36 is the last it-wording commit; b10e60c/001782c are mailbox-only. So these strings = live deploy.

Values are copied as source literals (quotes included; template literals show `${...}` placeholders). Apostrophes in it are the typographic ’ (U+2019) throughout; guillemets « » are used for quotes. Line numbers are HEAD.
Number display: for it, `localizeNumber` (src/i18n.ts:445/472) turns `5.5` into `5,5` on screen; decimal mark `,` (i18n.ts:487-497). Preset lessons go through localizeNumber (presets.ts:191-192); `{n}` in lessons = PRESETS.length = 13 (presets.ts:162-165).

## 1. Custom-spot sidebar tabs

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| SideBar.vue·customLabel | "Custom Spot" | "Spot personalizzato" | src/components/SideBar.vue:714 |
| SideBar.vue·customLabelSuffix | " — Solve" | "" | src/components/SideBar.vue:716 |
| SideBar.vue·oopRange | "OOP Range" | "Range OOP" | src/components/SideBar.vue:717 |
| SideBar.vue·ipRange | "IP Range" | "Range IP" | src/components/SideBar.vue:718 |
| SideBar.vue·board | "Board" | "Board" | src/components/SideBar.vue:719 |
| SideBar.vue·betSize | "Bet Sizes" | "Dimensioni di puntata" | src/components/SideBar.vue:720 |
| SideBar.vue·betSizeSub | "Tree Settings" | "" | src/components/SideBar.vue:721 |
| SideBar.vue·run | "Run Solver" | "Avvia solver" | src/components/SideBar.vue:722 |
| SideBar.vue·stepDefaults | "Default settings" | "Impostazioni predefinite" | src/components/SideBar.vue:692 |
| SideBar.vue·stepNeeded | "Input needed" | "Dati richiesti" | src/components/SideBar.vue:693 |
| SideBar.vue·stepComplete | "Input complete" | "Dati completi" | src/components/SideBar.vue:694 |
| SideBar.vue·stepRunNeeded | "Run Solver" | "Avvia solver" | src/components/SideBar.vue:695 |
| SideBar.vue·stepRunComplete | "Solver finished" | "Calcolo completato" | src/components/SideBar.vue:696 |
| SideBar.vue·stepLegend | "✓ Done · ○ To do · Yellow dot = next task" | "✓ Fatto · ○ Da fare · Punto giallo = prossimo passo" | src/components/SideBar.vue:697 |
| SideBar.vue·exploreLabel | "Explore" | "Esplora" | src/components/SideBar.vue:698 |
| SideBar.vue·exploreLabelSuffix | " & Study" | " e studia" | src/components/SideBar.vue:699 |
| SideBar.vue·about | "About" | "Informazioni" | src/components/SideBar.vue:700 |
| SideBar.vue·guide | "How to Use" | "Guida" | src/components/SideBar.vue:701 |
| SideBar.vue·presets | "Study Spots" | "Esempi" | src/components/SideBar.vue:702 |
| SideBar.vue·presetsBadge | "Instant" | "Subito" | src/components/SideBar.vue:703 |
| SideBar.vue·trainer | "GTO Trainer" | "Trainer GTO" | src/components/SideBar.vue:704 |
| SideBar.vue·trainerBadge | "Graded" | "EV" | src/components/SideBar.vue:705 |
| SideBar.vue·preflop | "Preflop Charts" | "Range preflop" | src/components/SideBar.vue:706 |
| SideBar.vue·preflopBadge | "Ranges" | "Range" | src/components/SideBar.vue:708 |
| SideBar.vue·equity | "Equity Calculator" | "Calcolatore di equity" | src/components/SideBar.vue:709 |
| SideBar.vue·equityBadge | "Win %" | "%" | src/components/SideBar.vue:713 |
| App.vue·about | "About" | "Informazioni" | src/components/App.vue:425 |
| App.vue·guide | "How to Use — Step by Step" | "Guida — Passo dopo passo" | src/components/App.vue:426 |
| App.vue·presets | "Study Spots — One-Click Examples" | "Esempi — Risultati in un clic" | src/components/App.vue:427 |
| App.vue·trainer | "GTO Trainer — See the EV of Every Decision" | "Trainer GTO — L’EV di ogni decisione" | src/components/App.vue:428 |
| App.vue·preflop | "Preflop Charts — Opening & Defense Ranges" | "Range preflop — Apertura e difesa" | src/components/App.vue:429 |
| App.vue·equity | "Equity Calculator — Hand & Range Equity" | "Calcolatore di equity — Mano e range" | src/components/App.vue:430 |
| App.vue·oop-range | "OOP Range" | "Range OOP" | src/components/App.vue:431 |
| App.vue·ip-range | "IP Range" | "Range IP" | src/components/App.vue:432 |
| App.vue·board | "Board" | "Board" | src/components/App.vue:433 |
| App.vue·tree-config | "Tree Settings" | "Impostazioni dell’albero" | src/components/App.vue:434 |
| App.vue·run-solver | "Run Solver" | "Avvia solver" | src/components/App.vue:435 |
| App.vue·treeEdit | "Tree Preview & Edit" | "Anteprima e modifica dell’albero" | src/components/App.vue:436 |
| NavBar.vue·solver | "Solver" | "Solver" | src/components/NavBar.vue:264 |
| NavBar.vue·resultsDisabledHint | "Opens when ⑤ Run Solver is finished" | "Disponibile al termine del calcolo in ⑤ Avvia solver" | src/components/NavBar.vue:263 |
| NavBar.vue·community | "HoldemMaster" | "Comunità" | src/components/NavBar.vue:265 |
| NavBar.vue·communitySuffix | " Community" | " HoldemMaster" | src/components/NavBar.vue:266 |
| NavBar.vue·langSwitchLabel | "Select language" | "Scegli la lingua" | src/components/NavBar.vue:267 |
| nav-labels.ts·navResults (Results tab) | "Results" | "Risultati" | src/nav-labels.ts:33 |

Notes: the IT sidebar custom-spot header renders as just **Spot personalizzato** (suffix is empty; EN shows "Custom Spot — Solve"). The ④ tab is **Dimensioni di puntata** with an empty sub-label (EN "Bet Sizes" + "Tree Settings"). Page title for ④ (App.vue) is «Impostazioni dell’albero». Tabs are numbered ①–⑤ in the UI (see GuidePage step1Bold «① Range OOP / ② Range IP», «③ Board», «④ Dimensioni di puntata (Impostazioni dell’albero)», «⑤ Avvia solver» in §7).

## 2. Study Spots (Esempi)

Menu name: SideBar `presets` = "Esempi" (badge "Subito"); page title (App.vue:427) "Esempi — Risultati in un clic". EN: "Study Spots" / "Study Spots — One-Click Examples".

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| PresetsPage.vue·infoBtn1 | "[⚡ View results]" | "[⚡ Mostra risultati]" | src/components/PresetsPage.vue:369 |
| PresetsPage.vue·infoText1 | " shows the solved strategy instantly. Use " | " mostra subito la strategia calcolata. Usa " | src/components/PresetsPage.vue:370 |
| PresetsPage.vue·infoBtn2 | "[Solve it yourself]" | "[Calcola tu]" | src/components/PresetsPage.vue:372 |
| PresetsPage.vue·infoText2 | " only when you want to tweak the ranges or explore turn and river play." | " solo se vuoi modificare i range o esplorare il gioco su turn e river." | src/components/PresetsPage.vue:373 |
| PresetsPage.vue·pot | "Pot" | "Piatto" | src/components/PresetsPage.vue:375 |
| PresetsPage.vue·stack | "Stack" | "Stack" | src/components/PresetsPage.vue:376 |
| PresetsPage.vue·articleLink | "Read article" | "Leggi l’articolo" | src/components/PresetsPage.vue:377 |
| PresetsPage.vue·viewResults | "View results" | "Mostra risultati" | src/components/PresetsPage.vue:378 |
| PresetsPage.vue·solveYourself | "Solve it yourself" | "Calcola tu" | src/components/PresetsPage.vue:379 |
| PresetsPage.vue·footnote | "Ranges are approximations of standard 100bb online play. Load a spot, tweak the ranges, and compare — a great way to study." | "I range approssimano il gioco online standard a 100bb. Carica uno spot, modifica i range e confronta i risultati: è un ottimo modo per studiare." | src/components/PresetsPage.vue:380 |
| PresetPreview.vue·backToList | "← Back" | "← Indietro" | src/components/PresetPreview.vue:351 |
| PresetPreview.vue·pot | "Pot" | "Piatto" | src/components/PresetPreview.vue:352 |
| PresetPreview.vue·stack | "Stack" | "Stack" | src/components/PresetPreview.vue:353 |
| PresetPreview.vue·flopOnlyNote | "Flop strategy only. Want to click through turn and river? →" | "Solo strategia al flop. Vuoi esplorare turn e river? →" | src/components/PresetPreview.vue:354 |
| PresetPreview.vue·solveThisSpot | "Solve this spot yourself" | "Calcola questo spot" | src/components/PresetPreview.vue:355 |
| PresetPreview.vue·readArticle | "Read the article" | "Leggi l’articolo" | src/components/PresetPreview.vue:356 |
| PresetPreview.vue·loadError | (e: string) => `Couldn't load the precomputed results: ${e}` | (e: string) => `Impossibile caricare i risultati precalcolati: ${e}` | src/components/PresetPreview.vue:357 |
| PresetPreview.vue·loading | "Loading results…" | "Caricamento dei risultati…" | src/components/PresetPreview.vue:358 |
| PresetPreview.vue·playerLabel | "Player:" | "Giocatore:" | src/components/PresetPreview.vue:359 |
| PresetPreview.vue·oopHint | "This is the strategy of the player who acts first (OOP). To see the opponent (IP), set “Player” above to IP." | "Questa è la strategia di chi agisce per primo (OOP). Per vedere l’avversario (IP), scegli IP nel campo «Giocatore:» qui sopra." | src/components/PresetPreview.vue:360 |

Group sub-header template (PresetsPage.vue:28-33): `OOP: {oopLabel} · IP: {ipLabel} · {L.pot} {pot}bb · {L.stack} {stack}bb` with numbers via $n (it → comma decimal). Rendered IT, computed from preset data (startingPot/effectiveStack ÷ unitScale 10):
- SRP: `OOP: BB (call) · IP: BTN (apertura) · Piatto 5,5bb · Stack 97,5bb`
- 3BP: `OOP: BB (3-bet) · IP: BTN (call) · Piatto 22,5bb · Stack 89bb`
- BvB: `OOP: SB (apertura) · IP: BB (call) · Piatto 6bb · Stack 97bb`
(The view-results button text inside cards is `viewResults` "Mostra risultati"; the ⚡ appears in the info line `infoBtn1` "[⚡ Mostra risultati]" and in GuidePage quickStep2Btn.)

### 2a. Group headers (categories) and seat labels — src/presets.ts

| field | EN | IT | IT line |
|---|---|---|---|
| categoryIt | "Single Raised Pot — BTN vs BB (Fundamentals)" | "Piatto con un rilancio — BTN vs BB (fondamenti)" | src/presets.ts:354 |
| oopLabelIt | "BB (Caller)" | "BB (call)" | src/presets.ts:371 |
| ipLabelIt | "BTN (Opener)" | "BTN (apertura)" | src/presets.ts:388 |
| categoryIt | "3-Bet Pot — BB 3-Bets, BTN Calls (Low SPR)" | "Piatto 3-bet — BB fa 3-bet, BTN chiama (SPR basso)" | src/presets.ts:419 |
| oopLabelIt | "BB (3-Bettor)" | "BB (3-bet)" | src/presets.ts:436 |
| ipLabelIt | "BTN (Caller)" | "BTN (call)" | src/presets.ts:453 |
| categoryIt | "Blind vs Blind — SB vs BB (Wide Ranges)" | "Scontro tra bui — SB vs BB (range ampi)" | src/presets.ts:484 |
| oopLabelIt | "SB (Opener)" | "SB (apertura)" | src/presets.ts:501 |
| ipLabelIt | "BB (Caller)" | "BB (call)" | src/presets.ts:518 |
| startingPot (engine chips, ÷10 = bb) | 55 | 55 | src/presets.ts:401 |
| effectiveStack (engine chips, ÷10 = bb) | 975 | 975 | src/presets.ts:402 |
| startingPot (engine chips, ÷10 = bb) | 225 | 225 | src/presets.ts:466 |
| effectiveStack (engine chips, ÷10 = bb) | 890 | 890 | src/presets.ts:467 |
| startingPot (engine chips, ÷10 = bb) | 60 | 60 | src/presets.ts:531 |
| effectiveStack (engine chips, ÷10 = bb) | 970 | 970 | src/presets.ts:532 |

### 2b. All 13 presets — titles and lessons (src/presets.ts)

**1. "srp-dry-ace"** — board "Ah 7d 2c"
- title EN: "Dry Ace-High Board"
- title IT: "Board A-high dry"  (presets.ts:553)
- lesson EN: "The textbook range-advantage spot. On this ace-high board BB checks 98.2% of the time on its first action (BB equity 45.1%). See which hands make up the 1.9% that bets."
- lesson IT: "Un classico esempio di vantaggio di range. Su questo board A-high, alla prima decisione il BB fa check nel 98,2% dei casi (equity del BB: 45,1%). Scopri quali mani compongono l’1,9% che punta."  (presets.ts:565)

**2. "srp-dry-king"** — board "Ks 8d 3c"
- title EN: "Dry King-High Board"
- title IT: "Board K-high dry"  (presets.ts:604)
- lesson EN: "Compare with the ace-high board. King-high still favors BTN, but there's a bit more checking. Can you tell why?"
- lesson IT: "Confrontalo con il board A-high. Anche il K-high favorisce il BTN, ma si fa check un po’ più spesso. Sai capire perché?"  (presets.ts:616)

**3. "srp-broadway"** — board "Qs Jd Ts"
- title EN: "Connected Broadway Board, Two-Tone"
- title IT: "Board broadway connesso, two-tone"  (presets.ts:655)
- lesson EN: "A board that looks like it hits both ranges. But BB realizes less equity here than in any of the {n} spots — 77.9% against BTN's 119.4% — and checks 99.9%. The hand-category panel shows why."
- lesson IT: "Sembra un board favorevole a entrambi i range. Eppure qui la realizzazione dell’equity del BB è la più bassa dei {n} spot: 77,9%, contro il 119,4% del BTN. Il BB fa check nel 99,9% dei casi. Il pannello delle categorie di mani aiuta a capire perché."  (presets.ts:667)

**4. "srp-middle-connected"** — board "9h 8h 7c"
- title EN: "Connected Middle Board, Two-Tone"
- title IT: "Board medio connesso, two-tone"  (presets.ts:706)
- lesson EN: "Same BTN vs BB, but on the connected 9-8-7 BB leads 23.7% on its first action — far more than on the ace-high board. Equity still slightly favors BTN — BB has 48.5%. Check which hands lead."
- lesson IT: "Sempre BTN vs BB, ma sul board connesso 9-8-7 il BB punta per primo nel 23,7% dei casi: molto più spesso che sul board A-high. L’equity resta leggermente a favore del BTN: il BB ha il 48,5%. Scopri con quali mani punta per primo."  (presets.ts:718)

**5. "srp-monotone"** — board "Qs 9s 2s"
- title EN: "Monotone Board (All One Suit)"
- title IT: "Board monotone (un solo seme)"  (presets.ts:757)
- lesson EN: "Watch why big bets give way to small bets and checks. Notice how often even made flushes just check."
- lesson IT: "Osserva perché le puntate grandi lasciano spazio a puntate piccole e check. Nota quanto spesso anche le mani con colore già chiuso fanno solo check."  (presets.ts:769)

**6. "srp-paired"** — board "6c 6d 3h"
- title EN: "Paired Board"
- title IT: "Board pairato"  (presets.ts:808)
- lesson EN: "Nobody connects with this board, so the bluffing frequency goes up. Use the detail table to find which hands bet as bluffs."
- lesson IT: "Nessuno dei due range si lega bene a questo board, quindi aumenta la frequenza dei bluff. Nella tabella di dettaglio, cerca le mani che puntano in bluff."  (presets.ts:820)

**7. "srp-low-rainbow"** — board "6s 5h 2d"
- title EN: "Low Rainbow Board"
- title IT: "Board basso rainbow"  (presets.ts:863)
- lesson EN: "On the low 6-5-2, BB checks 96.8% of the time on its first action. This spot has a single flop bet size, 33% pot, and BB uses it 3.2% of the time. See which hands bet."
- lesson IT: "Sul board basso 6-5-2, alla prima decisione il BB fa check nel 96,8% dei casi. Questo spot prevede una sola dimensione di puntata al flop, il 33% del piatto, che il BB usa nel 3,2% dei casi. Scopri quali mani puntano."  (presets.ts:874)

**8. "3bp-ace-king"** — board "Ad Ks 2h"
- title EN: "Ace-High Board, 3-Bettor's Edge"
- title IT: "Board A-high: vantaggio a chi fa 3-bet"  (presets.ts:913)
- lesson EN: "A flop that suits the 3-bet range, loaded with AK, AA and KK: BB, the 3-bettor, has 68.9% equity. BB bets its entire range on its first action — 57.8% at 33% pot and 42.2% at 66% pot. Compare which hands pick which size."
- lesson IT: "Un flop favorevole al range di 3-bet, ricco di AK, AA e KK: il BB, che ha fatto 3-bet, ha il 68,9% di equity. Alla prima decisione punta con tutto il range: il 57,8% usa il 33% del piatto, il 42,2% usa il 66%. Confronta le mani che scelgono ciascuna dimensione."  (presets.ts:925)

**9. "3bp-dynamic"** — board "Qh Th 7s"
- title EN: "Dynamic Two-Tone Board"
- title IT: "Board dinamico two-tone"  (presets.ts:964)
- lesson EN: "A 3-bet pot on a board that suits the caller as well — and yet the 3-bettor doesn't slow down: 98.4% of the range fires the same two-thirds size. See which hands make up the 0.8% that checks."
- lesson IT: "Un piatto 3-bet su un board favorevole anche a chi ha chiamato. Eppure chi ha fatto 3-bet continua a puntare: il 98,4% del range usa la stessa dimensione, due terzi del piatto. Scopri quali mani compongono lo 0,8% che fa check."  (presets.ts:983)

**10. "3bp-low"** — board "8d 5c 2s"
- title EN: "Low Dry Board"
- title IT: "Board basso dry"  (presets.ts:1022)
- lesson EN: "A board that largely misses the 3-bettor's range — yet overpairs and ace-high hands keep the pressure on. Equity vs fold equity."
- lesson IT: "Un board che aiuta poco il range di chi ha fatto 3-bet. Eppure overpair e mani A-high continuano a fare pressione. Equity contro fold equity."  (presets.ts:1034)

**11. "sb-king-mid"** — board "Kh Td 6s"
- title EN: "King-High with a Ten"
- title IT: "Board K-high con un dieci"  (presets.ts:1073)
- lesson EN: "Blind vs Blind ranges are wide, so both ranges are weak. Compare the frequencies to the BTN-vs-BB Dry King-High Board spot."
- lesson IT: "Nello scontro tra bui i range sono ampi, quindi entrambi contengono molte mani deboli. Confronta le frequenze con lo spot BTN vs BB «Board K-high dry»."  (presets.ts:1089)

**12. "sb-connected"** — board "7d 6d 5c"
- title EN: "Connected Low Board, Two-Tone"
- title IT: "Board basso connesso, two-tone"  (presets.ts:1128)
- lesson EN: "Two wide ranges collide on an ultra-connected board: two-pair hands, straights, and draws everywhere. The hand-category panel shines here."
- lesson IT: "Due range ampi si affrontano su un board molto connesso, pieno di doppie coppie, scale e progetti. Qui il pannello delle categorie di mani è particolarmente utile."  (presets.ts:1141)

**13. "sb-paired-ace"** — board "As Ah 6d"
- title EN: "Ace-Paired Board"
- title IT: "Board con coppia di assi"  (presets.ts:1180)
- lesson EN: "Two aces on the board. Trips aren't rare — SB simply holds more of them (88 combos to BB's 66), so SB bets 80.1%. Who holds more aces is the whole story here."
- lesson IT: "Due assi sul board. I tris non sono rari: lo SB ne ha semplicemente di più (88 combo contro le 66 del BB), quindi punta nell’80,1% dei casi. Qui tutto dipende da chi ha più assi."  (presets.ts:1197)

Trainer filter chips (category short names) — src/trainer.ts:

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| trainer.ts·all | "All" | "Tutti" | src/trainer.ts:307 |
| trainer.ts·srp | "Single Raised" | "Piatto con un rilancio" | src/trainer.ts:308 |
| trainer.ts·3bp | "3-Bet Pot" | "Piatto 3-bet" | src/trainer.ts:309 |
| trainer.ts·blind | "Blind vs Blind" | "Scontro tra bui" | src/trainer.ts:310 |

## 3. Flop study (Studio dei flop)

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| flop-study-labels.ts·title | "Flop study" | "Studio dei flop" | src/flop-study-labels.ts:616 |
| flop-study-labels.ts·navTitle | "Flop study" | "Studio dei flop" | src/flop-study-labels.ts:617 |
| flop-study-labels.ts·precomputedAccuracy | "Precomputed result · target error {pct}" | "Risultato precalcolato · errore obiettivo {pct}" | src/flop-study-labels.ts:618 |
| flop-study-labels.ts·board | "Board" | "Board" | src/flop-study-labels.ts:619 |
| flop-study-labels.ts·pickBoard | "Choose board" | "Scegli board" | src/flop-study-labels.ts:620 |
| flop-study-labels.ts·closePicker | "Close" | "Chiudi" | src/flop-study-labels.ts:621 |
| flop-study-labels.ts·randomFlop | "Random" | "Casuale" | src/flop-study-labels.ts:622 |
| flop-study-labels.ts·changeSetup | "Change spot & board" | "Cambia spot e board" | src/flop-study-labels.ts:623 |
| flop-study-labels.ts·pickPrompt | "Choose 3 cards ({count}/3)" | "Scegli 3 carte ({count}/3)" | src/flop-study-labels.ts:624 |
| flop-study-labels.ts·start | "Start" | "Inizia" | src/flop-study-labels.ts:625 |
| flop-study-labels.ts·notReady | "Coming soon" | "In arrivo" | src/flop-study-labels.ts:626 |
| flop-study-labels.ts·notReadyNote | "This situation has not been precomputed yet — you can solve it yourself in the solver." | "Il calcolo per questa situazione non è ancora disponibile. Puoi eseguirlo nel solver." | src/flop-study-labels.ts:627 |
| flop-study-labels.ts·strategyTab | "Strategy" | "Strategia" | src/flop-study-labels.ts:628 |
| flop-study-labels.ts·rangeTab | "Range" | "Range" | src/flop-study-labels.ts:629 |
| flop-study-labels.ts·rangeGrid | "{seat} range" | "Range {seat}" | src/flop-study-labels.ts:630 |
| flop-study-labels.ts·rangeHelp | "Brighter = more of the hand reaches this spot" | "Più luminosità = maggiore quota di arrivo della mano in questo spot" | src/flop-study-labels.ts:631 |
| flop-study-labels.ts·filterHelp | "Click an action to show only that action in the grid" | "Seleziona un’azione per mostrare solo quella nella griglia" | src/flop-study-labels.ts:632 |
| flop-study-labels.ts·clearFilter | "Clear filter" | "Rimuovi filtro" | src/flop-study-labels.ts:633 |
| flop-study-labels.ts·fixedSizes | "Bet sizes are fixed: flop {flop}, raise {raise} (a raise close to the stack becomes all-in). Solve it yourself for other sizes." | "Dimensioni fisse: flop {flop}, rilancio {raise} (un rilancio vicino allo stack diventa all-in). Per altre dimensioni, esegui il calcolo nel solver." | src/flop-study-labels.ts:634 |
| flop-study-labels.ts·openInSolver | "Open in solver" | "Apri nel solver" | src/flop-study-labels.ts:635 |
| flop-study-labels.ts·confirmOverwrite | "This replaces the ranges, board, pot, effective stack, bet sizes and tree edits you entered in the solver with this situation. Continue?" | "Questa situazione sostituirà i range, il board, il piatto, lo stack effettivo, le dimensioni di puntata e le modifiche all’albero che hai inserito nel solver. Vuoi continuare?" | src/flop-study-labels.ts:636 |
| flop-study-labels.ts·actions | "{seat} actions" | "Azioni · {seat}" | src/flop-study-labels.ts:637 |
| flop-study-labels.ts·combos | "{count} combos" | "{count} combo" | src/flop-study-labels.ts:638 |
| flop-study-labels.ts·strategyGrid | "{seat} strategy" | "Strategia · {seat}" | src/flop-study-labels.ts:639 |
| flop-study-labels.ts·gridHelp | "Cell colour = action frequency · fill height = share of the hand that reaches this spot" | "Colore della cella = frequenza dell’azione · altezza del riempimento = quota di arrivo della mano in questo spot" | src/flop-study-labels.ts:640 |
| flop-study-labels.ts·handDetail | "Hand details" | "Dettagli della mano" | src/flop-study-labels.ts:641 |
| flop-study-labels.ts·chooseCell | "Tap a hand in the grid to see each suit combo's frequency and EV." | "Tocca una mano nella griglia per vedere frequenza ed EV di ogni combo di semi." | src/flop-study-labels.ts:642 |
| flop-study-labels.ts·chooseCellRange | "Tap a hand in the grid to see each suit combo's weight." | "Tocca una mano nella griglia per vedere il peso di ogni combo di semi." | src/flop-study-labels.ts:643 |
| flop-study-labels.ts·combo | "Combo" | "Combo" | src/flop-study-labels.ts:644 |
| flop-study-labels.ts·weight | "Weight" | "Peso" | src/flop-study-labels.ts:645 |
| flop-study-labels.ts·frequency | "Frequency" | "Frequenza" | src/flop-study-labels.ts:646 |
| flop-study-labels.ts·ev | "EV" | "EV" | src/flop-study-labels.ts:647 |
| flop-study-labels.ts·notInRange | "No combos of this hand reach this spot." | "Nessuna combo di questa mano raggiunge questo spot." | src/flop-study-labels.ts:648 |
| flop-study-labels.ts·turnNotStored | "The flop ends here. Turn play is not stored." | "I dati finiscono al flop: il gioco al turn non è salvato." | src/flop-study-labels.ts:649 |
| flop-study-labels.ts·handOverFold | "The hand ended with a fold." | "La mano è terminata con un fold." | src/flop-study-labels.ts:650 |
| flop-study-labels.ts·handOverAllIn | "All-in and call — no more decisions." | "All-in e call: non restano altre decisioni." | src/flop-study-labels.ts:651 |

Pot-type options in Flop study come from hand-review labels (FlopStudyPage.vue:705-707 uses `R.singleRaised / R.threeBet / R.fourBet`; heading uses `R.caller / R.threeBettor`, FlopStudyPage.vue:84):

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| hand-review-labels.ts·singleRaised | "Open · Call" | "Open · Call" | src/hand-review-labels.ts:440 |
| hand-review-labels.ts·threeBet | "3-bet pot" | "Piatto 3-bet" | src/hand-review-labels.ts:440 |
| hand-review-labels.ts·fourBet | "4-bet pot" | "Piatto 4-bet" | src/hand-review-labels.ts:440 |
| hand-review-labels.ts·opener | "Opening seat" | "Apertura" | src/hand-review-labels.ts:439 |
| hand-review-labels.ts·caller | "Calling seat" | "Call" | src/hand-review-labels.ts:439 |
| hand-review-labels.ts·threeBettor | "3-betting seat" | "3-bet" | src/hand-review-labels.ts:439 |
| hand-review-labels.ts·hero | "Your seat" | "La tua posizione" | src/hand-review-labels.ts:439 |
| hand-review-labels.ts·situation | "Situation" | "Situazione" | src/hand-review-labels.ts:439 |

## 4. Flop reports (Statistiche flop)

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| flop-report-labels.ts·title | "Flop reports" | "Statistiche flop" | src/flop-report-labels.ts:712 |
| flop-report-labels.ts·navTitle | "Flop reports" | "Statistiche flop" | src/flop-report-labels.ts:713 |
| flop-report-labels.ts·intro | "Averages over 1,755 precomputed flops, weighted by how often each flop actually comes · target error {pct}" | "Medie su 1.755 flop precalcolati, ponderate per la frequenza con cui esce ciascun flop · errore obiettivo {pct}" | src/flop-report-labels.ts:714 |
| flop-report-labels.ts·nodeFirst | "{seat} first decision" | "{seat} · prima decisione" | src/flop-report-labels.ts:715 |
| flop-report-labels.ts·nodeAfterCheck | "{seat} · after a check" | "{seat} · dopo un check" | src/flop-report-labels.ts:716 |
| flop-report-labels.ts·strategyTab | "Strategy" | "Strategia" | src/flop-report-labels.ts:717 |
| flop-report-labels.ts·evTab | "EV" | "EV" | src/flop-report-labels.ts:718 |
| flop-report-labels.ts·bySize | "By size" | "Per dimensione" | src/flop-report-labels.ts:719 |
| flop-report-labels.ts·merged | "Bets merged" | "Puntate unite" | src/flop-report-labels.ts:720 |
| flop-report-labels.ts·betPct | "Bet {pct}" | "Puntata da {pct}" | src/flop-report-labels.ts:721 |
| flop-report-labels.ts·groupBy | "Group by" | "Raggruppa per" | src/flop-report-labels.ts:722 |
| flop-report-labels.ts·groupNone | "None" | "Nessuno" | src/flop-report-labels.ts:723 |
| flop-report-labels.ts·group_high | "High card" | "Carta più alta" | src/flop-report-labels.ts:724 |
| flop-report-labels.ts·group_suits | "Suits" | "Semi" | src/flop-report-labels.ts:725 |
| flop-report-labels.ts·group_pairing | "Pairing" | "Coppie sul board" | src/flop-report-labels.ts:726 |
| flop-report-labels.ts·group_connect | "Connectedness" | "Connessione" | src/flop-report-labels.ts:727 |
| flop-report-labels.ts·highKey | "{rank}-high" | "{rank}-high" | src/flop-report-labels.ts:728 |
| flop-report-labels.ts·key_rainbow | "Rainbow" | "Rainbow" | src/flop-report-labels.ts:729 |
| flop-report-labels.ts·key_two-tone | "Two-tone" | "Two-tone" | src/flop-report-labels.ts:730 |
| flop-report-labels.ts·key_monotone | "Monotone" | "Monotone" | src/flop-report-labels.ts:731 |
| flop-report-labels.ts·key_unpaired | "Unpaired boards" | "Senza coppia" | src/flop-report-labels.ts:732 |
| flop-report-labels.ts·key_paired | "Paired boards" | "Pairato" | src/flop-report-labels.ts:733 |
| flop-report-labels.ts·key_trips | "Trips boards" | "Tris sul board" | src/flop-report-labels.ts:734 |
| flop-report-labels.ts·key_connected | "Connected boards" | "Connesso" | src/flop-report-labels.ts:735 |
| flop-report-labels.ts·key_semi | "Semi-connected boards" | "Semiconnesso" | src/flop-report-labels.ts:736 |
| flop-report-labels.ts·key_disconnected | "Disconnected boards" | "Disconnesso" | src/flop-report-labels.ts:737 |
| flop-report-labels.ts·overall | "Overall average" | "Media totale" | src/flop-report-labels.ts:738 |
| flop-report-labels.ts·filteredAverage | "{name} average" | "Media di «{name}»" | src/flop-report-labels.ts:739 |
| flop-report-labels.ts·showAll | "Show all" | "Mostra tutti" | src/flop-report-labels.ts:740 |
| flop-report-labels.ts·groupHelp | "Click a group to keep only its flops in the table." | "Seleziona un gruppo per mostrare nella tabella solo i suoi flop." | src/flop-report-labels.ts:741 |
| flop-report-labels.ts·flopCount | "{count} flops" | "{count} flop" | src/flop-report-labels.ts:742 |
| flop-report-labels.ts·colFlop | "Flop" | "Flop" | src/flop-report-labels.ts:743 |
| flop-report-labels.ts·colShare | "Share" | "Quota" | src/flop-report-labels.ts:744 |
| flop-report-labels.ts·colEv | "EV (bb)" | "EV (bb)" | src/flop-report-labels.ts:745 |
| flop-report-labels.ts·colVersus | "vs average" | "Rispetto alla media" | src/flop-report-labels.ts:746 |
| flop-report-labels.ts·evHelp | "EV = average expected value (bb) of the player acting here. Green is above average, red is below." | "EV = valore atteso medio (bb) del giocatore che agisce qui. Il verde indica un valore sopra la media, il rosso sotto la media." | src/flop-report-labels.ts:747 |
| flop-report-labels.ts·rowHelp | "Click a row to open that flop in Flop study." | "Seleziona una riga per aprire il flop in [Studio dei flop]." | src/flop-report-labels.ts:748 |
| flop-report-labels.ts·showMore | "Show {count} more" | "Mostra altri flop ({count})" | src/flop-report-labels.ts:749 |
| flop-report-labels.ts·summary | "{seat} · {when}: bets {pct} on average — among groups with at least {minPct} of flops, most often on {most} ({mostPct}), least often on {least} ({leastPct})." | "{seat} · {when}: frequenza media di puntata: {pct}. Tra i gruppi con una quota di flop ≥ {minPct}, punta più spesso nel gruppo «{most}» ({mostPct}) e meno spesso nel gruppo «{least}» ({leastPct})." | src/flop-report-labels.ts:750 |
| flop-report-labels.ts·whenFirst | "first decision" | "prima decisione" | src/flop-report-labels.ts:751 |
| flop-report-labels.ts·whenAfterCheck | "after a check" | "dopo un check" | src/flop-report-labels.ts:752 |
| flop-report-labels.ts·notReadyNote | "This situation has not been precomputed yet." | "Il calcolo per questa situazione non è ancora disponibile." | src/flop-report-labels.ts:753 |

## 5. GTO Trainer (Trainer GTO)

Menu: SideBar `trainer` "Trainer GTO" (badge "EV"); page title App.vue:428 "Trainer GTO — L’EV di ogni decisione". Note word order: IT uses «Trainer GTO» for the feature; the brand/app name stays «HoldemMaster GTO Trainer».

Header line (TrainerPage.vue:243 renders `$n(L.footerLine(decisionCount, bank.targetExploitabilityPct))`; SPOT_COUNT = 13). With 33 nodes / 0.5 the IT screen reads: `13 esempi · nodi di decisione: 33 · exploitability obiettivo 0,5%` (the comma comes from $n).

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| TrainerPage.vue·footerLine | (nodes: number, pct: number) => `${SPOT_COUNT} Study Spots · ${nodes} decision nodes · target exploitability ${pct}%` | (nodes: number, pct: number) => `${SPOT_COUNT} esempi · nodi di decisione: ${nodes} · exploitability obiettivo ${pct}%` | src/components/TrainerPage.vue:2664 |
| TrainerPage.vue·flopFooterLine | (spots: number, flops: string) => `${spots} precomputed spots · dealt evenly from all ${flops} real flops` | (spots: number, flops: string) => `Spot precalcolati: ${spots} · estrazione uniforme dai flop reali (${flops})` | src/components/TrainerPage.vue:2714 |
| TrainerPage.vue·review | (n: number) => `Review (${n})` | (n: number) => `Ripasso (${n})` | src/components/TrainerPage.vue:2633 |
| TrainerPage.vue·daily | "Daily Puzzle" | "Sfida del giorno" | src/components/TrainerPage.vue:2634 |
| TrainerPage.vue·dailyStreakLabel | "Daily Puzzle" | "Sfida del giorno:" | src/components/TrainerPage.vue:2635 |
| TrainerPage.vue·done | "Done" | "Fatto" | src/components/TrainerPage.vue:2636 |
| TrainerPage.vue·solved | "Solved" | "Tentativi:" | src/components/TrainerPage.vue:2637 |
| TrainerPage.vue·dayStreakSuffix | "-day streak" | (n: number) => n === 1 ? " giorno consecutivo" : " giorni consecutivi" | src/components/TrainerPage.vue:2638 |
| TrainerPage.vue·bestPrefix | "/ best" | "/ record" | src/components/TrainerPage.vue:2639 |
| TrainerPage.vue·streakLabel | "Streak" | "Serie" | src/components/TrainerPage.vue:2640 |
| TrainerPage.vue·totalLossLabel | "Total EV loss" | "EV loss totale" | src/components/TrainerPage.vue:2641 |
| TrainerPage.vue·avgLossLabel | "Avg EV loss" | "EV loss media" | src/components/TrainerPage.vue:2642 |
| TrainerPage.vue·goodRateLabel | "Good-play rate" | "Scelte accettabili" | src/components/TrainerPage.vue:2643 |
| TrainerPage.vue·weaknessTitle | "Leak Finder" | "Punti da migliorare" | src/components/TrainerPage.vue:2644 |
| TrainerPage.vue·avgOfPot | (pct: string) => `avg ${pct}% of the pot` | (pct: string) => `media: ${pct}% del piatto` | src/components/TrainerPage.vue:2645 |
| TrainerPage.vue·handCount | (n: number) => `(${n} hand${n === 1 ? "" : "s"})` | (n: number) => `(${n} ${n === 1 ? "mano" : "mani"})` | src/components/TrainerPage.vue:2646 |
| TrainerPage.vue·notSolved | "Not tried" | "Non provato" | src/components/TrainerPage.vue:2647 |
| TrainerPage.vue·weakestBefore | "Biggest losses in " | "EV loss maggiore in: " | src/components/TrainerPage.vue:2648 |
| TrainerPage.vue·weakestAfter | " —" | "" | src/components/TrainerPage.vue:2649 |
| TrainerPage.vue·practiceThis | "Drill this spot type" | "Allenati su questo tipo di spot" | src/components/TrainerPage.vue:2650 |
| TrainerPage.vue·weaknessHint | "Solve 3+ hands in each category to see where you're leaking." | "Prova almeno 3 mani per categoria per scoprire dove perdi più EV." | src/components/TrainerPage.vue:2651 |
| TrainerPage.vue·verdictBest | "Best play" | "Scelta migliore" | src/components/TrainerPage.vue:2725 |
| TrainerPage.vue·verdictGood | "Acceptable" | "Accettabile" | src/components/TrainerPage.vue:2726 |
| TrainerPage.vue·verdictMiss | "Review this spot" | "Da rivedere" | src/components/TrainerPage.vue:2727 |
| TrainerPage.vue·gtoNoteBefore | "GTO mixes actions with the same hand — a low-frequency choice isn't automatically a mistake. The measure is EV loss " | "Il GTO alterna più azioni con la stessa mano: una scelta poco frequente non è per forza un errore. Si misura l’EV loss " | src/components/TrainerPage.vue:2706 |
| TrainerPage.vue·gtoNoteBold | "relative to the pot" | "in rapporto al piatto" | src/components/TrainerPage.vue:2708 |
| TrainerPage.vue·gtoNoteAfter | ": ≤0.35% Best play · ≤1% Acceptable · above that, Review this spot." | ": ≤0,35% Scelta migliore · ≤1% Accettabile · oltre, Da rivedere." | src/components/TrainerPage.vue:2709 |
| TrainerPage.vue·spotLimits | (pot: string, best: string, good: string) => `For this spot (${pot}bb pot) that's Best play ≤${best}bb · Acceptable ≤${good}bb.` | (pot: string, best: string, good: string) => `In questo spot (piatto ${pot}bb): Scelta migliore ≤${best}bb · Accettabile ≤${good}bb.` | src/components/TrainerPage.vue:2710 |
| TrainerPage.vue·judgeBasis | (pot: string, best: string, good: string) => `Judged against this spot's starting pot (${pot}bb): Best play ≤${best}bb · Acceptable ≤${good}bb.` | (pot: string, best: string, good: string) => `Valutazione rispetto al piatto iniziale dello spot (${pot}bb): Scelta migliore ≤${best}bb · Accettabile ≤${good}bb.` | src/components/TrainerPage.vue:2712 |
| TrainerPage.vue·mixedNote | "Mixed strategies aren't marked wrong — grading is based on the EV difference between actions." | "Le strategie miste non sono considerate errori: la valutazione si basa sulla differenza di EV tra le azioni." | src/components/TrainerPage.vue:2678 |
| TrainerPage.vue·prompt | "What's your play?" | "Come giochi?" | src/components/TrainerPage.vue:2674 |
| TrainerPage.vue·bestEvTag | " · Highest EV" | " · EV più alto" | src/components/TrainerPage.vue:2675 |
| TrainerPage.vue·evLoss | "EV loss" | "EV loss" | src/components/TrainerPage.vue:2676 |
| TrainerPage.vue·mobileDetailTitle | "Frequency & EV by action" | "Frequenza ed EV per azione" | src/components/TrainerPage.vue:2677 |
| TrainerPage.vue·toAct | "to act" | "deve agire" | src/components/TrainerPage.vue:2667 |
| TrainerPage.vue·lineLabel | "Line:" | "Linea:" | src/components/TrainerPage.vue:2670 |
| TrainerPage.vue·myHand | "Your hand" | "La tua mano" | src/components/TrainerPage.vue:2672 |
| TrainerPage.vue·yourChoice | "Your choice" | "La tua scelta" | src/components/TrainerPage.vue:2673 |
| TrainerPage.vue·details | "Details ↓" | "Dettagli ↓" | src/components/TrainerPage.vue:2666 |
| TrainerPage.vue·nextHand | "Next hand" | "Prossima mano" | src/components/TrainerPage.vue:2699 |
| TrainerPage.vue·viewFull | "View full solution" | "Mostra la soluzione completa" | src/components/TrainerPage.vue:2701 |
| TrainerPage.vue·readArticle | "Read the spot breakdown →" | "Leggi l’analisi dello spot →" | src/components/TrainerPage.vue:2700 |
| TrainerPage.vue·resetHistoryLabel | "Reset history" | "Elimina cronologia" | src/components/TrainerPage.vue:2716 |
| TrainerPage.vue·dailyDone | "Daily Puzzle complete" | "Sfida del giorno completata" | src/components/TrainerPage.vue:2680 |
| TrainerPage.vue·dailyDoneDesc | "Everyone gets the same puzzle today. Post your result to compare with other players." | "Oggi la domanda è uguale per tutti. Condividi il risultato nella comunità per confrontarti con gli altri giocatori." | src/components/TrainerPage.vue:2681 |
| TrainerPage.vue·makeCard | "Create a result card" | "Crea l’immagine del risultato" | src/components/TrainerPage.vue:2683 |
| TrainerPage.vue·boardShow | "View today's leaderboard" | "Mostra la classifica di oggi" | src/components/TrainerPage.vue:2684 |
| TrainerPage.vue·boardHide | "Hide leaderboard" | "Nascondi la classifica" | src/components/TrainerPage.vue:2685 |
| TrainerPage.vue·boardCount | (n: number) => `${n} player${n === 1 ? "" : "s"} today` | (n: number) => `${n} ${n === 1 ? "giocatore" : "giocatori"} oggi` | src/components/TrainerPage.vue:2687 |
| TrainerPage.vue·boardMyRank | (r: number) => `My rank #${r}` | (r: number) => `La mia posizione: #${r}` | src/components/TrainerPage.vue:2688 |
| TrainerPage.vue·boardLoginHint | "Sign in to put your name on the board — viewing is open to everyone." | "Accedi per inserire il tuo nome in classifica. Tutti possono consultarla." | src/components/TrainerPage.vue:2689 |
| TrainerPage.vue·shareText | "Today's GTO puzzle — try it yourself: https://solver.holdemmaster.com/?view=trainer" | "Sfida GTO del giorno — mettiti alla prova: https://solver.holdemmaster.com/?view=trainer&lang=it" | src/components/TrainerPage.vue:2729 |
| TrainerPage.vue·localOnlyBefore | "Your progress is saved " | "I tuoi progressi vengono salvati " | src/components/TrainerPage.vue:2657 |
| TrainerPage.vue·localOnlyBold | "on this device only" | "solo su questo dispositivo" | src/components/TrainerPage.vue:2658 |
| TrainerPage.vue·localOnlyAfter | ". Link a HoldemMaster account to pick up where you left off on any device." | ". Collega un account HoldemMaster per riprendere da dove hai lasciato su qualsiasi dispositivo." | src/components/TrainerPage.vue:2659 |
| TrainerPage.vue·googleSignIn | "Continue with Google" | "Continua con Google" | src/components/TrainerPage.vue:2661 |
| TrainerPage.vue·kakaoSignIn | "Continue with Kakao" | "Continua con Kakao" | src/components/TrainerPage.vue:2662 |
| TrainerPage.vue·telegramSignIn | "Continue with Telegram" | "Continua con Telegram" | src/components/TrainerPage.vue:2663 |
| TrainerPage.vue·accountBefore | "Saved to " | "Salvato nell’account di " | src/components/TrainerPage.vue:2652 |
| TrainerPage.vue·syncNow | "Sync now" | "Sincronizza ora" | src/components/TrainerPage.vue:2655 |
| TrainerPage.vue·signOutLabel | "Sign out" | "Esci" | src/components/TrainerPage.vue:2656 |

RNG toggle — src/trainer-rng-labels.ts:

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| trainer-rng-labels.ts·mode | { off: "RNG: Off", high: "RNG: High", low: "RNG: Low" } | { off: "RNG: No", high: "RNG: High", low: "RNG: Low" } | src/trainer-rng-labels.ts:178 |
| trainer-rng-labels.ts·modeHelp | "Random number (1–100) practice — each hand gets a number, and you pick the action that number points to. High: higher numbers mean more aggressive actions · Low: lower numbers mean more aggressive actions. Not used for the Daily Puzzle." | "Allenamento con un numero casuale (1–100): ogni mano riceve un numero e tu scegli l’azione corrispondente. High: i numeri più alti indicano azioni più aggressive · Low: i numeri più bassi indicano azioni più aggressive. Non si usa nella [Sfida del giorno]." | src/trainer-rng-labels.ts:179 |
| trainer-rng-labels.ts·bandsTitle | "RNG ranges" | "Intervalli RNG" | src/trainer-rng-labels.ts:181 |
| trainer-rng-labels.ts·yourNumber | "Your number" | "Il tuo numero" | src/trainer-rng-labels.ts:182 |
| trainer-rng-labels.ts·noteBest | (action: string) => `You picked the action for this number (${action}).` | (action: string) => `Hai scelto l’azione corrispondente a questo numero: «${action}».` | src/trainer-rng-labels.ts:183 |
| trainer-rng-labels.ts·noteMixed | (action: string) => `Acceptable — the solver mixes this action, but this number calls for ${action}.` | (action: string) => `Accettabile: il solver usa anche questa azione nella strategia mista, ma a questo numero corrisponde «${action}».` | src/trainer-rng-labels.ts:184 |
| trainer-rng-labels.ts·noteOther | (action: string) => `This number calls for ${action}.` | (action: string) => `A questo numero corrisponde l’azione «${action}».` | src/trainer-rng-labels.ts:186 |

My spots / custom trainer — src/custom-trainer-labels.ts:

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| custom-trainer-labels.ts·tab | "My spots" | "I miei spot" | src/custom-trainer-labels.ts:215 |
| custom-trainer-labels.ts·presetTab | "Preset practice" | "Allenamento sugli esempi" | src/custom-trainer-labels.ts:215 |
| custom-trainer-labels.ts·entry | "Practice this spot" | "Allenati su questo spot" | src/custom-trainer-labels.ts:215 |
| custom-trainer-labels.ts·empty | "After solving a spot, choose [Practice this spot] on the results screen to save questions here." | "Dopo aver calcolato uno spot, premi [Allenati su questo spot] nella schermata dei risultati per salvare qui le domande." | src/custom-trainer-labels.ts:216 |
| custom-trainer-labels.ts·review | "Review mistakes" | "Ripassa gli errori" | src/custom-trainer-labels.ts:224 |
| custom-trainer-labels.ts·practice | "Regular practice" | "Allenamento libero" | src/custom-trainer-labels.ts:224 |
| custom-trainer-labels.ts·next | "Next question" | "Prossima domanda" | src/custom-trainer-labels.ts:224 |
| custom-trainer-labels.ts·attemptCount | "Attempts in this spot: {count}" | "Tentativi in questo spot: {count}" | src/custom-trainer-labels.ts:224 |
| custom-trainer-labels.ts·verdictBest | "Best play" | "Scelta migliore" | src/custom-trainer-labels.ts:225 |
| custom-trainer-labels.ts·verdictGood | "Acceptable" | "Accettabile" | src/custom-trainer-labels.ts:225 |
| custom-trainer-labels.ts·verdictBad | "Review this spot" | "Da rivedere" | src/custom-trainer-labels.ts:225 |
| custom-trainer-labels.ts·source | "Your approximate solve · Target error {target}% · Achieved {achieved}%" | "Calcolo approssimato · Errore obiettivo {target}% · Errore raggiunto {achieved}%" | src/custom-trainer-labels.ts:218 |
| custom-trainer-labels.ts·lockAssumption | "Assumes part of the strategy is fixed" | "Ipotesi: parte della strategia fissata" | src/custom-trainer-labels.ts:218 |
| custom-trainer-labels.ts·storageNote | "This device stores your 20 most recent spots and 500 latest attempts per spot. My spot results are counted separately. Saving the same spot again replaces its solve and clears its practice history." | "Questo dispositivo conserva i tuoi 20 spot più recenti e gli ultimi 500 tentativi per spot. I risultati di «I miei spot» vengono conteggiati separatamente. Se salvi di nuovo lo stesso spot, il nuovo calcolo sostituisce il precedente e la cronologia dell’allenamento viene eliminata." | src/custom-trainer-labels.ts:217 |
| custom-trainer-labels.ts·chooseSpot | "Saved spots" | "Spot salvati" | src/custom-trainer-labels.ts:220 |

Flop-trainer source / board filter — src/flop-trainer-labels.ts:

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| flop-trainer-labels.ts·sourceBasic | "Source: Basic" | "Fonte: Base" | src/flop-trainer-labels.ts:244 |
| flop-trainer-labels.ts·sourceFlop | "Source: All flops" | "Fonte: Tutti i flop" | src/flop-trainer-labels.ts:245 |
| flop-trainer-labels.ts·sourceHelp | "All flops: questions come from spots and flops pre-solved on our server (internet required). Basic: decision points from the study spots (works offline)." | "[Fonte: Tutti i flop]: domande da spot e flop precalcolati sul nostro server (serve internet). [Fonte: Base]: decisioni tratte dagli «Esempi» (disponibili offline)." | src/flop-trainer-labels.ts:246 |
| flop-trainer-labels.ts·closeOnly | "Close spots only" | "Solo scelte vicine" | src/flop-trainer-labels.ts:248 |
| flop-trainer-labels.ts·closeHelp | "Only deals hands where the best and second-best actions are within the “Acceptable” EV margin." | "Propone solo mani in cui la differenza di EV tra l’azione migliore e la seconda rientra nel margine di «Accettabile»." | src/flop-trainer-labels.ts:249 |
| flop-trainer-labels.ts·useBasic | "Practice basic questions" | "Allenati sugli esempi" | src/flop-trainer-labels.ts:254 |
| flop-trainer-labels.ts·again | "Same hand again" | "Ripeti la stessa mano" | src/flop-trainer-labels.ts:255 |
| flop-trainer-labels.ts·boardAll | "Board: All" | "Board: Tutti" | src/flop-trainer-labels.ts:442 |
| flop-trainer-labels.ts·boardChip | "Board: {value}" | "Board: {value}" | src/flop-trainer-labels.ts:443 |
| flop-trainer-labels.ts·boardHelp | "Filter the flops you get by high card, suits, pairing and connectedness, or fix one specific flop." | "Filtra i flop per carta più alta, semi, coppie sul board e connessione, oppure scegli un flop specifico." | src/flop-trainer-labels.ts:444 |
| flop-trainer-labels.ts·specificFlop | "Specific flop" | "Flop specifico" | src/flop-trainer-labels.ts:446 |

Hand-review verdict labels (same three grades) — src/hand-review-labels.ts:

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| hand-review-labels.ts·best | "Best play" | "Scelta migliore" | src/hand-review-labels.ts:448 |
| hand-review-labels.ts·good | "Acceptable" | "Accettabile" | src/hand-review-labels.ts:448 |
| hand-review-labels.ts·mistake | "Review this play" | "Da rivedere" | src/hand-review-labels.ts:448 |
| hand-review-labels.ts·totalLoss | "Total loss" | "EV loss totale" | src/hand-review-labels.ts:447 |

Share card (Daily Puzzle) — src/share-card.ts:

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| share-card.ts·brand | "HoldemMaster GTO Trainer" | "HoldemMaster GTO Trainer" | src/share-card.ts:207 |
| share-card.ts·tagline | "One puzzle a day · same for everyone" | "Una sfida al giorno, uguale per tutti" | src/share-card.ts:208 |
| share-card.ts·heading | "Daily GTO Puzzle" | "Sfida GTO del giorno" | src/share-card.ts:209 |
| share-card.ts·result | (verdict: string) => `My result: ${verdict}` | (verdict: string) => `Il mio risultato: ${verdict}` | src/share-card.ts:212 |
| share-card.ts·evLine | (bb: string, streak: number) => `EV loss ${bb}bb${streak > 1 ? ` · ${streak}-day streak` : ""}` | (bb: string, streak: number) => `EV loss ${bb}bb${streak > 0 ? (streak === 1 ? ` · ${streak} giorno consecutivo` : ` · ${streak} giorni consecutivi`) : ""}` | src/share-card.ts:213 |
| share-card.ts·invite | "Try today's puzzle" | "Prova la sfida di oggi" | src/share-card.ts:214 |

Guide wording of grading (GuidePage.vue):

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| GuidePage.vue·trainerTitle | "GTO Trainer — from watching to playing" | "Trainer GTO — dall’osservazione alla pratica" | src/components/GuidePage.vue:3511 |
| GuidePage.vue·gradTerm | "How grading works" | "Come funziona la valutazione" | src/components/GuidePage.vue:3517 |
| GuidePage.vue·gradBefore | "You're graded not right-or-wrong but by " | "La valutazione misura la perdita di valore atteso, espressa come " | src/components/GuidePage.vue:3518 |
| GuidePage.vue·gradBold | "EV loss (bb)" | "EV loss (bb)" | src/components/GuidePage.vue:3519 |
| GuidePage.vue·gradAfter | ". GTO mixes several actions with the same hand, so a low-frequency action isn't automatically a mistake — what matters is how much EV it gives up" | ", invece di limitarsi a «giusto» o «sbagliato». Il GTO alterna più azioni con la stessa mano: un’azione poco frequente non è per forza un errore. Ciò che conta è quanto EV perde" | src/components/GuidePage.vue:3520 |
| GuidePage.vue·verdictTerm | "Verdict thresholds" | "Soglie di valutazione" | src/components/GuidePage.vue:3522 |
| GuidePage.vue·verdictBefore | "Measured " | "Le soglie si misurano " | src/components/GuidePage.vue:3523 |
| GuidePage.vue·verdictBold | "relative to the pot" | "in rapporto al piatto" | src/components/GuidePage.vue:3524 |
| GuidePage.vue·verdictAfter | " — up to 0.35% of the pot = Best play · up to 1% = Acceptable · beyond that = Review this spot. For example, in a 5.5bb single raised pot (SRP) the cutoffs are 0.02bb and 0.06bb; in a 22.5bb 3-bet pot they're 0.08bb and 0.23bb." | ": fino allo 0,35% del piatto = Scelta migliore · fino all’1% = Accettabile · oltre = Da rivedere. Per esempio, in un piatto con un rilancio (SRP) da 5,5bb, le soglie sono 0,02bb e 0,06bb; in un piatto 3-bet da 22,5bb sono 0,08bb e 0,23bb." | src/components/GuidePage.vue:3525 |
| GuidePage.vue·verdictHint | "The same 0.08bb is a big mistake in a small pot and a trivial one in a big pot. Grading in absolute bb made 3-bet pots look worse than they are, so we switched to pot-relative grading (2026-08-15). The cutoffs have floors (0.02bb / 0.05bb): solves only converge to a target exploitability of 0.5%, so differences smaller than that can't be distinguished from solver noise." | "La stessa perdita di 0,08bb è un errore importante in un piatto piccolo e trascurabile in uno grande. Valutare solo i bb assoluti penalizzava i piatti 3-bet: dal 15/08/2026 usiamo quindi il rapporto con il piatto. Le soglie hanno un minimo di 0,02bb / 0,05bb: i calcoli convergono fino a un’exploitability obiettivo dello 0,5%, quindi differenze più piccole non si distinguono dal rumore del solver." | src/components/GuidePage.vue:3527 |
| GuidePage.vue·reviewTerm | "Review" | "Ripasso" | src/components/GuidePage.vue:3529 |
| GuidePage.vue·reviewBefore | "Hands where you lost the most EV come back via the [Review] button. By default, your history is stored " | "Con il pulsante [Ripasso] ritrovi le mani in cui hai perso più EV. Per impostazione predefinita, la cronologia resta " | src/components/GuidePage.vue:3530 |
| GuidePage.vue·filterTerm | "Filters" | "Filtri" | src/components/GuidePage.vue:3535 |
| GuidePage.vue·filterDef | "Drill just your weak areas: single raised pots, 3-bet pots, or blind vs blind" | "Allenati sulle situazioni in cui hai più difficoltà: piatti con un rilancio, piatti 3-bet o scontri tra bui" | src/components/GuidePage.vue:3536 |
| GuidePage.vue·myspotTerm | "My spots" | "I miei spot" | src/components/GuidePage.vue:3539 |
| GuidePage.vue·myspotDef | "After solving a spot yourself, choose “Practice this spot” on the results screen to create questions from it and start playing them immediately in the Trainer’s “My spots” tab. Grading uses the same criteria as the Study Spots." | "Dopo aver calcolato uno spot, premi «Allenati su questo spot» nei risultati per creare domande e iniziare subito ad allenarti nella scheda «I miei spot» del Trainer GTO. I criteri di valutazione sono gli stessi degli Esempi." | src/components/GuidePage.vue:3540 |

## 6. Results screen

Column headers EQ / EV / EQR are hard-coded, not localized (ResultTable.vue:1227-1229: `"EQ"`, `evScale===10 ? "EV (bb)" : "EV"`, `"EQR"`); CSV header row uses "Combos","Equity","EV","EQR" literally (ResultTable.vue:1566,1614). Action names: Bet → "Puntata", Raise → "Rilancio", Check/Call/Fold/All-in unchanged (ActionSummary.vue:96, ResultTable/ResultNav action maps). So a tile "Bet 33%" shows "Puntata …".

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| ActionSummary.vue·combos | "combos" | "combo" | src/components/ActionSummary.vue:82 |
| ResultTable.vue·summary | "Summary" | "Riepilogo" | src/components/ResultTable.vue:955 |
| ResultTable.vue·all | "All" | "Tutte" | src/components/ResultTable.vue:964 |
| ResultTable.vue·hand | "Hand" | "Mano" | src/components/ResultTable.vue:965 |
| ResultTable.vue·strategy | "Strategy" | "Strategia" | src/components/ResultTable.vue:966 |
| ResultTable.vue·weight | "Weight" | "Peso" | src/components/ResultTable.vue:968 |
| ResultTable.vue·weightBar | "Weight (Bar)" | "Peso (barra)" | src/components/ResultTable.vue:967 |
| ResultTable.vue·combos | "Combos" | "Combo" | src/components/ResultTable.vue:972 |
| ResultTable.vue·comboBar | "Combos (Bar)" | "Combo (barra)" | src/components/ResultTable.vue:971 |
| ResultTable.vue·actionPct | "Action %" | "Frequenza" | src/components/ResultTable.vue:961 |
| ResultTable.vue·actionEv | "Action EV" | "EV dell’azione" | src/components/ResultTable.vue:962 |
| ResultTable.vue·exportCsv | "Export summary as a CSV file" | "Esporta il riepilogo come file CSV" | src/components/ResultTable.vue:963 |
| ResultTable.vue·barWidth | "Bar Width:" | "Larghezza barre:" | src/components/ResultTable.vue:956 |
| ResultTable.vue·display | "Display:" | "Mostra:" | src/components/ResultTable.vue:960 |
| ResultTable.vue·noResults | "No results" | "Nessun risultato" | src/components/ResultTable.vue:974 |
| ResultMiddle.vue·modeLabels | { basics: "Basics", graphs: "Graphs", compare: "Compare", turn: "Turn", river: "River", } as Record<string | { basics: "Dati", graphs: "Grafici", compare: "Confronto", turn: "Turn", river: "River" } as Record<string | src/components/ResultMiddle.vue:604 |
| ResultMiddle.vue·player | "Player:" | "Giocatore:" | src/components/ResultMiddle.vue:605 |
| ResultMiddle.vue·auto | (player: string) => `Auto (${player})` | (player: string) => `Auto (${player})` | src/components/ResultMiddle.vue:606 |
| ResultMiddle.vue·barHeight | "Bar Height:" | "Altezza barre:" | src/components/ResultMiddle.vue:607 |
| ResultMiddle.vue·suit | "Suit:" | "Semi:" | src/components/ResultMiddle.vue:611 |
| ResultMiddle.vue·grouped | "Grouped" | "Raggruppati" | src/components/ResultMiddle.vue:612 |
| ResultMiddle.vue·individual | "Individual" | "Singoli" | src/components/ResultMiddle.vue:613 |
| ResultMiddle.vue·display | "Display:" | "Mostra:" | src/components/ResultMiddle.vue:614 |
| ResultMiddle.vue·chart | "Chart:" | "Grafico:" | src/components/ResultMiddle.vue:617 |
| ResultMiddle.vue·strategyCombos | "Strategy (Combos)" | "Strategia (combo)" | src/components/ResultMiddle.vue:618 |
| ResultMiddle.vue·equity | "Equity" | "Equity" | src/components/ResultMiddle.vue:619 |
| HandBreakdown.vue·hands | "Hands" | "Mani fatte" | src/components/HandBreakdown.vue:174 |
| HandBreakdown.vue·draws | "Draws" | "Progetti" | src/components/HandBreakdown.vue:176 |
| HandBreakdown.vue·noHands | "No hands to display" | "Nessuna mano da mostrare" | src/components/HandBreakdown.vue:175 |
| HandBreakdown.vue·noDraws | "No draw information" | "Nessuna informazione sui progetti" | src/components/HandBreakdown.vue:177 |
| ResultNav.vue·pot | "Pot" | "Piatto" | src/components/ResultNav.vue:675 |
| ResultNav.vue·stack | "Stack" | "Stack" | src/components/ResultNav.vue:676 |
| ResultNav.vue·equity | "Equity" | "Equity" | src/components/ResultNav.vue:677 |
| ResultNav.vue·win | (player: string) => `${player} wins` | (player: string) => `${player} vince` | src/components/ResultNav.vue:678 |
| ResultNav.vue·spotPlayer | (player: string): string => ( { flop: "Flop", turn: "Turn", river: "River", end: "End", } as Record<string, string> )[player] ?? player.toUpperCase() | (player: string): string => ({ flop: "Flop", turn: "Turn", river: "River", end: "Fine" } as Record<string, string>)[player] ?? player.toUpperCase() | src/components/ResultNav.vue:679 |
| ResultNav.vue·betPot | (label: string, formatted: string, percent: number) => `${label} ${formatted} (${percent}% pot)` | (label: string, formatted: string, percent: number) => `${label} ${formatted} (${percent}% del piatto)` | src/components/ResultNav.vue:681 |
| ResultViewer.vue·startRange | "① Start with ranges" | "① Inizia dai range" | src/components/ResultViewer.vue:377 |
| ResultViewer.vue·viewPresets | "View Study Spots" | "Apri gli Esempi" | src/components/ResultViewer.vue:378 |
| ResultViewer.vue·notRun | "You haven’t calculated your own results yet.\nYou can view example results directly in the “Study Spots” menu.\nTo calculate your own spot, complete ①~⑤, then press “Run Solver”." | "Non hai ancora calcolato i tuoi risultati.\nPuoi vedere subito i risultati degli esempi nel menu «Esempi».\nPer calcolare il tuo spot, completa i passi da ① a ⑤, poi premi «Avvia solver»." | src/components/ResultViewer.vue:379 |
| ResultViewer.vue·running | "Running the solver…" | "Calcolo in corso…" | src/components/ResultViewer.vue:380 |
| RunSolver.vue·shareSpot | "🔗 Share Spot" | "🔗 Condividi spot" | src/components/RunSolver.vue:1127 |
| RunSolver.vue·copied | "Copied!" | "Copiato!" | src/components/RunSolver.vue:1126 |
| RunSolver.vue·sharedSpotBanner | "Shared spot loaded — press [Build Tree] → [Run Solver] to start solving." | "Spot condiviso caricato: premi [Crea albero] → [Avvia solver] per iniziare il calcolo." | src/components/RunSolver.vue:1122 |
| GuidePage.vue·rTerm1 | "Top strip" | "Barra in alto" | src/components/GuidePage.vue:3486 |
| GuidePage.vue·rDef1 | "A scene picker for the action line (flop → bet → call → turn…). Click a node to see the strategy at that point" | "Ti permette di spostarti lungo la linea di gioco (flop → puntata → call → turn…). Premi un nodo per vedere la strategia in quel punto" | src/components/GuidePage.vue:3487 |
| GuidePage.vue·rTerm2 | "13×13 matrix (left)" | "Griglia 13×13 (a sinistra)" | src/components/GuidePage.vue:3489 |
| GuidePage.vue·rTerm3 | "Tiles (top right)" | "Riquadri (in alto a destra)" | src/components/GuidePage.vue:3492 |
| GuidePage.vue·rDef3 | "Action frequencies (%) and combo counts across the whole range" | "Frequenze delle azioni (%) e numero di combo dell’intero range" | src/components/GuidePage.vue:3493 |
| GuidePage.vue·rTerm4 | "Hand categories (middle right)" | "Categorie di mani (al centro a destra)" | src/components/GuidePage.vue:3494 |
| GuidePage.vue·rDef4 | "How each range connects with the board (top pair, draws…) — a quick read on who this board favors" | "Come ciascun range si lega al board (top pair, progetti…): per capire a colpo d’occhio chi è favorito" | src/components/GuidePage.vue:3495 |
| GuidePage.vue·rTerm5 | "Table (bottom right)" | "Tabella (in basso a destra)" | src/components/GuidePage.vue:3497 |
| GuidePage.vue·rDef5 | "Per-hand weight, equity, EV, and action % — click a column header to sort" | "Peso, equity, EV e frequenze delle azioni per ogni mano. Premi l’intestazione di una colonna per ordinare i dati" | src/components/GuidePage.vue:3498 |

Share-link errors are pick() calls: RunSolver.vue:2022 IT "Per condividere uno spot, inserisci prima i range OOP e IP e almeno 3 carte del board." · RunSolver.vue:2038 IT "Il collegamento di condivisione è troppo lungo: semplifica le impostazioni dell’albero oppure esportale in un file."
Scene picker: there is no separate "scene picker" label; the guide calls the top strip «Barra in alto» (rTerm1) and describes it in rDef1.

## 7. How to Use (Guida), solver controls, rake, node lock, save/load

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| GuidePage.vue·quickTitle | "1-minute start — begin here if you're new" | "Inizia in un minuto — parti da qui" | src/components/GuidePage.vue:3434 |
| GuidePage.vue·quickStep1Desktop | "On the left, click " | "Nel menu a sinistra, scegli " | src/components/GuidePage.vue:3435 |
| GuidePage.vue·quickStep1Btn | "Study Spots" | "Esempi" | src/components/GuidePage.vue:3437 |
| GuidePage.vue·quickStep2Before | "Open any spot and hit" | "Apri uno spot e premi" | src/components/GuidePage.vue:3439 |
| GuidePage.vue·quickStep2Btn | "[⚡ View results]" | "[⚡ Mostra risultati]" | src/components/GuidePage.vue:3440 |
| GuidePage.vue·quickStep2After | " — the solution appears immediately" | " — la soluzione appare subito" | src/components/GuidePage.vue:3441 |
| GuidePage.vue·quickStep3 | "Then use “Reading the results screen” below to make sense of the numbers" | "Poi leggi «Come leggere i risultati» qui sotto per capire i numeri" | src/components/GuidePage.vue:3442 |
| GuidePage.vue·termsTitle | "Four terms are all you need" | "Ti bastano quattro termini" | src/components/GuidePage.vue:3445 |
| GuidePage.vue·customTitleBefore | "Solving a custom spot — follow the " | "Calcola uno spot personalizzato — segui i numeri ① → ⑤ " | src/components/GuidePage.vue:3455 |
| GuidePage.vue·customTitleDesktop | "sidebar" | "nel menu laterale" | src/components/GuidePage.vue:3456 |
| GuidePage.vue·customTitleMobile | "top “Custom Spot” menu" | "nel menu «Spot personalizzato» in alto" | src/components/GuidePage.vue:3457 |
| GuidePage.vue·customTitleAfter | " numbers ① → ⑤ in order" | " nell’ordine indicato" | src/components/GuidePage.vue:3458 |
| GuidePage.vue·step1Bold | "① OOP Range / ② IP Range" | "① Range OOP / ② Range IP" | src/components/GuidePage.vue:3459 |
| GuidePage.vue·step1After | " — paint the 13×13 grid by clicking and dragging, or type it as text: " | " — seleziona le mani nella griglia 13×13 facendo clic e trascinando, oppure inserisci il range come testo: " | src/components/GuidePage.vue:3460 |
| GuidePage.vue·step1Hint | "22+ = every pocket pair · A2s+ = A2s through AKs · KTo+ = KTo through KQo. On the grid: diagonal = pocket pairs, upper right = suited, lower left = offsuit" | "22+ = tutte le coppie servite · A2s+ = da A2s ad AKs · KTo+ = da KTo a KQo. Nella griglia: diagonale = coppie servite, in alto a destra = suited, in basso a sinistra = offsuit" | src/components/GuidePage.vue:3462 |
| GuidePage.vue·exampleHeader | "New here? Copy these and paste them into the range inputs (standard BTN vs BB 100bb — the same ranges the Study Spots use)" | "È la prima volta? Copia questi range e incollali nei campi di input (BTN vs BB standard, 100bb: gli stessi range degli Esempi)" | src/components/GuidePage.vue:3464 |
| GuidePage.vue·exampleHeader | "New here? Copy these and paste them into the range inputs (standard BTN vs BB 100bb)" | "È la prima volta? Copia questi range e incollali nei campi di input (BTN vs BB standard, 100bb)" | src/components/GuidePage.vue:3950 |
| GuidePage.vue·exOopLabel | "OOP (BB Caller)" | "OOP (BB, call)" | src/components/GuidePage.vue:3466 |
| GuidePage.vue·exIpLabel | "IP (BTN Opener)" | "IP (BTN, apertura)" | src/components/GuidePage.vue:3467 |
| GuidePage.vue·step3Bold | "③ Board" | "③ Board" | src/components/GuidePage.vue:3470 |
| GuidePage.vue·step3After | " — click three flop cards, or hit “Random Flop”" | " — scegli le tre carte del flop oppure premi «Flop casuale»" | src/components/GuidePage.vue:3471 |
| GuidePage.vue·step4Bold | "④ Bet Sizes (Tree Settings)" | "④ Dimensioni di puntata (Impostazioni dell’albero)" | src/components/GuidePage.vue:3472 |
| GuidePage.vue·step4After | " — leave the defaults at first. Just check the starting pot and effective stack" | " — per iniziare, lascia i valori predefiniti. Controlla solo il piatto iniziale e lo stack effettivo" | src/components/GuidePage.vue:3473 |
| GuidePage.vue·step4Hint | "Custom-spot inputs are in arbitrary integer chips. To think in bb, use 10 chips = 1bb (e.g., pot 55 = 5.5bb). The Study Spots and Trainer convert on this scale automatically." | "Negli spot personalizzati inserisci importi interi in fiches, con una scala a tua scelta. Per ragionare in bb, usa 10 fiches = 1bb (per esempio, piatto 55 = 5,5bb). Gli Esempi e il Trainer GTO applicano automaticamente questa conversione." | src/components/GuidePage.vue:3475 |
| GuidePage.vue·step4Hint | "Custom-spot inputs are in arbitrary integer chips. To think in bb, use 10 chips = 1bb (e.g., pot 55 = 5.5bb)." | "Negli spot personalizzati inserisci importi interi in fiches, con una scala a tua scelta. Per ragionare in bb, usa 10 fiches = 1bb (per esempio, piatto 55 = 5,5bb)." | src/components/GuidePage.vue:3952 |
| GuidePage.vue·step5Bold1 | "⑤ Run Solver" | "⑤ Avvia solver" | src/components/GuidePage.vue:3477 |
| GuidePage.vue·step5Mid | " — hit “Build Tree”, then “Run Solver” when it finishes. Once “Solver finished!” appears, open the " | " — premi «Crea albero», poi «Avvia solver» quando l’albero è pronto. Quando appare «Calcolo completato!», apri " | src/components/GuidePage.vue:3478 |
| GuidePage.vue·step5Bold2 | "[Results]" | "[Risultati]" | src/components/GuidePage.vue:3480 |
| GuidePage.vue·step5After | " tab at the top" | " in alto" | src/components/GuidePage.vue:3481 |
| GuidePage.vue·step5Hint | "Solving runs on your own machine and takes a few seconds to a few minutes. Use [Share Spot] on screen ⑤ to copy a link to your spot and ask about it in the community" | "Il calcolo avviene sul tuo dispositivo e richiede da pochi secondi a qualche minuto. Usa [🔗 Condividi spot] nella schermata ⑤ per copiare il collegamento allo spot e discuterne nella comunità" | src/components/GuidePage.vue:3482 |
| GuidePage.vue·resultsTitle | "Reading the results screen" | "Come leggere i risultati" | src/components/GuidePage.vue:3485 |
| BoardSelector.vue·randomFlop | "Random Flop" | "Flop casuale" | src/components/BoardSelector.vue:228 |
| BoardSelector.vue·clear | "Clear" | "Svuota" | src/components/BoardSelector.vue:227 |
| BoardSelector.vue·placeholder | "e.g., AsKd7c" | "es. AsKd7c" | src/components/BoardSelector.vue:226 |
| RunSolver.vue·buildTree | "Build Tree" | "Crea albero" | src/components/RunSolver.vue:1125 |
| RunSolver.vue·runSolver | "Run Solver" | "Avvia solver" | src/components/RunSolver.vue:1155 |
| RunSolver.vue·numThreadsLabel | "Number of threads:" | "Numero di thread:" | src/components/RunSolver.vue:1124 |
| RunSolver.vue·precisionMode | "Precision mode:" | "Modalità di precisione:" | src/components/RunSolver.vue:1133 |
| RunSolver.vue·fp32Label | "32-bit FP:" | "FP a 32 bit:" | src/components/RunSolver.vue:1140 |
| RunSolver.vue·int16Label | "16-bit integer:" | "Interi a 16 bit:" | src/components/RunSolver.vue:1141 |
| RunSolver.vue·precisionTipFp | "32-bit floating point (FP): recommended when memory usage is below the limit (3.9GB). About 7 significant digits and better performance." | "Virgola mobile a 32 bit (FP): consigliata quando l’uso della memoria resta sotto il limite di 3,9 GB. Offre circa 7 cifre significative e prestazioni migliori." | src/components/RunSolver.vue:1136 |
| RunSolver.vue·precisionTipInt | "16-bit integer: an alternative when the 32-bit FP mode exceeds the memory limit. About 4 significant digits, so it is not suitable for a target exploitability below 0.1%, and it performs worse than 32-bit FP." | "Interi a 16 bit: un’alternativa quando la modalità FP a 32 bit supera il limite di memoria. Offre circa 4 cifre significative, quindi non è adatta a un’exploitability obiettivo inferiore allo 0,1%, ed è più lenta della modalità FP a 32 bit." | src/components/RunSolver.vue:1138 |
| RunSolver.vue·targetLabel | "Target exploitability:" | "Exploitability obiettivo:" | src/components/RunSolver.vue:1145 |
| RunSolver.vue·exploitTipIntro | "Specifies the acceptable distance from the Nash equilibrium. A lower value gives a more accurate result, but the computation takes longer." | "Indica la distanza accettabile dall’equilibrio di Nash. Un valore più basso dà un risultato più preciso, ma richiede più tempo di calcolo." | src/components/RunSolver.vue:1146 |
| RunSolver.vue·maxIterationsLabel | "Max iterations:" | "Iterazioni massime:" | src/components/RunSolver.vue:1154 |
| RunSolver.vue·finished | "Solver finished!" | "Calcolo completato!" | src/components/RunSolver.vue:1162 |
| RunSolver.vue·stop | "Stop" | "Interrompi" | src/components/RunSolver.vue:1156 |
| RunSolver.vue·pause | "Pause" | "Pausa" | src/components/RunSolver.vue:1157 |
| RunSolver.vue·resume | "Resume" | "Riprendi" | src/components/RunSolver.vue:1158 |
| TreeConfig.vue·startingPot | "Starting Pot:" | "Piatto iniziale:" | src/components/TreeConfig.vue:1816 |
| TreeConfig.vue·effectiveStack | "Effective Stack:" | "Stack effettivo:" | src/components/TreeConfig.vue:1817 |
| TreeConfig.vue·rake | "Rake:" | "Rake:" | src/components/TreeConfig.vue:1818 |
| TreeConfig.vue·rakeCap | "Rake Cap:" | "Limite del rake:" | src/components/TreeConfig.vue:1819 |
| TreeConfig.vue·advancedHint | "Rake · All-in · Merging — you can usually leave these unchanged" | "Rake · All-in · Unione — di solito puoi lasciare questi valori invariati" | src/components/TreeConfig.vue:1811 |
| TreeConfig.vue·advancedSettings | "Advanced settings ▸" | "Impostazioni avanzate ▸" | src/components/TreeConfig.vue:1812 |
| TreeConfig.vue·chipNote | "Enter amounts in integer chips. To think in bb, use 10 chips = 1bb (e.g., pot 55 = 5.5bb, stack 1000 = 100bb). If you enter or edit the pot or stack yourself, results stay in your chip scale; if you load one of the Study Spots and solve without changing the pot or stack, results are converted to bb." | "Inserisci gli importi in fiches intere. Per ragionare in bb, usa 10 fiches = 1bb (es. piatto 55 = 5,5bb, stack 1000 = 100bb). Se inserisci o modifichi il piatto o lo stack, i risultati restano nella tua scala di fiches; se carichi uno degli «Esempi» e calcoli senza modificare il piatto o lo stack, i risultati vengono convertiti in bb." | src/components/TreeConfig.vue:1814 |
| TreeConfig.vue·chipNote | "Enter amounts in integer chips. To think in bb, use 10 chips = 1bb (e.g., pot 55 = 5.5bb, stack 1000 = 100bb). If you enter or edit the pot or stack yourself, results stay in your chip scale." | "Inserisci gli importi in fiches intere. Per ragionare in bb, usa 10 fiches = 1bb (es. piatto 55 = 5,5bb, stack 1000 = 100bb). Se inserisci o modifichi il piatto o lo stack, i risultati restano nella tua scala di fiches." | src/components/TreeConfig.vue:2030 |
| TreeConfig.vue·addAllInLabel | "Add All-In Threshold:" | "Soglia per aggiungere un all-in:" | src/components/TreeConfig.vue:1844 |
| TreeConfig.vue·forceAllInLabel | "Force All-In Threshold:" | "Soglia per forzare l’all-in:" | src/components/TreeConfig.vue:1847 |
| TreeConfig.vue·mergingLabel | "Merging Threshold:" | "Soglia di unione:" | src/components/TreeConfig.vue:1855 |
| node-lock-labels.ts·title | "Lock this node’s strategy" | "Blocca la strategia del nodo" | src/node-lock-labels.ts:296 |
| node-lock-labels.ts·apply | "Lock and solve again" | "Blocca e ricalcola" | src/node-lock-labels.ts:297 |
| node-lock-labels.ts·remove | "Unlock and solve again" | "Sblocca e ricalcola" | src/node-lock-labels.ts:299 |
| node-lock-labels.ts·clearAll | "Unlock all and solve again" | "Sblocca tutto e ricalcola" | src/node-lock-labels.ts:298 |
| node-lock-labels.ts·comparison | "Before/after comparison" | "Confronto prima/dopo" | src/node-lock-labels.ts:303 |
| node-lock-labels.ts·banner | "Solved with part of the strategy fixed — not an equilibrium (GTO) strategy · {count} locked nodes" | "Calcolo con parte della strategia fissata: non è una strategia di equilibrio GTO · Nodi bloccati: {count}" | src/node-lock-labels.ts:309 |
| AboutPage.vue·featureLockTitle | "Strategy locking (node lock)" | "Node locking" | src/components/AboutPage.vue:955 |
| AboutPage.vue·featureLockDesc | "Set the opponent’s strategy and solve again — see how your strategy changes when the opponent makes mistakes" | "Fissa la strategia avversaria e ricalcola: scopri come cambia la tua quando l’avversario commette errori" | src/components/AboutPage.vue:956 |
| GuidePage.vue·lockTitle | "Strategy locking (node lock) — how does your strategy change when the opponent makes mistakes?" | "Node locking — come cambia la tua strategia se l’avversario commette errori?" | src/components/GuidePage.vue:3501 |
| DbItemPicker.vue·save | "Save" | "Salva" | src/components/DbItemPicker.vue:757 |
| DbItemPicker.vue·load | "Load" | "Carica" | src/components/DbItemPicker.vue:755 |
| DbItemPicker.vue·overwrite | "Overwrite" | "Sostituisci" | src/components/DbItemPicker.vue:756 |
| DbItemPicker.vue·rename | "Rename" | "Rinomina" | src/components/DbItemPicker.vue:758 |
| DbItemPicker.vue·deleteLabel | "Delete" | "Elimina" | src/components/DbItemPicker.vue:760 |
| DbItemPicker.vue·addGroup | "Add Group" | "Nuovo gruppo" | src/components/DbItemPicker.vue:759 |
| DbItemPicker.vue·importJsonLabel | "Import JSON" | "Importa JSON" | src/components/DbItemPicker.vue:761 |
| DbItemPicker.vue·exportJsonLabel | "Export JSON" | "Esporta JSON" | src/components/DbItemPicker.vue:762 |
| DbItemPicker.vue·noSavedRanges | "You have no saved ranges yet. Click “Save” and enter a name to keep your current range here. Use “Load” to bring it back next time." | "Non hai ancora range salvati. Premi «Salva» e inserisci un nome per conservare qui il range attuale. La prossima volta, usa «Carica» per recuperarlo." | src/components/DbItemPicker.vue:751 |

## 8. Hand review, login, install, AGPL credit, notice

| item | EN (verbatim source) | IT (verbatim source) | file:line |
|---|---|---|---|
| hand-review-labels.ts·title | "Hand review" | "Analisi mani" | src/hand-review-labels.ts:439 |
| hand-review-labels.ts·navTitle | "Hand review" | "Analisi mani" | src/hand-review-labels.ts:460 |
| hand-review-labels.ts·scopeTitle | "Review assumptions" | "Ipotesi dell’analisi" | src/hand-review-labels.ts:462 |
| hand-review-labels.ts·scopeNote | "Free · Online 6-max cash, 100bb. Results may not suit pub games or tournaments. 3-bet and 4-bet pots can be reviewed for 11 seat combinations (not yet: SB 3-betting a UTG, HJ or CO open, or HJ 3-betting a UTG open). Multiway pots cannot be reviewed." | "Gratis · Cash game online 6-max, 100bb. I risultati potrebbero non essere adatti alle partite nei pub o ai tornei. Puoi analizzare piatti 3-bet e 4-bet per 11 combinazioni di posizioni (non ancora disponibili: SB che fa 3-bet su un’apertura di UTG, HJ o CO, oppure HJ che fa 3-bet su un’apertura di UTG). I piatti multiway non possono essere analizzati." | src/hand-review-labels.ts:455 |
| hand-review-labels.ts·practiceSpot | "Practice this spot" | "Allenati su questo spot" | src/hand-review-labels.ts:463 |
| hand-review-labels.ts·chooseHand | "Your 2 cards" | "Le tue 2 carte" | src/hand-review-labels.ts:446 |
| hand-review-labels.ts·chooseFlop | "3 flop cards" | "3 carte del flop" | src/hand-review-labels.ts:446 |
| hand-review-labels.ts·multiway | "3+ players" | "3+ giocatori" | src/hand-review-labels.ts:440 |
| hand-review-labels.ts·notSupported | "Cannot be reviewed" | "Analisi non disponibile" | src/hand-review-labels.ts:440 |
| saved-sync-labels.ts·invite | "Sign in to open your saved list on any phone or PC" | "Accedi per aprire la tua lista salvata da qualsiasi telefono o PC" | src/saved-sync-labels.ts:169 |
| saved-sync-labels.ts·google | "Continue with Google" | "Continua con Google" | src/saved-sync-labels.ts:170 |
| saved-sync-labels.ts·kakao | "Continue with Kakao" | "Continua con Kakao" | src/saved-sync-labels.ts:171 |
| saved-sync-labels.ts·telegram | "Continue with Telegram" | "Continua con Telegram" | src/saved-sync-labels.ts:172 |
| member-limits.ts·memberScenario | "This situation is only for free members — sign in to open it right away" | "Questa situazione è riservata a chi ha un account gratuito: accedi per aprirla subito" | src/member-limits.ts:140 |
| member-limits.ts·saveFull | "Sign in to save more than 10 items and open your list on any phone or PC" | "Accedi per salvare più di 10 elementi e aprire la tua lista da qualsiasi telefono o PC" | src/member-limits.ts:138 |
| InstallBanner.vue·title | "Add to your home screen?" | "Vuoi aggiungere l’app alla schermata Home?" | src/components/InstallBanner.vue:532 |
| InstallBanner.vue·default1 | "It opens with a single tap, and " | "Si apre con un tocco e " | src/components/InstallBanner.vue:538 |
| InstallBanner.vue·defaultB1 | `keeps all ${SPOT_COUNT} Study Spots and the Trainer on your device` | `salva sul dispositivo tutti i ${SPOT_COUNT} esempi e il Trainer GTO` | src/components/InstallBanner.vue:539 |
| InstallBanner.vue·defaultB1 | "keeps the app on your device" | "salva l’app sul dispositivo" | src/components/InstallBanner.vue:686 |
| InstallBanner.vue·default2 | " so you can study even without an internet connection." | ", così puoi studiare anche senza connessione." | src/components/InstallBanner.vue:540 |
| InstallBanner.vue·default2 | " so you can use it even without an internet connection." | ", così puoi usarla anche senza connessione." | src/components/InstallBanner.vue:687 |
| InstallBanner.vue·ios1 | "Tap the " | "Tocca il pulsante " | src/components/InstallBanner.vue:541 |
| InstallBanner.vue·iosB1 | "Share button" | "Condividi" | src/components/InstallBanner.vue:542 |
| InstallBanner.vue·ios2 | " below, then choose " | " qui sotto, poi scegli " | src/components/InstallBanner.vue:543 |
| InstallBanner.vue·iosB2 | "“Add to Home Screen”" | "«Aggiungi alla schermata Home»" | src/components/InstallBanner.vue:544 |
| InstallBanner.vue·ios3 | ". It opens with a single tap, with the Study Spots and Trainer saved for offline use." | ". Si apre con un tocco e salva gli esempi e il Trainer GTO per l’uso offline." | src/components/InstallBanner.vue:545 |
| InstallBanner.vue·ios3 | ". It opens with a single tap and works even offline." | ". Si apre con un tocco e funziona anche offline." | src/components/InstallBanner.vue:688 |
| InstallBanner.vue·install | "Add to Home Screen" | "Installa" | src/components/InstallBanner.vue:547 |
| InstallBanner.vue·later | "Later" | "Più tardi" | src/components/InstallBanner.vue:549 |
| InstallBanner.vue·safety | "Nothing gets installed on your system — it's just a browser shortcut. It asks for no permissions, and you can remove it anytime by long-pressing the icon, just like an app." | "Non si installa nulla nel sistema: è solo un collegamento del browser. L’app non richiede autorizzazioni e puoi rimuoverla in qualsiasi momento tenendo premuta l’icona, come per le altre app." | src/components/InstallBanner.vue:552 |
| AboutPage.vue·heroTitle1 | "GTO strategy," | "Strategia GTO," | src/components/AboutPage.vue:936 |
| AboutPage.vue·heroTitle2 | "right in your browser." | "direttamente nel browser." | src/components/AboutPage.vue:937 |
| AboutPage.vue·heroSub1 | "Nothing to install, nothing to pay. Enter your ranges and a board," | "Senza installare né pagare nulla. Inserisci i range e il board:" | src/components/AboutPage.vue:938 |
| AboutPage.vue·heroSub2 | " and the optimal strategy is computed right on your own device." | " il tuo dispositivo calcola la strategia ottimale." | src/components/AboutPage.vue:939 |
| AboutPage.vue·ctaPresets | "View Study Spots" | "Apri gli Esempi" | src/components/AboutPage.vue:940 |
| AboutPage.vue·ctaTrainer | "GTO Trainer" | "Trainer GTO" | src/components/AboutPage.vue:941 |
| AboutPage.vue·ctaDaily | "Daily Puzzle" | "Sfida del giorno" | src/components/AboutPage.vue:942 |
| AboutPage.vue·ctaGuide | "How to Use" | "Guida" | src/components/AboutPage.vue:944 |
| AboutPage.vue·ctaInstall | "Add to Home Screen" | "Aggiungi alla schermata Home" | src/components/AboutPage.vue:945 |
| AboutPage.vue·installNote | "Installing saves the Study Spots and Trainer to your device, so you can keep practicing even when you're offline. It's a browser shortcut, not a program — it never asks for any permissions." | "L’installazione salva gli Esempi e il Trainer GTO sul dispositivo, così puoi continuare ad allenarti anche offline. È un collegamento del browser, non un programma, e non richiede autorizzazioni." | src/components/AboutPage.vue:946 |
| AboutPage.vue·installNote | "Installing saves the app to your device, so it opens even when you're offline. It's a browser shortcut, not a program — it never asks for any permissions." | "L’installazione salva l’app sul dispositivo, così puoi aprirla anche offline. È un collegamento del browser, non un programma, e non richiede autorizzazioni." | src/components/AboutPage.vue:1325 |
| AboutPage.vue·features | [ { title: "Free", desc: "Every feature, no usage limits" }, { title: "Offline Study", desc: "Add it to your home screen and practice without an internet connection" }, { title: "Fast Solving", desc: "Multithreaded — desktop-solver speed" }, { title: "GTO Trainer", desc: "Play spots, graded on EV loss relative to the pot" }, ] | [ { title: "Gratis", desc: "Tutte le funzioni, senza limiti d’uso" }, { title: "Studio offline", desc: "Aggiungi l’app alla schermata Home e allenati senza internet" }, { title: "Calcoli rapidi", desc: "Più thread, velocità da solver desktop" }, { title: "Trainer GTO", desc: "Allenati sugli spot: la valutazione misura l’EV loss in rapporto al piatto" }, ] | src/components/AboutPage.vue:949 |
| AboutPage.vue·features | [ { title: "Free", desc: "Every feature, no usage limits" }, { title: "Offline", desc: "Add it to your home screen and use it without an internet connection" }, { title: "Fast Solving", desc: "Multithreaded — desktop-solver speed" }, { title: "Charts & Equity", desc: "Opening & defense ranges, plus hand and range equity" }, ] | [ { title: "Gratis", desc: "Tutte le funzioni, senza limiti d’uso" }, { title: "Offline", desc: "Aggiungi l’app alla schermata Home e usala senza internet" }, { title: "Calcoli rapidi", desc: "Più thread, velocità da solver desktop" }, { title: "Range ed equity", desc: "Range di apertura e difesa, equity di mani e range" }, ] | src/components/AboutPage.vue:1327 |
| AboutPage.vue·stepsTitle | "New here?" | "È la prima volta?" | src/components/AboutPage.vue:959 |
| AboutPage.vue·steps | [ "Open any spot under Study Spots and hit [View results] — solutions appear instantly", "Check How to Use to learn how to read the results screen", "Try the GTO Trainer — it shows exactly how many bb each decision costs you", "Once you're comfortable, solve your own hands with Custom Spot (①–⑤)", ] | [ "Apri uno spot negli Esempi e premi [Mostra risultati]: la soluzione appare subito", "Apri la Guida per imparare a leggere i risultati", "Prova il Trainer GTO: scopri quanti bb ti costa ogni decisione", "Quando hai preso confidenza, calcola le tue mani con Spot personalizzato (①–⑤)", ] | src/components/AboutPage.vue:960 |
| AboutPage.vue·steps | [ "Skim the opening & defense ranges under Preflop Charts", "Check How to Use to learn how to read the results screen", "Once you're comfortable, solve your own hands with Custom Spot (①–⑤)", ] | [ "Esplora i range di apertura e difesa in Range preflop", "Apri la Guida per imparare a leggere i risultati", "Quando hai preso confidenza, calcola le tue mani con Spot personalizzato (①–⑤)", ] | src/components/AboutPage.vue:1333 |
| AboutPage.vue·notes | "On iOS and Safari, browser limitations force single-threaded solving, so it runs slower — on macOS we recommend Chrome. Available memory is capped at 4GB (a WebAssembly limit), so solving big spots yourself is smoother on a PC." | "Su iOS e Safari, i limiti del browser impongono il calcolo con un solo thread, quindi i tempi sono più lunghi. Su macOS consigliamo Chrome. La memoria disponibile è limitata a 4 GB da WebAssembly: per calcolare spot complessi è più comodo usare un PC." | src/components/AboutPage.vue:970 |
| AboutPage.vue·landingBefore | "Prefer to read up first on what a GTO solver is and how to interpret the output? See" | "Vuoi prima capire cos’è un solver GTO e come interpretarne i risultati? Leggi" | src/components/AboutPage.vue:966 |
| AboutPage.vue·landingLink | "the HoldemMaster solver guide" | "la guida al solver di HoldemMaster" | src/components/AboutPage.vue:968 |
| AboutPage.vue·creditBefore | "This app is based on" | "Questa app si basa su" | src/components/AboutPage.vue:972 |
| AboutPage.vue·creditMid1 | " (by Wataru Inariba, AGPL-3.0), localized and enhanced by" | " (di Wataru Inariba, AGPL-3.0), localizzato e arricchito da" | src/components/AboutPage.vue:973 |
| AboutPage.vue·creditBrand | "HoldemMaster" | "HoldemMaster" | src/components/AboutPage.vue:974 |
| AboutPage.vue·creditMid2 | ". The full modified source code is published on" | ". Il codice sorgente completo, incluse le modifiche, è pubblicato su" | src/components/AboutPage.vue:975 |
| AboutPage.vue·creditAfter | " under the same license." | " con la stessa licenza." | src/components/AboutPage.vue:976 |
| GuidePage.vue·installTitle | "Install to your home screen and study offline" | "Installa nella schermata Home e studia offline" | src/components/GuidePage.vue:3543 |
| GuidePage.vue·openBefore | "This solver is AGPL-3.0 open source (" | "Questo solver è open source, con licenza AGPL-3.0 (" | src/components/GuidePage.vue:3583 |

AGPL sentence assembled (AboutPage.vue:166-180; link text between creditBefore and creditMid1 is the literal "WASM Postflop" linking https://github.com/b-inary/wasm-postflop; link text after creditMid2 is the literal "GitHub" (AboutPage.vue:183)): «Questa app si basa su WASM Postflop (di Wataru Inariba, AGPL-3.0), localizzato e arricchito da HoldemMaster. Il codice sorgente completo, incluse le modifiche, è pubblicato su GitHub con la stessa licenza.»
Note: only Kakao is hidden outside ko (MemberLoginLine.vue `v-if="isKo"`); IT shows Google + Telegram buttons.

Sidebar announcement (SiteNotice.vue) is NOT in the repo — fetched at runtime from https://holdem-review-data.review-data-worker.workers.dev/notice.json (id "2026-10-limp-soon"), fetched 2026-10-17: it = "🔊 Avviso: dati sui piatti limpati (SB limp vs BB) in arrivo" · en = "🔊 Notice: Limped pots (SB limp vs BB) — coming soon". Falls back to en if it key missing; truncated to 200 chars.

## 9. Outbound link to main site (src/outbound.ts)

`src/outbound.ts:119` → `it: { "": "/it" },` (comment line 118: «IT3: 지시서 2026-10-16 실측 /it 200 · /it/solver·/it/community 404.»). There is **no `"/solver"` key for it**, so `mainSiteUrl("/solver")` returns "" and the landing link is hidden (outbound.ts:124-129); `solverReviewsUrl("it")` also returns "". AboutPage `landingLink` «la guida al solver di HoldemMaster» therefore does not render in it until `"/solver": "/it/solver"` is added on the solver side (after /it/solver goes live). Trainer shareText uses https://solver.holdemmaster.com/?view=trainer&lang=it.

## Appendix
Full dump of every en/it dictionary pair (950 rows, `file:line | key | EN | IT`): C:/Users/하봄/AppData/Local/Temp/claude/C--Users----Downloads-Holdem-Project/5fb9eddd-b7bc-43f7-9294-4b82b223e4ca/scratchpad/solver-it-all-strings.txt
pick() calls (17th arg = it): x/head.txt in the same scratchpad.
