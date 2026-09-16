# ID GTO 시리즈 — 수정 부분 최종 교열

검수일: 2026-09-15. **19개 변경 항목을 모두 확인했으며, 확인 범위에서 새로 생긴 언어 오류나 남은 확정 결함을 발견하지 못했다.**

## 범위와 방법

- 별도 Codex AI가 수행한 인도네시아어 교열이다. 실제 현지인·인간 편집자의 감수가 아니다.
- AGENTS.md, CLAUDE.md, session-handoff.md, posting.mdc, REVIEW-PROTOCOL.md, ID 공통 집필 브리프를 읽고 Git 상태·diff 통계를 확인했다. 근거는 [언어 검수](id-gto-language-review-2026-09-15.md)와 [SEO 검수](id-gto-seo-review-2026-09-15.md)를 참고했다.
- `tmp/id-review-corrections.json`의 최종 19개 항목을 `tmp/id-review-before/`의 수정 전 파일과 현재 파일로 대조했다. 대상은 포스트 9파일의 본문·메타 변경 18개와 랜딩 note 변경 1개다.
- 최초 9개를 확인한 뒤 같은 교열 회차 안에서 추가 10개만 이어 확인했다. 전체 13편 검수나 이미 확인한 9개 문장의 반복 교열을 수행하지 않았다.
- 변경 문장과 인접 문단·조건표·해당 수치표를 읽어 부정 범위, 행동 주체, 대명사, 빈도의 대상, 영어 포커 용어, 문법과 논거 보존을 확인했다. 원문 전체 전략·계산·빌드·화면·라이브 검증은 root와 별도 검수 기록의 범위다.
- 포스트와 랜딩을 직접 편집하지 않았으며 커밋·배포하지 않았다. 이 보고서만 작성했다.

## 항목별 판정

아래 번호는 최종 수정 목록의 순서다. 포스트 경로는 모두 `lib/posts-id/`이며 행 번호는 이번 교열 시점 기준이다. 각 항목의 **반영 확인과 문맥 판정의 확신도는 높음**이다. 수정 필요성의 등급은 앞선 언어·SEO 보고서의 필수/선택 구분을 그대로 따른다.

