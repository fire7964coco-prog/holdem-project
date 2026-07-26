# es 트랙 플랜 보고서 — LATAM + US 히스패닉 하이브리드 구조

> 2026-07-26 확정용 플랜(사용자 논의 기반). 근거·논의 전문 = `docs/session-log-2026-07-26.md`. 전략 요지 = 메모리 [[es-country-split-hreflang-strategy]]·[[es-track-latam-reorientation]]. ★US 근거 = `docs/keyword-bank/es-us-hispanic.md`(**미국 50개주 전수 리서치 완료**, 2026-07-26).
> **한 줄**: 스페인 베이스로 경화된 es 전편은 **범스페인어 폴백**으로 두고(중립화는 기회주의적), 국가별 특화는 **대부분 유니크 글(/es/ 안)로 가볍게, 진짜 충돌하는 소수 head-term만 나중에 /es-us/ 로케일 분할**로. **US는 주별 디아스포라 register(5클러스터)로 로컬라이징.**

---

## 1. 목표 & 타깃 독자
- **메인 타깃 = LATAM + US 히스패닉** (스페인 아님). 스페인은 .es 대형사이트가 SERP 장악 = **어차피 못 이기는 시장**.
- **최대 기회(whitespace) = 미국**: 스페인어 州별 포커 콘텐츠 전 주 near-absent + USD 구매력 = 전환 최강. **★50개주 전수 확증(표본편향 아님)** — 어느 주든 스페인어 州특화 부재·영어 어필리에이트 독점.
- **핵심 문제**: 현재 es 42/42는 **Spain 베이스 경화**(€·póquer·vosotros) → LATAM/US 의도에 어긋남.

## 2. 목표 아키텍처 (Target Architecture)
`/es/`를 건드리지 않고(URL 변경·301 없음) 그 위에 얹는 **추가형 하이브리드**:

| URL | hreflang | 역할 |
|-----|----------|------|
| `/es/blog/x` | `es` (지금 그대로) | **범스페인어 폴백** — 개념·전략·확률 (전 국가 공용) |
| `/es-us/blog/y` | `es-US` (신규, 필요 시) | **미국 특화** — 진짜 국가충돌 head-term만 |

- 구글 해석: **미국 스페인어 검색자 → es-US, 그 외 전 스페인어권 → es**(es가 자동 폴백). /es/ 유지한 채 US만 override. LATAM 독자 영향 0.
- es만 독립·**글 단위 선택 분할** 가능(근거: `zh`/`zh-hant` 선례 + `secondaryLocalesForSlug()`가 슬러그별 hreflang 클러스터 → 43편 미러링 불필요).

## 3. ★목표 구조 vs 착수 순서 (모순 아님)
- **목표 구조엔 /es-us/ 로케일이 포함**된다(위 표). 하지만…
- **대부분의 미국 특화 콘텐츠는 로케일 분할이 필요 없다.** 로컬 토픽("텍사스 합법?"·"휴스턴 살라")은 스페인·멕시코에 **대응본이 없는 고유 글** → `/es/` 안에 국가맥락 넣은 유니크 글이면 구글이 관련성으로 미국에 매칭.
- **로케일 분할(/es-us/)이 진짜 필요한 경우 = 같은 slug/generic 쿼리가 국가마다 답이 다를 때만**. 예: 도시 없는 head-term `"salas de poker"`(US=Vegas/Houston vs MX=CDMX), generic `"¿es legal el poker online?"`. 롱테일·도시별은 유니크 글로 충분.
- **결론**: 목표 구조 = 하이브리드(/es/ + /es-us/). **ROI 최적 순서 = 유니크 /es/ 글 먼저 → generic 충돌 head-term이 쌓이면 그때 /es-us/ 로케일 구축.** (첫 물결 인프라 비용 0)

## 4. 수확 키워드 → 3바구니 매핑
사용자가 뽑은 MX/UY/PE/US 롱테일의 처리처:

| 바구니 | 처리 | 예 |
|--------|------|-----|
| **개념·슬랭 변이** | 기존 /es/ 개념글에 **FAQ 추가**(중립 또는 지역주 표기) | mano maldita → cooler글 FAQ |
| **로컬 로지스틱스** | **신규 국가맥락 유니크 글** (/es/ 안) | 합법성·도시별 살라·USD 바이인 |
| **진짜 충돌 generic head-term** | 나중에 **/es-us/ 로케일 분할** | salas de poker(도시無)·es legal online(국가無) |

