# 승률 시뮬레이터 언어 확대 1차(LTR) — 언어별 헤드텀·SERP 근거

> 회차 L1(2026-10-13~ · 한 세션 = 한 언어 · 순서 pt → fr → id → ms → vi → tr → hi → ru). 선례 = ja·zh·es·de(`7f9dcb59` · 근거는 각 page.tsx 머리 주석).
> 도구 = DFS `keywords_data/google_ads/search_volume/live`(location만 · language 생략) + `serp/google/organic/live/regular`(mobile).
> 원칙: 제목 머리 = «시뮬레이터» 축. «계산기·odds·probabilidade»류는 `/{locale}/calculator` 소유라 제목 머리에 쓰지 않는다.

## pl (Poland 2616 · 2026-10-16)

| Keyword | Volume | Decision |
|---|--:|---|
| **quiz poker** | **10** | Title, H1 and HubPage: Quiz poker |
| poker trainer | 50 | Supporting training intent |
| symulator pokera | 20 | Not the head term |
| poker simulator | 260 | Game intent dominates; excluded from the head |

- Reuses [pl-tools.md](pl-tools.md) §1, §2-E and §4; no new measurement.
- Title: «Quiz poker: trenuj equity i decyzje». Description starts with «Trening pokerowy» and explicitly limits the pot-odds explanation to the flop onward.
- No Polish pot-odds or position guide exists. Footer links only to the calculator supplied by Lane A; no EN post fallback and no /pl/solver link.

## it (Italy 2380 · 2026-10-16)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **quiz poker** | **70** | 제목·H1·HubPage «Quiz poker» |
| poker trainer | 70 | 훈련 의도 보조어 |
| allenamento poker · esercizi poker | 각 10 | 설명·본문 |
| simulatore poker | 110 | 계산기·게임 SERP 혼재 → 제목 머리 제외 |

- 재측정 없음. 근거 = [it-tools.md](it-tools.md) §1·§2-C·§4 (DFS 2380 · it · 2026-10-16).
- 제목 «Quiz poker: allena equity e decisioni» · equity 추정과 call/fold 연습 의도. «simulatore» 머리보다 이 회차 언어별 결정(§4)을 우선한다.

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

## ms (Malaysia 2458 · 2026-10-13)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **simulator poker** | **40** | ✅ 제목 머리 · H1 · 브레드크럼 · 사이드 레일 — «poker simulator»와 12개월 시계열 완전 동일(같은 군 · 20~70) |
| poker simulator(영문) | 40 | 위와 같은 군 |
| poker trainer · poker training · poker equity · equity poker · pot odds · texas holdem simulator · poker simulator online · belajar poker · poker practice · poker quiz | 각 10 | — |
| simulasi poker · latihan poker · berlatih poker · kuiz poker · simulator poker percuma · latihan poker percuma | 데이터 없음 | 🔴 말레이어 «훈련» 명사 전멸 — id와 같은 패턴 |
| cara main poker 170 · permainan poker 140 | — | 참고(규칙·게임 의도 · 이 페이지 몫 아님) |

