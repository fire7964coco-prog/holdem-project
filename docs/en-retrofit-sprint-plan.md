# EN 감글 retrofit 스프린트 — 작업 계획 (작업 트리)

> 작성 2026-07-11 심야. **실행은 다음 세션.** 사용자가 진행 방식을 먼저 검토·승인하기 위한 계획서.
> 대상: EN 감사에서 나온 "감(by-feel)으로 쓴 17개 글" 중 뱅크 완비된 것부터 재작성.
> 목적: EN을 18개 언어 번역 마스터로 완벽화(키워드 근거 + 사실 + 구조). 관련: `docs/en-blog-pillar-cluster-map.md`, 메모 `multilang-expansion-12-to-18`.

---

## 이 리라이트가 하는 두 가지 (목적)
1. **실질 롱테일 키워드 먹기** — 감으로 쓴 글을 lowfruits 실데이터(뱅크) 기반으로 재설계. 실제 검색되는 롱테일을 seoTitle·H2·FAQ에 정확 배치해 **저경쟁 롱테일 1등**을 노림.
2. **최종 검수(QA)** — 동시에 **오타·사실오류(§13)·링크 연결·이미지 최적화·올바른 맥락**을 마지막으로 잡아 EN 마스터 완성도를 끌어올림.

> 즉 "키워드 전략 재설계 + 전면 검수"를 한 번에. (편집 전 **`.cursor/rules/posting.mdc`** 먼저 읽는 규칙 = [1]단계에 포함.)

---

## 0. 대원칙
- **⚠️ EN은 KO 번역본이 아님.** hreflang(slug 공유)으로만 연결되는 **독립 콘텐츠**. retrofit 재료 = **EN 키워드뱅크 + 현재 EN 글 자체 + EN SERP/PAA**. **KO 버전은 참조하지 않는다.** (파이프라인: KO→EN 아님. EN 독립저작 → 완성 후 그게 마스터 → 18개 언어로 현지화 번역.)
- **1편씩 품질집중** (병렬 대량생성 금지 — AI백과사전식 + 오류 다국어 전파 위험).
- **하루 여러 편 몰아 발행 X** → 분산(GSC 대량발행 리스크).
- 모든 편에 **실경험담(E-E-A-T)** + **§13 핸드검산** 필수.
- 편집 전 반드시 **`.cursor/rules/posting.mdc`** 먼저 읽기.

---

## 1. 글 1편당 작업 루프 (매 글 반복)

```
[1] 준비    → posting.mdc + 현재 EN 글(KO 아님) + 해당 키워드뱅크 읽기
[2] 진단    → 현재 글의 문제 파악(키워드근거 없음/구조/사실오류/링크/이미지/속도)
              → 한국어 2~3줄 요약으로 사용자에게 보고
─────────────────────────────────────────────
[3] ★게이트 → 뱅크 기반 재설계안(seoTitle·H2·FAQ 구조)을 사용자에게 제안
   (사용자)   → 사용자가 각도 승인 or 수정 지시   ← 여기서 개입
─────────────────────────────────────────────
[4] 초안    → 승인된 구조로 본문 재작성(뱅크 롱테일을 H2/FAQ에 정확 배치)
[5] 검증    → §13 핸드검산(적대적 서브에이전트) + 오타·사실오류 + 링크연결/trailing slash
              + 이미지 최적화(webp·용량·alt·맥락) + 올바른 맥락 + LDA 정합/속도
[6] 이미지  → 프롬프트·위치는 내가 지정 → 커서가 생성·저장(필요시만)
[7] 마감    → npm run build → (사용자 승인) 커밋·배포 → WORKLOG/handoff 갱신
```

**사용자 개입 지점(게이트)**: [3] 각도 승인 · [7] 커밋/배포 승인 · 이미지 생성(커서) · GSC 색인 요청.
그 외 [1][2][4][5]은 내가 진행하고 결과만 보고.

---

## 2. 순서 (배치)

| 배치 | 글 | 뱅크 | 헤드 키워드 |
|---|---|---|---|
| **1** | `holdem-starting-hands-chart` | en-starting-hands.md | best/good starting hands 2400×2·LDA24 |
| **2** | `holdem-positions` + `holdem-position-play` | en-position.md | poker positions / in position 3600·LDA22 |
| **3** | `holdem-tournament`(허브) + `holdem-tournament-vs-cash-game` | en-tournament.md · en-cash-game.md | tournament strategy 480, vs-cash 90 |

> 배치 2는 뱅크가 하나(en-position.md)라 이름/전략으로 갈라 연속 작업. 배치는 한 번에 하나씩, 사용자 페이스대로.

### 2차 웨이브 (신규 시드 불필요 — 기존 뱅크로 커버)
Rules/족보 감글: betting-actions·blind-meaning·all-in-rules·showdown-rules·flush-vs-straight·tiebreak-rules·split-pot-rules·reading-the-board
→ 기존 `en-can-you`·`en-what-is-a`·`en-what-beats`(mid라 blind spot 없음)로 retrofit.

### 신규 클러스터 후보 (감사 중 발견 — 별도 판단)
- "Poker Tournament Types" 또는 "PKO/Bounty Strategy" (freezeout·satellite·PKO·deepstack — 트레일링이 놓친 광맥)
- Cash Game 7번째 필라 (근거 있으나 볼륨 후순위 → 보류)

---

## 3. 완료 정의 (글 1편)
- [ ] 뱅크 헤드/롱테일이 seoTitle·H2·FAQ에 반영(LDA 근거)
- [ ] §13 핸드검산 통과(적대적 팩트체커)
- [ ] 내부링크 양방향(첫 링크=소속 필라) + trailing slash 없음
- [ ] 이미지 실사·webp·≤60KB·alt·속도(필요시)
- [ ] updated 날짜 갱신 · 빌드 성공 · 사용자 승인 후 배포
- [ ] cluster-map §7 + WORKLOG 갱신

---

## 4. 진행 트래킹
| 글 | 진단 | 각도승인 | 초안 | §13 | 이미지 | 배포 |
|---|---|---|---|---|---|---|
| holdem-starting-hands-chart | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| holdem-positions | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| holdem-position-play | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| holdem-tournament (허브) | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| holdem-tournament-vs-cash-game | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
