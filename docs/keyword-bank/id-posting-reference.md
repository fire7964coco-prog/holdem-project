# id 포스팅 참고 파일 — 경화 작업 축적 정보 전반 (신규 발행·경화 공용)

> **용도**: id 신규 포스팅·경화 착수 전 통독하는 참고 자료. **id 경화 트랙(세션 4~, 2026-08-27~)
> 에서 얻은 정보를 전부 축적한다** — 키워드 실측·발굴 원자료·의도 판정·현지화 노트·커버리지 맵·
> 검증된 사실 자산(§13·룰 번호)·글별 경화 상태·함정과 교훈.
> 🔴 **볼륨 수치의 정본은 `id-core-volumes.md`**, 미결·할 일 관리의 정본은 `session-handoff.md`다 —
> 여긴 참고 축적이지 관리 장부가 아니다. 새 회차가 끝나면 이 파일에 절·행을 추가한다(덮어쓰지 말 것).

---

## 1. id 조사 도구 사용법 (실측 검증된 경로)

| 용도 | 도구 | 비고 |
|---|---|---|
| **발굴** | DFS Labs `keyword_suggestions`(location=Indonesia·language=id — kd 동봉) + 구글 자동완성(`hl=id`) | 라쿠 발굴계 22종은 Japan 고정이라 **id 발굴 금지** |
| **볼륨·시계열** | 라쿠 `search-volume-history`(Indonesia·Indonesian·48m — yoy 공짜) | 언어당 15크레딧 정액, 키워드 수백 개 몰아넣기 |
| **교차검증** | DFS REST `google_ads/search_volume` | 2026-08-27 실측: **라쿠와 15/15 완전 일치** — 두 벤더 다 구글 KWP 중계 |
| **의도 분해** | 자동완성 `suggestqueries.google.com/complete/search?client=firefox&hl=id&q=` | 자릿수 함정 차단의 본체(§3) |

⚠ DFS **MCP**가 40100이면 프로세스가 env 등록 전에 뜬 것 — REST 직접(자격증명 = `.env.local`,
처방 = `docs/rakko-playbook.md` 2026-08-27 절). CPC는 벤더 간 30배 — 근거 금지.

## 2. 발굴 원자료 — DFS Labs 서제스트 (2026-08-27 · 뱅크 미수록분 포함)

### 2-1. «kartu remi» 생태계 (🔴 광의 — remi = 카드/러미 일반. 포커 명시형만 조준)

| 키워드 | vol | kd | 의도 판정 |
|---|--:|--:|---|
| kartu remi / remi kartu / kartu as remi | 각 33.100 | 0~2 | 카드 실물·러미 게임 일반 — **포커 조준 금지** |
| jumlah kartu remi | 3.600 | 2 | «몇 장?» 잡학 — 포커 아님 |
| cara main kartu remi | 2.400 | 8 | 러미 놀이법 — ⚠ «cara main poker kartu remi» 140(+300%↑)만 포커 |
| gambar / ukuran / harga kartu remi | 2.400/1.600/1.300 | 0 | 실물 카드 쇼핑·이미지 — 폐기 |
| permainan/game kartu remi | 각 1.900 | 0~6 | 앱·게임 일반 |
| kartu remi joker / ada berapa / nama-nama | 1.600/1.600/880 | 0~6 | 잡학 — 포커 밖 |
| **urutan kartu remi** | 1.600 | **8** | 카드 순서 질문 — hand-rankings FAQ로 흡수됨(§4) |
| **urutan kartu remi tertinggi (sampai terendah)** | 1.300 (110·+244%↑↑) | 8 | 〃 급성장 신생 |

→ **결론**: remi 헤드텀들은 볼륨이 커도 포커 의도가 아니다. 포커 몫은 «urutan … remi (poker)»
   질문축뿐이고 이미 필라 FAQ가 흡수. **remi 단독 신규 글 근거 없음.**

### 2-2. rankings 축 롱테일 (뱅크 배치 3에 실측 있음 — 여긴 kd·판정 보강)

