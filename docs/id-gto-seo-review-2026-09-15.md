# ID GTO 시리즈 SEO·가독성 독립 검수

검수일: 2026-09-15. 범위는 `lib/gto-series.ts` 순서의 ID 해설 13편이다. 별도 Codex 에이전트가 제목·메타·tldr·본문·H2·직답·FAQ·CTA를 전편 통독했다. 인간 또는 원어민 감수를 뜻하지 않는다. 이 검수자는 포스트를 수정하거나 커밋·배포하지 않았다.

## 입력과 검증 범위

- 읽음: `CLAUDE.md` 전문, `session-handoff.md` 전문, `.cursor/rules/posting.mdc` 전문, `REVIEW-PROTOCOL.md` 전문, `docs/id-gto-series-translation-brief.md`, `docs/id-gto-language-research.md`, `lib/gto-series.ts`, 아래 ID 13편 전문.
- 근거 대조: `docs/id-gto-source-contract.md`의 구조·빈도 표와 관련 정정, `docs/id-gto-media-review.md`의 CTA/UI 및 최신 Trainer 단위 확인 기록, 비교가 필요한 EN ③·⑩의 해당 문장. 등록 파일과 랜딩의 시리즈 목록/링크 렌더도 확인했다.
- Git 상태와 변경 규모를 확인하고 기존 미커밋 작업을 보존했다.
- 검색 조사는 고정된 ID 조사 문서를 사용했다. 새로운 SERP·검색량·순위 조사를 수행했다고 주장하지 않는다.
- Jiti의 `fsCache:false`, `moduleCache:false`로 현재 ID Post 객체를 평가하여 메타 길이, H2/FAQ 수, readnext 카드 제목을 대상 Post.title과 대조했다. 아래 수치는 이 검수 시점의 스냅샷이며 사이트 전체 발행 수가 아니다.
- 수학·전략·언어·실제 화면·빌드·라이브 검증은 다른 담당자의 범위다. 이 문서의 통과는 해당 검증을 대신하지 않는다.

GTO 특례에 따라 원문의 절·표·FAQ 수·핵심 논거를 보존하는 전제로 검수했다. 범용 GTO 정의, 새 SEO FAQ, 새로운 전략 또는 경험담, 전편 목록 추가를 요구하지 않았다. 기존 일반 c-bet·3-bet·포지션 글과 `/id/solver`가 각각 기초 설명과 도구 의도를 담당한다.

## 전편 커버리지

길이 열은 title / seoTitle / desc의 JS 문자열 길이다. 모든 메타는 브리프의 40 / 60 / 160 이내다. 전편 tldr은 해당 보드·플레이어 또는 preflop 역할·측정 행동을 제시한다.

| # | slug | 길이 | H2 / FAQ | 읽은 검색의도·오독 경계 | 판정 |
|---|---|---:|---:|---|---|
| ① | a-high-board-cbet | 31 / 41 / 139 | 9 / 5 | A-7-2 top pair를 가진 BB의 range check. 98,2%와 BTN c-bet 빈도를 구분 | 메타·전개 일치 |
| ② | k-high-board-cbet | 33 / 41 / 122 | 11 / 5 | K-8-3의 99,8% check와 A-high 비교. AA 부재·EQR의 차이를 설명 | 메타·전개 일치 |
| ③ | broadway-board-strategy | 34 / 49 / 136 | 11 / 4 | Q-J-T의 draw 68,4%와 check 99,9%. nut advantage를 상위 hand 분포와 연결 | 메타·전개 일치; 선택적 중복 관찰 아래 |
| ④ | donk-bet-strategy | 33 / 50 / 138 | 10 / 7 | 9-8-7 lead 23,7%가 가능한 이유. equity 우위는 여전히 BTN | 메타·전개 일치 |
| ⑤ | monotone-board-strategy | 31 / 50 / 143 | 11 / 5 | nut flush도 check하는 이유. 평균 69,9%와 A♠J♠ 개별 83,4%를 구분 | 메타·전개 일치 |
| ⑥ | paired-board-strategy | 32 / 43 / 143 | 12 / 6 | 6-6-3의 trips 우위가 range bet으로 이어지지 않는 이유. board pair와 pocket pair 분류 명시 | 메타·전개 일치 |
| ⑦ | low-board-check-raise | 32 / 46 / 135 | 11 / 6 | 6-5-2에서 check 뒤 언제 raise하는지. root 3,2%와 별도 solve 14,9% 구분 | 제목 질문에 실제 별도 노드로 답함 |
| ⑧ | 3bet-pot-cbet | 33 / 38 / 138 | 11 / 6 | A-K-2 BB 3-bettor의 100% bet과 SPR·두 sizing. 0% check에서 임의 EV 손실을 도출하지 않음 | 메타·전개 일치 |
| ⑨ | 3bet-pot-bet-sizing | 36 / 47 / 138 | 10 / 7 | Q-T-7 큰 bet 98,4%와 draw 가격·geometric sizing. 99,1% bet 합과 분리 | 메타·전개 일치 |
| ⑩ | 3bet-pot-low-board | 34 / 48 / 147 | 8 / 4 | 8-5-2를 pair한 세 combo와 기존 overpair를 구분. 큰 bet의 이유는 range 분포 | 메타 정상; 본문 수치 수식어·H2 비교대상 정정 권장 |
| ⑪ | blind-battle-cbet | 35 / 49 / 139 | 8 / 4 | SB opener의 K-T-6 c-bet 67,4%. caller lead와 구분하고 7-6-5 반례 제시 | 메타·전개 일치 |
| ⑫ | blind-battle-connected-board | 32 / 44 / 139 | 8 / 4 | 같은 입력 range의 7-6-5 bet 9,6%. board 제거 후 live combo 수가 달라짐을 설명 | 메타·전개 일치 |
| ⑬ | ace-paired-board-strategy | 28 / 44 / 138 | 8 / 4 | A-A-6 SB bet 80,1%. 6-6-3 비교 시 역할·range도 달라짐을 명시 | 메타·전개 일치; 랜딩 기존 소개 문구 별도 관찰 |

