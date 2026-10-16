"use client";

/**
 * «텔레그램 알림» 카드 — 커뮤니티 프로필 탭(로그인 상태) · 2026-10-16 ⑤
 * 설계 = docs/telegram-login-plan.md «④ 설계 수정안» · 서버 = app/api/telegram/link/route.ts
 *
 * - 연결은 로그인 수단과 무관하다(Google·카카오·이메일·텔레그램 누구나).
 * - «연결» → 서버가 1회용 링크(15분)를 만든다 → «텔레그램 열기»를 눌러 봇에서 START.
 *   팝업 차단을 피하려고 링크는 자동으로 열지 않고 버튼으로 보여 준다. 돌아오면(창 포커스) 상태를 다시 읽는다.
 * - «텔레그램 연결»·«연결 해제» 낱말은 봇 문구(lib/telegram-bot.ts)와 축어 일치 — 바꾸면 양쪽을 같이.
 */

import { useCallback, useEffect, useState } from "react";
import { BG, BORDER, CARD, INK, MUTED, RED } from "./post-card";

type Labels = {
  title: string; sub: string; connect: string; opening: string; open: string; hint: string;
  linked: string; blocked: string; disconnect: string; confirm: string; error: string;
};

const LABELS: Record<string, Labels> = {
  ko: {
    title: "✈️ 텔레그램 알림", sub: "연결해 두면 이벤트 당첨 같은 계정 알림을 텔레그램으로 받아요.",
    connect: "텔레그램 연결", opening: "링크 만드는 중…", open: "텔레그램 열기 →",
    hint: "텔레그램에서 START를 누르면 연결돼요(링크 15분 유효). 끝나면 이 화면으로 돌아오세요.",
    linked: "연결됨", blocked: "봇이 차단돼 있어 알림이 가지 않아요. 텔레그램에서 차단을 풀면 다시 받아요.",
    disconnect: "연결 해제", confirm: "텔레그램 연결을 해제할까요?", error: "지금은 처리하지 못했어요. 잠시 뒤 다시 해 주세요.",
  },
  en: {
    title: "✈️ Telegram alerts", sub: "Link Telegram to get account alerts, such as event wins, in Telegram.",
    connect: "Link Telegram", opening: "Creating link…", open: "Open Telegram →",
    hint: "Tap START in Telegram to finish (the link is valid for 15 minutes), then come back to this page.",
    linked: "Linked", blocked: "The bot is blocked, so alerts can't reach you. Unblock it in Telegram to get them again.",
    disconnect: "Unlink", confirm: "Unlink Telegram?", error: "Couldn't do that right now. Please try again shortly.",
  },
  ja: {
    title: "✈️ Telegram通知", sub: "連携しておくと、イベント当選などのアカウント通知をTelegramで受け取れます。",
    connect: "Telegramと連携", opening: "リンクを作成中…", open: "Telegramを開く →",
    hint: "TelegramでSTARTを押すと連携されます（リンクの有効期限は15分）。終わったらこの画面に戻ってください。",
    linked: "連携済み", blocked: "ボットがブロックされているため通知が届きません。Telegramでブロックを解除すると再び届きます。",
    disconnect: "連携を解除", confirm: "Telegramとの連携を解除しますか？", error: "今は処理できませんでした。しばらくしてからもう一度お試しください。",
  },
  es: {
    title: "✈️ Avisos por Telegram", sub: "Vincula Telegram para recibir ahí avisos de tu cuenta, como premios de eventos.",
    connect: "Vincular Telegram", opening: "Creando enlace…", open: "Abrir Telegram →",
    hint: "Toca START en Telegram para terminar (el enlace vale 15 minutos) y luego vuelve a esta página.",
    linked: "Vinculado", blocked: "El bot está bloqueado y los avisos no te llegan. Desbloquéalo en Telegram para volver a recibirlos.",
    disconnect: "Desvincular", confirm: "¿Desvincular Telegram?", error: "No se pudo hacer ahora. Inténtalo de nuevo en un momento.",
  },
  pt: {
    title: "✈️ Avisos no Telegram", sub: "Vincule o Telegram para receber lá avisos da sua conta, como prêmios de eventos.",
    connect: "Vincular Telegram", opening: "Criando link…", open: "Abrir o Telegram →",
    hint: "Toque em START no Telegram para concluir (o link vale 15 minutos) e depois volte a esta página.",
    linked: "Vinculado", blocked: "O bot está bloqueado, então os avisos não chegam. Desbloqueie no Telegram para voltar a receber.",
    disconnect: "Desvincular", confirm: "Desvincular o Telegram?", error: "Não deu para fazer isso agora. Tente de novo daqui a pouco.",
  },
  de: {
    title: "✈️ Telegram-Benachrichtigungen", sub: "Verknüpf Telegram, um Kontohinweise wie Event-Gewinne dort zu bekommen.",
    connect: "Telegram verknüpfen", opening: "Link wird erstellt…", open: "Telegram öffnen →",
    hint: "Tipp in Telegram auf START, um abzuschließen (der Link gilt 15 Minuten), und komm dann auf diese Seite zurück.",
    linked: "Verknüpft", blocked: "Der Bot ist blockiert, deshalb kommen keine Hinweise an. Heb die Blockierung in Telegram auf, um sie wieder zu bekommen.",
    disconnect: "Verknüpfung lösen", confirm: "Telegram-Verknüpfung lösen?", error: "Das hat gerade nicht geklappt. Versuch es gleich noch einmal.",
  },
  zh: {
    title: "✈️ Telegram 通知", sub: "绑定后，活动中奖等账号通知会发到 Telegram。",
    connect: "绑定 Telegram", opening: "正在生成链接…", open: "打开 Telegram →",
    hint: "在 Telegram 里点 START 即完成绑定（链接 15 分钟内有效），完成后回到此页面。",
    linked: "已绑定", blocked: "机器人已被屏蔽，通知无法送达。在 Telegram 里解除屏蔽后即可再次接收。",
    disconnect: "解除绑定", confirm: "要解除 Telegram 绑定吗？", error: "暂时无法处理，请稍后再试。",
  },
  "zh-hant": {
    title: "✈️ Telegram 通知", sub: "連結後，活動中獎等帳號通知會傳到 Telegram。",
    connect: "連結 Telegram", opening: "正在產生連結…", open: "開啟 Telegram →",
    hint: "在 Telegram 裡點 START 即完成連結（連結 15 分鐘內有效），完成後回到此頁面。",
    linked: "已連結", blocked: "機器人已被封鎖，通知無法送達。在 Telegram 裡解除封鎖後即可再次接收。",
    disconnect: "解除連結", confirm: "要解除 Telegram 連結嗎？", error: "暫時無法處理，請稍後再試。",
  },
  fr: {
    title: "✈️ Alertes Telegram", sub: "Lie Telegram pour y recevoir les alertes de ton compte, comme les gains d'événements.",
    connect: "Lier Telegram", opening: "Création du lien…", open: "Ouvrir Telegram →",
    hint: "Appuie sur START dans Telegram pour terminer (le lien est valable 15 minutes), puis reviens sur cette page.",
    linked: "Lié", blocked: "Le bot est bloqué, les alertes ne peuvent pas t'arriver. Débloque-le dans Telegram pour les recevoir à nouveau.",
    disconnect: "Délier", confirm: "Délier Telegram ?", error: "Impossible pour le moment. Réessaie dans un instant.",
  },
  id: {
    title: "✈️ Notifikasi Telegram", sub: "Tautkan Telegram untuk menerima notifikasi akun, seperti kemenangan event, di Telegram.",
    connect: "Tautkan Telegram", opening: "Membuat tautan…", open: "Buka Telegram →",
    hint: "Ketuk START di Telegram untuk menyelesaikan (tautan berlaku 15 menit), lalu kembali ke halaman ini.",
    linked: "Tertaut", blocked: "Bot sedang diblokir, jadi notifikasi tidak sampai. Buka blokirnya di Telegram agar notifikasi masuk lagi.",
    disconnect: "Lepas tautan", confirm: "Lepas tautan Telegram?", error: "Belum bisa diproses sekarang. Coba lagi sebentar lagi.",
  },
  ms: {
    title: "✈️ Pemberitahuan Telegram", sub: "Pautkan Telegram untuk menerima pemberitahuan akaun, seperti kemenangan acara, di Telegram.",
    connect: "Pautkan Telegram", opening: "Mencipta pautan…", open: "Buka Telegram →",
    hint: "Tekan START dalam Telegram untuk selesai (pautan sah 15 minit), kemudian kembali ke halaman ini.",
    linked: "Dipautkan", blocked: "Bot disekat, jadi pemberitahuan tidak sampai. Nyahsekat dalam Telegram untuk menerimanya semula.",
    disconnect: "Nyahpaut", confirm: "Nyahpaut Telegram?", error: "Tidak dapat diproses sekarang. Cuba lagi sebentar nanti.",
  },
  hi: {
    title: "✈️ Telegram सूचनाएँ", sub: "Telegram जोड़ने पर इवेंट जीत जैसी अकाउंट सूचनाएँ Telegram में मिलेंगी।",
    connect: "Telegram जोड़ें", opening: "लिंक बन रहा है…", open: "Telegram खोलें →",
    hint: "पूरा करने के लिए Telegram में START दबाएँ (लिंक 15 मिनट तक मान्य), फिर इस पेज पर लौट आएँ।",
    linked: "जुड़ा हुआ", blocked: "बॉट ब्लॉक है, इसलिए सूचनाएँ नहीं पहुँचतीं। Telegram में अनब्लॉक करें तो फिर से मिलेंगी।",
    disconnect: "कनेक्शन हटाएँ", confirm: "Telegram कनेक्शन हटाएँ?", error: "अभी यह नहीं हो पाया। थोड़ी देर बाद फिर कोशिश करें।",
  },
  vi: {
    title: "✈️ Thông báo Telegram", sub: "Liên kết Telegram để nhận thông báo tài khoản, như trúng thưởng sự kiện, trên Telegram.",
    connect: "Liên kết Telegram", opening: "Đang tạo liên kết…", open: "Mở Telegram →",
    hint: "Bấm START trong Telegram để hoàn tất (liên kết có hiệu lực 15 phút), rồi quay lại trang này.",
    linked: "Đã liên kết", blocked: "Bot đang bị chặn nên thông báo không đến được. Bỏ chặn trong Telegram để nhận lại.",
    disconnect: "Hủy liên kết", confirm: "Hủy liên kết Telegram?", error: "Chưa xử lý được lúc này. Hãy thử lại sau ít phút.",
  },
  tr: {
    title: "✈️ Telegram bildirimleri", sub: "Telegram'ı bağlarsan etkinlik kazancı gibi hesap bildirimlerini Telegram'dan alırsın.",
    connect: "Telegram'ı bağla", opening: "Bağlantı oluşturuluyor…", open: "Telegram'ı aç →",
    hint: "Bitirmek için Telegram'da START'a dokun (bağlantı 15 dakika geçerli), sonra bu sayfaya dön.",
    linked: "Bağlı", blocked: "Bot engellendiği için bildirimler ulaşmıyor. Telegram'da engeli kaldırırsan yeniden alırsın.",
    disconnect: "Bağlantıyı kaldır", confirm: "Telegram bağlantısı kaldırılsın mı?", error: "Şu an yapılamadı. Biraz sonra tekrar dene.",
  },
  ar: {
    title: "✈️ إشعارات Telegram", sub: "اربط Telegram لتصلك إشعارات الحساب، مثل الفوز في الفعاليات، على Telegram.",
    connect: "ربط Telegram", opening: "جارٍ إنشاء الرابط…", open: "افتح Telegram ←",
    hint: "اضغط START في Telegram لإتمام الربط (الرابط صالح 15 دقيقة)، ثم عُد إلى هذه الصفحة.",
    linked: "مرتبط", blocked: "البوت محظور، لذا لا تصلك الإشعارات. ألغِ الحظر في Telegram لتصلك مجددًا.",
    disconnect: "إلغاء الربط", confirm: "هل تريد إلغاء ربط Telegram؟", error: "تعذّر ذلك الآن. حاول مرة أخرى بعد قليل.",
  },
  ru: {
    title: "✈️ Уведомления в Telegram", sub: "Привяжи Telegram, чтобы получать там уведомления по аккаунту, например о выигрышах в событиях.",
    connect: "Привязать Telegram", opening: "Создаём ссылку…", open: "Открыть Telegram →",
    hint: "Нажми START в Telegram, чтобы завершить (ссылка действует 15 минут), и вернись на эту страницу.",
    linked: "Привязан", blocked: "Бот заблокирован, поэтому уведомления не доходят. Разблокируй его в Telegram, чтобы снова их получать.",
    disconnect: "Отвязать", confirm: "Отвязать Telegram?", error: "Сейчас не получилось. Попробуй ещё раз чуть позже.",
  },
};

