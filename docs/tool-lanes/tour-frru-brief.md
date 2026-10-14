# 🅱 브리프 — `/fr/tournaments` · `/ru/tournaments` (B 입력 · 이 파일 하나만 보고 쓴다)

> A 구간 산출(2026-10-14). 정본 = `docs/tool-lanes-2026-10-14.md` §1 B · §2 🅱. 선례 = pt·tr `11eb349d` · hi·ar `88dc428e`.
> 근거 표기: 〔코퍼스〕 = 우리 레포 grep · 〔DFS〕 = DataForSEO 실측(`docs/keyword-bank/{fr,ru}-tournament.md`) · 〔아스트라〕 = A-교차 보고를 본체가 원문 재확인한 것 · 〔URL〕 = 본체가 직접 연 1차 원문.

## 0. 하지 말 것

- 🔴 `lib/tournaments.ts` 수정 금지(행 추가·값 수정 전부) · 합법성 축 금지(ANJ/ARJEL·러시아 법·«légal»·«законно» 문장·FAQ 전부) · NOTES는 `fr: {}, ru: {}`(선례 pt·tr·hi·ar와 같음).
- 🔴 국내 일정 약속 금지 — fr «tous les tournois en France» · ru «турниры в России/Сочи/Минске» 류 문장. 데이터에 없다(키워드 뱅크 §4).
- 🔴 `public/sitemap.xml` 커밋 금지 · 다른 로케일 문구 수정 금지 · 백틱 금지 · 사전 키 추가·삭제 금지(BoardStrings 인터페이스 그대로).
- 🔴 대회명·도시·장소의 현지 표기는 §4의 근거 있는 것만. 나머지는 라틴 원어 그대로.
- fr·ru 글로 가는 대회 가이드 링크 없음(fr 대회 가이드 4편 없음 · ru 7편 중 대회 가이드 0) → `resolveBlogLinks`가 알아서 0건. 손대지 마라.

## 1. 파일 목록 (선례 자리 = 자기 로케일 한 줄씩)

| 파일 | 할 일 | 자리(현재 줄) |
|---|---|---|
| `lib/tournaments-i18n.ts` | `BoardLocale`에 `"fr" \| "ru"` | L35 |
| 〃 | `const fr: BoardStrings` · `const ru: BoardStrings` (ar 블록 뒤) + `BOARD_STRINGS`에 `fr, ru` | L1318~1401 |
| 〃 | `nameMaps`: fr → `[CITY_FR, PAREN_FR]` · ru → `[{}, PAREN_RU]`(hi·ar 선례 = 라틴 유지) | L1423~1440 |
| 〃 | `COUNTRY_NAME.fr` (ru 없음) | L1448~1484 |
| 〃 | `NAME_OVERRIDE.fr` · `NAME_OVERRIDE.ru` | L1498~1588 |
| 〃 | `FIELD_FR` · `FIELD_RU` · `PAREN_FR` · `PAREN_RU` · `CITY_FR` · `SCHEMA_DESC_FR` · `SCHEMA_DESC_RU` · `MONTH_FR` · `MONTH_RU`(배지·주격) · `MONTH_RU_GEN`(날짜·생격) | FIELD_AR 뒤 L2559~2599 |
| 〃 | `NOTES`에 `fr: {}, ru: {}` | L3082 |
| 〃 | `localizeCity`에 fr 한 줄(ru 없음) | L3090~3100 |
| 〃 | `RANGE_DASH`에 `fr: "–", ru: "–"` | L3123~3125 |
| 〃 | 천 단위: fr·ru용 공백 구분 추가(§2) — `DOT_THOUSANDS` 옆에 `SPACE_THOUSANDS` | L3133~3137 |
| 〃 | `localizeField`에 fr·ru 두 줄 (`VENUE_DE[value] ?? FIELD_FR[value]`) | L3146~3165 |
| 〃 | `localizedMonthBadge` fr·ru 분기 | L3221~3249 |
| 〃 | `formatRange` fr·ru 분기(§2 날짜) | L3274~3325 |
| 〃 | `buildLocaleSchemas` description 체인에 fr·ru | L3352~3380 |
| 〃 | `HOME_COUNTRY` fr·ru (§5) | L3434~ |
| `app/fr/tournaments/page.tsx` · `app/ru/tournaments/page.tsx` | `app/pt/tournaments/page.tsx` 복사 → LOCALE · mmdd 꼴 · «en cours» 문구 · twitter/og description · HubPage title·locale | 신규 |
| `lib/tournaments-hreflang.ts` | `TOURNAMENT_LOCALES`에 `"fr", "ru"` | L16 |
| `scripts/generate-sitemap.mjs` | `TOURNAMENT_LOCALES`에 `"fr", "ru"` | L350 |
| `scripts/check-tournaments-i18n.mjs` | `BOARD_LOCALES`에 `"fr", "ru"`(목록 추가만 · 완화 금지) | L30 |
| `lib/hub-routes.ts` | fr·ru 배열에 `"/fr/tournaments"` · `"/ru/tournaments"` + ★주석 · 위 «⚠ tournaments 없다» 주석 해제 표기 | L90~112 |
| `components/side-rail.tsx` | fr·ru 항목에 🏆 한 줄 + ★주석 · «⚠ tournaments 없다» 주석 해제 표기 | fr L278~ · ru L349~ |
| `docs/update-calendar.md` | 현지 블록·FAQ의 날짜 문장 만료일 한 단락(선례 pt·tr 단락 모양) | «10/19 · 11/29 · 12/21» 절 |

