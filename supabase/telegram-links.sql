-- ============================================================
-- 텔레그램 연결 (2026-10-15 · ④ 초안) — 회원 ↔ 텔레그램 숫자 ID(chat_id) 연결 · 봇 Start 딥링크
-- 설계 = docs/telegram-login-plan.md «④ 설계 수정안»
--
-- ▶ 실행: Supabase 대시보드 → SQL Editor → 이 파일 전체를 붙여넣고 RUN (여러 번 실행해도 안전)
--    🔴 ⑤ 코드 배포보다 먼저 실행한다. 지금 실행해도 사이트는 이 테이블을 아직 안 쓴다(무해).
--
-- 🔴 접근 원칙 = participation.sql · solver-reviews.sql 과 같다: RLS on + 정책 0개.
--    읽기·쓰기는 전부 본체 서버 코드가 service role로 한다(①토큰 발급 라우트 ②봇 웹훅 라우트).
--    chat_id·텔레그램 이름이 브라우저로 새지 않는다.
--
-- 흐름: 로그인 회원이 «텔레그램 연결» → 서버가 1회용 토큰을 만들어 해시만 저장(15분)
--      → t.me/HoldemMasterBot?start=<토큰> → 회원이 Start → 봇 웹훅이 «/start <토큰>»을 받아
--      telegram_link_consume()로 그 회원 행에 chat_id를 채운다(OIDC sub와 무관 · 로그인 수단 무관).
-- 근거(공식 원문 10-15 열람): start 파라미터 «A-Z, a-z, 0-9, _ and - are allowed» · «up to 64 characters»
--      (core.telegram.org/bots/features) · 웹훅 헤더 «X-Telegram-Bot-Api-Secret-Token» · my_chat_member
--      «For private chats, this update is received only when the bot is blocked or unblocked by the user.»
--      (core.telegram.org/bots/api)
-- ============================================================

create table if not exists public.telegram_links (
  user_id               uuid primary key references public.profiles(id) on delete cascade,
  chat_id               bigint unique,          -- 텔레그램 user id = 1:1 채팅 id. Start 뒤에만 채워진다
  tg_username           text,                   -- @아이디(없을 수 있음) — 문의 중계 표시용
  tg_name               text,                   -- first_name + last_name — 문의 중계 표시용
  link_token_hash       text unique,            -- 1회용 토큰의 sha256(hex). 원문 토큰은 저장하지 않는다
  link_token_expires_at timestamptz,
  linked_at             timestamptz,            -- 마지막 Start 연결 시각
  bot_blocked_at        timestamptz,            -- my_chat_member kicked 또는 발송 403 → 발송 대상에서 빠짐
  marketing_consent_at  timestamptz,            -- ⑥ 광고성 수신 동의 시각(null = 미동의). 문구는 U3 원문 뒤 확정
  night_consent_at      timestamptz,            -- ⑥ 야간(21~08시) 광고성 수신 별도 동의
  consent_withdrawn_at  timestamptz,            -- ⑥ 마지막 철회 시각(기록용)
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now(),
  constraint telegram_links_chat_positive check (chat_id is null or chat_id > 0),
  constraint telegram_links_token_hex     check (link_token_hash is null or link_token_hash ~ '^[0-9a-f]{64}$'),
  constraint telegram_links_token_pair    check ((link_token_hash is null) = (link_token_expires_at is null)),
  constraint telegram_links_username_len  check (tg_username is null or char_length(tg_username) <= 64),
  constraint telegram_links_name_len      check (tg_name is null or char_length(tg_name) <= 128),
  constraint telegram_links_night_needs_marketing check (night_consent_at is null or marketing_consent_at is not null)
);

alter table public.telegram_links enable row level security;
-- 정책 없음(의도). anon·authenticated는 읽기·쓰기 모두 막힌다.

-- 토큰 소비 — 웹훅 라우트가 service role로 rpc 호출한다. 성공하면 user_id, 토큰이 없거나 만료면 null.
-- 같은 텔레그램 계정이 다른 회원에 붙어 있었으면 그쪽 연결을 끊고 새 회원으로 옮긴다(마지막 Start가 이긴다).
-- 토큰 행은 for update로 잠가 같은 토큰 두 번 소비(웹훅 재전송)를 막는다 — 두 번째는 null.
create or replace function public.telegram_link_consume(
  p_token_hash text,
  p_chat_id    bigint,
  p_username   text,
  p_name       text
) returns uuid
language plpgsql
security definer set search_path = public
as $$
declare
  v_user uuid;
begin
  select user_id into v_user
    from public.telegram_links
   where link_token_hash = p_token_hash
     and link_token_expires_at > now()
   for update;
  if v_user is null then
    return null;
  end if;

  update public.telegram_links
     set chat_id = null, tg_username = null, tg_name = null, linked_at = null, updated_at = now()
   where chat_id = p_chat_id and user_id <> v_user;

  update public.telegram_links
     set chat_id               = p_chat_id,
         tg_username           = left(p_username, 64),
         tg_name               = left(p_name, 128),
         linked_at             = now(),
         bot_blocked_at        = null,
         link_token_hash       = null,
         link_token_expires_at = null,
         updated_at            = now()
   where user_id = v_user;

  return v_user;
end;
$$;

revoke all on function public.telegram_link_consume(text, bigint, text, text) from public, anon, authenticated;
grant execute on function public.telegram_link_consume(text, bigint, text, text) to service_role;

-- ============================================================
-- ✅ 실행 뒤 확인 (SQL Editor에서 아래 세 줄을 따로 RUN)
--   select count(*) from public.telegram_links;                                   -- 0
--   select relrowsecurity from pg_class where relname = 'telegram_links';          -- true
--   select count(*) from pg_policies where tablename = 'telegram_links';           -- 0
-- ============================================================
