-- ============================================================
-- HoldemMaster Community — DB Schema (Phase 1)
-- Supabase 대시보드 → SQL Editor에 붙여넣고 RUN
-- ============================================================

-- 확장: UUID 생성
create extension if not exists "pgcrypto";

-- ------------------------------------------------------------
-- 1. profiles (auth.users 1:1 확장 — Supabase Auth가 auth.users 관리)
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  nickname    text not null,
  language    text not null default 'ko',
  avatar_url  text,
  badge       text,                          -- 'winner' | 'hot' | 'top' | 'participant' | null
  created_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
-- 2. posts
-- ------------------------------------------------------------
create table if not exists public.posts (
  id            uuid primary key default gen_random_uuid(),
  author_id     uuid references public.profiles(id) on delete cascade,
  type          text not null default 'community',  -- 'admin' | 'community'
  language      text not null,                       -- 'ko' | 'en' | 'ja' | 'zh' | ...
  original_lang text,                                -- 번역 전 원본 언어 보존
  title         text not null,
  content       text not null,
  image_url     text,
  like_count    int not null default 0,
  comment_count int not null default 0,
  created_at    timestamptz not null default now()
);

create index if not exists posts_language_idx   on public.posts(language);
create index if not exists posts_type_idx        on public.posts(type);
create index if not exists posts_created_at_idx  on public.posts(created_at desc);

-- ------------------------------------------------------------
-- 3. comments
-- ------------------------------------------------------------
create table if not exists public.comments (
  id          uuid primary key default gen_random_uuid(),
  post_id     uuid references public.posts(id) on delete cascade,
  author_id   uuid references public.profiles(id) on delete cascade,
  content     text not null,
  created_at  timestamptz not null default now()
);

create index if not exists comments_post_id_idx on public.comments(post_id);

-- ------------------------------------------------------------
-- 4. likes
-- ------------------------------------------------------------
create table if not exists public.likes (
  id          uuid primary key default gen_random_uuid(),
  post_id     uuid references public.posts(id) on delete cascade,
  user_id     uuid references public.profiles(id) on delete cascade,
  created_at  timestamptz not null default now(),
  unique(post_id, user_id)
);

create index if not exists likes_post_id_idx on public.likes(post_id);

-- ------------------------------------------------------------
-- 5. event_entries (로또형 이벤트)
-- ------------------------------------------------------------
create table if not exists public.event_entries (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid references public.profiles(id) on delete cascade,
  event_id     text not null,
  numbers      int[] not null,             -- 선택한 6개 번호 [1~45]
  is_eligible  boolean not null default false,
  created_at   timestamptz not null default now(),
  unique(user_id, event_id)
);

-- ------------------------------------------------------------
-- 6. translations (Gemini 번역 캐싱 — 같은 글은 1번만 API 호출)
-- ------------------------------------------------------------
create table if not exists public.translations (
  post_id     uuid references public.posts(id) on delete cascade,
  language    text not null,
  content     text not null,
  created_at  timestamptz not null default now(),
  primary key (post_id, language)
);

-- ============================================================
-- 트리거: auth.users 생성 시 profiles 자동 생성
-- ============================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, nickname, language, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'language', 'ko'),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 트리거: 좋아요/댓글 카운트 자동 갱신
-- ============================================================
create or replace function public.bump_like_count()
returns trigger language plpgsql as $$
begin
  if (tg_op = 'INSERT') then
    update public.posts set like_count = like_count + 1 where id = new.post_id;
  elsif (tg_op = 'DELETE') then
    update public.posts set like_count = greatest(like_count - 1, 0) where id = old.post_id;
  end if;
  return null;
end;
$$;

drop trigger if exists likes_count_trigger on public.likes;
create trigger likes_count_trigger
  after insert or delete on public.likes
  for each row execute function public.bump_like_count();

create or replace function public.bump_comment_count()
returns trigger language plpgsql as $$
begin
  if (tg_op = 'INSERT') then
    update public.posts set comment_count = comment_count + 1 where id = new.post_id;
  elsif (tg_op = 'DELETE') then
    update public.posts set comment_count = greatest(comment_count - 1, 0) where id = old.post_id;
  end if;
  return null;
