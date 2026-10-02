# 솔버 앱 DE 축어·미디어 — 2026-10-02

> 공개 앱 `https://solver.holdemmaster.com/?lang=de`를 Playwright Chromium으로 열고 실제 DOM(`document.body.innerText`·`select` 옵션)에서 채집했다(2026-10-02 16:50경 KST).
> 08-24판(`solver-app-verbatim-5langs-2026-08-24.md`)의 de 열을 **대체**한다 — 그 사이 앱 문구가 바뀌었다(예: 스팟 메뉴 `Lernspots`, 결과 버튼 `⚡ Ergebnisse ansehen`, 뒤로 `← Zurück`).
> **이 문서는 화면 축어 기록이다. 전략 설명의 정본은 EN 해설과 `gto-solver-series-spec.md` §4-B다.** 앱 목록의 스팟 설명문에는 폐기된 인과가 남아 있다(§4) — 해설 원문으로 복사하지 않는다.

## 1. 화면에서 쓰는 이름

| 자리 | 실제 DE 축어 |
|---|---|
| 사이드바 메뉴 | `Lernspots ⚡ Sofort` |
| 홈 버튼 | `Lernspots ansehen` |
| 목록 제목 | `Lernspots – Beispiele mit einem Klick` |
| 목록 안내 | `[⚡ Ergebnisse ansehen] zeigt dir die fertige Strategie sofort. Nimm [Selbst berechnen] nur dann, wenn du die Ranges anpassen oder Turn und River erkunden willst.` |
| 결과 보기 | `⚡ Ergebnisse ansehen` |
| 목록에서 직접 계산 | `Selbst berechnen` |
| 결과에서 직접 계산 | `Diesen Spot selbst berechnen` |
| 뒤로 | `← Zurück` |
| 결과 범위 안내 | `Nur die Flop-Strategie. Turn und River durchklicken? →` |
| 헤더 칩 | `Pot 5,5 bb` · `Stack 97,5 bb` (값·단위가 줄 나뉨) |
| 플레이어 선택 | `Spieler:` → `OOP (BB (Caller))` / `IP (BTN (Open-Raiser))` |
| 첫 액션 안내 | `Das ist die Strategie des Spielers, der zuerst handelt (OOP). Um den Gegner (IP) zu sehen, stelle oben „Spieler“ auf IP.` |
| 분류 패널 | `Hände` / `Draws` |
| 요약 | `Übersicht` |
| 바 너비 | `Balkenbreite:` → `Normalisiert` / `Absolut` / `Voll` |
| 표시 | `Anzeige:` → `Aktions-%` / `Aktions-EV` |
| 상세 표 헤더 | `Hand` / `Strategie` / `Gewicht` / `EQ` / `EV (bb)` / `EQR` / `B 4,1bb` / `B 1,8bb` / `Check` |
| 전체 행 | `Alle` |
| 콤보 | `Combos` |
| 액션 칩 | `Bet 4,1bb (75% vom Pot)` · `Bet 1,8bb (33% vom Pot)` · `Check` (스팟마다 사이즈가 다르다 — §3) |
| 직접 입력 순서 | `① OOP-Range` / `② IP-Range` / `③ Board` / `④ Bet Sizes` (`Spielbaum`) / `⑤ Berechnen` |
| 결과 탭 잠금 | `Ergebnisse` — `Öffnet sich, sobald ⑤ Berechnen abgeschlossen ist` |

**핸드 분류(실측):** `Set/Drilling`, `Zwei Paare`, `Top Pair`, `Second Pair`, `Weak Pair`, `Underpair`, `Overpair`, `A-High`, `K-High`, `Keine Made Hand`, `Straße`, `Flush`, `Full House`, `Vierling`.

**드로우 분류(실측):** `Gutshot`, `Backdoor-FD`, `Kein Draw`, `Combo Draw`, `Flushdraw`, `OESD`.

**숫자는 독일어 표기다.** 결과 실측 예: `98,2%`, `455,5`, `464,0`, `2,09`, `84,0%`. %는 값에 붙는다(공백 없음) — `translation-terms-de` §3 산문 규칙과 같다.

🪶 `Set/Drilling` 행은 페어드 보드(⑥·⑬)에서는 실제로 trips를 담는다 — 원문 계약 §6 «trips 표기 자체는 오류 아님»과 같은 처리(앱 행 이름을 인용하되 산문에서 set/trips를 구분).

## 2. 그룹·플레이어 축어

| 그룹 | 조건 줄 |
|---|---|
| `Single Raised Pot – BTN vs BB (Grundlagen)` | `OOP: BB (Caller) · IP: BTN (Open-Raiser) · Pot 5,5bb · Stack 97,5bb` |
| `3-Bet-Pot – BB 3-bettet, BTN callt (niedriger SPR)` | `OOP: BB (3-Bettor) · IP: BTN (Caller) · Pot 22,5bb · Stack 89bb` |
| `Blind vs Blind – SB vs BB (weite Ranges)` | `OOP: SB (Open-Raiser) · IP: BB (Caller) · Pot 6bb · Stack 97bb` |

목록 맺음말: `Die Ranges sind Näherungen des 100bb-Onlinestandards. Lade einen Spot, passe die Ranges an und vergleiche – so lernst du am meisten.`

## 3. 스팟 이름·첫 액션 실측 (`.solver-captures/data-de.json`)

퍼센트는 개별 반올림값이라 합이 정확히 100이 아닐 수 있다. **13/13이 spec §4-B 고정표와 일치**(2026-10-02 대조).