## 근거가 있는 최소 정정 후보

### S01 — ⑩ 큰 size의 97,8%를 전체 bet처럼 축약한 두 문장

- 파일: `lib/posts-id/3bet-pot-low-board.ts`, 검수 당시 120행·146행.
- 확신도: **높음**. 수치 자체 변경이 아니라 행동 범위를 복원하는 수정이다.
- 원문:
  - `Kedua, range raise yang seimbang terhadap bet berfrekuensi 97,8% juga membutuhkan bluff di samping sembilan combo set untuk value.`
  - `Strategi dengan frekuensi bet 97,8% mengasumsikan respons lawan yang optimal, dengan banyak hand yang belum membentuk pair.`
- 근거: 같은 글 액션 표와 source contract §3은 **Bet 14,9bb=97,8%**, **Bet 7,4bb=0,3%**를 별도로 표시한다. 메타·직답은 이미 `bet besar`/`dua pertiga pot`라고 정확하게 쓴다. 후반 문장이 일반 bet 빈도라고 축약하면 앞서 설정한 행동 범위가 사라진다.
- 최소 수정:
  - `terhadap bet besar berfrekuensi 97,8%`
  - `Strategi dengan frekuensi bet besar 97,8%`
- 유래: 첫 문장은 EN의 `a 97.8% range bet`라는 원문 축약을 이어받았다. 두 번째 EN은 `The 97.8% figure`였으며 ID에서 `frekuensi bet`로 풀어 쓰면서 모호성을 구체화했다. 원본과 번역의 양쪽 경위를 구분한다.
- 범위: 이 수정으로 다른 수치·전략·절·FAQ를 바꿀 이유는 없다. 반올림된 값으로 check를 역산하지 않는다.

### S02 — ⑩ H2에서 EQR 비교 대상이 생략됨

- 파일: `lib/posts-id/3bet-pot-low-board.ts`, 검수 당시 122행.
- 원문: `## Mengapa caller merealisasikan lebih banyak equity?`
- 확신도: **중간**. 뒤 첫 문장이 이전 두 예제를 설명하므로 본문 전체가 거짓은 아니다. 다만 목차/H2만 읽으면 같은 spot의 3-bettor보다 caller가 더 잘 실현한다는 뜻으로 읽힐 수 있다.
- 근거: 현재 표는 BB EQR **106,9%**, BTN **90,3%**. 이 절의 비교는 BTN 자신의 이전 두 예제 **78,7%·75,1%**와 현재 **90,3%**다. EN H2는 `Why does the caller realize more equity here than in the last two spots?`로 비교대상을 명시한다.
- 최소 수정: `## Mengapa EQR caller lebih tinggi daripada pada dua contoh sebelumnya?`
- 유래: ID H2에서 원문 비교대상이 빠진 번역 축약. 절 수·순서와 본문 논거를 보존하며 원래 질문을 복원한다.

### S03 — 링크 점검 중 발견한 기존 랜딩 ⑬ 소개의 과도한 인과 축약

