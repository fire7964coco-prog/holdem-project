"use client";

/**
 * «텔레그램 알림» 카드 — 커뮤니티 프로필 탭(로그인 상태) · 2026-10-16 ⑤
 * 설계 = docs/telegram-login-plan.md «④ 설계 수정안» · 서버 = app/api/telegram/link/route.ts
 *
 * - 연결은 로그인 수단과 무관하다(Google·카카오·이메일·텔레그램 누구나).
 * - «연결» → 서버가 1회용 링크(15분)를 만든다 → «텔레그램 열기»를 눌러 봇에서 START.
 *   팝업 차단을 피하려고 링크는 자동으로 열지 않고 버튼으로 보여 준다. 돌아오면(창 포커스) 상태를 다시 읽는다.
 * - 같은 상태를 사이드바 카드(TelegramPromo)·모바일 띠(TelegramBanner)도 쓴다 — 요청은 한 번(모듈 캐시).
 * - «텔레그램 연결»·«연결 해제» 낱말은 봇 문구(lib/telegram-bot.ts)와 축어 일치 — 바꾸면 양쪽을 같이.
 */

import { useEffect, useState } from "react";
import { loginHref } from "@/lib/auth-navigation";
import { BORDER, CARD, INK, MUTED, RED } from "./post-card";

type Labels = {
  title: string; sub: string; connect: string; opening: string; open: string; hint: string;
  linked: string; blocked: string; disconnect: string; confirm: string; error: string;
  /** 사이드바·띠 배너(10-16 사장님 «눈에 띄는 곳에도») */
  loginToLink: string; banner: string; close: string;
};

