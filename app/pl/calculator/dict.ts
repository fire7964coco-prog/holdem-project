import type { CalcDict } from "@/components/calculator/dict";

// Polish rollout: EN copy, Italian structure. Numeric values and card codes preserved.
export const CALC_DICT_PL: CalcDict = {
  "numberLocale": "pl-PL",
  "seo": {
    "title": "Kalkulator pokerowy — poker odds calculator",
    "description": "Poker kalkulator: oblicz equity, pot odds i outy w Texas Hold'em. Dziewięć narzędzi z ICM, SPR i push/fold, w przeglądarce bez rejestracji.",
    "path": "/pl/calculator"
  },
  "hero": {
    "badges": [
      "Bezpłatne narzędzie",
      "Bez rejestracji"
    ],
    "h1": "Kalkulator pokerowy",
    "h1Sub": "Equity, ICM i pot odds w jednym miejscu",
    "lead": "Wprowadź dwie ręce i sprawdź, kto wygrywa — potem oblicz pot odds, outy, deale ICM, SPR, turniejowe M i zakresy push/fold. Dziewięć bezpłatnych kalkulatorów Hold’em z exact enumeration na każdym streecie, na którym obliczenia są dostatecznie szybkie.",
    "chips": [
      "🎲 Equity",
      "🎯 Outy",
      "💰 Pot odds",
      "🃏 Siła układu",
      "📊 Ręce startowe",
      "📐 SPR",
      "🏆 M",
      "📈 ICM",
      "⚡ Push/fold"
    ]
  },
  "equity": {
    "label": "Equity",
    "sub": "Hand vs hand",
    "hero": "Twoja ręka",
    "opp": "Przeciwnik {n}",
    "random": "Losowa ręka",
    "board": "Board",
    "pickerHint": "Wybierz gracza lub board, a następnie jego karty.",
    "addPlayer": "+ Dodaj przeciwnika",
    "removePlayer": "− Usuń przeciwnika",
    "needTwo": "Przypisz każdej ręce 2 karty albo ustaw losową rękę przeciwnika.",
    "boardCount": "Zostaw pusty board dla preflop albo wybierz 3 (flop), 4 (turn) lub 5 (river) kart.",
    "th": {
      "player": "Gracz",
      "hand": "Ręka",
      "win": "Wygrana",
      "tie": "Remis",
      "equity": "Equity"
    },
    "exactNote": "Exact — sprawdzono wszystkie możliwe runouty: {n}.",
    "mcNote": "Monte Carlo — {n} losowych runoutów; wyniki różnią się o około ±0,3 pp między obliczeniami.",
    "winner": "{p} wygrywa z układem {hand}",
    "chop": "Podział puli — liczba rąk: {n} · układ: {hand}",
    "showdownNote": "Showdown — board jest kompletny, więc to wynik końcowy.",
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
      "label": "Outy",
      "sub": "Prawdopodobieństwo drawa"
    },
    "pot": {
      "label": "Pot odds",
      "sub": "Sprawdzenie/pas"
    },
    "hand": {
      "label": "Siła układu",
      "sub": "Wybierz karty"
    },
    "starting": {
      "label": "Ręce startowe",
      "sub": "Siła przy otwarciu"
    },
    "spr": {
      "label": "SPR",
      "sub": "Stack/pula"
    },
    "m": {
      "label": "M w turnieju",
      "sub": "M-ratio"
    },
    "icm": {
      "label": "ICM",
      "sub": "ICM value"
    },
    "pushfold": {
      "label": "Push/fold",
      "sub": "Tabela Nasha"
    }
  },
  "workspace": {
    "chooseCalculator": "Wybierz kalkulator",
    "resetInputs": "Resetuj dane",
    "resetAria": "Resetuj {label}",
    "resetMessage": "Zresetowano dane: {label}."
  },
  "cardPicker": {
    "clearAll": "Wyczyść wszystko"
  },
  "outs": {
    "drawType": "Rodzaj drawa",
    "presets": [
      {
        "label": "Custom input"
      },
      {
        "label": "Flush draw",
        "desc": "4 karty jednego koloru → potrzebna 5. (9 outów niezależnie od tego, czy to kolor nuts)"
      },
      {
        "label": "Open-ended straight draw (OESD)",
        "desc": "np. 5-6-7-8: potrzebujesz 4 lub 9"
      },
      {
        "label": "Flush draw + gutshot",
        "desc": "9 na kolor + 3 na gutshot (bez podwójnego liczenia)"
      },
      {
        "label": "Gutshot",
        "desc": "np. 5-6-8-9: potrzebujesz wyłącznie 7"
      },
      {
        "label": "Dwie overcards",
        "desc": "2 rangi wyższe od każdej karty na boardzie × po 3 karty — mocno obniż liczbę outów przeciw gotowemu układowi: para z overcard często nadal przegrywa"
      },
      {
        "label": "Dwie pary → full",
        "desc": "np. A-K na boardzie A-K-x → pozostały 2 asy + 2 króle"
      },
      {
        "label": "Para → trójka",
        "desc": "Pozostały 2 karty tej rangi"
      },
      {
        "label": "Flush draw + OESD (monster)",
        "desc": "9 na kolor + 8 na strita (2 wspólne)"
      }
    ],
    "outsSuffix": " (outy: {n})",
    "street": "Street",
    "afterFlopBtn": "🃏 Flop → river",
    "afterTurnBtn": "🔄 Turn → river",
    "flopOneBtn": "🎯 Flop → turn",
    "afterFlopOne": "Flop → turn",
    "chanceFlopOne": "Szansa trafienia na następnej karcie po flopie",
    "outsCount": "Liczba outów: {v}",
    "afterFlop": "Flop → river",
    "afterTurn": "Turn → river",
    "ruleOf4": "Zasada 4",
    "ruleOf2": "Zasada 2",
    "chanceFlop": "Szansa skompletowania od flopa do rivera (obie karty — all-in)",
    "chanceTurn": "Szansa skompletowania od turna do rivera",
    "exact": " (exact)",
    "ruleMental": "Zasada {n} (liczenie w pamięci):",
    "exactNote": "Wynik zapisany dużą czcionką jest dokładny",
    "verdict": {
      "great": "Great 🔥",
      "good": "Good ✅",
      "fair": "Fair ⚠️",
      "poor": "Poor ❌",
      "veryPoor": "Very poor 💀"
    }
  },
  "pot": {
    "potSize": "Wielkość puli (z zakładem przeciwnika)",
    "callAmount": "Amount to call",
    "potOddsCaption": "Pot odds (potrzebne equity)",
    "orHigher": "powyżej tej wartości sprawdzenie jest opłacalne",
    "equityLabel": "Equity twojej ręki: {v}",
    "sliderGutshot": "Gutshot (turn) 8,7%",
    "sliderFlush": "Kolor (turn) 19,6%",
    "impliedToggle": "Implied odds {toggle}",
    "close": "Zamknij ▲",
    "add": "Dodaj ▼",
    "extraWinnings": "Oczekiwana dodatkowa wygrana (jeśli trafisz): {v}",
    "none": "Brak",
    "impliedCaption": "Implied odds (z dodatkową wygraną)",
    "impliedNote": "Potrzebne equity przy dodatkowej wygranej {n}",
    "needImplied": "implied odds {n}%",
    "needPot": "pot odds {n}%",
    "verdict": {
      "call": {
        "title": "Sprawdzenie (opłacalne)",
        "body": "Twoje equity {eq}% > {need} → opłacalne w długim okresie"
      },
      "even": {
        "title": "Break-even (EV 0)",
        "body": "Twoje equity {eq}% = {need} → sprawdzenie nie przynosi zysku ani straty. Uwzględnij czynniki poza pot odds, np. pozycję i tendencje przeciwnika"
      },
      "fold": {
        "title": "Zalecany pas",
        "body": "Twoje equity {eq}% < {need} → strata w długim okresie"
      }
    }
  },
  "handEval": {
    "pickerLabel": "Wybierz karty (5–7)",
    "emptyTitle": "Wybierz co najmniej 5 kart, aby ocenić układ",
    "emptyHint": "Z 7 kart automatycznie wybierana jest najlepsza kombinacja 5 kart",
    "bestFrom": "Najlepszy układ z {n} kart",
    "rankNames": [
      "Najwyższa karta",
      "Para",
      "Dwie pary",
      "Trójka",
      "Strit",
      "Kolor",
      "Full",
      "Kareta",
      "Poker (straight flush)",
      "Poker królewski"
    ],
    "resultNames": [
      "Najwyższa karta 🃏",
      "Para 1️⃣",
      "Dwie pary ✌️",
      "Trójka 3️⃣",
      "Strit ➡️",
      "Kolor 🌊",
      "Full 🏠",
      "Kareta 💎",
      "Poker (straight flush) 🌟",
      "Poker królewski 👑"
    ],
    "axis": [
      "Najwyższa karta",
      "Para",
      "Kolor",
      "Kareta",
      "Poker królewski"
    ]
  },
  "starting": {
    "pickerLabel": "Wybierz swoje 2 karty zakryte",
    "emptyPrompt": "Wybierz swoje 2 karty zakryte",
    "unknownDesc": "Poza podstawową tabelą otwarcia",
    "unknownAction": "Suited: z buttona otwieraj dowolną rękę suited, gdy wszyscy przed tobą spasowali; z cutoffa ogranicz się do króli suited, dwóch kart 8 lub wyższych (Q8s, 10-8s) i connectors do 54s. Offsuit: tylko button — dowolny as (A9o, A5o) lub dwie karty 9 lub wyższe (K9o, 10-9o). Resztę (J2o, 93o, 72o) spasuj",
    "tierNames": [
      "🥇 Tier 1 — Premium",
      "🥈 Tier 2 — Strong",
      "🥉 Tier 3 — Playable",
      "⚠️ Tier 4 — Marginal",
      "🚫 Tier 5 — Weak"
    ],
    "recommendedAction": "Zalecana akcja:",
    "axis": [
      "Premium",
      "Strong",
      "Playable",
      "Marginal",
      "Weak"
    ],
    "summaryTitle": "Podsumowanie poziomów rąk",
    "summary": [
      {
        "hands": "AA KK QQ JJ 10-10 AKs AKo",
        "action": "Zawsze przebijaj"
      },
      {
        "hands": "AQs AJs A10s KQs KJs 99 88 AQo",
        "action": "Przebijaj z większości pozycji"
      },
      {
        "hands": "AJo KQo K10s Q10s QJs J10s 10-9s 77 A9s K9s Q9s J9s",
        "action": "Przebijaj z późnej pozycji"
      },
      {
        "hands": "66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s",
        "action": "Wybiórczo na LP"
      },
      {
        "hands": "słabe ręce offsuit (J2o, 93o, 72o)",
        "action": "Zwykle spasuj"
      }
    ],
    "hands": {
      "22": {
        "desc": "Najniższa para z ręki",
        "action": "Przebijaj first in na LP; poza tym tylko pule multiway przy głębokich stackach"
      },
      "33": {
        "desc": "Wymaga set miningu; ręka spekulacyjna",
        "action": "Przebijaj first in na LP; poza tym tylko pule multiway przy głębokich stackach"
      },
      "44": {
        "desc": "Prawie bez wartości bez seta",
        "action": "Przebijaj first in na LP; sprawdzaj pojedyncze przebicie na LP, gdy ty i przebijający macie po co najmniej ~15× kwoty sprawdzenia w pozostałym stacku"
      },
      "55": {
        "desc": "Mała wartość bez seta",
        "action": "Przebijaj first in na LP; sprawdzaj pojedyncze przebicie na LP, gdy ty i przebijający macie po co najmniej ~15× kwoty sprawdzenia w pozostałym stacku"
      },
      "66": {
        "desc": "Set mining — wymaga implied odds",
        "action": "Przebijaj first in na LP; sprawdzaj przebicie, gdy ty i przebijający macie po co najmniej ~15× kwoty sprawdzenia w pozostałym stacku"
      },
      "77": {
        "desc": "Ręka do set miningu, uważaj na overcards",
        "action": "Przebijaj na LP; na EP sprawdzaj przebicie, a first in przebijaj lub pasuj — nigdy open-limp"
      },
      "88": {
        "desc": "Para z ręki z dobrym potencjałem seta",
        "action": "Przebijaj z większości pozycji; sprawdzaj przebicie — nigdy open-limp"
      },
      "99": {
        "desc": "Średnia para, uważaj na flopy z overcards",
        "action": "Przebijaj z większości pozycji; ostrożnie przy głębokich stackach"
      },
      "1010": {
        "desc": "Traci wartość, gdy na flopie pojawiają się overcards",
        "action": "Przebijaj z każdej pozycji — bez open-limp"
      },
      "AA": {
        "desc": "Najlepsza ręka. Przebijaj w każdej sytuacji",
        "action": "Zawsze przebijaj/re-raise (3-bet)"
      },
      "KK": {
        "desc": "Uważaj tylko na asa na flopie",
        "action": "Zawsze przebijaj/re-raise"
      },
      "QQ": {
        "desc": "Silniejsza od JJ, ale nie przeceniaj jej",
        "action": "Zawsze przebijaj; ostrożnie przy głębokich stackach"
      },
      "JJ": {
        "desc": "Uważaj na overcards na flopie",
        "action": "Przebijaj z każdej pozycji"
      },
      "AKs": {
        "desc": "Najlepsza ręka z potencjałem drawa. Buduj pulę",
        "action": "Zawsze przebijaj/re-raise"
      },
      "AKo": {
        "desc": "Słabsza od AKs, ale nadal premium",
        "action": "Zawsze przebijaj; możesz sprawdzić re-raise"
      },
      "AQs": {
        "desc": "Silna ręka; zyskuje na pozycji",
        "action": "Przebijaj z większości pozycji"
      },
      "AJs": {
        "desc": "Świetna na BTN/CO, słaba na UTG",
        "action": "Przebijaj ze środkowej/późnej pozycji; z UTG przebijaj lub pasuj — nigdy limp"
      },
      "A10s": {
        "desc": "Jeden z najlepszych asów suited",
        "action": "Przebijaj ze środkowej/późnej pozycji; z UTG przebijaj lub pasuj — nigdy limp"
      },
      "KQs": {
        "desc": "Potencjał wysokiego koloru i strita",
        "action": "Przebijaj z większości pozycji"
      },
      "KJs": {
        "desc": "Silna ręka z potencjałem drawa",
        "action": "Przebijaj na LP; z EP pasuj lub przebijaj — nigdy limp"
      },
      "AQo": {
        "desc": "Słabsza offsuit; pozycja ma znaczenie",
        "action": "Przebijaj ze środkowej/późnej pozycji; z UTG przebijaj lub pasuj — nigdy limp"
      },
      "AJo": {
        "desc": "Słaba na EP, silna na LP",
        "action": "Przebijaj z CO/BTN, ostrożnie na EP"
      },
      "KQo": {
        "desc": "Najlepszy connector offsuit",
        "action": "Przebijaj na LP; na EP przebijaj lub pasuj, gdy nikt nie wszedł do puli, a wobec przebicia zwykle pasuj"
      },
      "K10s": {
        "desc": "Król suited, silny na LP",
        "action": "Przebijaj na LP, pasuj na EP"
      },
      "QJs": {
        "desc": "Silny potencjał drawa w dwóch kierunkach",
        "action": "Przebijaj na LP; zyskuje przy głębokich stackach"
      },
      "J10s": {
        "desc": "Jeden z najlepszych suited connectors",
        "action": "Przebijaj na LP; sprawdzaj pojedyncze przebicie na pozycji"
      },
      "109s": {
        "desc": "Silny suited connector",
        "action": "Przebijaj first in na LP; sprawdzaj pojedyncze przebicie na pozycji"
      },
      "A9s": {
        "desc": "As suited z potencjałem koloru",
        "action": "Przebijaj na LP"
      },
      "K9s": {
        "desc": "Król suited; para króli może być zdominowana",
        "action": "Open raise z CO/BTN, gdy wszyscy przed tobą spasowali; wobec przebicia oceń pozycję, cenę i efektywne stacki"
      },
      "Q9s": {
        "desc": "Dama suited z potencjałem strita; uważaj na silniejsze damy",
        "action": "Open raise z CO/BTN, gdy wszyscy przed tobą spasowali; wobec przebicia oceń pozycję, cenę i efektywne stacki"
      },
      "J9s": {
        "desc": "Suited one-gapper z potencjałem strita i koloru",
        "action": "Open raise z CO/BTN, gdy wszyscy przed tobą spasowali; wobec przebicia oceń pozycję, cenę i efektywne stacki"
      },
      "A8s": {
        "desc": "Średni as suited",
        "action": "Graj na LP, pasuj na EP"
      },
      "A7s": {
        "desc": "Średni as suited",
        "action": "Tylko LP"
      },
      "A6s": {
        "desc": "Średni as suited",
        "action": "Tylko LP"
      },
      "A5s": {
        "desc": "Potencjał wheel i blocker asa; popularny blef 3-bet",
        "action": "Tylko LP; implied odds mają znaczenie"
      },
      "A4s": {
        "desc": "As suited z drawem do wheel",
        "action": "Tylko LP"
      },
      "A3s": {
        "desc": "Flush draw do nuts z kartą wheel, o poziom wyżej niż A2s",
        "action": "Tylko LP"
      },
      "A2s": {
        "desc": "Wheel + kolor nuts, ale słaba ręka",
        "action": "Tylko LP"
      },
      "KJo": {
        "desc": "Ryzyko dominacji; tylko LP",
        "action": "Przebijaj z CO/BTN, pasuj wobec re-raise"
      },
      "QJo": {
        "desc": "Umiarkowana łączność kart; wymaga pozycji",
        "action": "Tylko LP"
      },
      "98s": {
        "desc": "Silny suited connector",
        "action": "Przebijaj first in na LP; sprawdzaj przebicie na pozycji"
      },
      "87s": {
        "desc": "Dobry suited connector",
        "action": "Przebijaj first in na LP; sprawdzaj przebicie na pozycji"
      },
      "76s": {
        "desc": "Suited connector",
        "action": "Przebijaj first in na LP; sprawdzaj przebicie tylko na pozycji i przy głębokich stackach"
      },
      "K10o": {
        "desc": "K-10 offsuit, słaba ręka",
        "action": "Open raise z CO/BTN, gdy wszyscy przed tobą spasowali"
      },
      "Q10o": {
        "desc": "Offsuit o słabej łączności",
        "action": "Tylko BTN"
      },
      "J10o": {
        "desc": "Przyzwoita offsuit, ale podatna na silniejsze ręce",
        "action": "Tylko BTN"
      },
      "Q10s": {
        "desc": "Silny broadway suited, dobrze gra na pozycji",
        "action": "Przebijaj na LP; pasuj na EP"
      },
      "A10o": {
        "desc": "Marginalny as offsuit, podatny na dominację",
        "action": "Tylko LP"
      },
      "65s": {
        "desc": "Suited connector; potrzebuje multiway/implied odds",
        "action": "Przebijaj first in na LP; sprawdzaj przebicie tylko na pozycji i przy głębokich stackach"
      },
      "54s": {
        "desc": "Niski suited connector; ręka spekulacyjna",
        "action": "Przebijaj first in na LP; sprawdzaj przebicie tylko na pozycji w tanich pulach multiway"
      }
    }
  },
  "spr": {
    "effectiveStack": "Efektywny stack (mniejszy z dwóch stacków)",
    "potSize": "Obecna wielkość puli",
    "caption": "SPR (stack-to-pot ratio)",
    "stackDivPot": "stack ÷ pula",
    "zones": {
      "low": {
        "label": "Niskie SPR (committed)",
        "desc": "Duża część puli została już zainwestowana. Z top pair top kicker lub lepszym układem na suchym flopie planuj dołożyć resztę — przy tej głębokości pas jest często większym błędem. Na sparowanym boardzie, z trzema kartami do koloru lub strita, albo wobec akcji typowej wyłącznie dla seta lub strita, jedna para nadal pozostaje jedną parą.",
        "actions": [
          [
            "TPTK+",
            "Rozważ all-in"
          ],
          [
            "Drawy",
            "Pot odds są niezbędne"
          ],
          [
            "Słabe ręce",
            "Pasuj rozważnie"
          ]
        ]
      },
      "mid": {
        "label": "Średnie SPR (elastycznie)",
        "desc": "To strefa gry silnymi układami, jak dwie pary lub lepsze. Ochrona stacka staje się ważna.",
        "actions": [
          [
            "Dwie pary+",
            "Value bet"
          ],
          [
            "Jedna para",
            "Jeden lub dwa streety, potem pot control"
          ],
          [
            "Drawy",
            "Semibluff z fold equity; bez niego odpuść"
          ]
        ]
      },
      "high": {
        "label": "Wysokie SPR (coraz głębiej)",
        "desc": "Stacki stają się głębokie. Względna wartość drawów i silnych gotowych układów rośnie.",
        "actions": [
          [
            "Set+",
            "Graj mocno"
          ],
          [
            "Drawy",
            "Implied odds rosną"
          ],
          [
            "Jedna para/TPTK",
            "Zachowaj ostrożność"
          ]
        ]
      },
      "deep": {
        "label": "Bardzo wysokie SPR (głęboko)",
        "desc": "To gra z głębokimi stackami. Pozycja, potencjał drawa i odczytywanie zakresów przeciwnika mają duże znaczenie.",
        "actions": [
          [
            "Układy nuts",
            "Możesz stawiać dużo"
          ],
          [
            "Drawy",
            "Bardzo wysokie implied odds"
          ],
          [
            "Słabe gotowe układy",
            "Ostrożnie, podatne na blefy"
          ]
        ]
      }
    },
    "legend": [
      "Committed",
      "Elastycznie",
      "Coraz głębiej",
      "Głęboko"
    ]
  },
  "m": {
    "inputs": {
      "stack": "Twój stack",
      "bb": "Duży blind",
      "sb": "Mały blind",
      "ante": "Ante"
    },
    "players": "Gracze przy stole: {v}",
    "headsUp": "2 (heads-up)",
    "orbitCaption": "Koszt okrążenia (blindy na okrążenie)",
    "orbitFormula": "BB {bb} + SB {sb} + ante {ante}×{players}",
    "mCaption": "M (Harrington's M)",
    "zones": {
      "dead": {
        "name": "💀 Strefa martwa",
        "desc": "Fold equity zniknęło — pozostaje all-in. Wybierz najlepszą live hand, jaką zobaczysz, zanim dotrą do ciebie blindy, najlepiej w nieotwartej puli.",
        "action": "All-in teraz"
      },
      "red": {
        "name": "🔴 Strefa czerwona",
        "desc": "Musisz wkrótce się podwoić. Stosuj push/fold — dobre ręce all-in, resztę spasuj.",
        "action": "Push/fold"
      },
      "orange": {
        "name": "🟠 Strefa pomarańczowa",
        "desc": "Twój stack maleje. Zawęź zakres wyłącznie do silnych rąk i szukaj open-shove.",
        "action": "Zakres tight"
      },
      "yellow": {
        "name": "🟡 Strefa żółta",
        "desc": "Presja rośnie. Aktywnie zbieraj żetony — graj agresywnie w dobrych spotach.",
        "action": "Graj agresywnie"
      },
      "green": {
        "name": "🟢 Strefa zielona",
        "desc": "Masz komfortowy stack. Korzystaj z pełnego wachlarza strategii — powiększaj stack grą na pozycji i blefami.",
        "action": "Pełna strategia"
      }
    }
  },
  "icm": {
    "introStrong": "ICM (Independent Chip Model)",
    "introRest": " przelicza turniejowe stacki na oczekiwaną wartość nagród według ICM. Przy decyzji sprawdzenie/pas pomnóż wartość po każdym możliwym wyniku (wygrana, remis lub przegrana) przez jego rzeczywiste prawdopodobieństwo, a sumę porównaj z wartością po spasowaniu. Odpadnięcie jest warte faktycznie otrzymaną nagrodę, a nie automatycznie zero.",
    "numPlayers": "Liczba graczy",
    "paidPlaces": "Paid places",
    "stacksTitle": "Stacki graczy",
    "total": "łącznie {n}",
    "decStack": "Zmniejsz stack gracza {n}",
    "stackInput": "Stack gracza {n}",
    "incStack": "Zwiększ stack gracza {n}",
    "prizesTitle": "Prizes",
    "decPrize": "Zmniejsz nagrodę za miejsce {n}",
    "prizeInput": "Nagroda za miejsce {n}",
    "incPrize": "Zwiększ nagrodę za miejsce {n}",
    "currencyNote": "Wprowadź nagrody w dowolnej jednostce waluty.",
    "resultTitle": "Wynik ICM",
    "th": {
      "player": "Gracz",
      "chips": "Żetony",
      "chipPct": "Żetony %",
      "icmValue": "ICM value",
      "icmPct": "ICM %",
      "diff": "Różnica",
      "chop": "Chip chop"
    },
    "playerCell": "{medal} P{n}",
    "diffPlus": "+różnica",
    "diffPlusNote": "Twój udział w puli nagród według ICM jest wyższy od udziału w żetonach. Sam znak różnicy nie mówi, czy sprawdzić, czy spasować.",
    "diffMinus": "−różnica",
    "diffMinusNote": "Twój udział w puli nagród według ICM jest niższy od udziału w żetonach. Sam znak różnicy nie mówi, czy agresja jest opłacalna.",
    "diffUnit": "pp",
    "empty": "Użyj dodatnich stacków i nagród, od najwyższej do najniższej (równe nagrody są dozwolone)."
  },
  "pushfold": {
    "ante": "Ante",
    "noAnte": "Bez ante",
    "bbAnteOn": "BB ante WŁ.",
    "table": "Stół",
    "headsUp": "Heads-Up",
    "sixMax": "6-max",
    "nineMax": "9-max",
    "scenario": "Scenariusz",
    "sbShove": "SB: all-in lub pas",
    "bbCall": "BB: sprawdzenie all-inu",
    "position": "Pozycja {hint}",
    "firstInHint": "(first in — wszyscy przed tobą spasowali)",
    "effectiveStack": "Efektywny stack: {v}",
    "captionHuPush": "Ręce do all-inu z SB przy {stack}bb",
    "captionHuCall": "Ręce do sprawdzenia all-inu z BB przy {stack}bb",
    "captionMw": "First-in shove z {pos} przy stole {table}-max, {stack}bb",
    "withAnte": " (z ante)",
    "combosSuffix": " / {total} combo",
    "legendPush": "All-in",
    "legendCall": "Sprawdzenie",
    "legendFold": "Pas",
    "note": {
      "strong1": "Przekątna = pary · prawa góra = suited · lewy dół = offsuit",
      "p1": "Tabela jest uporządkowana według ",
      "strong2": "rangi kart, a nie siły",
      "p2": ", więc naprzemienne podświetlone i niepodświetlone pola w wierszu są prawidłowe — AQo, KQo i QQ leżą obok siebie, ale nie według siły. A5s w zakresie przy A6s poza nim też jest poprawne: A5s tworzy ",
      "strong3": "strita wheel (A-2-3-4-5)",
      "p3": ", co przeważa nad niższym kickerem."
    },
    "cellTitle": "{hand} — {action}",
    "cell": {
      "push": "all-in",
      "call": "sprawdzenie",
      "fold": "pas"
    },
    "huNote": {
      "strong": "Równowaga Nasha, heads-up (SB vs BB)",
      "p1": ": zakładamy, że SB gra wyłącznie all-in lub pas. Ustawienie ante dodaje 0,125bb na gracza (po 12,5% dużego blinda — tyle wynosi big blind ante na osobę przy stole 8-osobowym; w heads-up to tylko 0,25bb łącznie). Zakresy rozszerzają się wraz ze skracaniem stacków — a poniżej ~3-4bb BB poprawnie sprawdza ",
      "em": "szerzej",
      "p2": " niż SB gra all-in, ze względu na pot odds."
    },
    "mwNote": {
      "strong": "Tabela first-in shove dla {table}-max",
      "p1": ": wszyscy przed tobą spasowali, a ty grasz all-in lub pas. To równowaga w stylu Nasha oparta na ",
      "strong2": "czystym chip EV",
      "p2": " — zakresy sprawdzenia graczy za tobą są rozwiązywane jednocześnie — ze standardowym przybliżeniem, że sprawdzona pula rozstrzyga się heads-up przeciw pierwszemu sprawdzającemu (pule z wieloma sprawdzającymi są pomijane). Zakresy rozszerzają się, gdy zostaje mniej graczy za tobą (UTG → BTN → SB), stacki się skracają i ante jest WŁ. (0,125bb na gracza). Ze względu na czyste chip EV zakresy 10bb z wczesnej pozycji (UTG/MP) są węższe niż popularne reguły orientacyjne (bez ante małe pary pasują) — w praktyce uwzględnij ICM i przeciwników."
    },
    "readMore": "Zasady all-in i pul bocznych wyjaśnia poradnik",
    "shortStackLink": {
      "slug": "holdem-all-in-rules",
      "text": "All-in w Texas Hold’em"
    },
    "readMoreEnd": "."
  },
  "icmGuide": {
    "bubble": {
      "badge": "Poradnik ICM",
      "h2": "Jak używać kalkulatora ICM — 3-minutowy przykład bubble",
      "intro": "Zostało czterech graczy, a płatne są trzy miejsca (bubble). Stacki wynoszą 60 000 / 40 000 / 30 000 / 20 000, a nagrody $500 / $300 / $200. Wprowadź je do kalkulatora, aby porównać udział każdego gracza w żetonach z rzeczywistą wartością nagród (ICM):",
      "th": {
        "player": "Gracz",
        "chipPct": "Żetony %",
        "icmPct": "ICM %",
        "diff": "Różnica"
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
          "player": "🥈 2. miejsce",
          "chip": "26,7%",
          "icm": "27,2%",
          "diff": "+0,6 pp",
          "up": true
        },
        {
          "player": "🥉 3. miejsce",
          "chip": "20,0%",
          "icm": "22,9%",
          "diff": "+2,9 pp",
          "up": true
        },
        {
          "player": "4. miejsce (short stack)",
          "chip": "13,3%",
          "icm": "16,6%",
          "diff": "+3,3 pp",
          "up": true
        }
      ],
      "keyPoint": {
        "text": "Tabela pokazuje, że {b1} o 6,7 percentage points; to nie próg sprawdzenia/pasu. Średnie stacki często mają największy risk premium, więc lider pokrywający ich stacki może {b2}, gdy pozwalają na to zakresy. Małe stacki powinny {b3}. Decyzje zależą od stacków, nagród i przeciwników, nie tylko od znaku różnicy.",
        "b1": "ICM value lidera (33,3%) jest niższe od jego udziału w żetonach (40%)",
        "b2": "wywierać presję na średnie stacki",
        "b3": "ostrożnie dobierać sprawdzenia, z wyjątkiem stacków bliskich utraty wszystkich żetonów na blindy"
      }
    },
    "deal": {
      "badge": "Kalkulator dealu ICM",
      "h2": "Kalkulator dealu ICM — ile jest wart deal przy stole finałowym",
      "intro": "Zostało czterech graczy i rozmawiają o dealu. Stacki to 450 000 / 250 000 / 180 000 / 120 000 (45% / 25% / 18% / 12%), a pozostałe $2 300 nagród dzieli się na $1 000 / $600 / $400 / $300. Wprowadź je do kalkulatora ICM powyżej — kolumna Chip chop zestawia obie wartości:",
      "th": {
        "player": "Gracz",
        "chop": "Chip chop",
        "icm": "Deal ICM",
        "diff": "Różnica"
      },
      "rows": [
        {
          "player": "🥇 Chip leader (45%)",
          "chop": "$1 035",
          "icm": "$726",
          "diff": "-$309",
          "up": false
        },
        {
          "player": "🥈 2. miejsce (25%)",
          "chop": "$575",
          "icm": "$591",
          "diff": "+$16",
          "up": true
        },
        {
          "player": "🥉 3. miejsce (18%)",
          "chop": "$414",
          "icm": "$526",
          "diff": "+$112",
          "up": true
        },
        {
          "player": "4. miejsce (12%)",
          "chop": "$276",
          "icm": "$458",
          "diff": "+$182",
          "up": true
        }
      ],
      "summary": {
        "text": "Surowy chip chop dzieli według udziału w żetonach i {b1}; deal ICM uwzględnia szanse każdego gracza na każde miejsce i jest {b2}. Tutaj najmniejszy stack dostaje $276 według żetonów, ale $458 według ICM — {b3}. Oblicz obie wartości przed rozmową. Chip chop w danym salonie często oznacza save-and-chop — każdy najpierw dostaje kolejną nagrodę, a tylko reszta dzieli się według żetonów — co daje wynik zbliżony do ICM, a nie surowy podział z tej kolumny. ICM zakłada równy poziom umiejętności i pomija to, kto wpłaci następne blindy, więc spodziewaj się, że duży stack będzie negocjował ponad swoją wartość ICM.",
        "b1": "faworyzuje chip leadera",
        "b2": "korzystniejszy dla małych stacków",
        "b3": "o $182 więcej"
      }
    }
  },
  "quickRef": [
    {
      "badge": "Szybki podgląd",
      "h2": "Kalkulator equity — porównania all-in preflop",
      "intro": "Equity dwóch rąk w all-inie preflop, uśrednione po wszystkich kombinacjach kolorów w danym porównaniu (obliczone wcześniej offline: wszystkie 1 712 304 boardy dla każdej kombinacji). Konkretne kolory mogą zmienić wynik o ponad dwa percentage points (A♠K♠ vs Q♠J♠: 66,0%) — wprowadź dokładne karty w kalkulatorze equity powyżej.",
      "th": [
        "Porównanie",
        "Ręka A",
        "Ręka B",
        "Remis"
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
      "note": "Equity to średni udział w puli z uwzględnieniem remisów (podziałów puli). Para przeciw dwóm overcards to klasyczny wyścig; para przeciw wyższej parze ma około 4,5 do 1 przeciw sobie."
    },
    {
      "badge": "Szybki podgląd",
      "h2": "Para asów przeciw losowym rękom — liczba przeciwników",
      "intro": "Jak często AA wygrywa, gdy wszyscy grają all-in preflop przeciw N losowym rękom (Monte Carlo, 8 000 000 runoutów na wiersz). Pierwsi dwaj sprawdzający kosztują asy po około 10 percentage points; każdy kolejny kosztuje mniej.",
      "th": [
        "Przeciwnicy",
        "Equity AA"
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
      "note": "Dlatego asy wolą pulę heads-up: przeciw pięciu losowym rękom najlepsza ręka startowa w Hold’em nie jest już faworytem do wygrania puli (49,2%, a pozostałą część dzieli pięć rąk). Ustaw przeciwnikowi „Losowa ręka” w kalkulatorze equity, aby tak samo sprawdzić dowolną rękę (obsługuje do trzech przeciwników)."
    },
    {
      "badge": "Szybki podgląd",
      "h2": "Kalkulator outów — szanse drawa według liczby outów",
      "intro": "Szansa skompletowania drawa: flop → river (dwie karty), flop → turn (tylko następna karta) i turn → river (jedna karta) — dokładna, obok przybliżenia z zasady 4 i 2. Najpierw policz outy, potem odczytaj wiersz.",
      "th": [
        "Outy",
        "Typowy draw",
        "Flop → river",
        "Flop → turn",
        "Turn → river",
        "Zasada 4 · 2"
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
          "Para z ręki → set",
          "8,4%",
          "4,3%",
          "4,3%",
          "8% · 4%"
        ],
        [
          "3",
          "Jedna overcard",
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
          "Para → dwie pary lub trips",
          "20,4%",
          "10,6%",
          "10,9%",
          "20% · 10%"
        ],
        [
          "6",
          "Dwie overcards",
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
          "OESD",
          "31,5%",
          "17,0%",
          "17,4%",
          "32% · 16%"
        ],
        [
          "9",
          "Flush draw",
          "35,0%",
          "19,1%",
          "19,6%",
          "36% · 18%"
        ],
        [
          "10",
          "Gutshot + dwie overcards",
          "38,4%",
          "21,3%",
          "21,7%",
          "40% · 20%"
        ],
        [
          "11",
          "OESD + jedna overcard",
          "41,7%",
          "23,4%",
          "23,9%",
          "44% · 22%"
        ],
        [
          "12",
          "Flush draw + gutshot",
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
          "OESD + dwie overcards",
          "51,2%",
          "29,8%",
          "30,4%",
          "56% · 28%"
        ],
        [
          "15",
          "Flush draw + OESD",
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
      "note": "Wartość dla dwóch kart obowiązuje tylko wtedy, gdy zobaczysz obie bez kolejnej opłaty (all-in). Wobec jednego zakładu na flopie użyj kolumny flop → turn: 9 outów = 19,1%. Overcards są najmniej pewnymi outami — przeciw gotowemu układowi trafienie pary często nadal przegrywa, więc obniż ich wartość."
    },
    {
      "badge": "Szybki podgląd",
      "h2": "Kalkulator pot odds — equity potrzebne do sprawdzenia",
      "intro": "Dla zakładu o danej wielkości do puli to minimalne equity sprawdzenia dla break-even: kwota sprawdzenia ÷ (pula po zakładzie + kwota sprawdzenia). Pokazujemy obie postacie — odds i potrzebne equity; kalkulator podaje equity. Porównaj je z dokładnymi szansami drawa w tabeli outów powyżej.",
      "th": [
        "Zakład",
        "Odds (X : 1)",
        "Potrzebne equity"
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
          "¼ puli",
          "5 : 1",
          "16,7%"
        ],
        [
          "⅓ puli",
          "4 : 1",
          "20,0%"
        ],
        [
          "½ puli",
          "3 : 1",
          "25,0%"
        ],
        [
          "⅔ puli",
          "2,5 : 1",
          "28,6%"
        ],
        [
          "¾ puli",
          "2,33 : 1",
          "30,0%"
        ],
        [
          "Pula",
          "2 : 1",
          "33,3%"
        ],
        [
          "1,5× puli",
          "1,67 : 1",
          "37,5%"
        ],
        [
          "2× puli",
          "1,5 : 1",
          "40,0%"
        ],
        [
          "3× puli",
          "1,33 : 1",
          "42,9%"
        ]
      ],
      "note": "Flush draw (35,0% przy dwóch kartach, 19,1% na następnej) sprawdza zakład wielkości puli na flopie tylko przy all-inie. W pozostałych przypadkach kalkulator implied odds — przełącznik w karcie Pot odds — dodaje pieniądze, które spodziewasz się wygrać później, o ile przeciwnik ma jeszcze żetony i rękę, która zapłaci; mocno obniż tę kwotę, jeśli nie dobierasz do nuts."
    },
    {
      "badge": "Szybki podgląd",
      "h2": "Kalkulator SPR — jak silnej ręki potrzebujesz",
      "intro": "SPR to efektywny stack ÷ obecna pula. Efektywny stack jest mniejszym z dwóch stacków — tyle każdy gracz może wygrać lub stracić. Im niższe SPR, tym większa część stacka jest już zaangażowana i tym słabszy układ wystarcza do gry o cały stack; im wyższe, tym bliżej nuts musisz być w dużej puli. Traktuj strefy jako plan na flopa: na mokrym lub sparowanym boardzie jedna para nadal pozostaje jedną parą.",
      "th": [
        "SPR",
        "Strefa",
        "Siła układu · akcja"
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
          "Top pair top kicker lub lepiej na suchym flopie: planuj grę o cały stack — przy tej głębokości pas jest często większym błędem"
        ],
        [
          "4 ≤ SPR < 8",
          "Elastycznie",
          "Dwie pary lub lepiej dla value; jedna para przez jeden lub dwa streety, potem pot control"
        ],
        [
          "8 ≤ SPR < 15",
          "Coraz głębiej",
          "Sety i lepsze układy grają o stacki; drawy zyskują implied odds"
        ],
        [
          "SPR ≥ 15",
          "Głęboko",
          "Duże pule tylko z układami klasy nuts — słabe gotowe układy są celem blefów"
        ]
      ],
      "note": "Kalkulator SPR powyżej przypisuje dowolny stack i pulę do jednej z czterech stref."
    },
    {
      "badge": "Szybki podgląd",
      "h2": "Kalkulator M — pięć stref turniejowych",
      "intro": "M to twój stack ÷ koszt okrążenia (mały blind + duży blind + wszystkie ante): liczba okrążeń, które przetrwasz bez gry. Strefy zakładają pełny stół dziewięcio- lub dziesięcioosobowy; przy mniejszej liczbie graczy najpierw pomnóż M przez (liczba graczy ÷ 10) — Harrington’s Effective M — więc M równe 10 przy sześcioosobowym stole finałowym działa jak 6 (kalkulator powyżej pokazuje surowe M; przelicz je sam).",
      "th": [
        "Strefa",
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
          "💀 Strefa martwa",
          "< 1",
          "Fold equity zniknęło — graj all-in najlepszą live hand przed nadejściem blindów, najlepiej first in"
        ],
        [
          "🔴 Strefa czerwona",
          "1–5",
          "Push/fold: dobre ręce all-in, resztę spasuj, wkrótce się podwój"
        ],
        [
          "🟠 Strefa pomarańczowa",
          "6–9",
          "Zawęź zakres do silnych rąk i szukaj open-shove"
        ],
        [
          "🟡 Strefa żółta",
          "10–19",
          "Presja rośnie — agresywnie zbieraj żetony w dobrych spotach"
        ],
        [
          "🟢 Strefa zielona",
          "20+",
          "Komfortowy stack — pełna strategia, gra na pozycji i blefy"
        ]
      ],
      "note": "Rolę blindów i kolejność zakładów wyjaśnia poradnik",
      "link": {
        "slug": "holdem-blind-meaning",
        "text": "Mały i duży blind"
      },
      "linkTail": "."
    }
  ],
  "guide": {
    "badge": "Narzędzia",
    "h2": "Jak korzystać z 9 kalkulatorów Hold’em",
    "cards": [
      {
        "icon": "🎲",
        "title": "Kalkulator equity (hand vs hand)",
        "body": "Wprowadź 2–4 ręce i dowolny board, aby poznać procent wygranych, remisów i equity każdej ręki. Gdy wszystkie ręce są znane, flop i turn są liczone dokładnie; preflop lub przy losowej ręce przeciwnika narzędzie próbkuje 60 000 runoutów i informuje o tym."
      },
      {
        "icon": "🎯",
        "title": "Kalkulator outów",
        "body": "Dokładnie oblicza szansę skompletowania drawa na flopie lub turnie. Jednocześnie pokazuje przybliżenie z zasady 4 i 2 oraz dokładny wynik."
      },
      {
        "icon": "💰",
        "title": "Pot odds i implied odds",
        "body": "Podejmuj decyzję sprawdzenie/pas na podstawie matematyki; przełącznik implied odds dodaje pieniądze, które spodziewasz się wygrać na późniejszych streetach."
      },
      {
        "icon": "🃏",
        "title": "Ocena układu",
        "body": "Wybierz karty, aby sprawdzić siłę układu. Wprowadź do 7 kart, a narzędzie automatycznie znajdzie najlepszą kombinację 5 kart."
      },
      {
        "icon": "📊",
        "title": "Siła ręki startowej",
        "body": "Wybierz dwie karty zakryte, aby zobaczyć, którą ze 169 rąk masz i jaka akcja jest zalecana z danej pozycji."
      },
      {
        "icon": "📐",
        "title": "SPR (stack-to-pot ratio)",
        "body": "Stosunek stacka do puli wskazuje, jak silnej ręki potrzebujesz. Im niższe SPR, tym bardziej sprzyja zaangażowaniu stacka z silnym układem."
      },
      {
        "icon": "🏆",
        "title": "Turniejowe M",
        "body": "Harrington’s M mierzy presję na twój turniejowy stack. Strategia zmienia się całkowicie między strefą zieloną, żółtą, pomarańczową, czerwoną i martwą."
      },
      {
        "icon": "📈",
        "title": "Kalkulator ICM",
        "body": "Independent Chip Model przelicza turniejowe żetony na rzeczywistą wartość nagród pieniężnych, z kolumną chip chop obok — to liczby stojące za decyzjami na bubble i rozmowami o dealu przy stole finałowym."
      },
      {
        "icon": "⚡",
        "title": "Tabela Nasha push/fold",
        "body": "Tabela Nasha 13×13 dla heads-up, 6-max i 9-max: które ręce grać open-shove przy 1–25bb (a w heads-up także którymi sprawdzać). Niezbędna w późnej fazie turnieju."
      }
    ]
  },
  "faq": {
    "badge": "FAQ",
    "h2": "Kalkulator szans pokerowych i ICM — pytania",
    "q": "P. {q}"
  },
  "related": {
    "badge": "Czytaj dalej",
    "h2": "Poradniki, gdy obliczenia są już jasne",
    "links": [
      {
        "slug": "texas-holdem-rules-for-beginners",
        "title": "Jak grać w Texas Hold’em",
        "desc": "Od blindów do showdownu"
      },
      {
        "slug": "holdem-hand-rankings",
        "title": "Układy pokerowe",
        "desc": "10 układów od najsilniejszego, z prawdopodobieństwem"
      },
      {
        "slug": "holdem-betting-actions",
        "title": "Akcje przy stole",
        "desc": "Czek, zakład, sprawdzenie, przebicie i pas"
      },
      {
        "slug": "holdem-game-order",
        "title": "Kolejność gry",
        "desc": "Kto działa pierwszy na każdym streecie"
      },
      {
        "slug": "holdem-blind-meaning",
        "title": "Mały i duży blind",
        "desc": "Rola SB i BB w rozdaniu"
      },
      {
        "slug": "holdem-all-in-rules",
        "title": "All-in i pule boczne",
        "desc": "Co dzieje się po zagraniu całego stacka"
      },
      {
        "slug": "holdem-showdown-rules",
        "title": "Zasady showdownu",
        "desc": "Jak rozstrzygnąć zwycięski układ"
      },
      {
        "slug": "holdem-flush-vs-straight",
        "title": "Kolor czy strit?",
        "desc": "Co jest wyższe i dlaczego, z rachunkiem kombinacji"
      }
    ]
  }
};
