-- ============================================================
-- 솔버 후기창 (2026-10-04 · 코드 1) — 솔버 «써 본 사람들» 후기·질문 · 운영자 답글 · 도움됐어요 · 후기 프로필
-- 설계 = docs/solver-review-design.md (§7-1 테이블 초안)
--
-- ▶ 실행: Supabase 대시보드 → SQL Editor → 이 파일 전체를 붙여넣고 RUN (여러 번 실행해도 안전)
--    🔴 배포보다 먼저 실행한다. 테이블이 없으면 랜딩 블록은 «잠시 후» 상태로 조용히 숨는다.
--
-- 🔴 접근 원칙 = participation.sql 과 같다: RLS on + 정책 0개.
--    읽기·쓰기는 전부 본체 서버 코드(lib/solver-feedback-server.ts)가 service role로 하고,
--    거기서 로그인·길이·링크·속도 제한을 먼저 검사한다. 앱(솔버 도메인)도 본체 /api/solver-feedback 를 거친다.
-- 🔴 링크 거부 정규식은 lib/solver-feedback-config.ts · lib/participation-config.ts 의 LINK_PATTERN 과 같은 뜻.
--    숨김 사유 3값·로케일 14값도 같은 파일과 맞춘다 — 게이트 `npm run check:solver-feedback`.
-- ============================================================

-- 1) 스팟 공유 — 코드 2(/api/spot-share · /s/<id>)가 쓴다. 후기의 spot_share_id 가 가리키므로 먼저 만든다.
create table if not exists public.spot_shares (
  id         text primary key,
  payload    text not null,
  meta       jsonb,                -- 서버가 payload를 디코드해 만든다(클라이언트 meta 안 받음)
  ip_hash    text,
  created_at timestamptz not null default now(),
  constraint spot_shares_payload_len check (char_length(payload) <= 16384)  -- 앱 디코더 상한(solver/src/spot-share.ts)
);
create index if not exists spot_shares_ip_idx on public.spot_shares(ip_hash, created_at);

-- 2) 후기·질문 — 1인 1언어 1후기(질문은 여러 개)
create table if not exists public.solver_feedback (
  id                  uuid primary key default gen_random_uuid(),
  user_id             uuid not null references public.profiles(id) on delete cascade,
  locale              text not null,
  kind                text not null,
  body                text not null,
  downside            text,
  rating              int,
  device              text,
  source              text not null,
  auth_provider       text,             -- 작성 순간 로그인 수단(google·kakao·email) — [G]/[카카오] 표시
  spot_share_id       text references public.spot_shares(id) on delete set null,
  has_usage           boolean not null default false,  -- 작성 순간 트레이너 기록 유무(표시용 · 문턱 아님)
  is_event_entry      boolean not null default false,  -- 지금은 늘 false (설계 §5-4)
  status              text not null default 'public',
  hidden_reason       text,
  review_requested_at timestamptz,      -- 숨김 뒤 «다시 검토 요청» 1회
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  constraint solver_feedback_locale   check (locale in ('ko','en','ja','es','pt','de','zh','zh-hant','fr','id','ms','hi','tr','vi')),
  constraint solver_feedback_kind     check (kind in ('review','question')),
  constraint solver_feedback_body_len check (char_length(body) between 2 and 600),
  constraint solver_feedback_body_link check (body !~* '(https?://|www\.|\.(com|net|org|kr|io|me|xyz|gg|ly|link|site|shop|top)([/?#]|$|[^a-z0-9]))'),
  constraint solver_feedback_down_len check (downside is null or char_length(downside) <= 200),
  constraint solver_feedback_down_link check (downside is null or downside !~* '(https?://|www\.|\.(com|net|org|kr|io|me|xyz|gg|ly|link|site|shop|top)([/?#]|$|[^a-z0-9]))'),
  constraint solver_feedback_rating   check (rating is null or rating between 1 and 5),
  constraint solver_feedback_device   check (device is null or device in ('phone','tablet','desktop')),
  constraint solver_feedback_source   check (source in ('app','landing')),
  constraint solver_feedback_provider check (auth_provider is null or auth_provider in ('google','kakao','email')),
  constraint solver_feedback_status   check (status in ('public','hidden')),
  constraint solver_feedback_hidden_reason check (hidden_reason is null or hidden_reason in ('link','abuse','ad')),
  constraint solver_feedback_hidden_pair  check ((status = 'hidden') = (hidden_reason is not null)),
  constraint solver_feedback_question_no_extra check (kind = 'review' or (rating is null and downside is null))
);
create unique index if not exists solver_feedback_one_review on public.solver_feedback(user_id, locale) where kind = 'review';
create index if not exists solver_feedback_list_idx on public.solver_feedback(locale, status, created_at desc);
create index if not exists solver_feedback_user_idx on public.solver_feedback(user_id, created_at desc);

-- 2-a) 로케일 14개(tr·vi 2026-10-09 추가) — 이미 만든 DB에도 적용한다(여러 번 실행해도 안전).
--      위 create table 은 테이블이 있으면 건너뛰므로 제약은 여기서 다시 건다. 목록은 위 check 와 같아야 한다.
alter table public.solver_feedback drop constraint if exists solver_feedback_locale;
alter table public.solver_feedback add constraint solver_feedback_locale
  check (locale in ('ko','en','ja','es','pt','de','zh','zh-hant','fr','id','ms','hi','tr','vi'));

-- 3) 운영자 답글 — 관리자 화면에서만 쓴다(후기 1개에 답글 1개)
create table if not exists public.solver_feedback_replies (
  id          uuid primary key default gen_random_uuid(),
  feedback_id uuid not null unique references public.solver_feedback(id) on delete cascade,
  body        text not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint solver_feedback_replies_len check (char_length(body) between 1 and 1000)
);

