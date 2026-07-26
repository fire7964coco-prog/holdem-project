# es-US 구글 상위노출 실행 플랜 (50개주 실측 기반)

> 2026-07-26. 아키텍처=`es-plan-latam-us-hybrid.md`(하이브리드 /es/+/es-us/, 확정) 위에 얹는 **"실제로 page 1에 올리는" 랭킹 실행 플랜**. 근거 데이터=`es-us-search-demand-phase1.md`(미 50개주 전수 실측)·`es-us-hispanic.md`(티어·register). 이 문서는 순위 메커니즘·발행 캘린더·KPI에 집중(아키텍처 재논의 아님).

---

## 0. 한 줄
**"어느 주든 스페인어로 포커를 정확히 설명하는 유일한 사이트"가 되어, 경쟁 부재(whitespace) × 검색의도 완벽매칭 × 진짜 E-E-A-T로 롱테일 top3 → 州허브 page1을 먹는다.** 발행 순서는 전환×경쟁부재×히스패닉규모(티어).

---

## 1. 왜 page 1이 현실적인가 (순위 논리)

### 1-1. 유일한 확실한 지렛대 = 경쟁 부재
50개주 전수 실측 결과, 스페인어 州로컬 포커 쿼리에 **랭크되는 건 전부 검색의도 불일치 3부류뿐**:
1. **영어 로컬**(pokeratlas·pokernews·카지노 공식) — 언어 불일치(영어 못 읽는 독자가 이탈)
2. **스페인 .es**(888.es·bwin·CasinoBarcelona) — 국가 불일치(스페인법·€·미국서 무용)
3. **LATAM .mx**(codigopoker·Stake.mx) — 국가 불일치(멕시코법·18세·20%세금)

→ **US-로컬 의도(in-language + in-state + accurate)를 만족시키는 결과가 0.** 우리가 그 자리를 채우면 구글은 만족신호(체류·낮은 pogo-stick·재방문·피인용)로 순위를 올린다. 이게 whitespace 랭킹의 핵심.

### 1-2. 관문 = YMYL(gambling)
도박은 **YMYL**(Your Money Your Life) → 구글이 E-E-A-T를 엄격 평가하고 gambling SERP는 어필리에이트 스팸이 많다. **경쟁 부재만으로는 부족하고, "신뢰할 수 있는 정확한 유일 자료"여야 이긴다.** → §4가 선택 아닌 필수.

### 1-3. 우리 강점
- 사이트가 이미 **작성자 권위**(WSOP·GTO·12년) 프로필 보유 → es-US에 재사용.
- §13 정확성 프로토콜 = gambling YMYL의 정확성 요구와 정확히 일치(카지노≠포커·나이 이원·테이블수 검증).
- 이미지 18언어 공용·SSG 속도·필라클러스터 내부링크 인프라 완비.

---

## 2. 콘텐츠 아키텍처 — 州 pillar-cluster + 전국 허브 2개

### 2-1. 州 단위 미니 필라-클러스터
각 우선주 = **1 허브 + 3~4 위성**(실측 4컨셉이 그대로 위성):
```
[州 허브] ¿Es legal el póker en [estado]? (합법성·나이·3경로 = 필라)
   ├─ [위성 살라]   Dónde jugar en vivo (도시별 룸 가이드)
   ├─ [위성 cómo]   Cómo registrarse / primera vez / edad
   ├─ [위성 gap]    "deportivas sí, póker no" 또는 크로스보더/문화 훅
   └─ [위성 online] sweeps/offshore 정직 안내 (주별 합법성 반영)
```
- 허브가 위성으로, 위성이 허브로 상호링크(EN 필라클러스터 패턴 재사용).
- 얇은 주(ID·KY·SC·AL 등)=**2 리치글 + FAQ 흡수**(실측 권고), 4개 억지 X.

