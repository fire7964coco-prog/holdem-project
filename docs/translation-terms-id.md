# id 포커 용어·표기 브리프 (번역 착수 전 웹리서치 결과)

> 🔴 **2026-08-28 라우팅**: 이 파일은 **2026-07 번역 착수 시점의 브리프**다. 그 뒤 경화 트랙
> (세션 4~8)이 확정·갱신한 용어·표기 판정의 **정본은 `docs/keyword-bank/id-posting-reference.md`
> §5(문체·용어 판정)**다 — 여기와 그쪽이 갈리면 **그쪽이 심판**이다(예: 이 파일의 «check → cek»는
> 코퍼스 분열 미결로 재분류됨 · «peringkat kartu» 축은 세션 5에서 «urutan kartu poker»로 전환 ·
> Anda체·숫자 인니식·§13 불변 등 골격은 그대로 유효). 이 파일엔 새 판정을 쌓지 마라.

> 대상 = **인도네시아어(id, Bahasa Indonesia)**. 인니 포커 글로시(ggpoker.com/id · id.wikipedia Daftar tangan dalam poker · bonanza88 urutan kartu · texasholdemseal-id · merdeka.com 파듀안) 기준. **인니 포커 커뮤니티는 영어 차용어를 매우 많이 사용** → 억지 번역보다 영어 용어 유지가 현지 느낌.

## 용어 (현지 관습 — 영어 차용 우세 + 인니어 등가)
- **행동**: check → **cek**(또는 pass), bet → **bertaruh/taruhan**, call → **call**(또는 ikut), raise → **menaikkan (raise)**, fold → **fold**(또는 lipat), all-in → **all-in**. 3-bet/4-bet 그대로.
- **스트리트/구조(영어 그대로)**: Flop, Turn, River, preflop, Blinds(Small Blind/Big Blind=SB/BB), Button(BTN)/dealer, Showdown, Kicker, Board, Pot, Side pot, Main pot, Stack, Buy-in, Ante, Heads-up, Pot Odds, Bluff(또는 gertak).
- **족보는 영어 그대로(인니 표준)**: Royal Flush, Straight Flush, **Four of a Kind (Quads)**, Full House, Flush, Straight, **Three of a Kind**(셋=set), Two Pair, **One Pair/Pair**, High Card. (첫 등장 시 필요하면 인니 설명 병기)
- **핵심 명사(인니어)**: community cards → **kartu bersama**(=kartu komunitas), hole cards → **kartu tertutup/hole cards**, hand rankings → **peringkat kartu/peringkat tangan**, suit → **jenis (suit)**, pot → **pot**, main pot → **pot utama**, side pot → **side pot/pot sampingan**, dealer button → **tombol dealer**, position → **posisi**.
- **포지션 약어는 영어**(첫 등장 인니 병기 가능): UTG, CO(Cutoff)=버튼 오른쪽 첫 자리, MP, HJ, SB, BB, BTN.

## 표기 (⚠️ 매우 중요 — es/pt/de와 동일 계열)
- **숫자 = 인니식**: 천단위 **마침표(.)**, 소수점 **쉼표(,)** → `1.326`, `198.000`, `0,003%`, `2,5 BB`, `2,7:1`. **영어식 1,326 / 2.5 → 반드시 변환.** (§13 숫자값은 보존하되 구분자만 인니식으로)
- **카드 표기 라틴 유지**: `A♠`, `K♥`, `10♦`, 보드 그대로. 무늬 기호 ♠♥♦♣ 그대로.
- **화폐**: $ 그대로(§13 보존).
- 문장부호: 표준 라틴(. , ? !).

