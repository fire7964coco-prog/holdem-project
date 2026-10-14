# fr 대회 보드 키워드 뱅크 — `/fr/tournaments` (2026-10-14)

> 회차 = tool-lanes 🅱(`docs/tool-lanes-2026-10-14.md`). 도구 = DataForSEO `keywords_data/google_ads/search_volume/live`(`location_code: 2250` France · language 생략) ·
> `serp/google/organic/live/advanced`(2250 · fr · desktop · depth 10) · 구글 공개 자동완성(`suggestqueries` hl=fr·gl=fr · 시드 3).
> 🔴 CPC는 근거로 쓰지 않는다(`docs/rakko-playbook.md`).

## 1. 볼륨 (월 · France)

| 축 | 검색어 | 볼륨 | 메모 |
|---|---|---:|---|
| 머리 | **tournoi poker** (= tournoi de poker · 구글이 한 묶음으로 낸다) | **1,900** | 12개월 1,600~2,400 안정 |
| 기간형 | **calendrier tournoi poker 2026** | **390** | 2026-01~03 **720** · 연초 피크 → 2027년판이 12월부터 오른다 |
| | tournois de poker | 170 | |
| | tournoi poker france | 170 | |
| | tournoi poker live | 140 | |
| | tournoi poker 2026 | 50 | |
| | festival poker | 70 | |
| | agenda poker · calendrier tournoi poker(연도 없음) | 20 · 10 | |
| 도시 | tournoi poker paris | 880 | 보드의 Paris 행 2건은 이미 종료(EPT 2월 · WSOPC 9월) |
| | **tournoi poker aix en provence** | **390** | 보드 `ps-open-aix`(11/2~8) **진행 예정** ← 우리 보드가 실제로 답할 수 있는 도시 롱테일 |
| 브랜드 | ept paris | 1,300 | 2026-02 8,100(대회 달) |
| | triton poker | 880 | 대회 달마다 튐 |
| | ept prague | 170 | 2025-12 1,000 · 보드 `ept-prague` 12월 |
| | wsop circuit | 110 | |
| | pokerstars open | 50 | |
| | wsop circuit paris | 10 | |

## 2. 자동완성 (축어 · 2026-10-14)

- `tournoi poker` → paris · france 2026 · bordeaux · barcelone 2026 · aix-en-provence 2026 · aix-les-bains 2026 · aix en provence · amnéville 2026 · partouche paris
- `calendrier tournoi poker` → 2026 · saint-amand-les-eaux 2026 · 2026 france · 2026 las vegas · 2026 aix les bains · paris · wpt 2026 · winamax · 2025
- `tournoi poker 2026` → france · europe · poker open 2026 · calendrier … 2026 · marrakech 2026 · namur 2026 · amnéville 2026 · barcelone 2026 · paris 2026

## 3. SERP (`calendrier tournoi poker 2026` · France · fr)

- 1 clubpoker.net(지역 클럽 목록) · 3 fr.pokerlistings(월간 기사) · 4 partypoker(**온라인** 캘린더) · 5 clubpoker(WSOPE 프로그램) · 6 클럽 사이트 · 7 live-poker.com(EPT Monte-Carlo 페스티벌 페이지) · 8·9 Hendon Mob(영어) · 10 pokerdiscover(영어) · 11 maineventtravel(영어)
- → **프랑스어로 «국제 라이브 시리즈 연간 일정»을 한 표에 묶은 페이지가 없다**(영어 DB 3개가 그 자리를 채움).
- PAA: «Quels sont les événements de poker prévus pour 2026 ?» ← FAQ 1번 후보(축어 채택 가능)
- 관련검색: Tournoi Poker France 2026 · janvier 2026 · Paris aujourd'hui · Paris Winamax · Partouche Paris · aujourd'hui · Paris 50 € · Paris Circus

## 4. 판정

- 제목 머리 = **«Tournois de poker 2026 — calendrier»**: «tournoi poker»(1,900) + «calendrier … 2026»(390) 두 축을 한 줄에. 단수/복수는 구글이 한 묶음 — 보드는 여러 대회이므로 복수가 자연스럽다.
- 🔴 수요 대부분은 **프랑스 도시 클럽·카지노 일정**(Paris·Bordeaux·Amnéville·Aix-les-Bains·Saint-Amand)이다. 우리 보드는 국제 시리즈만 싣고 `lib/tournaments.ts` 행 추가는 이 레인 범위 밖 → 그 수요는 **약속하지 않는다**(제목·설명에 «tous les tournois en France» 금지). 우리가 실제로 답하는 자리 = Aix(11월) · Middelkerke(11월 · 벨기에) · Prague(12월) · Monte-Carlo/Paris(지난 일정).
- 프랑스 카드 3건 · 벨기에 2 · 모나코 1 · 스위스 3 = HOME_COUNTRY 후보 `FR · BE · MC · CH`.