- SERP «simulator poker»(mobile · ms · Malaysia): 1 cardplayer 계산기 · 2 pokernews 계산기 · 3 pokertrainer.se(훈련형) · 4 aarp(게임) · 5 arkadium(게임) · 6 GTO Wizard · 7 Steam «Poker Simulator» · 8 pokerstrategy 소프트웨어 목록 · 9 pokerlistings 계산기. → 영어 글로벌 판 · 말레이어 페이지 0.
- 제목 = «Simulator Poker untuk Latihan: Bilakah Anda Patut Fold?» — 머리어 + 훈련 의도(«untuk Latihan» 볼륨 미측정 · 게임 SERP와 구분용). 제목 «Anda» = Title Case(ms-posting-reference §2) · 메타 문중은 소문자 «anda».
- 카니발: `/ms/calculator` 메타·사전에 «simulator» 0회(10-13 grep) → 머리어 충돌 없음.
- 🔴 id판에서 옮겨 쓰지 않았다(인니어 잔재 kartu·bisa·karena·tinjau → kad·boleh·kerana·semak · ms-posting-reference §3).
- 용어(코퍼스 `lib/posts-ms` · 10-13 grep): tangan 1.796(hand 92) · fold 797 · call 1.006 · all-in 280 · showdown 149 · seri 146 · split pot 24 · preflop 240(pre-flop 28) · flush draw 101 · straight draw 37 · top pair 81 · overpair 97 · overcard 26 · pot odds 113 · implied odds 88 · pulang modal 29(break-even 3) · street 133 · kombinasi 38(combo 15) · board 893(papan 4) · range 674(julat 42) · anda 2.715(Anda 258 · kamu 0).

## vi (Vietnam 2704 · 2026-10-13)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **poker simulator** | **40** | ✅ 제목 머리 · H1 · 브레드크럼 · 사이드 레일 — «simulator poker»와 12개월 시계열 완전 동일(같은 군 · 30~70) |
| chơi poker online miễn phí 40 · học poker 30 · poker equity 30 · pot odds 20 | — | 설명·본문(«chơi … miễn phí»는 게임 의도라 메타 제외) |
| poker trainer · poker training · poker quiz · poker practice · texas holdem simulator · tập chơi poker | 각 10 | — |
| mô phỏng poker · giả lập poker · luyện poker · luyện tập poker · tính equity poker | 데이터 없음 | 🔴 베트남어 «훈련·모의» 명사 전멸 — id·ms와 같은 패턴 · vi 계산기 «Poker Calculator»와 같은 영어 머리 |
| cách chơi poker 2.900 · game poker 720(CPC 3,65) | — | 참고(규칙·게임 의도 · 이 페이지 몫 아님) |

- SERP «poker simulator»(mobile · vi · Vietnam): 1 pokertrainer.se 퀴즈 · 2 kosmi(게임) · 3 Pokerist(게임) · 4 optimuspoker(게임) · 5 Upswing(훈련) · 6 Pokerist es · 7 shapes.inc(AI 챗) · 8 Zynga es · 9 Upswing 퀴즈. → 영어 글로벌 판 · 베트남어 페이지 0.
- 제목 = «Poker Simulator để luyện tập: lẽ ra bạn nên fold ở đâu?» — 머리어 + 훈련 의도(«để luyện tập» 볼륨 미측정 · 게임 SERP와 구분용).
- 카니발: `/vi/calculator` 메타·사전에 «simulator» 0회(10-13 grep) → 머리어 충돌 없음.
- 용어(코퍼스 `lib/posts-vi` · 10-13 grep): tay bài 987 · đối thủ 438 · vòng cược 219(street 6) · board 1.239(bài chung 118) · combo 346(tổ hợp 66) · chia pot 135 · hòa 128 · showdown 189 · top pair 110 · overpair 115 · overcard 27 · implied odds 117 · hòa vốn 37 · aggressive 25(hung hãn 11 · 성향 이름 = «Chuẩn»·«Hung hãn» — 390 선택 상자 잘림 회피) · điểm phần trăm 11. 족보 = 계산기 사전 Title Case(Mậu Thầu … Thùng Phá Sảnh).

## tr (Türkiye 2792 · 2026-10-13)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **poker simulator** | **30** | ✅ 제목 머리 · H1 · 브레드크럼 · 사이드 레일 — «simulator poker»와 12개월 시계열 완전 동일(같은 군 · 20~50) |
| **poker öğren · poker öğrenme** | **50** | ✅ 제목 «ile poker öğren»(두 형 시계열 동일 · 40~70) |
| poker trainer · poker training · poker equity · pot odds · poker quiz · texas holdem simulator · poker simulator online | 각 10 | — |
| poker simülatörü · poker simülasyonu · poker simulatoru · poker antrenman(ı) · poker pratik · poker alıştırma | 데이터 없음 | 🔴 터키어 «시뮬레이터·훈련» 명사 전멸 — vi·id·ms와 같은 패턴 |
| poker nasıl oynanır 5.400 · poker oyunu 1.600 | — | 참고(규칙·게임 의도 · 이 페이지 몫 아님 · «oyunu»는 메타 제외) |