## 문체 (⚠️ 2026-07-15 교정 — 실제 코퍼스 기준)
- **"Anda"체(격식, 대문자 A) 고정.** ← 기존 stale id 8편 전부 Anda, GGPoker ID도 Anda, 인니 포커 교육/SEO 콘텐츠 표준. **"kamu/lo/gue" 금지**(옛 브리프의 kamu 권장은 실제로 적용된 적 없음 → 폐기, 코퍼스 일관성 위해 Anda로 통일).
- 어조: 따뜻하되 권위 있는 교육형. 개인 경험담(E-E-A-T)도 Anda로 프로페셔널하게. 딱딱한 직역 금지, 자연스러운 인니어.

## 추가 규칙 (2026-07-15 리서치 보강)
- **§13 언어불변**: 숫자·牌·확률·$·BB·날짜·고유명사(PokerStars/WPT/EPT/선수명) EN 그대로. "10"은 10("T" 금지). 재계산 금지. 숫자는 구분자만 인니식(위 §표기)으로 스왑, 값 불변.
- **구조 EN 1:1**: H2/H3·지시블록·`==g:/r:/b:==`·표·이미지·Related/readnext 카드·FAQ 개수 전부 EN과 동일(개수 검증).
- **FAQ 스키마**: `**Q. <인니어 질문 전체>**` + 빈 줄 + `A. <답>`. 질문은 인니어 전체 문장(용어 영어는 정상). 개수 EN 동일. (일부 파일은 EN이 `### 질문` H3형 → EN 그 파일 형식 따를 것.)
- **내부링크**: 화이트리스트(번역 완료 slug)만 `[teks](/id/blog/slug)` `/id/` 접두사·thumb 유지. 미번역 slug는 링크 벗기고 앵커텍스트만(Related/readnext 카드면 카드째 삭제) → 최종 42편 완성 후 EN-parity로 복원.
- **도구 라우트 로케일 중립**: `/calculator`·`/hand-chart`·`/quiz`·`/downloads/*.pdf`는 `/id/` 안 붙임(id 라우트 없음 → 404 방지. zh 교훈).
- **metadata 인용부호**: title/seoTitle/desc/tldr(큰따옴표 TS 필드) 안쪽 인용부호는 이스케이프 `\"` 또는 회피(빌드 ParseError 방지).
- **기존 stale 8편**(Rules 6 + hand-rankings hub + tvc, 2026-06-09 = 경화 前 EN 가능성): 하드닝 EN 기준 §13·구조 재검증. tvc는 축약본일 수 있음(de/zh 선례) → 필요시 전체 재번역. 새 slug 링크 미포함 → 최종 링크복원에서 보강.
- **id = 24개 언어 중 7번째 완역 목표**(ja·es·pt·de·zh + ko, 그다음 id). 파이프라인 동일: 필라별 Opus 병렬번역 → count 패리티 → 네이티브 ID 적대적 QA(계산 재검증X) → 교정 → 커밋.

## SERP
- 검색어: "cara bermain poker Texas Hold'em", "aturan poker pemula", "apa itu blind poker", "urutan kartu poker" 등. seoTitle/desc는 인니 검색자 실제 표현으로.

Sources: ggpoker.com/id/poker-basics/poker-hand-rankings · id.wikipedia.org/wiki/Daftar_tangan_dalam_poker · bonanza88.com/urutan-kartu-poker-lengkap · texasholdemseal-id.com · merdeka.com 파듀안 포커


---

# 대회·여행 글 실전 교정 (apt-incheon 미러, 2026-07-28)

## ★1. 검수 권고를 채택하지 않은 사례 — "Anda"
- 네이티브 검수자가 *"Anda 30회는 과다, 절반 줄여라"* 라고 지적했으나,
  **이 파일 §문체의 "Anda체 고정, kamu/lo/gue 금지"가 프로젝트 표준**이므로 채택하지 않음
- → **Anda 사용량은 유지.** 고칠 것은 사용량이 아니라 **직역 구문**:
  · **"memungkinkan Anda …"**(= allows you to) → "Lewat rute OnLive, Day 1 bisa Anda mainkan …"
  · 수동태 직역 "kebisingan diharapkan tetap rendah" → "jangan berisik"