- 파일: `app/id/solver/solver-client.tsx`, 검수 당시 230행 `ace-paired-board-strategy`의 note.
- 원문: `Dua As di board. Trips bukan hal langka — hanya saja SB punya lebih banyak (88 combo berbanding 66 untuk BB), sehingga SB bet 80,1%. Seluruh pertanyaan di board ini: siapa yang punya lebih banyak As di range-nya`.
- 확신도: **중간**. 새 13편의 결함으로 세지 않는 **기존 랜딩 문구**다. 이번 연결의 주변 설명이라 본체 담당자에게 별도 판정을 요청한다.
- 근거: 연결 대상인 ⑬은 `Perbedaannya ada pada bagian lain dari range, bukan hanya jumlah trips.`라고 설명하며 ⑥을 반례로 든다. ⑥에서도 OOP가 trips를 더 많이 가지지만 bet은 3,0%다. 랜딩의 `sehingga`와 `Seluruh pertanyaan ... siapa yang punya lebih banyak As`는 비교의 핵심을 As 개수 하나로 좁힌다.
- 최소 제안: `Dua As di board. SB memiliki 88 combo trips berbanding 66 untuk BB, dan bet 80,1%. Pelajari bagaimana distribusi seluruh range mendukung bet kecil.`
- 유래: 기존 랜딩에서 유지된 문구이며 이번 변경은 slug 연결이다. 본 검수자는 랜딩을 수정하지 않았다. 새 전략을 추가하는 제안이 아니라 연결 대상의 실제 설명과 소개 문구를 맞추는 제안이다.

## 통과한 항목과 취향 제안 구분

- **메타**: 39개 필드 길이 통과. 13개 제목은 각각 보드·역할·행동 또는 다른 예제와의 비교에 초점을 둔다. ①②가 c-bet 용어를 쓰면서 BB check를 제시하지만 본문에서 caller lead와 BTN c-bet을 명시적으로 구분한다. 메타를 BTN의 계산된 c-bet 빈도라고 읽게 하는 직접 표현은 찾지 못했다.
- **주제 분리**: ⑧은 A-K-2의 전체 range bet와 낮은 SPR, ⑨는 Q-T-7의 큰 size·draw 가격, ⑩은 8-5-2의 range 양극화가 중심이다. ⑥과 ⑬은 같은 paired 주제라도 보드·역할·비교 질문이 다르다. 단지 용어가 공유된다는 이유로 검색 잠식이 확인됐다고 주장하지 않는다. 실제 성과는 발행 후 쿼리 데이터로 판단해야 한다.
- **내부링크·카드**: 파싱된 26개 readnext의 표시 제목이 실제 대상 ID Post.title과 전부 일치했다. 카드는 앞선 개념/대조 보드로 이어지고, 랜딩 13개 spot의 slug가 대응 해설을 가리킨다. 전체 시리즈 목록을 모든 글에 복제할 필요가 없다. 기존 c-bet 카드의 긴 제목도 실제 기존 제목과 같으므로 이번 시리즈에서 임의 단축을 요구하지 않는다.
- **CTA**: 실제 ID spot명과 `Spot belajar → ... → ⚡ Lihat hasil`, `Hitung sendiri spot ini`, `Trainer GTO`를 사용한다. ⑦은 별도 solve 필요를 설명한다. 다른 글도 사전 계산 root와 다음 노드 해석을 구분한다. Trainer의 EV 손실 bb 표시는 최신 media-review 실측과 맞는다. 팟 대비 채점 기준을 이유로 bb 표시를 잘못된 것으로 판정하지 않았다.
- **취향/선택 항목**: ③의 H2와 FAQ 질문 `Apa perbedaan range advantage dan nut advantage?`가 정확히 같다. EN도 같은 질문을 문구만 달리 반복하며, ID 답은 Q-J-T 수치로 연결된다. 새 FAQ를 만들거나 기존 FAQ를 삭제할 사유가 아니다. 중복 질문 문구를 꼭 분리한다면 H2를 `Range advantage atau nut advantage: apa bedanya di Q-J-T?`처럼 좁게 조정할 수 있으나, 이 검수에서는 발행 차단 결함으로 보지 않는다.
- **취향 제안 제외**: 질문형 H2 비율을 맞추기 위한 재작성, 모든 절 앞 직답의 기계적 증량, 이미 고정한 제목의 새 훅, GTO 정의·무료 도구 키워드의 전편 반복을 요구하지 않았다. 일부 절이 수치표를 곧바로 읽게 하는 짧은 답을 갖는 것은 원문 구조 안에서 기능한다.

## 마감 상태

전편 SEO·가독성 검수는 완료했다. 본체는 S01 두 문장과 S02 H2의 반영 완료를 메시지로 알렸다(`tmp/id-review-corrections.json`). 정정 diff 교열은 별도 담당자가 수행하므로 이 렌즈는 전편 재검수를 반복하지 않는다. 기존 랜딩 S03은 본체의 범위·근거 판정용으로 남긴다. 이 검수자가 정정 diff 교열, 빌드 또는 발행 완료를 확인했다는 뜻은 아니다.
