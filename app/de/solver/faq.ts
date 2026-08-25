/**
 * `/de/solver` FAQ — 화면(`solver-client.tsx`)과 서버 `page.tsx`의 FAQPage 스키마가
 * **같은 배열**을 쓴다. 정본 구조 = `app/pt/solver/faq.ts`(최신) · `app/es/solver/faq.ts`.
 *
 * ★2026-08-24 신설. **독일어권에 솔버 진입로가 0개였다**(본체는 noindex).
 *
 * 🔴 **번역이 아니다.** 실측 근거는 `docs/keyword-bank/de-gto-solver.md`. 갈아 끼운 것 —
 *   ① **PAA 축어를 문항으로 세웠다**(DataForSEO SERP API · google.de):
 *      `gto solver`·`gto poker` → **「Was ist GTO beim Poker?」**(`Was ist gto beim Poker?` ·
 *      `Was ist gto im Poker?` · `Was bedeutet gto?` 세 변형이 PAA에 떴다 — 한 문항으로 흡수).
 *   ② 🔴 **「Was ist gto wizard?」는 답하지 않는다** — 남의 제품 설명을 우리가 대신 쓰는 자리가
 *      아니다. 비교 문항에서 **구조**(어디서·언제 계산되나)로만 대비시킨다(§12-B · 4개 랜딩 동일 규율).
 *   ③ **RTA 방어 문항을 새로 세웠다** — de 서제스트에 `real-time solver poker`·`rta poker`류가
 *      실재한다(뱅크 §1-⑤ 금지 축). 「이 도구는 공부용이지 실시간 보조가 아니다」를 명시한다.
 *   ④ **`poker simulator kostenlos`(20 · 12m +50%) 흡수 문항** — 무료 «게임»을 찾는 검색과
 *      갈라 주는 문항이다(`poker simulator` 390은 SERP 6/10이 게임이라 조준 금지).
 *   ⑤ ja의 「삼성 브라우저」 문항은 뺐다 — 독일 맥락이 아니다. iOS·Safari 싱글스레드만 남겼다.
 *
 * 🔴 **`Solver`를 단독으로 쓰지 마라 — 독일에서도 «Excel Solver»다**(뱅크 §1-①).
 *    `solver` SERP: 위키·마이크로소프트·SOLIDWORKS·기업명·영화. PAA도
 *    「Wie verwende ich Solver in Excel?」이다. **문항 제목은 전부 `Poker`와 붙였다**
 *    (「Was ist ein Solver beim Poker?」 — «beim Poker» 후치는 de 질문 주형이다.
 *    de-core-volumes §3-A: 독일 검색자는 용어 질문을 「was bedeutet X beim poker」 틀로 묻는다).
 *
 * 🔴 **답의 사실은 전부 2026-08-24에 `solver.holdemmaster.com/?lang=de`를 열어
 *    화면에서 직접 읽은 것만 쓴다**(Playwright DOM 실측 — 축어는
 *    `docs/solver-app-verbatim-5langs-2026-08-24.md`). 확인한 것 —
 *    · `<html lang="de">` · title «HoldemMaster GTO Solver – Kostenloser Online-Solver für Texas Hold’em»
 *    · 언어 셀렉터 **8개** `ko,en,ja,es,pt,de,zh,zh-hant`
 *    · 히어로 «GTO-Strategie, direkt im Browser.» / «Nichts zu installieren, nichts zu bezahlen.»
 *    · 특징 4블록 «Kostenlos / Alle Funktionen, ohne Nutzungslimit» · «Offline lernen» ·
 *      «Schnelles Solving / Multithreaded – Tempo eines Desktop-Solvers» ·
 *      «GTO-Trainer / Spots spielen, benotet nach **EV-Verlust im Verhältnis zum Pot**»
 *      🟢 **트레이너 문구가 이미 팟 대비 정정본이다**(08-22 솔버 배포 반영 · pt와 같다).
 *    · 사이드바 «① OOP-Range ② IP-Range ③ Board ④ Bet Sizes ⑤ Berechnen»
 *    · PWA 버튼 «Zum Startbildschirm hinzufügen»
 *    · 그룹 조건 «Pot 5,5bb · Stack 97,5bb» 등 — 🔴 **de 앱은 소수점이 «쉼표»다**(pt와 같고 es와 다르다)
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라.** 판정 기준은 `docs/gto-solver-series-spec.md` §4-B다.
 *   de 앱 실측(2026-08-24): 🟢 ③⑨⑬은 정정본 · 🔴 **④(콜러 우위 — 8언어 전건) ·
 *   ⑦(RP-19 + 조작 지시) · ⑧(RP-03 «낮은 SPR이라 작은 벳»)이 아직 틀렸다.**
 *   ⑩은 de 앱이 «weitgehend verfehlt» 완화형이라 통과다. **랜딩은 전부 §4-B 정정본을 쓴다.**
 *
 * 🔴 카니발 — 이 FAQ가 **답하지 않는 것 셋**(뱅크 §4):
 *   ① 프리플랍 표·차트 → `de/holdem-starting-hands-chart`(태그 `gto preflop charts`)가 갖는다.
 *   ② 「poker strategie」 일반 → `de/holdem-strategy`(seoTitle+태그)가 소유.
 *   ③ 계산기(`poker rechner` 260) → de에 도구 페이지가 없고 앱 내 Equity-Rechner 언급으로만.
 *   **되찾아 오지 마라.**
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_DE: FaqItem[] = [
  {
    q: "Was unterscheidet einen Poker Solver von einer fertigen Tabelle?",
    a: "Eine Tabelle speichert eine Antwort, die jemand vorher ausgerechnet hat; ein Solver rechnet den Spot durch, der gerade vor dir liegt. Tausche eine einzige Karte auf dem Board und die Tabelle sagt weiter dasselbe, während der Solver eine andere Antwort liefert. Deshalb konkurrieren Preflop-Tabelle und Solver nicht: Die Tabelle liefert den Einstieg, der Solver das Spiel danach.",
  },
  {
    q: "Ist der Poker Solver wirklich kostenlos?",
    a: "Ja. Alle Funktionen, ohne Nutzungslimit: eigene Spots lösen, die fertig gerechneten Lernspots öffnen, der GTO-Trainer, Speichern und Export. Es gibt keinen Bezahlplan, keine Credits und keine Obergrenze für Lösungen pro Tag.",
  },
  {
    q: "Brauche ich ein Konto oder eine Anmeldung?",
    a: "Nein. Du öffnest die Seite und rechnest. Der Login dient nur dazu, deinen Trainer-Verlauf zwischen Geräten zu synchronisieren – wer ihn nicht nutzt, verliert keine einzige Funktion.",
  },
  {
    q: "Muss ich etwas installieren?",
    a: "Nein. Der Solver läuft mit WebAssembly im Browser und funktioniert damit unter Windows, macOS, Linux und auf dem Handy ohne Installer. Wer mag, legt ihn über den Button «Zum Startbildschirm hinzufügen» als App-Verknüpfung ab – das ist nur ein Lesezeichen mit eigenem Icon, kein Programm, und Systemberechtigungen braucht es nie.",
  },
  {
    // 🔴 PAA 축어 3형(`Was ist gto beim Poker?`·`Was ist gto im Poker?`·`Was bedeutet gto?`)을
    //    한 문항으로 흡수. 정의 정본 = `de/holdem-glossary` 「GTO | Game Theory Optimal – eine
    //    ausbalancierte, unausbeutbare Strategie aus Solvern」. 깊은 정의는 링크로 넘긴다.
    q: "Was ist GTO beim Poker?",
    a: "GTO steht für Game Theory Optimal: die Gleichgewichtsstrategie, die sich nicht systematisch ausnutzen lässt. In der Praxis drückt sie sich nicht als «bet» oder «fold» aus, sondern als Frequenzen – eine Hand mal betten, mal checken, in festen Anteilen. Ein Solver ist das Werkzeug, das diese Frequenzen für einen konkreten Spot berechnet. Die vollständige Definition und die häufigsten Missverständnisse stehen im Glossar und im Strategie-Guide.",
  },
  {
    // 🔴 «beim Poker» 후치 = de 질문 주형(de-core-volumes §3-A). 답 끝에서 엑셀과 갈라 준다 —
    //    독일에서 `Solver` 단독은 Excel 최적화 도구다(뱅크 §1-①).
    q: "Was ist ein Solver beim Poker?",
    a: "Beim Poker ist ein Solver das Programm, das eine Situation bis zum Gleichgewicht durchrechnet: die Strategie, die kein Gegner systematisch ausnutzen kann. Statt «bet» oder «fold» liefert er Frequenzen – zum Beispiel eine Hand in 70% der Fälle betten und in den restlichen 30% checken. Genau diese Mischung macht die Strategie unausbeutbar. Nicht verwechseln: Außerhalb des Pokers meint «Solver» meist das Optimierungswerkzeug in Excel – das ist etwas völlig anderes.",
  },
  {
    // 🔴 정의 정본 = `de/holdem-glossary` 「Range | Die gesamte Menge an Händen, die ein Spieler
    //    in einem Spot halten kann」. 짧게 두고 양쪽이 다 살게 한다.
    q: "Was ist eine Range beim Poker?",
    a: "Eine Range ist die gesamte Menge an Händen, die ein Spieler in einem Spot halten kann. Anfänger fragen «welche Hand hat er?»; wer studiert, fragt «welche Menge an Händen hätte bis hierher so gespielt?». Der Solver arbeitet komplett auf dieser Ebene: Du gibst zwei Ranges ein und er sagt dir für jede der 169 Hände, was sie tun soll – statt einer Vermutung über eine einzelne Hand.",
  },
  {
    // 🔴 RTA 방어 — de 서제스트에 `rta poker`·`real-time solver` 실재(뱅크 §1-⑤ 금지 축).
    //    플랫폼 «규정» 사실만 적는다 — 법 판정이 아니다.
    q: "Darf ich einen Poker Solver benutzen, während ich online spiele?",
    a: "Nein – Echtzeit-Hilfe (Real-Time Assistance) verbieten praktisch alle Pokerseiten in ihren Nutzungsbedingungen, und Verstöße kosten das Konto. Dieser Solver ist ein Lernwerkzeug für die Zeit zwischen den Sessions: Hände nachrechnen, Spots verstehen, mit dem Trainer üben. Genau dafür ist er gebaut, und dafür braucht es auch keine Eile.",
  },
  {
    q: "Funktioniert er auf dem iPhone oder in Safari?",
    a: "Ja, nur langsamer. Unter iOS und in Safari erzwingen Einschränkungen des Browsers das Rechnen mit einem einzigen Thread, während der Solver in anderen Browsern mehrere Kerne gleichzeitig nutzt. Für große Spots ist der Computer bequemer; unter macOS empfehlen wir Chrome.",
  },
  {
    q: "Kann ich offline üben?",
    a: "Ja, mit einer Einschränkung. Nach dem Hinzufügen zum Startbildschirm liegen die Lernspots und der GTO-Trainer auf deinem Gerät, du übst also auch ohne Internet weiter. Einen eigenen Spot von Grund auf zu lösen setzt voraus, dass die Rechen-Engine mindestens einmal geladen wurde.",
  },
  {
    q: "Rechnet der Poker Solver auch preflop?",
    a: "Nein. Dieses Werkzeug ist für die Zeit nach dem Flop und heads-up: Flop, Turn und River. Welche Hände du aus welcher Position öffnest, steht in der Starthände-Tabelle im Blog – dort fängst du am besten an. In der App lassen sich die Opening-Ranges auch schnell nachschlagen, während du einen Spot baust; warum jede Position öffnet, was sie öffnet, erklärt aber der Artikel.",
  },
  {
    // 🟢 정합성 렌즈 반영(2026-08-24) — H2와 문항이 축어 동일했다(H2/FAQ 중복 금지 · de-core §7-6).
    //    문항을 변형형으로 갈랐다.
    q: "Worin unterscheidet er sich von GTO Wizard und PioSOLVER?",
    a: "Darin, wo und wann gerechnet wird. Hier entsteht die Lösung auf deinem Gerät, im Moment der Berechnung, mit den Ranges und dem Spielbaum, die du einträgst. Lösungsbibliotheken zeigen vorab gerechnete Lösungen aus ihrem Katalog. PioSOLVER ist ein Programm, das du installierst und das auf deinem eigenen Rechner rechnet, vor allem unter Windows. Keins ist besser oder schlechter – sie lösen unterschiedliche Bedürfnisse.",
  },
  {
    q: "Wie lange dauert es, einen Spot zu lösen?",
    a: "Je nach Größe des Baums und deinem Prozessor: zwischen Sekunden und Minuten. Wenn du nur eine Lösung sehen willst, ohne zu warten, öffne einen beliebigen Spot unter Lernspots – die sind fertig gerechnet und stehen sofort da.",
  },
  {
    q: "Werden meine Ranges an einen Server geschickt?",
    a: "Nein. Gerechnet wird auf dem Prozessor deines eigenen Geräts, nicht auf unseren Servern. Gespeicherte Ranges bleiben in deinem Browser und verlassen ihn nur, wenn du einen Teilen-Link erzeugst oder eine Datei exportierst. Die Ausnahme ist der Trainer-Verlauf: Wenn du dich einloggst, liegt er in deinem Konto, damit du ihn auf einem anderen Gerät weiterführen kannst.",
  },
  {
    q: "Berücksichtigt der Poker Solver den Rake?",
    a: "Ja. Rake und Rake-Cap lassen sich vor dem Lösen einstellen, die Lösung passt sich also den Bedingungen des Tischs an, an dem du wirklich sitzt. Der Unterschied zeigt sich vor allem in kleinen Pots, wo die Gebühr entscheidet, welche Hände profitabel bleiben.",
  },
  {
    // 🔴 팟 대비 비율이다. **절대 bb가 아니다.** de 앱 화면도 이미 «EV-Verlust im Verhältnis
    //    zum Pot»라 화면과 이 문항이 일치한다(2026-08-24 실측 · pt와 같은 상태).
    // 🪶 화면의 «wie viele bb dich jede Entscheidung kostet»는 오류가 아니다 — 표시 «값»은 bb이고
    //    «합격선»만 팟 대비다(2026-08-23 솔버 왕복에서 확인된 구조).
    q: "Was ist der GTO-Trainer und wie benotet er meine Entscheidungen?",
    a: "Ein Übungsmodus: Er legt dir fertig gelöste Spots vor, du wählst eine Aktion und er sagt dir, wie viel EV deine Wahl gegenüber der besten Aktion verschenkt hat. Weil GTO Aktionen mischt, ist eine seltene Option für sich noch kein Fehler – deshalb wird die Note im Verhältnis zum Pot gemessen: bis 0,35% des Pots ist ein Top-Play, bis 1% akzeptabel, darüber lohnt sich das Nachschauen. Untergrenzen von 0,02bb und 0,05bb verhindern, dass Kleinstunterschiede als Fehler zählen.",
  },
  {
    q: "Kann ich einen Spot speichern und teilen?",
    a: "Ja. Ranges und Einstellungen lassen sich speichern, als Datei importieren und exportieren, die Ergebnis-Zusammenfassung kommt als CSV heraus, und ein Teilen-Link öffnet exakt denselben Spot auf dem Gerät eines anderen. Das ist der schnellste Weg, eine Hand in der Study-Gruppe zu diskutieren.",
  },
  {
    q: "Taugt er für Turniere oder nur fürs Cash Game?",
    a: "Gerechnet wird Chip-EV, das passt also direkt aufs Cash Game und auf Turnierphasen, in denen ICM noch kaum ins Gewicht fällt. Nahe der Bubble und an den Preissprüngen kann die richtige Entscheidung von der Chip-EV-Lösung abweichen – das ist eine andere Rechnung, die dieses Werkzeug nicht macht.",
  },
  {
    // ⚠ 언어 열거는 앱 셀렉터(8개: ko,en,ja,es,pt,de,zh,zh-hant)와 1:1이 아니다 — 간체·번체를
    //    «Chinesisch» 하나로 묶었다(숫자를 주장하지 않으므로 허용 · M-046 §3 판정과 같은 처리).
    q: "Ist die Oberfläche auf Deutsch?",
    a: "Ja, komplett – Menüs, Lernspots und Trainer sind lokalisiert, keine Teilübersetzung. In der Sprachauswahl kannst du außerdem auf Koreanisch, Englisch, Japanisch, Spanisch, Portugiesisch, Französisch und Chinesisch umschalten.",
  },
  {
    // 🔴 `poker simulator kostenlos`(20 · +50%) 흡수 + 게임 의도(`poker simulator` 390 SERP
    //    6/10 게임)와 갈라 주는 문항. 조준이 아니라 «구분»이다.
    q: "Ist das ein Poker-Simulator, mit dem ich einfach spielen kann?",
    a: "Nein – hier spielst du nicht gegen simulierte Gegner um Spielgeld, hier wird Strategie gerechnet. Wenn du kostenlos eine Runde Poker spielen willst, bist du bei den Spiele-Seiten richtig. Wenn du wissen willst, wie oft eine Hand auf einem bestimmten Board betten, checken oder folden sollte – und warum –, dann ist dieser Solver das Werkzeug dafür. Der Trainer fühlt sich trotzdem wie ein Spiel an: Er stellt dich vor echte Entscheidungen und benotet sie.",
  },
  {
    q: "Wo finde ich kostenloses Material, um Poker zu lernen?",
    a: "Ein Solver allein liefert Zahlen, keine Erklärungen. Im Blog stehen kostenlose Guides zu den Konzepten, die der Solver in Zahlen fasst: die Starthände-Tabelle, Pot Odds, Equity, die Continuation Bet und die 3-Bet. Am schnellsten bedeuten die Prozente etwas, wenn du beim Lesen einen gelösten Spot offen daneben hast.",
  },
];

export default SOLVER_FAQ_DE;