## ★2. 리스크 — 도박 홍보로 읽히는 서술 (id 고유)
- 인도네시아어로 된 **"Daftar di natural8.com"(가입하세요)** 는 온라인 도박 가입 유도로 읽힐 수 있음
- **"$10,000 따면 $800 더"** 같은 수익 시뮬레이션도 같은 계열
- → **정보형으로 전환**: 접근 가능 여부는 거주국이 결정 / VPN은 ToS 위반 / **누구나 열린 경로 = 주최사 직접 등록**
- 하단 출처의 "어필리에이트 순위 인용 안 함" 원칙과 본문이 어긋나지 않게 할 것

## ★3. WNI 입국 — 대회 글 최우선 정보
- **무비자 30일은 Pulau Jeju 전용**. 제주 직항 착륙 필수, **인천/서울로 이동 불가**
- 본토(인천) 개인 참가 = **visa turis C-3-9** (Kedubes Korea Jakarta / Korea Visa Portal)
  · 여권 6개월+, 왕복항공권, 숙소, 재정증명, 여행자보험
- 2026-02-25 발표 인도네시아 단체 무비자 = **등록 여행사 경유 단체 형식·최대 15일** → 개인 참가자엔 부적합
- 말레이시아는 K-ETA 면제 명단 밖 → K-ETA ₩10,000 필요

## ★4. 할랄 — 무슬림 다수 독자 대상 필수 로컬라이제이션
> 마스터(EN)를 그대로 번역하면 **삼겹살 + 소주**를 추천하게 된다. 음식 섹션은 반드시 현지화할 것.
- **이태원** = 서울중앙성원(1976년, 한국 최초·최대 모스크) + 주변 할랄 식당·중동 식료품
- 인증 식당: **Makan Halal Korean Restaurant**(KMF 인증·떡볶이/비빔밥/김치찌개) ·
  **Siti Sarah**(말레이·이집트) · **Osegyehyang**(인사동, 베지테리언 할랄)
- 확인 3종: **KMF(Korea Muslim Federation) 인증 로고** / **Muslim Friendly Restaurant** 스티커 / **No Pork, No Alcohol**
- 앱: **Halal Navi · Muslim Pro · Halal Korea**
- ★실전: **CU · GS25 편의점의 KMF 할랄 컵라면** (Day 1 전 아침·bustout 후 야식)

## ★5. 인도네시아 독자 실용 데이터
- **CGK–ICN 직항 약 7시간** — Garuda · Korean Air · Asiana + **T'way Air(2026-04-29 취항, 주 5회)**
  · 참고: Korean Air KE628 21:50→07:15 / Asiana OZ762 21:30→06:50
  · 비교: 방콕 ~5.5시간 · KL ~6.5시간 (톱10 진입국) → "거리 때문이 아니다"는 논거
- ★**시차 = WIB +2시간뿐** — 한국 시간 기준 OnLive Day 1이 인도네시아 독자에겐 무리 없는 시간대.
  **유럽 독자가 7시간 되짚어야 하는 것과 대비되는 실질 이점**으로 쓸 것

## 6. 용어·표기 보강
- 포커 명사는 **영어 유지**(이 파일 §용어 원칙): **kursi → seat**, **entri → entries**
- 단위는 **띄어쓰기**: 50 km · 800 m · 11 km (50km 금지)
- 표 헤더 일관성: "Total Bergaransi" → **Total GTD**
- readTime은 "16 menit"(mnt는 표 안에서만)


---

# ★ 대회·여행 글 공통 사실 (2026-07-28 확정, 전 언어 공용)

> apt-incheon 미러 8개 언어 작업 중 확보. **대회 참가 글은 "비자/입국"이 가장 앞단인데
> 작업 전 8개 언어 전부가 이 부분을 틀렸거나 비워두고 있었다.** 신규 대회 글마다 이 표를 먼저 확인할 것.

