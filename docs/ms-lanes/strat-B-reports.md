# ms-strat B 집필 보고 (서브 8개 원문 · 2026-09-27) — C 구간 입력

> 각 집필 서브의 최종 보고 축어. C는 «C 단계에서 봐 줄 곳»을 렌즈 입력으로 쓴다.

---

파일 1개를 새로 만들었습니다: `C:/Users/하봄/Downloads/Holdem-ms-strat/lib/posts-ms/holdem-continuation-bet.ts` (29,248바이트). EN과 구조가 모두 일치하고 금지어는 0건입니다. index.ts 등록과 빌드는 하지 않았습니다(헤드 몫).

**EN 대비 구조 일치표**
| 항목 | EN | MS |
|---|---|---|
| `## ` / `### ` | 14 / 1 | 14 / 1 |
| `\|` 표 행 / `![` 이미지 | 23 / 2 | 23 / 2 |
| `:::` / `**Q.` / `A. ` | 4 / 12 / 12 | 4 / 12 / 12 |
| `- ` / 번호 목록 / `---` | 18 / 7 / 15 | 18 / 7 / 15 |
| `<div` / `</div>` / `<a href` | 16 / 16 / 4 | 16 / 16 / 4 |
| `==` / `==r:` / `==g:` | 20 / 0 / 0 | 20 / 0 / 0 |
| ‑(U+2011) · ♠♥♦♣ · % · $ | 20 · 12/9/8/6 · 23 · 3 | 동일 |
| 블로그 링크 | /en/ 16 | /ms/ 16, 대상 slug 목록 완전 일치 |
| 백틱 | 6 | 2 |

- **백틱 차이:** EN의 백틱 4개는 머리 주석(L11~12) 안에 있습니다. 브리프 지시대로 그 주석을 옮기지 않아서 MS에는 content를 감싸는 2개만 남았습니다.
- **§13 검산:** 숫자와 카드 토큰의 빈도를 EN과 대조했더니 «3» 하나만 1회 많습니다. EN L129의 «three-bet pot»을 «pot 3-bet»으로 옮긴 결과이고, 수치는 바뀌지 않았습니다. Spot 1(A♣K♦ / K♠7♦2♣)은 베스트5가 K♦ K♠ A♣ 7♦ 2♣로 탑페어 탑키커입니다. Spot 2(A♥Q♥ / 7♠6♠5♦)는 에이스하이에 보드에 하트가 없어 드로우도 없습니다. 둘 다 EN 결론과 같습니다. T♥ 표기는 그대로 두었습니다.
- **tsc:** 오류는 `category "strategy"`가 Category 타입에 맞지 않는다는 1건뿐입니다. EN 원본을 같은 명령으로 돌려도 똑같이 나오고 기존 ms 글도 같은 값을 쓰므로 무시해도 됩니다. 구문 오류는 없습니다.
- **금지어 grep:** 0건입니다. 목록 밖에 «menaikkan equity»도 기계번역 동사 naikkan과 겹칠 수 있어 «meningkatkan equity»로 바꿨습니다.

**EN·브리프와 다르게 한 곳**
- **이식한 것:** 브리프 §1-D대로 GTO 역링크 L65·L129를 옮기고 썸네일은 -ms 변형을 썼습니다.
- **태그:** 브리프의 카니발 회피 목록 8개를 그대로 썼습니다.
- **`export default POST;`:** EN 모양을 따라 넣었습니다. ms 템플릿(hand-rankings)에는 이 줄이 없습니다.
- **readnext·관련 글 카드 제목:** ms 대상 글이 아직 발행 전이라 제가 임시로 붙였습니다. 예를 들면 «5 Keputusan di Sebalik Poker yang Menang», «Cara 3-Bet (dan Menghadapinya)»입니다. 실제 글 제목이 정해지면 C에서 맞춰야 합니다.

**새로 만든 말레이어 표현 (EN | ms | 이유)**
- charge (draws) | mengecaj | 코퍼스 선례가 없습니다. 말레이시아 구어에서 쓰는 차용 동사로 골랐습니다.
- nut advantage | kelebihan nut | 브리프의 «kelebihan» 규칙을 넓혀 적용했습니다.
- scalpel / hammer | pisau bedah / tukul | 비유를 그대로 옮겼습니다.
- float (피동형) | di-float | di-bet·Di-C-Bet 피동 표기와 맞췄습니다.

