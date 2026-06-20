# HoldemMaster 커뮤니티 개발 지시서

> Claude Code에 붙여넣기용 마스터 프롬프트
> 기존 holdemmaster.com (Next.js)에 피드형 커뮤니티를 추가하는 작업

---

## 🎯 작업 목표

**기존 SEO 페이지는 절대 건드리지 않는다.**
`/blog`, `/en/blog`, `/ja/blog` 등 기존 경로는 그대로 유지.
**`/community` 경로에 새 피드형 커뮤니티를 추가한다.**

---

## 📐 전체 구조

```
holdemmaster.com/
├── (기존 유지) /blog, /en/blog, /ja/blog ...
├── (기존 유지) /calculator, /practice, /quiz ...
└── (신규 추가) /community
    ├── /community          ← 피드 메인 (로그인 필요)
    ├── /community/post/[id] ← 포스팅 상세 (비로그인도 읽기 가능)
    ├── /community/write    ← 글쓰기
    └── /community/event    ← 이벤트 탭
```

---

## 🗄️ DB 스키마

### users 테이블
```sql
id          UUID PRIMARY KEY
email       TEXT UNIQUE NOT NULL
nickname    TEXT NOT NULL
language    TEXT DEFAULT 'ko'   -- 'ko' | 'en' | 'ja' | 'zh' | ...
avatar_url  TEXT
badge       TEXT                -- 'winner' | 'hot' | 'top' | 'participant' | NULL
created_at  TIMESTAMP
```

### posts 테이블
```sql
id          UUID PRIMARY KEY
author_id   UUID REFERENCES users(id)
type        TEXT NOT NULL       -- 'admin' | 'community'
language    TEXT NOT NULL       -- 'ko' | 'en' | 'ja' | 'zh' | ...
title       TEXT NOT NULL
content     TEXT NOT NULL
image_url   TEXT
like_count  INT DEFAULT 0
comment_count INT DEFAULT 0
created_at  TIMESTAMP
```

### comments 테이블
```sql
id          UUID PRIMARY KEY
post_id     UUID REFERENCES posts(id)
author_id   UUID REFERENCES users(id)
content     TEXT NOT NULL
created_at  TIMESTAMP
```

### likes 테이블
```sql
id          UUID PRIMARY KEY
post_id     UUID REFERENCES posts(id)
user_id     UUID REFERENCES users(id)
UNIQUE(post_id, user_id)
```

### event_entries 테이블
```sql
id              UUID PRIMARY KEY
user_id         UUID REFERENCES users(id)
event_id        TEXT NOT NULL
numbers         INT[] NOT NULL              -- 선택한 6개 번호 [1~45]
is_eligible     BOOLEAN DEFAULT false       -- 참여 조건 충족 여부
created_at      TIMESTAMP
```

---

## 🎨 디자인 테마

```css
--bg:       #0b1120   /* 메인 배경 */
--card:     #0f1a2e   /* 카드 배경 */
--gold:     #d4af37   /* 메인 액센트 (골드) */
--gold-lt:  #f0d060   /* 밝은 골드 */
--text:     #f0e8c8   /* 본문 텍스트 */
--muted:    rgba(255,255,255,0.4)
```

---

## 📱 피드 탭 구조

### Tab 1: 피드 (기본값)
- 상단: 어드민 전략 포스팅 (user.language 기준 필터)
  - 한국어 유저 → language='ko' 어드민 글
  - 영어 유저   → language='en' 어드민 글
- 하단: 통합 커뮤니티 포스팅 (전체 언어)
  - user.language와 같은 글 → 밝게 표시
  - 다른 언어 글 → 투명도 50% + "번역 보기" 버튼

### Tab 2: 탐색 (Explore)
- 최신 / 인기 / 팔로우 필터
- 전체 언어 포스팅 (플래그 아이콘으로 언어 표시)

### Tab 3: 이벤트
- 참여 조건: 커뮤니티 글 3개 이상 작성 + 좋아요 3개 이상 받기
- 번호 선택: 1~45 중 6개 선택 (로또 방식)
- 당첨 리워드:
  - 3개 일치 → 기프트콘 5,000원
  - 4개 일치 → 기프트콘 10,000원
  - 5~6개 일치 → 기프트콘 50,000원
- 글로벌 리워드: Tremendous API (Amazon Gift Card / PayPal / Google Play)
- 추첨 결과: YouTube 영상 임베드로 공개

### Tab 4: 프로필
- 내 글 목록, 좋아요 수, 뱃지 표시
- 언어 설정 변경

---

## 🔐 인증 시스템

NextAuth.js 사용 권장:
- Google OAuth (가장 편함)
- 이메일+비밀번호 (옵션)
- 가입 시 언어 자동 감지 (navigator.language 기반)

비로그인 유저:
- /community/post/[id] 는 읽기 가능
- 좋아요/댓글/이벤트 클릭 시 → 회원가입 유도 모달

---

## 🌐 다국어 (i18n)

next-intl 라이브러리 사용:
```
/messages/ko.json  → { "feed": "피드", "event": "이벤트", ... }
/messages/en.json  → { "feed": "Feed", "event": "Event", ... }
/messages/ja.json  → { "feed": "フィード", "event": "イベント", ... }
/messages/zh.json  → { "feed": "动态", "event": "活动", ... }
```

URL 구조: 언어 prefix 없이 user.language로 자동 처리
(기존 /en/blog SEO 구조와 충돌 없음)

---

## 📋 개발 순서 (Phase)

### Phase 1: 기반 (1~2주)
- [ ] DB 스키마 생성 (위 스키마 그대로)
- [ ] NextAuth 로그인 연동
- [ ] /community 라우트 신설
- [ ] 기본 피드 컴포넌트 (어드민 포스팅 표시)

### Phase 2: 커뮤니티 기능 (2~3주)
- [ ] 유저 글쓰기/수정/삭제
- [ ] 댓글 시스템
- [ ] 좋아요 토글
- [ ] 다국어 피드 필터 (자국어 우선)

### Phase 3: 이벤트 (1~2주)
- [ ] 참여 조건 체크 로직
- [ ] 번호 선택 UI
- [ ] 당첨 결과 공개 (YouTube 임베드)
- [ ] 리워드 발송 (Tremendous API 연동)

### Phase 4: 폴리시 (1주)
- [ ] 뱃지 시스템 (winner/hot/top/participant)
- [ ] 실시간 온라인 유저 표시
- [ ] 번역 버튼 (DeepL 또는 Google Translate API)

---

## 📎 참고 UI 시안

아래 컴포넌트들을 UI 레퍼런스로 사용할 것:
- `GlobalFeedEvent.tsx` — 피드+탐색+이벤트+프로필 완성 시안
- `MultiLangFeed.tsx` — 다국어 피드 구조 (4개국 비교)
- `PostDetail.tsx` — 비로그인 포스팅 상세 페이지

---

## ⚠️ 절대 건드리지 말 것

- `/pages/blog/**` 또는 `/app/blog/**` 기존 블로그 라우트
- `/en/`, `/ja/`, `/zh/` 등 다국어 SEO 경로
- 기존 메타태그, sitemap.xml, robots.txt
- 기존 네비게이션 (홈/계산기/연습장/퀴즈 등)

**커뮤니티는 완전히 독립된 섹션으로 추가한다.**
