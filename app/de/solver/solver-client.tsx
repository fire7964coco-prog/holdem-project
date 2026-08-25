"use client";

import Link from "next/link";
import { SOLVER_FAQ_DE } from "./faq";

/**
 * ★CTA는 `?lang=de`로 보낸다. 솔버가 이 파라미터를 읽어 로케일을 기억한다.
 *   **2026-08-24 라이브 확인** — `?lang=de`로 열면 `<html lang="de">`가 되고 화면 전체가
 *   독일어로 뜬다(Playwright DOM 실측). 다른 랜딩과 같이 **UTM은 붙이지 않는다**.
 *   ⚠ `curl`로는 확인할 수 없다 — SSR 초기 HTML이 한국어이고 타이틀은 JS 실행 후 바뀐다.
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=de";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/de/solver` 랜딩 — ★2026-08-24 신설 (6번째: ko·en·ja·es·pt·de)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색 노출은 이 랜딩이 받아
 *   본체로 흘려보낸다 — **독일어권에 그 진입로가 0개였다.** 대상은 **de-DE(독일)**다.
 *
 * ▶ 키워드 근거 (2026-08-24 실측 · 라쿠 requestId 1255693 + DataForSEO Labs.
 *   판정 전체는 `docs/keyword-bank/de-gto-solver.md`)
 *     **`gto poker`/`poker gto`/`gto in poker` 390 · SD 6~25**(최대 축) ·
 *     **`poker range`/`poker ranges` 320 · SD 6~11** · **`flop turn river` 390 · comp 1** ·
 *     **`poker solver` 140 · SD 11** · `poker trainer` 140 · SD 7 · `poker hand range` 70 ·
 *     `gto solver` 50 · `solver poker` 30 · `gto trainer` 20 · `gto poker bedeutung` 10(2024-08 신생).
 *   🟢 **두 벤더 볼륨 일치 8/8**(라쿠 대 DataForSEO) — es 6/6 · pt 5/5에 이은 세 번째 교차 검증.
 *   🪶 인접(브랜드 · 직접 조준 금지): `gto wizard` **2,400**(48개월 추세 상승 · yoy3 +85%) ·
 *      `piosolver` 90 · `gto wizard deutsch` 20~30 · `wasm postflop` 10.
 *
 * ▶ SERP 실측으로 잡은 «이길 자리» (2026-08-24 · DataForSEO SERP API · google.de)
 *   ① 🟢🟢 **`gto solver`·`poker solver` top-10에 «지금 바로 돌아가는» 무료 브라우저 솔버가 0개다.**
 *      Reddit 「Bester GTO-Solver?」(1위) · gtowizard(구독) · 앱스토어 ×2 · pokerfirma(리뷰) ·
 *      github TexasSolver(설치형) · **Reddit 「Completely Free GTO Trainer/Solver」** ·
 *      piosolver(설치형) · 888poker.de(가이드) · deepsolver(구독) · lucidpoker.
 *      **무료 수요가 Reddit 스레드로만 채워지고 있다** — pt와 같은 구조의 빈자리다.
 *   ② 🟢 **`poker range`(320) top-10이 프리플랍 표·계산기·핸드리딩뿐이다** — 플랍 «이후»
 *      레인지를 다루는 독일어 페이지가 없다(888poker=상대 레인지 읽기 · freebetrange/poker-toolkit=
 *      프리플랍 표 · gtowizard 블로그=Preflop Morphology). es·pt와 같은 구조 → 같은 서사로 가른다.
 *   ③ `gto poker`(390)는 정의 콘텐츠가 지배(888poker 「Einführung in GTO Poker」 · Reddit FAQ)
 *      + 도구는 앱스토어물. **PAA 축어**: `Was ist gto beim Poker?` · `Was ist gto im Poker?` ·
 *      `Was bedeutet gto?` · `Was ist gto wizard?` · `Wie wird man gut im Poker?`
 *
 * 🔴🔴 **어순이 pt와 반대다** — `poker solver` 140 대 `solver poker` 30 (pt는 `solver poker`
 *   170이 컸다). **기본 어순 = `Poker Solver`.** ja(ソルバー 죽은 표기)→es(어순이 SD를 가름)→
 *   pt(전치사형 볼륨 0)→de(어순 반전) — **네 번 연속 «물려받는 것은 규율이지 값이 아니다».**
 *
 * 🔴🔴 **`Solver`를 단독으로 쓰지 마라 — 독일에서도 «Excel Solver»다.**
 *   `solver` SERP: 위키피디아(1위) · support.microsoft.com(Excel) · SOLIDWORKS · 기업명 ·
 *   IMDb(영화). PAA 「Wie verwende ich Solver in Excel?」. `was ist ein solver`도 엑셀 지배
 *   (Reddit r/poker가 2위로 끼는 정도). → **제목·H1·H2에서 반드시 `Poker`/`GTO`와 붙인다.**
 *   🟢 **`GTO`는 깨끗하다** — es(과나후아토)·ja(드라마)와 달리 동음이의 오염이 없다.
 *
 * 🔴 **`kostenlos` 계열 롱테일은 볼륨이 전부 null이다**(`gto poker kostenlos`·`gto tabelle` 등).
 *   ⚠ 2026-08-10 lowfruits에서 그 축이 LDA 7이었다 — SERP가 약한 것은 사실이나 볼륨이 없으니
 *   **단독 조준은 않고 H2·FAQ가 흡수**한다. 훅은 «kostenlos + im Browser + ohne Anmeldung» 조합.
 *
 * 🔴🔴 카니발 방지 — **de 43편 전수 grep. es·pt와 소유 구도가 다르다.**
 *   · `app/de/`에 있는 것은 `blog`·`tournaments`·`page.tsx`다. `/de/hand-chart`·`/de/calculator`는
 *     없다 → 도구 링크는 전부 de 블로그 글이고 대상 9종 전건 `lib/posts-de/<slug>.ts` 실존 확인.
 *   · **프리플랍 표 = `de/holdem-starting-hands-chart` 소유**(태그 `gto preflop charts` 명시 +
 *     본문 GTO-Preflop-Charts 13회). `poker charts` 390 · `preflop charts` 110 ·
 *     `poker range chart` 50 · `poker preflop tabelle` 10 — **전부 그쪽 자리다.** 제목·H2 금지.
 *   · **`poker strategie` 1,300 = `de/holdem-strategy` 소유**(seoTitle+태그). ⚠ 그 글이
 *     `gto poker`·`poker range` **태그도** 달고 있으나 본문 H2 14개 중 GTO 축 0 — **명목 태그**다
 *     (ja `holdem-strategy`와 동형). 랜딩은 **도구·포스트플랍 축**을 가져가고, 순수 정의는
 *     짧게 두고 glossary·strategy로 넘긴다.
 *   · `poker rechner` 260 = 계산기 축. de에 도구 페이지가 없다 — 앱 내 Equity-Rechner 언급으로만.
 *
 * ❌ **`poker simulator`(390)·`poker ohne anmeldung`(320)을 조준하지 마라** — SERP 실측
 *   의도가 «무료 게임»이다(6/10 · 10/10). FAQ가 «게임이 아니라 계산 도구»로 갈라 준다.
 * ❌ **`poker bot`·`rta poker` 금지** — 부정행위 도구 축. FAQ 방어 문항 참조.
 *
 * 🔴 사실 출처 — 전부 2026-08-24에 `?lang=de`로 열어 DOM에서 직접 읽었다
 *   (축어 전체 = `docs/solver-app-verbatim-5langs-2026-08-24.md`):
 *   · 언어 셀렉터 **8개** `ko,en,ja,es,pt,de,zh,zh-hant`
 *   · 히어로 «GTO-Strategie, direkt im Browser.» / «Nichts zu installieren, nichts zu bezahlen.»
 *   · 특징 4블록 «Kostenlos / Alle Funktionen, ohne Nutzungslimit» · «Offline lernen» ·
 *     «Schnelles Solving / Multithreaded – Tempo eines Desktop-Solvers» ·
 *     «GTO-Trainer / Spots spielen, benotet nach **EV-Verlust im Verhältnis zum Pot**»
 *     🟢 **트레이너 문구가 이미 팟 대비 정정본이다**(pt와 같은 상태 · 08-22 배포 반영).
 *   · 사이드바 «① OOP-Range ② IP-Range ③ Board ④ Bet Sizes ⑤ Berechnen»
 *   · 네비 «Lernspots ⚡ Sofort» «GTO-Trainer EV-Note» «Preflop-Charts Ranges» «Equity-Rechner Sieg-%»
 *   · PWA 버튼 «♠ Zum Startbildschirm hinzufügen» · 결과 패널 이름 «Hände / Draws»
 *   · 그룹 조건 «Pot 5,5bb · Stack 97,5bb» / «Pot 22,5bb · Stack 89bb» / «Pot 6bb · Stack 97bb»
 *     🔴 **de 앱은 소수 구분자로 «쉼표»를 쓴다**(pt와 같고 es와 다르다) — 본문도 쉼표로 통일했다.
 *   §13 산수 검산(다섯 랜딩과 동일 · 재검산 완료):
 *     SRP 팟 5.5 = 2.5+2.5+0.5, 스택 100−2.5 = 97.5 ·
 *     3벳팟 22.5 = 11+11+0.5, 100−11 = 89 ·
 *     블라인드전 6 = 3+3, 100−3 = 97 ·
 *     5.5×0.35% = 0.019 ≈ 0.02bb, 5.5×1% = 0.055 ≈ 0.06bb ·
 *     22.5×0.35% = 0.079 ≈ 0.08bb, 22.5×1% = 0.225 ≈ 0.23bb
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라.** 판정 기준은 `docs/gto-solver-series-spec.md` §4-B다.
 *   de 앱 실측(2026-08-24 · 폐기 명제 목록 19행 전건 대조):
 *   🟢 ③⑨⑬은 이미 정정본(77,9/119,4·99,9 / 98,4·0,8 / 88 대 66·80,1) — 그대로 옮겨도 된다.
 *   🔴 **넷은 앱이 아직 틀렸다 — 랜딩은 §4-B 정정본을 쓴다**:
 *     · ④ «Die klassische Textur für den Caller … C-Bet-Frequenz des BTN bricht ein» =
 *       **RP-01 계열 + RP-02**(콜러 우위는 폐기 명제 · C벳 빈도는 화면에 없다). 8개 언어 전건.
 *     · ⑦ «die BB check-raist … oft. Verfolge die obere Leiste über eine Bet hinaus» =
 *       **RP-19 + 조작 지시**(화면은 BB 첫 액션에서 멈춘다 · KO ⑦ 239줄 정본).
 *     · ⑧ «Bei niedrigem SPR setzen kleine Bets die ganze Range unter Druck» = **RP-03**
 *       (사이즈를 정하는 것은 스택 깊이가 아니라 레인지의 모양 — ⑨ 98,4% 반례).
 *     · ① «Schau, wie weit die Range ist, mit der der BTN … eine kleine C-Bet macht» =
 *       **M-046 P-2와 같은 유형**(BB 체크 «다음»은 화면이 안 준다) → 화면값(체크 98,2%)으로 교체.
 *   🟢 ⑩은 de 앱이 «weitgehend verfehlt» **완화형이라 통과**(ja 「ほぼ」 계열) — 랜딩은 그래도
 *      다른 랜딩과 같은 **수치 정본**(탑 페어 0%)을 쓴다. ⑪은 빈도 수치 없음(RP-18 조건 미충족 ✅).
 *
 * 🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
 *   오프라인에서 되는 것은 학습 스팟 열람과 트레이너 풀이뿐이고, 커스텀 스팟 직접 계산은
 *   계산 엔진을 한 번 내려받은 뒤에만 돈다(다섯 랜딩 주석과 같은 경고).
 *
 * 🪶 **복합어 하이픈 정서법 예외** — `GTO-Trainer`·`Bet-Größen`류는 정서법대로 하이픈인데
 *   **`GTO Poker Solver`·`Poker Ranges`·`Poker Trainer`는 무하이픈**이다. 오탈자가 아니라
 *   **검색어 문자열 일치를 위한 의도**다(키워드가 무하이픈으로 검색된다). 고치지 마라.
 *
 * 🪶 **학습 스팟에 블로그 링크가 하나도 없다 — 이것이 정상이다.**
 *   GTO 시리즈 13편은 **ko·en에만 있고 de에는 0편**이다(`lib/posts-de/`에 해당 slug 0건).
 *   **없는 링크를 미리 걸지 마라 — 404는 색인에 남는다.** de판이 발행되면 그때 `slug`를 채운다.
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Preis", "Kostenlos – alle Funktionen, ohne Nutzungslimit"],
  ["Installation", "Keine – läuft im Browser (WebAssembly)"],
  ["Konto", "Keins nötig (der Login synchronisiert nur den Trainer-Verlauf)"],
  ["Umfang", "Nach dem Flop, heads-up (Flop, Turn und River)"],
  ["Wo gerechnet wird", "Auf deinem Gerät, nicht auf unserem Server"],
  ["Kompatibilität", "Moderne Browser – Windows, macOS, Linux und Handy"],
  // ⚠ 이 열거는 앱 셀렉터(8개: ko,en,ja,es,pt,de,zh,zh-hant)와 1:1이 아니다 — 간체·번체를
  //    «Chinesisch» 하나로 묶었다(숫자를 주장하지 않으므로 허용 · M-046 §3 판정).
  // ★2026-08-24 갱신 — 앱이 fr을 배포해 셀렉터가 9개가 됐다(Französisch 추가).
  ["Sprache", "Deutsch (auch Koreanisch, Englisch, Japanisch, Spanisch, Portugiesisch, Französisch und Chinesisch)"],
  ["Engine", "Open-Source WASM Postflop (AGPL-3.0) · geänderter Quellcode veröffentlicht"],
];

/**
 * 「무엇을 원하나 → 어디로」 — 내부 역할 분리를 표로 못박아 카니발을 막는다.
 * 🔴 EN판은 `/en/hand-chart`·`/en/calculator`로 보내지만 **de에는 그 도구 페이지가 없다.**
 *    de 블로그 글과 앱 내장 기능으로 보낸다(대상 실존 확인 완료).
 */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Einen konkreten Spot nach dem Flop durchrechnen", "Der Solver auf dieser Seite", null],
  ["Wissen, welche Hände du aus welcher Position öffnest", "Die Starthände-Tabelle", "/de/blog/holdem-starting-hands-chart"],
  ["Outs zählen und Pot Odds berechnen", "Der Pot-Odds-Guide", "/de/blog/holdem-pot-odds"],
  ["Nur die Gewinnchance einer Hand sehen", "Der Equity-Guide", "/de/blog/holdem-equity"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(2026-08-24 축어 실측). */
const STEPS = [
  { n: "①", title: "OOP-Range", desc: "Male die Preflop-Range des Spielers außer Position in die 13×13-Matrix, oder schreib sie direkt in Notation (22+, A2s+, KTo+). Die Diagonale sind die Pocket Pairs, rechts oben die Suited-Hände (AKs), links unten die Offsuit-Hände (AKo)." },
  { n: "②", title: "IP-Range", desc: "Dasselbe für den Spieler in Position. Der schnellste Weg ist, nicht beide von Grund auf zu bauen: Lade einen Lernspot und bearbeite dessen Ranges." },
  { n: "③", title: "Board", desc: "Klick die drei Flop-Karten an oder nimm einen Zufallsflop. Wenn du einen bestimmten Run-out studieren willst, kannst du Turn und River gleich mit festlegen." },
  { n: "④", title: "Bet Sizes", desc: "Leg Startpot, effektiven Stack und die Bet- und Raise-Größen jeder Street fest. Beim ersten Mal lass die Standardwerte stehen und prüf nur Pot und Stack." },
  { n: "⑤", title: "Berechnen", desc: "Baum bauen und loslegen. Gerechnet wird auf deinem Rechner, von ein paar Sekunden bis zu ein paar Minuten – danach öffnest du den Tab Ergebnisse." },
];

/**
 * 앱 「Anleitung」이 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 · 언어 불변).
 * 🔴 **자리 이름은 앱 de 축어를 쓴다** — 앱이 `BB (Caller)`·`BTN (Open-Raiser)`로 적는다.
 * 🔴 **이 레인지의 출처는 «학습 스팟»이지 프리플랍 표 글이 아니다**(M-035 결함 3 = 귀속 오류 ·
 *    M-046 E-2에서 EN도 걸렸다. **두 출처를 갈라 적는다** — 아래 본문 문단 참조).
 */
const STARTER_RANGES: [string, string][] = [
  ["OOP – BB (Caller)", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP – BTN (Open-Raiser)", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/**
 * 결과 화면 읽는 법.
 * 🔴 **행이 다섯이면 본문도 «다섯»이라고 쓴다** — ko·en·ja·es는 「네 구역」으로 신설됐다가
 *    2026-08-24에 일괄 소급됐다(M-046 E-3). pt·de는 처음부터 다섯이다.
 * 🪶 세 번째 패널의 이름은 앱 축어 «Hände / Draws»다.
 */
const READ_SCREEN: string[][] = [
  ["Aktionsleiste (oben)", "Bewegt dich durch die Punkte der Line (Flop → Bet → Call → Turn)", "Klick auf einen Knoten, um zur Strategie an diesem Punkt zu springen (in den Lernspots ist nur der Flop durchgerechnet)"],
  ["13×13-Matrix (links)", "Ein Feld pro Hand; die Farbaufteilung im Feld ist die Frequenz jeder Aktion", "Rot bettet oder raist (dunkler = größer), Grün checkt oder callt, blasses Feld = nicht in der Range"],
  ["Frequenzen (rechts oben)", "Aktionsfrequenz der ganzen Range und Combo-Anzahl", "Hier liest du «auf Q♠J♦T♠ checkt diese Range in 99,9% der Fälle»"],
  ["Hände / Draws (rechts Mitte)", "Wie die Range das Board trifft – Top Pair, Draws, nichts", "Auf einen Blick siehst du, welchem Spieler das Board liegt"],
  ["Detailtabelle (rechts unten)", "Gewicht, Equity, EV und Equity-Realisierung (EQR) Hand für Hand, mit dem % jeder Aktion", "Nach Spalten sortierbar, die Zusammenfassung kommt als CSV heraus"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Flop-, Turn- und River-Berechnung", "yes", "Der komplette Baum nach dem Flop"],
  ["Preflop-Berechnung", "no", "Die Opening-Ranges stehen in der Starthände-Tabelle"],
  ["Bet- und Raise-Größen frei wählbar", "yes", "% des Pots, Vielfache, All-in und geometrisch"],
  ["Eigene Größe für die Donk Bet", "yes", "Die Line, in der OOP zuerst bettet, lässt sich separat zeichnen"],
  ["Rake und Rake-Cap", "yes", "Anpassung an den Tisch, an dem du wirklich sitzt"],
  ["Spielbaum-Bearbeitung Knoten für Knoten", "yes", "Aktionen an einem bestimmten Knoten ergänzen oder streichen"],
  ["Präzisions- und Speichermodi", "yes", "32-Bit-Float / 16-Bit-Integer · Browser-Limit ≈ 4GB"],
  ["Ziel-Exploitability", "yes", "Je niedriger, desto präziser und langsamer"],
  ["Ranges und Einstellungen speichern", "yes", "Speichern, Laden, Import und Export"],
  ["Zusammenfassung als CSV exportieren", "yes", "Direkt in die Tabellenkalkulation"],
  ["Teilen-Link für einen Spot", "yes", "Schick denselben Spot an deine Study Group"],
  ["Fertig gelöste Lernspots öffnen", "yes", "Das Ergebnis steht ohne Wartezeit da"],
  ["GTO-Trainer mit Benotung", "yes", "Mit Schwachstellen-Auswertung und Wiederholungs-Queue"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 «수치»는 넣지 않는다(CLAUDE.md §12-B).
 * 🔴 **「PioSOLVER ist kostenpflichtig」라고 쓰지 마라** — 그쪽 공식 문서에 무료 버전 안내가 있다.
 *    1차 출처로 확인된 것은 **설치형·주로 Windows**라는 사실뿐이다.
 */
const COMPARE: string[][] = [
  ["Wie gerechnet wird", "Live im Browser", "Nachschlagen vorab gerechneter Lösungen", "Installieren und auf dem eigenen Rechner rechnen"],
  ["Installation", "Keine", "Keine", "Installer, vor allem Windows"],
  ["Umfang", "Nach dem Flop, heads-up", "Oft inklusive Preflop", "Je nach Edition"],
  ["Ranges und Baum bearbeiten", "Frei", "Innerhalb des veröffentlichten Katalogs", "Frei"],
  ["Wo gerechnet wird", "Auf deinem Gerät", "Beim Anbieter (vorab gerechnet)", "Auf deinem Gerät"],
];

/**
 * 학습 예제 — 앱의 **독일어 라벨·해설을 축어로 옮기되**(2026-08-24 실측), 앱이 아직 틀린
 * 네 자리(①④⑦⑧)는 **§4-B 정정본**으로 갈았다(파일 헤더의 폐기 명제 대조 참조).
 * 🔴 **개수를 문장에 박지 않는다** — 아래 배열에서 세어 쓴다(`SPOT_TOTAL` · RP-08).
 * 🔴 **카드는 기억으로 적지 않는다** — 13개 보드는 라이브 화면에서 축어로 긁었다.
 * 🪶 `slug`가 하나도 없다 — GTO 시리즈 해설 13편이 **de에는 아직 0편**이기 때문이다.
 *    de판을 발행하면 그 행에 채운다. **없는 링크를 미리 걸지 않는다.**
 */
const SPOT_GROUPS = [
  {
    label: "Single Raised Pot – BTN vs BB (Grundlagen)",
    cond: "OOP: BB (Caller) · IP: BTN (Open-Raiser) · Pot 5,5bb · Stack 97,5bb",
    items: [
      // 🔴 M-046 P-2와 같은 유형을 «신설 시점에» 회피 — 앱 ①은 「BB 체크 다음 BTN이 넓게
      //    작은 C벳을 친다」고 말하는데 화면은 BB 첫 액션에서 멈춘다. 화면값(체크 98,2%)으로.
      { board: "A♥7♦2♣", name: "Trockenes A-High-Board", note: "Der Lehrbuch-Spot für den Range-Vorteil – das Ass trifft die Range des Openers voll, und die BB checkt zu 98,2%" },
      { board: "K♠8♦3♣", name: "Trockenes K-High-Board", note: "Vergleiche es mit dem A-High-Board: K-High begünstigt den BTN ebenfalls, aber die Checks nehmen etwas zu. Weißt du, warum?" },
      // 🟢 앱 de 축어가 이미 정정본이다. 다만 「in jedem der 13 Spots」의 편 수 하드코딩만
      //    「der Serie」로 갈았다(RP-08 · M-046 P-1과 같은 처방).
      { board: "Q♠J♦T♠", name: "Verbundenes Broadway-Board, Two-Tone", note: "Ein Board, das beide Ranges zu treffen scheint. Doch die BB realisiert hier weniger Equity als in jedem anderen Spot der Serie – 77,9% gegen 119,4% beim BTN – und checkt zu 99,9%" },
      // 🔴🔴 RP-01 계열 + RP-02 정정 — 앱 de는 아직 «Die klassische Textur für den Caller.
      //    Die C-Bet-Frequenz des BTN bricht ein»이다(8개 언어 전건 · 5langs 축어 문서 §0).
      //    ▸ 「콜러 우위」는 시리즈가 이름까지 대며 폐기한 명제다(KO ④: 「레인지 우위가 BB로
      //      넘어간 것은 아니다 — 48.5% 대 51.5%」 · EN ④ FAQ 「→ No.」).
      //    ▸ 「BTN C벳 빈도」는 화면에서 확인 불가다 — 스팟은 플랍 첫 액션(BB 차례)에서 멈춘다.
      //    §4-B ④: OOP(BB) 첫 액션 벳 **23.7%**. 앱 문구로 되돌리지 마라.
      { board: "9♥8♥7♣", name: "Verbundenes Middle-Board, Two-Tone", note: "Das einzige Single-Raised-Board, auf dem die BB wirklich vorangeht: Sie setzt in 23,7% der Fälle zuerst (der Range-Vorteil bleibt trotzdem beim BTN – die BB hält 48,5% Equity gegen 51,5%)" },
      { board: "Q♠9♠2♠", name: "Monotones Board (eine Farbe)", note: "Sieh, warum große Bets verschwinden und kleine Bets und Checks übernehmen – selbst ein fertiger Flush checkt hier oft" },
      { board: "6♣6♦3♥", name: "Gepaartes Board", note: "Niemand trifft dieses Board, also steigt die Bluff-Frequenz. Finde in der Detailtabelle heraus, welche Hände als Bluff betten" },
      // 🔴 M-045 RP-19 정정 — 앱 de는 아직 「die BB check-raist … oft. Verfolge die obere
      //    Leiste über eine Bet hinaus」다(빈도 단언 + 조작 지시 — 화면은 BB 첫 액션에서 멈춘다).
      //    KO ⑦ 239줄: 「BB의 체크레이즈 빈도가 그 화면에는 없습니다」. §4-B ⑦ = 체크 96,8 · 벳 3,2뿐.
      { board: "6♠5♥2♦", name: "Niedriges Rainbow-Board", note: "Ein Overcard-Krieg. Der Spot, an dem du studierst, wie ein Check-Raise gebaut wird – auf dem Bildschirm ist die erste Aktion der BB: 96,8% Check, 3,2% Bet" },
    ],
  },
  {
    label: "3-Bet-Pot – BB 3-bettet, BTN callt (niedriger SPR)",
    cond: "OOP: BB (3-Bettor) · IP: BTN (Caller) · Pot 22,5bb · Stack 89bb",
    items: [
      // 🔴 M-038 RP-03 정정 — 앱 de는 아직 «Bei niedrigem SPR setzen kleine Bets die ganze
      //    Range unter Druck»다. 시리즈 ⑧이 그 인과를 폐기했다: 「SPR이 똑같이 4.0인 ⑨는
      //    큰 사이즈 98.4%, ⑩은 97.8%다. 사이즈를 정하는 것은 스택 깊이가 아니라 레인지의
      //    모양이다」(`lib/posts/3bet-pot-cbet.ts` 반박 문단). 앱 문구로 되돌리지 마라.
      { board: "A♦K♠2♥", name: "A-High-Board, Vorteil für den 3-Bettor", note: "Der bestmögliche Flop für die 3-Bet-Range, die voll mit AK, AA und KK ist. Dass eine kleine Bet die ganze Range unter Druck setzt, liegt an der Form dieser Range – nicht am niedrigen SPR" },
      // 🟢 앱 de 축어가 이미 정정본이다(98,4 · 0,8).
      //    🔴 100−99.1로 «빼서» 구하면 0.9가 나온다 — 개별 반올림값의 합은 100이 아니다(§4-B 주의).
      { board: "Q♥T♥7♠", name: "Dynamisches Two-Tone-Board", note: "Ein 3-Bet-Pot auf einem Board, das auch dem Caller liegt – und trotzdem bremst der 3-Bettor nicht: 98,4% der Range feuert mit derselben Zwei-Drittel-Size, und nur 0,8% checkt" },
      // 🟢 앱 de ⑩은 «weitgehend verfehlt» 완화형이라 결함은 아니나(RP-17은 «통째로»형이 결함),
      //    랜딩은 다른 다섯 랜딩과 같은 **수치 정본**으로 간다 — KO ⑩ 표 실측 **탑 페어 0%**
      //    (8이 들어간 핸드가 3벳 레인지에 없다) + 거트샷 4.8% · 백도어 16.9%.
      { board: "8♦5♣2♠", name: "Niedriges, trockenes Board", note: "Die 3-Bet-Range floppt hier kein einziges Top Pair – nur Gutshots und Backdoors – und trotzdem machen Overpairs und A-High weiter Druck" },
    ],
  },
  {
    label: "Blind vs Blind – SB vs BB (weite Ranges)",
    cond: "OOP: SB (Open-Raiser) · IP: BB (Caller) · Pot 6bb · Stack 97bb",
    items: [
      // 🟢 앱 축어. RP-18 감시 조건(빈도 수치가 붙으면 폐기 명제) 미충족 — 수치를 붙이지 마라.
      { board: "K♥T♦6♠", name: "K-High mit einer Zehn", note: "Im Blind vs Blind sind die Ranges weit, beide kommen also schwach zum Flop. Vergleiche die Frequenzen mit dem trockenen K-High-Board aus BTN vs BB" },
      { board: "7♦6♦5♣", name: "Verbundenes Low-Board, Two-Tone", note: "Zwei weite Ranges treffen auf einem extrem verbundenen Board aufeinander: Zwei Paare, Straßen und Draws überall – hier glänzt das Panel Hände / Draws" },
      // 🟢 앱 de 축어가 이미 정정본이다(88 대 66 · 80,1).
      //    🪶 용어는 앱 축어(«Drillinge»)가 아니라 **코퍼스 정본**을 따랐다 — `de/holdem-glossary` 315줄
      //       «Trips ist eine Hole Card, die zu einem Paar passt, das schon auf dem Board liegt» ·
      //       `holdem-hand-rankings` 388줄이 Set/Trips를 갈라 정의한다(M-034 「코퍼스 정본 먼저」).
      //       «88 gegen 66»은 포켓페어로 오독될 수 있어 Kombinationen을 붙였다(네이티브 렌즈 D-1).
      { board: "A♠A♥6♦", name: "Board mit gepaartem Ass", note: "Zwei Asse auf dem Board. Trips sind nicht selten – der SB hält einfach mehr davon (88 Kombinationen, die BB nur 66), also bettet der SB 80,1%" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

/* ── 공통 조각 ───────────────────────────────────────────────────────── */

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={
        variant === "solid"
          ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
          : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`
      }
    >
      {label}
    </a>
  );
}

/** 표는 전부 가로 스크롤 컨테이너에 넣는다 — 모바일에서 페이지 자체가 밀리지 않게. */
function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "py-2 pr-4 font-medium" : "py-2 pr-4 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolverClientDe() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        {/*
          ★H1은 세 축을 한 줄에 담는다: `poker solver`(140) + `gto`(390 축) + `ranges`(320).
          🔴 `Solver`는 `Poker`에 붙여 쓴다 — 독일에서 단독 `Solver`는 엑셀이다.
        */}
        <h1 className="text-center text-2xl font-bold">
          Kostenloser GTO Poker Solver – berechne deine Ranges nach dem Flop
        </h1>
        {/*
          ★h1 직후 직답 단락. GEO 원칙 ① — AI 검색도 페이지가 아니라 이 단락을 뽑는다.
            첫 문장에 정의 + 구체 수치, 앞 문단 의존 없이 자기완결.
        */}
        <p className="mt-3 text-muted-foreground">
          Ein <strong className="text-foreground">Poker Solver</strong> ist das Programm, das die
          Gleichgewichtsstrategie einer konkreten Situation berechnet: Du gibst die beiden Ranges, ein
          Board und die Bet-Größen ein, und er sagt dir, mit welcher Frequenz jede Hand betten, checken
          oder folden soll – für alle <strong className="text-foreground">169 Starthände</strong> in
          einer 13×13-Matrix. Der Solver von HoldemMaster rechnet das{" "}
          <strong className="text-foreground">direkt in deinem Browser – ohne Download, ohne Konto
          und ohne Limit</strong>. Neben der Matrix siehst du Equity, EV und Equity-Realisierung jeder
          Hand. Der Umfang: nach dem Flop, heads-up.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Solver öffnen →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Am besten in Chrome am Computer – unter iOS und in Safari rechnet der Solver mit nur einem
            Thread, eigene Spots dauern dort länger
          </p>
        </div>
        <Table head={["", "Details"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── 솔버란 (⚠ 「GTO란」 순수 정의는 glossary·strategy 소유 → 「Solver」로 좁힌다) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Was ist ein Poker Solver – und was unterscheidet ihn von einer Tabelle?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ein Solver berechnet die{" "}
          <strong className="text-foreground">GTO-Strategie (Game Theory Optimal)</strong> von Grund
          auf. Du gibst Ranges, Board, Stack und den Baum der Bet-Größen ein, und er iteriert Richtung
          Gleichgewicht, bis die Bet-, Check- und Fold-Frequenz aller 169 Hände feststeht. Genau da
          liegt der Unterschied zur Tabelle: Die Tabelle speichert eine Antwort, die jemand vorher
          gerechnet hat, der Solver{" "}
          <strong className="text-foreground">rechnet den Spot, in dem du gerade steckst</strong>.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Tausch eine einzige Board-Karte und die Antwort ändert sich mit – der Solver erinnert sich
          nicht, er rechnet neu.
        </p>
        {/*
          «부르는 이름» 문단 — 같은 것을 가리키는 검색어가 실제로 갈려 있다(2026-08-24 실측):
          poker solver 140 · gto solver 50 · solver poker 30 · gto poker 390.
          🔴 `Poker Solver`가 기본 어순이다(140 대 30 — pt와 반대). 여기서 변형들을 한 번씩 놓는다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          Gesucht wird dieselbe Sache unter verschiedenen Namen:{" "}
          <strong className="text-foreground">Poker Solver</strong>,{" "}
          <strong className="text-foreground">GTO Solver</strong> oder einfach GTO Poker. Seine
          Ausgabe heißt oft GTO-Ranges. Wie auch immer du es nennst – was das Werkzeug auf dieser
          Seite berechnet, ist genau das.
        </p>
        <Table
          head={["Was du willst", "Wo du es findest"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link key={want} href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span key={want} className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          Wenn du eigentlich wissen willst, was GTO an sich bedeutet: Die Definition und die häufigsten
          Missverständnisse stehen im{" "}
          <Link href="/de/blog/holdem-glossary" className="font-semibold text-primary hover:underline">
            Poker-Glossar
          </Link>{" "}
          und im{" "}
          <Link href="/de/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
            Texas-Hold&apos;em-Strategie-Guide
          </Link>
          .
        </p>
      </section>

      {/*
        ── ★랜딩의 핵심 절: 「poker range」 본진 ──────────────────────────
        `poker range(s)`(320 · SD 6~11)는 SERP top-10이 전부 프리플랍 표·계산기·핸드리딩이다
        (2026-08-24 실측). 플랍 이후 레인지를 다루는 독일어 페이지가 없다 → 우리가 정의하러 들어간다.
        🔴 프리플랍 표는 `de/holdem-starting-hands-chart`의 것이다. **가져오지 않고 넘긴다.**
        🔴 수치는 전부 §4-B 확정표에서만 가져왔다(③ 0.1% · ④ 23.7% — 둘 다 OOP 첫 액션 기준).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Warum brechen deine Poker Ranges nach dem Flop zusammen?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Weil eine Preflop-Range stabil ist und eine Range nach dem Flop nicht.{" "}
          <strong className="text-foreground">Eine Preflop-Range passt in eine Tabelle</strong> – vom
          Button öffnest du jede Session ungefähr dieselben Hände. Sobald drei Karten liegen, zerfallen
          genau diese Poker Ranges in fertige Hände, Draws und Air, und was richtig ist, hängt auf
          einmal komplett von der Textur des Boards ab.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Zwei Beispiele von dieser Seite zeigen das besser als jede Erklärung. In beiden callt die BB
          den Raise des Buttons und ist am Flop zuerst am Zug – gleicher Sitz, gleiche Range, gleicher Pot:
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>
            Auf <strong className="text-foreground">Q♠J♦T♠</strong> bettet die BB zuerst in{" "}
            <span className="font-semibold text-orange-500">0,1% der Fälle</span> – sie ergreift
            praktisch nie die Initiative.
          </li>
          <li>
            Auf <strong className="text-foreground">9♥8♥7♣</strong> bettet die BB zuerst in{" "}
            <span className="font-semibold text-emerald-500">23,7% der Fälle</span>.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Beide Boards sind verbunden und two-tone. Sie sehen aus wie Geschwister, und trotzdem haben
          die richtigen Antworten nichts miteinander zu tun.{" "}
          <strong className="text-foreground">Keine Preflop-Tabelle kann diesen Unterschied
          enthalten</strong>, weil die Tabelle geschrieben wird, bevor der Flop existiert. Genau das
          ist die Arbeit eines Solvers: Er gibt dir die Range von danach, nicht die von davor.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Wenn du noch an der Range von davor baust, fang mit der{" "}
          <Link href="/de/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            Starthände-Tabelle
          </Link>{" "}
          an – dort stehen die Opening-Ranges Position für Position. Und um eine Hand in die Range des
          Gegners einzuordnen, ist das{" "}
          <Link href="/de/blog/holdem-reading-the-board" className="font-semibold text-primary hover:underline">
            Lesen des Boards
          </Link>{" "}
          der Zwischenschritt.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Wie benutzt du den Poker Solver? – 5 Schritte</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Wenn du zum ersten Mal vor einem Solver sitzt:{" "}
          <strong className="text-foreground">Öffne zuerst einen Lernspot, bevor du irgendwas
          konfigurierst.</strong> Die sind fertig gerechnet – du lernst also die Ausgabe zu lesen,
          bevor du mit der Eingabe kämpfst. Für eigene Spots gehen die Tabs der Seitenleiste von oben
          nach unten.
        </p>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Im eigenen Spot sind Chips beliebige ganze Zahlen. Wenn du lieber in Big Blinds denkst, nimm{" "}
          <strong className="text-foreground">10 Chips = 1bb</strong> (ein Pot von 55 ist 5,5bb).
          Lernspots und Trainer benutzen diese Skala schon.
        </p>
        {/* 🔴 두 출처를 가른다(M-046 E-2 처방) — 포지션별 오픈 레인지는 chart의 것, 아래 표는
            학습 스팟이 쓰는 것. es(08-22)·en·ja(08-24)와 같은 형태다. */}
        <p className="mt-4 text-sm text-muted-foreground">
          Beide Ranges von Grund auf zu bauen ist der lange Weg. Die Opening-Ranges nach Position
          stehen in der{" "}
          <Link href="/de/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            Starthände-Tabelle
          </Link>
          . Die beiden Ranges unten sind etwas anderes:{" "}
          <strong className="text-foreground">die, die die Single-Raised-Pot-Lernspots benutzen</strong>{" "}
          (BTN vs BB), fertig zum Einfügen in ① und ②.
        </p>
        <Table head={["Einfügen in", "Range"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Wie liest du die Poker Ranges auf dem Ergebnisbildschirm?</h2>
        {/*
          🔴 **다섯이다.** 아래 표가 다섯 행이고 이 문단이 다섯을 센다(M-046 E-3 — ko·en·ja·es는
             「네 구역」으로 났다가 08-24 일괄 소급됐다. de는 처음부터 다섯으로 쓴다).
        */}
        <p className="mt-2 text-sm text-muted-foreground">
          Die Ergebnisansicht hat fünf Arbeitsbereiche: die{" "}
          <strong className="text-foreground">Aktionsleiste</strong> oben, die{" "}
          <strong className="text-foreground">13×13-Matrix</strong> links und rechts die{" "}
          <strong className="text-foreground">Frequenzen, das Panel Hände / Draws und die
          Detailtabelle</strong>. Merk dir als Faustregel: Links liest du, was eine einzelne Hand tut,
          rechts, was die ganze Range tut – nur die Detailtabelle rechts unten schlüsselt das wieder
          Hand für Hand auf.
        </p>
        <Table head={["Wo", "Was dort steht", "Wie man es liest"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Fällt die Equity-Realisierung (EQR) unter 100%, lohnt sich ein genauerer Blick: Du bekommst nicht
          die ganze Equity ausgezahlt, die du hältst. Woran das liegt, wechselt von Spot zu Spot –
          Position, Initiative und wer mehr vom oberen Ende der Range mitbringt.{" "}
          <strong className="text-foreground">Ein Solver sagt dir nicht, wie du spielen sollst – er
          zeigt dir, warum die Frequenz so ist, wie sie ist</strong>, und in der EQR wird dieses Warum
          am deutlichsten.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Wenn diese Begriffe noch fremd klingen: Der{" "}
          <Link href="/de/blog/holdem-equity" className="font-semibold text-primary hover:underline">
            Equity-Guide
          </Link>{" "}
          und der zur{" "}
          <Link href="/de/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            Continuation Bet
          </Link>{" "}
          geben dir vorab das Vokabular für das, was der Solver misst.
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Ist er wirklich kostenlos? – alles, was drin ist</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ja – und zwar ohne das übliche Kleingedruckte: keine Zahlungsdaten, keine gesperrten
          Funktionen, keine Obergrenze für Berechnungen pro Tag, kein Konto. Auch die Einstellungen, die
          sonst in bezahlten Desktop-Solvern wohnen –{" "}
          <strong className="text-foreground">Rake und Rake-Cap, Präzisionsmodi, Baum-Bearbeitung
          Knoten für Knoten</strong> – sind dabei. Die einzige echte Grenze: Dieses Werkzeug deckt{" "}
          <strong className="text-foreground">nur die Zeit nach dem Flop ab, heads-up</strong>.
        </p>
        <Table
          head={["Funktion", "Enthalten", "Anmerkung"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span key={name} className="font-bold text-emerald-600">Ja</span>
            ) : (
              <span key={name} className="font-bold text-muted-foreground">Nein</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Kostenlos ausprobieren →" variant="outline" />
        </div>
      </section>

      {/* ── 플랍 이후 범위 (카니발 방지의 본체) ──────────────────────── */}
      <section className="mt-12">
        {/* 🟢 SEO 렌즈 반영(2026-08-24) — `flop turn river`(390 · comp 1)가 헤딩에 0회였다.
            카니발 가드 의미는 그대로 두고 키워드를 H2에 축어로 얹었다. */}
        <h2 className="text-xl font-bold">Warum rechnet er nur Flop, Turn und River?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Das hier ist ein <strong className="text-foreground">Postflop-Solver</strong>: Er setzt in
          dem Moment an, in dem der Flop liegt, und rechnet von dort für beide Spieler weiter. Das
          Preflop-Spiel wegzulassen ist Absicht, denn Preflop ist ein anderes Problem – Opening-Ranges sind
          stabil genug für eine Tabelle, während sich das Spiel nach dem Flop mit jedem Board neu
          schreibt.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Innerhalb dieser Grenze fehlt nichts: die{" "}
          <strong className="text-foreground">Ranges beider Spieler</strong>, jeder Flop, Turn und
          River, Startpot und effektiver Stack, und der komplette Größenbaum Street für Street. Die
          Strategie, die herauskommt, ist nicht generisch, sondern die deines Tischs – inklusive Rake,
          den das meiste Lernmaterial nicht einmal erwähnt.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Wenn dir der Teil vor dem Flop fehlt: Die{" "}
          <Link href="/de/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            Starthände-Tabelle
          </Link>{" "}
          sammelt die Ranges nach Position. Mit beiden Teilen deckst du eine Hand von Anfang bis Ende
          ab: Die Tabelle entscheidet, womit du einsteigst, der Solver, was ab dem Flop passiert.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        {/* 🟢 SEO 렌즈 반영(2026-08-24) — `poker trainer`(140 · SD 7)가 `gto trainer`(20)의 7배인데
            H2가 작은 쪽만 실었었다. 앱 제품명(GTO-Trainer)을 지키면서 큰 키워드를 함께 얹었다. */}
        <h2 className="text-xl font-bold">GTO-Trainer – der kostenlose Poker Trainer, der misst, wie viel EV du liegen lässt</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Der GTO-Trainer steckt im selben Werkzeug und braucht keine eigene Anmeldung. Er macht aus
          den fertig gerechneten Spots Übungen: Er teilt dir eine Hand an einem echten
          Entscheidungspunkt aus, du wählst eine Aktion und bekommst eine Note. Wenn du einen
          kostenlosen Poker Trainer suchst und keine Lines auswendig lernen willst, sondern{" "}
          <strong className="text-foreground">Entscheidungen</strong> – fang hier an.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Die Note ist nicht richtig oder falsch, sondern{" "}
          <strong className="text-foreground">wie viel Erwartungswert du liegen gelassen hast</strong>.
          Da GTO Aktionen mischt, ist die seltener gewählte Option nicht automatisch ein Fehler – die
          Frage ist, wie viel EV sie gekostet hat. Nach deiner Wahl siehst du Frequenz und EV jeder
          Aktion neben den Kosten deiner eigenen.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 팟 대비 비율이다. **절대 bb가 아니다** — 앱이 2026-08-15에 바꿨다. 되돌리지 마라.
            🟢 de 앱 화면도 이미 «EV-Verlust im Verhältnis zum Pot»라 화면과 아래 문장이 일치한다
               (2026-08-24 실측 · pt와 같은 상태).
            🪶 화면의 «wie viele bb dich jede Entscheidung kostet»는 오류가 아니다 — 표시 «값»은
               bb이고 «합격선»만 팟 대비다(2026-08-23 솔버 왕복에서 확인된 구조).
          */}
          <li className="text-muted-foreground">
            Die Schwellen werden <strong className="text-foreground">im Verhältnis zum Pot</strong>{" "}
            gemessen – <span className="font-semibold text-emerald-500">bis 0,35%</span> ist ein
            Top-Play · <span className="font-semibold text-blue-500">bis 1%</span> akzeptabel ·{" "}
            <span className="font-semibold text-orange-500">darüber</span> lohnt sich das Nachschauen
          </li>
          <li className="text-muted-foreground">
            Dieselben 0,08bb sind 1,45% in einem 5,5bb-Pot (nachschauen) und 0,36% in einem 22,5bb-Pot
            (akzeptabel). Die Grenzen liegen bei 0,02bb und 0,06bb im Single Raised Pot und bei 0,08bb
            und 0,23bb im 3-Bet-Pot. Untergrenzen von 0,02bb und 0,05bb sorgen dafür, dass
            Kleinstunterschiede nicht mit der Fehlermarge des Solvers verwechselt werden
          </li>
          {/*
            🔴 2026-08-25 정정(검수장 M-061 ② — fr F-1 동형 소급) — 초판은 «gehen in die
            Zehntausende»(수만대)였다. 실측은 **13,743**(ko 랜딩 주석의 라이브 계수 산식)이라
            «Zehntausende»가 위로 벗어난다. ko 주석의 자기 규율은 «스팟이 늘어도 참인 **하한 표현**»이고
            나머지 로케일도 전부 하한형이다(en «run past ten thousand» · fr «plus de dix mille»).
            ⚠ 이 자리는 M-053 «당일 0» 회차 원장 14행에 **미등재였다**(그때 못 본 자리) — 되살리지 마라.
            ⚠ **정확한 수를 박지 마라** — 그 데이터는 솔버가 소유해 우리 빌드가 못 읽는다(반드시 낡는다).
          */}
          <li className="text-muted-foreground">
            Die Fragen kommen aus mehreren Entscheidungspunkten jedes Spots, die Kombinationen{" "}
            <strong className="text-foreground">liegen über zehntausend</strong>{" "}
            (Ziel-Exploitability 0,5%). Du kannst auch gezielt einen Spot-Typ üben: Single Raised Pot,
            3-Bet-Pot oder Blind vs Blind
          </li>
          <li className="text-muted-foreground">
            Die Hände werden{" "}
            <strong className="text-foreground">im echten Gewicht der GTO-Range</strong> ausgeteilt –
            sie kommen so oft, wie du sie in dem Spot wirklich hättest
          </li>
          <li className="text-muted-foreground">
            Serien, Schwachstellen-Auswertung und die{" "}
            <strong className="text-foreground">Wiederholungs-Queue</strong> mit den Übungen, in denen
            du am meisten EV verloren hast, bauen auf diesem Verlauf auf. Ohne Login bleibt alles auf
            deinem Gerät
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="GTO-Trainer öffnen →" variant="outline" />
        </div>
      </section>

      {/* ── 학습 스팟 (앱 축어 9 + §4-B 정정 4) ─────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} fertig gelöste Lernspots
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Alle Spots unten sind schon durchgerechnet – die Strategie steht in dem Moment da, in dem du
          sie öffnest, ohne Wartezeit und ohne Konfiguration. Die Ranges sind Näherungen des
          100bb-Online-Standards; am meisten lernst du, wenn du einen Spot lädst, die Ranges änderst,
          neu rechnest und schaust, was sich bewegt hat. Einen schnelleren Weg zu verstehen, wie die
          Board-Textur die Strategie umschreibt, gibt es nicht.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => {
                const item = s as { board: string; name: string; note: string; slug?: string };
                return (
                  <li key={item.board} className="text-sm">
                    <span className="font-semibold">{item.board}</span>
                    <span className="mx-1.5 text-muted-foreground">·</span>
                    {item.slug ? (
                      <Link
                        href={`/de/blog/${item.slug}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium">{item.name}</span>
                    )}{" "}
                    <span className="text-muted-foreground">— {item.note}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 ───────────────────────────────────────────── */}
      {/*
        ⚠ 가격·무료 티어 «수치»를 쓰지 않는다(§12-B). «방식의 차이»만 적는다.
        🪶 브랜드 인접 검색: `gto wizard` 2,400(48개월 추세 상승) · `piosolver` 90 ·
           `gto wizard deutsch` 20~30. 직접 조준은 안 하지만 비교 문맥의 언급은 정당하다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Was ist der Unterschied zu GTO Wizard oder PioSOLVER?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Alle heißen Solver, aber was sich unterscheidet, ist{" "}
          <strong className="text-foreground">wo und wann gerechnet wird</strong>. Lösungsbibliotheken
          wie GTO Wizard sind Nachschlagewerke: Sie zeigen vorab gerechnete Lösungen, sind sehr schnell
          und decken oft auch Preflop ab. Desktop-Solver wie PioSOLVER installierst du und sie rechnen
          auf deinem eigenen Rechner, vor allem unter Windows. Dieses Werkzeug{" "}
          <strong className="text-foreground">rechnet live im Browser – genau dann, wenn du
          fragst</strong>. Du kannst Ranges und Baum beliebig umschreiben, und es gibt nichts zu
          installieren.
        </p>
        <Table
          head={["", "HoldemMaster-Solver", "Lösungsbibliothek", "Desktop-Solver"]}
          rows={COMPARE}
        />
        {/*
          🔴 «남의 무료 티어 수치»를 적지 않는다. 대신 SERP 실측으로 확인된 **구조**를 적는다:
             `gto solver`·`poker solver` top-10의 무료 접근이 전부 «구독/일일 개수/크레딧/다운로드»
             중 하나로 제한되고, 무료 수요는 Reddit 스레드(「Beste (kostenlose) Poker Solver?」)로
             흘러간다 — 2026-08-24 실측.
        */}
        <p className="mt-4 text-sm text-muted-foreground">
          Wer nach einem kostenlosen Poker Solver sucht, landet meist in Foren-Threads – und fast alles
          Kostenlose kommt mit einer Bedingung: ein Abo mit teilweise offenem Katalog, eine Anzahl
          Lösungen pro Tag, Credits, die sich beim Öffnen einer Line verbrauchen, oder ein Download.
          Diese Bedingung gibt es hier nicht –{" "}
          <strong className="text-foreground">keine Anmeldung, kein Tageslimit, keine Credits</strong>.
          Genau deshalb kannst du diese Seite beim Durchgehen deiner Hände einfach offen danebenliegen
          lassen.
        </p>
        {/*
          🔴 이 문단의 근거는 wasm-postflop.pages.dev의 **자기 고지**와 GitHub 저장소 제목
             "[Development suspended]"다. 추측이 아니라 원본이 스스로 적어 둔 문장이고,
             우리 앱의 AGPL 고지 축어(«Diese App basiert auf WASM Postflop …»)와 일치한다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          Eine Notiz für alle, die über{" "}
          <strong className="text-foreground">WASM Postflop</strong> hierher gefunden haben: Auf der
          Seite des Open-Source-Originals steht, dass es nicht mehr weiterentwickelt wird, und das
          Repository ist als eingestellt markiert. Dieser Solver ist ein Fork, der
          diese Engine weiterträgt – gleiche AGPL-3.0-Lizenz, ebenso veröffentlichter Quellcode, und
          obendrauf eine neue Oberfläche, die Lernspots und der Trainer.
        </p>
      </section>

      {/* ── 모바일·오프라인 (PWA) ───────────────────────────────────── */}
      {/*
        근거: 앱이 이미 PWA이고 버튼 축어가 «♠ Zum Startbildschirm hinzufügen»다.
        🔴 **「설치할 수 없다」로 쓰지 마라** — 앱 등록을 준비 중이라 출시되는 순간 거짓이 된다.
           「설치가 «필요 없고», 원하면 담을 수도 있다」로 쓴다.
        🔴 **「오프라인으로 계산까지 된다」로 쓰지 마라** — 오프라인은 스팟 열람과 트레이너뿐이다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Funktioniert er auf dem Handy und offline?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ja, beides. Zum Loslegen musst du nichts installieren – er öffnet sich im Handy-Browser
          genauso wie am Computer. Aber{" "}
          <strong className="text-foreground">wenn du willst, legst du ihn auf den
          Startbildschirm</strong> und er verhält sich wie eine App: eigenes Icon, Vollbild, keine
          Adressleiste. Es ist eine Browser-Verknüpfung, kein Programm – nach Systemberechtigungen
          fragt sie nie.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Einmal hinzugefügt, liegen die Lernspots und der GTO-Trainer auf dem Gerät und{" "}
          <strong className="text-foreground">du übst auch ohne Internet weiter</strong> – in der
          U-Bahn, im Flieger, mit wenig Datenvolumen. Die wichtige Einschränkung: Für einen eigenen
          Spot muss die Rechen-Engine einmal geladen worden sein.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Auf dem iPhone und in Safari rechnet der Solver wegen Browser-Einschränkungen mit nur einem
          Thread, große Spots dauern dort also länger – dafür ist der Computer bequemer. Hinzufügen
          geht in Chrome und Edge über das Installieren-Symbol in der Adressleiste, auf dem iPhone über
          «Zum Home-Bildschirm» im Teilen-Menü.
        </p>
      </section>

      {/* ── 함께 읽으면 좋은 글 (⚠ de엔 도구 페이지가 없다 — 전부 블로그) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Zum Weiterlesen</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/de/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
              Starthände-Tabelle
            </Link>{" "}
            – dieses Werkzeug arbeitet nur nach dem Flop. <strong>Womit du einsteigst</strong>, steht dort;
            die Ranges zum Einfügen in ① und ② stammen aus den Lernspots
          </li>
          <li>
            <Link href="/de/blog/holdem-pot-odds" className="font-semibold text-primary hover:underline">
              Pot Odds
            </Link>{" "}
            – wenn du nur die Zahl brauchst und keinen Solver aufmachen willst: Outs und nötige Equity
          </li>
          <li>
            <Link href="/de/blog/holdem-equity" className="font-semibold text-primary hover:underline">
              Equity im Poker
            </Link>{" "}
            – fast die ganze Solver-Ausgabe leitet sich aus der Equity ab. Vorher lesen macht den
            Ergebnisbildschirm lesbar
          </li>
          <li>
            <Link href="/de/blog/holdem-position-play" className="font-semibold text-primary hover:underline">
              Positionsspiel
            </Link>{" "}
            – die EQR bewegt sich stark mit der Position. Hier steht, was der Solver da quantifiziert
          </li>
          <li>
            <Link href="/de/blog/holdem-3bet" className="font-semibold text-primary hover:underline">
              3-Bet-Guide
            </Link>{" "}
            – drei der Lernspots sind 3-Bet-Pots. Dieser Artikel erklärt, wie es zu diesem Flop kommt
          </li>
          <li>
            <Link href="/de/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              Texas-Hold&apos;em-Strategie-Guide
            </Link>{" "}
            – die Landkarte der Konzepte, die der Solver in Zahlen fasst, inklusive der GTO-Definition
          </li>
        </ul>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        🔴 본문에도 전부 렌더한다 — 스키마에만 두면 LLM이 못 읽는다(posting.mdc GEO ④).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Häufige Fragen</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_DE.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 오픈소스 고지 (AGPL) ─────────────────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Kostenlosen Poker Solver öffnen →" />
      </section>
      {/*
        🔴 AGPL 고지 — 앱 화면의 축어와 같은 사실이다. **훅으로 키우지 않는다**(2026-08-22 판정:
           앱스토어 등록 준비 중이라 오픈소스를 마케팅 축으로 세우지 않는다).
        🪶 렌더되는 자리가 셋이다: SPEC 표 `Engine` 행 · WASM Postflop 문단 · 이 꼬리 고지.
           **제목·H1·H2에 없다는 것이 지켜야 할 선**이다. 옮기려면 판정을 먼저 다시 받을 것.
      */}
      <p className="mt-8 text-xs text-muted-foreground">
        Diese App basiert auf WASM Postflop von Wataru Inariba (AGPL-3.0), lokalisiert und erweitert
        von HoldemMaster. Der vollständige geänderte Quellcode ist unter derselben Lizenz
        veröffentlicht.
      </p>
    </div>
  );
}
