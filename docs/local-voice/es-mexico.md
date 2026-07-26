# ES 멕시코·LATAM 현지 voice·검색·포스팅 패턴 (번역/신규 포스팅 참고 파일)

> 2026-07-25 대규모 정독(5개 병렬 에이전트: 글로사리·뉴스스타일·교육글구조·포럼말투·검색행태). 소스: Stake.mx·salaspokerlatam·PokerStars Learn LATAM·codigopoker·pokernoticias·poker10(AR)·poker-red·strendus.mx·EducaPoker 등.
> ★es는 미국·멕시코·남미 공용. **개념/용어 쿼리는 멕시코≈스페인 거의 동일 → 스페인 .es 대형사이트가 SERP 장악(차별화 어려움).** 멕시코 특화 winnable은 **로컬 로지스틱스(합법성·도시별 살라·페소 바이인·대회)**와 **톤/voice**에 있음.
> ⚠️ 정독 시 WebFetch 차단돼 WebSearch 발췌 기반 — 구조 관찰은 제목/스니펫 근거(본문 verbatim은 추후 Playwright/WebFetch 허용 시 보강).

---

## ⚠️ 먼저: 정정·함정 (이전 메모 교정)
- ★**"mano maldita" 보정(2026-07-25 lowfruits)**: 주로 **구어 flavor**지만 **질문형 롱테일로는 실검색됨** — `¿cuál es la mano maldita en el poker`(w10=3, winnable). → cooler/peor-mano/bad-beat 페이지 FAQ에 **"¿Qué es la mano maldita?"**로 흡수 가능(구어 은유=cooler/최악의 손 설명). 단 **cooler의 주 검색어는 여전히 영어 "cooler"**, 저주/운명 서사의 canonical은 **"mano del muerto"**(dead man's hand, A♠A♣8♠8♣, Wild Bill Hickok, strendus.mx). mano maldita를 head H2로 단독 쓰진 말고 FAQ 롱테일로.
- ★**"póker" = 포카드(four of a kind)**, 게임 아님. 족보: Escalera real / Escalera de color / **Póker** / Full / Color / Escalera / Trío / Doble pareja / Pareja / Carta alta.
- ★**"color" = 플러시**, **"escalera de color" = 스트레이트 플러시**(문자 그대로 "color escalera" 금지).
- ★**"coraje" = 분노**(용기 아님, false friend). tilt 맥락 "decisiones con el coraje".
- ★**"póquer"(q) = 스페인/격식 tell.** 멕시코 타깃은 **poker/póker** 사용(póquer 지양). 쿼리는 무악센트 **poker**가 압도적.

## ★ 멕시코 특화 용어 (Spain과 다름 — 현지인 티 내기용)
| 개념 | 멕시코 | Spain | 신뢰도·비고 |
|------|--------|-------|------|
| **cooler** | 크루도 **cooler**(검색) + 구어 "mano maldita" | cooler | ★bad beat과 **명확히 구분**해서 씀(양쪽 강한손 충돌=cooler, 불가피) |
| **tilt/on tilt** | **"calientón"** · **"jugando encabronado"** | tiltearse/quemado | 高신뢰(Stake.mx). "coraje"=분노 |
| **tanking(지연)** | **"hacerse el chistoso"** · **"ya tanquea, cuate"** | — | 高신뢰. cuate 마커 |
| **bust(탈락)** | **"quedó tronado"** · **"quedó pelado"** | — | 高신뢰(Stake.mx) |
| **shark** | **"tiburón"** · **"talacheros"** · "los que saben" | tiburón | talacheros=talacha(고된노동)에서, 멕시코 특유 |
| **whale** | **"ballena"** | ballena | 헐렁+큰돈 플레이어 |
| **fish** | **"pez/pescado"**(검색은 pez) + 크루도 fish | pez/fish | "pescador"=돈 주는 사람 |
| passive player | **"loro"**(앵무새) | — | 단일소스, 중신뢰 |
| **draw** | **"traigo proyecto de color"** · **"voy con proyecto de escalera"** | proyecto | ★멕시코 회화 동사(traigo/voy con). gutshot="proyecto de escalera interna" |
| **bluff** | **"farol"** · "tirar un farol" · blufear | farol | 검색 강함(스페인어 정착어) |
| **fold** | **"foldear"** · tirar · botar | foldear/pasar | anglicism 동사화 |
| **check** | **"pasar"** · **"checar"**(멕시코 anglicism) | pasar | |
| **all-in** | **"ir con todo"** · "todo dentro" | all-in/ir con todo | |
| **rake** | **"rake"** · "comisión"(★NO rastrillo) | rake/comisión | MX 카지노 ~5% del bote, 소액 cap |
| dead man's hand | **"la mano del muerto"** · "mano del hombre muerto" | 동일 | A-A-8-8. ★검색·콘텐츠 존재(멕시코 문화) |
| bubble | **"burbuja"** | burbuja | |
| runner-runner | **"rúnner"** | — | 턴+리버로 완성 |
| calling station | **"caller/calling station"** | 동일 | 아무 페어나 콜 |
| **cuate** | 친구/dude(테이블 casual) | — | ★멕시코 address 마커 |

### 지역 변이(멕시코 밖)
- **cooler = "vuelco"**(콜롬비아) / **nit = "rata"**(칠레) / **flor**=중남미 일부(아르헨/우루과이) flush(멕시코·스페인은 color).
- **아르헨티나 = voseo**(apostás·tenés·podés·jugás), bankroll="la banca", "boludo"(모욕↔친근 양면). ★멕시코=tú, 아르헨=vos는 **하드 분기**(같은 글로 둘 다 못 씀). 멕시코 우선이면 tú.

## ★ 멕시코 말투 마커·감정 문법 (native 느낌)
- **"cuate"**(친구)·**"no mames"**(충격/분노 감탄=바베 반응)·"encabronado"(빡침).
- 질문 구성 **"¿cómo le hago?"**(더미 목적어 le = 멕시코 tell, 스페인 "¿cómo lo hago?"와 다름) · "¿qué hago con...?" · "¿conviene ir all in?" · "¿me pagan si...?" · "¿foldeo o pago?".
- **"duda"**(=quick question, 스페인·LATAM 포럼 표준. "pregunta"보다 이 단어).
- ★**감정 문법 = 운/사이트/상대 탓 + 저주 서사**(자기math 탓하는 미국과 대비): "mano maldita/del muerto", "me cago en pokerstars", theatrical punctuation(!!!!!), 사이트 의인화("PokerStars se enfada contigo"). bad-beat 포럼 장르명 자체가 "badbeats-**lloros**-y-curiosidades"(울음).
- ★과용 금지 — 정보글 톤 유지하며 살짝. (güey/neta/órale는 일반 슬랭엔 있으나 **포커 맥락 verbatim 미확인** → 남용 말 것.)

## ★ 멕시코 검색 방식 (쿼리 형태소)
- 주력 프레임: **"¿qué es un/el [término]?"**(개념) · **"cómo se juega/jugar [X]"**(룰) · **"cuál es la peor/mejor mano"**(최상급) · **"qué gana/vale más — X o Y"**(비교, 고의도) · ★**영어term + "que es" 후치**("bad beat poker que es") = LATAM 타이핑 습관.
- 유저는 악센트·¿ 자주 생략(구글 동일취급). 쿼리는 무악센트 **poker** 지배.
- 영어 jargon은 영어로 검색 후 스페인어 설명 읽음(cooler·rake·fish·straddle·bad beat). 정착 스페인어(farol·burbuja·color·escalera·tiburón·pez)만 스페인어로 검색.

## ★★ 포스팅 구조 패턴 — 한국/미국과 다른 점 (사장님 요청 핵심)
### 뉴스·토너 (codigopoker·pokernoticias)
- **제목 = SVO 서사형**(키워드 아님): `[선수] + 생생한 과거동사(lideró·embolsó·se coronó·aplasta) + [무엇/어디]`. 미국("2025 PSOP Puebla Day 1B Results")·한국("결과 정리")과 최대 대비.
- **콜론 2단**: `[시리즈/도시]: [훅]` (검색 시리즈 앞, 훅 뒤). 감정형용사(histórico·increíble·**Tremendo bombazo azteca**)·¡!·텔레노벨라식 훅("Festejó antes de tiempo y quedó afuera").
- **본문 척추 = 칩카운트**(664,000 chips·135 entries·16 advanced to Day 2). 결과 와이어 스타일.
- **TL;DR·FAQ·목차 없음** → SEO는 **엔티티 밀도**(선수·시리즈·도시·바이인·날짜)로. slug=제목 거의 verbatim 롱슬러그. geo+시리즈 태그 분류가 SEO 척추. per-country 서브도메인(mx./ar.codigopoker).
- 3인칭 저널리즘(1인칭은 인터뷰 인용만). 영어term 미현지화(el mejor stack·el 1B). 통화 로컬 우선(MXN$3 millones GTD + USD 병기).
- ★국가자긍심 "azteca"(bombazo azteca·cierre azteca)·도시정체성(Capitalino·Ranking Capitalino)·문화슬랭 **paños**(펠트/씬)·**calaverita**(해골, Día de Muertos = PSOP 낙아웃판 이름)·커뮤니티 **WhatsApp/Telegram+clubs+월간랭킹**·합법성 "vacío legal → salas internacionales(Malta/Curaçao/SEGOB)".

### 교육·전략 (PokerStars Learn LATAM·888.es·codigopoker)
- **정의 우선 → 케이스 분리(En Cash / En Torneos) → "Por ejemplo:" 숫자예시 → 전략** 순. 미국 example-first 아님.
- **본문 H2=명사형**, 질문형(¿…?)은 **제목·FAQ에만**(미국 질문형 H2 남발과 대비). 제목공식 **"[개념]: qué es, reglas y ejemplos"** 삼단 / 전략글 **"Estrategia:" 접두**.
- **영어 병기 필수·네이티브**: "Escalera Real (Royal Flush)"·"ciega (small blind)"·"kicker". 검색수요 이중언어라 항상 병기(한국=한글음차, 미국=병기안함 → LATAM은 병기).
- 톤: **tú(멕시코)/vos(아르헨)**, usted 거의 없음. operator=백과사전 건조, 아르헨 editorial=voseo 코칭체.
- ★**멕시코 의무: SEGOB 합법성 주석**(DGJS 허가코드·2026 IEPS 30→50% 세금). 미국/한국 how-to엔 없음 → MX타깃엔 "¿Es legal el poker en México?" 짧은 주석이 신뢰(E-E-A-T).
- **직역-교육장치**(rake="rastrillo" 어원설명·farol) + "sencillo de aprender, complejo de dominar" 오프너.
- FAQ 의문사 클러스터: **¿Qué es?**(정의) · **¿Cómo?**(절차) · **¿Cuánto?**(금액) · **¿Cuál es?**(선택) · **¿Quién gana…?/¿Qué pasa si…?**(엣지케이스) · **¿Cuándo conviene [X]?**(all-in/straddle/farol).

## ★ winnable 전략 (SERP 실측)
- **개념/용어 포스트**(cooler·rake·fish·farol…): 스페인 .es operator(888.es·casinobarcelona·gipsyteam·codigopoker) 장악 → **E-E-A-T 깊이+멕시코 경험담+비교 FAQ**로만 승부. 구글이 좋아하는 비교 FAQ: **"cooler vs bad beat"·"color o escalera qué gana"·"cuánto vale cada carta"**.
- **★멕시코 로컬 레인(winnable 갭 — 인컴번트 얇음/스팸)**: 합법성("poker en méxico es legal", online-vs-presencial)·**도시별 살라/카지노**(salas de poker cdmx·Cancún·Guadalajara·Palace Poker·Big Bola·Strendus)·**페소 바이인·WSOP México·torneos México**. .mx/뉴스사이트가 얇게 랭크(lja.mx·sportiumbet.mx·spammy .gob.mx) = 진입가능. → `docs/keyword-bank/es-local-tournaments.md`(526개) 활용 신규 현지 포스팅 후보.
- **★플레이어類 클러스터 "zoológico de jugadores"**: fish/tiburón/ballena/maniac/rock — 구글이 이미 묶음(한 사이트 제목 "El Zoológico de Jugadores de Poker") = 단일 포스트 기회.
- 짧은 직답 Q&A 페이지(laps4.com)가 비교FAQ에서 잘 랭크 → 직답 패시지 유효.

## 역시드 후보 (사장님 lowfruits 난이도 확인용)
> 정독서 나온 것 중 검색수요 있을 법한 것. **로컬>개념** 우선(개념은 스페인 장악).
- **로컬(winnable 기대)**: `poker en méxico es legal` / `es legal el poker en méxico` · `salas de poker cdmx` / `casino poker cdmx` / `...guadalajara` / `...monterrey` · `buy-in torneo méxico` / `torneos poker méxico` · `wsop méxico` · `mano del muerto` / `mano del hombre muerto`
- **비교 FAQ(개념이나 SERP가 좋아함)**: `diferencia entre cooler y bad beat` · `color o escalera qué gana` / `qué vale más color o escalera` · `cuánto vale cada carta en poker` · `cuál es la peor mano de poker`
- **플레이어類**: `tipos de jugador de poker` / `zoológico jugadores poker` · `qué es una ballena en poker` · `qué es un fish/pez en poker`
- **절차 FAQ**: `cuándo conviene ir all in` · `cuándo usar straddle` · `qué es el rakeback`
- (flavor·저볼륨 예상, 확인만): `calientón` · `talacheros` — 검색보다 본문 voice용

---
> 갱신 규칙: 멕시코/LATAM 편 작업 때마다 새 발견 추가. 다음 정독 보강 필요: **Playwright/WebFetch로 codigopoker·PokerStars Learn·poker10 본문 verbatim**(H2 정확순서·톤) + reddit/YouTube 코멘트 실말투(güey/neta 포커맥락 확인). Argentina voseo 전용 파일은 별도 필요 시.
