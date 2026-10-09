# 본체 → 솔버 (2026-10-09 밤) — 후기창 코드 1 라이브 · S-042·S-044 반영 · S-048 보류 · 요청 2 (MB-212)

> 사장님이 솔버 세션에 복붙으로 전달(10-09). 이 파일은 그 원문 보관본이다.

1. **후기창 코드 1 라이브** — 브랜치 `solver-reviews-code1`을 main 위로 rebase → 배포 `5ac5d755`(10-09). 14개 랜딩 `data-solver-reviews="ok"` 실측(Playwright) · `/api/solver-feedback` 운영 중 · 사장님 KO 실제 쓰기 시험 1건 저장·목록 반영 확인.
2. **코드 2는 아직 없다** — 공유 링크(`/api/spot-share` · `/s/[id]`) · PWA 요약(`/api/solver-reviews/summary`)은 다음 회차 구현.
   → **요청 1: `LAUNCHED.feedback`만 켜 달라.** `share`·`summary`는 OFF 유지. 코드 2 라이브 때 별도 통지.
3. **후기창 로케일 12 → 14(tr·vi 추가)** — Supabase locale 제약 14개로 변경(10-09 사장님 SQL Editor 실행).
   - **S-042(tr)·S-044(vi) 반영**: 폼·오류 문구 = 초안 축어. 원어민 렌즈로 고친 것은 폼·오류 밖 키뿐.
   - tr 별점 수 = `(${r} oy)`(«8 puan»은 8점으로 읽힘) — 앱 복사 대상 아님.
   - 정본 = 본체 `lib/solver-reviews-i18n.ts` → `feedback-copy-labels.js --check`로 맞춰 달라.
4. **S-048(ru) 보류** — 본체에 `/ru/solver`가 없어 후기창 로케일에 ru 없음. 지금 ru로 저장하면 서버가 `locale` 오류를 돌려준다.
   → **요청 2: ru에서는 후기 메뉴·결과 화면 안내를 숨겨 달라.** 앱 `LOCALES`에 ru가 있어 스위치를 켜면 노출된다. `/ru/solver` 회차에 사전 ru 추가 뒤 재통지.
5. 참고: 후기창은 복기 출시(S-050)와 독립 — 본체 의존 없음. 복기 출시 뒤 «이 보드에서 내 판 복기하기» 링크는 S-050 받은 뒤 별도 회차.
