"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { BG, BORDER, CARD, FLAG, GOLD } from "./post-card";
import type { CurrentUser } from "./community-client";

interface ChatMessage {
  id: string;
  user_id: string;
  nickname: string;
  language: string;
  content: string;
  created_at: string;
}

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
  },
  en: {
    placeholder: "Type a message...",
    send: "Send",
    loginCta: "Log in to join the chat",
    loginBtn: "Log in →",
    empty: "No messages yet. Be the first to chat!",
    live: "LIVE",
  },
  ja: {
    placeholder: "メッセージを入力...",
    send: "送信",
    loginCta: "チャットに参加するにはログイン",
    loginBtn: "ログイン →",
    empty: "まだメッセージはありません。最初のチャットを送ってみよう！",
    live: "LIVE",
  },
  zh: {
    placeholder: "输入聊天消息...",
    send: "发送",
    loginCta: "登录后参与聊天",
    loginBtn: "登录 →",
    empty: "还没有消息，来发第一条吧！",
    live: "LIVE",
  },
  es: {
    placeholder: "Escribe un mensaje...",
    send: "Enviar",
    loginCta: "Inicia sesión para chatear",
    loginBtn: "Iniciar sesión →",
    empty: "Aún no hay mensajes. ¡Sé el primero!",
    live: "LIVE",
  },
  de: {
    placeholder: "Nachricht eingeben...",
    send: "Senden",
    loginCta: "Anmelden, um mitzumachen",
    loginBtn: "Anmelden →",
    empty: "Noch keine Nachrichten. Schreibe die erste!",
    live: "LIVE",
  },
  pt: {
    placeholder: "Digite uma mensagem...",
    send: "Enviar",
    loginCta: "Faça login para entrar no chat",
    loginBtn: "Entrar →",
    empty: "Sem mensagens ainda. Seja o primeiro!",
    live: "LIVE",
  },
  id: {
    placeholder: "Tulis pesan...",
    send: "Kirim",
    loginCta: "Login untuk bergabung ke chat",
    loginBtn: "Masuk →",
    empty: "Belum ada pesan. Jadilah yang pertama!",
    live: "LIVE",
  },
  ms: {
    placeholder: "Tulis mesej...",
    send: "Hantar",
    loginCta: "Log masuk untuk sertai chat",
    loginBtn: "Log masuk →",
    empty: "Tiada mesej lagi. Jadilah yang pertama!",
    live: "LIVE",
  },
  vi: {
    placeholder: "Nhập tin nhắn...",
    send: "Gửi",
    loginCta: "Đăng nhập để tham gia chat",
    loginBtn: "Đăng nhập →",
    empty: "Chưa có tin nhắn. Hãy là người đầu tiên!",
    live: "LIVE",
  },
  tr: {
    placeholder: "Mesaj yaz...",
    send: "Gönder",
    loginCta: "Sohbete katılmak için giriş yap",
    loginBtn: "Giriş yap →",
    empty: "Henüz mesaj yok. İlk mesajı sen gönder!",
    live: "LIVE",
  },
  hi: {
    placeholder: "संदेश लिखें...",
    send: "भेजें",
    loginCta: "चैट में शामिल होने के लिए लॉगिन करें",
    loginBtn: "लॉगिन →",
    empty: "अभी कोई संदेश नहीं। पहला संदेश भेजें!",
    live: "LIVE",
  },
  ar: {
    placeholder: "اكتب رسالة...",
    send: "إرسال",
    loginCta: "سجّل الدخول للمشاركة في الدردشة",
    loginBtn: "تسجيل الدخول →",
    empty: "لا رسائل بعد. كن أول من يتحدث!",
    live: "LIVE",
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
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const supabaseRef = useRef(createClient());

  // 초기 메시지 로드
  useEffect(() => {
    (async () => {
      const { data } = await supabaseRef.current
        .from("chat_messages")
        .select("id, user_id, nickname, language, content, created_at")
        .eq("room", ROOM)
        .order("created_at", { ascending: true })
        .limit(LOAD_COUNT);
      if (data) setMessages(data);
    })();
  }, []);

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
          setMessages((prev) => [...prev, payload.new as ChatMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // 새 메시지 도착 시 자동 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    const content = input.trim().slice(0, MAX_LEN);
    if (!content || !currentUser || sending) return;
    setInput("");
    setSending(true);
    setSendError(null);

    const { error } = await supabaseRef.current.from("chat_messages").insert({
      room: ROOM,
      user_id: currentUser.id,
      nickname: currentUser.nickname,
      language: currentUser.language,
      content,
    });

    if (error) setSendError(error.message);
    setSending(false);
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
        <span
          className="text-[11px] ml-auto"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          🌍 Global · {messages.length}
        </span>
      </div>

      {/* 툴 배너 */}
      <div
        className="flex gap-2 px-3 py-2 overflow-x-auto flex-shrink-0"
        style={{ borderBottom: `1px solid ${BORDER}`, scrollbarWidth: "none" }}
      >
        {[
          { icon: "🧮", label: "계산기", href: "/calculator/" },
          { icon: "🎯", label: "퀴즈", href: "/quiz/" },
          { icon: "📊", label: "핸드차트", href: "/hand-chart/" },
          { icon: "🃏", label: "족보", href: "/ranking/" },
          { icon: "📖", label: "용어사전", href: "/glossary/" },
        ].map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold flex-shrink-0 transition-opacity active:opacity-70"
            style={{ background: "rgba(212,175,55,0.1)", color: GOLD, border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <span>{t.icon}</span>
            <span>{t.label}</span>
          </Link>
        ))}
      </div>

      {/* 메시지 목록 */}
      <div
        className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(212,175,55,0.15) transparent",
        }}
      >
        {messages.length === 0 ? (
          <div
            className="flex items-center justify-center h-full text-sm text-center px-4"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            {L.empty}
          </div>
        ) : (
          messages.map((m) => {
            const isMe = m.user_id === currentUser?.id;
            return (
              <div key={m.id} className="flex items-baseline gap-1.5">
                <span className="text-sm flex-shrink-0">
                  {FLAG[m.language] ?? "🌐"}
                </span>
                <span
                  className="text-[12px] font-bold flex-shrink-0"
                  style={{ color: isMe ? GOLD : "rgba(212,175,55,0.55)" }}
                >
                  {m.nickname}
                </span>
                <span
                  className="text-sm break-words min-w-0"
                  style={{ color: "#ddd5bb" }}
                >
                  {m.content}
                </span>
              </div>
            );
          })
        )}
        <div ref={bottomRef} />
      </div>

      {/* 입력 영역 */}
      <div
        className="flex-shrink-0 px-3 py-2.5"
        style={{ borderTop: `1px solid ${BORDER}` }}
      >
        {currentUser ? (
          <>
            <div className="flex gap-2 items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={L.placeholder}
                maxLength={MAX_LEN}
                disabled={sending}
                className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "#f0e8c8",
                  border: `1px solid ${BORDER}`,
                }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || sending}
                className="px-4 py-2 rounded-xl text-sm font-bold flex-shrink-0 disabled:opacity-40 transition-opacity"
                style={{
                  background: "linear-gradient(135deg,#d4af37,#f0d060)",
                  color: BG,
                }}
              >
                {L.send}
              </button>
            </div>
            {sendError && (
              <p
                className="text-[11px] mt-1"
                style={{ color: "#f87171" }}
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
            <span
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {L.loginCta}
            </span>
            <Link
              href="/login"
              className="text-sm font-bold px-3 py-1.5 rounded-lg flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#d4af37,#f0d060)",
                color: BG,
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
