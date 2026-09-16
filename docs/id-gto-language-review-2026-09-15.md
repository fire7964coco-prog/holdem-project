# ID GTO 13편 — 독립 인도네시아어 언어 검수

검수일: 2026-09-15. 대상: `lib/gto-series.ts` 순서의 `lib/posts-id/` 신규 13편.

## 방법과 판정 범위

- 집필에 참여하지 않은 별도 Codex AI가 인도네시아어 편집 렌즈로 13편의 메타·본문·표·FAQ·CTA를 모두 전문 읽었다. **현지인 또는 인간 편집자의 감수가 아니다.**
- AGENTS.md, CLAUDE.md, session-handoff.md, posting.mdc, REVIEW-PROTOCOL.md, ID 공통 브리프·언어 조사·원문 정정 계약·미디어 기록을 읽었다. Git 상태와 diff 통계도 확인했다.
- Anda 호칭, 자연스러운 문장, 영어 포커 용어, 주어·수량 부정·수치의 대상, 말레이어 혼입을 검수했다. 의심 문장은 현재 EN의 대응 문단 및 승인 계약과 좁게 대조했다.
- GTO 특례에 따라 원문 구조·논거·전략을 다시 설계하지 않았다. 아래 수정안은 모두 기존 문장 안에서 처리할 수 있다. 결함 목표 개수는 두지 않았다.
- 포스트는 직접 수정하지 않았다. 다음의 행 번호와 원문은 검수 당시 작업본 기준이며, root의 후속 수정으로 행 번호가 달라질 수 있다.

## 근거가 있는 최소 수정

### L01. 수량 부정의 위치 때문에 일부와 전부가 뒤집혀 읽힐 수 있음

- 파일: `lib/posts-id/donk-bet-strategy.ts:181`
- 원문: `Namun, sebagian dari 24 combo straight mengambil lead, sehingga semuanya tidak tinggal dalam range check.`
- 문제: `semuanya tidak tinggal`은 모든 combo가 남지 않는다는 의미로도 읽힌다. 앞의 `sebagian` 및 바로 앞 문장의 straight가 check에 남는다는 설명과 충돌한다.
- 근거: 현재 EN 대응 문장은 `they are not all sitting in the checking range`이며, source contract §6 ④도 24개 모두가 남는 것은 아니라고 구분한다.
- 최소 수정: `Namun, sebagian dari 24 combo straight mengambil lead, sehingga tidak semuanya tetap berada dalam range check.`
- 유래: ID 번역 표현. **신뢰도 높음.**

### L02. 포커 call을 일반 동사로 직역

- 파일: `lib/posts-id/low-board-check-raise.ts:189`
- 원문: `Banyak combo yang memasukkan uang masih memiliki peluang membaik ketika dipanggil.`
- 문제: `dipanggil`은 이름이 불리거나 호출된다는 일반 의미다. 이 문장은 상대가 raise에 call한 뒤에도 draw가 개선될 수 있다는 뜻이다.
- 근거: 현재 EN 대응 문단은 raise가 `gets called`한 뒤 개선 가능성을 설명한다. ID 브리프는 포커 행동 `call`을 유지하도록 정한다.
- 최소 수정: `Banyak combo yang memasukkan uang masih memiliki peluang membaik ketika lawan call.`
- 유래: ID 번역 표현. **신뢰도 높음.**

### L03. 고정 용어 range를 rentang으로 바꿈

- 파일: `lib/posts-id/3bet-pot-cbet.ts:73`
- 원문: `... bet dapat menekan lawan dengan rentang hand yang luas.`
- 문제: 여기서 `rentang hand`는 포커 range를 가리킨다. 같은 글의 `range`와 불필요하게 달라지고, ID 브리프의 고정 용어에도 어긋난다.
- 최소 수정: `... bet dapat menekan lawan dengan range yang luas.`
- 유래: ID 번역 표현. **신뢰도 높음.**
- 구분: ⑪의 `rentang selisih 70,5 poin persentase`는 일반적인 숫자 범위를 뜻하므로 같은 이유로 바꾸면 안 된다.

