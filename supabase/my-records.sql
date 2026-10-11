-- ============================================================
-- «내 기록» (2026-10-11) — solver_saved_items · win_rate_quiz_hands
-- 설계 = docs/my-records-design.md (§3) · 솔버 요청 S-067 · 회신 MB-243
--
-- ▶ 실행: Supabase 대시보드 → SQL Editor → 이 파일 전체를 붙여넣고 RUN (여러 번 실행해도 안전)
--
-- 🔴 접근 원칙: trainer_attempts(schema.sql §10)와 같다 — 앱(브라우저)이 직접 쓰고,
--    RLS로 «본인 행만» 읽고 쓴다. 이 정책이 빠지면 남의 기록이 그대로 보인다. 지우지 말 것.
--    로그인하지 않으면 두 표 모두 쓰지 않는다(기록은 브라우저에만 남는다).
-- ============================================================


-- ------------------------------------------------------------
-- 1) solver_saved_items — 솔버에 저장한 레인지·벳 설정 (쓰는 곳: solver.holdemmaster.com)
--    솔버가 넘긴 SQL(handoff-to-main-site/supabase_solver_saved_items.sql) 그대로 + 상한 2곳 수정:
--    ① 상한을 «살아 있는 행 1,000 + 지운 표시 포함 전체 3,000»으로 나눴다
--       (원안은 지운 표시까지 1,000에 세서, 저장·삭제를 오래 반복하면 실제 목록이 적어도 막혔다)
--    ② 지운 표시를 되살리는 update(deleted_at → null)도 살아 있는 행 상한을 검사한다
-- ------------------------------------------------------------
create table if not exists public.solver_saved_items (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,

  kind        text not null check (kind in ('range', 'config')),
  -- 기기에서 만든 고유값. 같은 항목을 여러 기기에서 고쳐도 한 줄로 모이게 하는 열쇠
  client_id   text not null check (char_length(client_id) between 1 and 64),

  -- 저장 목록의 그룹(폴더) 경로 — 솔버 DbItemPicker와 같은 4단
  name0       text not null default '' check (char_length(name0) <= 100),
  name1       text not null default '' check (char_length(name1) <= 100),
  name2       text not null default '' check (char_length(name2) <= 100),
  name3       text not null default '' check (char_length(name3) <= 100),
  is_group    boolean not null default false,

  -- 레인지 = 레인지 텍스트 · 벳 설정 = 팟·스택·크기 등 (그룹이면 null)
  value       jsonb check (value is null or octet_length(value::text) <= 20000),

  -- 기기에서 마지막으로 고친 시각 (두 기기가 같은 항목을 고치면 나중 것이 이긴다)
  updated_at  timestamptz not null,
  -- 지운 표시 (다른 기기에서도 지워지게 행은 남긴다)
  deleted_at  timestamptz,
  -- 서버가 받은 시각 (기기가 «마지막으로 받은 뒤 바뀐 것»만 가져갈 때 쓴다)
  synced_at   timestamptz not null default now(),

  unique (user_id, kind, client_id)
);

create index if not exists solver_saved_items_user_synced_idx
  on public.solver_saved_items (user_id, synced_at);

-- synced_at은 클라이언트 값을 믿지 않는다
create or replace function public.solver_saved_items_touch()
returns trigger language plpgsql as $$
begin
  new.synced_at := now();
  return new;
end $$;

drop trigger if exists solver_saved_items_touch on public.solver_saved_items;
create trigger solver_saved_items_touch
  before insert or update on public.solver_saved_items
  for each row execute function public.solver_saved_items_touch();

-- 상한: 사용자당 종류별 «살아 있는 행 1,000» + «지운 표시 포함 전체 3,000»
create or replace function public.solver_saved_items_limit()
returns trigger language plpgsql as $$
begin
  -- 새로 살아 있는 행이 되는 경우(새 행 · 지운 표시 되살리기)만 살아 있는 행 상한을 본다
  -- (INSERT에서 old를 읽지 않도록 분기를 나눴다)
  -- ★upsert(insert … on conflict do update)도 BEFORE INSERT를 먼저 탄다 — 같은 열쇠의 행이 이미 있으면
  --   새 행이 아니라 수정이므로 INSERT 상한을 보지 않는다(안 그러면 상한에 닿은 사람은 기존 항목도 못 고친다).
  --   되살리기 검사는 이어지는 UPDATE 트리거가 한다.
  if tg_op = 'INSERT' then
    if exists (select 1 from public.solver_saved_items
               where user_id = new.user_id and kind = new.kind and client_id = new.client_id) then
      return new;
    end if;
    if (select count(*) from public.solver_saved_items
        where user_id = new.user_id and kind = new.kind) >= 3000 then
      raise exception 'solver_saved_items limit reached (total)';
    end if;
    if new.deleted_at is null
       and (select count(*) from public.solver_saved_items
            where user_id = new.user_id and kind = new.kind and deleted_at is null) >= 1000 then
      raise exception 'solver_saved_items limit reached (live)';
    end if;
  elsif old.deleted_at is not null and new.deleted_at is null then
    if (select count(*) from public.solver_saved_items
        where user_id = new.user_id and kind = new.kind and deleted_at is null) >= 1000 then
      raise exception 'solver_saved_items limit reached (live)';
    end if;
  end if;
  return new;
