---
name: posting-rules-gate
enabled: true
event: file
action: warn
conditions:
  - field: file_path
    operator: regex_match
    pattern: lib.posts
---

[필수 확인] 포스팅 파일을 건드리기 전에 규칙부터 읽어라

지금 `lib/posts*` 안의 파일을 수정하려 한다. CLAUDE.md의 OVERRIDE 지시에 따라:

1. `.cursor/rules/posting.mdc` (통합 포스팅·콘텐츠 마스터 규칙)를 먼저 Read 했는가?
   - SEO 카피·형식·이미지·§13 핸드검산·다국어·재사용 컴포넌트·배포/GSC 규칙이 전부 여기 있다.
2. `WORKLOG.md`를 이 slug로 grep 해서 이미 작업한 적 있는지 확인했는가?
   - 603KB라 통독 금지. slug로 grep만 할 것.
   - 이 확인을 건너뛰어 2026-08-02에 2건 오판했다.

아직 안 했다면 지금 수정을 멈추고 두 가지부터 확인할 것.

(주: 이 파일에 이모지를 넣지 마라. hookify가 인코딩 지정 없이 파일을 읽어서
 한국어 윈도우(cp949)에서 규칙 전체가 파싱 실패한다.)
