# 커뮤니티 기능 현황 (Phase 6 완료)

> CLAUDE.md §10에서 분리(2026-08-11). 커뮤니티는 완성·배포 끝나서
> 매 세션 읽을 이유가 없다. 커뮤니티를 손댈 때만 열어라.

## 10. 커뮤니티 기능 현황 (Phase 6 완료)

| 기능 | 상태 |
|------|------|
| 이메일 회원가입/로그인 | ✅ |
| Google OAuth | ✅ |
| 피드 (글쓰기·좋아요·댓글) | ✅ |
| 다국어 피드 (12개 언어) | ✅ |
| Gemini 자동 번역 (캐싱) | ✅ (Vercel GEMINI_API_KEY 미설정 시 비활성) |
| 이벤트 탭 (번호 6개 선택) | ✅ |
| 실시간 채팅 (Supabase Realtime) | ✅ |
| `/community/*` → 홈 리다이렉트 | ✅ |

### 보안 패치 완료 항목
- 번역 API: 로그인 필수 + 3,000자 제한 + target 화이트리스트
- `/auth/callback`: Open Redirect 차단
- 글 5,000자 / 댓글 1,000자 / 제목 100자 길이 제한

### 남은 보안 권장 항목
- `profiles.badge` UPDATE RLS 트리거
- Rate limiting (Upstash Redis)
- 로그인 브루트포스 방지

---
