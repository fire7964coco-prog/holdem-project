# Gemini 이미지 제작 — holdem-small-blind-role

저장: `public/images/` · 포맷: WebP · 가로 1200px · 업로드 후 `npm run compress:images`

> 아직 본문에는 신규 이미지 경로를 연결하지 않았습니다. 아래 파일을 만들어 `public/images/`에 올린 뒤, 본문 이미지 경로를 교체하면 됩니다.

| # | 파일명 | 섹션 | 제안 프롬프트 |
|---|--------|------|---------------|
| 1 | `holdem-small-blind-summary.webp` | 상단 요약 카드 | 다크 그린 포커 테이블 배경의 한글 인포그래픽. 제목 "스몰블라인드 역할 핵심". 핵심 문구: "싸다고 콜하면 손해", "버튼 왼쪽", "보통 0.5BB", "플랍 이후 먼저 행동", "폴드/레이즈 중심". 골드·레드 경고 포인트, 모바일에서도 한글 가독성 높게. |
| 2 | `holdem-small-blind-position.webp` | §1 위치 | ✅ 업로드 완료. 원형 홀덤 테이블 다이어그램. BTN, SB, BB 위치를 크게 표시. SB는 번개 아이콘과 노란 하이라이트, BB는 파란 하이라이트. 제목 "스몰블라인드 위치". |
| 3 | `holdem-small-blind-oop.webp` | §2 불리한 이유 | 스몰블라인드 플레이어가 먼저 체크/베팅해야 하고 뒤 플레이어들이 지켜보는 장면. "정보 없이 먼저 행동" 문구. 긴장감 있는 조명, 칩 손실 느낌. |
| 4 | `holdem-small-blind-vs-big-blind.webp` | §3 비교 | ✅ 업로드 완료. 2열 비교 카드. 왼쪽 SB: 0.5BB, 먼저 행동, 콜 위험. 오른쪽 BB: 1BB, 옵션 체크, 팟오즈 디펜스. 다크 배경, 카드·칩 아이콘. |
| 5 | `holdem-small-blind-mistakes.webp` | §5 실수 | ✅ 업로드 완료. "스몰블라인드 실수 4가지" 인포그래픽. 아무 수티드 콜, 약한 에이스 콜, BB 체크 기대, 자동 체크를 아이콘 4개로 표현. 경고 삼각형·번개 포인트. |
| 6 | `holdem-small-blind-faq.webp` | §7 FAQ | FAQ 카드. Q1 절반인가요, Q2 콜하면 안 되나요, Q3 레이즈하면 폴드하나요, Q4 BB보다 어렵나요. 깔끔한 한글 카드형 디자인. |

스타일 참고: `holdem-value-bet-summary.webp`, `holdem-check-raise-timing.webp`, `holdem-cbet-summary.webp`

## 본문 교체 예정 위치

| 현재 이미지 | 교체 추천 |
|-------------|-----------|
| `/images/blind-table-positions.webp` | ✅ `/images/holdem-small-blind-position.webp` 적용 완료 |
| `/images/blind-chips-closeup.webp` | ✅ `/images/holdem-small-blind-vs-big-blind.webp` 적용 완료 |
| `/images/holdem-blind-meaning/holdem-blind-faq.webp` | `/images/holdem-small-blind-faq.webp` |

상단 요약 카드까지 넣을 경우 본문 첫 줄에 아래를 추가:

```markdown
:::faqcard[/images/holdem-small-blind-summary.webp][스몰블라인드 역할 핵심 요약 — 위치·0.5BB·먼저 행동·폴드/레이즈 기준][스몰블라인드 역할 — 싸다고 콜하면 손해 보는 이유 한 장 정리]:::
```