const LABELS: Record<string, Labels> = {
  ko: {
    title: "✈️ 텔레그램 알림", sub: "연결해 두면 이벤트 당첨 같은 계정 알림을 텔레그램으로 받을 수 있어요(알림 기능 준비 중).",
    connect: "텔레그램 연결", opening: "링크 만드는 중…", open: "텔레그램 열기 →",
    hint: "텔레그램에서 «시작(START)»을 누르면 연결돼요(링크 15분 유효). 끝나면 이 화면으로 돌아오세요.",
    linked: "연결됨", blocked: "봇이 차단돼 있어 알림이 가지 않아요. 텔레그램에서 차단을 풀면 다시 받아요.",
    disconnect: "연결 해제", confirm: "텔레그램 연결을 해제할까요?", error: "지금은 처리하지 못했어요. 잠시 뒤 다시 해 주세요.",
    loginToLink: "로그인하고 연결하기 →", banner: "✈️ 텔레그램 연결하고 알림 받기 →", close: "닫기",
  },
  en: {
    title: "✈️ Telegram alerts", sub: "Link Telegram to get account alerts, such as event wins, in Telegram (alerts coming soon).",
    connect: "Link Telegram", opening: "Creating link…", open: "Open Telegram →",
    hint: "Tap «START» in Telegram to finish (the link is valid for 15 minutes), then come back to this page.",
    linked: "Linked", blocked: "The bot is blocked, so alerts can't reach you. Unblock it in Telegram to get them again.",
    disconnect: "Unlink", confirm: "Unlink Telegram?", error: "Couldn't do that right now. Please try again shortly.",
    loginToLink: "Log in to link →", banner: "✈️ Link Telegram to get alerts →", close: "Close",
  },
  ja: {
    title: "✈️ Telegram通知", sub: "連携しておくと、イベント当選などのアカウント通知をTelegramで受け取れるようになります（通知機能は準備中）。",
    connect: "Telegramと連携", opening: "リンクを作成中…", open: "Telegramを開く →",
    hint: "Telegramで「開始（START）」を押すと連携されます（リンクの有効期限は15分）。終わったらこの画面に戻ってください。",
    linked: "連携済み", blocked: "ボットがブロックされているため通知が届きません。Telegramでブロックを解除すると再び届きます。",
    disconnect: "連携を解除", confirm: "Telegramとの連携を解除しますか？", error: "今は処理できませんでした。しばらくしてからもう一度お試しください。",
    loginToLink: "ログインして連携 →", banner: "✈️ Telegramと連携して通知を受け取る →", close: "閉じる",
  },
  es: {
    title: "✈️ Avisos por Telegram", sub: "Vincula Telegram para recibir ahí avisos de tu cuenta, como premios de eventos (muy pronto).",
    connect: "Vincular Telegram", opening: "Creando enlace…", open: "Abrir Telegram →",
    hint: "Toca «INICIAR (START)» en Telegram para terminar (el enlace vale 15 minutos) y luego vuelve a esta página.",
    linked: "Vinculado", blocked: "El bot está bloqueado y los avisos no te llegan. Desbloquéalo en Telegram para volver a recibirlos.",
    disconnect: "Desvincular", confirm: "¿Desvincular Telegram?", error: "No se pudo hacer ahora. Inténtalo de nuevo en un momento.",
    loginToLink: "Inicia sesión para vincular →", banner: "✈️ Vincula Telegram y recibe avisos →", close: "Cerrar",
  },
  pt: {
    title: "✈️ Avisos no Telegram", sub: "Vincule o Telegram para receber lá avisos da sua conta, como prêmios de eventos (em breve).",
    connect: "Vincular Telegram", opening: "Criando link…", open: "Abrir o Telegram →",
    hint: "Toque em «INICIAR (START)» no Telegram para concluir (o link vale 15 minutos) e depois volte a esta página.",
    linked: "Vinculado", blocked: "O bot está bloqueado, então os avisos não chegam. Desbloqueie no Telegram para voltar a receber.",
    disconnect: "Desvincular", confirm: "Desvincular o Telegram?", error: "Não deu para fazer isso agora. Tente de novo daqui a pouco.",
    loginToLink: "Entre para vincular →", banner: "✈️ Vincule o Telegram e receba avisos →", close: "Fechar",
  },
  de: {
    title: "✈️ Telegram-Benachrichtigungen", sub: "Verknüpf Telegram, um dort Kontohinweise wie Event-Gewinne zu bekommen (bald verfügbar).",
    connect: "Telegram verknüpfen", opening: "Link wird erstellt…", open: "Telegram öffnen →",
    hint: "Tipp in Telegram auf «STARTEN (START)», um abzuschließen (der Link gilt 15 Minuten), und komm dann auf diese Seite zurück.",
    linked: "Verknüpft", blocked: "Der Bot ist blockiert, deshalb kommen keine Hinweise an. Heb die Blockierung in Telegram auf, um sie wieder zu bekommen.",
    disconnect: "Verknüpfung lösen", confirm: "Telegram-Verknüpfung lösen?", error: "Das hat gerade nicht geklappt. Versuch es gleich noch einmal.",
    loginToLink: "Zum Verknüpfen anmelden →", banner: "✈️ Telegram verknüpfen und Hinweise bekommen →", close: "Schließen",
  },
  zh: {
    title: "✈️ Telegram 通知", sub: "绑定后，就能在 Telegram 收到活动中奖等账号通知（通知功能准备中）。",
    connect: "绑定 Telegram", opening: "正在生成链接…", open: "打开 Telegram →",
    hint: "在 Telegram 里点「开始（START）」即完成绑定（链接 15 分钟内有效），完成后回到此页面。",
    linked: "已绑定", blocked: "机器人已被屏蔽，通知无法送达。在 Telegram 里解除屏蔽后即可再次接收。",
    disconnect: "解除绑定", confirm: "要解除 Telegram 绑定吗？", error: "暂时无法处理，请稍后再试。",
    loginToLink: "登录后绑定 →", banner: "✈️ 绑定 Telegram 接收通知 →", close: "关闭",
  },
  "zh-hant": {
    title: "✈️ Telegram 通知", sub: "連結後，就能在 Telegram 收到活動中獎等帳號通知（通知功能準備中）。",
    connect: "連結 Telegram", opening: "正在產生連結…", open: "開啟 Telegram →",
    hint: "在 Telegram 裡點「開始（START）」即完成連結（連結 15 分鐘內有效），完成後回到此頁面。",
    linked: "已連結", blocked: "機器人已被封鎖，通知無法送達。在 Telegram 裡解除封鎖後即可再次接收。",
    disconnect: "解除連結", confirm: "要解除 Telegram 連結嗎？", error: "暫時無法處理，請稍後再試。",
    loginToLink: "登入後連結 →", banner: "✈️ 連結 Telegram 接收通知 →", close: "關閉",
  },
  fr: {
    title: "✈️ Alertes Telegram", sub: "Lie Telegram pour y recevoir les alertes de ton compte, comme les gains d'événements (bientôt).",
    connect: "Lier Telegram", opening: "Création du lien…", open: "Ouvrir Telegram →",
    hint: "Appuie sur « DÉMARRER (START) » dans Telegram pour terminer (le lien est valable 15 minutes), puis reviens sur cette page.",
    linked: "Lié", blocked: "Le bot est bloqué, les alertes ne peuvent pas t'arriver. Débloque-le dans Telegram pour les recevoir à nouveau.",
    disconnect: "Délier", confirm: "Délier Telegram ?", error: "Impossible pour le moment. Réessaie dans un instant.",
    loginToLink: "Connecte-toi pour lier →", banner: "✈️ Lie Telegram pour recevoir les alertes →", close: "Fermer",
  },
  id: {
    title: "✈️ Notifikasi Telegram", sub: "Tautkan Telegram untuk menerima notifikasi akun, seperti kemenangan event, di Telegram (segera hadir).",
    connect: "Tautkan Telegram", opening: "Membuat tautan…", open: "Buka Telegram →",
    hint: "Ketuk «MULAI (START)» di Telegram untuk menyelesaikan (tautan berlaku 15 menit), lalu kembali ke halaman ini.",
    linked: "Tertaut", blocked: "Bot sedang diblokir, jadi notifikasi tidak sampai. Buka blokirnya di Telegram agar notifikasi masuk lagi.",
    disconnect: "Lepas tautan", confirm: "Lepas tautan Telegram?", error: "Belum bisa diproses sekarang. Coba lagi sebentar lagi.",
    loginToLink: "Masuk untuk menautkan →", banner: "✈️ Tautkan Telegram untuk dapat notifikasi →", close: "Tutup",
  },
  ms: {
    title: "✈️ Pemberitahuan Telegram", sub: "Pautkan Telegram untuk menerima pemberitahuan akaun, seperti kemenangan acara, di Telegram (akan datang).",
    connect: "Pautkan Telegram", opening: "Mencipta pautan…", open: "Buka Telegram →",
    hint: "Tekan «MULA (START)» dalam Telegram untuk selesai (pautan sah 15 minit), kemudian kembali ke halaman ini.",
    linked: "Dipautkan", blocked: "Bot disekat, jadi pemberitahuan tidak sampai. Nyahsekat dalam Telegram untuk menerimanya semula.",
    disconnect: "Nyahpaut", confirm: "Nyahpaut Telegram?", error: "Tidak dapat diproses sekarang. Cuba lagi sebentar nanti.",
    loginToLink: "Log masuk untuk memautkan →", banner: "✈️ Pautkan Telegram untuk terima pemberitahuan →", close: "Tutup",
  },
  hi: {
    title: "✈️ Telegram सूचनाएँ", sub: "Telegram जोड़ने पर इवेंट जीत जैसी अकाउंट सूचनाएँ Telegram में मिल सकेंगी (जल्द)।",
    connect: "Telegram जोड़ें", opening: "लिंक बन रहा है…", open: "Telegram खोलें →",
    hint: "पूरा करने के लिए Telegram में «START» दबाएँ (लिंक 15 मिनट तक मान्य), फिर इस पेज पर लौट आएँ।",
    linked: "जुड़ा हुआ", blocked: "बॉट ब्लॉक है, इसलिए सूचनाएँ नहीं पहुँचतीं। Telegram में अनब्लॉक करें तो फिर से मिलेंगी।",
    disconnect: "कनेक्शन हटाएँ", confirm: "Telegram कनेक्शन हटाएँ?", error: "अभी यह नहीं हो पाया। थोड़ी देर बाद फिर कोशिश करें।",
    loginToLink: "जोड़ने के लिए लॉग इन करें →", banner: "✈️ Telegram जोड़ें और सूचनाएँ पाएँ →", close: "बंद करें",
  },
  vi: {
    title: "✈️ Thông báo Telegram", sub: "Liên kết Telegram để nhận thông báo tài khoản, như trúng thưởng sự kiện, trên Telegram (sắp ra mắt).",
    connect: "Liên kết Telegram", opening: "Đang tạo liên kết…", open: "Mở Telegram →",
    hint: "Bấm «BẮT ĐẦU (START)» trong Telegram để hoàn tất (liên kết có hiệu lực 15 phút), rồi quay lại trang này.",
    linked: "Đã liên kết", blocked: "Bot đang bị chặn nên thông báo không đến được. Bỏ chặn trong Telegram để nhận lại.",
    disconnect: "Hủy liên kết", confirm: "Hủy liên kết Telegram?", error: "Chưa xử lý được lúc này. Hãy thử lại sau ít phút.",
    loginToLink: "Đăng nhập để liên kết →", banner: "✈️ Liên kết Telegram để nhận thông báo →", close: "Đóng",
  },
  tr: {
    title: "✈️ Telegram bildirimleri", sub: "Telegram'ı bağlarsan etkinlik kazancı gibi hesap bildirimlerini Telegram'dan alabileceksin (yakında).",
    connect: "Telegram'ı bağla", opening: "Bağlantı oluşturuluyor…", open: "Telegram'ı aç →",
    hint: "Bitirmek için Telegram'da «BAŞLAT (START)» düğmesine dokun (bağlantı 15 dakika geçerli), sonra bu sayfaya dön.",
    linked: "Bağlı", blocked: "Bot engellendiği için bildirimler ulaşmıyor. Telegram'da engeli kaldırırsan yeniden alırsın.",
    disconnect: "Bağlantıyı kaldır", confirm: "Telegram bağlantısı kaldırılsın mı?", error: "Şu an yapılamadı. Biraz sonra tekrar dene.",
    loginToLink: "Bağlamak için giriş yap →", banner: "✈️ Telegram'ı bağla, bildirim al →", close: "Kapat",
  },
  ar: {
    title: "✈️ إشعارات Telegram", sub: "اربط Telegram لتتمكن من تلقي إشعارات الحساب، مثل الفوز في الفعاليات، على Telegram (قريبًا).",
    connect: "ربط Telegram", opening: "جارٍ إنشاء الرابط…", open: "افتح Telegram ←",
    hint: "اضغط «بدء (START)» في Telegram لإتمام الربط (الرابط صالح 15 دقيقة)، ثم عُد إلى هذه الصفحة.",
    linked: "مرتبط", blocked: "البوت محظور، لذا لا تصلك الإشعارات. ألغِ الحظر في Telegram لتصلك مجددًا.",
    disconnect: "إلغاء الربط", confirm: "هل تريد إلغاء ربط Telegram؟", error: "تعذّر ذلك الآن. حاول مرة أخرى بعد قليل.",
    loginToLink: "سجّل الدخول للربط ←", banner: "✈️ اربط Telegram لتصلك الإشعارات ←", close: "إغلاق",
  },
  ru: {
    title: "✈️ Уведомления в Telegram", sub: "Привяжи Telegram, чтобы получать там уведомления по аккаунту, например о выигрышах в событиях (скоро).",
    connect: "Привязать Telegram", opening: "Создаём ссылку…", open: "Открыть Telegram →",
    hint: "Нажми «СТАРТ (START)» в Telegram, чтобы завершить (ссылка действует 15 минут), и вернись на эту страницу.",
    linked: "Привязан", blocked: "Бот заблокирован, поэтому уведомления не доходят. Разблокируй его в Telegram, чтобы снова их получать.",
    disconnect: "Отвязать", confirm: "Отвязать Telegram?", error: "Сейчас не получилось. Попробуй ещё раз чуть позже.",
    loginToLink: "Войди, чтобы привязать →", banner: "✈️ Привяжи Telegram и получай уведомления →", close: "Закрыть",
  },
};