- `urutan kartu poker` 계열 kd 14~20(전부 낮음) — **이 축은 SERP가 무르다.**
- 자동완성 완전 목록(urutan kartu poker + …): dari tertinggi sampai terendah · tertinggi ·
  **simbol** · **super royal flush** · texas · terkuat · dari terendah · **gambar** · holdem
  → gambar(이미지 의도)·dari terendah는 null — 조치 불요. 나머지 전부 필라가 커버.
- `kartu tertinggi di poker` 210 (12m +116% · **yoy1y +586%**) — 급성장 질문축, FAQ 커버 완료.
- flush 축: `flush in poker`(720)·`royal flush in poker`(390) 등 **영어 혼종 쿼리가 id SERP에
  실재** — 인도네시아 검색자가 영어로도 친다. 태그는 id형 우선, 본문에 영어 용어 자연 병기.

### 2-3. 저볼륨 확정 (측정 완료 — 재조사 불요)

kicker poker 10 · split pot poker 10 · cara membaca kartu poker 10 · poker 4 kartu sama null ·
kicker meaning/what is a kicker 각 10 · poker flush vs straight 10 → **전부 흡수 전략.**
kicker·tiebreak·split-pot·reading 4편은 id 검색축이 없다 — 이 4편의 경화 본체는
볼륨 재조준이 아니라 **드리프트 소급 + EN 경화분 현지화 이식**이다(세션 5 선례).

## 3. 🔴 의도 판정 기록 — 자릿수 함정 (채택 전 반드시 이 표 확인)

| 키워드 | vol | 자동완성 실측 의도 | 판정 |
|---|--:|---|---|
| **full house** | 22.200 | 한국 드라마(korea·drakor·OST·tahun berapa) 지배 | 🔴 채택 금지 |
| full house poker | 1.000 | Xbox 게임 동명 혼재 | 태그 보류 — 본문 커버리지만 |
| **all in artinya** | 14.800 | 비포커 슬랭(bahasa gaul·ML 게임·연애·직장) | 🔴 채택 금지(세션 4 판정) |
| **flush artinya** | — | 변기 flush·ink flush 지배. royal/straight flush artinya만 포커 | 단독 금지 — 결합형만 |
| royal flush | 2.400 | 포커 우세(adalah·vs quad aces·card·chance) | ✅ 커버리지 OK(단독 글 금지) |
| **seri poker** | 90↓ | 영어 «poker series»(netflix·world·2026) 지배 | 🔴 split-pot에 쓰지 마라 |
| **apa itu kicker** | — | 비포커(roblox·kicker light·bullish kicker 캔들) | 🔴 제목 단독 사용 금지 |
| kartu sama | — | SIM카드·BPJS 노이즈 100% | 🔴 시드로도 쓰지 마라 |
| royal flush **adalah vs artinya** | 260↓ / 170↑ | 표현이 adalah→**artinya**로 이동 중 | FAQ 문형에 artinya 채택 |
| **urutan kartu poker super royal flush** | 90 · +325%↑ | 비표준 용어(표준 족보에 없음) — 필라가 신화격파 FAQ로 흡수 | ⚠ 기원(로컬 앱 잭팟 용어설)은 **1차 출처 미확보 — 본문에 기원 서술 금지**(중립 문안 유지). 실제 룸 잭팟 규정을 Playwright로 원문 확인하면 승격 가능 |

## 4. 커버리지 맵 — 실측 키워드가 어느 글에 있나 (카니발 방지)