- SERP «poker simulator»(mobile · tr · Türkiye): 1 pokertrainer.se 퀴즈 · 2 funnygames(게임) · 3 tightpoker 계산기 · 4 religionandstory(훈련형 · 개발 중) · 5 PokerStars Learn · 6 beatthefish 계산기 · 7 shapes.inc(AI 챗). → 영어 글로벌 판 · 터키어 페이지 0.
- 제목 = «Poker Simulator ile poker öğren: nerede fold etmeliydin?» — 머리어 + 실측 훈련 의도어(«poker öğren» 50).
- 카니발: `/tr/calculator` 메타·사전에 «simulator» 0회(10-13 grep) → 머리어 충돌 없음.
- 용어(코퍼스 `lib/posts-tr` + 계산기 사전 · 10-13 grep): fold 302(fold et 72) · call 500 · check 330 · all-in 268 · showdown 164 · beraberlik 52 · pot bölün 40(split pot 17) · preflop 163 · kent draw 19(straight draw 0) · flush draw 8 · top pair 49 · overpair 34 · overcard 23 · pot odds 76 · pot oranı 60 · implied odds 45 · kombo 47(kombinasyon 23 · combo 3) · board 443 · range 218(aralık 9) · equity 205 · yüzde puan 4 · agresif 24. 🔴 «pas» 금지(10-06 확정) · 퍼센트 «%35»(접두).

## hi (India 2356 · 2026-10-13)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **poker simulator** | **170** | ✅ 제목 머리 · H1 · 브레드크럼 · 사이드 레일 (12개월 110~210 안정) |
| **poker practice** | **90** | ✅ 제목 «से poker practice»(12개월 50~140) |
| poker practice online | 210 | 🪶 26-04~08 스파이크(170→480 · 그 전 50~110) · 게임 의도 섞임 → 미채택 |
| poker equity calculator 110 · pot odds 20 | — | `/hi/calculator` 몫 |
| poker trainer · poker training 50 · poker quiz 40 · poker equity · poker simulator online 20 · texas holdem simulator 10 | — | — |
| पोकर सिम्युलेटर · पोकर सिमुलेटर · पोकर अभ्यास · पोकर सीखें · poker sikhe · poker seekhe | 데이터 없음 | 🔴 데바나가리 도구구 전멸 — 계산기 «머리어 영어 유지» 판정(`hi-calculator.md` §5)과 같은 패턴 |
| poker game 22,200 · poker kaise khelte hain 70 | — | 참고(게임·규칙 의도 · 이 페이지 몫 아님 · «game»은 메타 제외) |

- SERP «poker simulator»(mobile · hi · India): 247games · 247freepoker ×2 · IEEE 논문 · MSN Zone · WaPo Arkadium · reddit «practise against ai» · Google Play · Arkadium → 영어 게임 판 · 힌디어 페이지 0 · 훈련형 0.
- 제목 = «Poker Simulator से poker practice: कहाँ fold करना था?» — 머리어 + 실측 훈련 의도어 + 데바나가리 질문 꼬리.
- 카니발: `/hi/calculator` 메타·사전에 «simulator» 0회(10-13 grep) → 머리어 충돌 없음.
- 용어(코퍼스 `lib/posts-hi` 21편 + 계산기 사전 · 10-13 grep): equity 162(इक्विटी 1) · fold 219 · call 438 · all-in 158 · showdown 95 · बराबरी 7(टाई 14 · 계산기 = बराबरी) · pot odds 18(पॉट ऑड्स 0) · कॉम्बो 297(combo 18) · range 467(रेंज 0) · बोर्ड 337(board 145) · विरोधी 49(प्रतिद्वंद्वी 75 · 계산기 = विरोधी) · top pair 36 · overpair 68 · overcard 18 · flush draw 24 · straight draw 17 · street 53 · प्रतिशत अंक 5 · अभ्यास 72. 숫자 = en-US(«1,000» · «35%» · लाख 묶음 0건).
- 푸터: hi에 pot odds·포지션 글이 없다 → `/hi/calculator` · `/hi/hand-chart` · `/hi/blog/holdem-betting-actions`(실재 확인).

