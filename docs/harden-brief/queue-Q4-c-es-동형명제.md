# queue Q4-c 브리프 — es «WSOP 참가 요건» 동형 명제 + «WSOP.com» 명칭 (2026-09-17)

> 재료 = `docs/harden-queue-진행.md` §2 「Q4-b가 남긴 것」 첫 항목 + §5 Q4b-6 헤드 처리 말미(`holdem-tournament:298`) + 핸드오프 ▶1. 판정형 소회차(새 문장 = 스페인어 한정어 4자리). 모델 = 사장님이 Fable로 열었다(Q5-c 선례 · 렌즈는 Opus 서브).

## 1. 1차 출처 (이 회차가 직접 연 것)

| 명제 | 원문 축어 | 출처 |
|---|---|---|
| 참가 요건 | 「Entry into any WSOP Event is limited to persons 21 years of age and older, with proof of age … Certain WSOP Events may have age or other requirements. Review each WSOP Event's structure sheet」 | `docs/sources/wsop-2026-tournament-rules.txt` Rule 2 (L15~18) |
| 계정 2개 | 「Participant must have an active and valid Caesars Rewards account (see Rule 10) and a WSOP LIVE account. Registration for both accounts is required to participate in any WSOP Event. Registration for both accounts is free.」 | 같은 파일 Rule 4 (L66~68) |
| 비시민 신분증 | 「passport, foreign government issued Driver's License …, Consular ID or Matrícula Consular Card (Mexico only), or alien registration card」 + 「If … does not include a physical address, a second form of ID … will be required」 | Rule 9 (L201~207) |
| matrícula 발급처 | 「expiden las Representaciones de México en Estados Unidos de América y Canadá」 — 「solo」 없음 | SRE 원문 · Q4-b Playwright 실측(진행 파일 §1-Q4-b) |
| 온라인 룸 명칭 | 「Real Money Online Poker Site **WSOP Online (formerly WSOP.com)**」 | Rule 4 g (L143~144) |
| 온라인 룸 명칭(라이브) | `wsop.com/online-poker/` → `wsoponline.com/nv/online-poker` · `<title>` = 「WSOP Online」 · 본문 「WSOP Online is licensed and regulated in the State of Nevada」 · 홈 본문 「…Nevada, New Jersey, Michigan, and Pennsylvania, WSOP Online has become…」 | Playwright 09-17 |

## 2. 고칠 자리 (전수 — `grep -n "21 años\|WSOP\.com"` 로 셌다)

| 파일 | 자리 | 무엇 |
|---|---|---|
| `lib/posts-es/poker-en-las-vegas.ts` | L140 | 「Lo único que exigen es 21 años」 → 21 + ID + 무료 계정 2 + 이벤트별 조건 |
| 〃 | L142 | matrícula 발급처(미국·캐나다 주재 멕시코 공관 · «solo» 금지 · «여권이면 충분» 금지) |
| 〃 | L256 FAQ | 「solo exige 21 años」 → L140과 같은 명제 + 발급처 |
| 〃 | L222 · L272 | WSOP.com → WSOP Online(antes WSOP.com) |
| `lib/posts-es/holdem-tournament.ts` | L298 | 「21 años y una identificación válida」 → + dos cuentas gratuitas |
| `lib/posts-es/poker-en-nueva-jersey.ts` | L56 · L68 · L162 | 명칭 |
| `lib/posts-es/poker-online-dinero-real-estados-unidos.ts` | L49~52 · L68 | 명칭 |
| `lib/tournaments-i18n.ts` (EN 보드 FAQ) | L153 · L177 | WSOP.com → WSOP Online (formerly WSOP.com) — **EN 변경 = MB 통지** |
| `lib/posts/holdem-tournament-how-to-enter.ts` (KO) | L200 | 「WSOP.com은」 → 「WSOP Online(구 WSOP.com)은」 |