✗ 손대지 않음: `components/tournament-board.tsx`(LTR 언어 · 공용) · `bottom-tab-bar`(ru 라벨 있음 · fr 확인만) · `lib/hub-i18n.ts`(fr·ru 셸 라벨 있음).

## 2. 숫자·날짜 규칙

| 항목 | fr | ru | 근거 |
|---|---|---|---|
| 천 단위 | U+202F «100 000» | U+00A0 «100 000» | 〔코퍼스〕 app/fr·ru 도구 사전 numberLocale fr-FR·ru-RU · 〔아스트라〕 CLDR group + Intl 코드포인트 실측 |
| 구현 | `SPACE_THOUSANDS: Partial<Record<BoardLocale,string>> = { fr: " ", ru: " " }` — `localizeThousands`가 DOT_THOUSANDS 다음에 3자리 쉼표 묶음을 이 문자로 바꾼다(사전 밖 라틴 값 «$25,000~$150,000» 대상). 사전 값은 손으로 같은 문자를 쓴다 | | |
| 소수 | 쉼표 «₩1,5 million» | 쉼표 «₩1,5 млн» | 〔아스트라〕 CLDR decimal · 〔코퍼스〕 fr 2,672 / ru 도구 decimalComma |
| 통화 위치 | **앞붙임 유지** «€1 100» | **앞붙임 유지** «€1 100» | ru 〔URL〕 pokerstarslive.com/ru/pokerstarsopen/aixenprovence «€1 100»·«€2 200» / fr는 갈림: 〔URL〕 pokerstarslive.com/fr/… «novembre - 1 100 €»(뒷붙임) vs 〔아스트라〕 PokerNews FR 일정표 «€ 160» · PokerListings FR «Main Event €1,100». 채택 이유 = 선례 보드(de·pt·es) 전부 앞붙임 + 통화 이동 함수 신설 위험(NT$·R$·CHF·AUD $ 등 접두 혼재). 🪶 C 렌즈가 «fr 독자에게 결함»이라 판정하면 헤드 요청으로(공용 정책) |
| 범위 | en dash «€825–€100 000» (RANGE_DASH «–») | 같음 | 〔아스트라〕 CLDR |
| 날짜(카드) | «2–8 nov. 2026» · 달 넘김 «30 sept. – 4 oct. 2026» · 해 넘김 «28 déc. 2026 – 3 janv. 2027» · 1일 = «1er» | 생격 «2–8 ноября 2026» · «30 сентября – 4 октября 2026» | 〔아스트라〕 CLDR fr «13 janv. – 13 févr. 2012» · 〔URL〕 ru판 «2-8 ноября 2026 г.» |
| 월 배지 | MONTH_FR = janv. févr. mars avr. mai juin juil. août sept. oct. nov. déc. → «nov.» · «sept.–oct.» | MONTH_RU(주격 독립형) = янв. февр. март апр. май июнь июль авг. сент. окт. нояб. дек. → «нояб.» · «сент.–окт.» | 〔아스트라〕 CLDR + Intl 12개 대조 일치 |
| MONTH_RU_GEN | — | января февраля марта апреля мая июня июля августа сентября октября ноября декабря | 〔URL〕 ru판 «ноября» |
| 날짜 기호 % | 보드에 % 없음 | 〃 | — |

## 3. 용어표 (EN | fr | ru | 근거)

