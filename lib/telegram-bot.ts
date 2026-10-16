/**
 * 텔레그램 봇 — 서버 전용 (2026-10-16 · ⑤) · 설계 = docs/telegram-login-plan.md «④ 설계 수정안»
 *
 * - 봇 = @HoldemMasterBot. 토큰은 Vercel env `TELEGRAM_BOT_TOKEN`(Secret)에만 있다 — 이 파일을 클라이언트에서 import 하지 마라.
 * - 첫 가동(사장님 10-15) = 자동 알림 + 버튼 FAQ만. 문의 중계는 끈다 → 버튼 밖 메시지엔 «커뮤니티에 남겨 주세요».
 * - 연결 토큰 = 32바이트 base64url(43자). Start 파라미터 원문 «A-Z, a-z, 0-9, _ and - are allowed» · «up to 64 characters»
 *   (core.telegram.org/bots/features). DB에는 sha256(hex)만 저장한다(supabase/telegram-links.sql).
 * - 문구 언어 = 텔레그램 `from.language_code`(IETF 태그) → 로그인 화면과 같은 16개(ko + auth-i18n 15). 그 밖은 en.
 * - «연결 해제»·«텔레그램 연결»·«프로필» 낱말은 웹 카드(app/community/telegram-connect.tsx)·커뮤니티 탭 이름과 축어 일치.
 */
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

export const TELEGRAM_BOT_USERNAME = "HoldemMasterBot";
export const TELEGRAM_LINK_TTL_MS = 15 * 60 * 1000;
const SITE = "https://www.holdemmaster.com";
const CONTACT_EMAIL = "holdemmaster.kr@gmail.com";

export function newLinkToken(): { token: string; hash: string } {
  const token = randomBytes(32).toString("base64url");
  return { token, hash: hashLinkToken(token) };
}

export function hashLinkToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export function isLinkToken(value: string): boolean {
  return /^[A-Za-z0-9_-]{43}$/.test(value);
}

export function linkDeepUrl(token: string): string {
  return `https://t.me/${TELEGRAM_BOT_USERNAME}?start=${token}`;
}

/** 웹훅 헤더 `X-Telegram-Bot-Api-Secret-Token` — 길이가 달라도 상수 시간에 비교하려고 해시끼리 비교한다. */
export function webhookSecretOk(received: string | null): boolean {
  const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (!expected || !received) return false;
  const a = createHash("sha256").update(received).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

type InlineButton = { text: string; callback_data?: string; url?: string };

/** Bot API 호출. 실패해도 웹훅은 200으로 끝낸다(텔레그램은 실패 응답이면 같은 업데이트를 다시 보낸다). */
export async function botApi(method: string, body: Record<string, unknown>): Promise<{ ok: boolean; status: number }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return { ok: false, status: 0 };
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    return { ok: res.ok, status: res.status };
  } catch {
    return { ok: false, status: 0 };
  }
}

// ── 문구 ─────────────────────────────────────────────────────

export const BOT_LOCALES = ["ko", "en", "ja", "es", "pt", "de", "zh", "zh-hant", "fr", "id", "ms", "hi", "vi", "tr", "ar", "ru"] as const;
export type BotLocale = (typeof BOT_LOCALES)[number];

/** IETF 태그(ko · pt-br · zh-hans · zh-hant · zh-tw …) → 우리 로케일. */
export function botLocale(code: string | undefined | null): BotLocale {
  const c = (code ?? "").toLowerCase();
  if (c.startsWith("zh")) return /hant|tw|hk|mo/.test(c) ? "zh-hant" : "zh";
  const base = c.split(/[-_]/)[0];
  return (BOT_LOCALES as readonly string[]).includes(base) ? (base as BotLocale) : "en";
}

type BotText = {
  welcome: string; linked: string; linkFailed: string; alreadyLinked: string; unknown: string;
  bWhat: string; bLink: string; bStop: string; bAsk: string; bSite: string;
  aWhat: string; aLink: string; aStop: string; aAsk: string;
};