- **EN 동형 없음**(`poker-en-las-vegas`·`nueva-jersey`·`dinero-real`은 es 고유 · `holdem-tournament` L298 문단은 es만 갖는 como-entrar 브리지 — 8로케일 grep 0). `lib/posts.ts:3154`는 이미 「WSOP Online/WSOP.com」 · EN `wsop-2026` L219·L322는 이미 「formerly WSOP.com」.
- ja·zh·zh-hant 파일은 만지지 않는다(세 워크트리 clean 실측 · 해당 명제 없음).

## 3. 하지 말 것

- §3 「Q4-b — 다시 열지 마라」 전항(특히 matrícula «solo»·«여권이면 충분» 금지 · 보드 카드 결제 2%).
- 「tarjeta de residencia」(= alien registration card)는 como-entrar와 같은 역어 — 바꾸지 않는다.
- «Nevada 라이선스 2개 · 공개 룸 1개» 명제는 이 회차 대상 밖(원본 유래 · 미대조).
- `updated` = 내용 바뀐 파일만 09-17 · es `holdem-tournament` `masterUpdated`는 그대로(EN 델타 미대조).

## 4. §13 자리
없음(핸드·확률·수치 변경 0).

## 5. C 구간 실측 추가 (2026-09-17)

- 🔴 **`poker-en-las-vegas`·`poker-en-nueva-jersey`·`poker-online-dinero-real-estados-unidos`는 발행 중이 아니다** — 07-27 발행 중단된 es-US 합법성 13편(`lib/posts-es/index.ts` L59~64 주석 · `settled-decisions` L59·L81 «되살리지 마라»). 빌드 산출물 없음 · 사이트맵 없음 · `audit:hard --locale=es`는 index 배열(60편)에서 로드하므로 이 셋의 「🔴 0」은 **미검사**다. 편집은 «보존 재료 정정»으로 유지(index 등록 안 함). 배포가 걸리는 실제 변경 = es `holdem-tournament`·`como-entrar-al-wsop` + EN 보드 FAQ 2자리 + KO 1자리.
- **es «WSOP Online» 병기 규칙**(이 회차 판정 · `settled-decisions` 승격 요청 §5): 병기 형태는 **「(antes WSOP.com)」 한 가지** · 자리 = **파일 첫 언급 1회**(본문이든 표 첫 행이든) + FAQ 답(독립 방출)은 허용 · 그 밖 재병기 금지(2차 교열 F6으로 확정). EN = 「(formerly WSOP.com)」 · KO = 「(구 WSOP.com)」. 🔴 **wsop.com이 «공식 사이트 도메인»을 가리키는 자리(구조표 출처·일정 링크)는 대상이 아니다** — 룰북 4g가 개명한 것은 머니 온라인 포커룸뿐.
- **의도적 생략(다음 회차가 «누락»으로 집지 않게)**: es `holdem-tournament` L298 브리지 문장에 「algunos eventos añaden condiciones propias」를 넣지 않았다(링크 목적지 como-entrar가 담는다 · 문장 부하) · `poker-en-las-vegas` L136~138 「Sí」 2회(①원본 · 미발행 파일) · `poker-en-nueva-jersey` L60·L162 「cuatro redes completas」인데 열거는 3(①원본 · 미발행 파일 · 재발행 시 판정) · `lib/posts.ts:3154` 「WSOP Online/WSOP.com」 슬래시 병기(LEGACY wsop-2025 · 기존 🔴 2 부채 파일 · KO 정정 회차 몫).
- **2차 서류 문장의 근거**: Rule 9 L206~207 「If … does not include a physical address, a second form of ID that indicates physical address will be required. This second form of ID can be a driver's license, utility bill, credit card statement, etc.」 + 코퍼스 정본 es `wsop-2026-tournament-guide` L271 「los pasaportes no llevan domicilio」.
- KO L200 「2026년 9월 현재 접속되지 않습니다」 근거 = 09-17 한국에서 Playwright로 `wsop.com/online-poker/` → `wsoponline.com/nv/online-poker` **403**(본문 h1 「404」).
