# 솔버 앱 13스팟 축어 — ko·en·de·zh·zh-hant 5개 언어 (2026-08-24 · Playwright DOM 실측)

> **M-039 약속분.** ja·es·pt 3개는 기납품(`solver-app-verbatim-pt-2026-08-23.md` 등) — 이로써 **8개 언어 전부**가
> 검수장 손에 있다. 검수장이 (c)(앱 축어가 아직 틀린 것)를 닫는 조건.
>
> 🔴 **이 파일은 «정본»이 아니라 «앱이 지금 무엇을 말하는가»의 기록이다.**
> 사실 판정 기준은 `docs/gto-solver-series-spec.md` §4-B 확정표이고, 둘이 어긋나면 §4-B가 이긴다.
>
> 채집: `?lang=<code>` → 학습 스팟 패널 열기 → `document.body.innerText` 추출. `curl` 불가(SSR 초기 HTML은 한국어).

## 0. 🔴 한 줄 결론 — 결함 세트가 «언어 불변»으로 재확인됐고, ⑩이 새로 잡혔다

| 자리 | 상태 | 언어 |
|---|---|---|
| **④ `9♥8♥7♣` 「콜러 우위 + C벳 빈도 붕괴」** | 🔴 **6개 언어 전건** | ko·en·de·zh·zh-hant(이번) + ja·es·pt(기확인) — **원본(ko) 파생 확정** |
| **⑦ `6♠5♥2♦` 「체크레이즈 빈도↑ + 벳 뒤를 따라가 보라」** | 🔴 **RP-19 원천 + 조작 지시** | 5개 언어 전건 동일 구조 |
| **⑧ `A♦K♠2♥` 「낮은 SPR이라 작은 벳」** | 🔴 **RP-03 원천** | 5개 언어 전건 |
| **⑩ `8♦5♣2♠` 「통째로 빗나감」** | 🔴 **RP-17 결함형이 ko·zh·zh-hant에 잔존** | ko 「통째로」 · zh/zh-hant 「整個」. 🟢 en 「largely misses」·de 「weitgehend verfehlt」는 완화형이라 통과(ja 「ほぼ」와 같은 계열) |
| ③ ⑨ ⑬ | 🟢 **5개 언어 전부 정정본**(08-22 배포 반영) | 77.9/119.4·99.9 / 98.4·0.8 / 88 대 66·80.1 |
| 트레이너 채점 문구 | 🟢 5개 언어 전부 「팟 대비」 정정본 | de 「EV-Verlust im Verhältnis zum Pot」 등 |

🪶 ③은 5개 언어 전부 「13개 스팟 중」을 하드코딩한다(RP-08 유형) — 앱 소유 문안이라 판정은 검수장·솔버에.

## 1. 화면 골격 (de 만 — 나머지는 스팟 표만)

| 자리 | de 축어 |
|---|---|
| `<title>` | `HoldemMaster GTO Solver – Kostenloser Online-Solver für Texas Hold’em` |
| meta description | `Kostenloser GTO-Solver, der direkt im Browser läuft – ohne Installation. Berechne die Postflop-Strategie in Texas Hold’em nach Range, Board und Bet Size. Von HoldemMaster.` |
| 히어로 | `GTO-Strategie, direkt im Browser.` / `Nichts zu installieren, nichts zu bezahlen.` |
| 네비 | `Lernspots ⚡ Sofort` · `GTO-Trainer EV-Note` · `Preflop-Charts Ranges` · `Equity-Rechner Sieg-%` |
| 사이드바 | `① OOP-Range` · `② IP-Range` · `③ Board` · `④ Bet Sizes Spielbaum` · `⑤ Berechnen` |
| 특징 4칸 | `Kostenlos — Alle Funktionen, ohne Nutzungslimit` · `Offline lernen` · `Schnelles Solving — Multithreaded – Tempo eines Desktop-Solvers` · **`GTO-Trainer — Spots spielen, benotet nach EV-Verlust im Verhältnis zum Pot`** 🟢 |
| 트레이너 CTA | `Probiere den GTO-Trainer – er zeigt dir, wie viele bb dich jede Entscheidung kostet`(값=bb, 합격선=팟 대비 — 결함 아님) |
| PWA | `Zum Startbildschirm hinzufügen` |
| 그룹 라벨 | `Single Raised Pot – BTN vs BB (Grundlagen)` `Pot 5,5bb · Stack 97,5bb` / `3-Bet-Pot – BB 3-bettet, BTN callt (niedriger SPR)` `Pot 22,5bb · Stack 89bb` / `Blind vs Blind – SB vs BB (weite Ranges)` `Pot 6bb · Stack 97bb` |