| 축 | 소유 글 | 자리 |
|---|---|---|
| cara main poker 4.400 · kartu remi 140 · 2 kartu ~240 · tongkrongan 260 | `texas-holdem-rules-for-beginners` | title·태그·FAQ (세션 4) |
| «cara main texas holdem»(50·+106%) | `holdem-game-order`가 seoTitle 보유 — 태그는 세션 4에서 필라로 양보 | |
| rules 태그 양보 관계(세션 4 카니발 해소) | all-in↔showdown 어순쌍 → **showdown 존치**·all-in은 re-raise 축 / game-order는 cara main·aturan texas holdem·showdown poker 3종 양보 후 «urutan taruhan poker» 보유 | 새 글이 이 축들을 다시 물지 마라 |
| urutan kartu poker 1.900 · tertinggi 1.300 · dari tertinggi sampai terendah 480 · susunan/kombinasi 320 · remi poker · kartu tertinggi 210 · super royal flush · simbol/lambang | `holdem-hand-rankings` | title·seoTitle·H2·태그·FAQ (세션 5) |
| flush poker 720 · straight poker 390 · royal/straight flush artinya · apa itu flush 40 | `holdem-flush-vs-straight` | 태그·FAQ·본문 |
| istilah poker 110(+27%) | ⏭ `holdem-glossary` — **세션 8 몫**(예약) | |
| 필라 인바운드 앵커 | 형제 5편 전부 «urutan kartu poker» 계열로 통일(세션 5) — 새 글도 이 앵커 사용 | |

## 5. 현지화 노트 — 네이티브 렌즈 판정 축적 (신규 작성 시 그대로 적용)

- **영어 용어 통용**: flush·straight·kicker·chop·straddle·buy-in·bubble은 영어 그대로 —
  과번역이 오히려 결함. 커뮤니티 실사용 기준.
- **보드 = board**: 현지 커뮤니티는 커뮤니티 카드를 board라 부른다. `meja`는 «테이블(자리)» —
  `meja berpasangan`(테이블이 페어됐다)류는 어색. ⚠ 기존 코퍼스는 meja 우세 4편·board 우세
  2편으로 분열(핸드오프 미결 — 통일 판정 대기). **신규 글은 board로 써라.**
- **어형**: 반전 훅엔 `ternyata`(«Kira menang, ternyata kalah?») · 복수형 영어 -s + id 접속
  혼종 금지(«kings dan nines» ✗ → «dua pair K dan 9») · 서수는 id로(«first kicker» ✗ →
  «kicker pertama») · «edge case» 직역(kasus tepi) ✗ → kasus langka/khusus.
