# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음

---

## 📅 마지막 작업일
2026-06-20

---

## ✅ 오늘 완료한 작업
- 피드형 커뮤니티 웹앱 UI 시안 완성 (GlobalFeedEvent.tsx — 피드/탐색/이벤트/프로필 탭)
- 다국어 피드 구조 시안 완성 (MultiLangFeed.tsx — 한/미/일/중 4개국 비교)
- 구글 유입 비로그인 포스팅 상세 페이지 시안 (PostDetail.tsx)
- 피드 구조 설계 확정: 어드민 콘텐츠 언어별 분리 + 커뮤니티 전체 통합
- 다국어 i18n 전략 확정: 코드 1개 + 번역 JSON 파일 18개

---

## 🔄 다음 세션에 이어할 것
- [ ] community-spec.md 기반으로 Claude Code에 개발 지시 시작
- [ ] holdemmaster.com 기존 코드 구조 파악 (Next.js 버전, 라우팅 방식)
- [ ] DB 스키마 설계 (posts, users, comments, likes 테이블)
- [ ] 로그인/회원가입 시스템 선택 (NextAuth vs Clerk vs 자체)
- [ ] /community 경로 신설 후 피드 컴포넌트 연결

---

## 📝 현재 작업 중인 포스팅
| 항목 | 내용 |
|------|------|
| 상태 | 개발 기획 단계 — 포스팅 아직 없음 |
| 다음 작업 | community-spec.md 개발 지시서 기반으로 Claude Code 작업 시작 |

---

## 💡 확정된 설계 결정사항
- 기존 /blog, /en/blog 등 SEO 경로는 절대 건드리지 않음
- 커뮤니티는 /community 경로에 별도 추가
- 어드민 포스팅: language 태그 (ko=50개, en/ja/zh=30개)
- 커뮤니티 포스팅: 전체 통합 피드, 자국어 밝게 + 타국어 흐리게 + 번역 버튼
- 이벤트 탭: 로또형 번호 선택 (1~45 중 6개), 조건(글 3개+좋아요 3개 이상)
- 당첨 리워드: 기프트콘 (3개→5천원 / 4개→1만원 / 5~6개→5만원)
- 글로벌 리워드: Tremendous API 추천
- 뱃지 시스템: winner / hot / top / participant

## 🗒️ 참고 시안 파일 위치 (Replit mockup-sandbox)
- GlobalFeedEvent.tsx — 메인 피드+이벤트 완성 시안
- MultiLangFeed.tsx — 다국어 피드 구조 시안
- PostDetail.tsx — 비로그인 포스팅 상세 시안