-- 4) 도움됐어요 — 로그인 1인 1표
create table if not exists public.solver_feedback_helpful (
  feedback_id uuid not null references public.solver_feedback(id) on delete cascade,
  user_id     uuid not null references public.profiles(id) on delete cascade,
  created_at  timestamptz not null default now(),
  primary key (feedback_id, user_id)
);

-- 5) 후기 프로필 — 프로필 이미지 선택·숨김 · 이름 확인 시각.
--    🔴 profiles 에 넣지 않는다: profiles 는 본인 UPDATE 정책이 있어(커뮤니티 닉네임 변경) 숨김 플래그를 본인이 풀 수 있다.
--    avatar_kind: null = 이니셜 원형(기본) · 'char' = 사이트 캐릭터 · 'upload' = 올린 이미지 · 'provider' = 구글·카카오 사진 가져오기
create table if not exists public.solver_review_profiles (
  user_id               uuid primary key references public.profiles(id) on delete cascade,
  avatar_kind           text,
  avatar_char           text,
  avatar_path           text,           -- Storage 'review-avatars' 버킷 안 경로(upload 일 때)
  avatar_hidden_reason  text,           -- 숨기면 이니셜 원형으로 돌아간다(후기 글은 그대로)
  nickname_confirmed_at timestamptz,    -- «○○ 으로 남깁니다» 확인 — 첫 후기 때
  updated_at            timestamptz not null default now(),
  constraint solver_review_profiles_kind check (avatar_kind is null or avatar_kind in ('char','upload','provider')),
  constraint solver_review_profiles_char check (avatar_char is null or avatar_char ~ '^[a-z0-9-]{1,32}$'),
  constraint solver_review_profiles_hidden_reason check (avatar_hidden_reason is null or avatar_hidden_reason in ('link','abuse','ad'))
);

-- 5-A) 저장 기록 — 속도 제한은 «행 수»가 아니라 «저장 횟수»로 센다(솔버 S-037 ①, 2026-10-05).
--    후기는 1인 1언어 1행이라 updated_at 행 수로는 같은 후기를 계속 고쳐도 1에서 멈췄다.
--    서버가 저장에 성공할 때마다 1행 남기고, 10분 창 안의 행 수를 센다. 하루 지난 행은 저장 때 그 사람 몫만 지운다.
create table if not exists public.solver_feedback_saves (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references public.profiles(id) on delete cascade,
  kind       text not null,
  created_at timestamptz not null default now(),
  constraint solver_feedback_saves_kind check (kind in ('review','question'))
);
create index if not exists solver_feedback_saves_user_idx on public.solver_feedback_saves(user_id, kind, created_at);

alter table public.spot_shares             enable row level security;
alter table public.solver_feedback         enable row level security;
alter table public.solver_feedback_replies enable row level security;
alter table public.solver_feedback_helpful enable row level security;
alter table public.solver_review_profiles  enable row level security;
alter table public.solver_feedback_saves   enable row level security;
-- 정책 없음(의도) — 위 🔴 접근 원칙 참조.

-- 6) 공개 목록 뷰 — status='public' 만 · user_id 비노출(이름·사진·로그인 수단·가입 시기만).
--    🔴 뷰는 만든 사람 권한으로 돌아 RLS를 건너뛴다 → anon·authenticated 권한을 회수한다(서버 service role만 읽는다).
create or replace view public.solver_feedback_public as
select
  f.id, f.locale, f.kind, f.body, f.downside, f.rating, f.device, f.auth_provider, f.has_usage,
  f.created_at, f.updated_at,
  p.nickname,
  p.created_at as joined_at,
  case when rp.avatar_hidden_reason is null then rp.avatar_kind end as avatar_kind,
  case when rp.avatar_hidden_reason is null then rp.avatar_char end as avatar_char,
  case when rp.avatar_hidden_reason is null then rp.avatar_path end as avatar_path,
  case when rp.avatar_hidden_reason is null and rp.avatar_kind = 'provider' then p.avatar_url end as provider_avatar_url,
  r.body as reply_body,
  r.created_at as reply_at,
  (select count(*) from public.solver_feedback_helpful h where h.feedback_id = f.id)::int as helpful_count
from public.solver_feedback f
join public.profiles p on p.id = f.user_id
left join public.solver_review_profiles rp on rp.user_id = f.user_id
left join public.solver_feedback_replies r on r.feedback_id = f.id
where f.status = 'public';

revoke all on public.solver_feedback_public from anon, authenticated;

-- 7) 트레이너 기록 시각 고정 — «솔버 사용 기록 있음» 표시(문턱 아님)의 근거(MB-159 통지 1 · 솔버 S-035 «앱은 created_at 을 안 넣는다» 확인).
--    지금은 default now() 뿐이라 insert 때 값을 넣으면 덮어쓸 수 있다 → 서버 시각으로 강제한다.
create or replace function public.trainer_attempts_force_created_at()
returns trigger language plpgsql as $$
begin
  new.created_at := now();
  return new;
end;
$$;
drop trigger if exists trainer_attempts_force_created_at on public.trainer_attempts;
create trigger trainer_attempts_force_created_at
  before insert on public.trainer_attempts
  for each row execute function public.trainer_attempts_force_created_at();

-- 8) 프로필 이미지 올리기 — 공개 버킷. 쓰기는 서버(service role)만 한다:
--    서버가 정사각 256px webp 로 다시 인코딩(EXIF·위치정보 제거)한 파일만 올라간다.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('review-avatars', 'review-avatars', true, 262144, array['image/webp'])
on conflict (id) do nothing;