### 2-2. 전국 허브 2개 (내부링크 중심축 + generic 흡수)
1. **허브 A — 합법성 지도**: `¿En qué estados de EE.UU. es legal jugar póker? (guía 2026)` — 50주 테이블(라이브/온라인/스포츠/나이/sweeps 열). **초소형 8주(UT·HI·AK·ND·MT·WY·ME·VT)는 여기 row로 흡수**(단독글 X). 모든 州허브로 링크 방출 → 링크주스 분배 + generic `¿es legal el póker en EE.UU.?` 흡수.
2. **허브 B — 규제전환/MSIGA**: `Los 6 estados donde el póker online es legal (y cómo comparten mesas: MSIGA)` — 규제 6주(NJ·NV·PA·MI·DE·WV) + 앱 매핑(WSOP=NV/NJ/PA/MI · BetRivers=PA/MI/DE/WV · PokerStars-FanDuel=NJ/PA/MI). **최고 전환 자산**(가입 직결).
   - ⚠️**정확성**: "7개주"로 쓰지 말 것 — **운영 중인 건 6개주**. CT는 2021 합법화했으나 **미출시**(licensee 포기), RI는 온라인 카지노만 있고 포커 없음. 이 둘은 "legalizado pero sin lanzar"로 별도 분류.

### 2-3. register 5클러스터 로컬라이징 (단일 voice 불가)
멕시코(tuteo 표준) / 쿠바(FL) / 카리브 PR·도미니칸(NY·NJ·PA·MA·CT·RI·OH북동) / 중미 voseo(MD·VA·GA·LA온두라스) / 특수 NM. → 州글마다 해당 클러스터 voice·슬랭·통화(전부 USD).

---

## 3. 온페이지·기술 SEO — 글별 랭킹 체크리스트

| 항목 | 규칙 |
|------|------|
| **URL** | `/es/blog/[slug]` 유니크 글(인프라 0). generic 충돌 head-term만 나중 `/es-us/`(Phase 4). URL 무변경(301 금지) |
| **hreflang** | 하이브리드 유지. 유니크 로컬글은 대응본 없어 hreflang 단독=정상 |
| **제목/메타** | 스페인어 SERP 잘림 방지(제목 ~60자·desc ~150자). 훅+핵심키워드. 州명·연도(2026) 명시 |
| **H2** | **PAA·실검색 형태 그대로**(질문형 H2 OK, 스페인어권은 질문검색 많음). Q-A-E 골격. tldr 2~3줄 직답 |
| **Schema** | `FAQPage`(PAA 그대로) + `Article`(author=권위 프로필) + `BreadcrumbList`. ★`Casino`/`LocalBusiness` 금지(우린 운영자 아님) |
| **내부링크** | 州허브↔위성(EN parity 밀도) + 州허브→전국 허브 A/B + 개념 쿼리는 `/es/` 폴백 개념글로(카니발 회피=로컬≠개념) |
| **이미지** | 18언어 공용(경로 동일·alt만 es). webp≤60KB·1200×675·priority 히어로. 인포그래픽=합법성 지도/3경로 흐름에 상황적 |
| **속도** | SSG·LCP·CLS 기존 기준. 州 테이블은 정적 렌더(색인) |

---

## 4. E-E-A-T / YMYL 신뢰 신호 (gambling = 필수, 선택 아님)

1. **작성자 권위**: 기존 WSOP/GTO/12년 프로필을 es-US Article schema author로. "누가 썼나" 명시.
2. **1차 출처 인용**: 주 규제기관(NJ DGE·PA PGCB·MI MGCB·NV GCB) 공식 + 카지노 공식 포커룸 페이지. estafa.info·americascardroom.eu 등 **offshore 어필리에이트 인용 절대 금지**(YMYL 신뢰 파괴).
3. **책임게임·안전**: 각 글 하단 책임도박 라인(1-800-GAMBLER / es 자원) + 나이 명시(주별 18/21 이원 정확히).
4. **정직성**: sweeps는 "합법 대안" 과장 X → **"금지되는 중"**(NY 금지·KY 제한·OK/IN/IA/TN 등) 정직 프레임. offshore "합법" 단정 금지.
5. **정확성 = §13급**: 카지노≠포커룸(실측 정정 다수: NE WarHorse·NC Two Kings·AR Oaklawn/Southland·ID 트라이벌·AL Wind Creek·KY HHR)·나이 이원·PokerStars=FanDuel 리브랜드·card house 번역금지·테이블수 발행 전 재확인. **오류 1개 = YMYL 신뢰 치명상.**