### L04. 대명사가 전체 range가 아닌 직전 A4s를 가리킬 수 있음

- 파일: `lib/posts-id/3bet-pot-low-board.ts:79`
- 원문: `Ada pula satu jenis hand dengan gutshot: **empat combo A4s**, ... Panel draw solver membaginya menjadi tiga kategori yang saling terpisah: **Gutshot 4,8% · Backdoor FD 16,9% (14 combo) · Tanpa draw 78,3%**.`
- 문제: `membaginya`의 가장 가까운 대상이 A4s 네 combo여서 이 네 combo를 세 draw 범주로 나눈다는 오독을 만든다. 세 비율은 전체 BB range를 나눈 값이다.
- 근거: 같은 글의 83 combo 표, 뒤의 100% 합계 설명, source contract §6 ⑩의 draw축 구분.
- 최소 수정: `Panel draw solver membagi range BB menjadi tiga kategori yang saling terpisah: ...`
- 유래: ID 문장 연결. **신뢰도 높음.**

### L05. check를 말한 직후 bet 빈도의 행동명이 생략됨

- 파일: `lib/posts-id/ace-paired-board-strategy.ts:160`
- 원문: `**Jangan menjadikan "board berpasangan berarti check" sebagai aturan.** Di 6-6-3 frekuensinya 3,0%, di A-A-6 80,1%. Ukurannya bukan sekadar pair di board, ...`
- 문제: 바로 앞 행동명이 check이므로 `frekuensinya`가 check 빈도를 가리키는 것으로 읽힐 수 있다. 두 수치는 bet 빈도다. 다음의 `Ukurannya`도 bet size를 뜻하는지 판단 기준을 뜻하는지 불명확하다.
- 근거: 바로 위 OOP bet 비교표와 EN의 `The test is not whether the board paired` 문장. 수치를 새로 해석하는 수정이 아니다.
- 최소 수정: `Di 6-6-3 frekuensi bet-nya 3,0%, sedangkan di A-A-6 80,1%. Penentunya bukan sekadar pair di board, ...`
- 유래: 행동 생략은 EN 대응 문장의 모호성도 이어받음. `Ukurannya`는 ID 표현. **신뢰도 높음.**

### L06. combo 집계 불일치 설명의 동사 구성이 부자연스러움

- 파일: `lib/posts-id/low-board-check-raise.ts:155`
- 원문: `Persentase tampilan dan bobot combo tidak membagi tepat pada node ini.`
- 문제: `membagi`는 무엇을 나누는지 목적어를 요구한다. 표시 백분율과 combo 무게가 함께 주어가 되면서 어떤 두 값이 일치하지 않는지 첫 문장에서 분명하지 않다.
- 근거: 바로 다음 문장과 source contract §7은 combo 비율을 역산한 값과 표시 백분율의 차이를 설명한다. 14,9%나 63,0%를 바꾸라는 지적이 아니다.
- 최소 수정: `Persentase tampilan tidak selalu sama dengan hasil pembagian bobot combo pada node ini.`
- 유래: ID 번역 표현. **신뢰도 높음.**

## 선택적 교열 — 수치·전략 결함과 구분

아래는 문맥으로 뜻을 이해할 수 있다. 필수 결함으로 부풀리거나 전반 재작성의 근거로 쓰지 않는다.