type Status = { linked: boolean; username: string | null; blocked: boolean };
/** out = 로그인 안 함 · off = 서버 표·env 문제(전부 숨김) · in = 로그인 회원 */
type Fetched = { kind: "out" } | { kind: "off" } | { kind: "in"; s: Status };

// ── 상태 공유 — 한 화면에 카드·사이드바·띠가 같이 있어도 요청은 한 번, 바뀌면 모두 갱신 ──
let cached: Promise<Fetched> | null = null;
const subscribers = new Set<(f: Fetched) => void>();

async function readStatus(): Promise<Fetched> {
  try {
    const res = await fetch("/api/telegram/link", { cache: "no-store" });
    if (res.status === 401) return { kind: "out" };
    const j = await res.json();
    if (!j.ok) return { kind: "off" };
    return { kind: "in", s: { linked: !!j.linked, username: j.username ?? null, blocked: !!j.blocked } };
  } catch {
    return { kind: "off" };
  }
}

function refreshStatus(): Promise<Fetched> {
  cached = readStatus();
  cached.then((f) => subscribers.forEach((fn) => fn(f)));
  return cached;
}

function useTelegramStatus(): Fetched | null {
  const [f, setF] = useState<Fetched | null>(null);
  useEffect(() => {
    subscribers.add(setF);
    (cached ?? refreshStatus()).then(setF);
    // 텔레그램에서 START 누르고 돌아오면 다시 읽는다
    const onFocus = () => { if (document.visibilityState === "visible") refreshStatus(); };
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onFocus);
    return () => {
      subscribers.delete(setF);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onFocus);
    };
  }, []);
  return f;
}

