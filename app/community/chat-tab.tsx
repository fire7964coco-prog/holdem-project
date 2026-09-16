"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { BG, BORDER, CARD, FLAG, GOLD, TEXT_PRIMARY, TEXT_BODY, TEXT_SECONDARY, TEXT_MUTED, SURFACE } from "./post-card";
import type { CurrentUser } from "./community-client";
import { loginHref } from "@/lib/auth-navigation";
import { mergeChatMessages, type ChatMessage } from "@/lib/chat-messages";

const ROOM = "global";
const MAX_LEN = 200;
const LOAD_COUNT = 50;

const CHAT_LABELS = {
  ko: {
    placeholder: "채팅 메시지 입력...",
    send: "전송",
    loginCta: "로그인 후 채팅 참여",
    loginBtn: "로그인 →",
    empty: "아직 메시지가 없습니다. 첫 채팅을 남겨보세요!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  en: {
    placeholder: "Type a message...",
    send: "Send",
    loginCta: "Log in to join the chat",
    loginBtn: "Log in →",
    empty: "No messages yet. Be the first to chat!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  ja: {
    placeholder: "メッセージを入力...",
    send: "送信",
    loginCta: "チャットに参加するにはログイン",
    loginBtn: "ログイン →",
    empty: "まだメッセージはありません。最初のチャットを送ってみよう！",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  zh: {
    placeholder: "输入聊天消息...",
    send: "发送",
    loginCta: "登录后参与聊天",
    loginBtn: "登录 →",
    empty: "还没有消息，来发第一条吧！",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  es: {
    placeholder: "Escribe un mensaje...",
    send: "Enviar",
    loginCta: "Inicia sesión para chatear",
    loginBtn: "Iniciar sesión →",
    empty: "Aún no hay mensajes. ¡Sé el primero!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  de: {
    placeholder: "Nachricht eingeben...",
    send: "Senden",
    loginCta: "Anmelden, um mitzumachen",
    loginBtn: "Anmelden →",
    empty: "Noch keine Nachrichten. Schreibe die erste!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  pt: {
    placeholder: "Digite uma mensagem...",
    send: "Enviar",
    loginCta: "Faça login para entrar no chat",
    loginBtn: "Entrar →",
    empty: "Sem mensagens ainda. Seja o primeiro!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  id: {
    placeholder: "Tulis pesan...",
    send: "Kirim",
    loginCta: "Login untuk bergabung ke chat",
    loginBtn: "Masuk →",
    empty: "Belum ada pesan. Jadilah yang pertama!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  ms: {
    placeholder: "Tulis mesej...",
    send: "Hantar",
    loginCta: "Log masuk untuk sertai chat",
    loginBtn: "Log masuk →",
    empty: "Tiada mesej lagi. Jadilah yang pertama!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  vi: {
    placeholder: "Nhập tin nhắn...",
    send: "Gửi",
    loginCta: "Đăng nhập để tham gia chat",
    loginBtn: "Đăng nhập →",
    empty: "Chưa có tin nhắn. Hãy là người đầu tiên!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  tr: {
    placeholder: "Mesaj yaz...",
    send: "Gönder",
    loginCta: "Sohbete katılmak için giriş yap",
    loginBtn: "Giriş yap →",
    empty: "Henüz mesaj yok. İlk mesajı sen gönder!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  hi: {
    placeholder: "संदेश लिखें...",
    send: "भेजें",
    loginCta: "चैट में शामिल होने के लिए लॉगिन करें",
    loginBtn: "लॉगिन →",
    empty: "अभी कोई संदेश नहीं। पहला संदेश भेजें!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
  ar: {
    placeholder: "اكتب رسالة...",
    send: "إرسال",
    loginCta: "سجّل الدخول للمشاركة في الدردشة",
    loginBtn: "تسجيل الدخول →",
    empty: "لا رسائل بعد. كن أول من يتحدث!",
    live: "LIVE",
    tools: ["🧮 Calculator", "🎯 Quiz", "📊 Hand Chart", "📈 Win Rate", "📖 Glossary"],
  },
} as const;

type ChatLangKey = keyof typeof CHAT_LABELS;

function getChatL(lang: string) {
  return CHAT_LABELS[
    (lang as ChatLangKey) in CHAT_LABELS ? (lang as ChatLangKey) : "en"
  ];
}

export default function ChatTab({
  currentUser,
  lang,
}: {
  currentUser: CurrentUser | null;
  lang: string;
}) {
  const L = getChatL(lang);
  // 도구 페이지는 언어별로 존재하는 것만 노출 (KO=전체, EN=번역된 것만, 나머지=없음)
  // → 번역 안 된 페이지로 이탈하며 로케일이 깨지는 문제 방지. 도구 영어판 추가 시 여기 확장.
  const KO_TOOLS = ["/calculator", "/quiz", "/hand-chart", "/win-rate-quiz", "/glossary"];
  const toolLinks: { href: string; i: number }[] =
    lang === "ko"
      ? KO_TOOLS.map((href, i) => ({ href, i }))
      : lang === "en"
        ? [{ href: "/en/calculator", i: 0 }, { href: "/en/quiz", i: 1 }, { href: "/en/hand-chart", i: 2 }, { href: "/en/glossary", i: 4 }]
        : [];
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const [hasOlder, setHasOlder] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [unread, setUnread] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const shouldScrollRef = useRef(true);
  const historyScrollRef = useRef<{ height: number; top: number } | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const supabaseRef = useRef(createClient());

  // 초기 메시지 로드
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(false);
    (async () => {
      try {
      const { data, error } = await supabaseRef.current
        .from("chat_messages")
        .select("id, user_id, nickname, language, content, created_at")
        .eq("room", ROOM)
        .order("created_at", { ascending: false })
        .order("id", { ascending: false })
        .limit(LOAD_COUNT + 1);
      if (cancelled) return;
      setLoadError(!!error);
      if (data) {
        setHasOlder(data.length > LOAD_COUNT);
        setMessages((previous) => mergeChatMessages(previous, data.slice(0, LOAD_COUNT)));
      }
      } catch { if (!cancelled) setLoadError(true); }
      finally { if (!cancelled) setLoading(false); }
    })();
    return () => { cancelled = true; };
  }, [loadAttempt]);

  // Supabase Realtime 구독
  useEffect(() => {
    const supabase = supabaseRef.current;
    const channelName = `chat-room-${ROOM}`;

    // 동일 이름의 기존 채널이 남아있으면 먼저 제거
    supabase.getChannels().forEach((ch) => {
      if (ch.topic === `realtime:${channelName}`) {
        supabase.removeChannel(ch);
      }
    });

    const channel = supabase
      .channel(channelName)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
          filter: `room=eq.${ROOM}`,
        },
        (payload) => {
          const scroller = scrollerRef.current;
          shouldScrollRef.current = !scroller || scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight < 80;
          if (!shouldScrollRef.current) setUnread(true);
          setMessages((prev) => mergeChatMessages(prev, [payload.new as ChatMessage]));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // 과거 대화를 읽는 동안에는 위치를 보존하고, 최신 위치에 있을 때만 따라간다.
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (historyScrollRef.current) {
      scroller.scrollTop = historyScrollRef.current.top + scroller.scrollHeight - historyScrollRef.current.height;
      historyScrollRef.current = null;
    } else if (shouldScrollRef.current) {
      scroller.scrollTop = scroller.scrollHeight;
    }
  }, [messages]);

  async function loadOlder() {
    const oldest = messages[0];
    if (!oldest || loadingOlder) return;
    setLoadingOlder(true);
    setLoadError(false);
    try {
    const { data, error } = await supabaseRef.current.from("chat_messages")
      .select("id, user_id, nickname, language, content, created_at")
      .eq("room", ROOM)
      .or(`created_at.lt.${oldest.created_at},and(created_at.eq.${oldest.created_at},id.lt.${oldest.id})`)
      .order("created_at", { ascending: false })
      .order("id", { ascending: false })
      .limit(LOAD_COUNT + 1);
    setLoadError(!!error);
    if (data) {
      const scroller = scrollerRef.current;
      if (scroller) historyScrollRef.current = { height: scroller.scrollHeight, top: scroller.scrollTop };
      setHasOlder(data.length > LOAD_COUNT);
      setMessages((previous) => mergeChatMessages(previous, data.slice(0, LOAD_COUNT)));
    }
    } catch { setLoadError(true); }
    finally { setLoadingOlder(false); }
  }

  async function handleSend() {
    const content = input.trim().slice(0, MAX_LEN);
    if (!content || !currentUser || sending) return;
    setSending(true);
    setSendError(null);

    try {
    const { data, error } = await supabaseRef.current.from("chat_messages").insert({
      room: ROOM,
      user_id: currentUser.id,
      nickname: currentUser.nickname,
      language: currentUser.language,
      content,
    }).select("id, user_id, nickname, language, content, created_at").single();

    if (error) setSendError(lang === "ko" ? "전송하지 못했습니다. 입력 내용을 확인하고 다시 전송해주세요." : "Message not sent. Your draft is saved; please try again.");
    else {
      setInput("");
      shouldScrollRef.current = true;
      setUnread(false);
      if (data) setMessages((previous) => mergeChatMessages(previous, [data]));
    }
    } catch {
      setSendError(lang === "ko" ? "연결을 확인하고 다시 전송해주세요. 입력 내용은 보존됩니다." : "Check your connection and retry. Your draft is saved.");
    } finally { setSending(false); }
  }

  return (
    <div
      className="flex flex-col"
      style={{ height: "calc(100dvh - 180px)", minHeight: 320 }}
    >
      {/* 채팅 헤더 */}
      <div
        className="flex items-center gap-2 px-3 py-2 flex-shrink-0"
        style={{ borderBottom: `1px solid ${BORDER}` }}
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ background: "#22c55e" }}
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ background: "#22c55e" }}
          />
        </span>
        <span
          className="text-[11px] font-black tracking-widest"
          style={{ color: "#22c55e" }}
        >
          {L.live}
        </span>
        <span className="text-[11px] ml-auto font-medium" style={{ color: TEXT_MUTED }}>
          🌍 Global · {messages.length}
        </span>
      </div>

      {/* 툴 배너 — 언어별로 존재하는 도구만 (toolLinks). 번역 안 된 페이지로의 이탈 방지 */}
      {toolLinks.length > 0 && (
        <div
          className="flex gap-2 px-3 py-2 overflow-x-auto flex-shrink-0"
          style={{ borderBottom: `1px solid ${BORDER}`, scrollbarWidth: "none" }}
        >
          {toolLinks.map(({ href, i }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold flex-shrink-0 transition-opacity active:opacity-70 whitespace-nowrap"
              style={{ background: "rgba(var(--gold-dark-rgb),0.1)", color: GOLD, border: "1px solid rgba(var(--gold-dark-rgb),0.2)" }}
            >
              {L.tools[i]}
            </Link>
          ))}
        </div>
      )}

      {/* 메시지 목록 */}
      <div
        ref={scrollerRef}
        className="flex-1 overflow-y-auto px-3 py-3 space-y-2"
        onScroll={(event) => {
          const element = event.currentTarget;
          if (element.scrollHeight - element.scrollTop - element.clientHeight < 80) setUnread(false);
        }}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(var(--gold-dark-rgb),0.15) transparent",
        }}
      >
        {hasOlder && <button type="button" onClick={loadOlder} disabled={loadingOlder} className="block min-h-11 w-full rounded-lg border border-border text-sm font-semibold disabled:opacity-50">{loadingOlder ? "…" : lang === "ko" ? "이전 메시지 더 보기" : "Load older messages"}</button>}
        {loadError && <div role="alert" className="text-center text-sm text-destructive"><p>{lang === "ko" ? "메시지를 불러오지 못했습니다." : "Messages could not be loaded."}</p><button type="button" className="min-h-11 underline" onClick={() => hasOlder ? loadOlder() : setLoadAttempt((count) => count + 1)}>{lang === "ko" ? "다시 시도" : "Retry"}</button></div>}
        {loading && <p role="status" className="py-4 text-center text-sm text-muted-foreground">{lang === "ko" ? "최근 메시지 불러오는 중…" : "Loading recent messages…"}</p>}
        {!loading && !loadError && messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-sm text-center px-4 font-medium" style={{ color: TEXT_SECONDARY }}>
            {L.empty}
          </div>
        ) : (
          messages.map((m) => {
            const isMe = m.user_id === currentUser?.id;
            return (
              <div
                key={m.id}
                className={`flex flex-col gap-0.5 ${isMe ? "items-end" : "items-start"}`}
              >
                {/* 닉네임 + 국기 */}
                {!isMe && (
                  <div className="flex items-center gap-1 px-1">
                    <span className="text-[11px]">{FLAG[m.language] ?? "🌐"}</span>
                    <span className="text-[11px] font-bold" style={{ color: TEXT_MUTED }}>
                      {m.nickname}
                    </span>
                  </div>
                )}
                {/* 말풍선 */}
                <div
                  className="max-w-[75%] px-3.5 py-2 text-sm leading-relaxed break-words"
                  style={isMe ? {
                    background: "linear-gradient(135deg,rgb(var(--gold-dark-rgb)),#f0d060)",
                    color: "#0b1120",
                    borderRadius: "18px 18px 4px 18px",
                    fontWeight: 600,
                  } : {
                    background: CARD,
                    color: TEXT_BODY,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "18px 18px 18px 4px",
                  }}
                >
                  {m.content}
                </div>
              </div>
            );
          })
        )}
        <div ref={bottomRef} />
      </div>

      {unread && <button type="button" className="min-h-11 text-sm font-semibold text-primary" onClick={() => { if (scrollerRef.current) scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight; setUnread(false); }}>{lang === "ko" ? "새 메시지 보기 ↓" : "New messages ↓"}</button>}

      {/* 입력 영역 */}
      <div
        className="flex-shrink-0 px-3 py-2.5"
        style={{ borderTop: `1px solid ${BORDER}` }}
      >
        {currentUser ? (
          <>
            <div className="flex gap-2 items-center">
              <input
                aria-label={L.placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={L.placeholder}
                maxLength={MAX_LEN}
                disabled={sending}
                className="min-w-0 flex-1 px-3 py-2 rounded-xl text-sm"
                style={{
                  background: SURFACE,
                  color: TEXT_PRIMARY,
                  border: `1px solid ${BORDER}`,
                }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || sending}
                className="px-4 py-2 rounded-xl text-sm font-bold flex-shrink-0 disabled:opacity-40 transition-opacity"
                style={{
                  background: "linear-gradient(135deg,rgb(var(--gold-dark-rgb)),#f0d060)",
                  color: TEXT_PRIMARY,
                }}
              >
                {L.send}
              </button>
            </div>
            {sendError && (
              <p
                role="alert"
                className="text-[11px] mt-1"
                style={{ color: "hsl(var(--destructive))" }}
              >
                {sendError}
              </p>
            )}
          </>
        ) : (
          <div
            className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl"
            style={{ background: CARD, border: `1px solid ${BORDER}` }}
          >
            <span className="text-sm font-medium" style={{ color: TEXT_SECONDARY }}>
              {L.loginCta}
            </span>
            <Link
              href={loginHref(`${lang === "ko" ? "/" : `/${lang}`}?tab=chat`)}
              className="text-sm font-bold px-3 py-1.5 rounded-lg flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,rgb(var(--gold-dark-rgb)),#f0d060)",
                color: TEXT_PRIMARY,
              }}
            >
              {L.loginBtn}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