## ru (러시아어 대리 측정 · 2026-10-13)

> 러시아 2643은 DFS 밖 → language ru · 지역 무지정(러시아어권 합산) · SERP = google.kz(2398) — `ru-calculator.md` 머리 절과 같은 방식.

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **покерный тренажер · покер тренажер** | **110** | ✅ 제목 머리 «Покерный тренажёр» · H1 · 브레드크럼 · 사이드 레일 (12개월 70~140 안정) |
| **симулятор покера** | **50** | ✅ 메타 첫 구 «Бесплатный симулятор покера» |
| покерный симулятор · покер симулятор · тренажер покера | 30 | — |
| тренировка покер · покер тренировка 20 · симулятор покера онлайн · тест по покеру · техасский холдем симулятор 10 | — | — |
| обучение покеру 390 · покер обучение 210 · научиться играть в покер 210 | — | 참고(강좌·규칙 의도 · 이 페이지 몫 아님) |
| покер с ботами 210 · покер без денег 50 | — | 🔴 게임 의도 · 제목·메타 제외 |
| покер квиз · симулятор холдема | 데이터 없음 | — |

- SERP «покерный тренажер»(google.kz · ru · desktop): pokeroff(PreflopHero) · reddit ×2 · YouTube(Simple GTO Trainer) · rangecraftpoker · pokerful 글 · Google Play ×2 · poker.ru(Simple GTO Trainer) · pokerstrategy 포털 → 설치형 GTO·프리플랍 트레이너뿐 · 브라우저 핸드 시뮬레이터 0. 관련검색 «Бесплатный покерный тренажер»·«Покер онлайн тренировка».
- 제목 = «Покерный тренажёр онлайн: где нужно было сбросить?» — 머리어 + «онлайн»(설치 소프트와 구분) + 질문 꼬리.
- 카니발: `/ru/calculator` 사전·FAQ에 «тренаж»·«симулят» 0회(10-13 grep) → 충돌 없음.
- 용어(코퍼스 `lib/posts-ru` 6편 + 계산기 사전 + `/ru/solver` · 10-13 grep): колл 149 · фолд 77(сброс- 77) · чек 102 · рейз 284 · олл-ин 171 · вскрытие 92(шоудаун 0) · диапазон 72(рейндж 0) · эквити 57 · пот-оддсы 27 · имплайд 13 · соперник 48(оппонент 0) · оверкарта 15 · флеш-дро 9 · стрит-дро 5 · топ-пара 7 · комбо 7 · п.п. 34. 족보 = 계산기 사전(«Тройка»). 숫자 = ru-RU(«1 000» · «0,25» · «35%»).
- 푸터: ru에 pot odds·포지션 글이 없다 → `/ru/calculator` · `/ru/blog/texas-holdem-rules-for-beginners`(«Как работают пот-оддсы» 절 실재) · `/ru/blog/holdem-betting-actions`.

## th (Thailand 2764 · 2026-10-17 · tools lane B)

Source: docs/keyword-bank/th-tools.md sections 1, 2-E and 4; no new measurement.