🔴 **de 앱은 소수 구분자로 «쉼표»를 쓴다**(`5,5bb` · `77,9%`). zh·zh-hant는 마침표다.

## 2. 13스팟 축어 — de

| # | 보드 | 앱 note (축어) | 판정 |
|---|---|---|---|
| ① | A♥7♦2♣ | `Der Lehrbuch-Spot für den Range-Vorteil. Schau, wie weit die Range ist, mit der der BTN nach dem Check der BB eine kleine C-Bet macht – das Ass trifft die Range des Openers voll.` | 🟢 |
| ② | K♠8♦3♣ | `Vergleiche es mit dem A-High-Board. K-High begünstigt den BTN ebenfalls, aber er checkt etwas öfter. Weißt du, warum?` | 🟢 |
| ③ | Q♠J♦T♠ | `Ein Board, das beide Ranges zu treffen scheint. Doch BB realisiert hier weniger Equity als in jedem der 13 Spots – 77,9% gegen 119,4% beim BTN – und checkt zu 99,9%. Das Panel Hände / Draws zeigt, warum.` | 🟢 정정본 |
| ④ | 9♥8♥7♣ | `Die klassische Textur für den Caller. Die C-Bet-Frequenz des BTN bricht ein – dieser Spot zeigt genau, warum „immer c-betten“ falsch ist.` | 🔴 **M-035 결함1·2** |
| ⑤ | Q♠9♠2♠ | `Sieh, warum große Bets verschwinden und kleine Bets und Checks übernehmen. Achte darauf, wie oft selbst ein fertiger Flush nur checkt.` | 🟢 |
| ⑥ | 6♣6♦3♥ | `Niemand trifft dieses Board, also steigt die Bluff-Frequenz. Finde in der Übersicht heraus, welche Hände als Bluff betten.` | 🟢 |
| ⑦ | 6♠5♥2♦ | `Ein Overcard-Krieg – die BB check-raist auf dieser Textur oft. Verfolge die obere Leiste über eine Bet hinaus, um die Antworten zu sehen.` | 🔴 **RP-19 + 조작 지시** |
| ⑧ | A♦K♠2♥ | `Der bestmögliche Flop für den 3-Bettor, dessen Range voll mit AK, AA und KK ist. Bei niedrigem SPR setzen kleine Bets die ganze Range unter Druck.` | 🔴 **RP-03** |
| ⑨ | Q♥T♥7♠ | `Ein 3-Bet-Pot auf einem Board, das auch dem Caller liegt – und trotzdem bremst der 3-Bettor nicht: 98,4% der Range feuert mit derselben Zwei-Drittel-Size. Sieh dir an, welche Hände die 0,8% Check ausmachen.` | 🟢 정정본 |
| ⑩ | 8♦5♣2♠ | `Ein Board, das die Range des 3-Bettors weitgehend verfehlt – und trotzdem halten Overpairs und A-High den Druck aufrecht. Equity vs. Fold Equity.` | 🟢 완화형(`weitgehend`) |
| ⑪ | K♥T♦6♠ | `Im Blind vs Blind sind die Ranges weit, beide kommen also schwach zum Flop. Vergleiche die Frequenzen mit dem Spot „Trockenes K-High-Board“ aus BTN vs BB.` | 🟢 (RP-18 감시: 빈도 수치 없음) |
| ⑫ | 7♦6♦5♣ | `Zwei weite Ranges treffen auf einem extrem verbundenen Board aufeinander: Zwei Paare, Straßen und Draws überall. Hier glänzt das Panel Hände / Draws.` | 🟢 |
| ⑬ | A♠A♥6♦ | `Zwei Asse auf dem Board. Drillinge sind nicht selten – SB hält einfach mehr davon (88 Combos gegen 66 beim BB), also bettet SB 80,1%. Wer mehr Asse hält, erklärt hier alles.` | 🟢 정정본 |