---

## 4.5 ★US 시장 지도 (50개주 리서치 결과 요약 — Phase 1 설계 근거)

### 우선순위 티어 (전환×whitespace×히스패닉 규모)
| 티어 | 주 | 성격 |
|------|-----|------|
| **S** | NJ·NV·PA·MI·DE·WV + TX·CA·FL | 규제 전환 6개주(전부 MSIGA) + 대형 히스패닉 라이브 |
| **A** | IL·AZ·OH·IN·LA·OK·CT·MA·MD·WA·CO | 대형 라이브 + 히스패닉 |
| **B** | GA·NC·TN·VA + KS·NE·IA·MN·AR | offshore/합법성 훅 + ★육가공벨트 |
| **C** | NM·RI·ID·OR·MO·WI·MS | 소형·니치 |
| **D** | ND·SD·MT·WY·ME·NH·VT·UT·HI·AK | 저우선(소형/도박금지) |

### ★디아스포라 register = 5클러스터 (es-us는 단일 voice 불가 → 주별 로컬라이징)
| 클러스터 | 주 | voice |
|---|---|---|
| **멕시코**(tuteo) | TX·CA·AZ·IL·MI·CO·NM·WA·OK·MO·WI·KS·NE·IA·MN·AR·OR·UT·ID + 육가공벨트 | 표준 멕시코 |
| **쿠바** | FL | 쿠바 |
| **카리브(PR·도미니칸)** | NY·NJ·PA·MA·CT·RI·OH북동(Lorain) | tú·코드스위칭·"chavos" |
| **중미·남미 voseo** | MD·VA·GA·**LA(미 최대 온두라스)** | voseo·중립LATAM |
| **특수** | NM(Nuevomexicano 뿌리깊음) | 표준 멕시코+문화톤 |

### 3대 콘텐츠 훅 (전국 반복)
1. **합법성 템플릿** `¿es legal el poker online en [estado]?` — 전 주 최대 gap.
2. **★"스포츠벳은 합법인데 포커는 아님"** — 거의 모든 A/B주(CO·MA·MD·NC·VA·OH·IN·MO·IA·KS·AR·TN·WI·LA…) 검색혼동, 스페인어 답 전무.
3. **규제 전환 정리** — "어느 주=어느 앱+어느 MSIGA 풀"(WSOP=NV/NJ/PA/MI · BetRivers=PA/MI/DE/WV · PokerStars-FanDuel=NJ/PA/MI). = 최고 전환 자산.
- **★육가공벨트 슈퍼클러스터**(Liberal 69%·Schuyler 75%·Dodge City 67%·Worthington 45%·Yakima 54%·Springdale 42%): 히스패닉 초고밀+경쟁0+멕시코 register, 단 카지노 원거리 → "합법성+로컬+offshore/인근주".
- **⚠️sweepstakes 전국 붕괴**(금지 8주: CA·NY·OK·IN·IA·TN·MT·UT + MN 퇴출) → "합법 대안" 아니라 **"금지되는 중" 경고 앵글**.

---

## 5. 실행 로드맵 (ROI 순서)

### Phase 1 — US 히스패닉 로컬 whitespace ⭐최우선 (신규 /es/ 유니크 글, 인프라 0)
- **왜 1순위**: 콘텐츠 거의 부재 + USD 전환 최강 + 카니발 0 + 로케일 불필요 + 50개주 리서치 완료.
- **우선순위(50개주 티어 기준)**:
  1. **★규제 전환(S티어, 최고가치)** — NJ·NV·PA·MI·DE·WV "cómo registrarse legal·21+·geolocation·licensed vs offshore + MSIGA 어느 풀". 깨끗한 가입·전환 직결.
  2. **합법성 템플릿(전 주)** — `¿es legal el poker online en [estado]?` + ★"스포츠벳은 되는데 포커는 왜 안 되나" 훅.
  3. **대형 히스패닉 라이브(S/A)** — 도시별 salas/card house/cardroom (TX Houston·CA LA·FL Miami·IL Chicago·OK WinStar·CT Foxwoods·MA Encore·MD MGM…).
  4. **Vegas 관광**(LATAM 공용) — cuánto cuesta·edad 21+·propinas·WSOP en español.
  5. **육가공벨트 로컬 + 문화/비대체** — Garden City·Springdale·Schuyler 로컬 + CA "Mexican Poker"·NY clandestino·FL Hialeah·LA "Little Honduras".