**C 단계에 남길 의문**
- «mengena pada flop» 표현을 DBP 교정 관점에서 봐 주세요. 자동사로 썼고, 목적어가 오는 자리에는 mengenai를 썼습니다.
- «pemain 3-bet»이 3-bettor 번역으로 자연스러운지 확인이 필요합니다.
- 각 H2 바로 뒤 단락은 대략 40~75단어로 맞췄지만 단어 수를 정확히 세지는 않았습니다.

---

파일을 하나 새로 만들었습니다: `C:/Users/하봄/Downloads/Holdem-ms-strat/lib/posts-ms/holdem-limping.ts` (24,358 B). 다른 파일은 건드리지 않았고, index.ts 등록은 하지 않았습니다(헤드 몫).

**EN 대비 구조 일치 (EN / MS)**
| 항목 | EN | MS |
|---|---|---|
| 백틱 | 2 | 2 |
| `## ` / `### ` | 11 / 1 | 11 / 1 |
| `\|` 표 행 | 11 | 11 |
| `![` 이미지 | 3 | 3 |
| `:::` 디렉티브 | 4 | 4 |
| `==r:` / `==g:` | 1 / 0 | 1 / 0 |
| `**Q.` / `A.` | 9 / 9 | 9 / 9 |
| 번호목록 / 불릿 / `---` | 7 / 3 / 12 | 7 / 3 / 12 |
| `<div` (style 문자열) | 3 | 3 (한 글자도 안 바꿈) |
| 블로그 링크 | /en/ 14 | /ms/ 14 (대상과 순서 동일, /en/ 잔존 0) |

- **점검 결과:** 금지어 grep은 0건입니다. 문중 대문자 Anda도 0건이고, readnext 제목의 «untuk Anda»는 제목이라 그대로 뒀습니다. 수치(0%·11.8%·8.5·100bb·TT+·AK/AQ)는 EN과 순서까지 같습니다. `${`는 0건입니다.
- **tsc:** 오류는 `category "strategy"`가 `Category` 타입에 없다는 1건뿐입니다. EN 원본도 똑같은 오류가 나서 이번에 생긴 문제는 아니고, 문법 오류는 없습니다.
- **§13 검산:** 7장 핸드 예시가 없는 글이라 베스트 5장을 비교할 자리는 없습니다. 레인지 표기(TT+, AK/AQ)와 확률은 EN 축어 그대로 옮겼습니다.

**EN·브리프와 달라진 자리**
1. EN 파일 끝의 `export default POST;`를 뺐습니다. 기존 ms 글(hand-rankings 등)에 없는 줄이라 그 관례를 따랐고, 헤드는 named import로 등록합니다.
2. 직답 단락 4곳(Open-Limp vs Over-Limp · 4 Sebab · Bila Limp OK · Tanda Fish)은 EN 도입부가 40단어에 못 미쳐 늘렸습니다. 늘린 내용은 같은 글의 표·목록을 요약한 것뿐이고 새 사실은 없습니다.
3. «Pocket deuces through sevens»는 «Pocket pair 22 hingga 77»로, «aces or kings»는 «pocket aces atau kings»로 옮겼습니다. 가리키는 핸드 범위는 EN과 같습니다.
4. 표의 «Verdict»는 **Kesimpulan**으로 옮겼습니다. «Keputusan»은 decision 뜻으로 이미 쓰고 있어 겹치지 않게 했습니다.

**브리프 표에 없어서 새로 정한 용어 (EN | ms | 이유)**
- default | **lalai** / pilihan lalai | DBP 표준어
- aggressor | **penyerang** | 따옴표로 한 번 풀어 씀
- capped range · iso-raise · set-mining · fold equity · family pot · donk · nuts · tell | 영어 그대로 | 포커 술어라 액션 용어와 같은 원칙 적용
- deny equity | **menafikan equity** | ekuiti 금지 규칙을 따름

**C 단계에서 봐 줄 것**
- 확정 tldr에 구어 «tak»가 들어 있습니다. 브리프 축어라 고치지 않았습니다.
- «papan tanda berkelip», «lebih bergaya daripada menguntungkan»(EN «more cute than profitable»)이 원어민에게 자연스러운지 확인해 주세요.
- isolation-raise 이미지 alt의 «cip wajib blinds»(EN «posted chips»)는 pos(우편) 지뢰를 피하려고 고른 말입니다. 표현을 한 번 봐 주세요.

---