const T: Record<BotLocale, BotText> = {
  ko: {
    welcome: "안녕하세요, HoldemMaster 알림 봇이에요 🃏\n사이트 계정과 연결하면 이벤트 당첨 같은 알림을 여기로 보내 드려요. 궁금한 건 아래 버튼을 눌러 보세요.",
    linked: "✅ 계정이 연결됐어요. 이제 이 채팅으로 알림을 받아요.\n그만 받으려면 이 봇을 차단하거나, 사이트 «프로필»에서 «연결 해제»를 누르세요.",
    linkFailed: "⚠️ 연결 링크가 만료됐거나 이미 쓰였어요. 사이트 «프로필»에서 «텔레그램 연결»을 다시 눌러 주세요.",
    alreadyLinked: "✅ 이 텔레그램은 이미 계정에 연결돼 있어요. 따로 할 일은 없어요. (연결 링크는 한 번만 쓰여요.)",
    unknown: "이 봇은 질문에 직접 답하지 않아요. 아래 버튼을 보거나, 궁금한 점은 커뮤니티에 남겨 주세요.",
    bWhat: "이 봇은 뭐예요?", bLink: "계정 연결 방법", bStop: "알림 끄기", bAsk: "문의하기", bSite: "사이트 열기",
    aWhat: "HoldemMaster(holdemmaster.com) 공식 알림 봇이에요. 계정을 연결한 회원에게 이벤트 당첨 같은 계정 알림을 보내요. 대화형 상담 봇은 아니에요.",
    aLink: "사이트에 로그인 → 커뮤니티 «프로필» 탭 → «텔레그램 연결» → 열린 이 봇에서 «START»을 누르면 끝이에요. 링크는 15분 동안 유효해요.",
    aStop: "이 봇을 차단하면 더 이상 메시지를 보내지 않아요. 연결 자체를 지우려면 사이트 «프로필»에서 «연결 해제»를 누르세요.",
    aAsk: `이 봇은 문의에 답하지 않아요. 궁금한 점은 커뮤니티에 글로 남겨 주시고, 계정 문제는 ${CONTACT_EMAIL} 으로 메일 주세요.`,
  },
  en: {
    welcome: "Hi, this is the HoldemMaster notification bot 🃏\nLink your site account and we'll send alerts such as event wins here. Tap a button below if you have a question.",
    linked: "✅ Your account is linked. You'll get alerts in this chat from now on.\nTo stop, block this bot or tap «Unlink» under «Profile» on the site.",
    linkFailed: "⚠️ This link has expired or was already used. Tap «Link Telegram» under «Profile» on the site again.",
    alreadyLinked: "✅ This Telegram is already linked to your account. Nothing else to do. (Each link works only once.)",
    unknown: "This bot doesn't answer questions directly. Check the buttons below, or post your question in the community.",
    bWhat: "What is this bot?", bLink: "How to link", bStop: "Stop alerts", bAsk: "Contact", bSite: "Open the site",
    aWhat: "The official notification bot of HoldemMaster (holdemmaster.com). It sends account alerts, such as event wins, to members who linked their account. It isn't a chat support bot.",
    aLink: "Log in on the site → «Profile» tab in the community → «Link Telegram» → tap «START» in this bot. The link is valid for 15 minutes.",
    aStop: "Block this bot and it won't message you again. To remove the link itself, tap «Unlink» under «Profile» on the site.",
    aAsk: `This bot doesn't answer messages. Post questions in the community; for account issues, email ${CONTACT_EMAIL}.`,
  },
  ja: {
    welcome: "こんにちは、HoldemMaster のお知らせボットです 🃏\nサイトのアカウントと連携すると、イベント当選などのお知らせをここに送ります。分からないことは下のボタンをどうぞ。",
    linked: "✅ アカウントを連携しました。これからはこのチャットでお知らせを受け取れます。\n止めるにはこのボットをブロックするか、サイトの「プロフィール」で「連携を解除」を押してください。",
    linkFailed: "⚠️ リンクの有効期限が切れたか、すでに使われています。サイトの「プロフィール」で「Telegramと連携」をもう一度押してください。",
    alreadyLinked: "✅ このTelegramはすでにアカウントと連携済みです。ほかに操作は不要です。（連携リンクは1回しか使えません。）",
    unknown: "このボットは質問に直接答えません。下のボタンを見るか、分からないことはコミュニティに投稿してください。",
    bWhat: "このボットは？", bLink: "連携の方法", bStop: "お知らせを止める", bAsk: "お問い合わせ", bSite: "サイトを開く",
    aWhat: "HoldemMaster（holdemmaster.com）公式のお知らせボットです。アカウントを連携した会員に、イベント当選などのアカウント通知を送ります。チャットで相談できるボットではありません。",
    aLink: "サイトにログイン → コミュニティの「プロフィール」タブ → 「Telegramと連携」 → 開いたこのボットで「START」を押せば完了です。リンクの有効期限は15分です。",
    aStop: "このボットをブロックすると、以後メッセージは届きません。連携そのものを消すには、サイトの「プロフィール」で「連携を解除」を押してください。",
    aAsk: `このボットはお問い合わせに返信しません。質問はコミュニティに投稿し、アカウントの問題は ${CONTACT_EMAIL} までメールしてください。`,
  },
  es: {
    welcome: "Hola, soy el bot de avisos de HoldemMaster 🃏\nSi vinculas tu cuenta del sitio, te enviaremos aquí avisos como premios de eventos. Si tienes dudas, toca un botón de abajo.",
    linked: "✅ Tu cuenta quedó vinculada. Desde ahora recibirás los avisos en este chat.\nPara dejar de recibirlos, bloquea este bot o toca «Desvincular» en «Perfil» del sitio.",
    linkFailed: "⚠️ El enlace caducó o ya se usó. Vuelve a tocar «Vincular Telegram» en «Perfil» del sitio.",
    alreadyLinked: "✅ Este Telegram ya está vinculado a tu cuenta. No tienes que hacer nada más. (Cada enlace sirve una sola vez.)",
    unknown: "Este bot no responde preguntas directamente. Mira los botones de abajo o deja tu pregunta en la comunidad.",
    bWhat: "¿Qué es este bot?", bLink: "Cómo vincular", bStop: "Dejar de recibir avisos", bAsk: "Contacto", bSite: "Abrir el sitio",
    aWhat: "Es el bot oficial de avisos de HoldemMaster (holdemmaster.com). Envía avisos de cuenta, como premios de eventos, a los miembros que vincularon su cuenta. No es un bot de soporte por chat.",
    aLink: "Inicia sesión en el sitio → pestaña «Perfil» de la comunidad → «Vincular Telegram» → toca «START» en este bot. El enlace vale 15 minutos.",
    aStop: "Si bloqueas este bot, no te enviará más mensajes. Para borrar la vinculación, toca «Desvincular» en «Perfil» del sitio.",
    aAsk: `Este bot no responde mensajes. Deja tus preguntas en la comunidad; para problemas con tu cuenta, escribe a ${CONTACT_EMAIL}.`,
  },
  pt: {
    welcome: "Olá, aqui é o bot de avisos do HoldemMaster 🃏\nSe você vincular sua conta do site, mandamos aqui avisos como prêmios de eventos. Se tiver dúvidas, toque num botão abaixo.",
    linked: "✅ Sua conta foi vinculada. A partir de agora você recebe os avisos neste chat.\nPara parar, bloqueie este bot ou toque em «Desvincular» em «Perfil» no site.",
    linkFailed: "⚠️ O link expirou ou já foi usado. Toque de novo em «Vincular Telegram» em «Perfil» no site.",
    alreadyLinked: "✅ Este Telegram já está vinculado à sua conta. Não precisa fazer mais nada. (Cada link funciona uma vez só.)",
    unknown: "Este bot não responde perguntas diretamente. Veja os botões abaixo ou deixe sua pergunta na comunidade.",
    bWhat: "Que bot é este?", bLink: "Como vincular", bStop: "Parar avisos", bAsk: "Contato", bSite: "Abrir o site",
    aWhat: "É o bot oficial de avisos do HoldemMaster (holdemmaster.com). Ele envia avisos de conta, como prêmios de eventos, para membros que vincularam a conta. Não é um bot de atendimento por chat.",
    aLink: "Entre no site → aba «Perfil» da comunidade → «Vincular Telegram» → toque em «START» neste bot. O link vale por 15 minutos.",
    aStop: "Se você bloquear este bot, ele não manda mais mensagens. Para apagar o vínculo, toque em «Desvincular» em «Perfil» no site.",
    aAsk: `Este bot não responde mensagens. Deixe suas perguntas na comunidade; para problemas de conta, escreva para ${CONTACT_EMAIL}.`,
  },
  de: {
    welcome: "Hallo, hier ist der Benachrichtigungs-Bot von HoldemMaster 🃏\nWenn du dein Konto verknüpfst, schicken wir dir hier Hinweise wie Event-Gewinne. Bei Fragen tipp unten auf einen Button.",
    linked: "✅ Dein Konto ist verknüpft. Ab jetzt bekommst du Benachrichtigungen in diesem Chat.\nZum Beenden blockier diesen Bot oder tipp auf der Website unter «Profil» auf «Verknüpfung lösen».",
    linkFailed: "⚠️ Der Link ist abgelaufen oder wurde schon benutzt. Tipp auf der Website unter «Profil» noch einmal auf «Telegram verknüpfen».",
    alreadyLinked: "✅ Dieses Telegram ist schon mit deinem Konto verknüpft. Du musst nichts weiter tun. (Jeder Link funktioniert nur einmal.)",
    unknown: "Dieser Bot beantwortet keine Fragen direkt. Schau dir die Buttons unten an oder stell deine Frage in der Community.",
    bWhat: "Was ist dieser Bot?", bLink: "So verknüpfst du", bStop: "Benachrichtigungen aus", bAsk: "Kontakt", bSite: "Website öffnen",
    aWhat: "Der offizielle Benachrichtigungs-Bot von HoldemMaster (holdemmaster.com). Er schickt Mitgliedern mit verknüpftem Konto Kontohinweise wie Event-Gewinne. Ein Support-Chat ist er nicht.",
    aLink: "Auf der Website einloggen → Tab «Profil» in der Community → «Telegram verknüpfen» → in diesem Bot auf «START» tippen. Der Link gilt 15 Minuten.",
    aStop: "Wenn du diesen Bot blockierst, schreibt er dir nicht mehr. Um die Verknüpfung zu löschen, tipp auf der Website unter «Profil» auf «Verknüpfung lösen».",
    aAsk: `Dieser Bot beantwortet keine Nachrichten. Stell Fragen in der Community; bei Kontoproblemen schreib an ${CONTACT_EMAIL}.`,
  },
  zh: {
    welcome: "你好，这里是 HoldemMaster 通知机器人 🃏\n绑定网站账号后，我们会在这里发送活动中奖等通知。有疑问请点下方按钮。",
    linked: "✅ 账号已绑定。今后你会在这个对话里收到通知。\n想停止接收，可以屏蔽这个机器人，或在网站「我的」里点「解除绑定」。",
    linkFailed: "⚠️ 链接已过期或已被使用。请在网站「我的」里重新点「绑定 Telegram」。",
    alreadyLinked: "✅ 这个 Telegram 已经绑定到你的账号，无需其他操作。（绑定链接只能用一次。）",
    unknown: "这个机器人不直接回答问题。请看下方按钮，或把问题发到社区。",
    bWhat: "这是什么机器人？", bLink: "如何绑定", bStop: "停止通知", bAsk: "联系我们", bSite: "打开网站",
    aWhat: "这是 HoldemMaster（holdemmaster.com）官方通知机器人，会向已绑定账号的会员发送活动中奖等账号通知。它不是聊天客服机器人。",
    aLink: "登录网站 → 社区「我的」标签 → 「绑定 Telegram」 → 在打开的机器人里点「START」即可。链接 15 分钟内有效。",
    aStop: "屏蔽这个机器人后，它就不会再给你发消息。要删除绑定本身，请在网站「我的」里点「解除绑定」。",
    aAsk: `这个机器人不回复消息。问题请发到社区；账号问题请发邮件至 ${CONTACT_EMAIL}。`,
  },
  "zh-hant": {
    welcome: "你好，這裡是 HoldemMaster 通知機器人 🃏\n連結網站帳號後，我們會在這裡傳送活動中獎等通知。有疑問請點下方按鈕。",
    linked: "✅ 帳號已連結。之後你會在這個對話裡收到通知。\n想停止接收，可以封鎖這個機器人，或在網站「我的」裡點「解除連結」。",
    linkFailed: "⚠️ 連結已過期或已被使用。請在網站「我的」裡重新點「連結 Telegram」。",
    alreadyLinked: "✅ 這個 Telegram 已經連結到你的帳號，不需要其他操作。（連結只能使用一次。）",
    unknown: "這個機器人不會直接回答問題。請看下方按鈕，或把問題發到社群。",
    bWhat: "這是什麼機器人？", bLink: "如何連結", bStop: "停止通知", bAsk: "聯絡我們", bSite: "開啟網站",
    aWhat: "這是 HoldemMaster（holdemmaster.com）官方通知機器人，會向已連結帳號的會員傳送活動中獎等帳號通知。它不是聊天客服機器人。",
    aLink: "登入網站 → 社群「我的」分頁 → 「連結 Telegram」 → 在開啟的機器人裡點「START」即可。連結 15 分鐘內有效。",
    aStop: "封鎖這個機器人後，它就不會再傳訊息給你。要刪除連結本身，請在網站「我的」裡點「解除連結」。",
    aAsk: `這個機器人不回覆訊息。問題請發到社群；帳號問題請寄信至 ${CONTACT_EMAIL}。`,
  },
  fr: {
    welcome: "Salut, ici le bot de notifications de HoldemMaster 🃏\nSi tu lies ton compte du site, on t'enverra ici des alertes comme les gains d'événements. Une question ? Appuie sur un bouton ci-dessous.",
    linked: "✅ Ton compte est lié. Tu recevras désormais les alertes dans ce chat.\nPour arrêter, bloque ce bot ou appuie sur « Délier » dans « Profile » sur le site.",
    linkFailed: "⚠️ Ce lien a expiré ou a déjà servi. Appuie de nouveau sur « Lier Telegram » dans « Profile » sur le site.",
    alreadyLinked: "✅ Ce Telegram est déjà lié à ton compte. Tu n'as rien d'autre à faire. (Chaque lien ne sert qu'une fois.)",
    unknown: "Ce bot ne répond pas directement aux questions. Regarde les boutons ci-dessous ou pose ta question dans la communauté.",
    bWhat: "C'est quoi ce bot ?", bLink: "Comment lier", bStop: "Arrêter les alertes", bAsk: "Contact", bSite: "Ouvrir le site",
    aWhat: "Le bot officiel de notifications de HoldemMaster (holdemmaster.com). Il envoie des alertes de compte, comme les gains d'événements, aux membres qui ont lié leur compte. Ce n'est pas un support par chat.",
    aLink: "Connecte-toi sur le site → onglet « Profile » de la communauté → « Lier Telegram » → appuie sur « START » dans ce bot. Le lien est valable 15 minutes.",
    aStop: "Si tu bloques ce bot, il ne t'écrira plus. Pour supprimer le lien, appuie sur « Délier » dans « Profile » sur le site.",
    aAsk: `Ce bot ne répond pas aux messages. Pose tes questions dans la communauté ; pour un problème de compte, écris à ${CONTACT_EMAIL}.`,
  },
  id: {
    welcome: "Halo, ini bot notifikasi HoldemMaster 🃏\nKalau kamu menautkan akun situs, kami kirim notifikasi seperti kemenangan event ke sini. Ada pertanyaan? Ketuk tombol di bawah.",
    linked: "✅ Akunmu sudah tertaut. Mulai sekarang notifikasi masuk ke chat ini.\nUntuk berhenti, blokir bot ini atau ketuk «Lepas tautan» di «Profil» situs.",
    linkFailed: "⚠️ Tautan sudah kedaluwarsa atau sudah dipakai. Ketuk lagi «Tautkan Telegram» di «Profil» situs.",
    alreadyLinked: "✅ Telegram ini sudah tertaut ke akunmu. Tidak perlu melakukan apa-apa lagi. (Setiap tautan hanya bisa dipakai sekali.)",
    unknown: "Bot ini tidak menjawab pertanyaan secara langsung. Lihat tombol di bawah, atau tulis pertanyaanmu di komunitas.",
    bWhat: "Bot apa ini?", bLink: "Cara menautkan", bStop: "Matikan notifikasi", bAsk: "Kontak", bSite: "Buka situs",
    aWhat: "Bot notifikasi resmi HoldemMaster (holdemmaster.com). Bot ini mengirim notifikasi akun, seperti kemenangan event, ke anggota yang menautkan akunnya. Ini bukan bot layanan chat.",
    aLink: "Masuk ke situs → tab «Profil» di komunitas → «Tautkan Telegram» → ketuk «START» di bot ini. Tautan berlaku 15 menit.",
    aStop: "Kalau bot ini kamu blokir, bot tidak akan mengirim pesan lagi. Untuk menghapus tautannya, ketuk «Lepas tautan» di «Profil» situs.",
    aAsk: `Bot ini tidak membalas pesan. Tulis pertanyaan di komunitas; untuk masalah akun, kirim email ke ${CONTACT_EMAIL}.`,
  },
  ms: {
    welcome: "Hai, ini bot pemberitahuan HoldemMaster 🃏\nJika anda memautkan akaun laman, kami hantar pemberitahuan seperti kemenangan acara ke sini. Ada soalan? Tekan butang di bawah.",
    linked: "✅ Akaun anda sudah dipautkan. Mulai sekarang pemberitahuan dihantar ke sembang ini.\nUntuk berhenti, sekat bot ini atau tekan «Nyahpaut» di «Profil» laman.",
    linkFailed: "⚠️ Pautan sudah tamat tempoh atau sudah digunakan. Tekan semula «Pautkan Telegram» di «Profil» laman.",
    alreadyLinked: "✅ Telegram ini sudah dipautkan ke akaun anda. Tiada apa-apa lagi perlu dibuat. (Setiap pautan hanya boleh digunakan sekali.)",
    unknown: "Bot ini tidak menjawab soalan secara terus. Lihat butang di bawah, atau tulis soalan anda di komuniti.",
    bWhat: "Bot apakah ini?", bLink: "Cara memautkan", bStop: "Henti pemberitahuan", bAsk: "Hubungi", bSite: "Buka laman",
    aWhat: "Bot pemberitahuan rasmi HoldemMaster (holdemmaster.com). Ia menghantar pemberitahuan akaun, seperti kemenangan acara, kepada ahli yang memautkan akaun. Ia bukan bot sokongan sembang.",
    aLink: "Log masuk ke laman → tab «Profil» dalam komuniti → «Pautkan Telegram» → tekan «START» dalam bot ini. Pautan sah selama 15 minit.",
    aStop: "Jika anda menyekat bot ini, ia tidak akan menghantar mesej lagi. Untuk memadam pautan itu, tekan «Nyahpaut» di «Profil» laman.",
    aAsk: `Bot ini tidak membalas mesej. Tulis soalan di komuniti; untuk masalah akaun, e-mel ke ${CONTACT_EMAIL}.`,
  },
  hi: {
    welcome: "नमस्ते, यह HoldemMaster का सूचना बॉट है 🃏\nसाइट अकाउंट जोड़ने पर हम इवेंट जीत जैसी सूचनाएँ यहीं भेजेंगे। कोई सवाल हो तो नीचे का बटन दबाएँ।",
    linked: "✅ आपका अकाउंट जुड़ गया। अब से सूचनाएँ इसी चैट में आएँगी।\nबंद करने के लिए इस बॉट को ब्लॉक करें या साइट पर «Profile» में «कनेक्शन हटाएँ» दबाएँ।",
    linkFailed: "⚠️ यह लिंक एक्सपायर हो गया है या पहले ही इस्तेमाल हो चुका है। साइट पर «Profile» में फिर से «Telegram जोड़ें» दबाएँ।",
    alreadyLinked: "✅ यह Telegram पहले से आपके अकाउंट से जुड़ा है। और कुछ करने की ज़रूरत नहीं है। (हर लिंक सिर्फ़ एक बार काम करता है।)",
    unknown: "यह बॉट सवालों का सीधा जवाब नहीं देता। नीचे के बटन देखें या अपना सवाल कम्युनिटी में लिखें।",
    bWhat: "यह बॉट क्या है?", bLink: "कैसे जोड़ें", bStop: "सूचनाएँ बंद करें", bAsk: "संपर्क", bSite: "साइट खोलें",
    aWhat: "यह HoldemMaster (holdemmaster.com) का आधिकारिक सूचना बॉट है। जिन सदस्यों ने अकाउंट जोड़ा है, उन्हें यह इवेंट जीत जैसी अकाउंट सूचनाएँ भेजता है। यह चैट सपोर्ट बॉट नहीं है।",
    aLink: "साइट पर लॉग इन करें → कम्युनिटी का «Profile» टैब → «Telegram जोड़ें» → इस बॉट में «START» दबाएँ। लिंक 15 मिनट तक मान्य है।",
    aStop: "इस बॉट को ब्लॉक करने पर यह आपको संदेश नहीं भेजेगा। कनेक्शन ही मिटाना हो तो साइट पर «Profile» में «कनेक्शन हटाएँ» दबाएँ।",
    aAsk: `यह बॉट संदेशों का जवाब नहीं देता। सवाल कम्युनिटी में लिखें; अकाउंट की समस्या के लिए ${CONTACT_EMAIL} पर ईमेल करें।`,
  },
  vi: {
    welcome: "Chào bạn, đây là bot thông báo của HoldemMaster 🃏\nKhi liên kết tài khoản trên trang, chúng tôi sẽ gửi thông báo như trúng thưởng sự kiện vào đây. Có thắc mắc thì bấm nút bên dưới.",
    linked: "✅ Tài khoản đã được liên kết. Từ giờ bạn sẽ nhận thông báo trong cuộc trò chuyện này.\nMuốn dừng, hãy chặn bot này hoặc bấm «Hủy liên kết» trong «Hồ sơ» trên trang.",
    linkFailed: "⚠️ Liên kết đã hết hạn hoặc đã được dùng. Hãy bấm lại «Liên kết Telegram» trong «Hồ sơ» trên trang.",
    alreadyLinked: "✅ Telegram này đã được liên kết với tài khoản của bạn. Không cần làm gì thêm. (Mỗi liên kết chỉ dùng được một lần.)",
    unknown: "Bot này không trả lời câu hỏi trực tiếp. Hãy xem các nút bên dưới hoặc đăng câu hỏi lên cộng đồng.",
    bWhat: "Bot này là gì?", bLink: "Cách liên kết", bStop: "Tắt thông báo", bAsk: "Liên hệ", bSite: "Mở trang",
    aWhat: "Đây là bot thông báo chính thức của HoldemMaster (holdemmaster.com). Bot gửi thông báo tài khoản, như trúng thưởng sự kiện, cho thành viên đã liên kết tài khoản. Đây không phải bot hỗ trợ trò chuyện.",
    aLink: "Đăng nhập trên trang → tab «Hồ sơ» trong cộng đồng → «Liên kết Telegram» → bấm «START» trong bot này. Liên kết có hiệu lực 15 phút.",
    aStop: "Nếu bạn chặn bot này, bot sẽ không nhắn tin nữa. Muốn xóa liên kết, hãy bấm «Hủy liên kết» trong «Hồ sơ» trên trang.",
    aAsk: `Bot này không trả lời tin nhắn. Hãy đăng câu hỏi lên cộng đồng; vấn đề về tài khoản xin gửi email tới ${CONTACT_EMAIL}.`,
  },
  tr: {
    welcome: "Merhaba, burası HoldemMaster bildirim botu 🃏\nSite hesabını bağlarsan etkinlik kazancı gibi bildirimleri buraya göndeririz. Sorun varsa aşağıdaki düğmelere dokun.",
    linked: "✅ Hesabın bağlandı. Bundan sonra bildirimler bu sohbete gelecek.\nDurdurmak için bu botu engelle ya da sitede «Profil» altındaki «Bağlantıyı kaldır»a dokun.",
    linkFailed: "⚠️ Bağlantının süresi dolmuş ya da zaten kullanılmış. Sitede «Profil» altındaki «Telegram'ı bağla»ya yeniden dokun.",
    alreadyLinked: "✅ Bu Telegram zaten hesabına bağlı. Başka bir şey yapmana gerek yok. (Her bağlantı yalnızca bir kez çalışır.)",
    unknown: "Bu bot sorulara doğrudan cevap vermez. Aşağıdaki düğmelere bak ya da sorunu toplulukta paylaş.",
    bWhat: "Bu bot ne?", bLink: "Nasıl bağlanır", bStop: "Bildirimleri kapat", bAsk: "İletişim", bSite: "Siteyi aç",
    aWhat: "HoldemMaster'ın (holdemmaster.com) resmî bildirim botu. Hesabını bağlayan üyelere etkinlik kazancı gibi hesap bildirimleri gönderir. Sohbet destek botu değildir.",
    aLink: "Sitede giriş yap → toplulukta «Profil» sekmesi → «Telegram'ı bağla» → açılan bu botta «START»a dokun. Bağlantı 15 dakika geçerlidir.",
    aStop: "Bu botu engellersen sana artık mesaj göndermez. Bağlantının kendisini silmek için sitede «Profil» altındaki «Bağlantıyı kaldır»a dokun.",
    aAsk: `Bu bot mesajlara cevap vermez. Sorularını toplulukta paylaş; hesap sorunları için ${CONTACT_EMAIL} adresine e-posta gönder.`,
  },
  ar: {
    welcome: "مرحبًا، هذا بوت إشعارات HoldemMaster 🃏\nإذا ربطت حسابك في الموقع، سنرسل إليك هنا إشعارات مثل الفوز في الفعاليات. إن كان لديك سؤال فاضغط أحد الأزرار أدناه.",
    linked: "✅ تم ربط حسابك. من الآن ستصلك الإشعارات في هذه المحادثة.\nللإيقاف، احظر هذا البوت أو اضغط «إلغاء الربط» في «Profile» على الموقع.",
    linkFailed: "⚠️ انتهت صلاحية الرابط أو استُخدم من قبل. اضغط «ربط Telegram» مرة أخرى في «Profile» على الموقع.",
    alreadyLinked: "✅ حساب Telegram هذا مرتبط بحسابك بالفعل. لا حاجة لفعل أي شيء آخر. (كل رابط يعمل مرة واحدة فقط.)",
    unknown: "هذا البوت لا يجيب عن الأسئلة مباشرة. اطّلع على الأزرار أدناه، أو اكتب سؤالك في المجتمع.",
    bWhat: "ما هذا البوت؟", bLink: "طريقة الربط", bStop: "إيقاف الإشعارات", bAsk: "تواصل معنا", bSite: "افتح الموقع",
    aWhat: "هذا بوت الإشعارات الرسمي لموقع HoldemMaster (holdemmaster.com). يرسل إشعارات الحساب، مثل الفوز في الفعاليات، إلى الأعضاء الذين ربطوا حساباتهم. وليس بوت دعم للمحادثة.",
    aLink: "سجّل الدخول في الموقع ← تبويب «Profile» في المجتمع ← «ربط Telegram» ← اضغط «START» في هذا البوت. الرابط صالح لمدة 15 دقيقة.",
    aStop: "إذا حظرت هذا البوت فلن يرسل إليك رسائل بعد ذلك. لحذف الربط نفسه، اضغط «إلغاء الربط» في «Profile» على الموقع.",
    aAsk: `هذا البوت لا يرد على الرسائل. اكتب أسئلتك في المجتمع؛ ولمشكلات الحساب راسلنا على ${CONTACT_EMAIL}.`,
  },
  ru: {
    welcome: "Привет, это бот уведомлений HoldemMaster 🃏\nЕсли привяжешь аккаунт сайта, мы будем присылать сюда уведомления, например о выигрышах в событиях. Есть вопрос — нажми кнопку ниже.",
    linked: "✅ Аккаунт привязан. Теперь уведомления будут приходить в этот чат.\nЧтобы отключить, заблокируй бота или нажми «Отвязать» в «Profile» на сайте.",
    linkFailed: "⚠️ Ссылка устарела или уже использована. Снова нажми «Привязать Telegram» в «Profile» на сайте.",
    alreadyLinked: "✅ Этот Telegram уже привязан к твоему аккаунту. Больше ничего делать не нужно. (Каждая ссылка работает только один раз.)",
    unknown: "Этот бот не отвечает на вопросы напрямую. Посмотри кнопки ниже или задай вопрос в сообществе.",
    bWhat: "Что это за бот?", bLink: "Как привязать", bStop: "Отключить уведомления", bAsk: "Связаться", bSite: "Открыть сайт",
    aWhat: "Официальный бот уведомлений HoldemMaster (holdemmaster.com). Он присылает уведомления по аккаунту, например о выигрышах в событиях, участникам с привязанным аккаунтом. Это не бот поддержки.",
    aLink: "Войди на сайте → вкладка «Profile» в сообществе → «Привязать Telegram» → нажми «START» в этом боте. Ссылка действует 15 минут.",
    aStop: "Если заблокировать бота, он больше не будет писать. Чтобы удалить саму привязку, нажми «Отвязать» в «Profile» на сайте.",
    aAsk: `Этот бот не отвечает на сообщения. Задавай вопросы в сообществе; по проблемам с аккаунтом пиши на ${CONTACT_EMAIL}.`,
  },
};

export function botText(locale: BotLocale): BotText {
  return T[locale];
}

/** 커뮤니티 홈(프로필 탭) — KO는 루트, 나머지는 /{locale}. */
function siteHome(locale: BotLocale): string {
  return locale === "ko" ? SITE : `${SITE}/${locale}`;
}

export const FAQ_KEYS = ["what", "link", "stop", "ask"] as const;
export type FaqKey = (typeof FAQ_KEYS)[number];

export function faqAnswer(locale: BotLocale, key: FaqKey): string {
  const t = T[locale];
  return key === "what" ? t.aWhat : key === "link" ? t.aLink : key === "stop" ? t.aStop : t.aAsk;
}

export function faqKeyboard(locale: BotLocale): { inline_keyboard: InlineButton[][] } {
  const t = T[locale];
  return {
    inline_keyboard: [
      [{ text: t.bWhat, callback_data: `faq:what:${locale}` }],
      [{ text: t.bLink, callback_data: `faq:link:${locale}` }],
      [{ text: t.bStop, callback_data: `faq:stop:${locale}` }],
      [{ text: t.bAsk, callback_data: `faq:ask:${locale}` }],
      [{ text: t.bSite, url: `${siteHome(locale)}?tab=profile` }],
    ],
  };
}