| Keyword | Monthly volume | Decision |
|---|--:|---|
| poker quiz | 10 | Quiz/training head, paired with ควิซโป๊กเกอร์ |
| poker trainer | 10 | Supporting training intent |
| poker simulator | 40 | Excluded from the head: game/app intent |
| เกมโป๊กเกอร์ | 880 | Excluded: game/app intent |
| จำลองโป๊กเกอร์ · ฝึกเล่นโป๊กเกอร์ | no data | No demand claim |

Head: ควิซโป๊กเกอร์: poker quiz ฝึก equity. Latin digits, comma thousands, decimal point, 35% without a gap. Pot odds starts at the flop. Missing pot-odds/position posts omitted; calculator is the explicit Lane A integration dependency. External solver keeps lang=en and (ภาษาอังกฤษ).

## zh-hant (Taiwan 2158 · 2026-10-14 · tool-lanes 🅰)

> DFS `keywords_data/google_ads/search_volume/live`(2158 · `language_code` 생략 — `zh-hant-calculator.md` 머리 절과 같은 방식) · SERP `serp/google/organic/live/advanced`(2158 · `zh-TW` · mobile/android · 2건) · 구글 자동완성(`client=firefox` · `hl=zh-TW` × `gl=TW`/`HK` · 10시드 · TW = HK 완전 동일).

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **德州撲克線上練習** | **70** | ✅ 머리어 후보(12개월 50~110 안정) · 자동완성 «線上 德州 撲克 練習» 살아 있음 |
| **德州撲克練習** | **30** | ✅ 자동완성 확장 «練習 app · 練習網站 · 練習器 · 練習軟體» |
| 德州撲克模擬器 | 20 | 🟠 볼륨은 있으나 자동완성 0 · SERP에 «夜神模擬器»(안드로이드 에뮬레이터) 소음 → 보조어 |
| poker simulator · poker trainer | 10 | — |
| 德州撲克勝率 210 · 德州撲克勝率計算器 260 | — | 🔴 `/zh-hant/calculator` 소유 — 제목 머리에 쓰지 않는다(카니발) |
| 德州撲克教學 480 | — | 강좌·규칙 의도(이 페이지 몫 아님) |
| 德州撲克線上 390 · 德州撲克線上免費 320 · 德州撲克遊戲 210 · 德州撲克單機 70 · 德州撲克免費 20 | — | 🔴 게임·리얼머니 플랫폼 의도 — 제목·메타 제외 |
| 撲克模擬器 · 德州撲克訓練 · 德撲模擬器 · 德州撲克勝率模擬器 · 撲克練習 · 德州撲克測驗 · 德州撲克模擬 · 德州撲克訓練軟體 · 德州撲克練習app · 德州撲克 蓋牌時機 | null | 근거로 쓰지 마라 |

- SERP «德州撲克線上練習»: monsterstack(플랫폼 순위) · 앱 팩(Poker Trainer · **NTPoker «GTO德州撲克訓練器»** · River GTO 教學) · pokertaiwan ×3 · reddit(zh-hant 기계번역) · nakuz · natural8 · pixnet → 리얼머니 플랫폼 소개가 다수 · **브라우저에서 바로 치는 연습 도구 0**.
- SERP «德州撲克模擬器»: BGA(브라우저 게임) · 앱 팩(NTPoker · Poker Trainer · Poker Calculator) · viegg·dongpaidi(간체 승률 계산기) · reddit «最好的撲克模擬器？» · App Store 撲克AI · 夜神模擬器 · taiwanrounders 機率表 · 巴哈姆特. 관련검색 «德州撲克網頁版 · 德州撲克勝率計算器 · 德州撲克練習 · 德州撲克線上練習».
- 판단: 머리 = «德州撲克線上練習»(볼륨·자동완성 둘 다 산 유일한 연습 의도어) + 페이지명에 «模擬器» 보조. 계산기 사전·FAQ에 «練習·模擬器·訓練» 1회(faq.ts)뿐 → 충돌 없음(10-14 grep).