> ★이 5개가 "경쟁 부재인데 왜 아직 아무도 안 먹었나"의 답 = offshore 스팸은 신뢰가 없어서 YMYL 관문을 못 넘는다. 우리는 넘는다.

---

## 5. GEO / AI 답변 최적화 (스페인어 AIO 골든타임)

- **인용가능 패시지**: 각 州허브 상단에 자기완결 직답 단락(¿es legal? → 한 문장 yes/no + 조건). PAA를 H2로 그대로 → AI Overview/ChatGPT가 인용.
- **표·구조화**: 합법성 지도(허브 A)·MSIGA 풀(허브 B)·나이 이원표 = LLM이 뽑아쓰기 좋은 구조.
- **비대체 자산**: 실측 문화훅(CA "póker mexicano" 41장·SD "mano del muerto" A-A-8-8·NY clandestino·LA "Little Honduras"·MT 바 포커)은 LLM이 대체 못 하는 고유 정보 → 피인용·백링크 유발.

---

## 6. 발행 로드맵 — ROI 순서 & 구체 캘린더

### ⭐ Wave 1 (첫 12편) — 최고 ROI: 전국 허브 2 + 티어 S 대표 + 최강 훅
> 목적: ①내부링크 척추(허브 2개) 먼저 세워 이후 州글이 즉시 링크주스 받게 ②전환 최강 규제주 ③최대독자·템플릿 원형.

| # | 주/유형 | 글 컨셉(제목 방향) | 훅·왜 이김 | register |
|---|---------|-------------------|-----------|----------|
| 1 | 전국 허브 A | `¿En qué estados es legal el póker en EE.UU.? (2026)` 50주 테이블 | generic 흡수 + 링크척추 + 초소형8주 흡수 | 중립 |
| 2 | 전국 허브 B | `Los 7 estados con póker online legal + cómo comparten mesas (MSIGA)` | 최고 전환·앱매핑 | 중립 |
| 3 | **NY** | `Deportivas sí, póker por dinero no: la verdad legal en Nueva York 2026` | ★삼중훅+sweeps금지 최신성·최대 카리브 시장 | 카리브 |
| 4 | **NJ** | `Cómo jugar póker por dinero real en NJ: registrarse en BetMGM/WSOP paso a paso` | 전환직결·스페인어 경쟁 1개뿐 | 카리브 |
| 5 | **TX** | `¿Es legal el póker en Texas? Card houses en Houston/Dallas/Austin` | 최대독자·비규제 50주 템플릿 원형·card house | 멕시코 |
| 6 | **CA** | `Cardrooms de California + el 'póker mexicano' del The Bike` | 문화훅·대형 멕시코·비대체 | 멕시코 |
| 7 | **FL** | `Póker en Hialeah y Miami: dónde jugar y la edad (18 vs 21)` | 쿠바·나이 이원·MIA 근접 | 쿠바 |
| 8 | **AZ+CO** | `¿Por qué puedes apostar deportes pero no póker online? (AZ/CO)` | ★gap훅 최강·스포츠벳 로컬 도는데 포커 공백 | 멕시코 |
| 9 | **IL** | `Dónde jugar póker cerca de Chicago (la mejor sala está en Indiana)` | 시카고 대형 히스패닉·IL/IN 크로스보더 정정 | 멕시코+PR |
| 10 | **NV/Vegas** | `Cuánto cuesta jugar póker en Las Vegas: edad 21, propinas, salas` | 관광+US거주 하이브리드·LATAM 공용 | 중립 |
| 11 | **TX** 위성 | `Cómo funciona la membresía de un card house (Texas Card House, The Lodge)` | #5 클러스터·롱테일·seat fee 공백 | 멕시코 |
| 12 | **NJ** 위성 | `¿Puedo jugar con VPN en NJ? Geolocalización y residencia vs ubicación` | ★이민자 오해(residencia≠ubicación)·전환 클러스터 | 카리브 |