| 위치 | 현재 표현 | 작은 개선안 | 이유·신뢰도 |
|---|---|---|---|
| ② `k-high-board-cbet.ts:9,35`, ③ `broadway-board-strategy.ts:9` | `realisasi equity ... terpaut 80,7% berbanding 116,7%` / `terpaut 77,9% berbanding 119,4%` | `EQR BB ... sedangkan EQR BTN ...` 또는 `realisasi equity masing-masing ...` | `terpaut` 뒤에는 보통 차이의 크기가 온다. 두 좌석 값을 직접 붙이면 더 명확하다. 수치 자체는 정상. 신뢰도 중간. |
| ⑤ `monotone-board-strategy.ts:35` | `Flush bisa memperoleh call dari taruhan kecil` | `Flush bisa memperoleh call dengan taruhan kecil` | call을 얻는 수단은 bet, call의 주체는 lawan이다. 전치사 하나로 더 자연스럽다. 신뢰도 높음, 경미. |
| ⑤–⑧의 도입·조건 설명 | ⑦·⑧은 본문에서 BB/BTN을 풀어 쓰지 않으며, ⑤·⑥도 좌석 이름과 약어의 대응을 선명하게 정의하지 않음 | 기존 조건 문장/표 안에서 한 번 `button (BTN)`·`big blind (BB)`로 표기. OOP/IP를 처음 쓰는 곳에는 기존 역할 설명과 연결 | 시리즈 중간 글로 직접 들어오는 독자에게 도움. ID 브리프의 좌석 도입 규칙과도 맞는다. 새 절은 필요 없다. 신뢰도 높음, 용어 도입 개선. |

## 13편 전문 읽기 완료 목록

| # | slug | 전문 읽기 | 확정 언어 지적 |
|---:|---|---|---|
| ① | a-high-board-cbet | 완료 | 없음 |
| ② | k-high-board-cbet | 완료 | 없음; 선택적 표현 개선만 |
| ③ | broadway-board-strategy | 완료 | 없음; 선택적 표현 개선만 |
| ④ | donk-bet-strategy | 완료 | L01 |
| ⑤ | monotone-board-strategy | 완료 | 없음; 선택적 표현 개선만 |
| ⑥ | paired-board-strategy | 완료 | 없음; 용어 도입 개선만 |
| ⑦ | low-board-check-raise | 완료 | L02, L06 |
| ⑧ | 3bet-pot-cbet | 완료 | L03 |
| ⑨ | 3bet-pot-bet-sizing | 완료 | 없음 |
| ⑩ | 3bet-pot-low-board | 완료 | L04 |
| ⑪ | blind-battle-cbet | 완료 | 없음 |
| ⑫ | blind-battle-connected-board | 완료 | 없음 |
| ⑬ | ace-paired-board-strategy | 완료 | L05 |

## 유지해야 할 정상 요소와 검수 한계

- Anda 호칭은 일관된다. 전문 읽기와 보조 검색에서 명확한 말레이어 혼입(`percuma`, `pelayar`, `muat turun`, `kerana`, `bahawa`, `ianya`)은 확인하지 못했다. `tangan`이 실제 손에 든 카드를 말하는 자리나 `cek tabel`이 확인 행동을 뜻하는 자리는 정상이다.
- 소수 쉼표, 영어 행동 용어, 앱의 `Belum jadi`·`Set/Trips` 명칭을 대체로 일관되게 쓴다. 화면 인용과 산문 용어가 다르다는 이유만으로 일괄 치환하지 않는다.
- Trainer의 `kerugian EV dalam bb`는 오류가 아니다. `docs/id-gto-media-review.md` 말미의 root 실측에 따르면 손실은 bb로 표시되고 점수 기준만 pot 대비다. 이 언어 검수자가 앱을 직접 열어 재확인한 것은 아니다.
- 이 문서는 독립 언어 렌즈의 결과이며, 13편의 숫자·전략·표 전 칸·원문 논거 전체를 재검증한 보고서가 아니다. 기계 게이트, 별도 전략 검수, 최종 빌드·렌더·라이브 검증은 root와 다른 담당자의 기록을 따른다.
- ⑦ FAQ 첫 답의 마지막 문장은 강한 hand와 함께 둘 개선 가능한 bluff라는 주어를 더 분명히 할 여지가 있어 전략 검수 담당자에게 전달했다. 같은 답 앞부분에 draw 동반 설명이 있으므로 여기서는 확정 논거 누락으로 판정하지 않았다.
- 전반 문장 품질은 안정적이다. 위 항목을 고치면 원문 구조를 보존한 채 명료성을 높일 수 있다. 수정 후에는 바뀐 문장과 인접 문단만 한 번 교열하면 된다.
