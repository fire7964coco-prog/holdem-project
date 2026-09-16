# 포스팅 배치 5단계 검증 (2026-09-16)

근거 보고서 = `docs/post-placement-analysis-2026-09-16.md`. 이 문서는 그 §3 배치안의 **관문 블록 구현 + 화면 검증** 기록이다.
그림은 이 폴더(`docs/post-placement-verification-2026-09-16/`). 캡처는 screen-review 스킬(Playwright 1440×900 · 390×844).

## 1. 관문 «추천 글» 블록 — 현재 구성 → 보고서 §3대로

| 관문 | 전(라이브) | 후 | 그림 |
|---|---|---|---|
| /tournaments | WSOP 2026 피처 카드 + 10카드(첫 칸이 noindex 글 schedule-check, 펍 첫방문 없음) | **진행 중 대회 가이드 카드**(APT 제주·WPL 마스터스 — `EVENT_UNTIL`로 자동 강등) + 참가법→바이인→세금→펍 첫방문→WSOP 2026→… | d-tournaments.png · m-tournaments.png |
| /solver | 전용 블록 없음(교육 예제 13편 목록만) | 「솔버를 돌리기 전에 읽어 둘 글」 신설 — 스타팅 레인지·레인지 뜻·3벳 | d-solver.png |
| /hand-chart | §3와 이미 일치 | 변경 없음 | — |
| /ranking | 기초 룰·전략·뱅크롤·펍 가이드 | 족보·기초 룰·올인 룰·전략·펍 첫방문·펍 가이드(6장) | d-ranking.png |
| /pub | 계산기·게임 순서·블러핑 | 펍 첫방문·족보·올인 룰 + 기존 3장(6장) | m-pub.png |

진행 중 대회 카드의 제목·설명은 글의 `title`·`desc` 그대로(서버 `lib/active-event-guides.ts`가 POSTS에서 읽어 prop으로 내림 — 클라이언트 POSTS import 금지).

## 2. 홈·/blog 화면 검증 (hidden 카드 · 더보기 · 순환 이음새 · 넘침)

| 자리 | 결과 |
|---|---|
| 홈 1440 상단 순서 | APT 제주 → WPL 마스터스 → 참가법 → 바이인 → 세금 → 펍 첫방문 (라이브 캡처 `tmp/screen/live-before/1440/01-home/overview-1.png`) |
| /blog 초기 HTML | 고유 글 링크 72 · `hidden` 카드 50 · 폴백 버튼 「글 더 보기 (50편 남음)」 |
| 가로 넘침 | 홈·/blog·관문 4곳 × 2폭 전부 0px |
| React 중복 key 경고 | 0건(2바퀴째까지 스크롤) |
| 모바일 홈 이음새 | «♠ 모든 글을 다 봤습니다 — 처음부터 다시 이어집니다» + 정책 링크 → 다음 카드가 1번(APT 제주)부터 — m-home-seam.png |
| /blog 이음새 | 2바퀴째 첫 카드 앞에 같은 문구 한 줄(이번 회차 추가 — 전엔 표시 없이 같은 카드가 이어져 중복처럼 읽혔다) — d-blog-seam.png · m-blog-seam.png |

## 3. 캡처가 잡은 결함 1건 — 데스크톱 홈은 순환이 안 됐다 (고침)

라이브 데스크톱 홈은 42,934px에서 멈추고 순환도 커뮤니티 글 추가 로드도 없었다. 원인: 무한스크롤 센티널이 **모바일 컨테이너(`lg:hidden`) 안에만** 있어 데스크톱에선 display:none → IntersectionObserver가 울리지 않았다. 데스크톱 `<main>` 끝에 두 번째 센티널을 두고 둘 다 관찰하게 고쳤다. 고친 뒤 데스크톱 문서 높이 85,624px(2바퀴)·이음새 표시 확인 — d-home-seam.png.

## 4. 모바일 홈 「↑」 버튼 — 고침 (같은 날 사장님 「알아서 해줘」)

전: 왼쪽 아래(글쓰기 「+」를 피하려고)에 항상 떠서, 왼쪽 정렬인 카드 CTA(«바로가기 →»·«전체 읽기 →»)를 덮었다(m-home-seam.png 좌하단).
후(`components/site-chrome.tsx`): ① 오른쪽 「+」 위에 쌓는다(bottom 138px) ② 커뮤니티 홈에선 **위로 스크롤할 때만** 나타나고 내려 읽는 동안은 숨는다(8px 미만 흔들림 무시). 순환 피드라 끝이 없어 «항상 떠 있음»이 더 해로웠다. 실측(390): 내려갈 때 opacity 0 · 300px 올리면 오른쪽 위에 표시 · 다시 내려가면 숨음 — m-home-fab-after.png.

## 5. 4주 뒤 비교

기준선은 보고서 §2 표(창 2026-08-17~09-13). 2026-10-14 이후 같은 28일 창으로 홈·/blog·/tournaments·/solver 참여율과 S·A 티어 세션을 비교한다(`docs/update-calendar.md`에 등록).