## 3. 13스팟 축어 — ko (⚠ 원본 — 결함의 발원)

| # | 앱 note (축어) | 판정 |
|---|---|---|
| ① | `레인지 우위 교과서. BB 체크 후 BTN이 작은 벳을 매우 넓게 치는 이유를 관찰하세요 (A가 오픈레이저에게 유리한 카드).` | 🟢 |
| ② | `A하이 보드와 비교해보세요. K 보드도 BTN 우위지만 미묘하게 체크가 늘어납니다. 왜일까요?` | 🟢 |
| ③ | `양쪽 다 맞은 것처럼 보이는 보드. 그런데 BB는 13스팟 중 에퀴티 실현율이 가장 낮습니다 — 77.9%, BTN은 119.4%. BB가 99.9% 체크하는 이유를 핸드 분류 패널에서 확인하세요.` | 🟢 정정본 |
| ④ | `콜러(BB) 우위 보드의 대표. BTN의 C벳 빈도가 뚝 떨어지는 것을 확인하세요 — '무조건 C벳'이 왜 틀린지 배우는 스팟.` | 🔴 **M-035 결함1·2 — ko가 원본** |
| ⑤ | `큰 벳이 사라지고 작은 벳/체크 위주가 되는 이유. 플러시 완성 핸드도 자주 체크하는 것을 관찰하세요.` | 🟢 |
| ⑥ | `아무도 잘 못 맞춘 보드 → 블러프 비중이 올라갑니다. 어떤 핸드가 블러프 벳을 하는지 상세 표에서 찾아보세요.` | 🟢 |
| ⑦ | `오버카드 싸움. BB의 체크레이즈 빈도가 높아지는 보드 — 상단 스트립에서 벳 이후 응수를 따라가 보세요.` | 🔴 **RP-19 + 조작 지시 — ko가 원본** |
| ⑧ | `3벳 레인지(AK, AA, KK 다수)에 최고의 보드. 낮은 SPR에서 작은 벳으로 레인지 전체를 압박하는 패턴.` | 🔴 **RP-03 — ko가 원본** |
| ⑨ | `3벳팟인데 콜러에게도 좋은 카드가 많은 보드. 그런데 3벳터는 멈추지 않습니다 — 98.4%가 같은 2/3 사이즈로 나갑니다. 체크로 남는 0.8%가 어떤 핸드인지 보세요.` | 🟢 정정본 |
| ⑩ | `3벳 레인지가 통째로 빗나간 보드. 그래도 오버페어+A하이로 압박이 가능한 이유 — 에퀴티 vs 폴드에퀴티.` | 🔴 **RP-17 결함형(「통째로」) — 🆕 이번에 발견** |
| ⑪ | `블라인드전은 레인지가 넓어 서로 약합니다. 같은 K 보드라도 BTN vs BB 때와 빈도가 어떻게 다른지 비교.` | 🟢 |
| ⑫ | `와이드 레인지끼리 만나는 초연결 보드. 투페어·스트레이트·드로우가 쏟아집니다. 분류 패널이 화려한 스팟.` | 🟢 |
| ⑬ | `A가 2장 깔린 특수 보드. 트립스는 드물지 않습니다 — SB가 88콤보로 BB(66콤보)보다 많아서 SB가 80.1%를 칩니다. 어느 쪽이 A를 더 들고 있는지가 이 보드의 전부입니다.` | 🟢 정정본 |

🪶 ko 화면에는 각 스팟에 **「해설 보기」 버튼**이 추가로 있다(13편 발행분 링크 — 다른 언어에는 없다).

## 4. 13스팟 축어 — en