- **글별 워크플로**(§CLAUDE.md·메모리 준수): lowfruits US 파싱 + WebSearch PAA로 롱테일 검증 → 작성. **★주별 디아스포라 register 적용**(위 5클러스터 표 — 멕시코/쿠바/카리브/중미voseo/NM). 3경로 정확·최신성 주의(sweeps 8주 금지·PokerStars→FanDuel 리브랜드).
- **§13 불변**: 핸드예시·확률 나오면 EN/기존값 그대로.

### Phase 2 — LATAM 로컬 whitespace (멕시코 → AR/PE/UY)
- 같은 패턴: 국가맥락 유니크 글(salas en CDMX·legal en México) + 현지 voice(멕시코 mano maldita·cuate / AR voseo). 원 핸드오프의 "멕시코 fish/cooler/bad-beat"는 여기서 흡수(개념 슬랭=FAQ, 로컬=새 글).

### Phase 3 — 기존 42편 스페인냄새 빼기 (기회주의적·경량)
- 대대적 재경화 X. Phase 1·2에서 개념글 역링크 걸 때 **손대는 김에** register 중립화(póquer→poker·vosotros→ustedes·€→통화중립/$·스페인슬랭→범LATAM). 또는 GSC가 LATAM 인게이지먼트 약함을 보이면 경량 패스.

### Phase 4 — /es-us/ 로케일 분할 (justified될 때만)
- generic 충돌 head-term이 여러 개 쌓이면 그때 인프라 구축.
- **건드리는 것(zh-hant 선례)**: `lib/intl.ts` 맵 6개에 es-us 추가(HTML_LANG=`es-US`·OG=`es_US`) + `lib/posts-es-us/` + `app/es-us/**` 3라우트. check-intl-links는 하이픈 로케일 이미 지원. 부수효과=다른 언어 hreflang alternates에 es-us 자동추가(정상).
- **안 필요할 수도 있음.**

---

## 6. 첫 착수 (제안)
**Phase 1 → 합법성 템플릿부터.** 필요 입력:
- **US lowfruits export** (Country=United States/Spanish, 시드=`es-us-hispanic.md §시드 후보`). 사용자 제공 → 나 파싱.
- 또는 export 없이 **WebSearch PAA로 선발**해 첫 글 브리프부터 작성(사용자 선택).

## 7. 열린 결정 (착수 전 확정)
- **(가)** 이 하이브리드 방향 승인?
- **(나)** Phase 1(US)부터 vs 우선순위 조정?
- **(다)** 착수 입력: lowfruits US export 제공 vs WebSearch로 먼저 이동?
- **(라)** Phase 3(기존 42 중립화) 강도: 기회주의적(기본) vs 초반 경량 패스 선행?

## 8. 리스크·주의
- **/es/ URL 무변경 필수**(개명 시 301·색인리셋 = 🔴). 추가형만.
- **카니발**: 신규 로컬글이 기존 /es/ 개념글과 겹치지 않게(로컬≠개념). 겹치면 몰아주기([[seo-tool-vs-blog-cannibalization]]).
- **3경로 최신성**: sweepstakes/offshore 규제 유동적(8주 이미 금지) → 카피에 최신확인 문구.
- **★정확성(§13급) — "카지노=포커" 오도 금지**: NE 신규 racino·ID 트라이벌·다수 신규 카지노 = **전용 포커룸 없음**. offshore/sweeps "합법" 단정 금지. 발행 전 개별 포커룸 개실·히스패닉% 재확인(MD Horseshoe·VA Hard Rock·NC %·MA Encore 테이블수 등 플래그는 `es-us-hispanic.md §데이터 플래그` 참조).
- **번역≠직역**: 현지 재저작·voice 파일 축적([[translation-websearch-local-voice]]).