const FONT = "var(--font-inter),sans-serif";

/** 연결 흐름(버튼 → 링크 → 연결됨/해제) — 프로필 카드와 사이드바 카드가 같이 쓴다 */
function ConnectBody({ L, status }: { L: Labels; status: Status }) {
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => { if (status.linked) setUrl(null); }, [status.linked]);
  // 15분(서버 TTL)이 지나면 죽은 링크를 치우고 «텔레그램 연결» 버튼으로 되돌린다
  useEffect(() => {
    if (!url) return;
    const t = window.setTimeout(() => setUrl(null), 15 * 60 * 1000);
    return () => window.clearTimeout(t);
  }, [url]);

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
      if (j.ok) await refreshStatus();
      else setErr(true);
    } catch {
      setErr(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
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
          {/* 링크가 만료됐거나 다시 받고 싶을 때 — 봇 «텔레그램 연결을 다시 눌러 주세요» 안내가 가리키는 버튼(MA-584 ①) */}
          <button type="button" onClick={connect} disabled={busy} className="min-h-11 px-1 text-xs underline underline-offset-4 disabled:opacity-60" style={{ color: MUTED, fontFamily: FONT }}>
            {busy ? L.opening : L.connect}
          </button>
        </div>
      ) : (
        <button type="button" onClick={connect} disabled={busy} className="w-full rounded py-2.5 text-sm font-semibold disabled:opacity-60" style={{ background: "#1673B1", color: "#fff", fontFamily: FONT }}>
          {busy ? L.opening : L.connect}
        </button>
      )}
      {err && <p role="alert" className="mt-2 text-xs" style={{ color: RED, fontFamily: FONT }}>{L.error}</p>}
    </>
  );
}