| # | 앱 note (축어) | 판정 |
|---|---|---|
| ① | `The textbook range-advantage spot. Watch how wide a range BTN c-bets small with after BB checks — the ace smashes the opener's range.` | 🟢 |
| ② | `Compare with the ace-high board. King-high still favors BTN, but BTN starts checking a bit more. Can you tell why?` | 🟢 |
| ③ | `A board that looks like it hits both ranges. But BB realizes less equity here than in any of the 13 spots — 77.9% against BTN's 119.4% — and checks 99.9%. The hand-category panel shows why.` | 🟢 정정본 |
| ④ | `The classic caller-friendly texture. BTN's c-bet frequency plummets — this spot shows exactly why “always c-bet” is wrong.` | 🔴 **M-035 결함1·2** |
| ⑤ | `Watch why big bets disappear in favor of small bets and checks. Notice how often even made flushes just check.` | 🟢 |
| ⑥ | `Nobody connects with this board, so the bluffing frequency goes up. Use the detail table to find which hands bet as bluffs.` | 🟢 |
| ⑦ | `An overcard war — BB check-raises often on this texture, so follow the top strip past a bet to see the responses.` | 🔴 **RP-19 + 조작 지시** |
| ⑧ | `The best possible flop for the 3-bettor, whose range is loaded with AK, AA and KK. At low SPR, small bets pressure the entire range.` | 🔴 **RP-03** |
| ⑨ | `A 3-bet pot on a board that suits the caller as well — and yet the 3-bettor doesn't slow down: 98.4% of the range fires the same two-thirds size. See which hands make up the 0.8% that checks.` | 🟢 정정본 |
| ⑩ | `A board that largely misses the 3-bettor's range — yet overpairs and ace-high hands keep the pressure on. Equity vs fold equity.` | 🟢 완화형(`largely`) |
| ⑪ | `Blind vs Blind ranges are wide, so both ranges are weak. Compare the frequencies to the BTN-vs-BB Dry King-High Board spot.` | 🟢 |
| ⑫ | `Two wide ranges collide on an ultra-connected board: two-pair hands, straights, and draws everywhere. The hand-category panel shines here.` | 🟢 |
| ⑬ | `Two aces on the board. Trips aren't rare — SB simply holds more of them (88 combos to BB's 66), so SB bets 80.1%. Who holds more aces is the whole story here.` | 🟢 정정본 |

## 5. 13스팟 축어 — zh (간체)

| # | 앱 note (축어) | 판정 |
|---|---|---|
| ① | `这是范围优势的教科书。BB 过牌之后，看看 BTN 为什么能用非常宽的范围去下小注——A 这张牌正好打中了开池方的范围。` | 🟢 |
| ② | `和 A 高牌面比一比。K 高牌面同样是 BTN 占优，但过牌会稍微多一点。为什么呢？` | 🟢 |
| ③ | `看着像两边都打中的牌面。可 BB 的权益实现在 13 个案例里是最低的——77.9%，BTN 是 119.4%。BB 为什么 99.9% 都过牌，到“手牌/听牌”面板里找答案。` | 🟢 정정본 |
| ④ | `跟注方（BB）占优牌面的代表。你会看到 BTN 的 c-bet 频率直接掉下来——这个局面就是在告诉你，为什么“逢翻必 c-bet”是错的。` | 🔴 **M-035 결함1·2** |
| ⑤ | `看看大注为什么消失了，只剩下小注和过牌。注意连已经成同花的牌都经常只过牌。` | 🟢 |
| ⑥ | `谁都不太容易打中的牌面，诈唬（bluff）的频率就上去了。到详情表里找找看，是哪些手牌被当作诈唬来下注。` | 🟢 |
| ⑦ | `一场高张（overcard）之争。这种牌面上 BB 的过牌加注频率会变高——到顶部动作条上，顺着下注之后的应对一路点下去看看。` | 🔴 **RP-19 + 조작 지시** |
| ⑧ | `对 3bet 范围（一堆 AK、AA、KK）来说最好的翻牌。SPR 低的时候，这是用小注压住对手整个范围的典型打法。` | 🔴 **RP-03** |
| ⑨ | `虽然是 3bet 底池，但这个牌面对跟注方也不差。可 3bet 方并不会收手——98.4% 的范围都用同一个 2/3 尺寸打出去。看看剩下过牌的 0.8% 是哪些手牌。` | 🟢 정정본 |
| ⑩ | `3bet 范围整个都没打中的牌面。可即便如此，超对和 A 高牌照样能施压——比的是胜率和 fold equity（弃牌率）。` | 🔴 **RP-17 결함형(「整个」)** |
| ⑪ | `盲位对战双方范围都宽，所以到了翻牌两边都比较弱。同样是 K 高牌面，和 BTN vs BB 时的频率比一比，差在哪里。` | 🟢 |
| ⑫ | `两个宽范围撞上一个连张性极强的牌面。两对、顺子、听牌满地都是——这是“手牌/听牌”面板最热闹的一个局面。` | 🟢 |
| ⑬ | `牌面上摆着两张 A 的特殊局面。明三条（trips）并不少见——SB 有 88 个组合，BB 只有 66 个，所以 SB 打出 80.1%。谁手里的 A 更多，就是这个牌面的全部。` | 🟢 정정본 |