`lib/posts-ms/holdem-positions.ts`를 새로 만들었고(26,188 bytes), 다른 파일은 건드리지 않았습니다. index.ts도 수정하지 않았습니다. 요청한 자가 점검은 모두 돌렸고, 구조 동등성·금지어·백틱 모두 통과했습니다. tsc에서 오류가 1건 나왔는데, EN 마스터에서도 똑같이 나는 기존 오류입니다.

**구조 동등성 (EN / MS)**

| 항목 | EN | MS |
|---|---|---|
| 백틱 | 2 | 2 |
| `## ` | 12 | 12 |
| `### ` | 0 | 0 |
| `\|`로 시작하는 줄 | 34 | 34 |
| `![` | 1 | 1 |
| `:::` | 4 | 4 |
| `**Q.` | 7 | 7 |
| `> ` | 4 | 4 |
| `- ` | 4 | 4 |
| 번호 목록 | 4 | 4 |
| `==` | 54 | 54 |
| 블로그 링크 | 18 (/en/) | 18 (/ms/) |
| `<a href` | 4 | 4 |

- MS 파일에 `/en/`은 남아 있지 않습니다.
- 관련 글 카드의 style·onmouseover/onmouseout 문자열은 EN과 바이트 단위로 같습니다.
- EN에 `==r:`·`==g:` 마커는 원래 없습니다.
- 금지어 검사 결과는 0건입니다(인니어, lipat 같은 기계번역 동사, panggil 부분일치, kedudukan, ekuiti, lengkap, `${` 포함). 문장 중간의 `Anda`도 0건입니다.
- tsc: 구문 오류는 없습니다. 나온 오류는 `category: "strategy"`가 Category 타입과 맞지 않는다는 TS2322 1건입니다. EN 마스터를 같은 명령으로 돌려도 똑같이 나오고(lib/posts.ts의 Category가 한국어 값만 허용), 기존 ms 글도 모두 같은 값을 씁니다.

**§13 (포커 정확성)**
- J♥ J♠(2곳)과 `$14`는 EN 그대로 옮겼습니다. 이 글의 J♥ J♠는 쇼다운까지 가는 판이 아니어서 베스트 5장을 비교할 자리가 없습니다.
- 좌석 표 두 개의 순서·인원·약어는 EN과 한 칸도 다르지 않습니다. 순번만 «ke-N» 서수로 표기했고 숫자는 같습니다.

**EN·브리프와 다르게 한 곳**
- **직답 문단 5곳 추가 (늘린 쪽, 편차 아님):** L66·L87·L117·L130·L140·L153 H2에서 EN의 첫 문단이 40단어 미만이라 40~75단어 직답 문단을 넣거나 앞에 붙였습니다.
- **브리프 지시대로 PAA 반영:** «strongest position»은 L130 직답 첫 문장에, «early or late»는 L107 첫 문장에 넣었습니다. EN에 있는 사실(버튼이 가장 수익성 높은 자리, UTG는 가장 타이트한 레인지)만 썼습니다.
- **range·IP/OOP 첫 등장 풀이는 L83에 한 번만 두었습니다.**
- **readnext 두 번째 제목은 «Carta Tangan Permulaan Mengikut Posisi»로 했습니다.** 브리프의 확정 title이 아니라 EN readnext 문구를 옮긴 것입니다.

**새로 쓴 말레이어 표현 (브리프 표에 없음)**

| EN | ms | 이유 |
|---|---|---|
| called (이름이 ~인) | disebut / dikenali sebagai | dipanggil이 panggil 부분일치 게이트에 걸리는 것을 피하려고 |
| floor calls | floor mengumumkan | 위와 같은 이유 |
| dealer disc | cakera pengedar | butang pengedar와 같은 물건을 가리킴 |
| card room | bilik kad | — |

**C 단계에서 봐 주실 것**
1. seoTitle 59자와 desc 157자는 브리프 확정 카피를 그대로 썼습니다.
2. «tempat duduk dua tempat di kanan button»이 반복이라 말레이어로 어색한지 원어민 렌즈로 확인이 필요합니다.
3. 버튼·컷오프 H2는 직답 문단과 EN 본문이 컷오프 정의를 한 번 더 말합니다. 중복을 줄일지 판단이 필요합니다.

---

`lib/posts-ms/holdem-starting-hands-chart.ts` 파일을 새로 만들었습니다. 파일 크기는 26,847B이고, 이 파일 외에는 아무것도 수정하지 않았습니다(index.ts 미등록). tsc를 돌리면 오류가 1건 나옵니다. `category: "strategy"`가 `Category` 타입에 맞지 않는다는 TS2322인데, EN 원본에서도 똑같이 나오므로 새로 생긴 문제는 아닙니다. 구문 오류는 없습니다.

