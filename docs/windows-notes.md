# Windows / PowerShell 환경 주의사항

> CLAUDE.md §16에서 분리(2026-08-11).
> **단, «한글 파일 일괄치환 금지»는 사고 이력이 있어 CLAUDE.md 본문에도 남겨뒀다.**

## 16. Windows/PowerShell 환경 주의사항

- 셸은 **PowerShell**. 명령 체이닝은 `&&` 대신 `;` 사용 (`&&` 파싱 에러 자주 남)
- `tail`/`head` 없음 → `Select-Object -First N` 또는 Read 도구 사용
- `node -e "..."` 안에서 따옴표/특수문자가 PowerShell에 먼저 파싱돼 깨짐 → **복잡한 스크립트는 `.mjs`/`.js` 파일로 작성해 실행**
- git 커밋 메시지에 한글·여러 줄·특수문자가 있으면 here-doc도 깨짐 → **`commit-msg.txt`에 쓰고 `git commit -F commit-msg.txt`** 가 가장 안전 (작업 후 파일 삭제)
- `git push` 출력의 "To https://..."가 stderr로 와서 빨갛게 보여도 정상 (exit code 0이면 성공)
- 🔴 **PowerShell로 한글 파일을 일괄 치환하지 마라 (2026-08-08 실제 파손).**
  `Get-Content -Raw` + `-replace` + `Set-Content -Encoding utf8` 조합은 **PowerShell 5.1이 UTF-8(BOM 없음) 파일을
  시스템 ANSI로 읽어** 한글이 전부 깨진다(`| ⑦ | srp-low-rainbow |` → `| ??| srp-low-rainbow |`).
  실제로 `docs/gto-solver-series-spec.md`를 이렇게 날렸고 `git checkout --`로 복구했다.
  → **문서 편집은 Edit 도구를 쓴다.** 굳이 스크립트로 해야 하면 `.mjs`에서 `readFileSync(p,'utf8')`로 읽어라.
  ※ 커밋 안 된 파일에 이 짓을 하면 복구 불가다. 치환 전 `git status`로 추적 여부를 먼저 확인할 것.

---