end $$;

drop trigger if exists solver_saved_items_limit on public.solver_saved_items;
create trigger solver_saved_items_limit
  before insert or update on public.solver_saved_items
  for each row execute function public.solver_saved_items_limit();

alter table public.solver_saved_items enable row level security;

drop policy if exists "본인 저장 조회" on public.solver_saved_items;
create policy "본인 저장 조회"
  on public.solver_saved_items for select
  using (auth.uid() = user_id);

drop policy if exists "본인 저장 추가" on public.solver_saved_items;
create policy "본인 저장 추가"
  on public.solver_saved_items for insert
  with check (auth.uid() = user_id);

drop policy if exists "본인 저장 수정" on public.solver_saved_items;
create policy "본인 저장 수정"
  on public.solver_saved_items for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "본인 저장 삭제" on public.solver_saved_items;
create policy "본인 저장 삭제"
  on public.solver_saved_items for delete
  using (auth.uid() = user_id);


-- ------------------------------------------------------------
-- 2) win_rate_quiz_hands — 승률 시뮬레이터 퀴즈 1판 = 1행 (쓰는 곳: 본체 /win-rate-quiz · /en/win-rate-quiz)
--    카드·보드는 저장하지 않는다(설계 §3-1). 퀴즈에서 한 번이라도 짐작한 판만 올린다.
--    고칠 일이 없는 기록이라 update 정책은 두지 않는다(올리기 = insert … on conflict do nothing).
-- ------------------------------------------------------------
create table if not exists public.win_rate_quiz_hands (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,

  -- 기기에서 만든 고유값. 브라우저에 쌓인 판을 로그인 때 다시 올려도 중복되지 않게 하는 열쇠
  client_id   text not null check (char_length(client_id) between 1 and 64),

  table_size  int  not null check (table_size in (6, 9)),
  players     int  not null check (players between 2 and 6),

  -- 짐작 횟수(스트리트 수 · 최대 4) · 오차 합(%p) — 평균 오차 = err_sum ÷ guesses
  guesses     int  not null check (guesses between 1 and 4),
  err_sum     numeric(6, 2) not null check (err_sum >= 0 and err_sum <= 400),
  -- 콜/폴드를 고른 횟수 · 팟오즈 판정과 맞은 횟수
  decisions   int  not null check (decisions between 0 and 4),
  hits        int  not null check (hits >= 0 and hits <= decisions),
  -- 그 판 점수 합 (짐작 1번 = 0~100점)
  points      int  not null check (points between 0 and 400),

  played_at   timestamptz not null,          -- 기기에서 끝낸 시각
  created_at  timestamptz not null default now(),

  unique (user_id, client_id)
);

create index if not exists win_rate_quiz_hands_user_played_idx
  on public.win_rate_quiz_hands (user_id, played_at desc);

-- 상한: 사용자당 20,000판 (설계 §3-1 · 사장님 ○ 10-11)
create or replace function public.win_rate_quiz_hands_limit()
returns trigger language plpgsql as $$
begin
  -- 이미 올린 판을 다시 올리는 경우(on conflict do nothing)는 새 행이 아니다 — 상한을 보지 않는다
  if exists (select 1 from public.win_rate_quiz_hands
             where user_id = new.user_id and client_id = new.client_id) then
    return new;
  end if;
  if (select count(*) from public.win_rate_quiz_hands where user_id = new.user_id) >= 20000 then
    raise exception 'win_rate_quiz_hands limit reached';
  end if;
  return new;
end $$;

drop trigger if exists win_rate_quiz_hands_limit on public.win_rate_quiz_hands;
create trigger win_rate_quiz_hands_limit
  before insert on public.win_rate_quiz_hands
  for each row execute function public.win_rate_quiz_hands_limit();

alter table public.win_rate_quiz_hands enable row level security;

drop policy if exists "본인 퀴즈 조회" on public.win_rate_quiz_hands;
create policy "본인 퀴즈 조회"
  on public.win_rate_quiz_hands for select
  using (auth.uid() = user_id);

drop policy if exists "본인 퀴즈 저장" on public.win_rate_quiz_hands;
create policy "본인 퀴즈 저장"
  on public.win_rate_quiz_hands for insert
  with check (auth.uid() = user_id);

drop policy if exists "본인 퀴즈 삭제" on public.win_rate_quiz_hands;
create policy "본인 퀴즈 삭제"
  on public.win_rate_quiz_hands for delete
  using (auth.uid() = user_id);


-- ------------------------------------------------------------
-- 확인 (RUN 뒤 아래 결과가 나오면 정상)
--   두 표 모두 rowsecurity = true · 정책 = solver_saved_items 4개 · win_rate_quiz_hands 3개
-- ------------------------------------------------------------
select c.relname as "표", c.relrowsecurity as "RLS 켜짐",
       (select count(*) from pg_policies p where p.schemaname = 'public' and p.tablename = c.relname) as "정책 수"
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relname in ('solver_saved_items', 'win_rate_quiz_hands')
order by 1;