**동형성 (EN / MS)**

| 항목 | EN | MS |
|---|---|---|
| 백틱 | 2 | 2 |
| `## ` / `### ` | 11 / 3 | 11 / 3 |
| `\|` 표 행 | 30 | 30 |
| `![` | 2 | 2 |
| `:::` | 14 | 14 |
| `==r:` / `==g:` / `==` 전체 | 6 / 6 / 42 | 6 / 6 / 42 |
| `**Q.` / `A.` | 8 / 8 | 8 / 8 |
| `/blog/` 링크 | 13 | 13 |
| `thumb:` | 2 | 2 |
| `- ` 목록 | 10 | 10 |
| `**` | 24 | 24 |

- **링크:** `/en/`은 도구 링크 2건만 남겼습니다(`/en/hand-chart`, `/en/quiz`). PDF 링크도 그대로 두었고, 세 곳 모두 앵커에 «(bahasa Inggeris)»를 붙였습니다.
- **금지어·기타:** 금지어 목록은 0건입니다. «kedudukan», «lengkap»도 0건이고 `${`도 0건입니다. 대문자 `Anda` 4건은 제목 2개와 문두 2개입니다.

**EN·브리프와 다르게 한 곳**
- **도입부(L31 자리):** «poker hand chart preflop … bukan carta susunan kad»를 한 구절 덧붙였습니다. 브리프가 요구한 «족보 차트가 아님을 밝힌다»를 첫 문단에서 충족하려는 것입니다.
- **H2 직후 40~75단어 직답을 맞추려고 단락을 조정한 곳:**
  - 9-max 표 절: 강조 한 줄과 설명 단락을 한 단락으로 합치고, 13%·43%를 요약으로 넣었습니다.
  - 6-max 절: 결론 문장(UTG≈MP)을 앞으로 옮기고, «seats move up» 설명은 둘째 단락으로 보냈습니다.
  - 퍼센트 절: 긴 단락을 둘로 나눴습니다.
  - GTO 절: 경험담 뒤에 L186의 결론 문장을 한 줄 요약으로 되풀이했습니다.
  - 최악의 핸드·PDF·퀴즈 절: 도입 단락을 EN 표와 본문의 사실만으로 풀어 썼습니다.
- **10대 핸드 표 헤더:** «Rank»는 kedudukan을 피하려고 «#»로 바꿨습니다.

**새로 쓴 말레이어 용어** (EN | ms | 이유)
- Rank | # | kedudukan을 피하려고
- tier Premium/Strong/Speculative/Trash | Premium/Kuat/Spekulatif/Sampah | 표의 등급 이름
- orbit | pusingan | 코퍼스에 46건
- set mine | "set mining" | 영어 원어를 유지

**C 단계에서 봐 주실 점**
1. **§13 검산:** 카드·수치는 전부 EN 축어이고, A♣4♦ vs A♠K♦/A♥Q♦는 «같은 원페어, 키커로 패배»라는 결론이 그대로 유지됩니다. L65(46–47/45/43/50%)와 FAQ(AKs 67%·AKo 65%)의 매치업 수치는 EN과 대조만 했고 다시 계산하지 않았습니다.
2. **말레이어 표현:** «AK tidak pernah lebih berpeluang menang»(favorite)와 «tahap»(tier)이 원어민에게 자연스러운지 확인이 필요합니다.
3. **관련 글 카드 라벨:** «Pilar», «Susunan Kad»로 옮겼는데, 다른 ms 글들과 라벨을 통일할지 정해야 합니다.

---

파일 1개를 새로 만들었습니다: `C:/Users/하봄/Downloads/Holdem-ms-strat/lib/posts-ms/holdem-position-play.ts` (35,104바이트). 구조 수치는 EN과 모두 같거나 브리프대로입니다. 타입 검사에서 오류 1건이 나오는데, EN 마스터에서도 똑같이 나는 것이라 새로 생긴 문제는 아닙니다. index.ts 등록과 빌드는 하지 않았습니다(지시대로).

**EN 대비 구조 비교**

