# 다음 세션 알림장

> 갱신: 2026-09-22. 최신 사용자 지시: **핸드오프를 읽고 th/tr/vi를 포함한 all-in/showdown 규칙 전파 묶음을 마감**.
> 이 묶음은 구현·검수·빌드·로컬 커밋까지 끝났지만 **push·배포·IndexNow·라이브 검증은 하지 않았다**.
> 시작 순서: AGENTS.md → CLAUDE.md 전문 → 이 파일 → git status/diff stat. 상세 증거는 docs/harden-brief/rules-closeout-tail.md §8과 WORKLOG 2026-09-22 (8).

## 완료 상태

- 규칙 전파 포스트 41편 완료:
  - core showdown tldr 9편: en/ar/de/es/id/ja/pt/zh/zh-hant.
  - tail all-in 16편 + showdown 16편: bn/fa/fil/fr/he/hi/it/ms/pl/ro/ru/sw/th/tr/uk/vi.
- 모든 대상 글의 `updated`는 2026-09-22. tail `masterUpdated`는 all-in 2026-08-12, showdown 2026-07-12를 유지했다.
- 핵심 의미를 보존했다: tournament all-in은 모든 betting 종료 뒤 모든 live hand 즉시 공개, cash는 house rule/WSOP 2026 B149, river caller 요청권은 자기 카드 보유/table 조건, face-down 카드는 100% identifiable/retrievable 조건, Rule 117은 확정 penalty지만 자동 dead는 아님.
- 독립 검수에서 찾은 B149 계층 오기 6개 언어(fr/it/pl/ro/ru/uk)와 Rule 117 가능형 약화 13개 언어를 수정했다. th/tr/vi는 별도 자연어·용어 재검수까지 통과했다.
- 41파일 보존 검사 통과: slug/title/seoTitle/desc/category/date/masterUpdated/tags/image, FAQ 질문·개수, heading(ID의 승인된 Cek→Check만 예외), URL, 카드, 이미지, 변경 줄 수, template literal, plain tldr.
- 25로케일 하드 감사에서 빨강 0·주황 0. showdown 카드 예시는 자동 파서 미검사라 직접 검산해 Hero의 Q-high straight flush가 Villain의 one pair를 이기는 것을 확인했다.
- `npm run build` 성공: 정적 페이지 773, sitemap 70 blog + 577 intl + 81 static + 25 locale homes. hreflang·directive·meta-lang 0건, FAQ 스키마 575/575.
- 사이트맵 대상 41개는 모두 2026-09-22. diff는 대상 31개(10개는 이미 최신)와 앞선 미배포 PT 커밋 `0c74affa`의 5개 생성기 갱신으로 구성된다.
- 저장소 전역 진단의 기존 비차단 항목은 남아 있다: structure tail 40, answer-echo 기타 40, mirror-pair 기존 갈림 28. 이번 41편 보존 검사와 대상 audit/build에는 신규 차단이 없다.

## 다음 실제 행동

1. 새 사용자 지시를 우선한다.
2. 현재 main 로컬 커밋과 앞선 `0c74affa`는 아직 원격에 올리지 않았다. **push·배포는 사용자의 별도 명시적 확인 뒤에만** 한다.
3. push 승인이 오면 먼저 `git status -sb`와 `git log --oneline origin/main..main`으로 정확한 미배포 커밋을 확인하고, 배포 뒤 대상 URL·FAQ·본문·모바일 화면과 IndexNow를 별도 마감한다.
4. 다른 대기열(Q8-b ID/DE, calc EN7 등)은 이번 묶음에 섞지 않았으며 새 지시 없이 자동 착수하지 않는다.

## 참고 경계

- 정본 및 검증 기록: `docs/harden-brief/rules-closeout-tail.md` §8.
- 원래 출처·473개 검사 자리: 같은 문서 §2–§5.
- 우편함 기원: `../홀덤검수/mailbox/out-검수장.md` MA-147, 본체 답신 `mailbox/out-본체.md` MB-073.
- 제목·description·keywords·slug·이미지·카드·팟 예제·URL·FAQ 질문/개수는 계속 보존한다.
