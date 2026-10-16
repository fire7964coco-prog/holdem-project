import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  FAQ_KEYS, BOT_LOCALES, botApi, botLocale, botText, faqAnswer, faqKeyboard, hashLinkToken, isLinkToken, webhookSecretOk,
  type BotLocale, type FaqKey,
} from "@/lib/telegram-bot";

/**
 * 텔레그램 봇 웹훅 (2026-10-16 · ⑤) · 설계 = docs/telegram-login-plan.md «④ 설계 수정안»
 *
 * - 인증 = 헤더 `X-Telegram-Bot-Api-Secret-Token`(setWebhook의 secret_token) — 값은 Vercel env `TELEGRAM_WEBHOOK_SECRET`.
 * - 미들웨어 matcher(`/`·`/login`·`/post`·`/auth`)에 `/api`가 없다 → 이 라우트는 세션 미들웨어를 타지 않는다.
 * - 1:1 채팅(private)만 처리. 그룹·채널 업데이트는 무시하고 200.
 * - `/start <토큰>` → telegram_link_consume(rpc · service role) → 그 회원 행에 chat_id. 토큰 원문은 로그에 남기지 않는다.
 * - `my_chat_member` = 원문 «For private chats, this update is received only when the bot is blocked or unblocked by the user.»
 *   차단 = new_chat_member.status "kicked"(ChatMemberBanned) → bot_blocked_at · 해제 = "member" → null.
 * - 버튼 FAQ = callback_data `faq:<key>:<locale>`. 버튼 밖 메시지 = «커뮤니티에 남겨 주세요»(문의 중계는 끔 · 사장님 10-15).
 * - 처리 중 실패해도 200을 돌려준다 — 실패 응답이면 텔레그램이 같은 업데이트를 계속 다시 보낸다.
 */

export const dynamic = "force-dynamic";

type TgUser = { id: number; is_bot?: boolean; first_name?: string; last_name?: string; username?: string; language_code?: string };
type TgChat = { id: number; type: string };
type TgUpdate = {
  update_id: number;
  message?: { message_id: number; from?: TgUser; chat: TgChat; text?: string };
  callback_query?: { id: string; from: TgUser; data?: string; message?: { chat: TgChat } };
  my_chat_member?: { chat: TgChat; from: TgUser; new_chat_member: { status: string } };
};

const ok = () => NextResponse.json({ ok: true });

async function markBlocked(chatId: number, blocked: boolean) {
  const db = createAdminClient();
  if (!db) return;
  await db
    .from("telegram_links")
    .update({ bot_blocked_at: blocked ? new Date().toISOString() : null, updated_at: new Date().toISOString() })
    .eq("chat_id", chatId);
}

// 버튼 묶음은 인사말·«버튼 밖 메시지» 답에만 붙인다(10-16 사장님 시험 — 답마다 붙이면 대화창이 버튼으로 덮인다)
async function send(chatId: number, text: string, locale: BotLocale, keyboard = false) {
  const r = await botApi("sendMessage", { chat_id: chatId, text, ...(keyboard ? { reply_markup: faqKeyboard(locale) } : {}), link_preview_options: { is_disabled: true } });
  // 403 = 봇이 차단됨(발송 실패 규칙 · 계획 단계표 ⑦)
  if (r.status === 403) await markBlocked(chatId, true);
}

async function onStart(msg: NonNullable<TgUpdate["message"]>, payload: string, locale: BotLocale) {
  const t = botText(locale);
  const chatId = msg.chat.id;
  if (!payload) return send(chatId, t.welcome, locale, true);
  if (!isLinkToken(payload)) return send(chatId, t.linkFailed, locale);
  const db = createAdminClient();
  if (!db) return send(chatId, t.linkFailed, locale);
  const from = msg.from;
  const name = [from?.first_name, from?.last_name].filter(Boolean).join(" ").trim() || null;
  const { data, error } = await db.rpc("telegram_link_consume", {
    p_token_hash: hashLinkToken(payload),
    p_chat_id: chatId,
    p_username: from?.username ?? null,
    p_name: name,
  });
  return send(chatId, !error && data ? t.linked : t.linkFailed, locale);
}

export async function POST(req: Request) {
  if (!webhookSecretOk(req.headers.get("x-telegram-bot-api-secret-token"))) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  let update: TgUpdate;
  try {
    update = await req.json();
  } catch {
    return ok();
  }

  try {
    if (update.my_chat_member) {
      const m = update.my_chat_member;
      if (m.chat.type === "private") {
        if (m.new_chat_member.status === "kicked") await markBlocked(m.chat.id, true);
        else if (m.new_chat_member.status === "member") await markBlocked(m.chat.id, false);
      }
      return ok();
    }

    if (update.callback_query) {
      const q = update.callback_query;
      await botApi("answerCallbackQuery", { callback_query_id: q.id });
      const [kind, key, loc] = (q.data ?? "").split(":");
      const chat = q.message?.chat;
      if (kind === "faq" && chat?.type === "private" && (FAQ_KEYS as readonly string[]).includes(key)) {
        const locale = (BOT_LOCALES as readonly string[]).includes(loc) ? (loc as BotLocale) : botLocale(q.from.language_code);
        await send(chat.id, faqAnswer(locale, key as FaqKey), locale);
      }
      return ok();
    }

    const msg = update.message;
    if (msg && msg.chat.type === "private" && !msg.from?.is_bot) {
      const locale = botLocale(msg.from?.language_code);
      const text = (msg.text ?? "").trim();
      const start = /^\/start(?:@\w+)?(?:\s+(\S+))?$/.exec(text);
      if (start) await onStart(msg, start[1] ?? "", locale);
      else if (/^\/help(?:@\w+)?$/.test(text)) await send(msg.chat.id, botText(locale).welcome, locale, true);
      else await send(msg.chat.id, botText(locale).unknown, locale, true);
    }
  } catch {
    // 위 주석: 실패해도 200
  }
  return ok();
}