| EN | fr | ru | 근거 |
|---|---|---|---|
| Upcoming / Running / Finished (배지) | À venir / En cours / Terminé | Скоро / Идёт сейчас / Завершён | fr 〔아스트라〕 PokerNews FR «A Venir» · LivePoker «est en cours»·«est terminé» / ru 판정 불가 → 제안 유지, C 현지 편집자 렌즈 필수 |
| filter All/Upcoming/Running/Finished | Tous / À venir / En cours / Terminés | Все / Скоро / Идут сейчас / Завершённые | 〃 |
| All countries | Tous les pays | Все страны | fr 〔아스트라〕 PokerStars FR «joueurs de tous les pays» |
| Dates / Buy-in / Venue | Dates / Buy-in / Lieu | Даты / Бай-ин / Место | 〔아스트라〕 PokerNews FR «Buy-in» · PokerDiscover RU «Даты»·«Бай-ин» · PokerStars RU «Место проведения» · 〔코퍼스〕 fr buy-in 62 · ru бай-ин 5 |
| Year-round | Toute l'année | Круглый год | fr 〔아스트라〕 PokerStars FR «toute l'année» |
| Dates TBA | Dates à confirmer | Даты уточняются | fr 〔아스트라〕 PokerNews FR «Dates à confirmer» |
| Official site | Site officiel | Официальный сайт | fr 〔아스트라〕 PokerStars FR «site officiel des événements live» |
| Full guide | Guide complet | Подробный гайд | 〔아스트라〕 (ru 가이드 링크는 0건이라 화면에 안 뜬다) · 〔코퍼스〕 HUB_HEADING ru «Гайды» |
| Not published (buy-in) | Non communiqué | Не объявлено | fr 〔아스트라〕 Club Poker «non communiqué» |
| FAQ | Questions fréquentes | Частые вопросы | 〔코퍼스〕 fr hand-chart dict · ru 글 5편 |
| satellite | satellite | сателлит | 〔아스트라〕 GipsyTeam «Сателлит» · PokerStars RU «отборочных сателлитов» 〔코퍼스〕 ru calculator faq |
| Main Event | Main Event | Main Event (라틴) | 〔아스트라〕 Poker.ru «билеты в Main Event» · 〔코퍼스〕 ru 2 · fr 24 |
| high roller | high roller | хайроллер | 〔아스트라〕 GipsyTeam «Хайроллер» (운영사는 «хай-роллеров» — 〔URL〕 ru판 재확인) |
| series / leg | série / étape | серия / этап | 〔아스트라〕 PokerStars FR «série de tournois»·«les étapes» · GipsyTeam «Новый этап»·«серии» |
| guaranteed | €1 000 000 garantis | гарантия $1 000 000 / GTD | 〔아스트라〕 PokerListings FR «€1,000,000 garantis» · GipsyTeam «Гарантия 650,000₽» |
| invitation only | Sur invitation uniquement | Только по приглашению | ru 〔아스트라〕 PokerStars RU «можно только по приглашению» |
| seat ticket only | Uniquement avec un ticket d'entrée (seat) | Только по билету на место (seat) | 판정 불가 → 유지 · C 렌즈 |

## 4. 대회명·도시 현지 표기