| 항목 | EN | MS |
|---|---|---|
| 백틱 | 2 | 2 |
| `## ` / `### ` | 15 / 0 | 15 / 0 |
| `\|`로 시작하는 표 줄 (표 5개) | 34 | 34 |
| `![` 본문 이미지 (히어로 없음) | 3 | 3 |
| `:::` (compare·readnext) | 4 | 4 |
| `==r:` / `==g:` / `==` 전체 | 7 / 8 / 38 | 7 / 8 / 38 |
| `**Q.` / `A.` | 10 / 10 | 10 / 10 |
| `/en/blog/` → `/ms/blog/` | 20 | 20 (GTO 역링크 `low-board-check-raise` 포함) |
| 카드 기호 | 44 | 44 (카드 종류별 개수까지 같음) |
| 핸드 코드·수치 (AJs, K7s, 2.2–2.5×, 65–75% 등) | — | 종류별 개수까지 EN과 같음 |
| `%` 개수 | 46 | 45 |

- `%`가 하나 적은 것은 확정 tldr에 EN의 «above or below 100%»가 없어서입니다. 브리프 확정 카피를 그대로 썼습니다.
- 금지어 검사는 0건입니다(인니어, lipat·gertak 같은 기계번역 동사, kedudukan, ekuiti, lengkap 포함). `${`도 0건입니다.
- tsc 오류는 `category: "strategy"` 타입 불일치(TS2322) 하나이고, EN 마스터에도 똑같이 나옵니다. 문법 오류는 없습니다.
- §13 재검산 결과 EN의 결론이 모두 그대로입니다.
  - 빅블라인드 K♥Q♥ + Q♠8♦4♣: Q 원페어에 K 키커(탑페어).
  - 버튼 K♥Q♥ + J♠7♦3♣ + 턴 Q♦: 탑페어.
  - 8♥7♥ + K♥4♠2♥: 하트 4장이라 플러시 드로, 아웃 9장.
  - A♦9♦ + K♦7♠2♥: 에이스 하이.

**EN·브리프와 다르게 쓴 곳**
1. 도입부의 "Last spring"은 뺐습니다. 말레이시아 독자에게 '봄'이 어색하고, 다른 날짜로 바꾸면 사실을 지어내게 되어서입니다. 대신 «Dalam satu sesi di permainan 1/2»로 썼습니다.
2. 브리프는 opening range를 «range open»이나 «range pembukaan» 중 하나로 통일하라고 했지만, 확정 카피(desc·H2)가 영어 «opening range»를 쓰고 있어 본문도 영어로 통일했습니다.
3. 직답 분량(40~75단어)을 맞추려고 세 H2(OOP·Mengapa Posisi·C-Bet 절)의 첫 문단에 한 문장씩 덧붙였습니다. 모두 EN 표와 본문을 풀어 쓴 것이고 새 사실은 없습니다. 반대로 6-Max 절 첫 문단은 EN처럼 길어서 75단어를 넘을 수 있습니다.
4. "caller"는 금지어 panggil이 든 «pemanggil»을 피해 «pemain … yang call»로 옮겼습니다. 표 안의 «caller IP»는 영어 그대로 두었습니다.
5. 첫 등장 풀이 두 가지를 Jawapan ringkas 블록에 넣었습니다: «range (julat tangan)»와 «continuation bet (c-bet)».

**새로 만든 용어**

| EN | ms | 이유 |
|---|---|---|
| positional / structural tax | cukai posisi / cukai struktur | 은유를 그대로 살림 |
| break-even | pulang modal | 일상 표준어 |
| equalizer | penyeimbang | — |
| database averages | purata pangkalan data | — |
| dead money | dead money | 영어 유지 |

**C 단계에서 봐 줄 곳**
- 표의 «Pengalah bb/100 mentah terbesar»(원문 "biggest raw bb/100 loser")가 말레이어로 자연스러운지.
- «di-fold/di-call/di-raise/di-squeeze/di-limp» 같은 하이픈 수동형 표기가 코퍼스 관례와 맞는지.
- 6-Max 절 «terhakis sedikit demi sedikit daripada meja»가 원문 "folded off the table"의 뉘앙스를 살리는지.

---

`lib/posts-ms/holdem-when-to-fold.ts` 1개 파일을 새로 만들었습니다(31,428 B). 다른 파일은 건드리지 않았고, `index.ts` 등록과 빌드는 하지 않았습니다. 구조·링크·숫자는 EN 마스터와 전부 맞고, 금지어 중 남은 것은 동사형 «melengkapkan» 2건뿐입니다(판단 필요).

**대조표 (EN / MS)**

