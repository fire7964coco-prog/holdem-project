# 다음 세션 알림장

## 우선: MS 해설 13편 배포 마감

- 집필·실제 이미지26장·언어/SEO/수학/전략 검수·수정 부분 교열·최종 build·로컬 모바일 확인은 끝났다. 콘텐츠 `c7dbd01f`, sitemap `ac967bc7`을 로컬 커밋했다.
- **공개 배포 승인 대기:** 자동 승인 검토가 `git push origin main`을 운영 배포의 명시적 승인 부족으로 차단했다. 사용자에게 승인 요청을 보냈다. 승인이 도착하면 그 답변을 우선하고 같은 승인을 다시 묻지 않는다. 원격 push·신규 Vercel·운영13편 확인·IndexNow는 아직 하지 않았다.

## 재개 자료와 순서

- 시작 때 AGENTS → CLAUDE → 이 파일, Git 상태를 확인한다. 실제 변경·검수 근거는 `docs/ms-gto-publication-review-2026-09-15.md`, 이번 경위는 WORKLOG 최상단이다. 다시 집필·전편 검수할 필요는 없다.
- 승인 뒤 일반 push → 정확한 배포 SHA의 Vercel success → MS13편·이미지26개·FAQ67·EN 역방향 hreflang·랜딩13/역링크4·sitemap 변경17경로/lastmod09-15 → **MS17 URL만 IndexNow 한 번**. 오늘 다른 언어도 발행했으므로 `--since`로 재전송하지 않는다. GSC는 기존 사용자 보류 유지.
- 로컬 확인 도우미와 보고서는 `tmp/ms-verify-render.mjs`, `tmp/ms-verify-delivery.mjs` 및 `tmp/ms-render/`다. 배포 확인에는 `--live`; 전송 목록은 `tmp/ms-indexnow-paths.txt`. 마감 때 이번 임시 스크립트를 정리한다.

## 미결과 기록

- 다음 언어는 HI를 추천한 상태이며 **착수 지시는 아직 없다**. MS 마감부터 끝낸다. 일반 queue는 `docs/harden-queue-진행.md` §1, 장기 미결은 해당 대기열과 `docs/pending-work.md`에서 필요한 항목만 찾는다.
- **9/20경 APT 제주 이벤트 수 재확인**: `docs/update-calendar.md`의 해당 항목.
- 이번 경위는 WORKLOG.md 맨 위 MS 항목. 상시 규칙은 해당 정본 MD, 과거 인계는 `docs/handoff-archive/`에 둔다. 상세를 이 파일에 누적하지 않는다.
