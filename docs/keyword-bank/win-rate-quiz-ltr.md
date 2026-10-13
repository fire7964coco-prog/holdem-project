# 승률 시뮬레이터 언어 확대 1차(LTR) — 언어별 헤드텀·SERP 근거

> 회차 L1(2026-10-13~ · 한 세션 = 한 언어 · 순서 pt → fr → id → ms → vi → tr → hi → ru). 선례 = ja·zh·es·de(`7f9dcb59` · 근거는 각 page.tsx 머리 주석).
> 도구 = DFS `keywords_data/google_ads/search_volume/live`(location만 · language 생략) + `serp/google/organic/live/regular`(mobile).
> 원칙: 제목 머리 = «시뮬레이터» 축. «계산기·odds·probabilidade»류는 `/{locale}/calculator` 소유라 제목 머리에 쓰지 않는다.

## pt (Brazil 2076 · 2026-10-13)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| poker simulator(영문) | 110 | 토큰 공유(«simulador» ≈ simulator) |
| poker trainer(영문) | 90 | 훈련 의도 존재 근거 |
| **simulador de poker** | **70** | ✅ 제목 머리 · H1 · 브레드크럼 |
| **treinar poker** | **40** | ✅ 제목 «para treinar» |
| simulador poker | 30 | 머리어와 토큰 동일 |
| equity poker / poker equity | 20 | 설명·본문 |
| simulador de poker online · gratis · texas holdem · treino de poker · treinador de poker · quiz de poker | 각 10 | — |
| simulador de mãos de poker · simulador equity poker · simulador holdem · jogo/poker para treinar | 데이터 없음 | — |

- SERP «simulador de poker»: 1 247freepoker(게임) · 2 megajogos(게임) · 3 reddit «Existe um bom simulador de pôquer gratuito?» · 4 PokerNews BR 계산기 · 7·9 정부 도메인 스팸(앱 미러) · 8 zynga · 10 pokertrainer.se(훈련형) · 11 Steam. → 놀이/훈련 혼재 · 훈련형 자리는 약함.
- 제목 = «Simulador de poker para treinar: onde você devia ter foldado?» — 머리어 + 훈련 의도로 게임 SERP와 구분.
- 계산기 뱅크(`pt-calculator.md`)의 «simulador de poker 70 = 게임 의도 · 미채택»은 **계산기 제목** 판정이다. 시뮬레이터 페이지가 그 자리를 가져간다(카니발 없음).

## fr (France 2250 · 2026-10-13)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| poker simulator(영문) | 390 | 토큰 공유(«simulateur» ≈ simulator) · 12개월 210~480 |
| **simulateur poker** | **170** | ✅ 제목 머리 · H1 · 브레드크럼 · 사이드 레일 (12개월 140~260) |
| exercice poker | 110 | 🪶 스파이크 섞임(260·210) · 본문 미채택 |
| équité poker | 110 | 설명·본문 «équité»(계산기 뱅크 §3-B와 같은 표기) |
| **entrainement poker** | **90** | ✅ 제목 «pour s'entraîner» |
| poker trainer(영문) | 90 | 훈련 의도 존재 근거 |
| simulateur poker gratuit | 50 | desc «gratuit» 미채택(계산기 desc가 «gratuit» 머리) |
| poker equity(영문) · quiz poker | 50 · 40 | — |
| simulateur de poker · s'entrainer au poker · simulateur main poker | 30 | 🔴 «de»형은 무전치사형의 1/6 — 계산기 뱅크 §1-A와 같은 패턴 |
| simulateur probabilité poker · poker entrainement gratuit | 10 | — |
| simulateur poker en ligne · texas holdem · holdem · cote · équité · entraineur poker | 데이터 없음 | — |