## 6. 13스팟 축어 — zh-hant (번체)

> 간체와 **문장 구조가 완전히 평행**하다(용어만 번체 관습 — 權益→勝率實現, 動作條→動作列, 棄牌率→棄牌權益).
> 결함 판정도 간체와 동일: **④ 🔴 · ⑦ 🔴 · ⑧ 🔴 · ⑩ 🔴(「整個」)** · ③⑨⑬ 🟢 정정본.

| # | 앱 note (축어 · 결함/정정 행만 전문) | 판정 |
|---|---|---|
| ③ | `看著像兩邊都打中的牌面。可 BB 的勝率實現在 13 個案例裡是最低的——77.9%，BTN 是 119.4%。BB 為什麼 99.9% 都過牌，到「手牌/聽牌」面板裡找答案。` | 🟢 정정본 |
| ④ | `跟注方（BB）佔優牌面的代表。你會看到 BTN 的 c-bet 頻率直接掉下來——這個局面就是在告訴你，為什麼「逢翻必 c-bet」是錯的。` | 🔴 **M-035 결함1·2** |
| ⑦ | `一場高張（overcard）之爭。這種牌面上 BB 的過牌加注頻率會變高——到頂部的動作列上，順著下注之後的應對一路點下去看看。` | 🔴 **RP-19 + 조작 지시** |
| ⑧ | `對 3bet 範圍（一堆 AK、AA、KK）來說最好的翻牌。SPR 低的時候，這是用小注壓住對手整個範圍的典型打法。` | 🔴 **RP-03** |
| ⑨ | `雖然是 3bet 底池，但這個牌面對跟注方也不差。可 3bet 方並不會收手——98.4% 的範圍都用同一個 2/3 尺寸打出去。看看剩下過牌的 0.8% 是哪些手牌。` | 🟢 정정본 |
| ⑩ | `3bet 範圍整個都沒打中的牌面。但即便如此，超對和 A 高牌照樣能施壓——比的是勝率和棄牌權益（fold equity）。` | 🔴 **RP-17 결함형(「整個」)** |
| ⑬ | `牌面上擺著兩張 A 的特殊局面。明三條（trips）並不少見——SB 有 88 個組合，BB 只有 66 個，所以 SB 打出 80.1%。誰手裡的 A 更多，就是這個牌面的全部。` | 🟢 정정본 |

## 7. 솔버에 통지할 근거 정리 (이 실측으로 확정)

| 결함 | 언어 확인 | 정본 |
|---|---|---|
| ④ 콜러 우위 + C벳 빈도 붕괴 | **8/8 전 언어**(ko en ja es pt de zh zh-hant) | KO ④: 리드 23.7%가 「우위」는 아니다(48.5 대 51.5) · C벳 빈도는 화면에 없다 |
| ⑦ 체크레이즈 빈도 단언 + 「벳 뒤를 따라가라」 | 5/5(이번 실측분 — ja·es·pt는 문안 상이 여부만 미대조) | KO ⑦ 239줄: 화면은 BB 첫 액션(체크 96.8 · 벳 3.2)에서 멈춘다 |
| ⑧ 「낮은 SPR이라 작은 벳」 | 5/5 | KO ⑧: 사이즈를 정하는 것은 레인지의 모양(⑨ 98.4% 반례) |
| ⑩ 「통째로/整個 빗나감」 | ko·zh·zh-hant 3개(en·de는 완화형 통과) | KO ⑩ 142줄: 거트샷 4.8 + 백도어 16.9 + 없음 78.3 |