| # | 키 | DE 스팟 이름 | 보드 | 첫 액션 (OOP) |
|---|---|---|---|---|
| ① | srp-dry-ace | `Trockenes A-High-Board` | A♥7♦2♣ | Bet 4,1bb 0,9% · Bet 1,8bb 1,0% · Check 98,2% |
| ② | srp-dry-king | `Trockenes K-High-Board` | K♠8♦3♣ | 0,1% · 0,1% · Check 99,8% |
| ③ | srp-broadway | `Verbundenes Broadway-Board, Two-Tone` | Q♠J♦T♠ | 0,0% · 0,1% · Check 99,9% |
| ④ | srp-middle-connected | `Verbundenes Middle-Board, Two-Tone` | 9♥8♥7♣ | 6,9% · 16,8% · Check 76,2% |
| ⑤ | srp-monotone | `Monotones Board (eine Farbe)` | Q♠9♠2♠ | 3,2% · 8,0% · Check 88,8% |
| ⑥ | srp-paired | `Gepaartes Board` | 6♣6♦3♥ | 2,0% · 1,0% · Check 97,0% |
| ⑦ | srp-low-rainbow | `Niedriges Rainbow-Board` | 6♠5♥2♦ | Bet 1,8bb 3,2% · Check 96,8% |
| ⑧ | 3bp-ace-king | `A-High-Board, Vorteil für den 3-Bettor` | A♦K♠2♥ | Bet 14,9bb (66% vom Pot) 42,2% · Bet 7,4bb 57,8% · Check 0,0% |
| ⑨ | 3bp-dynamic | `Dynamisches Two-Tone-Board` | Q♥T♥7♠ | 98,4% · 0,7% · Check 0,8% |
| ⑩ | 3bp-low | `Niedriges, trockenes Board` | 8♦5♣2♠ | 97,8% · 0,3% · Check 2,0% |
| ⑪ | sb-king-mid | `K-High mit einer Zehn` | K♥T♦6♠ | Bet 2bb (33% vom Pot) 67,4% · Check 32,6% |
| ⑫ | sb-connected | `Verbundenes Low-Board, Two-Tone` | 7♦6♦5♣ | Bet 2bb 9,6% · Check 90,4% |
| ⑬ | sb-paired-ace | `Board mit gepaartem Ass` | A♠A♥6♦ | Bet 4,5bb 0,5% · Bet 2bb 79,6% · Check 19,8% |

재현 CTA의 스팟 이름은 **이 표의 축어**를 굵게 그대로 쓴다: «Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **[스팟 이름]** → **⚡ Ergebnisse ansehen**.»

## 4. 앱 설명문 — 해설 원문으로 쓰지 않는다

목록 카드의 DE 설명문은 ko 원본에서 파생된 옛 문장이다. 그대로 옮기면 폐기된 명제가 되살아난다. 대표 사례:

| # | 앱 문장(축어 발췌) | 왜 원문으로 못 쓰나 |
|---|---|---|
| ① | `Schau, wie weit die Range ist, mit der der BTN nach dem Check der BB eine kleine C-Bet macht` | 이 사전 계산은 **BB 첫 결정만** 보여 준다. BTN c-bet 결과는 이 예제에 없다(원문 계약 §4 ①) |
| ④ | `Die C-Bet-Frequenz des BTN bricht ein` | 08-24판부터 지적된 ko 파생 결함(전 언어). 화면은 BB 첫 액션이고, BB의 리드는 c-bet이 아니라 donk bet |
| ⑥ | `Niemand trifft dieses Board, also steigt die Bluff-Frequenz.` | 원문 ⑥은 trips 26 대 20 등 구성 비교. «블러프 빈도 상승»은 계산되지 않은 명제 |
| ⑦ | `die BB check-raist auf dieser Textur oft. Verfolge die obere Leiste über eine Bet hinaus` | 사전 결과는 후속 노드로 못 간다. check-raise 14,9%는 **별도 재솔브**(원문 계약 §5) |
| ⑩ | `weitgehend verfehlt` | 완화형이라 08-24에 통과 판정(«통째로» 결함형 아님). 그래도 원문 ⑩의 «overpair 36콤보 별도» 구분을 대체하지 않는다 |

## 5. 산출물

| 파일 | 내용 |
|---|---|
| `.solver-captures/<key>-oop-de.png` · `-ip-de.png` · `data-de.json` | 13스팟 OOP·IP 캡처와 추출값(gitignore 여부는 기존 로케일과 같다) |
| `public/images/gto-<key>-oop-de.webp` ×13 | 히어로. 1200폭 q82, 73~103KB(폭≥750 상한 150KB 안) |
| `public/images/gto-<key>-ranges-de.webp` ×13 | 본문 레인지 차트. q82, 26~34KB. 제목 `Range-Zusammensetzung` · 출처 `Berechnet mit dem GTO-Solver von HoldemMaster · ohne Rake` · `Equity-Realisierung`(de 코퍼스 다수형 16회) |

육안 확인(Read): ④ OOP 캡처 · ⑧·⑬ 레인지 차트 — 독일어 라벨 잘림 없음, 소수 쉼표, 카드 무늬 정상.
스크립트 변경: `capture-solver-spots.mjs` L10N `de`(selftest 통과) · `make-solver-range-charts.mjs` CHART_L10N `de` + 콤마 소수 + 2줄 제목(selftest 통과).