| 항목 | EN | MS |
|---|---|---|
| 백틱 | 2 | 2 |
| `## ` / `### ` | 12 / 1 | 12 / 1 |
| `\|` 표 줄 | 22 | 22 |
| `![` 이미지 | 2 | 2 |
| `:::` | 6 | 6 |
| `==r:` / `==g:` / `==` 줄 | 1 / 1 / 13 | 1 / 1 / 13 |
| `**Q.` / `A.` | 12 / 12 | 12 / 12 |
| `<div` / `- ` / 번호 목록 | 4 / 10 / 5 | 4 / 10 / 5 |
| 블로그 링크 | 13 (`/en/`) | 13 (`/ms/`) |

- 링크는 순서까지 EN과 같고, 이미지·thumb 경로와 원시 HTML의 style 문자열은 EN과 한 글자도 다르지 않습니다.
- 금지어 목록(인니어·기계번역 동사·kedudukan·ekuiti·adalah 포함)은 0건입니다. 단 «lengkap» 검색에는 «melengkapkan» 2건이 걸립니다(L91 flush draw 문장, FAQ 좋은 핸드 답변). «완성하다»라는 뜻의 동사라 마무리 문구 금지에는 해당하지 않는다고 보고 그대로 뒀습니다. 게이트가 부분 문자열로 잡으면 바꿔야 합니다.
- 숫자를 비교해 보면 MS에서 2·5·9가 몇 번 더 나옵니다. EN 단어(deuces·fives·case nine·kings and nines)를 «kad 2 / kad 5 / 9»로 옮긴 결과이고, 값이 바뀐 곳은 없습니다.
- `tsc` 검사에서 구문 오류는 없습니다. `category: "strategy"` 타입 오류(TS2322) 1건이 나오는데, EN 원본에서도 똑같이 나는 기존 오류입니다.
- §13 검산 2건 모두 EN 결론과 같습니다.
  - 9♠9♣ vs A♥K♥, 보드 9♥5♥2♥: 아웃 7장(남은 9 한 장, 5 세 장, 2 세 장)이 전부 하트가 아니어서 맞습니다.
  - A♥K♣, 보드 K♦9♠4♥7♣9♥: 베스트 5장 K♣K♦9♠9♥A♥ 투페어가 맞습니다.
  - 팟오즈 산수(50/200=25%, 25/150=16.7%, 1.5x 팟 오버벳 37.5%)도 확인했습니다.

**EN이나 브리프와 다르게 한 곳**
1. EN에서 H2 바로 뒤 문단이 짧거나 없던 5곳에 40~75단어 직답 문단을 넣었습니다: L61 flop 이후, L123 심리, L157 실제 핸드, L170 7가지 실수, L247 플레이북. L75와 L139에는 한 문장씩 더했습니다. 모두 EN 본문을 요약한 것이고 새 사실은 없습니다.
2. «X-to-1»은 «4:1 / 3:1 / 5:1»로 적었습니다. 표 안의 «3 : 1»은 EN 그대로 뒀습니다.
3. L103 본문에 «(ada yang menyebutnya hero fold)»를 넣었습니다. 브리프의 hero fold 키워드 배치를 따른 것입니다.
4. 날짜: date와 updated는 2026-09-27, masterUpdated는 2026-09-26입니다. 파일 끝의 `export default POST;`는 EN 모양대로 남겼습니다.

**새로 만든 용어 (EN | ms | 이유)**
- fills up | fill up (영어 유지) | 쿼즈(9 한 장)까지 포함하는 뜻이라 «full house»로만 옮기면 틀림
- air | tangan kosong | «angin» 직역 회피
- blank | kad kosong (blank) | 첫 등장 풀이
- give-up street | street untuk menyerah
- station / nit (표 라벨) | si station / si nit

**C 단계에서 봐 주실 곳**
- «melengkapkan» 2건을 게이트가 잡는지.
- «melanyak»(run over) 구어체 표현이 적절한지.
- 세트 행의 «fill up» 영어를 남긴 것이 괜찮은지.
- L117 괄호 «(kad 9 yang terakhir, tiga kad 5, tiga kad 2)» 표기.

---

`lib/posts-ms/holdem-strategy.ts` 파일을 새로 만들었습니다. 크기는 32,717 bytes입니다. 파싱은 통과했고, 금지어는 0건이며, EN과 구조가 어긋나 모자란 자리는 없습니다.

