# HI GTO 해설 원문·검증 범위

작성: 2026-09-15. GTO ①–⑬ 힌디어 제작 입력이다. [집필 브리프](hi-gto-translation-brief.md)와 함께 읽는다.

- 현재 EN13파일 SHA-256과 평가된 Post를 직접 읽어 [ID 원문 계약 §2](id-gto-source-contract.md)의 해시·H2·FAQ·표행에 대조했다. **13/13 일치**, 근거 `tmp/hi-en-source-snapshot.json`. ①–⑫ masterUpdated는2026-09-02, ⑬은2026-08-21이다.
- 전체 EN 본문과 [ID 계약](id-gto-source-contract.md) **N01–N24·C01–C12 및 §6–9**를 승계한다. 직전 [MS 최종 검수](ms-gto-publication-review-2026-09-15.md)에서 확인한 원문·수치·노드 구분도 이어간다. 다른 언어의 문체·수치 구분자·버튼명은 승계하지 않는다.
- 표637행(헤더·구분행 포함), FAQ67개, 각편 본문chart1/readnext2의 구조를 보존한다. ⑤ 공통조건 H2 없음·⑩–⑬ FAQ H2 없음도 원문 그대로다.
- 계산 정본은 [시리즈 규격 §4-B](gto-solver-series-spec.md). HI 앱의 실제 화면·UI는 [HI 미디어 검수](hi-gto-media-review.md)에서 별도로 확인한다. 원문 해시 일치는 HI 번역·카드·전략·화면 검증 완료를 뜻하지 않는다.
- HI 기존 입문8편의 slug를 확인했다. EN 전문글 미발행 링크는 브리프의 **기존 source slug+target 자리**만 HI solver·입문으로 연결하고 설명도 목적지 범위에 맞춘다. 링크 수·중복 횟수를 면제하지 않는다.
- ⑦은 사전root96.8/3.2와 2026-08-20 별도 재솔브root98.0/2.0·후속node를 분리한다. 당시 내부0.16=0.016bb, 표시빈도/콤보 역산 차이14.9/14.6 및63.0/62.9 고지를 보존한다. 이번 새 solver 실행으로 기록하지 않는다.
- 등록·전체 언어/SEO/전략/수학 검수·정정 교열·모바일/JSON-LD·운영·검색 통지 결과는 별도 발행 검수 기록에 적는다.

## HI 독립 검수에서 구체화한 런아웃 조건

- **S-HI-01 (⑥ 22의 counterfeiting)**: EN의 “a running three counterfeits it into playing the board”는 리버 조건이 생략돼 있다. HI 초안은 이를 “두 장 모두 3이면 더 높은 Two Pair”로 잘못 구체화했다. 실제 `22 / 66333`은 Full House이며, `22 / 66332`도 22가 Full House를 만들므로 단순히 “3이 나오면”으로 일반화할 수 없다.
- HI 최종 설명은 **턴 3, 리버 K → `22 / 6633K`가 보드의 Two Pair `6633K`를 플레이**하는 구체 사례로 한정한다. 두 독립 검수자가 카드 평가기로 원 주장과 반례를 확인했다. 원문의 counterfeiting 설명은 유지하고 조건만 명확히 했다. 이 작업에서 EN 및 기존 발행 언어를 수정한 것으로 기록하지 않는다.