> ### ⚠️ 2026-07-27 재검토 — **위성 2편(#11·#12)은 현 설계로 쓰면 안 된다(카니발)**
> 부모 글을 실제로 발행하고 나니 위성의 핵심 내용이 이미 부모 안에 들어가 있다. 허브 A↔B에서 겪은 카니발 문제와 **동일 구조**라, 그대로 쓰면 두 글이 서로를 깎는다.
>
> - **#11(card house 멤버십)** → TX 본문이 이미 `## ¿Cómo funcionan los card houses?` + `## ¿Cuánto cuesta jugar?`(클럽별 멤버십·시간당 좌석료 표)를 커버하고, The Lodge 새벽 무료 시간·시니어/군인 할인·**지점 간 멤버십 비호환**까지 들어가 있다. → **남은 고유 수요 없음.**
> - **#12(VPN·지오로케이션)** → 내용이 세 글에 이미 분산 완료: NJ `## ¿Tengo que vivir en Nueva Jersey?` / Hub B `## ¿Por qué la app dice que no estoy en el estado?` + FAQ `¿Sirve una VPN?` / Hub A 위치≠거주 단락. → **새 글은 3중 중복.**
>
> **재설계 후보 (키워드뱅크 기준 미커버 수요):**
> 1. ★**스페인 `.es` 사이트 오인 교정** — 미국 거주 히스패닉이 스페인어로 검색하면 스페인 라이선스 사이트(888.es·bwin 등)가 상위에 뜨는데 **미국에서는 쓸 수 없다**. 전 주(州) 공통이라 모든 주별 글이 링크하는 허브형 자산이 되고, 스페인어권에 이 교정 글이 아예 없다.
>    ⚠️ 단 키워드뱅크엔 "함정"으로만 기록돼 있고 **검색 수요 실측은 안 됨** → 착수 전 수요 확인 필요.
> 2. **NJ 계정 개설 단계별(전환형)** — `cómo registrarse en BetMGM Poker` · `depósito mínimo`($10) · `bono`. Hub B는 "무엇이 합법·어떤 앱·세금"이라 **트랜잭셔널 의도가 비어 있다.** 다만 착수 전 Hub B와의 경계를 문장 단위로 확정할 것(또 카니발 나면 같은 실수 반복).
> 3. **Wave 2로 바로 진행** — 티어 A 16편은 신규 주라 중복 0. 가장 안전한 선택.
>
> **판단 대기**: 사용자 확인 후 진행. 기본값 = 3번(Wave 2 착수).
>
> 📌 **교훈(일반화)**: 위성글은 **부모를 발행한 뒤에 각도를 확정**해야 한다. 기획 시점의 위성 컨셉은 부모가 얼마나 깊게 쓸지 모른 채 잡은 것이라, 부모가 충실할수록 위성이 잡아먹힌다. Wave 2·3의 "클러스터" 항목도 착수 직전에 같은 점검을 할 것.

### Wave 2 (13~28편) — 티어 A 확장 + 3대 훅 전파
- 대형 라이브 州허브+살라: OH(Toledo 자체룸 정정)·IN(HB1052 뉴스훅)·LA(Caesars WSOP·Kenner OTB 정정)·OK(WinStar 댈러스)·CT(Foxwoods 114 정정)·MA(Encore Everett)·MD(홈게임 $1000법·Horseshoe OPEN)·WA(felony 보호글)·MI(오프쇼어 crackdown).
- gap훅 전파: NC·VA(VA≠WV)·GA(홈게임 불법·Cherokee)·TN(Tunica).