/** 프로필 탭 카드(로그인 상태에서만 렌더된다) — 연결 뒤에도 남아 «연결됨·연결 해제»를 보여 준다 */
export default function TelegramConnect({ locale }: { locale: string }) {
  const L = LABELS[locale] ?? LABELS.en;
  const f = useTelegramStatus();
  if (!f || f.kind !== "in") return null;
  return (
    <section className="rounded p-4" style={{ background: CARD, border: `1px solid ${BORDER}` }} aria-labelledby="tg-connect-title">
      <h3 id="tg-connect-title" className="text-sm font-semibold mb-1" style={{ color: INK, fontFamily: FONT }}>{L.title}</h3>
      <p className="text-xs mb-3 break-keep" style={{ color: MUTED, fontFamily: FONT }}>{L.sub}</p>
      <ConnectBody L={L} status={f.s} />
    </section>
  );
}

/**
 * PC 오른쪽 사이드바 카드(홈·허브) — 10-16 사장님 «눈에 띄는 곳에도».
 * 로그인 안 함 = 로그인 → 프로필 탭으로 돌아오게 · 로그인·미연결 = 그 자리에서 연결 · 연결됨 = 숨김.
 */
export function TelegramPromo({ locale, base }: { locale: string; base: string }) {
  const L = LABELS[locale] ?? LABELS.en;
  const f = useTelegramStatus();
  if (!f || f.kind === "off" || (f.kind === "in" && f.s.linked)) return null;
  return (
    <section className="rounded p-4" style={{ background: CARD, border: `1px solid ${BORDER}` }} aria-labelledby="tg-promo-title">
      <h3 id="tg-promo-title" className="text-sm font-semibold mb-1" style={{ color: INK, fontFamily: FONT }}>{L.title}</h3>
      <p className="text-xs mb-3 break-keep" style={{ color: MUTED, fontFamily: FONT }}>{L.sub}</p>
      {f.kind === "out" ? (
        <a href={loginHref(`${base}/?tab=profile`)} className="flex w-full items-center justify-center rounded py-2.5 text-sm font-semibold" style={{ background: "#1673B1", color: "#fff", fontFamily: FONT }}>
          {L.loginToLink}
        </a>
      ) : (
        <ConnectBody L={L} status={f.s} />
      )}
    </section>
  );
}