**구조 대조 (EN / MS)**
| 항목 | EN | MS |
|---|---|---|
| 백틱 | 2 | 2 |
| `## ` / `### ` | 12 / 1 | 12 / 1 |
| `\|` 표 행 | 15 | 15 |
| `![` 이미지 (히어로 없음) | 3 | 3 |
| `:::` (stripe·readnext) | 4 | 4 |
| `==r:` / `==g:` | 0 / 0 | 0 / 0 |
| `==` 하이라이트 표시 (7쌍) | 14 | 14 |
| `**Q. ` / `A. ` | 14 / 14 | 14 / 14 |
| `- ` 목록 / `N. ` 목록 | 12 / 8 | 12 / 8 |
| `<div` / `<a href` | 15 / 4 | 15 / 4 |
| 블로그 링크 (`/en/blog/` → `/ms/blog/`) | 28 | 28 (남은 `/en/` 0) |
| `thumb:` (전부 공용 히어로) | 6 | 6 |
| U+2011 하이픈 줄 (K‑J 등) | 6 | 6 |

- **금지어 검사**: 인니어, 기계번역 액션 동사, kedudukan, ekuiti, lengkap을 낱말 경계로 찾았고 0건입니다. `${`도 0건입니다.
- **타입 검사 (tsc)**: 오류는 `category: "strategy"` 가 `Category` 타입에 맞지 않는다는 TS2322 하나뿐이고, 문법 오류는 없습니다. EN 마스터 파일에서도 같은 오류가 똑같이 나고, 다른 ms 글도 `"strategy"`를 씁니다. 원래부터 있던 문제로 보입니다.
- **§13 검산**:
  - 숫자와 카드 토큰을 EN과 diff해 보니, EN에 있는 값은 하나도 빠지지 않았습니다.
  - 핸드 두 개를 다시 봤습니다. A♣K♣ + 2♥7♦9♠는 페어도 드로우도 없는 ace-high이고, 상대 99는 set of nines입니다. 5♠5♦ + 5♣K♠2♦는 파이브 셋으로 오버페어를 이깁니다. 결론은 EN과 같습니다.

**EN이나 브리프에서 달라진 곳**
- **직답 단락 추가**: EN의 H2 바로 뒤에 40~75단어 직답이 없는 곳이 있었습니다. 첫 H2, Matematik, 6 Leak, TAG, «Lima Keputusan, Sekali Lagi» 아래에는 새 단락을 넣었고, Keputusan 3·5는 첫 단락을 늘렸습니다. 내용은 EN tldr와 EN 본문에 있는 사실만 다시 쓴 것입니다.
  - 이 때문에 숫자 토큰이 늘었습니다: 11.8%와 80%가 한 번씩 더 나오고, «4-to-1 (4 berbanding 1)»로 풀어 쓰면서 4와 1이 하나씩 늘었습니다.
- **표기 선택**: «1-in-5»는 «1 dalam 5 kali», «≈1 in 8.5»는 «≈1 dalam 8.5»로 옮겼습니다. 숫자는 그대로입니다.
- **EN과 똑같이 둔 것**: 파일 끝의 `export default POST;`는 EN에 있어 남겼습니다. ms 폴더 22개 중 13개도 같은 형식입니다.
- **관련 글 카드 라벨**: «Strategy»는 «Strategi»로 옮겼고, «Odds»는 그대로 뒀습니다.

**새로 만든 용어** (EN | ms | 이유)
- decision spine | tulang belakang keputusan | 비유를 그대로 옮김
- leak | leak | 영어 그대로. 브리프 H2에 «6 Leak»으로 이미 씀
- scoop the blinds | mengaut blind | 말레이어 관용 동사
- break-even | pulang modal | 코퍼스에 1건 있음
- learning curve | keluk pembelajaran | DBP 표기
- 1bb already posted (하이라이트 안) | 1bb yang diletakkan lebih awal | 자연스러운 표현을 우선함
- ace-high · cash game · tournament | 영어 그대로 | 코퍼스에서 영어 표기가 우세

**C 단계에서 봐 주실 점**
1. «4-to-1 (4 berbanding 1)»은 병기 방식을 한 번 판단해 주십시오.
2. FAQ 12번 «(skill or luck)»은 키워드를 넣으려고 영어를 병기했습니다. 부자연스러운지 확인이 필요합니다.
3. FAQ 3번은 «Bagaimana cara menang poker Texas Hold'em?»으로, 첫 H2와 키워드가 겹칩니다.
4. Keputusan 3의 새 문장 «…menjadikan anda sasaran pemain yang lebih kuat»는 EN 3번 항목을 앞으로 당겨 쓴 것입니다. 사실을 새로 만든 것인지 봐 주십시오.

---