## K-ETA 한시 면제 22개국 (외교부 재외공관 공지 · 2026-12-31까지 연장)
네덜란드 · 노르웨이 · 뉴질랜드 · **대만** · 덴마크 · **독일** · **마카오** · 미국(괌 포함) · 벨기에 ·
스웨덴 · 스페인 · **싱가포르** · 영국 · 오스트리아 · 이탈리아 · **일본** · 캐나다 · 폴란드 ·
프랑스 · 핀란드 · 호주 · **홍콩**

- 면제 대상 = **K-ETA 신청 불필요**, 무료 **e-Arrival Card**만 도착 전 온라인 제출
- **명단 밖**이면 비자 면제국이라도 **K-ETA ₩10,000** 필요(72시간 전 신청 권장, 미승인 시 탑승 거부)
- 명단 밖 주요국: **브라질 · 말레이시아 · 인도네시아 · 중국 · 아르헨티나 · 페루 · 우루과이**
  (멕시코 · 칠레 · 콜롬비아는 면제 — es 작업 시 국가별 분기 필요)

## 비자 자체가 필요한 경우 (K-ETA 이전 단계)
| 국적 | 본토(인천·서울) | 함정 |
|---|---|---|
| **중국 내지** | **C-3-9 관광비자 필수** | 3인 이상 단체 무비자는 **2026-06-30 만료**. ★**제주 무비자는 제주 안에서만** — 제주→인천 이동 불가 |
| **인도네시아** | **C-3-9 관광비자 필수** | ★**무비자 30일은 제주 전용**. 제주 직항 착륙 필수, 본토 이동 불가. 2026-02 발표 단체 무비자는 등록 여행사 경유 단체(15일) |
| 홍콩·마카오 | 무비자 + K-ETA 면제 | — |

## Natural8 / GGNetwork 국가별 접근 (★대회 위성 글 필수 확인)
- **공식 T&C가 국가 목록을 공개하지 않는다.** 원문: *"if a potential player cannot find his/her
  country of residence in the list of countries available during the registration process,
  this means that Natural8 will not be able to accept him/her as a player."*
  → **등록 화면의 국가 목록이 유일한 판정 기준.** 이걸 그대로 독자에게 넘기는 것이 가장 정확한 서술.
- Natural8 = GGNetwork의 **아시아·태평양 스킨**. 서유럽 상당수는 본체 **GGPoker**로 라우팅
  · **독일** → GGPoker 자체 라이선스 플랫폼 · **브라질** → GGPoker(포르투갈어 지원) · **일본** → GGPoker(일본어 UI)
  · **스페인** → GGPoker 미운영(DGOJ 라이선스 없음)
  · **대만·홍콩·마카오·싱가포르·말레이시아** → 통상 Natural8 등록 가능(중화권 독자에겐 유리한 사실)
- ⚠️ **VPN 우회는 ToS 위반** — 계정 정지·잔액 몰수. 우회를 권하는 서술 금지.
- ★**본문에 도메인 가입 CTA를 쓰지 말 것.** 정보는 남기되 "가입하러 가라"는 형태는 제거하고,
  **누구에게나 열린 경로 = 주최사 직접 등록(registrations@apt.poker)** 를 앞세운다.
  (id는 현지 법 환경상 특히 민감. 출처 섹션의 공식 링크는 근거이므로 유지 가능)

## Natural8 Country Exclusives — 거주지가 아니라 **국적**
- 공식 문구는 *citizen* + **KYC 국적 검증**. "거주국"으로 쓰면 주소만 바꾸면 된다는 오해를 준다.
- 2026 인천분 공개된 장 = **「N8TW x APT Incheon 2026」 = 中華民國 국적 한정**
- 패키지 = 시트 + 여행경비(대만분: **NT$53,888 + NT$16,000**). 일반 위성은 시트만.