### Wave 3 (29~44편) — 육가공벨트 슈퍼클러스터 + 티어 B/C
- 육가공 로컬(정직한 거리안내): KS(Garden City→Wichita 3h)·NE(Council Bluffs 크로스)·IA·MN(Canterbury 18+)·AR(Saracen 유일·NWA→OK).
- 티어 C 리치훅: MS(Beau Rivage·Tunica 이벤트)·WI(Potawatomi)·OR(포틀랜드 단속 스토리)·ID(라이브 없음 gap)·MO·RI(Providence 도미니칸)·NM(국가 오인식 정정).
- 문화/비대체: SD(mano del muerto)·NH(charity 포커).

### Wave 4 — 규제 잔여 흡수 + /es-us/ 판단
- DE·WV=집약 1글씩 + 크로스보더 흡수(VA/DC→Charles Town). 초소형 8주=허브 A에 이미 흡수.
- generic 충돌 head-term이 쌓였으면 **그때** `/es-us/` 로케일 구축(Phase 4·zh-hant 선례).

### 케이던스
- **허브 2개 먼저**(Wave1 #1-2) → 이후 州글이 즉시 상호링크. 州는 **허브→위성 순**(허브 색인 먼저).
- 글마다 편집→빌드(check-intl-links)→커밋→푸시 자동배포([[en-hardening-autodeploy-cadence]]). Wave 끝마다 보고.
- 글별 워크플로: WebSearch PAA로 롱테일 재검증(실측 데이터 있으니 확인 위주) → register 적용 → §13/§4 검수 → 발행. (lowfruits US export는 보조, 실측이 주 소스.)

---

## 7. KPI · 측정

- **GSC 언어별(gsc:es-US)·주별** 노출/평균순위/CTR 추적([[gsc-site-totals-diluted-by-translations]] — 총계 말고 es-US 세그먼트로). 주별 CSV → `docs/gsc-tracking`.
- **단계 목표**: (1) 발행 4~8주 내 롱테일 색인+노출 발생 → (2) 롱테일 top10 → (3) 州허브 page1 → (4) 전국 허브 A/B page1(generic).
- **선행지표**: 색인율·평균순위 상승·AI Overview 피인용(브랜드 검색·직접유입 증가).
- **리뷰**: Wave 종료마다 GSC로 "먹히는 훅 vs 안 먹히는 주" 판별 → 다음 Wave 우선순위 재조정(예: gap훅이 잘 먹으면 gap훅 주 앞당김).

---

## 8. 리스크 · 주의

1. **YMYL 신뢰**: §4 전항 필수. offshore 인용·"합법" 과장 1회면 신뢰·순위 붕괴.
2. **최신성**: sweeps 전국 붕괴 진행(NY 금지·KY 제한·OK/IN/IA/TN/MT/UT 등)·PokerStars→FanDuel·법령 발효일 → 카피에 "확인 요망" + 발행 시점 재검증.
3. **정확성 재확인(발행 전)**: 테이블수·나이·포커룸 개실·홈게임법 연도·CT Foxwoods 114=수용능력 등 실측 (재확인) 플래그 = `es-us-search-demand-phase1.md` 각 주 하단.
4. **카니발**: 州 로컬글 ≠ /es/ 개념글. 겹치면 몰아주기([[seo-tool-vs-blog-cannibalization]]).
5. **URL 무변경**: /es/ 개명 금지(301·색인리셋). 추가형만.
6. **속도 위험**: 州 테이블·인포그래픽 용량·CLS 점검([[review-include-speed-check]]).

---

## 9. 첫 착수 (승인 대기)
- **Wave 1 #1(전국 허브 A) 또는 #3(NY)부터** 착수 제안. 허브 A 먼저=링크척추, NY 먼저=최신성·최대시장 임팩트.
- 사용자 확정 필요: (가)이 랭킹 플랜/Wave 순서 승인? (나)첫 글=허브 A vs NY vs 다른 주? (다)작성 입력=WebSearch PAA 실측 데이터로 바로 브리프 vs lowfruits US export 병행?