- **무생물 주어 `ia` 남발 금지**(기계번역 냄새) — FAQ·tldr 등 노출 자리는 명사 반복/주어 생략.
- **직역 지뢰 실례**(세션 4~5에서 교정된 것 — 새 글에서 재생산 금지): menyewa board(rent 직역) ·
  tanda bintangnya(asterisk 직역) · jangan berkedip(don't blink) · melawan sebagian besar deck ·
  jarum jam(clockwise — searah jarum jam으로) · pohon keahlian(skill tree) · felt(원어 노출) ·
  kalian → **Anda berdua**(복수 2인칭) · «saya kalahkan»(lost를 이겼다로) · kasus tepi(edge case).
- **문체·용어 판정(세션 4 확정)**: 독자 호칭은 **Anda 통일**(e9360461 전수 정리) · 액션 목록
  라벨은 «Pilihan di Giliran Anda»형(aksi ↔ langkah 충돌 시 Pilihan — pt «jogadas» 대응) ·
  단위 증가는 inkremen 통일 · tangan은 «판» 뜻으론 금지(hand로).
- **GEO 직답 H3 어형 선례**(세션 4): «Ringkasan Alur …» · «Siapa Jalan Duluan …» ·
  «Siapa Bertindak Duluan …» — 명사구+질문 혼합형이 id 실검색 형태소와 정합(영어 질문형 직역 금지).
- **표기 분열 미결 3종**(코퍼스 판정 대기 — 신규 글은 권고안으로): 액션=check · 확인=cek ·
  판=hand · 보드=board · 본문 산문은 As(키워드 «ace kicker»는 영어 유지).
- **메타 규격**: readTime 단위 = `mnt`(코퍼스 36편 — min/menit 아님) · readnext 라벨 =
  `Lanjut membaca`(26편 표준) · 관련글 H2 = `Artikel Terkait` · seoTitle ~60자 · desc ≤160자.

## 6. 검증된 사실 자산 — §13·룰 번호 (경화에서 확정된 정본, 새 글에서 그대로 재사용)

### 6-1. 룰 번호 실측 (세션 4 딜러 렌즈가 1차 사본 대조 — 오류 0)

- **WSOP**: Rule **75**(보드 플레이여도 홀카드 전부 공개해야 팟 자격) · **84/90/97/100.b/117** ·
  **103 vs 90.d**(string bet — 두 조항의 국면 구분이 있으니 인용 시 betting-actions 본문 참조) ·
  Rule 73(무늬는 자리 정할 때만 — 승패엔 안 씀) · 홀수 칩 = 버튼 왼쪽 첫 승자.
- **TDA**: Rule **14/16/18** 확인. ⚠ «Rule 19»(쇼다운 두 장 공개)는 **번호만 미대조**
  (레포 TDA 자산에 12·16·18·68만 — 내용은 WSOP 75로 커버. 핸드오프 미결).

### 6-2. §13 정본 예시 (다른 로케일 오류를 고친 최종형 — 새 글에서 인용할 땐 이 형태로)

- **flush vs flush 비교는 보드 공유형으로**: 보드 J♠9♠6♠2♠7♦ + A♠ vs K♠ (이종 플러시 대비는
  홀덤 구성 불가 — a4588d9e 정본. EN·es·ja·zh·zh-hant는 아직 추상형 잔존).
- **트립스 킥커 예시**: 보드 K♣K♥7♦5♣2♠ → K-K-K-A-7 vs K-K-K-Q-7 (구판 «K-K-K-A-2 vs
  K-K-K-Q-J»는 구성 불가 — 둘째 킥커 2면 보드가 KKK22 풀하우스).
- **풀하우스 트리오 우선 예시**: K-K-K-2-2가 Q-Q-Q-A-A를 이긴다(As 페어가 커 보여도 트리오 먼저).
- **스트레이트 플러시 판별**: 6♥ 정본(보드 7♥8♥9♥10♥ + 6♥ = 스트플 / K♥면 그냥 K하이 플러시 —
  13개 로케일 통일된 자리).
- **확률 기준 표기 필수**: 5장(royal 4/2.598.960 · SF 36 · flush 5.108 · straight 10.200) vs
  7장 river(royal 0,0032% · SF 0,0279% · flush 3,03% · straight 4,62%)를 섞으면 사실오류 취급.
  id는 소수점 콤마(0,0032%) — F13 게이트가 콤마 소수점을 못 보므로 손검산 필수.
- **split-pot 리버 콜 임계값**(검증 완료): 보드 무적이면 콜 순이득 +P/2 · 팟사이즈 벳엔 상대가
  보드만 칠 확률 2/3 필요 · 하프팟엔 1/2.

## 7. 글별 경화 상태 (트랙 B 진행 맵)

| 세션 | 클러스터 | 글 | 핵심 처치 | masterUpdated |
|---|---|---|---|---|
| 4 (`30ec8632`+`0525a4d2`) | rules 6편 | beginners·game-order·betting-actions·blind·all-in·showdown | 제목 축 «Cara Main Poker» 전환 · 드리프트 소급 · 경험담 11곳 · FAQ 신설 | 각 파일 확인 |
| 5 (`6afcdb56`) | rankings 6편 | hand-rankings(축 전환+hero 복원+FAQ 4)·flush(표 재구성+FAQ 2)·kicker(FAQ 4 이식)·tiebreak(FAQ 5)·split-pot(FAQ 4)·reading(FAQ 3+캡션) | §13·산수 0건(42예시 기계검산) | HR 08-12 · flush 08-12 · kicker 08-26 · tiebreak 07-19 · split 08-11 · reading 08-11 |
| 6~9 | odds 7 · strategy 8 · glossary 6 · tournament 9 | 미착수 | 잔여 드리프트(회차 5·6 묶음의 id 몫)는 세션 8·9가 흡수 — 정본 = 핸드오프 미결 표 | — |

## 8. 함정·교훈 (id 경화에서 실증된 것 — 다음 회차 필수 숙지)

1. 🔴 **id `masterUpdated`는 거짓 신호였다**(세션 4 실증): 07-19·07-25로 «동기» 표기된 파일에
   EN 내용이 안 와 있었다. 대조는 날짜 필드가 아니라 **EN 기준선(07-15)→HEAD 커밋 diff 실물**로.
2. 🔴 **게이트 `--locale=id`는 «언어 불변 항목»만 본다** — §13(H1~H6)·산수(F13)·표 대조(C1·C2)뿐.
   메타 길이·FAQ↔H2 축어중복(E2)·필라 역링크(F12)·질문형 H2는 **미검사**다. 그 층은 렌즈/손으로.
3. 🔴 **커버리지 출력 필독**: tiebreak(카드 문단 10)·reading(14)은 시나리오 미포착 = «0건이어도
   미검사» — 세션 5는 전 예시 손검산으로 메웠다. 다음 회차도 같은 자리 주의.
4. **id 미러 소급 이력**: 대부분의 §13급 미러(caa33b91·e777999b·ada628c6·767f29fe·739730d0·
   aa09f547·12d21fdd·cba8b3fa·777bf603·58f599f5)는 id에 이미 소급돼 있었고, **a4588d9e만 id를
   빠뜨렸다**(세션 5가 해소). 새 EN 정정이 나오면 «id 포함 여부»를 커밋 파일 목록으로 확인하라.
5. **질문형 H2 70% 규율(§14-A)은 id에 그대로 적용하지 않는다** — id 실검색 형태소는 명사구
   (`urutan …`·`cara …`)라 억지 질문화가 오히려 손해(세션 5 SEO 렌즈 판정).
6. **EN-먼저 대기 중 id에 걸린 것**(임의 소급 금지 — 정본은 핸드오프 ⑩~⑰): reading «Seberapa
   umum» 표 헤더(빈도 오라벨) · tiebreak/HR «Royal Flush|Selalu seri» 행 · FAQ↔H2 축어중복
   9건(EN 구조 상속) · 2·4법칙 ×4 캐비어트 부재 · blind «Dua kebiasaan» 수량 등.
7. **렌즈 운용**: 본체=Fable·렌즈=Opus(settled-decisions §5-A) · 렌즈 4종(딜러+수학·네이티브·
   SEO/GEO·교열 diff) 병렬 · 지적 반영 후 **2차 교열 필수**(세션 5에서 자기 결함 2건 검출 —
   FAQ 종결문 중복·라벨 통일 방향 오판) · 검수자도 틀린다(readnext «Lanjut baca» 통일 제안은
   코퍼스 26편 실측으로 뒤집혔다 — **통일 방향은 코퍼스 전수 grep이 심판**).
8. **이미지**: hero·본문 이미지는 18언어 공용 자산 — alt만 id로 재저작(EN alt 1:1 미러가 안전).
   board-puzzle alt는 K-K-K-**A-2**가 정본(구판 A-4는 오기).

## 9. 신규 포스팅 후보 판정 (2026-08-27 기준)

1. **신규 글 근거가 나온 축은 없다** — 측정된 큰 볼륨(kartu remi 33k·full house 22k)은 전부
   비포커 의도. 포커 의도 축은 기존 42편이 커버 중이다. **저볼륨 롱테일 집합전략 유지.**
2. 추적 중인 급성장 축(다음 재실측 때 확인): `cara main poker kartu remi` 140→월 590 ·
   `kartu tertinggi di poker` yoy +586% · `urutan kartu remi tertinggi sampai terendah` +244% ·
   `super royal flush` +325% · `main poker itu apa` +113%(질문축 — 성장 지속 시 필라 FAQ 승격).
3. 재실측 방법: 이 파일 §2~3의 키워드를 라쿠 배치 1회(15크레딧)로 — requestId 계보는
   `id-core-volumes.md` 머리 참조(1258288 → 1258295 → 1258342).