end;
$$;

drop trigger if exists comments_count_trigger on public.comments;
create trigger comments_count_trigger
  after insert or delete on public.comments
  for each row execute function public.bump_comment_count();

-- ============================================================
-- RLS (Row Level Security) 정책
-- ============================================================
alter table public.profiles      enable row level security;
alter table public.posts         enable row level security;
alter table public.comments      enable row level security;
alter table public.likes         enable row level security;
alter table public.event_entries enable row level security;
alter table public.translations  enable row level security;

-- profiles: 누구나 읽기, 본인만 수정
drop policy if exists "profiles_read"   on public.profiles;
drop policy if exists "profiles_update" on public.profiles;
create policy "profiles_read"   on public.profiles for select using (true);
create policy "profiles_update" on public.profiles for update using (auth.uid() = id);

-- posts: 누구나 읽기(비로그인 포함), 로그인 유저는 community 글 작성, 본인 글만 수정/삭제
drop policy if exists "posts_read"   on public.posts;
drop policy if exists "posts_insert" on public.posts;
drop policy if exists "posts_update" on public.posts;
drop policy if exists "posts_delete" on public.posts;
create policy "posts_read"   on public.posts for select using (true);
create policy "posts_insert" on public.posts for insert with check (
  auth.uid() = author_id and type = 'community'
);
create policy "posts_update" on public.posts for update using (auth.uid() = author_id);
create policy "posts_delete" on public.posts for delete using (auth.uid() = author_id);

-- comments: 누구나 읽기, 로그인 유저 작성, 본인 것만 삭제
drop policy if exists "comments_read"   on public.comments;
drop policy if exists "comments_insert" on public.comments;
drop policy if exists "comments_delete" on public.comments;
create policy "comments_read"   on public.comments for select using (true);
create policy "comments_insert" on public.comments for insert with check (auth.uid() = author_id);
create policy "comments_delete" on public.comments for delete using (auth.uid() = author_id);

-- likes: 누구나 읽기, 본인 것만 추가/삭제
drop policy if exists "likes_read"   on public.likes;
drop policy if exists "likes_insert" on public.likes;
drop policy if exists "likes_delete" on public.likes;
create policy "likes_read"   on public.likes for select using (true);
create policy "likes_insert" on public.likes for insert with check (auth.uid() = user_id);
create policy "likes_delete" on public.likes for delete using (auth.uid() = user_id);

-- event_entries: 본인 것만 읽기/추가
drop policy if exists "events_read"   on public.event_entries;
drop policy if exists "events_insert" on public.event_entries;
create policy "events_read"   on public.event_entries for select using (auth.uid() = user_id);
create policy "events_insert" on public.event_entries for insert with check (auth.uid() = user_id);

-- translations: 누구나 읽기 (쓰기는 서버에서 service role로만)
drop policy if exists "translations_read" on public.translations;
create policy "translations_read" on public.translations for select using (true);

-- ============================================================
-- 7. chat_messages (Supabase Realtime 글로벌 채팅 — Phase 6)
-- ============================================================
create table if not exists public.chat_messages (
  id          uuid primary key default gen_random_uuid(),
  room        text not null default 'global',
  user_id     uuid references public.profiles(id) on delete cascade,
  nickname    text not null,
  language    text not null default 'ko',
  content     text not null check (char_length(content) <= 200),
  created_at  timestamptz not null default now()
);

create index if not exists chat_messages_room_created_at_idx
  on public.chat_messages(room, created_at desc);

alter table public.chat_messages enable row level security;

drop policy if exists "chat_read"   on public.chat_messages;
drop policy if exists "chat_insert" on public.chat_messages;
-- 비로그인도 읽기 가능, 로그인 유저만 자신 명의로 작성 가능
create policy "chat_read"   on public.chat_messages for select using (true);
create policy "chat_insert" on public.chat_messages for insert
  with check (auth.uid() = user_id);