- SERP «simulateur poker»(mobile · fr · France): 1 pokerlistings «Quelle main gagne ?» 계산기 · 3 peppermillcasino.be «Simulateur poker : entraînez-vous» · 4 poktools 에퀴티 계산기 · 5 pokerlistings 확률 계산기 · 6 jeuxclic(게임) · 7 vmaths «Simulateur Poker Texas Hold'em — Calculateur d'odds» · 8 playpager(3카드 게임) · 10 aipoker-simulator «Entraînement poker avec IA» · 11 wikipedia «Probabilité au poker». → 계산기·훈련·게임 혼재. 훈련형 자리는 2개(peppermill 블로그 · aipoker)뿐이고 «상대 카드를 못 본 채 에퀴티 추정 → 복기»는 0.
- 제목 = «Simulateur poker pour s'entraîner : quand fallait-il te coucher ?» — 머리어 + 훈련 의도로 계산기 SERP와 구분. «Calculateur»·«cote»·«probabilité»는 `/fr/calculator` 소유라 제목에 쓰지 않는다.
- 카니발: 계산기 뱅크 `fr-calculator.md` §1 «simulateur poker 170 = desc 1회만»은 **계산기** 판정이고, 실제 `/fr/calculator` 메타·사전에는 «simulateur»가 0회다(10-13 grep) → 시뮬레이터 페이지가 이 머리어를 가져간다.
- 용어(코퍼스 `lib/posts-fr` 52편 · 10-13 grep): se coucher 191(folder 12) · suivre 195 · relance 692 · tapis 277(all-in 173) · pot partagé 36 · préflop 333(pré-flop 0) · tirage couleur 145 · tirage quinte 56 · top paire 109 · overpair 93 · équité 432(equity 101) · cotes du pot 66(pot odds 16) · cotes implicites 112 · abattage 144(showdown 70) · street 84.

## id (Indonesia 2360 · 2026-10-13)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **simulator poker** | **110** | ✅ 제목 머리 · H1 · 브레드크럼 · 사이드 레일 — «poker simulator»와 12개월 시계열 완전 동일(같은 군 · 50~260 · 08월 260 상승) |
| poker simulator(영문) | 110 | 위와 같은 군 |
| belajar poker | 30 | — (일반 학습 의도) |
| poker trainer · poker training · equity poker · poker equity · quiz poker · pot odds · texas holdem simulator · poker simulator online | 각 10 | — |
| simulasi poker · latihan poker · latihan poker online · game latihan poker · berlatih poker · kuis poker · simulator poker gratis · simulator texas holdem | 데이터 없음 | 🔴 인니어 «훈련» 명사는 전멸 — 계산기 뱅크 §1 «인니어 계산기 명사 전멸»과 같은 패턴 |
| cara main poker | 4.400 | 참고(규칙 의도 · 이 페이지 몫 아님) |

- SERP «simulator poker»(mobile · id · Indonesia): 1 Play «Poker Online»(게임) · 2 boardgamearena · 5 247games · 6 kosmi · 7 chipsoffury(칩 카운터) · 8 Steam «Poker Simulator» · 9 beavergrow(칩 카운터) · 10 religionandstory «poker simulator … improve your poker skills»(영어 · 개발 중) · 11 softonic «Poker Betting Simulator». → 게임·칩 앱 지배 · 인니어 훈련형 0 · «상대 카드를 못 본 채 에퀴티 추정 → 복기» 자리 0.
- 제목 = «Simulator Poker untuk Latihan: Kapan Seharusnya Anda Fold?» — 머리어 + 훈련 의도(«untuk Latihan» 볼륨 미측정 · 게임 SERP와 구분용).
- 카니발: `/id/calculator` 메타·사전에 «simulator» 0회(10-13 grep) → 머리어 충돌 없음.
- 🔴 id 고유: 메타·본문에 taruhan·judi 등 도박 홍보로 읽히는 말을 쓰지 않는다(translation-terms-id ★2).
- 용어(코퍼스 `lib/posts-id` · 10-13 grep): fold 905 · call 1.075 · all-in 327 · showdown 177 · seri 508(imbang 80) · split pot 35 · preflop 340(pre-flop 2) · flush draw 132 · straight draw 45 · top pair 112 · overpair 120 · overcard 32 · pot odds 170 · implied odds 115 · street 167 · combo 343(kombinasi 71) · Anda 3.962(kamu 2).
