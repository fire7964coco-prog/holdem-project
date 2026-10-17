/**
 * `/it/solver` FAQ — 화면(solver-client.tsx)과 서버 `page.tsx`의 FAQPage 스키마가 **같은 배열**을 쓴다.
 * 마스터 = `app/en/solver/faq.ts`(21문항) — 2026-10-17 신설.
 *
 * 🔴 EN 21문항 + 언어 문항 1개(«Il solver è in italiano?») + tr·vi·ru 공통 3문항(①②③) + ru 선례 1문항(④) = 26문항(ru와 같은 구성).
 *   ① «A cosa serve un solver di poker?»(도구 쪽 정의 · SERP reddit «cos'è un solver e a cosa serve?» 질문형)
 *   ② RTA — «Posso usare il solver mentre gioco?»(공부용 vs 실시간 사용 구분만 · 룸 이름·추천·법률·리얼머니 어휘 없음 · 합법성 축 아님)
 *   ③ «Il solver indovina le carte dell’avversario?»(입력 = 양측 range)
 *   ④ «Che differenza c’è tra GTO ed exploit?»(SERP «gto poker» 정의 의도 6/10 · reddit «La strategia GTO … è davvero vincente?»)
 * 🔴 GTO 풀이 = «strategia ottimale secondo la teoria dei giochi» — 경쟁 일부의 «teoria dei giochi ottimale»(이론이 최적) 오역을
 *   경쟁사 이름 없이 바로잡는다(뱅크 it-tools §6).
 * 🔴 솔버 화면 라벨 = 솔버 it 소스 축어(`docs/solver-app-verbatim-it-2026-10-17.md`) · 다른 언어판은 열거하지 않는다.
 * 🔴 수치는 EN과 값이 같다 — 구분자만 이탈리아식(0,35% · 0,08bb · 5,5bb · 1.755).
 * 🔴 성별 추측 형용사 금지(솔버 «Hai completato…» 결) · tu체.
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_IT: FaqItem[] = [
  {
    q: "Cos’è un solver GTO?",
    a: "Un solver GTO è un programma che calcola da zero la strategia ottimale secondo la teoria dei giochi. Gli dai i range dei due giocatori, il board, gli stack e le dimensioni di puntata, e il solver itera verso un equilibrio di Nash; poi ti dice con che frequenza ciascuna delle 169 mani iniziali dovrebbe puntare, fare check o foldare. Non è una tabella che conserva l’opinione di qualcuno: calcola la risposta per il tuo spot preciso.",
  },
  {
    q: "Cosa significa GTO nel poker?",
    a: "GTO sta per Game Theory Optimal, cioè una strategia ottimale secondo la teoria dei giochi: ottimale è la strategia, non la teoria. È una strategia che sul lungo periodo non si può sfruttare, comunque si adatti l’avversario. La sua caratteristica è il mix: la stessa mano può puntare il 70% delle volte e fare check il 30%, così la tua linea non si legge. Per questo il risultato di un solver è una tabella di frequenze e non un’istruzione unica.",
  },
  {
    // it ① — tr·vi·ru 공통.
    q: "A cosa serve un solver di poker?",
    a: "Per lo spot che imposti tu — due range, board, piatto, stack e dimensioni di puntata — il solver calcola quale azione scegliere con ogni mano, con che frequenza, e quanto EV (valore atteso) porta ogni azione. Da quei numeri vedi su quali board la continuation bet esce più spesso, quali mani fanno check e perché cambia il sizing. Ha anche dei limiti: la risposta vale solo per i range e l’albero che hai inserito, e questo solver calcola solo spot postflop heads-up (uno contro uno).",
  },
  {
    q: "Questo solver GTO è davvero gratis?",
    a: "Sì. Tutte le funzioni sono gratuite, senza limiti di utilizzo, senza metodo di pagamento, senza livelli bloccati e senza account obbligatorio. L’accesso è facoltativo e sincronizza tra i dispositivi lo storico di Esempi e Sfida del giorno. I tuoi spot calcolati e il loro storico di allenamento restano su questo dispositivo anche dopo l’accesso. Il solver si basa sul motore open source WASM Postflop (AGPL-3.0) e il codice modificato da HoldemMaster è pubblicato con la stessa licenza.",
  },
  {
    q: "Devo scaricare o installare qualcosa?",
    a: "No. È un’applicazione WebAssembly, quindi parte appena apri la pagina in Chrome, Edge, Firefox o Safari. Il calcolo gira sulla tua CPU e non su un server, quindi un computer più veloce calcola più in fretta. Niente installer, niente chiave di licenza, nessun programma desktop da aggiornare. Se vuoi un’icona, puoi comunque aggiungerlo alla schermata Home.",
  },
  {
    q: "Quanto è preciso un solver che gira nel browser?",
    a: "Scegli tu l’exploitability obiettivo e il solver itera fino a raggiungerla. Un obiettivo più basso richiede più tempo di calcolo; controlla l’exploitability finale, perché il calcolo può fermarsi anche al limite di iterazioni. Il risultato vale per i range e l’albero di gioco che hai inserito. Memoria e velocità limitano la grandezza dell’albero: il motore WebAssembly può usare circa 4 GB, quindi gli alberi molto grandi sono più adatti a un solver desktop.",
  },
  {
    q: "Come si usa un solver di poker la prima volta?",
    a: "Parti dagli Esempi invece che da uno spot personalizzato. Sono già calcolati, quindi impari a leggere il risultato prima di imparare a impostarlo. Quando passi al tuo spot, le schede dello spot personalizzato vanno in ordine: ① Range OOP, ② Range IP, ③ Board, ④ Dimensioni di puntata, ⑤ Avvia solver. Al primo calcolo lascia l’albero delle puntate con i valori predefiniti.",
  },
  {
    q: "Quali situazioni di poker può analizzare?",
    a: "Qualsiasi spot postflop heads-up. Imposti i due range, il flop (e turn e river se vuoi studiare un runout preciso), il piatto iniziale e lo stack effettivo, e le dimensioni di puntata e di rilancio street per street, rake e rake cap compresi. Il preflop qui non si calcola: per i range di apertura di ogni posizione usa la tabella delle mani iniziali.",
  },
  {
    q: "Posso vedere subito le strategie del flop senza calcolare?",
    a: "Sì: apri «Studio dei flop» nella barra laterale. Sono risultati precalcolati, quindi compaiono senza attesa. Scegli «Open · Call», «Piatto 3-bet» o «Piatto 4-bet», le posizioni e un flop di tre carte, e ottieni le frequenze delle azioni di chi parla per primo più una griglia 13×13 di strategia e range; clicca un’azione per seguire la linea fino alla fine del flop. La base è 6-max 100bb con errore obiettivo dello 0,3%, e ogni spot pronto copre tutti i 1.755 flop distinti (raggruppati per isomorfismo dei semi). Le dimensioni di puntata sono fisse al 33% e al 75% sul flop con rilanci al 60%, e dal turn in poi non c’è nulla di salvato. Le combinazioni di posizioni non ancora calcolate mostrano «In arrivo». Per altre dimensioni o per turn e river usa «Apri nel solver» e calcolalo tu.",
  },
  {
    q: "Posso vedere a colpo d’occhio su quali board si punta di più?",
    a: "Sì: apri «Statistiche flop» nella barra laterale. Scegli uno spot e le posizioni, e ottieni frequenza di puntata ed EV medi su 1.755 flop precalcolati, pesati per quanto spesso esce ciascun flop. Copre due decisioni: la prima decisione di chi parla per primo e la decisione del giocatore in posizione dopo un check. Raggruppa per «Carta più alta», «Semi», «Coppie sul board» o «Connessione» per confrontare dove la puntata sale o scende, e clicca una riga per aprire quel flop in «Studio dei flop». La base è 6-max 100bb con errore obiettivo dello 0,3%, e le dimensioni di puntata sono fisse al 33% e al 75% sul flop. Gli spot non ancora precalcolati non sono disponibili.",
  },
  {
    q: "Come mi alleno sulle mani in cui il solver mescola le azioni?",
    a: "Usa l’allenamento RNG nel Trainer GTO. Tocca «RNG: No» alla fine della riga di pulsanti in alto nel trainer per passare a «RNG: High» o «RNG: Low», e a ogni mano arriva un numero da 1 a 100 (è spento di default e questo dispositivo ricorda l’impostazione). Le frequenze del solver per quella mano dividono 1–100 in un intervallo per ogni azione: con High i numeri alti indicano azioni più aggressive, con Low quelli bassi. Scegliere l’azione nell’intervallo del tuo numero è «Scelta migliore»; un’altra azione che il solver usa almeno il 3,5% delle volte è «Accettabile»; tutto il resto viene valutato in base all’EV loss, al massimo fino ad «Accettabile». La schermata dei risultati mostra l’intervallo di ogni azione e dove è caduto il tuo numero. Non si usa nel Sfida del giorno né nell’allenamento di «I miei spot», e lo storico di allenamento resta basato sull’EV loss con l’RNG acceso o spento.",
  },
  {
    q: "In cosa è diverso da GTO Wizard o PioSOLVER?",
    a: "Soprattutto in dove avviene il calcolo. Le librerie di soluzioni come GTO Wizard servono soprattutto a consultare spot calcolati in anticipo: sono veloci e coprono anche il preflop (GTO Wizard offre anche il calcolo personalizzato). I solver desktop come PioSOLVER si installano su un PC Windows e calcolano in locale. Questo solver calcola nel tuo browser, quindi puoi riscrivere range e alberi come vuoi senza installare nulla.",
  },
  {
    q: "Qual è il solver GTO migliore, PioSOLVER o GTO Wizard?",
    a: "Rispondono a domande diverse, quindi la risposta onesta dipende da cosa vuoi fare. Una libreria di soluzioni si consulta più in fretta e copre il preflop, e va bene per studiare gli spot standard. Un solver desktop installato gestisce alberi più grandi di quelli che regge un browser. Se vuoi calcolare subito un tuo spot postflop, gratis e senza installare nulla, questo solver serve proprio a quello — e puoi confrontare la sua risposta con entrambi.",
  },
  {
    q: "Funziona su Android, iPhone, Mac e Linux?",
    a: "Sì: su Android e iPhone il solver si apre direttamente nel browser del telefono, senza scaricare nulla dallo store. Su Mac e Linux va bene qualsiasi browser moderno, ed è il vantaggio pratico rispetto ai solver desktop solo per Windows. Un’avvertenza: su iOS e Safari i limiti del browser costringono al calcolo su un solo thread, quindi lì gli spot personalizzati sono lenti — su macOS conviene Chrome. Sul telefono usa gli Esempi già calcolati e il Trainer GTO, e i tuoi calcoli falli nel browser del computer.",
  },
  {
    // it ② — 합법성 축이 아니라 «공부용 vs 게임 중 실시간 사용(RTA)» 구분만(ru·tr 선례).
    q: "Posso usare il solver mentre gioco? È contro le regole delle poker room?",
    a: "Per studiare nessun problema: rivedere le mani giocate, calcolare spot e allenarti nel trainer è esattamente ciò per cui il solver è fatto. Durante il gioco invece non va usato: la maggior parte delle poker room online vieta nel proprio regolamento i programmi di assistenza che lavorano in tempo reale (RTA). Questo solver è pensato per lo studio dopo la sessione, quando la mano è già finita.",
  },
  {
    // it ③ — 솔버 입력은 양측 range이지 실제 패가 아니다.
    q: "Il solver indovina le carte dell’avversario?",
    a: "No, e non ne ha bisogno. Al solver dai i range di entrambi i giocatori — l’insieme delle mani che ciascuno può avere — e non le due carte reali dell’avversario. Il solver non presuppone «informazione completa»: cerca la strategia migliore quando ognuno conosce solo il range dell’altro. Per questo la qualità della risposta dipende dai range che inserisci: range sbagliati, strategia sbagliata.",
  },
  {
    // it ④ — ru 선례. «GTO가 상대에 적응한다» 류 오해 정정(경쟁사 이름 없음).
    q: "Che differenza c’è tra GTO ed exploit?",
    a: "La GTO è una strategia di equilibrio che non si può sfruttare: non dipende da come gioca un avversario in particolare. L’exploit è il contrario, un allontanamento voluto dall’equilibrio per punire gli errori altrui (per esempio bluffare di più contro chi folda troppo). L’exploit rende di più contro un avversario debole, ma ti espone a un contro-exploit. Il solver calcola la GTO; con il node locking puoi fissare l’errore dell’avversario in un nodo e vedere come cambia la tua strategia migliore contro di lui — che a quel punto non è più di equilibrio.",
  },
  {
    // ★언어 문항(EN 21 밖 +1) — 앱 it UI 라이브 S-104. 다른 언어판 열거 금지.
    q: "Il solver è in italiano?",
    a: "Sì. L’app si apre in italiano automaticamente se il browser è impostato in italiano, e puoi anche aggiungere ?lang=it alla fine dell’indirizzo. I cinque passaggi (Range OOP, Range IP, Board, Dimensioni di puntata, Avvia solver), i nomi degli Esempi, il Sfida del giorno e la schermata del Trainer GTO sono in italiano. Alcune sigle tecniche brevi nella schermata dei risultati — EQ, EV (bb), EQR — restano in forma internazionale; su questa pagina sono spiegate in italiano. I nomi degli spot e dei gruppi qui coincidono lettera per lettera con quelli che vedi sullo schermo.",
  },
  {
    q: "Cos’è il Trainer GTO?",
    a: "È una modalità di allenamento costruita sugli Esempi già calcolati. Il trainer prende le domande da diversi punti di decisione dentro gli spot calcolati, quindi le combinazioni superano le diecimila, e ti dà mani estratte in proporzione ai pesi reali del range GTO — una mano esce tanto spesso quanto l’avresti davvero in quel punto. Scegli un’azione e il trainer valuta la decisione rispetto alla soluzione. Puoi anche salvare i tuoi spot calcolati come domande del trainer dalla schermata dei risultati ed esercitarti su questo dispositivo.",
  },
  {
    q: "Perché il trainer valuta in base all’EV loss e non con giusto o sbagliato?",
    a: "Perché la GTO mescola le azioni, e una scelta a bassa frequenza non è per forza un errore. Il trainer misura quanto valore atteso ha perso la tua azione, rispetto al piatto: fino allo 0,35% del piatto è «Scelta migliore», fino all’1% è «Accettabile», oltre è «Da rivedere». Le soglie hanno un minimo di 0,02bb e 0,05bb.",
  },
  {
    q: "Perché la valutazione è relativa al piatto?",
    a: "Perché gli stessi 0,08bb sono l’1,45% di un piatto da 5,5bb — uno spot da rivedere — e appena lo 0,36% di un piatto da 22,5bb, che è accettabile. La valutazione in bb assoluti faceva sembrare i piatti 3-bet peggiori di quanto fossero, così nell’agosto 2026 è passata a una percentuale del piatto. In un piatto con un rilancio da 5,5bb le soglie diventano 0,02bb e 0,055bb; in un piatto 3-bet da 22,5bb sono circa 0,079bb e 0,225bb, quindi 0,08bb sta appena oltre la linea della scelta migliore.",
  },
  {
    q: "Dove vengono salvati i miei progressi?",
    a: "Di default sul tuo dispositivo, senza account. Se accedi con un account HoldemMaster, lo storico di Esempi e Sfida del giorno si può sincronizzare tra i dispositivi. La serie di giorni del Sfida del giorno e il segno di completamento restano su ogni dispositivo. I tuoi spot calcolati e il loro storico di allenamento restano su questo dispositivo anche dopo l’accesso; non vengono salvati nell’account. Le liste salvate di range e di impostazioni di puntata restano nel tuo account quando accedi, così le apri anche da un altro dispositivo. Serie, analisi dei punti deboli per scenario e la coda di Ripasso degli spot in cui hai perso EV usano il tuo storico di allenamento.",
  },
  {
    q: "Posso aggiungerlo alla schermata Home?",
    a: "Sì. Installato, si apre a schermo intero senza la barra del browser, e gli Esempi e il trainer vengono salvati sul dispositivo, così puoi allenarti senza connessione a internet. In Chrome o Edge usa l’icona di installazione nella barra degli indirizzi; su iPhone usa Condividi e poi Aggiungi alla schermata Home. Calcolare spot personalizzati offline funziona solo dopo aver scaricato una volta il motore del solver.",
  },
  {
    q: "È sicuro aggiungerlo alla schermata Home?",
    a: "È un’app web, non un programma scaricato: anche aggiunta alla schermata Home gira dentro la sandbox del browser (su Android Chrome l’avvolge in un pacchetto app leggero). Puoi verificarlo invece di fidarti sulla parola: non chiede permessi per fotocamera, contatti, SMS o posizione, e la scheda di rete negli strumenti per sviluppatori mostra le richieste che fa. Il codice sorgente è pubblico su GitHub con licenza AGPL-3.0, e quando la rimuovi il browser ti permette di cancellare anche i dati salvati.",
  },
  {
    q: "Samsung Internet blocca l’installazione per motivi di sicurezza: cosa significa?",
    a: "Non indica il rilevamento di un malware. Samsung Internet crea un proprio pacchetto di installazione, e il browser non riconosce ancora questo tipo di pacchetto, quindi mostra un avviso. Il controllo arriva dal browser, non dall’app. Se installi da Chrome il blocco non compare; se preferisci continuare in Samsung Internet, segui le indicazioni della finestra.",
  },
  {
    q: "È un solver GTO open source?",
    a: "Sì. Si basa su WASM Postflop di Wataru Inariba, rilasciato con licenza AGPL-3.0, e la versione localizzata e migliorata da HoldemMaster pubblica tutto il codice sorgente modificato con la stessa licenza. Il progetto originale dichiara sul proprio sito che non sarà più aggiornato, ed è anche per questo che questa versione è mantenuta separatamente.",
  },
];