- 브랜드 라틴 유지(EPT·WSOP Circuit·Triton·WPT Prime·PokerStars Open·CAPT·King's) 〔아스트라 OK〕.
- **fr** `nameMaps` → `[CITY_FR, PAREN_FR]`
  - CITY_FR(영어와 다른 것만 · 대회명·도시 칸 공용) = `Seville: "Séville", Vienna: "Vienne", "Mexico City": "Mexico"` 〔아스트라〕 Larousse «Séville»·«Vienne» · PokerStars FR «Résidence : Mexico». Prague는 그대로(〔URL〕 fr판 «EPT Prague»).
  - PAREN_FR = **소문자** `(automne) (juillet) (août) (novembre) (décembre) (baie d'Ha Long)` 〔아스트라 WRONG 채택〕 프랑스어 월·계절 소문자(nos-langues.canada.ca «les noms de mois s'écrivent avec une minuscule»).
  - COUNTRY_NAME.fr = `"North Cyprus": "Chypre du Nord", Korea: "Corée", Australia: "Australie", Montenegro: "Monténégro", Taiwan: "Taïwan"` (Vietnam·Canada 그대로) 〔아스트라〕 CLDR «Australie»·«Monténégro»·«Taïwan» / Chypre du Nord·Corée = es·pt 선례와 같은 «대회명 속 국가명» 치환(«Corée du Sud»는 국가 식별 칸 표기라 대회명엔 안 씀).
  - NAME_OVERRIDE.fr = `holdem-masters-7/8/9: "7e Holdem Masters"…` · `wsop-2026: "WSOP 2026 (57e édition)"`(«les WSOP» 복수 일치 회피 · 〔아스트라〕 서수 판정 불가 → 뜻이 분명한 꼴).
- **ru** `nameMaps` → `[{}, PAREN_RU]` — **대회명은 라틴 유지**(hi·ar 선례).
  - 〔아스트라 RISKY 일부 채택〕 **도시 칸만** 공식 ru판에 있는 키릴 꼴: `CITY_RU = { Prague: "Прага", "Aix-en-Provence": "Экс-ан-Прованс" }` → `localizeCity`에 ru 한 줄(🔴 nameMaps에는 넣지 마라 — 대회명 «PokerStars Open Aix-en-Provence»·«EPT Prague 2026»은 브랜드라 라틴). 근거 〔URL〕 pokerstarslive.com/ru/pokerstarsopen/aixenprovence «Экс-ан-Прованс» · /ru/ept/prague «в Праге». Kyrenia·Tallinn·Rozvadov·Çatalköy = 공식 ru 표기 미확보 → 라틴(음역 금지).
  - PAREN_RU = `(осень) (июль) (август) (ноябрь) (декабрь) (бухта Халонг)` — 월 독립형 〔아스트라〕 CLDR «ноябрь». «бухта Халонг»는 일반 지명(대회 표기 아님).
  - NAME_OVERRIDE.ru = `holdem-masters-7/8/9: "7-й Holdem Masters"…` · `wsop-2026: "WSOP 2026 (57-я серия)"` 〔아스트라〕 기준 명사 명시 권고 채택.
- 장소(venue)는 전부 데이터 원문(라틴) — 〔URL〕 ru판도 «Hilton Hotel Prague»·«Pasino GRAND» 라틴.

## 4-A. 아스트라 A-교차 판정표 (채택/기각 · 본체 원문 재확인 포함)

| 자리 | 아스트라 | 본체 | 이유 |
|---|---|---|---|
| fr 괄호 대문자 | WRONG | **채택** → 소문자 | 프랑스어 월·계절 소문자 규칙 |
| ru 전부 라틴 | RISKY | **일부 채택** → 도시 칸만 Прага·Экс-ан-Прованс | 〔URL〕 ru판 2곳 재확인 · 나머지는 근거 없음 |
| ru 서수 | 판정 불가(기준 명사 명시 권고) | **채택** → «57-я серия» | 성 일치 모호 제거 |
| fr 서수 WSOP | 판정 불가 | **채택** → «(57e édition)» | 〃 |
| 통화 위치 | OK(둘 다 가능) | **앞붙임 유지** | §2 · fr 운영사판 뒷붙임은 기록해 C로 넘김 |
| 천 단위 U+202F/U+00A0 | OK | 유지 | — |
| 날짜·월 배지 | OK | 유지 | 〔URL〕 ru «2-8 ноября 2026 г.» 재확인 |
| сателлит·хайроллер·серия·этап·гарантия·Main Event | OK | 유지 | ru판 «хай-роллеров» 재확인(매체형 «хайроллер» 채택) |
| ru 상태 배지·필터·TBA·공식 사이트·미공개 | 판정 불가 | 제안 유지 | C 현지 편집자 렌즈 필수 항목으로 넘김 |
| fr Corée vs Corée du Sud | 국가칸은 Corée du Sud | 대회명 치환엔 «Corée» 유지 | 대회명 속 국가명(APPT Korea)이지 국가 식별 칸이 아님 |
| 공식 언어판 | Aix·EPT Prague = fr·ru 있음 / Middelkerke fr만 / King's 없음 / Merit·WPT Cyprus·Triton 판정 불가 | 반영 | §4 |

## 5. HOME_COUNTRY · 국가 칩

- fr = `["FR", "BE", "CH", "MC"]` · 칩 `{ FR: "France", BE: "Belgique", CH: "Suisse", MC: "Monaco" }` — 보드 FR 3 · BE 2 · CH 3 · MC 1(키워드 뱅크 §4).
- ru = `["CY", "CZ", "EE", "ME"]` · 칩 `{ CY: "Кипр", CZ: "Чехия", EE: "Эстония", ME: "Черногория" }` — CY 6행 전부 북키프로스(Kyrenia·Çatalköy · tr·ar 선례 칩도 «Kıbrıs»·«قبرص») · 관련검색 «Мерит покер»·«Розвадов покер»·«Kings of Tallinn» 〔DFS〕.

## 6. 확정 카피 (Fable 서브 1회 초안 → Opus 재계측·수정 · 글자 수 = 코드포인트)

🔴 fr 정서법: `?` `!` `:` `;` 앞은 고정공백(U+00A0) — 아래 «⍽» 자리. 인용부호 « » 안쪽도 U+00A0.

| 자리 | fr (tu) | 자수 | ru (ты) | 자수 |
|---|---|---:|---|---:|
| metaTitle 훅 | Tournois de poker 2026 — {next} dès le {date} (≤55면 훅, 아니면 폴백) | 예 54 | Покерные турниры 2026 — {next}, старт {date} | 예 52 |
| 훅 {date} 꼴 | «2 déc.»(일 + MONTH_FR 축약 · 1일은 «1er») | | «2 декабря»(일 + MONTH_RU_GEN) | |
| metaTitle 폴백 | Calendrier tournoi poker 2026 — dates et buy-in | 47 | Покерные турниры 2026 — расписание и бай-ины | 44 |
| metaDescription | Quels tournois de poker jouer en 2026⍽? Dates, buy-in et source officielle de chaque tournoi live, sur un seul calendrier. Mis à jour le {date}. {ongoing} → clamp 158 | 148(ongoing 전) | Крупные покерные турниры 2026 со всего мира в одном расписании. Даты, бай-ины и официальный источник по каждому турниру. Обновлено {date}. {ongoing} → clamp 158 | 142 |
| desc {date} 꼴 | 14/10/2026 | | 14.10.2026 | |
| {ongoing} | En cours⍽: A, B. | | Сейчас идут: A, B. | |
| h1 | Tournois de poker 2026 — calendrier | 35 | Покерные турниры 2026 — расписание | 34 |
| og/twitter desc | Tournois de poker live dans le monde⍽: dates, buy-in et source officielle de chacun. | 84 | Живые покерные турниры по всему миру: даты, бай-ины и официальный источник по каждому. | 86 |
| asOf | Mis à jour le {dot} | | Обновлено {dot} | |
| HubPage title · side-rail 라벨 | Tournois (h1 핵심명 · FR_CLUSTERS tournament pillarLabel «Tournoi»는 전략 클러스터 단수형이라 보드 이름으로 안 씀) | | Турниры (h1 핵심명 · ru엔 필라 클러스터 없음) | |

- heroLead fr: «Chaque tournoi ci-dessous a été vérifié sur le site de son organisateur, et chaque carte renvoie vers la page que nous avons consultée. Le statut change tout seul selon les dates. Les calendriers bougent⍽: avant de bloquer tes dates, la page officielle a toujours le dernier mot.»
- heroLead ru: «Каждый турнир ниже сверен с сайтом его организатора, и каждая карточка ведёт на ту самую страницу, с которой мы брали данные. Статус меняется сам, по датам. Расписания сдвигаются, так что прежде чем бронировать билеты, проверь официальную страницу — последнее слово всегда за ней.»
- 수정 이유: ru 훅 «с {date}»은 2일(«со 2 декабря»)에서 전치사가 바뀐다 → «, старт {date}»로 격변화 회피. fr 훅 1일 = «1er».
- sourceNote·emptyState·koLink·countsLine = pt 문장의 뜻 그대로(§3 용어로). countsLine fr «{n} tournois · {c} pays» · ru 수사 일치 필요 → «Турниров: {n} · стран: {c}»(복수형 함수 없이 안전한 꼴).

## 7. FAQ · 현지 블록 (사실 = `lib/tournaments.ts` 행에서만 · 날짜 문장은 update-calendar에 만료 등재)

fr faqHeading «Questions fréquentes»〔코퍼스: app/fr/hand-chart/dict.ts:116〕 · ru «Частые вопросы»〔코퍼스: posts-ru 5회〕.

**fr FAQ** (질문 1 = PAA «Quels sont les événements de poker prévus pour 2026⍽?»〔DFS SERP〕를 보드 범위로 좁힘)
1. Q «Quels sont les grands tournois de poker en 2026 en France et en Belgique⍽?» — A: 이 표의 FR·BE 행: EPT Paris(18 févr.–1er mars 2026 · Le Palais des Congrès) · WSOP Circuit Paris(1er–14 sept. · Partouche Casino Club) · BPC Megastack Edition(17–27 sept. · Circus Casino Resort Namur) = 종료 / **PokerStars Open Aix-en-Provence(2–8 nov. · Pasino GRAND Partouche · Main Event €1 100, €1 000 000 garantis)** · WSOP Circuit Middelkerke(6–15 nov. · Casino Middelkerke Betfirst by Partouche). 필터 «France»·«Belgique» 안내. EPT Monte-Carlo(30 avr.–10 mai · Sporting Monte-Carlo)는 MC.
2. Q 누구나 참가? — pt FAQ 2와 같은 사실(Triton 추천제·satellite 없음 / Holdem Masters 초대권·현금 바이인 없음 / APT Championships 업계 전용 첫날 / APL Seoul seat 티켓 전용).
3. Q buy-in은 얼마? — pt FAQ 3과 같은 뜻(같은 시리즈 안에서도 폭 · 주최측 공개 통화 그대로 · 없으면 미공개 · 추정 안 함).
4. Q 적은 돈으로 큰 Main Event에? — pt FAQ 4와 같은 뜻(satellite · 세부는 각 시리즈 일정표 · 카드가 공식 페이지로).

**fr 현지 블록** localHeading «Avant de partir»
- «Aix-en-Provence en novembre» — PokerStars Open Aix-en-Provence 2–8 nov. 2026 · Pasino GRAND Partouche · Main Event €1 100 · €1 000 000 garantis.
- «Prague en décembre⍽: deux festivals à la suite» — EPT Prague 2–13 déc. 2026 · Hilton Hotel Prague · PokerStars Open (Main Event €1 100, 2–7 déc.) puis EPT (Main Event €5 300, 7–13 déc.) · Cup €825 · High Roller €10 300.
- «Le buy-in dans la devise de l'organisateur» — €·$·CHF·₩ 그대로 · 환산 안 함(환율은 매일 바뀐다).

**ru FAQ**
1. Q «Какие турниры проходят на Северном Кипре осенью 2026?» (관련검색 «Мерит покер»〔DFS〕) — A: WPT Prime Cyprus Championship 15–19 октября · Chamada Prestige Hotel & Spa (Çatalköy) · Main Event $1 100 · $1 000 000 GTD / Triton ONE North Cyprus 5–15 ноября · Merit Royal Diamond Hotel & Casino (Kyrenia) · бай-ин не объявлен / Triton SHR North Cyprus 15–30 ноября · там же · $25 000–$150 000 · сразу после Triton ONE, последний этап сезона. 필터 «Кипр».
2~4. fr와 같은 뜻.

**ru 현지 블록** localHeading «Перед поездкой»
- «Северный Кипр: Merit и Triton» — 위 3개 행.
- «Чехия: Розвадов и Прага» — German Poker Masters €1MILLION 20–30 ноября · King's Resort Rozvadov · €35–€600 · Main Event €285 · €1 000 000 GTD / German Poker Days 2–6 декабря · €35–€199 / EPT Prague 2–13 декабря · Hilton Hotel Prague.
- «Бай-ин в валюте организатора» — fr 3번과 같은 뜻.

🔴 «Rozvadov»·«Kyrenia»·«Çatalköy»의 키릴 표기는 §4 판정(라틴 유지가 기본)을 따른다 — 블록 제목의 «Розвадов»·«Прага»·«Северный Кипр»는 대회명·장소가 아니라 일반 지명이라 러시아어 표준 엑소님으로 쓴다(관련검색 «Розвадов покер»〔DFS〕).

## 8. §13 자리

- 수치는 데이터 행·EN 사전 축어(표기 변환만): FIELD 사전의 KRW 환산(150만 = 1,5 million / 1,5 млн …) · SCHEMA_DESC 2건(holdem-masters-9: ₩2,4 milliards = WPL ME ₩2 milliards + Mini ME ₩400 millions · 30 flights 11 oct.–9 déc. · finale 13 déc. / wpt-seoul: 45 épreuves · ₩1 milliard garanti) · FAQ·현지 블록의 날짜·바이인·GTD(§7 원문 행).
- C에서 기계 대조: FIELD_FR/RU 값의 숫자 토큰 = FIELD_EN 값 숫자 토큰(단위 환산 정규화 후).