const BANNER_KEY = "tgBannerClosed";

/**
 * 모바일 피드 맨 위 띠 — 10-16 사장님. 누르면 로그인 회원은 프로필 탭(카드가 맨 위), 아니면 로그인 화면.
 * × = 이 기기에서 다시 안 보임(localStorage — 막혀 있으면 이번 화면에서만 닫힘). 연결됨이면 숨김.
 */
export function TelegramBanner({ locale, base, onOpenProfile }: { locale: string; base: string; onOpenProfile: () => void }) {
  const L = LABELS[locale] ?? LABELS.en;
  const f = useTelegramStatus();
  const [closed, setClosed] = useState(true);
  useEffect(() => {
    try { setClosed(localStorage.getItem(BANNER_KEY) === "1"); } catch { setClosed(false); }
  }, []);
  if (closed || !f || f.kind === "off" || (f.kind === "in" && f.s.linked)) return null;
  const close = () => {
    setClosed(true);
    try { localStorage.setItem(BANNER_KEY, "1"); } catch { /* 이번 화면만 */ }
  };
  const cls = "flex-1 min-h-11 flex items-center px-3 text-[13px] font-semibold break-keep";
  return (
    <div className="mx-4 mt-3 flex items-center rounded" style={{ background: "#1673B1", color: "#fff", fontFamily: FONT }}>
      {f.kind === "out"
        ? <a href={loginHref(`${base}/?tab=profile`)} className={cls}>{L.banner}</a>
        : <button type="button" onClick={onOpenProfile} className={`${cls} text-start`}>{L.banner}</button>}
      <button type="button" onClick={close} aria-label={L.close} className="min-h-11 min-w-11 flex items-center justify-center text-lg leading-none opacity-80 hover:opacity-100">×</button>
    </div>
  );
}
