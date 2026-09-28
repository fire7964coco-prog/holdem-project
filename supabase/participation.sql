-- ============================================================
-- 참여 장치 (2026-09-28) — 대회 «참가 예정 → 후기» · 전략 글 투표 · 대회 후기 이벤트 추첨
-- 설계 = docs/participation-event-redesign-design.md
--
-- ▶ 실행: Supabase 대시보드 → SQL Editor → 이 파일 전체를 붙여넣고 RUN (여러 번 실행해도 안전)
--
-- 🔴 접근 원칙: 다섯 테이블 모두 RLS를 켜고 «정책을 하나도 만들지 않는다».
--    → anon·로그인 사용자는 브라우저에서 직접 읽지도 쓰지도 못한다.
--    읽기·쓰기는 전부 서버 액션(app/participation/actions.ts)이 service role로 하고,
--    거기서 로그인·기간·길이·링크를 먼저 검사한다. 명단(user_id)이 브라우저로 새지 않는다.
-- 🔴 링크 거부 정규식은 lib/participation-config.ts 의 LINK_PATTERN 과 같은 뜻이어야 한다.
-- ============================================================

-- 1) 참가 예정 표시 — 1인 1대회 1행. 대회 키 = lib/tournaments.ts 의 id
create table if not exists public.tournament_attendance (
  tournament_id text not null,
  user_id       uuid not null references public.profiles(id) on delete cascade,
  created_at    timestamptz not null default now(),
  primary key (tournament_id, user_id)
);

-- 2) 대회 후기 — 1인 1대회 1편
create table if not exists public.tournament_reviews (
  id             uuid primary key default gen_random_uuid(),
  tournament_id  text not null,
  user_id        uuid not null references public.profiles(id) on delete cascade,
  body           text not null,
  event_kind     text,
  result         text,
  rating         int,
  was_attending  boolean not null default false,  -- 후기 쓰기 전에 «참가 예정»을 눌렀던 사람
  is_event_entry boolean not null default false,  -- 후기 이벤트 응모(= «이벤트 응모 후기» 라벨 표시)
  is_hidden      boolean not null default false,  -- 관리자 숨김
  is_best        boolean not null default false,  -- 관리자 선정 베스트 후기
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  unique (tournament_id, user_id),
  constraint tournament_reviews_body_len  check (char_length(body) between 30 and 600),
  constraint tournament_reviews_body_link check (body !~* '(https?://|www\.|\.(com|net|org|kr|io|me|xyz|gg|ly|link|site|shop|top)([/?#]|$|[^a-z0-9]))'),
  constraint tournament_reviews_kind      check (event_kind is null or event_kind in ('main','side','satellite','spectator')),
  constraint tournament_reviews_result    check (result is null or result in ('bust','itm','final')),
  constraint tournament_reviews_rating    check (rating is null or rating between 1 and 5)
);
create index if not exists tournament_reviews_tid_idx on public.tournament_reviews(tournament_id, created_at desc);

-- 3) 전략 글 투표 — 익명 브라우저 1표. voter_id = 브라우저 localStorage의 무작위 UUID
create table if not exists public.poll_votes (
  poll_id    text not null,
  voter_id   uuid not null,
  option_idx smallint not null check (option_idx between 0 and 9),
  ip_hash    text,
  created_at timestamptz not null default now(),
  primary key (poll_id, voter_id)
);
create index if not exists poll_votes_poll_opt_idx on public.poll_votes(poll_id, option_idx);
create index if not exists poll_votes_ip_idx on public.poll_votes(ip_hash, created_at);

-- 4) 투표 한 줄 코멘트 — 로그인 필요
create table if not exists public.poll_comments (
  id         uuid primary key default gen_random_uuid(),
  poll_id    text not null,
  user_id    uuid not null references public.profiles(id) on delete cascade,
  body       text not null,
  is_hidden  boolean not null default false,
  created_at timestamptz not null default now(),
  constraint poll_comments_body_len  check (char_length(body) between 2 and 80),
  constraint poll_comments_body_link check (body !~* '(https?://|www\.|\.(com|net|org|kr|io|me|xyz|gg|ly|link|site|shop|top)([/?#]|$|[^a-z0-9]))')
);
create index if not exists poll_comments_poll_idx on public.poll_comments(poll_id, created_at desc);

-- 5) 대회 후기 이벤트 추첨 기록 — 대회 1개 = 1회차. 비트코인 블록 해시로 검증 가능
--    entry_ids = 응모 후기 id를 «작성 시각 → id» 순으로 고정한 목록(응모 번호 = 배열 순서 + 1)
--    winner_ids = 그 목록에서 SHA-256("<block_hash>:<i>") 로 뽑은 후기 id (lib/review-event.ts)
create table if not exists public.review_event_draws (
  tournament_id text primary key,
  block_height  bigint not null,
  block_hash    text not null,
  explorer_url  text,
  entry_ids     uuid[] not null,
  winner_ids    uuid[] not null,
  drawn_at      timestamptz not null default now()
);

alter table public.tournament_attendance enable row level security;
alter table public.tournament_reviews    enable row level security;
alter table public.poll_votes            enable row level security;
alter table public.poll_comments         enable row level security;
alter table public.review_event_draws    enable row level security;
-- 정책 없음(의도) — 위 🔴 접근 원칙 참조.