`lib/posts-ms/holdem-3bet.ts`를 새로 만들었습니다(36,358 B). 다른 파일은 건드리지 않았고 `index.ts` 등록은 헤드 몫으로 남겼습니다. tsc를 돌리면 에러가 1건 나옵니다: category `"strategy"`가 `Category` 타입에 맞지 않는다는 TS2322입니다. EN 마스터에 같은 명령을 돌려도 똑같이 나와서 원래 있던 에러로 봤고, 구문 에러는 0건입니다. 브리프 확정 카피(title·seoTitle·desc·tldr·tags·H2·H3)는 축어 그대로 넣었습니다.

**구조 대조 (EN / MS)**
| 항목 | EN | MS |
|---|---|---|
| 백틱 | 2 | 2 |
| `## ` / `### ` | 13 / 1 | 13 / 1 |
| `\|`행 / `![` / `:::` | 35 / 3 / 4 | 35 / 3 / 4 |
| `==` / `==g:` / `==r:` | 20 / 1 / 0 | 20 / 1 / 0 |
| `**Q.` / `A.` | 15 / 15 | 15 / 15 |
| `<div` / `</div>` | 19 / 19 | 19 / 19 |
| `- ` / `1.`형 목록 | 15 / 10 | 15 / 10 |
| 블로그 링크 · thumb | /en/ 15 · 2 | /ms/ 15 · 2 |
| `$` | 12 | 12 |

- 금지어(인니어·기계번역 동사·kedudukan·ekuiti·lengkap·adalah)는 0건입니다. 대문자 Anda는 제목·readnext·카드 제목에만 있습니다. `${`는 0건입니다.
- §13: 카드·수치·$ 금액은 전부 축어입니다. A♠Q♠에 Q♦ 8♣ 4♥면 베스트5가 Q♠ Q♦ A♠ 8♣ 4♥, 즉 원페어 퀸에 A 키커로 EN과 같습니다. 팟 $39(1+2+18+18), $48÷$18≈2.7x, 4.5÷13.5≈33%, 19.5÷7.5=2.6도 맞았습니다. 수치 토큰을 비교했을 때 늘어난 건 직답 단락에서 EN 수치를 다시 쓴 것과, EN의 "aces/kings"를 AA/KK로 적은 것뿐입니다.

**EN과 다르게 한 곳**
- 직답 단락을 5곳에 추가했습니다(추가만, 삭제 없음): 6 Kesilapan H2(EN은 H2 바로 뒤가 박스), Playbook H2 앞 도입문, 사이징 H2 맨 앞 1문장, 3-bet/Flat/Fold H2, 3-Bet 핸드 H2. 내용은 전부 EN 본문·FAQ의 사실을 요약한 것입니다.
- EN L21 "complete 3-bet playbook"은 금지된 «lengkap»을 피해 «yang menyeluruh»로 옮겼습니다.
- EN의 "aces / ace-king / kings"는 AA·AK·KK로, "eights"는 «pasangan 8»로 적었습니다(카드 자체는 그대로).
- `export default POST;`를 넣었습니다. EN 파일과 기존 ms GTO 파일에 있는데, 템플릿인 hand-rankings에는 없습니다.

**브리프 용어표에 없어서 새로 정한 표기 (EN | ms | 이유)**
- backup equity | equity sandaran | ekuiti 금지, 설명형
- playability | playability (senang dimainkan selepas flop) | 첫 등장에 풀이, 이후 영어
- blocker / to block | blocker · menyekat (block) | 명사는 영어, 동사는 말레이어
- capped/cappable range | range yang mudah di-cap · capped | 영어 원어를 살림
- MDF | Minimum Defense Frequency (MDF) | 영어 원어, 풀이 없음
- dead money · set-mine · shove/jam · cooler · face-up · laydown · float | 영어 그대로
- ace (산문) | As | 코퍼스 «ber-As tinggi» 선례

**C 구간이 볼 것**
1. H2 L154의 `*dan*` 이탤릭이 TOC에 별표로 남는지 빌드 산출물로 확인이 필요합니다.
2. «di-call / di-cap / di-3-bet»처럼 영어 동사에 피동형을 붙인 표기가 원어민에게 자연스러운지 검수가 필요합니다.
3. OOP 약어 풀이를 첫 등장인 사이징 표에 넣었습니다(IP는 L100 표). 스트라이프 줄은 약어 없이 영어 그대로 두었습니다.
4. 3-bet/Flat/Fold 직답 단락의 «A5s-A2s di-3-bet»이 어색하게 읽히는지 봐 주세요.

