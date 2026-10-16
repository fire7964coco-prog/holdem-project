import type { CalcDict } from "@/components/calculator/dict";

// 2026-10-16 Italian tool rollout. Terms: docs/translation-terms-it.md; keywords: docs/keyword-bank/it-tools.md. EN values preserved.
export const CALC_DICT_IT: CalcDict = {
  "numberLocale": "it-IT",
  "seo": {
    "title": "Calcolatore poker — probabilità, equity e pot odds",
    "description": "Calcola probabilità, equity, pot odds e outs nel Texas Hold'em. Nove strumenti con ICM, SPR e push/fold, nel browser e senza registrazione.",
    "path": "/it/calculator"
  },
  "hero": {
    "badges": [
      "Strumento gratuito",
      "Senza registrazione"
    ],
    "h1": "Calcolatore poker",
    "h1Sub": "Probabilità, equity, ICM e pot odds in un solo posto",
    "lead": "Inserisci due mani e scopri chi vince, poi controlla pot odds, outs, accordi ICM, SPR, M e range push/fold. Nove calcolatori gratuiti per Hold'em, con exact enumeration su ogni street in cui il calcolo è abbastanza rapido.",
    "chips": [
      "🎲 Equity",
      "🎯 Outs",
      "💰 Pot odds",
      "🃏 Valore mano",
      "📊 Mani iniziali",
      "📐 SPR",
      "🏆 Valore M",
      "📈 ICM",
      "⚡ Push/fold"
    ]
  },
  "equity": {
    "label": "Equity",
    "sub": "Mano contro mano",
    "hero": "La tua mano",
    "opp": "Avversario {n}",
    "random": "Mano casuale",
    "board": "Board",
    "pickerHint": "Seleziona un giocatore o il board, poi scegli le carte.",
    "addPlayer": "+ Aggiungi avversario",
    "removePlayer": "− Rimuovi avversario",
    "needTwo": "Assegna 2 carte a ogni mano oppure imposta un avversario su mano casuale.",
    "boardCount": "Lascia il board vuoto per il preflop oppure inserisci 3 carte (flop), 4 (turn) o 5 (river).",
    "th": {
      "player": "Giocatore",
      "hand": "Mano",
      "win": "Vittoria",
      "tie": "Pareggio",
      "equity": "Equity"
    },
    "exactNote": "Exact — tutti i {n} runout possibili esaminati.",
    "mcNote": "Monte Carlo — {n} runout casuali; i risultati variano di circa ±0,3 pp tra un calcolo e il successivo.",
    "winner": "{p} vince con {hand}",
    "chop": "Split pot — {n} mani dividono il piatto con {hand}",
    "showdownNote": "Showdown — il board è completo: questo è il risultato finale.",
    "presets": [
      {
        "label": "AA vs KK",
        "hands": [
          "AsAh",
          "KsKd"
        ]
      },
      {
        "label": "AKs vs QQ",
        "hands": [
          "AhKh",
          "QsQc"
        ]
      },
      {
        "label": "AKo vs 22",
        "hands": [
          "AhKd",
          "2s2c"
        ]
      },
      {
        "label": "AKo vs AQo",
        "hands": [
          "AhKd",
          "AsQc"
        ]
      },
      {
        "label": "AA vs 87s",
        "hands": [
          "AsAh",
          "8d7d"
        ]
      }
    ]
  },
  "tabs": {
    "outs": {
      "label": "Outs",
      "sub": "Probabilità del progetto"
    },
    "pot": {
      "label": "Pot odds",
      "sub": "Call/fold"
    },
    "hand": {
      "label": "Valore mano",
      "sub": "Scegli le carte"
    },
    "starting": {
      "label": "Mani iniziali",
      "sub": "Forza in apertura"
    },
    "spr": {
      "label": "SPR",
      "sub": "Rapporto stack/piatto"
    },
    "m": {
      "label": "M torneo",
      "sub": "Valore M"
    },
    "icm": {
      "label": "ICM",
      "sub": "ICM value"
    },
    "pushfold": {
      "label": "Push/fold",
      "sub": "Tabella Nash"
    }
  },
  "workspace": {
    "chooseCalculator": "Scegli un calcolatore",
    "resetInputs": "Reimposta i dati",
    "resetAria": "Reimposta {label}",
    "resetMessage": "Dati di {label} reimpostati."
  },
  "cardPicker": {
    "clearAll": "Cancella tutto"
  },
  "outs": {
    "drawType": "Tipo di progetto",
    "presets": [
      {
        "label": "Inserimento personalizzato"
      },
      {
        "label": "Progetto di colore",
        "desc": "4 carte dello stesso seme → serve la 5ª (9 outs, anche se il colore non è nuts)"
      },
      {
        "label": "Scala bilaterale (OESD)",
        "desc": "es. 5-6-7-8: serve un 4 o un 9"
      },
      {
        "label": "Colore + gutshot",
        "desc": "9 per il colore + 3 per il gutshot (sovrapposizioni escluse)"
      },
      {
        "label": "Gutshot",
        "desc": "es. 5-6-8-9: serve solo un 7"
      },
      {
        "label": "Due overcard",
        "desc": "2 valori più alti di ogni carta del board × 3 ciascuno — riduci molto gli outs contro una mano fatta: anche centrando una coppia puoi perdere"
      },
      {
        "label": "Doppia Coppia → Full",
        "desc": "es. A-K su un board A-K-x → restano 2 assi + 2 re"
      },
      {
        "label": "Coppia → Tris",
        "desc": "Restano 2 carte dello stesso valore"
      },
      {
        "label": "Colore + OESD (monster)",
        "desc": "9 per il colore + 8 per la scala (2 in comune)"
      }
    ],
    "outsSuffix": " ({n} outs)",
    "street": "Street",
    "afterFlopBtn": "🃏 Flop → river",
    "afterTurnBtn": "🔄 Turn → river",
    "flopOneBtn": "🎯 Flop → turn",
    "afterFlopOne": "Flop → turn",
    "chanceFlopOne": "Probabilità di chiudere il progetto alla prossima carta dal flop",
    "outsCount": "Numero di outs: {v}",
    "afterFlop": "Flop → river",
    "afterTurn": "Turn → river",
    "ruleOf4": "Regola del 4",
    "ruleOf2": "Regola del 2",
    "chanceFlop": "Probabilità di chiudere dal flop al river (entrambe le carte — all-in)",
    "chanceTurn": "Probabilità di chiudere dal turn al river",
    "exact": " (exact)",
    "ruleMental": "Regola del {n} (calcolo a mente):",
    "exactNote": "Il numero in caratteri grandi è quello esatto",
    "verdict": {
      "great": "Ottima 🔥",
      "good": "Buona ✅",
      "fair": "Discreta ⚠️",
      "poor": "Bassa ❌",
      "veryPoor": "Molto bassa 💀"
    }
  },
  "pot": {
    "potSize": "Piatto (inclusa la puntata da affrontare)",
    "callAmount": "Da chiamare",
    "potOddsCaption": "Pot odds (equity minima richiesta)",
    "orHigher": "sopra questa soglia il call è profittevole",
    "equityLabel": "Equity della tua mano: {v}",
    "sliderGutshot": "Gutshot (turn) 8,7%",
    "sliderFlush": "Colore (turn) 19,6%",
    "impliedToggle": "Implied odds {toggle}",
    "close": "Chiudi ▲",
    "add": "Aggiungi ▼",
    "extraWinnings": "Vincita extra attesa (se chiudi il progetto): {v}",
    "none": "Nessuna",
    "impliedCaption": "Implied odds (con vincite extra)",
    "impliedNote": "Equity minima richiesta, contando {n} extra",
    "needImplied": "implied odds {n}%",
    "needPot": "pot odds {n}%",
    "verdict": {
      "call": {
        "title": "Call profittevole",
        "body": "La tua equity {eq}% > {need} → profittevole nel lungo periodo"
      },
      "even": {
        "title": "Break-even (EV 0)",
        "body": "La tua equity {eq}% = {need} → il call non guadagna né perde. Valuta fattori oltre le pot odds, come posizione e tendenze dell'avversario"
      },
      "fold": {
        "title": "Fold consigliato",
        "body": "La tua equity {eq}% < {need} → in perdita nel lungo periodo"
      }
    }
  },
  "handEval": {
    "pickerLabel": "Seleziona le carte (5–7)",
    "emptyTitle": "Scegli almeno 5 carte per valutare la mano",
    "emptyHint": "Con 7 carte viene trovata automaticamente la combinazione migliore di 5",
    "bestFrom": "Mano migliore con {n} carte",
    "rankNames": [
      "Carta Alta",
      "Coppia",
      "Doppia Coppia",
      "Tris",
      "Scala",
      "Colore",
      "Full",
      "Poker",
      "Scala a Colore",
      "Scala Reale Massima"
    ],
    "resultNames": [
      "Carta Alta 🃏",
      "Coppia 1️⃣",
      "Doppia Coppia ✌️",
      "Tris 3️⃣",
      "Scala ➡️",
      "Colore 🌊",
      "Full 🏠",
      "Poker 💎",
      "Scala a Colore 🌟",
      "Scala Reale Massima 👑"
    ],
    "axis": [
      "Carta Alta",
      "Coppia",
      "Colore",
      "Poker",
      "Reale"
    ]
  },
  "starting": {
    "pickerLabel": "Seleziona le tue 2 carte coperte",
    "emptyPrompt": "Scegli le tue 2 carte coperte",
    "unknownDesc": "Fuori dalla tabella base di apertura",
    "unknownAction": "Suited: dal bottone apri qualsiasi mano suited se tutti hanno foldato; dal cutoff limita il range ai re suited, a due carte da 8 in su (Q8s, 10-8s) e ai connectors fino a 54s. Offsuit: solo dal bottone — qualsiasi asso (A9o, A5o) oppure due carte da 9 in su (K9o, 10-9o). Tutto il resto (J2o, 93o, 72o): fold",
    "tierNames": [
      "🥇 Fascia 1 — Premium",
      "🥈 Fascia 2 — Forte",
      "🥉 Fascia 3 — Giocabile",
      "⚠️ Fascia 4 — Marginale",
      "🚫 Fascia 5 — Debole"
    ],
    "recommendedAction": "Azione consigliata:",
    "axis": [
      "Premium",
      "Forte",
      "Giocabile",
      "Marginale",
      "Debole"
    ],
    "summaryTitle": "Riepilogo delle fasce",
    "summary": [
      {
        "hands": "AA KK QQ JJ 10-10 AKs AKo",
        "action": "Rilancia sempre"
      },
      {
        "hands": "AQs AJs A10s KQs KJs 99 88 AQo",
        "action": "Rilancia dalla maggior parte delle posizioni"
      },
      {
        "hands": "AJo KQo K10s Q10s QJs J10s 10-9s 77 A9s K9s Q9s J9s",
        "action": "Rilancia da posizione finale"
      },
      {
        "hands": "66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s",
        "action": "Seleziona con cura in posizione finale"
      },
      {
        "hands": "mani offsuit deboli (J2o, 93o, 72o)",
        "action": "Di solito fold"
      }
    ],
    "hands": {
      "22": {
        "desc": "La coppia servita più bassa",
        "action": "Apri con un rilancio da posizione finale; altrimenti solo piatti multiway con stack profondi"
      },
      "33": {
        "desc": "Serve centrare un set: mano speculativa",
        "action": "Apri con un rilancio da posizione finale; altrimenti solo piatti multiway con stack profondi"
      },
      "44": {
        "desc": "Quasi nessun valore senza un set",
        "action": "Apri con un rilancio da posizione finale; chiama un singolo rilancio da posizione finale se tu e chi rilancia avete ciascuno ancora almeno ~15× il call nello stack"
      },
      "55": {
        "desc": "Poco valore senza un set",
        "action": "Apri con un rilancio da posizione finale; chiama un singolo rilancio da posizione finale se tu e chi rilancia avete ciascuno ancora almeno ~15× il call nello stack"
      },
      "66": {
        "desc": "Set mining — servono implied odds",
        "action": "Apri con un rilancio da posizione finale; chiama un rilancio se tu e chi rilancia avete ciascuno ancora almeno ~15× il call nello stack"
      },
      "77": {
        "desc": "Mano da set mining: attenzione alle overcard",
        "action": "Rilancia da posizione finale; da posizione iniziale chiama un rilancio e, se sei first-in, rilancia o folda — mai open limp"
      },
      "88": {
        "desc": "Coppia servita con buon potenziale di set",
        "action": "Rilancia dalla maggior parte delle posizioni; chiama un rilancio — mai open limp"
      },
      "99": {
        "desc": "Coppia media: attenzione ai flop con overcard",
        "action": "Rilancia dalla maggior parte delle posizioni; prudenza con stack profondi"
      },
      "1010": {
        "desc": "Perde valore quando al flop arrivano overcard",
        "action": "Rilancia da qualsiasi posizione — niente open limp"
      },
      "AA": {
        "desc": "La mano migliore. Rilancia in ogni situazione",
        "action": "Rilancia sempre, anche con una 3-bet"
      },
      "KK": {
        "desc": "Attenzione soprattutto a un asso al flop",
        "action": "Rilancia e controrilancia sempre"
      },
      "QQ": {
        "desc": "Più forte di JJ, ma non sopravvalutarla",
        "action": "Rilancia sempre; prudenza con stack profondi"
      },
      "JJ": {
        "desc": "Attenzione alle overcard al flop",
        "action": "Rilancia da qualsiasi posizione"
      },
      "AKs": {
        "desc": "La migliore mano da progetto. Costruisci il piatto",
        "action": "Rilancia e controrilancia sempre"
      },
      "AKo": {
        "desc": "Più debole di AKs, ma sempre premium",
        "action": "Rilancia sempre; puoi chiamare un controrilancio"
      },
      "AQs": {
        "desc": "Mano forte, più preziosa in posizione",
        "action": "Rilancia dalla maggior parte delle posizioni"
      },
      "AJs": {
        "desc": "Ottima da BTN/CO, debole da UTG",
        "action": "Rilancia da posizione intermedia/finale; da UTG rilancia o folda — mai limp"
      },
      "A10s": {
        "desc": "Uno degli assi suited migliori",
        "action": "Rilancia da posizione intermedia/finale; da UTG rilancia o folda — mai limp"
      },
      "KQs": {
        "desc": "Potenziale per colore alto e scala",
        "action": "Rilancia dalla maggior parte delle posizioni"
      },
      "KJs": {
        "desc": "Forte mano da progetto",
        "action": "Rilancia da posizione finale; da posizione iniziale folda o rilancia — mai limp"
      },
      "AQo": {
        "desc": "Più debole offsuit: conta la posizione",
        "action": "Rilancia da posizione intermedia/finale; da UTG rilancia o folda — mai limp"
      },
      "AJo": {
        "desc": "Debole da posizione iniziale, forte da posizione finale",
        "action": "Rilancia da CO/BTN, prudenza da posizione iniziale"
      },
      "KQo": {
        "desc": "Il migliore connector offsuit",
        "action": "Rilancia da posizione finale; da posizione iniziale rilancia o folda se nessuno è entrato e di solito folda contro un rilancio"
      },
      "K10s": {
        "desc": "Re suited, forte da posizione finale",
        "action": "Rilancia da posizione finale, folda da posizione iniziale"
      },
      "QJs": {
        "desc": "Forti progetti sia di scala sia di colore",
        "action": "Rilancia da posizione finale; vale di più con stack profondi"
      },
      "J10s": {
        "desc": "Uno dei migliori suited connectors",
        "action": "Rilancia da posizione finale; chiama un singolo rilancio in posizione"
      },
      "109s": {
        "desc": "Forte suited connector",
        "action": "Apri con un rilancio da posizione finale; chiama un singolo rilancio in posizione"
      },
      "A9s": {
        "desc": "Asso suited con potenziale di colore",
        "action": "Rilancia da posizione finale"
      },
      "K9s": {
        "desc": "Re suited; una coppia di re può essere dominata",
        "action": "Apri con un rilancio da CO/BTN se tutti hanno foldato; contro un rilancio valuta posizione, prezzo e stack effettivi"
      },
      "Q9s": {
        "desc": "Donna suited con potenziale di scala; attenzione alle donne più forti",
        "action": "Apri con un rilancio da CO/BTN se tutti hanno foldato; contro un rilancio valuta posizione, prezzo e stack effettivi"
      },
      "J9s": {
        "desc": "Suited one-gapper con potenziale di scala e colore",
        "action": "Apri con un rilancio da CO/BTN se tutti hanno foldato; contro un rilancio valuta posizione, prezzo e stack effettivi"
      },
      "A8s": {
        "desc": "Asso suited medio",
        "action": "Gioca da posizione finale, folda da posizione iniziale"
      },
      "A7s": {
        "desc": "Asso suited medio",
        "action": "Solo da posizione finale"
      },
      "A6s": {
        "desc": "Asso suited medio",
        "action": "Solo da posizione finale"
      },
      "A5s": {
        "desc": "Potenziale di wheel e blocker con asso; frequente bluff in 3-bet",
        "action": "Solo da posizione finale; contano le implied odds"
      },
      "A4s": {
        "desc": "Asso suited con progetto di wheel",
        "action": "Solo da posizione finale"
      },
      "A3s": {
        "desc": "Progetto di colore nuts con una carta della wheel, appena sopra A2s",
        "action": "Solo da posizione finale"
      },
      "A2s": {
        "desc": "Wheel e colore nuts, ma debole",
        "action": "Solo da posizione finale"
      },
      "KJo": {
        "desc": "Rischio di dominazione; solo da posizione finale",
        "action": "Rilancia da CO/BTN, folda contro un controrilancio"
      },
      "QJo": {
        "desc": "Connessione moderata: serve la posizione",
        "action": "Solo da posizione finale"
      },
      "98s": {
        "desc": "Forte suited connector",
        "action": "Apri con un rilancio da posizione finale; chiama un rilancio in posizione"
      },
      "87s": {
        "desc": "Buon suited connector",
        "action": "Apri con un rilancio da posizione finale; chiama un rilancio in posizione"
      },
      "76s": {
        "desc": "Suited connector",
        "action": "Apri con un rilancio da posizione finale; chiama un rilancio solo in posizione e con stack profondi"
      },
      "K10o": {
        "desc": "K-10 offsuit, debole",
        "action": "Apri con un rilancio da CO/BTN se tutti hanno foldato"
      },
      "Q10o": {
        "desc": "Offsuit con poca connessione",
        "action": "Solo da BTN"
      },
      "J10o": {
        "desc": "Offsuit discreta ma vulnerabile",
        "action": "Solo da BTN"
      },
      "Q10s": {
        "desc": "Forte broadway suited, gioca bene in posizione",
        "action": "Rilancia da posizione finale; folda da posizione iniziale"
      },
      "A10o": {
        "desc": "Asso offsuit marginale, spesso dominato",
        "action": "Solo da posizione finale"
      },
      "65s": {
        "desc": "Suited connector: cerca multiway e implied odds",
        "action": "Apri con un rilancio da posizione finale; chiama un rilancio solo in posizione e con stack profondi"
      },
      "54s": {
        "desc": "Suited connector basso, speculativo",
        "action": "Apri con un rilancio da posizione finale; chiama un rilancio solo in posizione, in piatti multiway poco costosi"
      }
    }
  },
  "spr": {
    "effectiveStack": "Stack effettivo (il minore dei due stack)",
    "potSize": "Dimensione attuale del piatto",
    "caption": "SPR (Stack-to-Pot Ratio)",
    "stackDivPot": "stack ÷ piatto",
    "zones": {
      "low": {
        "label": "SPR basso (committed)",
        "desc": "Una parte consistente delle fiches è già nel piatto. Con top pair top kicker o meglio su un flop dry, pianifica di mettere il resto — a questa profondità foldare è spesso un errore maggiore. Su board pairati, con tre carte dello stesso seme o tre carte connesse, o contro azioni compatibili solo con set o scala, una coppia resta una coppia.",
        "actions": [
          [
            "TPTK+",
            "Valuta un all-in"
          ],
          [
            "Progetti",
            "Servono le pot odds"
          ],
          [
            "Mani deboli",
            "Valuta con cura il fold"
          ]
        ]
      },
      "mid": {
        "label": "SPR medio (flessibile)",
        "desc": "Qui giochi mani forti come doppia coppia o meglio. Proteggere lo stack diventa importante.",
        "actions": [
          [
            "Doppia Coppia+",
            "Puntata per valore"
          ],
          [
            "Coppia",
            "Una o due street, poi pot control"
          ],
          [
            "Progetti",
            "Semi-bluff con fold equity; senza, rinuncia"
          ]
        ]
      },
      "high": {
        "label": "SPR alto (stack profondi)",
        "desc": "Gli stack diventano profondi. Progetti e mani fatte forti aumentano di valore relativo.",
        "actions": [
          [
            "Set+",
            "Gioca con forza"
          ],
          [
            "Progetti",
            "Le implied odds aumentano"
          ],
          [
            "Coppia/TPTK",
            "Procedi con prudenza"
          ]
        ]
      },
      "deep": {
        "label": "SPR molto alto (deep)",
        "desc": "Si gioca con stack profondi. Posizione, potenziale dei progetti e lettura dei range avversari contano molto.",
        "actions": [
          [
            "Mani nuts",
            "Puoi puntare forte"
          ],
          [
            "Progetti",
            "Implied odds molto alte"
          ],
          [
            "Mani fatte deboli",
            "Prudenza: vulnerabili ai bluff"
          ]
        ]
      }
    },
    "legend": [
      "Committed",
      "Flessibile",
      "Stack profondi",
      "Deep"
    ]
  },
  "m": {
    "inputs": {
      "stack": "Il tuo stack",
      "bb": "Grande buio",
      "sb": "Piccolo buio",
      "ante": "Ante"
    },
    "players": "Giocatori al tavolo: {v}",
    "headsUp": "2 (heads-up)",
    "orbitCaption": "Costo di un giro (bui e ante)",
    "orbitFormula": "BB {bb} + SB {sb} + ante {ante}×{players}",
    "mCaption": "Valore M (Harrington's M)",
    "zones": {
      "dead": {
        "name": "💀 Zona morta",
        "desc": "La fold equity è esaurita — resta solo l'all-in: scegli la migliore mano ancora competitiva prima che arrivino i bui, preferendo un piatto non ancora aperto.",
        "action": "All-in subito"
      },
      "red": {
        "name": "🔴 Zona rossa",
        "desc": "Devi raddoppiare presto. Usa una strategia push/fold: all-in con le mani buone, fold con le altre.",
        "action": "Push/fold"
      },
      "orange": {
        "name": "🟠 Zona arancione",
        "desc": "Lo stack si riduce. Restringi il range alle mani forti e cerca un open shove.",
        "action": "Range stretto"
      },
      "yellow": {
        "name": "🟡 Zona gialla",
        "desc": "La pressione aumenta. Devi accumulare fiches: gioca in modo aggressivo quando arrivano buoni spot.",
        "action": "Gioca aggressivo"
      },
      "green": {
        "name": "🟢 Zona verde",
        "desc": "Hai uno stack comodo. Usa tutte le strategie: fallo crescere con posizione e bluff.",
        "action": "Strategia completa"
      }
    }
  },
  "icm": {
    "introStrong": "ICM (Independent Chip Model)",
    "introRest": " converte gli stack da torneo in valore atteso dei premi secondo ICM. Per decidere tra call e fold, pondera il valore dopo ogni esito (vittoria, pareggio o sconfitta) con la sua probabilità effettiva, poi confronta la somma con il valore dopo il fold. Se vieni eliminato, conta il premio effettivamente ricevuto: non è automaticamente zero.",
    "numPlayers": "Numero di giocatori",
    "paidPlaces": "Posti a premio",
    "stacksTitle": "Stack dei giocatori",
    "total": "totale {n}",
    "decStack": "Riduci lo stack del giocatore {n}",
    "stackInput": "Stack del giocatore {n}",
    "incStack": "Aumenta lo stack del giocatore {n}",
    "prizesTitle": "Premi",
    "decPrize": "Riduci il premio del posto {n}",
    "prizeInput": "Premio del posto {n}",
    "incPrize": "Aumenta il premio del posto {n}",
    "currencyNote": "Inserisci gli importi dei premi in una qualsiasi valuta.",
    "resultTitle": "Risultato ICM",
    "th": {
      "player": "Giocatore",
      "chips": "Fiches",
      "chipPct": "Fiches %",
      "icmValue": "ICM value",
      "icmPct": "ICM %",
      "diff": "Diff.",
      "chop": "Chip Count"
    },
    "playerCell": "{medal} P{n}",
    "diffPlus": "+diff.",
    "diffPlusNote": "La tua quota del montepremi secondo ICM supera la tua quota di fiches. Il segno da solo non indica se chiamare o foldare.",
    "diffMinus": "−diff.",
    "diffMinusNote": "La tua quota del montepremi secondo ICM è inferiore alla tua quota di fiches. Il segno da solo non indica se aggredire sia profittevole.",
    "diffUnit": "pp",
    "empty": "Usa stack e premi positivi, con i premi dal più alto al più basso (sono ammessi premi uguali)."
  },
  "pushfold": {
    "ante": "Ante",
    "noAnte": "Senza ante",
    "bbAnteOn": "BB ante attivo",
    "table": "Tavolo",
    "headsUp": "Heads-up",
    "sixMax": "6-max",
    "nineMax": "9-max",
    "scenario": "Scenario",
    "sbShove": "SB: all-in o fold",
    "bbCall": "BB: call contro all-in",
    "position": "Posizione {hint}",
    "firstInHint": "(first-in — tutti hanno foldato)",
    "effectiveStack": "Stack effettivo: {v}",
    "captionHuPush": "Mani con cui SB va all-in a {stack}bb",
    "captionHuCall": "Mani con cui BB chiama un all-in a {stack}bb",
    "captionMw": "All-in first-in da {pos} a un tavolo {table}-max, {stack}bb",
    "withAnte": " (con ante)",
    "combosSuffix": " / {total} combo",
    "legendPush": "Push (all-in)",
    "legendCall": "Call",
    "legendFold": "Fold",
    "note": {
      "strong1": "Diagonale = coppie · in alto a destra = suited · in basso a sinistra = offsuit",
      "p1": "La griglia è ordinata per ",
      "strong2": "valore delle carte, non per forza della mano",
      "p2": ", quindi è normale che in una riga si alternino caselle evidenziate e non — AQo, KQo e QQ sono vicine, ma non in ordine di forza. Anche includere A5s ed escludere A6s è corretto: A5s può formare la",
      "strong3": "wheel (A-2-3-4-5)",
      "p3": ", che compensa il kicker più basso."
    },
    "cellTitle": "{hand} — {action}",
    "cell": {
      "push": "all-in",
      "call": "call",
      "fold": "fold"
    },
    "huNote": {
      "strong": "Equilibrio di Nash, heads-up (SB contro BB)",
      "p1": ": si assume che SB scelga soltanto tra all-in e fold. L'ante aggiunge 0,125bb per giocatore (12,5% del grande buio ciascuno — l'equivalente di una big blind ante a un tavolo da 8; in heads-up il totale è solo 0,25bb). I range diventano più larghi quando gli stack si accorciano e, sotto ~3-4bb, BB chiama correttamente con ",
      "em": "più mani",
      "p2": " di quelle con cui SB va all-in, grazie alle pot odds."
    },
    "mwNote": {
      "strong": "Tabella all-in first-in {table}-max",
      "p1": ": tutti prima di te hanno foldato e scegli tra all-in e fold. È un equilibrio in stile Nash in ",
      "strong2": "puro chip-EV",
      "p2": ": i range di call dei giocatori dietro sono risolti simultaneamente, con l'approssimazione standard che un piatto chiamato venga risolto heads-up contro il primo caller (i piatti con più caller sono ignorati). I range diventano più larghi quando restano meno giocatori dietro di te (UTG → BTN → SB), quando gli stack si accorciano e con ante attivo (0,125bb per giocatore). Essendo puro chip-EV, i range a 10bb da posizione iniziale (UTG/MP) sono più stretti delle comuni regole pratiche (senza ante le coppie piccole foldano): al tavolo considera ICM e avversari."
    },
    "readMore": "Per capire l'all-in e i side pot, leggi la nostra",
    "shortStackLink": {
      "slug": "holdem-all-in-rules",
      "text": "guida alle regole dell'all-in"
    },
    "readMoreEnd": "."
  },
  "icmGuide": {
    "bubble": {
      "badge": "Guida ICM",
      "h2": "Come usare il calcolatore ICM: un esempio in bolla in 3 minuti",
      "intro": "Restano quattro giocatori e tre vanno a premio: siete in bolla. Gli stack sono 60.000 / 40.000 / 30.000 / 20.000 e i premi $500 / $300 / $200. Inseriscili nel calcolatore per confrontare la quota di fiches di ciascuno con il valore atteso dei premi (ICM):",
      "th": {
        "player": "Giocatore",
        "chipPct": "Fiches %",
        "icmPct": "ICM %",
        "diff": "Diff."
      },
      "rows": [
        {
          "player": "🥇 Chip leader",
          "chip": "40,0%",
          "icm": "33,3%",
          "diff": "-6,7 pp",
          "up": false
        },
        {
          "player": "🥈 2º",
          "chip": "26,7%",
          "icm": "27,2%",
          "diff": "+0,6 pp",
          "up": true
        },
        {
          "player": "🥉 3º",
          "chip": "20,0%",
          "icm": "22,9%",
          "diff": "+2,9 pp",
          "up": true
        },
        {
          "player": "4º (short stack)",
          "chip": "13,3%",
          "icm": "16,6%",
          "diff": "+3,3 pp",
          "up": true
        }
      ],
      "keyPoint": {
        "text": "La tabella mostra che {b1}, con una differenza di 6,7 pp: non è una soglia per call/fold. Gli stack medi affrontano spesso il risk premium maggiore, quindi un chip leader che li copre può {b2} quando i range lo consentono. Gli short stack dovrebbero {b3}. Le decisioni dipendono da stack, premi e avversari, non dal solo segno della differenza.",
        "b1": "l'ICM value del chip leader (33,3%) è inferiore alla sua quota di fiches (40%)",
        "b2": "mettere pressione agli stack medi",
        "b3": "scegliere i call con cura, salvo quando i bui stanno per consumare lo stack"
      }
    },
    "deal": {
      "badge": "Calcolatore accordi ICM",
      "h2": "Accordo ICM: quanto vale davvero un deal al tavolo finale",
      "intro": "Restano quattro giocatori e si parla di un accordo. Gli stack sono 450.000 / 250.000 / 180.000 / 120.000 (45% / 25% / 18% / 12%) e restano $2.300 di premi, distribuiti in $1.000 / $600 / $400 / $300. Inseriscili nel calcolatore ICM: la colonna Chip Count mette i due importi a confronto:",
      "th": {
        "player": "Giocatore",
        "chop": "Chip Count",
        "icm": "Accordo ICM",
        "diff": "Diff."
      },
      "rows": [
        {
          "player": "🥇 Chip leader (45%)",
          "chop": "$1.035",
          "icm": "$726",
          "diff": "-$309",
          "up": false
        },
        {
          "player": "🥈 2º (25%)",
          "chop": "$575",
          "icm": "$591",
          "diff": "+$16",
          "up": true
        },
        {
          "player": "🥉 3º (18%)",
          "chop": "$414",
          "icm": "$526",
          "diff": "+$112",
          "up": true
        },
        {
          "player": "4º (12%)",
          "chop": "$276",
          "icm": "$458",
          "diff": "+$182",
          "up": true
        }
      ],
      "summary": {
        "text": "Una divisione proporzionale alle fiches, o chip chop, {b1}; un accordo ICM considera la probabilità di ogni giocatore di finire in ciascuna posizione ed è {b2}. Qui lo stack più corto riceve $276 in base alle fiches e $458 con ICM: {b3}. Calcola entrambi prima di trattare. Quello che una sala chiama chip chop è spesso un save-and-chop: si assegna prima a tutti il premio successivo e si divide per fiches solo il resto. Il risultato si avvicina a ICM, diversamente dalla divisione pura mostrata in questa colonna. ICM presume inoltre pari abilità e ignora chi pagherà i prossimi bui: aspettati che lo stack maggiore negozi sopra il proprio valore ICM.",
        "b1": "favorisce il chip leader",
        "b2": "più equo per gli short stack",
        "b3": "$182 in più"
      }
    }
  },
  "quickRef": [
    {
      "badge": "Riferimento rapido",
      "h2": "Equity preflop: confronti all-in tra due mani",
      "intro": "Equity di due mani all-in preflop, mediata su tutte le combinazioni di semi del confronto (calcolata offline: tutti i 1.712.304 board per ciascuna). Una specifica combinazione di semi può differire di oltre due pp (A♠K♠ contro Q♠J♠: 66,0%): inserisci le carte esatte nel calcolatore di equity qui sopra.",
      "th": [
        "Confronto",
        "Mano A",
        "Mano B",
        "Pareggio"
      ],
      "align": [
        "left",
        "right",
        "right",
        "right"
      ],
      "emphasis": 1,
      "nowrap": [
        1,
        2,
        3
      ],
      "rows": [
        [
          "AA vs KK",
          "81,9%",
          "18,1%",
          "0,5%"
        ],
        [
          "AA vs AKs",
          "87,9%",
          "12,1%",
          "1,3%"
        ],
        [
          "AA vs 87s",
          "77,5%",
          "22,5%",
          "0,3%"
        ],
        [
          "AA vs 72o",
          "88,2%",
          "11,8%",
          "0,4%"
        ],
        [
          "KK vs AKs",
          "65,9%",
          "34,1%",
          "0,8%"
        ],
        [
          "QQ vs AKo",
          "56,8%",
          "43,2%",
          "0,4%"
        ],
        [
          "QQ vs AKs",
          "54,0%",
          "46,0%",
          "0,4%"
        ],
        [
          "JJ vs TT",
          "82,0%",
          "18,0%",
          "0,4%"
        ],
        [
          "TT vs A9o",
          "72,2%",
          "27,8%",
          "0,4%"
        ],
        [
          "TT vs 87s",
          "80,3%",
          "19,7%",
          "0,5%"
        ],
        [
          "22 vs AKo",
          "52,6%",
          "47,4%",
          "0,6%"
        ],
        [
          "AKo vs AQo",
          "74,4%",
          "25,6%",
          "4,7%"
        ],
        [
          "AKs vs QJs",
          "63,5%",
          "36,5%",
          "0,5%"
        ],
        [
          "AKo vs JTs",
          "59,5%",
          "40,5%",
          "0,5%"
        ]
      ],
      "note": "L'equity è la tua quota media del piatto, inclusi i pareggi (split pot). Una coppia contro due overcard è la classica sfida quasi alla pari; una coppia contro una coppia più alta è sfavorita di circa 4,5 a 1."
    },
    {
      "badge": "Riferimento rapido",
      "h2": "Coppia di assi contro mani casuali: per numero di avversari",
      "intro": "Quanto spesso AA vince quando tutti vanno all-in preflop contro N mani casuali (Monte Carlo, 8.000.000 di runout per riga). I primi due caller costano agli assi circa 10 pp ciascuno; quelli successivi hanno un impatto minore.",
      "th": [
        "Avversari",
        "Equity di AA"
      ],
      "align": [
        "left",
        "right"
      ],
      "emphasis": 1,
      "nowrap": [
        1
      ],
      "rows": [
        [
          "1",
          "85,2%"
        ],
        [
          "2",
          "73,4%"
        ],
        [
          "3",
          "63,8%"
        ],
        [
          "4",
          "55,9%"
        ],
        [
          "5",
          "49,2%"
        ],
        [
          "6",
          "43,6%"
        ],
        [
          "7",
          "38,7%"
        ],
        [
          "8",
          "34,6%"
        ]
      ],
      "note": "Ecco perché gli assi preferiscono un piatto heads-up: contro cinque mani casuali la migliore mano iniziale dell'Hold'em non è più favorita a vincere il piatto (49,2%, mentre gli altri cinque si dividono il resto). Imposta un avversario su «Mano casuale» nel calcolatore di equity per provare qualsiasi mano nello stesso modo (fino a tre avversari)."
    },
    {
      "badge": "Riferimento rapido",
      "h2": "Outs: probabilità di chiudere il progetto",
      "intro": "Probabilità di chiudere il progetto: flop → river (due carte ancora da scoprire), flop → turn (solo la prossima carta) e turn → river (una carta). I valori esatti affiancano la stima della regola del 4 e del 2. Conta gli outs, poi leggi la riga.",
      "th": [
        "Outs",
        "Progetto tipico",
        "Flop → river",
        "Flop → turn",
        "Turn → river",
        "Regola del 4 · 2"
      ],
      "align": [
        "left",
        "left",
        "right",
        "right",
        "right",
        "right"
      ],
      "emphasis": 2,
      "nowrap": [
        2,
        3,
        4,
        5
      ],
      "rows": [
        [
          "1",
          "–",
          "4,3%",
          "2,1%",
          "2,2%",
          "4% · 2%"
        ],
        [
          "2",
          "Coppia servita → set",
          "8,4%",
          "4,3%",
          "4,3%",
          "8% · 4%"
        ],
        [
          "3",
          "Una overcard",
          "12,5%",
          "6,4%",
          "6,5%",
          "12% · 6%"
        ],
        [
          "4",
          "Gutshot",
          "16,5%",
          "8,5%",
          "8,7%",
          "16% · 8%"
        ],
        [
          "5",
          "Coppia → Doppia Coppia o Tris",
          "20,4%",
          "10,6%",
          "10,9%",
          "20% · 10%"
        ],
        [
          "6",
          "Due overcard",
          "24,1%",
          "12,8%",
          "13,0%",
          "24% · 12%"
        ],
        [
          "7",
          "–",
          "27,8%",
          "14,9%",
          "15,2%",
          "28% · 14%"
        ],
        [
          "8",
          "Scala bilaterale",
          "31,5%",
          "17,0%",
          "17,4%",
          "32% · 16%"
        ],
        [
          "9",
          "Progetto di colore",
          "35,0%",
          "19,1%",
          "19,6%",
          "36% · 18%"
        ],
        [
          "10",
          "Gutshot + due overcard",
          "38,4%",
          "21,3%",
          "21,7%",
          "40% · 20%"
        ],
        [
          "11",
          "Scala bilaterale + una overcard",
          "41,7%",
          "23,4%",
          "23,9%",
          "44% · 22%"
        ],
        [
          "12",
          "Progetto di colore + gutshot",
          "45,0%",
          "25,5%",
          "26,1%",
          "48% · 24%"
        ],
        [
          "13",
          "–",
          "48,1%",
          "27,7%",
          "28,3%",
          "52% · 26%"
        ],
        [
          "14",
          "Scala bilaterale + due overcard",
          "51,2%",
          "29,8%",
          "30,4%",
          "56% · 28%"
        ],
        [
          "15",
          "Colore + scala bilaterale",
          "54,1%",
          "31,9%",
          "32,6%",
          "60% · 30%"
        ],
        [
          "16",
          "–",
          "57,0%",
          "34,0%",
          "34,8%",
          "64% · 32%"
        ],
        [
          "17",
          "–",
          "59,8%",
          "36,2%",
          "37,0%",
          "68% · 34%"
        ],
        [
          "18",
          "–",
          "62,4%",
          "38,3%",
          "39,1%",
          "72% · 36%"
        ],
        [
          "19",
          "–",
          "65,0%",
          "40,4%",
          "41,3%",
          "76% · 38%"
        ],
        [
          "20",
          "–",
          "67,5%",
          "42,6%",
          "43,5%",
          "80% · 40%"
        ]
      ],
      "note": "Il dato su due carte vale solo se le vedrai entrambe senza pagare ancora (all-in). Contro una puntata al flop usa la colonna flop → turn: 9 outs = 19,1%. Le overcard sono gli outs meno affidabili: contro una mano fatta puoi perdere anche centrando una coppia, quindi riducine il peso."
    },
    {
      "badge": "Riferimento rapido",
      "h2": "Pot odds: equity minima per chiamare",
      "intro": "Contro una puntata di questa dimensione rispetto al piatto, questa è l'equity minima per un call in break-even: call ÷ (piatto dopo la puntata + call). La tabella mostra sia le odds sia l'equity richiesta; il calcolatore restituisce la seconda. Confrontala con la probabilità esatta del progetto nella tabella degli outs.",
      "th": [
        "Dimensione puntata",
        "Odds (X : 1)",
        "Equity minima"
      ],
      "align": [
        "left",
        "right",
        "right"
      ],
      "emphasis": 2,
      "nowrap": [
        1,
        2
      ],
      "rows": [
        [
          "¼ piatto",
          "5 : 1",
          "16,7%"
        ],
        [
          "⅓ piatto",
          "4 : 1",
          "20,0%"
        ],
        [
          "½ piatto",
          "3 : 1",
          "25,0%"
        ],
        [
          "⅔ piatto",
          "2,5 : 1",
          "28,6%"
        ],
        [
          "¾ piatto",
          "2,33 : 1",
          "30,0%"
        ],
        [
          "Piatto",
          "2 : 1",
          "33,3%"
        ],
        [
          "1,5× piatto",
          "1,67 : 1",
          "37,5%"
        ],
        [
          "2× piatto",
          "1,5 : 1",
          "40,0%"
        ],
        [
          "3× piatto",
          "1,33 : 1",
          "42,9%"
        ]
      ],
      "note": "Un progetto di colore (35,0% con due carte da scoprire, 19,1% sulla prossima carta) chiama una puntata pari al piatto al flop solo in all-in. Altrimenti il calcolatore di implied odds, nella scheda Pot odds, aggiunge quanto prevedi di vincere più avanti, purché l'avversario abbia ancora fiches e una mano disposta a pagare. Riduci molto la stima se non punti a chiudere il nuts."
    },
    {
      "badge": "Riferimento rapido",
      "h2": "SPR: quanta forza serve alla tua mano",
      "intro": "SPR = stack effettivo ÷ piatto attuale. Lo stack effettivo è il minore dei due stack: tutto ciò che ciascuno può vincere o perdere. Più SPR è basso, maggiore è la quota già impegnata e meno forte può essere la mano con cui giocarsi lo stack; più è alto, più devi avvicinarti al nuts per un piatto grande. Usa le zone per pianificare al flop: su un board wet o pairato, una coppia resta una coppia.",
      "th": [
        "SPR",
        "Zona",
        "Forza della mano · azione"
      ],
      "align": [
        "left",
        "left",
        "left"
      ],
      "emphasis": 1,
      "rows": [
        [
          "SPR < 4",
          "Committed",
          "Top pair top kicker o meglio su un flop dry: pianifica di giocarti lo stack — a questa profondità foldare è spesso un errore maggiore"
        ],
        [
          "4 ≤ SPR < 8",
          "Flessibile",
          "Doppia Coppia o meglio per valore; una coppia gioca una o due street, poi pot control"
        ],
        [
          "8 ≤ SPR < 15",
          "Stack profondi",
          "Set o meglio per giocarsi lo stack; i progetti guadagnano implied odds"
        ],
        [
          "SPR ≥ 15",
          "Deep",
          "Piatti grandi solo con mani vicine al nuts — le mani fatte deboli sono bersagli dei bluff"
        ]
      ],
      "note": "La scheda SPR qui sopra assegna qualsiasi stack e piatto a una di queste quattro zone."
    },
    {
      "badge": "Riferimento rapido",
      "h2": "Valore M: le cinque zone del torneo",
      "intro": "M = stack ÷ costo di un giro (piccolo buio + grande buio + tutti gli ante): quanti giri puoi resistere senza giocare una mano. Le zone presumono un tavolo completo da nove o dieci giocatori; con meno giocatori moltiplica prima M per (giocatori ÷ 10): è l'Effective M di Harrington. Un M di 10 a un tavolo finale da sei si gioca quindi come un 6 (il calcolatore sopra mostra M grezzo: fai tu questa conversione).",
      "th": [
        "Zona",
        "M",
        "Strategia"
      ],
      "align": [
        "left",
        "right",
        "left"
      ],
      "emphasis": 1,
      "rows": [
        [
          "💀 Zona morta",
          "< 1",
          "La fold equity è esaurita — vai all-in con la migliore mano ancora competitiva prima che arrivino i bui, preferibilmente first-in"
        ],
        [
          "🔴 Zona rossa",
          "1–5",
          "Push/fold: all-in con le mani buone, fold con le altre; cerca presto un raddoppio"
        ],
        [
          "🟠 Zona arancione",
          "6–9",
          "Restringi il range alle mani forti e cerca un open shove"
        ],
        [
          "🟡 Zona gialla",
          "10–19",
          "La pressione aumenta — accumula fiches con aggressività nei buoni spot"
        ],
        [
          "🟢 Zona verde",
          "20+",
          "Stack comodo — strategia completa, posizione e bluff"
        ]
      ],
      "note": "Bui e ordine delle puntate sono spiegati nella nostra guida ai bui:",
      "link": {
        "slug": "holdem-blind-meaning",
        "text": "Piccolo e grande buio nel poker"
      },
      "linkTail": "."
    }
  ],
  "guide": {
    "badge": "Strumenti",
    "h2": "Come usare i 9 calcolatori per Hold'em",
    "cards": [
      {
        "icon": "🎲",
        "title": "Calcolatore di equity (mano contro mano)",
        "body": "Inserisci 2–4 mani e un eventuale board per ottenere probabilità di vittoria, pareggio ed equity di ciascuna mano. Con tutte le mani note, flop e turn sono calcolati con exact enumeration; preflop o contro una mano casuale si campionano 60.000 runout, come indicato nel risultato."
      },
      {
        "icon": "🎯",
        "title": "Calcolatore di outs",
        "body": "Calcola con precisione la probabilità di chiudere il progetto dal flop o dal turn. Confronta subito il risultato esatto con la regola del 2 e del 4."
      },
      {
        "icon": "💰",
        "title": "Pot odds e implied odds",
        "body": "Decidi tra call e fold con i numeri; le implied odds aggiungono il denaro che prevedi di vincere nelle street successive."
      },
      {
        "icon": "🃏",
        "title": "Valutazione della mano",
        "body": "Scegli le carte per verificare il valore della mano. Inseriscine fino a 7: il calcolatore trova automaticamente la migliore combinazione di 5 carte."
      },
      {
        "icon": "📊",
        "title": "Forza della mano iniziale",
        "body": "Scegli le tue due carte coperte per identificare una delle 169 mani e vedere le azioni consigliate secondo la posizione."
      },
      {
        "icon": "📐",
        "title": "SPR (Stack-to-Pot Ratio)",
        "body": "Il rapporto tra stack e piatto indica quanta forza serve alla mano. Più SPR è basso, più favorisce impegnare lo stack con una mano forte."
      },
      {
        "icon": "🏆",
        "title": "Valore M nel torneo",
        "body": "Harrington's M misura la pressione sul tuo stack da torneo. La strategia cambia tra le zone verde, gialla, arancione, rossa e morta."
      },
      {
        "icon": "📈",
        "title": "Calcolatore ICM",
        "body": "Independent Chip Model converte le fiches da torneo in valore atteso dei premi, affiancato dalla colonna Chip Count: i numeri dietro alle decisioni in bolla e agli accordi al tavolo finale."
      },
      {
        "icon": "⚡",
        "title": "Tabella Nash push/fold",
        "body": "Una griglia Nash 13×13 per heads-up, 6-max e 9-max: quali mani mandare all-in first-in a 1–25bb e, in heads-up, con quali chiamare. Utile nelle fasi finali dei tornei."
      }
    ]
  },
  "faq": {
    "badge": "FAQ",
    "h2": "Domande sul calcolatore poker e sull'ICM",
    "q": "D. {q}"
  },
  "related": {
    "badge": "Approfondisci",
    "h2": "Guide da leggere dopo i calcoli",
    "links": [
      {
        "slug": "holdem-all-in-rules",
        "title": "All-in e non sai cosa vinci? — Regole all-in e side pot",
        "desc": "Vai all-in e il dealer divide le fiches in due mucchi. Regole dell'all-in nel Texas Hold'em: table stakes, piatto principale, side pot, rilanci e showdown."
      },
      {
        "slug": "holdem-betting-actions",
        "title": "Check, chiamare o passare? — Le azioni del poker",
        "desc": "Tocca a te e vai nel pallone? Ecco cosa significano check, chiamare, rilanciare e passare, la regola del min-raise e quante volte puoi rilanciare."
      },
      {
        "slug": "holdem-blind-meaning",
        "title": "Paghi prima di vedere le carte? — Piccolo e grande buio",
        "desc": "Due giocatori pagano prima ancora di ricevere una carta: perché? Cosa sono piccolo e grande buio, chi li mette, quanto valgono, il big blind ante e l'heads-up."
      },
      {
        "slug": "holdem-game-order",
        "title": "Non sai mai quando puntare? — L'ordine di gioco nel Texas Hold'em",
        "desc": "Vai nel pallone quando tocca a te nell'Hold'em? Ecco l'ordine di gioco completo — preflop, flop, turn, river e showdown — con una mano vera spiegata passo passo."
      },
      {
        "slug": "holdem-showdown-rules",
        "title": "Chi gira per primo? Regole dello showdown e del muck",
        "desc": "Chi mostra le carte per primo allo showdown? Puoi passare senza scoprire? Ultimo aggressore, cards speak, slow roll e all-in spiegati senza giri di parole."
      },
      {
        "slug": "texas-holdem-rules-for-beginners",
        "title": "Regole Texas Hold'em per principianti — fiches e schema pronto",
        "desc": "Prima partita? Come si gioca a Texas Hold'em passo dopo passo: bui, fiches, classifica dei punti e uno schema da stampare per iniziare da zero."
      }
    ]
  }
};