type Status = { linked: boolean; username: string | null; blocked: boolean };

export default function TelegramConnect({ locale }: { locale: string }) {
  const L = LABELS[locale] ?? LABELS.en;
  const [status, setStatus] = useState<Status | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [err, setErr] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/telegram/link", { cache: "no-store" });
      const j = await res.json();
      if (!j.ok) { setUnavailable(true); return; }
      setUnavailable(false);
      setStatus({ linked: !!j.linked, username: j.username ?? null, blocked: !!j.blocked });
      if (j.linked) setUrl(null);
    } catch {
      setUnavailable(true);
    }
  }, []);

  useEffect(() => {
    load();
    // 텔레그램에서 START 누르고 돌아오면 다시 읽는다
    const onFocus = () => { if (document.visibilityState === "visible") load(); };
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onFocus);
    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onFocus);
    };
  }, [load]);

  async function connect() {
    if (busy) return;
    setBusy(true);
    setErr(false);
    try {
      const res = await fetch("/api/telegram/link", { method: "POST" });
      const j = await res.json();
      if (j.ok && typeof j.url === "string") setUrl(j.url);
      else setErr(true);
    } catch {
      setErr(true);
    } finally {
      setBusy(false);
    }
  }

  async function disconnect() {
    if (busy || !window.confirm(L.confirm)) return;
    setBusy(true);
    setErr(false);
    try {
      const res = await fetch("/api/telegram/link", { method: "DELETE" });
      const j = await res.json();
      if (j.ok) await load();
      else setErr(true);
    } catch {
      setErr(true);
    } finally {
      setBusy(false);
    }
  }

  // 표가 없거나(서버 env 미설정 등) 읽기 실패면 카드를 숨긴다 — 프로필 화면의 다른 부분을 막지 않는다
  if (unavailable || !status) return null;

  const FONT = "var(--font-inter),sans-serif";
  return (
    <section className="rounded p-4" style={{ background: CARD, border: `1px solid ${BORDER}` }} aria-labelledby="tg-connect-title">
      <h3 id="tg-connect-title" className="text-sm font-semibold mb-1" style={{ color: INK, fontFamily: FONT }}>{L.title}</h3>
      <p className="text-xs mb-3 break-keep" style={{ color: MUTED, fontFamily: FONT }}>{L.sub}</p>
      {status.linked ? (
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold" style={{ color: INK, fontFamily: FONT }}>
              ✅ {L.linked}{status.username ? <span dir="ltr" className="font-normal" style={{ color: MUTED }}> · @{status.username}</span> : null}
            </p>
            <button type="button" onClick={disconnect} disabled={busy} className="min-h-11 px-2 text-xs underline underline-offset-4 disabled:opacity-60" style={{ color: MUTED, fontFamily: FONT }}>
              {L.disconnect}
            </button>
          </div>
          {status.blocked && <p className="text-xs break-keep" style={{ color: RED, fontFamily: FONT }}>{L.blocked}</p>}
        </div>
      ) : url ? (
        <div className="space-y-2">
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded py-2.5 text-sm font-semibold" style={{ background: "#1673B1", color: "#fff", fontFamily: FONT }}>
            {L.open}
          </a>
          <p className="text-xs break-keep" style={{ color: MUTED, fontFamily: FONT }}>{L.hint}</p>
        </div>
      ) : (
        <button type="button" onClick={connect} disabled={busy} className="w-full rounded py-2.5 text-sm font-semibold disabled:opacity-60" style={{ background: INK, color: BG, fontFamily: FONT }}>
          {busy ? L.opening : L.connect}
        </button>
      )}
      {err && <p role="alert" className="mt-2 text-xs" style={{ color: RED, fontFamily: FONT }}>{L.error}</p>}
    </section>
  );
}