| # | 위치 | 확인한 변화와 근거 | 판정 |
|---:|---|---|---|
| 1 | `donk-bet-strategy.ts:181` | `tidak semuanya tetap berada`가 ‘모두가 check에 남는 것은 아니다’를 명시한다. 앞의 `sebagian dari 24 combo`와 일치하고, check에 straight가 남을 수 있다는 설명 및 후속 check-raise 미계산 조건을 보존한다. | 통과 |
| 2 | `low-board-check-raise.ts:155` | `Persentase tampilan tidak selalu sama dengan hasil pembagian bobot combo`는 표시 비율과 combo 비율 역산값을 비교하는 자연스러운 문장이다. 바로 뒤 69,7/477,5 및 316,5/503의 설명과 일치하며 표시 수치 유지 지침을 바꾸지 않는다. | 통과 |
| 3 | `low-board-check-raise.ts:189` | `ketika lawan call`로 call의 주체가 상대임을 명시한다. raise가 call됐을 때 draw가 개선될 가능성을 설명하는 앞뒤 문맥을 보존한다. | 통과 |
| 4 | `3bet-pot-cbet.ts:73` | `rentang hand`를 고정 포커 용어 `range`로 교체했다. BB가 range 상단에서 강해 넓은 range로 bet할 수 있다는 기존 문장과 조건을 보존한다. | 통과 |
| 5 | `3bet-pot-low-board.ts:79` | `membagi range BB`가 분류 대상을 전체 BB range로 명시한다. 직전 A4s 4 combo만을 가리킬 여지가 사라졌다. 앞의 전체 83 combo와 뒤 세 draw 범주 설명에 맞는다. | 통과 |
| 6 | `3bet-pot-low-board.ts:120` | `bet besar berfrekuensi 97,8%`가 큰 size 빈도임을 명시한다. 액션 표의 Bet 14,9bb=97,8%, Bet 7,4bb=0,3% 구분과 맞고 후속 raise 노드 미계산 조건을 유지한다. | 통과 |
| 7 | `3bet-pot-low-board.ts:146` | `frekuensi bet besar 97,8%`로 큰 bet의 빈도를 분리했다. 상대가 잘 fold하지 않을 때의 조건부 조정, 58,3%는 fold 빈도가 아니라는 설명 및 MDF의 한계를 보존한다. | 통과 |
| 8 | `3bet-pot-low-board.ts:122` | H2의 `daripada pada dua contoh sebelumnya`는 같은 caller의 앞선 두 예제와 비교한다. 직후 BTN EQR 78,7%·75,1%→90,3% 설명과 일치하며 현재 BB와의 우열 비교로 읽힐 여지를 줄인다. | 통과 |
| 9 | `ace-paired-board-strategy.ts:160` | `frekuensi bet-nya`로 3,0%·80,1%의 행동명을 명시했다. 직전 check 언급을 대명사의 대상으로 읽는 문제가 해소됐다. 둘째 절의 생략된 서술 대상도 동일한 bet 빈도로 연결된다. | 통과 |
| 10 | `ace-paired-board-strategy.ts:160` | `Penentunya`가 판단 기준을 뜻한다. 이어지는 ‘board pair나 해당 rank의 combo 수만으로 정하지 말고 전체 range를 확인’이라는 설명과 맞아, bet size를 뜻하는 `ukuran`과의 혼동이 사라졌다. | 통과 |
| 11 | `k-high-board-cbet.ts:9` | tldr의 `BB sebesar 80,7%, sedangkan BTN 116,7%`는 양쪽 EQR을 각 좌석에 연결한다. 해당 지표표와 일치하며 두 수치를 차이의 크기처럼 표현하지 않는다. 평문 tldr 형식도 유지한다. | 통과 |
| 12 | `k-high-board-cbet.ts:35` | 직답에서도 같은 좌석·EQR 대응을 명시했다. `meski equity relatif berdekatan`과 연결돼 raw equity와 EQR의 구분을 보존한다. 두 수치의 볼드가 각각 닫혀 중첩 강조를 만들지 않는다. | 통과 |
| 13 | `broadway-board-strategy.ts:9` | tldr의 BB 77,9%·BTN 119,4%가 지표표와 일치한다. `selisihnya`는 두 EQR 간 차이를 가리키며, ‘지금까지의 세 flop 중 가장 큰 차이’라는 범위를 유지한다. | 통과 |
| 14 | `monotone-board-strategy.ts:35` | `call dengan taruhan kecil`에서 작은 bet는 call을 얻는 수단이다. 큰 bet를 상대로 계속하는 상대 range에 flush가 더 집중된다는 다음 절과 자연스럽게 대비된다. | 통과 |
| 15 | `monotone-board-strategy.ts:43` | 기존 조건표 안에서 Button (BTN)·big blind (BB)를 풀어 썼다. BTN open 2,5bb→BB call→나머지 fold의 행동·수치·표 구조를 보존한다. | 통과 |
| 16 | `paired-board-strategy.ts:43` | 같은 좌석 약어 정의가 6♣6♦3♥ 조건표에 정확히 들어갔다. opener와 caller가 뒤바뀌거나 표 열이 늘지 않았다. | 통과 |
| 17 | `low-board-check-raise.ts:45` | 같은 좌석 약어 정의가 6♠5♥2♦ 조건표에 정확히 들어갔다. root 및 별도 후속 solve 수치나 행동 순서를 건드리지 않는다. | 통과 |
| 18 | `3bet-pot-cbet.ts:43` | Button (BTN) open→big blind (BB) 3-bet 11bb→BTN call로 약어를 정의했다. OOP=BB 3-bettor, IP=BTN caller라는 다음 행과 일치한다. 비교표의 single-raised pot 열과 강조 범위도 보존한다. | 통과 |
| 19 | `app/id/solver/solver-client.tsx:230` | note의 SB 88 combo trips·BB 66·SB bet 80,1%를 유지했다. `dan bet`의 주어는 SB다. 전체 range 분포가 작은 bet를 뒷받침한다는 연결 대상의 설명으로 안내하며, trips 개수만으로 빈도를 설명하던 인과 축약을 제거했다. | 통과 |

## 반영 무결성

- 19개 항목 모두 수정 전 문자열이 해당 원본에 정확히 1회, 수정 후 문자열이 현재 파일에 정확히 1회 존재했다.
- 포스트 9파일은 수정 전 원문에 목록의 18개 치환만 순서대로 적용한 문자열과 현재 파일이 완전히 일치했다. 따라서 이 교정 과정에서 별도 문단·표·카드·링크·논거가 추가되거나 삭제된 흔적은 없다.
- 랜딩은 목록의 note 변경 외에 186행의 한국어 작업 주석도 ‘노트 유지’에서 ‘해설 근거에 맞춘다’로 동기화됐다. `git diff --no-index`로 확인했으며, 독자에게 보이는 추가 문안이나 기능 변경은 없었다.
- 대상 10파일의 숫자 토큰과 무늬가 붙은 카드 토큰은 수정 전후 순서까지 동일했다. 이는 **이번 편집이 값을 바꾸지 않았다는 확인**이며 수학 검산 전체를 대신하지 않는다.

## 결함 유래와 잔존 사항

앞선 보고서가 분류한 ID 표현·대명사 문제, 일부 EN 축약에서 이어진 빈도 모호성, 기존 랜딩의 과도한 인과 축약이 해당 변경으로 해소됐다. 선택적 EQR 표현·전치사·약어 도입 보완도 새로운 오류를 만들지 않았다. **이번 편집에서 생긴 확정 결함 0건, 확인한 변경 문맥에 남은 확정 결함 0건**이다.

이 결론은 위 19개 변경 항목에 한정한다. 전체 13편의 재검수 완료나 빌드·렌더·배포 통과를 뜻하지 않는다.
