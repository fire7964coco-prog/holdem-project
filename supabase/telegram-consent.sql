-- ============================================================
-- 텔레그램 ⑥ 수신 동의 (2026-10-16) — telegram_links.sql 위에 덧붙인다
-- 설계 = docs/telegram-login-plan.md «⑥ 수신 동의»
--
-- ▶ 실행: Supabase 대시보드 → SQL Editor → 이 파일 전체를 붙여넣고 RUN (여러 번 실행해도 안전)
--    🔴 ⑥ 코드 배포보다 먼저 실행한다. 지금 실행해도 사이트는 새 열을 아직 안 쓴다(무해).
--
-- 바뀌는 것
--  ① consent_tz 열 — 동의할 때 브라우저 시간대(IANA 이름, 예: Asia/Tokyo). ⑦ 발송이 «회원 현지 시간 08~21시»만
--     보내려고 쓴다(사장님 10-16: 야간 동의를 따로 받지 않고 야간엔 안 보낸다 · 나라 표시 없음).
--  ② telegram_link_consume() — 수신 동의는 «그 텔레그램 계정»에 대한 동의다. 그래서
--     ⓐ 같은 텔레그램이 다른 회원으로 옮겨 가면 옛 회원 행의 동의도 지운다
--     ⓑ 이 회원이 «다른» 텔레그램 계정으로 다시 연결하면 동의를 지운다(같은 계정 재연결은 유지 — 해제 때 이미 지워진다)
-- ============================================================

alter table public.telegram_links add column if not exists consent_tz text;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'telegram_links_consent_tz_len') then
    alter table public.telegram_links
      add constraint telegram_links_consent_tz_len check (consent_tz is null or char_length(consent_tz) <= 64);
  end if;
end $$;

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
  v_now  timestamptz := now();
begin
  select user_id into v_user
    from public.telegram_links
   where link_token_hash = p_token_hash
     and link_token_expires_at > v_now
   for update;
  if v_user is null then
    return null;
  end if;

  -- ⓐ 다른 회원에 붙어 있던 같은 텔레그램 — 연결과 함께 그 회원의 수신 동의도 지운다
  update public.telegram_links
     set chat_id = null, tg_username = null, tg_name = null, linked_at = null,
         consent_withdrawn_at = case when marketing_consent_at is not null then v_now else consent_withdrawn_at end,
         marketing_consent_at = null, night_consent_at = null, consent_tz = null,
         updated_at = v_now
   where chat_id = p_chat_id and user_id <> v_user;

  -- ⓑ 이 회원이 다른 텔레그램 계정으로 바꾸면 동의를 지운다
  update public.telegram_links
     set consent_withdrawn_at = case when marketing_consent_at is not null then v_now else consent_withdrawn_at end,
         marketing_consent_at = null, night_consent_at = null, consent_tz = null
   where user_id = v_user and chat_id is not null and chat_id <> p_chat_id;

  update public.telegram_links
     set chat_id               = p_chat_id,
         tg_username           = left(p_username, 64),
         tg_name               = left(p_name, 128),
         linked_at             = v_now,
         bot_blocked_at        = null,
         link_token_hash       = null,
         link_token_expires_at = null,
         updated_at            = v_now
   where user_id = v_user;

  return v_user;
end;
$$;

revoke all on function public.telegram_link_consume(text, bigint, text, text) from public, anon, authenticated;
grant execute on function public.telegram_link_consume(text, bigint, text, text) to service_role;

-- ============================================================
-- ✅ 실행 뒤 확인 (SQL Editor에서 아래 두 줄을 따로 RUN)
--   select column_name from information_schema.columns where table_name = 'telegram_links' and column_name = 'consent_tz';  -- consent_tz 1행
--   select relrowsecurity from pg_class where relname = 'telegram_links';                                                  -- true
-- ============================================================
